'use client';

import React from 'react';
import Link from 'next/link';

const Footer = ({ 'data-scroll-section': dataScrollSection }: { 'data-scroll-section'?: any }) => {
  return (
    <footer className="bg-surface text-secondary py-12" data-scroll-section={dataScrollSection}>
      <div className="container mx-auto px-6 text-center">
        <div className="mb-4">
          <Link href="/" className="text-2xl font-bold font-japanese text-secondary hover:text-primary transition-colors">
            桜カフェ
          </Link>
        </div>
        <div className="flex justify-center space-x-6 mb-8">
          <Link href="/menu" className="hover:text-primary transition-colors">Menu</Link>
          <Link href="/gallery" className="hover:text-primary transition-colors">Gallery</Link>
          <Link href="/about-us" className="hover:text-primary transition-colors">About Us</Link>
          <Link href="/location-contact" className="hover:text-primary transition-colors">Contact</Link>
        </div>
        <div className="text-sm">
          <p>&copy; {new Date().getFullYear()} Sakura Café. All rights reserved.</p>
          <p className="mt-2">心を込めて (Made with heart)</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
