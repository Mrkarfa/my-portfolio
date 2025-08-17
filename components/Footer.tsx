'use client';

import React from 'react';
import { motion, RepeatType, Easing } from 'framer-motion';

const Footer = () => {
  const marqueeVariants = {
    animate: {
      x: ['-100%', '0%'],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop' as RepeatType,
          duration: 40,
          ease: 'linear' as Easing,
        },
      },
    },
  };

  return (
    <footer className="py-12 md:py-16 bg-black text-white overflow-hidden">
      <motion.div
        className="text-6xl md:text-9xl font-bold whitespace-nowrap"
        variants={marqueeVariants}
        animate="animate"
      >
        <span className="mr-8">CHRIS KALAFATIS.</span>
        <span className="mr-8">CHRIS KALAFATIS.</span>
        <span className="mr-8">CHRIS KALAFATIS.</span>
        <span className="mr-8">CHRIS KALAFATIS.</span>
      </motion.div>
    </footer>
  );
};

export default Footer;
