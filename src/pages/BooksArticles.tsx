import React, { useState } from 'react';
import { motion } from 'motion/react';
import PageHero from '../components/PageHero';

const books = [
  {
    title: 'The Double Standard: Media reactions to Zionist terror',
    author: 'Mohammad Mukhlisur Rahman & Jody McIntyre',
    description: 'A rigorous analysis and comparison of the responses of British, Arab, and Jewish media to atrocities carried out in the name of Zionism. A landmark work in media criticism and political analysis.',
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=400&h=560&auto=format&fit=crop',
    link: '#',
  },
];

const articles = [
  {
    category: 'ISLAM',
    title: 'Age of Aisha the Ultimate Dawah Red Herring',
    description: 'In the broader scholarly discourse concerning the historical details of Sayyidah Aisha radiyallahu...',
    image: 'https://images.unsplash.com/photo-1609599006353-e629aaab31f5?q=80&w=400&h=300&auto=format&fit=crop',
  },
  {
    category: 'ISLAM',
    title: 'Pseudo Islamic Feminism: Feminism and the Madrasah',
    description: 'It behooves the Muslim theologian to occupy himself with precisely, and almost solely, that which...',
    image: 'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?q=80&w=400&h=300&auto=format&fit=crop',
  },
  {
    category: 'ISLAM',
    title: 'Maslaha – Common Interest',
    description: 'In contemporary times, the Usuli legal maxim of Maslahah has become increasingly relevant to the...',
    image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=400&h=300&auto=format&fit=crop',
  },
  {
    category: 'ISLAM',
    title: 'The Cosmological Argument and the Quran',
    description: 'Despite his critique of the philosophers and the Ash\'arites, Ibn Taymiyyah has made important...',
    image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=400&h=300&auto=format&fit=crop',
  },
  {
    category: 'LIBERALISM',
    title: 'The Problems With Liberalism',
    description: 'Liberalism, like many other ideologies, has existed in different political contexts. Many of these...',
    image: 'https://images.unsplash.com/photo-1473161961556-32d8478ef864?q=80&w=400&h=300&auto=format&fit=crop',
  },
  {
    category: 'ISLAM',
    title: 'Evidences for the truth of Islam',
    description: 'Imagine going to sleep on your bed and waking up on a boat. What are the first questions you are...',
    image: 'https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?q=80&w=400&h=300&auto=format&fit=crop',
  },
  {
    category: 'THEOLOGY',
    title: 'Wrestling with Free Will: Reflections on Divine and Human Freedom',
    description: 'The tension between determinist reasoning and free-will intuition is one of the most debated topics...',
    image: 'https://images.unsplash.com/photo-1542816417-0983c9c9ad53?q=80&w=400&h=300&auto=format&fit=crop',
  },
];

export default function BooksArticles() {
  const [tab, setTab] = useState<'books' | 'articles'>('books');

  return (
    <>
      <PageHero
        title="Books & Articles"
        subtitle="Scholarly works, essays, and written research"
        image="https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1600&h=600&auto=format&fit=crop"
      />

      <section className="py-20 bg-brand-light">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tabs */}
          <div className="flex justify-center gap-0 mb-14 border-b border-gray-200">
            {(['books', 'articles'] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-10 py-4 text-xs font-semibold tracking-widest uppercase transition-colors ${
                  tab === t
                    ? 'border-b-2 border-[#a8885a] text-[#a8885a]'
                    : 'text-gray-400 hover:text-brand-dark'
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          {/* Books */}
          {tab === 'books' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row gap-12 items-start max-w-3xl mx-auto"
            >
              {books.map((book, i) => (
                <div key={i} className="flex flex-col sm:flex-row gap-8 w-full">
                  <div className="w-40 sm:w-48 flex-shrink-0 shadow-xl mx-auto sm:mx-0">
                    <img src={book.image} alt={book.title} className="w-full h-auto object-cover" />
                  </div>
                  <div className="flex-grow">
                    <p className="text-xs font-semibold tracking-widest text-[#a8885a] uppercase mb-2">Book</p>
                    <h3 className="font-serif text-2xl text-brand-dark mb-2 leading-snug">{book.title}</h3>
                    <p className="text-sm text-gray-400 mb-4 italic">{book.author}</p>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">{book.description}</p>
                    <a
                      href={book.link}
                      className="inline-flex items-center px-6 py-3 border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-white transition-all duration-300 tracking-wider text-xs font-semibold uppercase"
                    >
                      Order Now
                    </a>
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {/* Articles */}
          {tab === 'articles' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {articles.map((article, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.07 }}
                  className="bg-white group cursor-pointer shadow-sm hover:shadow-xl transition-shadow flex flex-col"
                >
                  <div className="relative h-48 overflow-hidden">
                    <span className="absolute top-4 right-4 z-10 px-3 py-1 bg-black/40 backdrop-blur-sm text-white text-xs font-semibold tracking-wider rounded-sm uppercase">
                      {article.category}
                    </span>
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="font-serif text-lg text-brand-dark font-medium mb-3 group-hover:text-[#a8885a] transition-colors leading-snug">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">{article.description}</p>
                    <div className="pt-4 border-t border-gray-100 text-xs font-bold tracking-widest uppercase text-brand-dark group-hover:text-[#a8885a] transition-colors">
                      READ MORE
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
}
