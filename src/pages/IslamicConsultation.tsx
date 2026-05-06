import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import PageHero from '../components/PageHero';

const areas = [
  {
    title: 'Personal & Family Matters',
    description: 'Guidance on marriage, divorce, inheritance, and family dynamics within an Islamic framework.',
  },
  {
    title: 'Spiritual Development',
    description: 'One-on-one consultations addressing matters of the heart, spiritual struggles, and personal growth.',
  },
  {
    title: 'Community & Institutional Advice',
    description: 'Strategic and ethical guidance for mosques, Islamic schools, charities, and Muslim organisations.',
  },
  {
    title: 'Contemporary Issues',
    description: "Scholarly responses to modern questions in bioethics, technology, media, and contemporary society from a fiqh perspective.",
  },
];

export default function IslamicConsultation() {
  return (
    <>
      <PageHero
        title="Islamic Consultation"
        subtitle="Scholarly guidance grounded in classical Islamic methodology"
        image="https://images.unsplash.com/photo-1604881991720-f91add269bed?q=80&w=1600&h=600&auto=format&fit=crop"
      />

      <section className="py-20 bg-brand-light">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-14"
          >
            <p className="text-sm font-semibold tracking-widest text-[#a8885a] uppercase mb-3">Services</p>
            <h2 className="font-serif text-3xl md:text-4xl text-brand-dark mb-6">Islamic Consultation</h2>
            <p className="text-gray-500 max-w-2xl leading-relaxed">
              Whether you are navigating a personal challenge or seeking guidance for your community, our consultation service offers a measured, scholarly, and compassionate approach to the questions of our time.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {areas.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white p-8 shadow-sm hover:shadow-lg transition-shadow"
              >
                <h3 className="font-serif text-lg text-brand-dark mb-3">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-3 border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-white transition-all duration-300 tracking-wider text-sm font-medium uppercase"
            >
              Request a Consultation
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
