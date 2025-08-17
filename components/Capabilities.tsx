'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';

const capabilities = [
  'Art Direction',
  'Web Design',
  'Branding',
  'UI/UX Design',
  'Product Design',
  'Graphic Design',
  'Motion Graphics',
];

const Capabilities = () => {
  const constraintsRef = useRef(null);

  return (
    <section className="py-32 px-8 bg-black text-white">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold">Capabilities</h2>
          <p className="text-xl mt-6">
            Project types I specialize in
          </p>
        </div>
        <div className="overflow-hidden cursor-grab" ref={constraintsRef}>
          <motion.div
            className="flex space-x-12"
            drag="x"
            dragConstraints={constraintsRef}
          >
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className="flex-shrink-0 text-8xl font-bold"
              >
                {capability}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
