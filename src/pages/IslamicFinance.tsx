import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import PageHero from '../components/PageHero';

const offerings = [
  {
    title: 'Shariah Compliance Review',
    description: 'Assessment of existing financial products, contracts, or business structures against Islamic law principles.',
  },
  {
    title: 'Halal Investment Guidance',
    description: 'Consultancy on permissible investment vehicles, screening out riba-based and haram industries.',
  },
  {
    title: 'Islamic Contracts & Structuring',
    description: 'Drafting and reviewing Murabaha, Musharakah, Ijarah, and other Shariah-compliant contract structures.',
  },
  {
    title: 'Zakat & Charitable Planning',
    description: 'Calculations, planning, and distribution advice to ensure full compliance with zakat obligations.',
  },
];

export default function IslamicFinance() {
  return (
    <>
      <PageHero
        title="Islamic Finance"
        subtitle="Shariah-compliant financial guidance and consultancy"
        image="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1600&h=600&auto=format&fit=crop"
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
            <h2 className="font-serif text-3xl md:text-4xl text-brand-dark mb-6">Islamic Finance Consultancy</h2>
            <p className="text-gray-500 max-w-2xl leading-relaxed">
              Navigating modern financial systems through the lens of Islamic jurisprudence. Our consultancy provides clear, evidence-based guidance rooted in classical fiqh and contemporary scholarly opinion.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {offerings.map((item, i) => (
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
              Book a Consultation
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
