import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import PageHero from '../components/PageHero';

const activities = [
  {
    title: 'Public Lectures',
    description: 'Live and recorded lectures at universities, mosques, and Islamic conferences — presenting Islam with clarity and conviction.',
    image: 'https://images.unsplash.com/photo-1492538368677-f6e0afe31dcc?q=80&w=600&h=400&auto=format&fit=crop',
  },
  {
    title: 'Debates & Dialogues',
    description: 'Open intellectual engagement with atheists, secular humanists, Christians, and critics of Islam — grounded in evidence and scholarship.',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=600&h=400&auto=format&fit=crop',
  },
  {
    title: 'Street Dawah',
    description: 'Direct engagement with the public — answering questions about Islam, dispelling misconceptions, and inviting people to reflect.',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=600&h=400&auto=format&fit=crop',
  },
];

export default function Dawah() {
  return (
    <>
      <PageHero
        title="Dawah"
        subtitle="Inviting humanity to the truth with wisdom and beautiful preaching"
        image="https://images.unsplash.com/photo-1585036156171-384164a8c675?q=80&w=1600&h=600&auto=format&fit=crop"
      />

      <section className="py-20 bg-brand-light">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <p className="text-sm font-semibold tracking-widest text-[#a8885a] uppercase mb-3">Mission</p>
            <h2 className="font-serif text-3xl md:text-4xl text-brand-dark mb-6">The Call to Islam</h2>
            <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Dawah is not merely an enterprise — it is a responsibility. Done properly, it requires hours of research, study, and sincere effort for the sake of Allah. Below is a glimpse of how this work unfolds.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {activities.map((activity, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="bg-white shadow-sm hover:shadow-xl transition-shadow group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl text-brand-dark mb-3">{activity.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{activity.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-16 text-center"
          >
            <a
              href="/donate"
              className="inline-flex items-center px-8 py-3 bg-[#a8885a] text-white hover:bg-[#8c6e44] transition-all duration-300 tracking-wider text-sm font-medium uppercase"
            >
              Support This Work
              <ExternalLink className="ml-2 w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
