'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'phosphor-react';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center pt-32 pb-16 px-6">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center"
      >
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold tracking-tighter max-w-4xl"
        >
          Trade Smarter, Not Harder.
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="mt-6 text-lg md:text-xl max-w-2xl text-primary/70"
        >
          Welcome to the future of crypto trading. Lunexa’s AI-powered bots
          analyze the market 24/7, so you can automate your strategy and
          maximize your returns.
        </motion.p>
        <motion.div variants={itemVariants} className="mt-10">
          <button className="group relative font-semibold text-lg px-8 py-4 bg-background text-primary rounded-lg shadow-neumorphic-light hover:shadow-neumorphic-light-inset transition-all duration-300">
            Get Started for Free
            <span className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:right-3 transition-all duration-300">
              <ArrowRight weight="bold" />
            </span>
            <span className="absolute top-0 left-0 w-full h-full rounded-lg bg-accent/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
          </button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, delay: 1, ease: 'easeOut' }}
        className="w-full max-w-6xl h-96 mt-20 bg-surface/50 rounded-2xl border border-primary/10 flex justify-center items-center"
      >
        <p className="text-primary/50">Product UI Mockup Placeholder</p>
      </motion.div>
    </section>
  );
};

export default Hero;
