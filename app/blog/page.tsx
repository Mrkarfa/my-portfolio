import React from 'react';
import PageLayout from '@/components/PageLayout';
import Link from 'next/link';
import Image from 'next/image';

export const articles = [
  {
    slug: 'understanding-ai-in-crypto-trading',
    title: 'Understanding the Role of AI in Modern Crypto Trading',
    description: 'Explore how artificial intelligence is reshaping trading strategies and what it means for the future of crypto.',
    date: 'July 26, 2024',
    author: 'Jane Doe',
    image: '/blog/image-1.jpg',
  },
  {
    slug: 'risk-management-with-trading-bots',
    title: 'Top 5 Risk Management Strategies for Automated Trading Bots',
    description: 'Learn how to protect your capital and minimize risk while using automated trading systems like Lunexa.',
    date: 'July 22, 2024',
    author: 'John Smith',
    image: '/blog/image-2.jpg',
  },
  {
    slug: 'psychology-of-automated-trading',
    title: 'The Psychology of Letting Go: Trusting an AI with Your Trades',
    description: 'Overcoming the mental hurdles of automated trading and learning to trust the data-driven decisions of AI.',
    date: 'July 18, 2024',
    author: 'Emily White',
    image: '/blog/image-3.jpg',
  },
  {
    slug: 'backtesting-your-way-to-success',
    title: 'Backtesting 101: How to Validate Your Trading Strategy',
    description: 'A step-by-step guide to using historical data to test and refine your trading strategies before deploying them.',
    date: 'July 15, 2024',
    author: 'Chris Green',
    image: '/blog/image-4.jpg',
  },
];

const BlogPage = () => {
  return (
    <PageLayout>
      <main className="pt-24 pb-16">
        <section className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">The Lunexa Blog</h1>
          <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto text-primary/70">
            Insights, trends, and tips on AI-powered crypto trading.
          </p>
        </section>

        <section className="container mx-auto px-6 mt-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Link href={`/blog/${article.slug}`} key={article.slug}>
                <div className="group bg-surface rounded-2xl overflow-hidden border border-primary/10 h-full flex flex-col">
                  <div className="relative h-56 w-full">
                    <Image
                      src={article.image}
                      alt={article.title}
                      layout="fill"
                      objectFit="cover"
                      className="bg-background group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h2 className="text-xl font-bold text-primary group-hover:text-accent transition-colors">
                      {article.title}
                    </h2>
                    <p className="mt-3 text-primary/70 flex-grow">{article.description}</p>
                    <div className="mt-4 pt-4 border-t border-primary/10 text-sm text-primary/60">
                      <span>{article.date}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </PageLayout>
  );
};

export default BlogPage;
