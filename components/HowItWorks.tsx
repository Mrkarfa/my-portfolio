'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Wallet, Robot, TrendUp } from 'phosphor-react';

const steps = [
  {
    icon: <Wallet size={32} className="text-accent" />,
    title: 'Connect Your Wallet',
    description: 'Securely link your crypto exchange or wallet in just a few clicks. Your assets always stay in your control.',
  },
  {
    icon: <Robot size={32} className="text-accent" />,
    title: 'Set Up Your AI Assistant',
    description: 'Choose from pre-built strategies or customize your own. Set your risk parameters and let our AI do the analysis.',
  },
  {
    icon: <TrendUp size={32} className="text-accent" />,
    title: 'Automate Your Trading',
    description: 'Activate your bot and watch it execute trades 24/7 based on your strategy. Track performance from your dashboard.',
  },
];

const HowItWorks = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, filter: 'blur(10px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.7, ease: 'easeOut' } },
  };

  return (
    <section id="how-it-works" className="py-16 sm:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">
            Get Started in Three Simple Steps
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-primary/70">
            Lunexa is designed for simplicity and power.
          </p>
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-surface/50 p-8 rounded-2xl border border-primary/10 backdrop-blur-lg"
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-background mb-6">
                {step.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
              <p className="text-primary/70 mb-6">{step.description}</p>
              <div className="w-full h-48 bg-background/50 rounded-lg border border-primary/10 flex items-center justify-center">
                <p className="text-primary/50 text-sm">Image Placeholder</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
