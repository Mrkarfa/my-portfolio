'use client';

import React from 'react';
import Link from 'next/link';
import { TwitterLogo, LinkedinLogo, GithubLogo } from 'phosphor-react';

const Footer = () => {
  return (
    <footer className="bg-surface text-primary/70 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Logo and Tagline */}
          <div className="flex flex-col items-start">
            <h3 className="text-2xl font-bold tracking-tighter text-primary mb-2">LUNEXA</h3>
            <p className="text-sm max-w-xs">
              AI-powered crypto trading, simplified.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-semibold text-primary mb-4">Pages</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-primary transition-colors">About</Link></li>
              <li><Link href="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Social Media */}
          <div>
            <h4 className="font-semibold text-primary mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary transition-colors"><TwitterLogo size={24} /></a>
              <a href="#" className="hover:text-primary transition-colors"><LinkedinLogo size={24} /></a>
              <a href="#" className="hover:text-primary transition-colors"><GithubLogo size={24} /></a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-primary/10 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Lunexa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
