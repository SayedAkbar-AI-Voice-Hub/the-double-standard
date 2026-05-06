import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Heart } from 'lucide-react';
import PageHero from '../components/PageHero';

export default function Donate() {
  return (
    <>
      <PageHero
        title="Support Our Work"
        subtitle="Your support makes the Dawah possible"
        image="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=1600&h=600&auto=format&fit=crop"
      />

      <section className="py-20 bg-[#0f0f0f] text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="w-14 h-14 bg-[#a8885a]/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-7 h-7 text-[#a8885a]" />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl mb-6">Why Your Support Matters</h2>
            <p className="text-gray-400 text-base leading-relaxed mb-4">
              The Dawah is not just a haphazard enterprise — if done properly one must spend hours researching, filming, studying and writing.
            </p>
            <p className="text-gray-400 text-base leading-relaxed mb-12">
              Your support goes directly towards funding lectures, publications, debates, and educational content that serves Muslims and non-Muslims alike. Every contribution, large or small, makes a real difference.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a
                href="#"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#bda482] text-white hover:bg-[#a8885a] transition-all duration-300 text-sm font-semibold tracking-wider uppercase"
              >
                Patreon Membership
                <ExternalLink className="ml-2 w-4 h-4" />
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center px-8 py-4 border border-white text-white hover:bg-white hover:text-[#1f1f1f] transition-all duration-300 text-sm font-semibold tracking-wider uppercase"
              >
                One-Off Donation
                <ExternalLink className="ml-2 w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-brand-light">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-serif text-2xl text-brand-dark mb-4">What Your Support Funds</h3>
            <div className="grid sm:grid-cols-3 gap-6 mt-8 text-left">
              {['Research & Writing', 'Video Production', 'Public Lectures & Travel'].map((item, i) => (
                <div key={i} className="bg-white p-6 shadow-sm">
                  <div className="w-2 h-8 bg-[#a8885a] mb-4" />
                  <p className="font-serif text-brand-dark">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
