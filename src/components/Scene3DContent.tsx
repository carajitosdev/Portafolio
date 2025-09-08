'use client';
import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = clock.getElapsedTime();
      meshRef.current.scale.x = meshRef.current.scale.y = meshRef.current.scale.z = 
        1 + Math.sin(clock.getElapsedTime()) * 0.2;
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshNormalMaterial wireframe />
    </mesh>
  );
}

export default function Scene3DContent() {
  return (
    <div className="absolute inset-0">
      <Canvas>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} />
        <AnimatedSphere />
      </Canvas>
    </div>
  );
}
