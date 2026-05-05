import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-islamic-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 text-center lg:text-left"
          >
            <p className="text-sm font-semibold tracking-widest text-[#a8885a] mb-3 uppercase">Mohammad Mukhlisur Rahman's Latest Book</p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-brand-dark mb-6 leading-tight">
              The Double Standard:
              <span className="block mt-2">Media reactions to Zionist terror</span>
            </h1>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0 text-lg">
              Mohammad Mukhlisur Rahman & Jody McIntyre analyse and compare the responses of the British, Arab, and Jewish medias to these two atrocities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="#"
                className="inline-flex items-center justify-center px-8 py-3 border border-brand-gold text-brand-gold-dark hover:bg-brand-gold hover:text-white transition-all duration-300 tracking-wider text-sm font-medium uppercase text-center"
              >
                Get Your Copy
                <ArrowRight className="ml-2 w-4 h-4 flex-shrink-0" />
              </a>
              <a 
                href="#about"
                className="inline-flex items-center justify-center px-8 py-3 bg-[#bda482] text-white hover:bg-[#a8885a] transition-all duration-300 tracking-wider text-sm font-medium uppercase text-center"
              >
                About Mohammad Mukhlisur Rahman
                <ArrowRight className="ml-2 w-4 h-4 flex-shrink-0" />
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative shadow-2xl overflow-hidden rounded-sm group transform hover:scale-105 transition-transform duration-500">
              {/* Replace with actual book cover image, placeholder used here */}
              <img 
                src="https://images.unsplash.com/photo-1590076214841-f703edc45831?q=80&w=600&h=900&auto=format&fit=crop" 
                alt="The Double Standard Book Cover" 
                className="w-full max-w-sm h-auto object-cover"
                style={{ aspectRatio: "2/3" }}
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white border border-white px-6 py-2 uppercase tracking-wide text-sm font-medium">Read Excerpt</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
