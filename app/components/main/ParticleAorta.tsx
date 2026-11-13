'use client';

import * as THREE from 'three';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useEffect, useMemo, useRef, useState } from 'react';

/*
 * Entrance: the aorta fills in from the arch down to the iliacs, like a
 * contrast bolus moving through it. Each particle starts a short distance
 * from its final spot, large, dim and out of focus, then eases into place
 * sharp. Paced to match the slow vessel background behind it.
 */

const START_DELAY = 0; // starts as soon as the points are ready
const SWEEP = 2.2; // seconds for the fill to travel from top to bottom
const SETTLE = 1.6; // seconds for each particle to ease into place

// Pre-sampled surface points from /models/aorta.glb (5% of vertices, ~0.4 MB
// instead of the 22 MB model), so the entrance can start right away.
const POINTS_URL = '/models/aorta-points.bin';
let pointsPromise: Promise<Float32Array> | null = null;
function loadPoints() {
    if (!pointsPromise && typeof window !== 'undefined') {
        pointsPromise = fetch(POINTS_URL)
            .then((r) => r.arrayBuffer())
            .then((b) => new Float32Array(b));
    }
    return pointsPromise;
}
// start the download as soon as this module loads
loadPoints();

const vertexShader = /* glsl */ `
    uniform float uTime;
    uniform float uSize;
    uniform float uScale;
    attribute vec3 aOffset;
    attribute float aDelay;
    varying float vAlpha;
    varying float vSoft;

    void main() {
        float t = clamp((uTime - aDelay) / ${SETTLE.toFixed(2)}, 0.0, 1.0);
        float e = 1.0 - pow(1.0 - t, 3.0);          // ease out
        vec3 p = position + aOffset * (1.0 - e);
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        gl_Position = projectionMatrix * mv;

        // a faint brighter front where particles are just arriving
        float front = smoothstep(0.0, 0.25, t) * (1.0 - smoothstep(0.25, 0.9, t));
        vAlpha = e * e + front * 0.35;
        vSoft = 1.0 - e;
        gl_PointSize = uSize * (1.0 + 2.5 * vSoft) * (uScale / -mv.z);
    }
`;

const fragmentShader = /* glsl */ `
    uniform vec3 uColor;
    varying float vAlpha;
    varying float vSoft;

    void main() {
        float d = length(gl_PointCoord - 0.5);
        // crisp dot once settled, soft disc while arriving
        float edge = mix(0.38, 0.0, vSoft);
        float a = 1.0 - smoothstep(edge, 0.5, d);
        a *= vAlpha * mix(1.0, 0.35, vSoft);
        if (a < 0.01) discard;
        gl_FragColor = vec4(uColor, a);
    }
`;

function AortaParticles({ source }: { source: Float32Array }) {
    const pointsRef = useRef<THREE.Points>(null);
    const { size, gl } = useThree();
    const reduce = useMemo(
        () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
        []
    );

    const geometry = useMemo(() => {
        const spreadFactor = 2.0;
        const final = Array.from(source, (v) => v * spreadFactor);

        // model z is the vertical axis on screen (mesh is rotated -90deg on x)
        let zMin = Infinity, zMax = -Infinity, span = 0;
        for (let i = 0; i < final.length; i += 3) {
            zMin = Math.min(zMin, final[i + 2]);
            zMax = Math.max(zMax, final[i + 2]);
        }
        let xMin = Infinity, xMax = -Infinity;
        for (let i = 0; i < final.length; i += 3) {
            xMin = Math.min(xMin, final[i]);
            xMax = Math.max(xMax, final[i]);
        }
        span = Math.max(zMax - zMin, xMax - xMin);

        const n = final.length / 3;
        const offsets = new Float32Array(n * 3);
        const delays = new Float32Array(n);
        for (let i = 0; i < n; i++) {
            // short, random direction drift; no bounding box to give it away
            const u = Math.random() * 2 - 1;
            const th = Math.random() * Math.PI * 2;
            const r = span * (0.03 + Math.random() * 0.05);
            const s = Math.sqrt(1 - u * u);
            offsets[i * 3] = r * s * Math.cos(th);
            offsets[i * 3 + 1] = r * s * Math.sin(th);
            offsets[i * 3 + 2] = r * u + span * 0.02; // slight settle downward

            const along = (zMax - final[i * 3 + 2]) / Math.max(1e-6, zMax - zMin); // 0 at arch, 1 at iliacs
            delays[i] = START_DELAY + along * SWEEP + Math.random() * 0.4;
        }

        const geo = new THREE.BufferGeometry();
        geo.setAttribute('position', new THREE.Float32BufferAttribute(final, 3));
        geo.setAttribute('aOffset', new THREE.BufferAttribute(offsets, 3));
        geo.setAttribute('aDelay', new THREE.BufferAttribute(delays, 1));
        return geo;
    }, [source]);

    const material = useMemo(
        () =>
            new THREE.ShaderMaterial({
                vertexShader,
                fragmentShader,
                transparent: true,
                depthWrite: false,
                uniforms: {
                    uTime: { value: reduce ? 100 : 0 },
                    uSize: { value: 0.01 },
                    uScale: { value: 1 },
                    uColor: { value: new THREE.Color('#DBE3F2') },
                },
            }),
        [reduce]
    );

    // match three's PointsMaterial size attenuation
    useEffect(() => {
        material.uniforms.uScale.value = (size.height / 2) * gl.getPixelRatio();
    }, [material, size.height, gl]);

    // time from when the points first render, not from canvas mount
    const t0 = useRef<number | null>(null);
    useFrame(({ clock }, delta) => {
        if (t0.current === null) t0.current = clock.getElapsedTime();
        const elapsed = clock.getElapsedTime() - t0.current;
        if (!reduce) material.uniforms.uTime.value = elapsed;
        // rotation eases in as the fill completes instead of starting abruptly
        if (pointsRef.current && !reduce) {
            const ramp = THREE.MathUtils.smoothstep(elapsed, START_DELAY + SWEEP * 0.5, START_DELAY + SWEEP + SETTLE);
            pointsRef.current.rotation.z += 0.12 * delta * ramp;
        }
    });

    return (
        <points
            ref={pointsRef}
            geometry={geometry}
            material={material}
            scale={[3.5, 2.0, 2.0]}
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, -0.8, 0]}
        />
    );
}

export default function ParticleAorta() {
    const [source, setSource] = useState<Float32Array | null>(null);
    useEffect(() => {
        let alive = true;
        loadPoints()?.then((p) => alive && setSource(p));
        return () => {
            alive = false;
        };
    }, []);

    return (
        <div style={{ width: '100%', height: '100%' }}>
            <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
                {source && <AortaParticles source={source} />}
                <OrbitControls target={[0, 0, 0]} enableZoom={false} enablePan={false} enableRotate={false} />
            </Canvas>
        </div>
    );
}
