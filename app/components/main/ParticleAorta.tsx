'use client';

import * as THREE from 'three';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { useEffect, useMemo, useRef } from 'react';

/*
 * Entrance: the aorta fills in from the arch down to the iliacs, like a
 * contrast bolus moving through it. Each particle starts a short distance
 * from its final spot, large, dim and out of focus, then eases into place
 * sharp. Paced to match the slow vessel background behind it.
 */

const START_DELAY = 0.8; // seconds before the first particles appear
const SWEEP = 3.2; // seconds for the fill to travel from top to bottom
const SETTLE = 2.4; // seconds for each particle to ease into place

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

function AortaParticles() {
    const { nodes } = useGLTF('/models/aorta.glb');
    const pointsRef = useRef<THREE.Points>(null);
    const { size, gl } = useThree();
    const reduce = useMemo(
        () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
        []
    );

    const geometry = useMemo(() => {
        const meshes = Object.values(nodes).filter((node: any) => node.isMesh && node.geometry);
        const spreadFactor = 2.0;
        const samplingRate = 0.05; // 5% of points

        const final: number[] = [];
        meshes.forEach((mesh: any) => {
            const source = mesh.geometry.attributes.position.array;
            for (let i = 0; i < source.length; i += 3) {
                if (Math.random() > samplingRate) continue;
                final.push(source[i] * spreadFactor, source[i + 1] * spreadFactor, source[i + 2] * spreadFactor);
            }
        });

        // model z is the vertical axis on screen (mesh is rotated -90deg on x)
        let zMin = Infinity, zMax = -Infinity, span = 0;
        for (let i = 0; i < final.length; i += 3) {
            zMin = Math.min(zMin, final[i + 2]);
            zMax = Math.max(zMax, final[i + 2]);
        }
        const xs = final.filter((_, i) => i % 3 === 0);
        span = Math.max(zMax - zMin, Math.max(...xs) - Math.min(...xs));

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
            delays[i] = START_DELAY + along * SWEEP + Math.random() * 0.6;
        }

        const geo = new THREE.BufferGeometry();
        geo.setAttribute('position', new THREE.Float32BufferAttribute(final, 3));
        geo.setAttribute('aOffset', new THREE.BufferAttribute(offsets, 3));
        geo.setAttribute('aDelay', new THREE.BufferAttribute(delays, 1));
        return geo;
    }, [nodes]);

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

    useFrame(({ clock }, delta) => {
        const elapsed = clock.getElapsedTime();
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
    return (
        <div style={{ width: '100%', height: '100%' }}>
            <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
                <AortaParticles />
                <OrbitControls target={[0, 0, 0]} enableZoom={false} enablePan={false} enableRotate={false} />
            </Canvas>
        </div>
    );
}
