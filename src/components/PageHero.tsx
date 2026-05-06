import React from 'react';
import { motion } from 'motion/react';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  image: string;
}

export default function PageHero({ title, subtitle, image }: PageHeroProps) {
  return (
    <div className="relative w-full h-72 sm:h-96 flex items-center justify-center overflow-hidden">
      <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/65" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 text-center px-4"
      >
        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold font-serif drop-shadow-lg">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </motion.div>
    </div>
  );
}
