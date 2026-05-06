import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Youtube } from 'lucide-react';
import PageHero from '../components/PageHero';

const playlists = [
  {
    title: 'Islamic Theology & Aqeedah',
    description: 'In-depth lectures covering the fundamentals of Islamic belief, the names and attributes of Allah, and classical theological positions.',
    link: '#',
    count: 'Playlist',
  },
  {
    title: 'Dawah & Comparative Religion',
    description: 'Debates, discussions, and lectures on Islam in dialogue with atheism, Christianity, and liberalism.',
    link: '#',
    count: 'Playlist',
  },
  {
    title: 'Islamic Finance Foundations',
    description: 'An introduction to the principles of Islamic economics, prohibition of riba, and halal financial instruments.',
    link: '#',
    count: 'Playlist',
  },
  {
    title: 'Media & Political Analysis',
    description: 'Critical examination of Western and Arab media narratives on Islam, Palestine, and Muslim-majority nations.',
    link: '#',
    count: 'Playlist',
  },
];

export default function Academy() {
  return (
    <>
      <PageHero
        title="Academy & Courses"
        subtitle="Educational videos, lectures, and curated playlists"
        image="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1600&h=600&auto=format&fit=crop"
      />

      <section className="py-20 bg-brand-light">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <p className="text-sm font-semibold tracking-widest text-[#a8885a] uppercase mb-3">Learn</p>
            <h2 className="font-serif text-3xl md:text-4xl text-brand-dark">Educational Content</h2>
            <p className="mt-4 text-gray-500 max-w-xl mx-auto">
              Browse curated playlists and video series covering theology, Islamic finance, media criticism, and more.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {playlists.map((playlist, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white shadow-sm hover:shadow-lg transition-shadow p-8 flex flex-col"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#f5ede0] rounded-full flex items-center justify-center">
                    <Youtube className="w-5 h-5 text-[#a8885a]" />
                  </div>
                  <span className="text-xs font-semibold tracking-widest text-[#a8885a] uppercase">{playlist.count}</span>
                </div>
                <h3 className="font-serif text-xl text-brand-dark mb-3">{playlist.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">{playlist.description}</p>
                <a
                  href={playlist.link}
                  className="inline-flex items-center text-xs font-semibold tracking-widest uppercase text-brand-dark hover:text-[#a8885a] transition-colors border-b border-brand-dark hover:border-[#a8885a] pb-1 w-fit"
                >
                  Watch Now
                  <ExternalLink className="ml-2 w-3 h-3" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
