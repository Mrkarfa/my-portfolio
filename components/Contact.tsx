import React from 'react';
import Link from 'next/link';

const Contact = () => {
  return (
    <section className="py-32 px-8">
      <div className="container mx-auto text-center">
        <h2 className="text-8xl font-bold">let&apos;s Connect</h2>
        <div className="mt-12">
          <Link
            href="/contact"
            className="inline-block px-12 py-6 text-3xl font-bold text-white bg-black rounded-full hover:bg-gray-800 transition-colors"
          >
            Write a Message
          </Link>
        </div>
        <div className="mt-24">
          <p className="text-xl">Feel Free to Connect With me on Social</p>
          <div className="flex justify-center space-x-12 mt-6 text-xl font-medium">
            <Link href="https://www.instagram.com/chriskalafatis_/" className="hover:underline">
              instagram
            </Link>
            <Link href="https://twitter.com/chriskala_" className="hover:underline">twitter</Link>
            <Link href="https://linkedin.com/in/chris-kalafatis-827197152/" className="hover:underline">
              linkedin
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
