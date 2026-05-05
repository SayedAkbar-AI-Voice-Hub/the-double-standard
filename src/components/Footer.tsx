import React from 'react';
import { ExternalLink, Facebook, Twitter, Youtube, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#1f1f1f] text-white pt-16 pb-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6">Support The Work We Do</h2>
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-8">
          The Dawah is not just a haphazard enterprise, if done properly one must spend hours researching, filming, studying and writing.
        </p>
        <div className="flex flex-col flex-wrap sm:flex-row justify-center gap-4">
          <a 
            href="#"
            className="inline-flex items-center justify-center px-6 py-3 bg-[#bda482] text-white hover:bg-[#a8885a] transition-all duration-300 text-xs font-semibold tracking-wider uppercase"
          >
            PATREON MEMBERSHIP
            <ExternalLink className="ml-2 w-4 h-4" />
          </a>
          <a 
            href="#"
            className="inline-flex items-center justify-center px-6 py-3 border border-white text-white hover:bg-white hover:text-[#1f1f1f] transition-all duration-300 text-xs font-semibold tracking-wider uppercase"
          >
            ONE-OFF DONATION
            <ExternalLink className="ml-2 w-4 h-4" />
          </a>
        </div>
      </div>

      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center items-center gap-10 md:gap-16 opacity-70 grayscale">
          {/* Partner logos placeholder, replacing actual logos */}
          <div className="text-xl font-serif font-bold text-gray-500 text-center">SAPIENCE INSTITUTE</div>
          <div className="text-xl font-serif font-bold text-gray-500 text-center">S.A.L.A.M</div>
          <div className="text-xl font-serif font-bold text-gray-500 text-center">SAVES JANNAH</div>
          <div className="text-xl font-serif font-bold text-gray-500 text-center">ISLAM NET</div>
        </div>
      </div>

      <div className="pt-16 pb-8 text-center max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-6 text-sm mb-8">
          <a href="#" className="hover:text-brand-gold transition-colors">Mohammad Mukhlisur Rahman</a>
          <a href="#about" className="hover:text-brand-gold transition-colors">About</a>
          <a href="#" className="hover:text-brand-gold transition-colors">Press Release</a>
          <a href="#" className="hover:text-brand-gold transition-colors">Books</a>
          <a href="#articles" className="hover:text-brand-gold transition-colors">Articles</a>
          <a href="#contact" className="hover:text-brand-gold transition-colors">Contact</a>
        </div>
        <div className="flex justify-center space-x-6 mb-8 text-gray-400">
          <a href="#" className="hover:text-brand-gold transition-colors"><Facebook className="w-5 h-5" /></a>
          <a href="#" className="hover:text-brand-gold transition-colors"><Twitter className="w-5 h-5" /></a>
          <a href="#" className="hover:text-brand-gold transition-colors"><Youtube className="w-5 h-5" /></a>
          <a href="#" className="hover:text-brand-gold transition-colors"><Instagram className="w-5 h-5" /></a>
        </div>
        <p className="text-gray-500 text-xs">
          © {new Date().getFullYear()} Mohammad Mukhlisur Rahman Official. All rights reserved
        </p>
      </div>
    </footer>
  );
}
