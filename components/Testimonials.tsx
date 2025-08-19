'use client';

import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "Lunexa's AI is a game-changer. I've seen a 40% increase in my portfolio's performance in just three months. It's like having a professional trader working for me 24/7.",
    name: 'Sarah J.',
    title: 'Crypto Enthusiast',
    result: '+40% Portfolio Growth',
  },
  {
    quote: "As someone new to crypto, I was intimidated. Lunexa made it incredibly simple to get started, and their AI has consistently outperformed my manual trades. Highly recommended!",
    name: 'Mike D.',
    title: 'New Investor',
    result: '85% Win Rate',
  },
  {
    quote: "The level of automation and strategy customization is unparalleled. I can set my risk tolerance and let the AI do the heavy lifting. Finally, I can sleep at night.",
    name: 'Chen L.',
    title: 'Experienced Trader',
    result: '-30% Risk Exposure',
  },
   {
    quote: "I was skeptical about AI trading, but Lunexa proved me wrong. The platform is secure, the results are transparent, and my returns have been fantastic. It's a must-have tool.",
    name: 'Emily R.',
    title: 'Tech Analyst',
    result: '+25% ROI in 60 Days',
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-surface">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">
            Trusted by Traders Worldwide
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-primary/70">
            See how our users are leveraging Lunexa to elevate their trading game.
          </p>
        </div>

        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-8"
            animate={{ x: ['0%', '-100%'] }}
            transition={{
              ease: 'linear',
              duration: 30,
              repeat: Infinity,
              repeatType: 'loop',
              repeatDelay: 0,
            }}
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div key={index} className="flex-shrink-0 w-[90vw] md:w-[450px] bg-background/50 p-8 rounded-2xl border border-primary/10 backdrop-blur-md">
                <p className="text-lg text-primary/80">"{testimonial.quote}"</p>
                <div className="mt-6">
                  <p className="font-bold text-primary">{testimonial.name}</p>
                  <p className="text-sm text-primary/60">{testimonial.title}</p>
                </div>
                <div className="mt-4 pt-4 border-t border-primary/10">
                  <p className="font-semibold text-accent">{testimonial.result}</p>
                </div>
              </div>
            ))}
          </motion.div>
          <div className="absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-surface to-transparent" />
          <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-surface to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
