'use client';

import React from 'react';
import { motion } from 'framer-motion';

const FeaturedIn = () => {
  const logos = ['TechCrunch', 'Forbes', 'Bloomberg', 'CoinDesk', 'Decrypt'];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-6 text-center">
        <h3 className="text-sm font-bold uppercase text-primary/50 tracking-widest">
          As Featured In
        </h3>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="mt-8 grid grid-cols-2 md:grid-cols-5 gap-8 items-center"
        >
          {logos.map((logo) => (
            <motion.div key={logo} variants={itemVariants}>
              <p className="text-2xl font-medium text-primary/60">{logo}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedIn;
