'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';

const Footer = dynamic(() => import('@/components/Footer'), { ssr: false });

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        {children}
      </motion.main>
      <Footer />
    </>
  );
};

export default PageLayout;
