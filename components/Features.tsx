'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Brain, ShieldCheck, ChartLineUp, Infinity as InfinityIcon } from 'phosphor-react';

const features = [
  {
    icon: <Brain size={28} className="text-accent" />,
    title: 'Advanced AI Engine',
    description: 'Our proprietary AI analyzes millions of data points to identify high-probability trading opportunities.',
  },
  {
    icon: <ShieldCheck size={28} className="text-accent" />,
    title: 'Bank-Grade Security',
    description: 'Your funds and data are protected with end-to-end encryption and industry-leading security protocols.',
  },
  {
    icon: <ChartLineUp size={28} className="text-accent" />,
    title: 'Real-Time Analytics',
    description: 'Monitor your performance with a customizable dashboard and get transparent insights into every trade.',
  },
  {
    icon: <InfinityIcon size={28} className="text-accent" />,
    title: 'Unlimited Strategies',
    description: 'Deploy as many bots as you want, test countless strategies, and diversify across multiple pairs.',
  },
];

const Features = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, filter: 'blur(10px)' },
    visible: { opacity: 1, scale: 1, filter: 'blur(0px)', transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section id="features" className="py-16 sm:py-24 bg-surface">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">
            Powerful Features, Seamlessly Integrated
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-primary/70">
            Everything you need to elevate your trading strategy.
          </p>
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-background/50 p-8 rounded-2xl border border-primary/10 backdrop-blur-lg h-full flex flex-col"
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-background mb-5">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-primary/70 flex-grow">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
