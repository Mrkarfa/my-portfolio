'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const title = 'Multi Disciplinary Designer';

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-8">
      <motion.h1
        className="text-7xl md:text-9xl font-bold tracking-tighter"
        variants={textVariants}
        initial="hidden"
        animate="visible"
      >
        {title.split(' ').map((word, wordIndex) => (
          <motion.span key={wordIndex} className="inline-block mr-6">
            {word.split('').map((char, charIndex) => (
              <motion.span
                key={charIndex}
                variants={letterVariants}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
          </motion.span>
        ))}
      </motion.h1>
      <motion.p
        className="mt-12 text-xl md:text-2xl max-w-3xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        Creative thinking and problem solving are where my mind wanders, using my
        knowledge and passion for design as my medium.
      </motion.p>
    </section>
  );
};

export default Hero;
