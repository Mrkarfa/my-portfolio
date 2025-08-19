'use client';

import React from 'react';
import PageLayout from '@/components/PageLayout';
import { motion } from 'framer-motion';
import { ArrowRight } from 'phosphor-react';

const ContactPage = () => {
  return (
    <PageLayout>
      <main className="pt-24 pb-16">
        <section className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">Contact Us</h1>
          <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto text-primary/70">
            Have a question or want to work with us? Drop us a line.
          </p>
        </section>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="container mx-auto px-6 mt-16 max-w-2xl"
        >
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-primary/80 mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full bg-surface border border-primary/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-primary/80 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full bg-surface border border-primary/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-primary/80 mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full bg-surface border border-primary/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent"
              ></textarea>
            </div>
            <div className="text-right">
                <button type="submit" className="group relative font-semibold text-lg px-8 py-4 bg-background text-primary rounded-lg shadow-neumorphic-light hover:shadow-neumorphic-light-inset transition-all duration-300">
                    Send Message
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:right-3 transition-all duration-300">
                        <ArrowRight weight="bold" />
                    </span>
                    <span className="absolute top-0 left-0 w-full h-full rounded-lg bg-accent/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                </button>
            </div>
          </form>
        </motion.section>
      </main>
    </PageLayout>
  );
};

export default ContactPage;
