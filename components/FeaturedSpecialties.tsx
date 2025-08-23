'use client';

import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FeaturedSpecialties = () => {
  const containerRef = useRef(null);
  const specialties = [
    { name: 'Sushi Platter', image: '/placeholder-sushi.jpg' },
    { name: 'Ramen Bowl', image: '/placeholder-ramen.jpg' },
    { name: 'Matcha Desserts', image: '/placeholder-matcha.jpg' },
  ];

  useGSAP(() => {
    gsap.from('.specialty-card', {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
      opacity: 0,
      y: 100,
      scale: 0.9,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power3.out',
    });
  }, { scope: containerRef });

  return (
    <section className="py-20 px-6 bg-surface overflow-hidden" ref={containerRef}>
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-secondary font-japanese">おすすめ</h2>
        <p className="text-xl mt-2 text-secondary">Featured Specialties</p>
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {specialties.map((item, index) => (
            <div key={index} className="group relative rounded-lg shadow-lg overflow-hidden specialty-card">
              <img src={item.image} alt={item.name} className="w-full h-64 object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white text-2xl font-bold">{item.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSpecialties;
