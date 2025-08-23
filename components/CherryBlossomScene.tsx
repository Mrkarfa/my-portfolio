'use client';

import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const CherryBlossomScene = () => {
  const pointsRef = useRef<THREE.Points>(null);

  const numPetals = 5000;
  const positions = useMemo(() => {
    const pos = new Float32Array(numPetals * 3);
    for (let i = 0; i < numPetals; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = Math.random() * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return pos;
  }, [numPetals]);

  useFrame(() => {
    if (pointsRef.current) {
      const positions = pointsRef.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < numPetals; i++) {
        positions[i * 3 + 1] -= 0.01; // Fall down
        positions[i * 3] += Math.sin(positions[i * 3 + 1] * 2) * 0.005; // Sway
        if (positions[i * 3 + 1] < -5) {
          positions[i * 3 + 1] = 10; // Reset to top
        }
      }
      pointsRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={numPetals}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#FFB7C5" transparent opacity={0.7} />
    </points>
  );
};

export default CherryBlossomScene;
