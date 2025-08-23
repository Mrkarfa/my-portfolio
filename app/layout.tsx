'use client';

import './globals.css';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import React, { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Transition from '@/components/Transition';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const containerRef = useRef(null);
  const locomotiveScrollRef = useRef<any>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (!containerRef.current) return;

    import('locomotive-scroll').then((locomotiveModule) => {
      const scroll = new locomotiveModule.default({
        el: containerRef.current,
        smooth: true,
        lerp: 0.1,
      });
      locomotiveScrollRef.current = scroll;
    });

    return () => {
      if (locomotiveScrollRef.current) {
        locomotiveScrollRef.current.destroy();
        locomotiveScrollRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (locomotiveScrollRef.current) {
      setTimeout(() => {
        locomotiveScrollRef.current.update();
      }, 500);
    }
  }, [pathname]);

  return (
    <html lang="en">
      <body className="font-inter font-light antialiased bg-background text-primary">
        <div ref={containerRef} data-scroll-container>
          <Header />
          <AnimatePresence mode="wait">
            <motion.div key={pathname} data-scroll-section>
              <Transition />
              {children}
            </motion.div>
          </AnimatePresence>
          <Footer data-scroll-section />
        </div>
      </body>
    </html>
  );
}
