import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const About = () => {
  return (
    <section className="py-24 px-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <Image
            src="/chris.jpg"
            alt="Chris Kalafatis"
            width={600}
            height={600}
            className="rounded-lg"
          />
        </div>
        <div className="md:w-1/2 md:pl-16 mt-8 md:mt-0">
          <h2 className="text-4xl font-bold">
            HELLO, MY NAME’S CHRIS, I’M A SENIOR DESIGNER AT ENVOY WHERE I CREATE
            PRODUCTS, WEBSITES, AND BRANDS.
          </h2>
          <Link
            href="/about"
            className="inline-block mt-8 text-xl font-bold underline"
          >
            learn more
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
