'use client';

import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { useMemo, useRef } from 'react';

/**
 * PythiaAorta — dense electric-blue point cloud of the aortic mesh.
 *
 * Each point is a small square (default Points-material rendering), additive-blended
 * against a dark background so overlapping points naturally brighten into a glow. The
 * effect reads as "sampled data points in the shape of the aorta" — appropriate for a
 * frontier multimodal model.
 */
function AortaPoints() {
    const { nodes } = useGLTF('/models/aorta.glb');
    const pointsRef = useRef<THREE.Points>(null);

    const geometry = useMemo(() => {
        const meshes = Object.values(nodes).filter(
            (node) => (node as THREE.Mesh).isMesh && (node as THREE.Mesh).geometry,
        ) as THREE.Mesh[];

        const positions: number[] = [];
        const samplingRate = 0.18; // ~18% of vertices — dense enough to read as a shape, sparse enough to feel like data

        meshes.forEach((mesh) => {
            const source = mesh.geometry.attributes.position.array;
            for (let i = 0; i < source.length; i += 3) {
                if (Math.random() > samplingRate) continue;
                positions.push(source[i], source[i + 1], source[i + 2]);
            }
        });

        const geo = new THREE.BufferGeometry();
        geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
        return geo;
    }, [nodes]);

    // Continuous slow rotation around the vertical axis. After the outer-group -π/2 X
    // rotation correcting the mesh orientation, the local Z axis is world-up.
    useFrame(({ clock }) => {
        if (!pointsRef.current) return;
        const t = clock.getElapsedTime();
        pointsRef.current.rotation.z = t * 0.18;
    });

    return (
        <group rotation={[-Math.PI / 2, 0, 0]} scale={6} position={[0, -1.3, 0]}>
            <points ref={pointsRef} geometry={geometry}>
                <pointsMaterial
                    color="#4D72FF"
                    size={0.018}
                    transparent
                    opacity={0.95}
                    blending={THREE.AdditiveBlending}
                    depthWrite={false}
                    sizeAttenuation
                />
            </points>
        </group>
    );
}

const WireframeAorta: React.FC = () => {
    return (
        <Canvas
            camera={{ position: [0, 0, 3.5], fov: 50 }}
            gl={{ antialias: true, alpha: true }}
            className="w-full h-full"
        >
            <AortaPoints />
        </Canvas>
    );
};

export default WireframeAorta;
