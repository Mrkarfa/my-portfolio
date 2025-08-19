import React from 'react';
import PageLayout from '@/components/PageLayout';
import Image from 'next/image';

const AboutPage = () => {
  return (
    <PageLayout>
      <main className="pt-24 pb-16">
        <section className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">About Lunexa</h1>
          <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-primary/70">
            We are a team of technologists, traders, and innovators passionate about the future of finance.
          </p>
        </section>

        <section className="container mx-auto px-6 mt-16">
          <Image
            src="/team-placeholder.jpg" // Assuming a placeholder image exists
            alt="Lunexa Team"
            width={1200}
            height={500}
            className="rounded-2xl object-cover h-96 bg-surface"
          />
        </section>

        <section className="container mx-auto px-6 mt-16 max-w-4xl">
          <div className="prose prose-invert lg:prose-xl mx-auto text-primary/80">
            <p>
              Lunexa was founded on a simple principle: to make sophisticated trading tools accessible to everyone. The world of cryptocurrency is filled with opportunity, but it's also complex and volatile. For too long, the most powerful automated trading technologies have been locked away in the hands of large financial institutions. We decided to change that.
            </p>
            <p>
              Our team brings together decades of experience in artificial intelligence, quantitative finance, and software engineering. We spent years developing and refining our proprietary AI engine, training it on vast datasets to recognize patterns and execute trades with precision and speed.
            </p>
            <p>
              But technology is only half of the story. We are deeply committed to our users' success and security. We built our platform to be intuitive, transparent, and secure, ensuring that you are always in control of your assets. Our mission is not just to provide a tool, but to provide a partner in your financial journey.
            </p>
            <p>
              Thank you for joining us. Together, we can build a more open and equitable financial future.
            </p>
          </div>
        </section>
      </main>
    </PageLayout>
  );
};

export default AboutPage;
