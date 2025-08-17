import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 py-6">
      <div className="text-2xl font-bold">
        <Link href="/">CK.</Link>
      </div>
      <nav className="flex space-x-8 font-bold">
        <Link href="/projects">PROJECTS</Link>
        <Link href="/about">ABOUT</Link>
      </nav>
    </header>
  );
};

export default Header;
