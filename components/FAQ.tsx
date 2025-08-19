'use client';

import React from 'react';
import AccordionItem from './AccordionItem';

const faqs = [
  {
    question: 'What is Lunexa?',
    answer: 'Lunexa is an AI-powered crypto trading platform that allows you to automate your trading strategies. Our bots analyze the market 24/7 and execute trades on your behalf based on your pre-defined parameters.',
  },
  {
    question: 'Is my money safe?',
    answer: "Yes, security is our top priority. Lunexa connects to your exchange account via encrypted API keys and does not have withdrawal permissions. Your funds always remain in your own wallet. We also employ bank-grade security measures to protect your data.",
  },
  {
    question: 'Which exchanges are supported?',
    answer: 'We support all major cryptocurrency exchanges, including Binance, Coinbase, KuCoin, Kraken, and more. We are continuously adding support for new exchanges.',
  },
  {
    question: 'Do I need trading experience to use Lunexa?',
    answer: "No, Lunexa is designed for both beginners and experienced traders. You can start with our pre-built strategies or customize your own as you learn. Our platform provides the tools you need to trade more effectively, regardless of your experience level.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-primary/70">
            Have questions? We have answers.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
