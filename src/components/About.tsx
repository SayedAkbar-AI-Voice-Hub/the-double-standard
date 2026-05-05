import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="bg-[#0f0f0f] text-white py-0 flex flex-col md:flex-row overflow-hidden items-stretch">
      
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 relative h-[400px] md:h-auto"
      >
        <img 
          src="https://images.unsplash.com/photo-1564769625905-50e93615e06b?q=80&w=800&h=1000&auto=format&fit=crop" 
          alt="Islamic Architecture" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* subtle gradient overlay to blend with background if needed */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0f0f0f] hidden md:block"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] to-transparent md:hidden"></div>
      </motion.div>

      <div className="w-full md:w-1/2 flex items-center justify-center bg-[#0f0f0f] px-6 py-16 md:px-12 lg:px-24">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-brand-gold font-bold tracking-widest text-xs mb-4 uppercase">About</p>
          <h2 className="font-serif text-3xl md:text-5xl text-brand-gold mb-6">
            Mohammad Mukhlisur Rahman
          </h2>
          <p className="text-gray-300 mb-8 max-w-lg leading-relaxed">
            Mohammad Mukhlisur Rahman is a debater and public speaker who engages in discussions and polemics on a wide variety of topics including religion, politics and society.
          </p>
          <a 
            href="#"
            className="inline-flex items-center justify-center px-6 py-3 border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-white transition-all duration-300 tracking-wider text-xs font-semibold uppercase"
          >
            Read More
            <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </motion.div>
      </div>

    </section>
  );
}
