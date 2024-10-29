import React from 'react';
import { Globe2 } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="container mx-auto px-6 py-6 flex items-center justify-between">
      <div className="flex items-center gap-2 text-2xl font-bold">
        <Globe2 className="h-8 w-8 text-purple-500" />
        <span>CommercePy</span>
      </div>
      <div className="hidden md:flex items-center gap-8">
        <a href="/#services" className="hover:text-purple-400 transition-colors">Services</a>
        <a href="/#portfolio" className="hover:text-purple-400 transition-colors">Portfolio</a>
        <a href="/#about" className="hover:text-purple-400 transition-colors">About</a>
        <a href="/#contact" className="bg-purple-500 hover:bg-purple-600 px-4 py-2 rounded-lg transition-colors">
          Contact Us
        </a>
      </div>
    </nav>
  );
}