'use client';

import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import {
    Environment,
    OrbitControls,
    PointMaterial,
    useGLTF,
} from '@react-three/drei';
import { useMemo, useRef } from 'react';

function AortaParticles() {
    const { nodes } = useGLTF('/models/aorta.glb');
    const pointsRef = useRef<THREE.Points>(null);

    const { geometry, randomPositions, finalPositions } = useMemo(() => {
        const meshes = Object.values(nodes).filter(
            (node: any) => node.isMesh && node.geometry
        );

        const final: number[] = [];
        const random: number[] = [];

        const spreadFactor = 2.0;
        
        const samplingRate = 0.05; // 5% of points

        meshes.forEach((mesh: any) => {
            const source = mesh.geometry.attributes.position.array;
            for (let i = 0; i < source.length; i += 3) {
                if (Math.random() > samplingRate) continue;

                final.push(
                    source[i] * spreadFactor,
                    source[i + 1] * spreadFactor,
                    source[i + 2] * spreadFactor
                );
                random.push(
                    (Math.random() - 0.5) * 5,
                    (Math.random() - 0.5) * 5,
                    (Math.random() - 0.5) * 5
                );
            }
        });

        const geo = new THREE.BufferGeometry();
        geo.setAttribute('position', new THREE.Float32BufferAttribute(random, 3));

        return {
            geometry: geo,
            randomPositions: random,
            finalPositions: final,
        }
        
      }, [nodes]);

      useFrame(({ clock }) => {
        const elapsed = clock.getElapsedTime();
        const progress = Math.min(elapsed / 1.5, 1);
        
        const posAttr = pointsRef.current!.geometry.attributes.position as THREE.BufferAttribute;

        for (let i = 0; i < posAttr.count; i++) {
            const i3 = i * 3;
            
            posAttr.array[i3] = THREE.MathUtils.lerp(
                randomPositions[i3],
                finalPositions[i3],
                progress
            );

            posAttr.array[i3 + 1] = THREE.MathUtils.lerp(
                randomPositions[i3 + 1],
                finalPositions[i3 + 1],
                progress
            );

            posAttr.array[i3 + 2] = THREE.MathUtils.lerp(
                randomPositions[i3 + 2],
                finalPositions[i3 + 2],
                progress
            );
        }

        posAttr.needsUpdate = true;

        // slow y-axis rotation
        if (progress === 1 && pointsRef.current) {
            pointsRef.current.rotation.z += 0.002;
        }
      })
    
    return (
        <points 
            ref={pointsRef} 
            geometry={geometry} 
            scale={[3.5, 2.0, 2.0]} 
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, -0.8, 0]}
        >
            <PointMaterial
                transparent
                color="#DBE3F2"
                size={0.01}
                sizeAttenuation
                depthWrite={false}
                opacity={1}
            />
        </points>
    )
}

export default function ParticleAorta() {
    return (
        <div style={{ width: '100%', height: '100vh' }}>
            <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
                <ambientLight intensity={0.5}/>
                <Environment preset='sunset'/>
                <AortaParticles />
                <OrbitControls target={[0, 0, 0]} />
            </Canvas>
        </div>
    );
}