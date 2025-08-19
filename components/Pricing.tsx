'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'phosphor-react';

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: '/ month',
    description: 'For individuals getting started with AI-powered trading.',
    features: [
      '1 Connected Exchange',
      '3 Active Trading Bots',
      'Basic Analytics',
      'Community Support',
    ],
    isRecommended: false,
  },
  {
    name: 'Pro',
    price: '$49',
    period: '/ month',
    description: 'For serious traders who want to maximize their potential.',
    features: [
      '5 Connected Exchanges',
      'Unlimited Trading Bots',
      'Advanced Analytics & Insights',
      'Priority Support',
      'Strategy Backtesting',
    ],
    isRecommended: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For institutions and high-volume trading firms.',
    features: [
      'Unlimited Exchanges',
      'Dedicated Infrastructure',
      'API Access',
      '24/7 Dedicated Support',
      'Custom Integrations',
    ],
    isRecommended: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-16 sm:py-24 bg-surface">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">
            Find the Perfect Plan
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-primary/70">
            Start for free, upgrade when you're ready.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative bg-background p-8 rounded-2xl border ${
                plan.isRecommended ? 'border-accent' : 'border-primary/10'
              }`}
            >
              {plan.isRecommended && (
                <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
                  <span className="bg-accent text-background font-semibold text-sm px-4 py-1 rounded-full">
                    RECOMMENDED
                  </span>
                </div>
              )}
              <h3 className="text-2xl font-bold text-primary">{plan.name}</h3>
              <p className="text-primary/60 mt-2">{plan.description}</p>
              <div className="my-8">
                <span className="text-5xl font-bold">{plan.price}</span>
                <span className="text-primary/50">{plan.period}</span>
              </div>
              <button
                className={`w-full py-3 font-semibold rounded-lg transition-colors ${
                  plan.isRecommended
                    ? 'bg-accent text-background hover:bg-accent/90'
                    : 'bg-surface hover:bg-surface/70'
                }`}
              >
                {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
              </button>
              <ul className="mt-8 space-y-4">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center">
                    <Check size={20} className="text-accent mr-3 flex-shrink-0" />
                    <span className="text-primary/80">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
