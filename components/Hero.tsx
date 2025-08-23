'use client';

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import CherryBlossomScene from './CherryBlossomScene';

const Hero = () => {
  return (
    <section className="relative h-screen w-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <CherryBlossomScene />
        </Suspense>
      </Canvas>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-6xl md:text-8xl font-japanese text-white" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
          桜カフェ
        </h1>
        <p className="text-2xl md:text-4xl text-white mt-4" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.5)' }}>
          Sakura Café
        </p>
      </div>
    </section>
  );
};

export default Hero;
