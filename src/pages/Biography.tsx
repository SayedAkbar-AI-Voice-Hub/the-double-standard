import React from 'react';
import { motion } from 'motion/react';
import PageHero from '../components/PageHero';

export default function Biography() {
  return (
    <>
      <PageHero
        title="Biography"
        subtitle="Scholar, debater, and public speaker"
        image="https://images.unsplash.com/photo-1519817650390-64a93db51149?q=80&w=1600&h=600&auto=format&fit=crop"
      />

      <section className="py-20 bg-brand-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm font-semibold tracking-widest text-[#a8885a] mb-4 uppercase">About</p>
            <h2 className="font-serif text-3xl md:text-4xl text-brand-dark mb-8">
              Mohammad Mukhlisur Rahman
            </h2>
            <div className="prose prose-lg text-gray-600 space-y-6">
              <p>
                Mohammad Mukhlisur Rahman is a debater and public speaker who engages in discussions and polemics on a wide variety of topics including religion, politics and society.
              </p>
              <p>
                He is the author of <em>The Double Standard: Media reactions to Zionist terror</em>, co-written with Jody McIntyre, which analyses and compares the responses of the British, Arab, and Jewish media to atrocities carried out in the name of Zionism.
              </p>
              <p>
                His work spans academic research, public lectures, and written scholarship — always grounded in classical Islamic methodology while engaging rigorously with contemporary thought.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
