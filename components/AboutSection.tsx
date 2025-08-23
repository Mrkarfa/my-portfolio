'use client';

import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none none',
      },
    });

    tl.from(imageRef.current, {
      x: -100,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
    }).from(textRef.current, {
      x: 100,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
    }, '-=0.8');
  }, { scope: containerRef });

  return (
    <section className="py-20 px-6 bg-background overflow-hidden" ref={containerRef}>
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div ref={imageRef}>
          <img src="/placeholder-village.jpg" alt="Japanese Village" className="rounded-lg shadow-lg" />
        </div>
        <div className="text-secondary" ref={textRef}>
          <h2 className="text-4xl font-bold font-japanese">心を込めて</h2>
          <p className="text-xl mt-4">Made with heart</p>
          <p className="mt-6 text-lg">
            Our café is a sanctuary of tranquility, blending traditional Japanese aesthetics with modern comfort. We are dedicated to the art of "Omotenashi" – the Japanese philosophy of heartfelt hospitality.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
