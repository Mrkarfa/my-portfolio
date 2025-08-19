'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const MissionStatement = () => {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="order-2 md:order-1">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">
              Our Mission: To Democratize Trading
            </h2>
            <p className="mt-6 text-lg text-primary/70">
              The world of cryptocurrency is complex and often unforgiving. We
              built Lunexa to level the playing field. Our mission is to empower
              individual investors with the same advanced AI tools and data that
              were once only available to large financial institutions.
            </p>
            <p className="mt-4 text-lg text-primary/70">
              We believe that everyone deserves the opportunity to build wealth,
              and we're committed to providing a platform that is powerful,
              intuitive, and secure.
            </p>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="w-80 h-80 bg-surface rounded-full flex items-center justify-center border border-primary/10">
               <Image
                src="/globe.svg"
                alt="Abstract globe"
                width={200}
                height={200}
                className="opacity-50"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionStatement;
