import React, { useState } from 'react';
import { motion } from 'motion/react';
import PageHero from '../components/PageHero';

const books = [
  {
    title: 'Dearest Act to Allah',
    subtitle: 'মসজিদ ও সালাত',
    description: 'A translation exploring the immense virtue of the masjid and salat — the most beloved act to Allah.',
    image: '/photos/book-masjid-salat.jpeg',
  },
  {
    title: 'Advice for Spiritual Travelers',
    subtitle: 'তাসাউফের সহজ পাঠ',
    description: 'An accessible introduction to Tasawwuf, guiding the reader on the inner journey toward Allah.',
    image: '/photos/book-spiritual-travelers.jpeg',
  },
  {
    title: 'A Day with the Prophet ﷺ',
    subtitle: 'নবিজির সাথে একদিন',
    description: 'A vivid journey through the blessed daily life and habits of the Prophet Muhammad ﷺ.',
    image: '/photos/book-day-with-prophet.jpeg',
  },
  {
    title: 'How to Become a Friend of Allah',
    subtitle: 'যেভাবে আল্লাহর বন্ধু হবেন',
    description: 'A practical guide on attaining proximity to Allah through worship, character, and sincere devotion.',
    image: '/photos/book-friend-of-allah.jpeg',
  },
  {
    title: 'Hadith Education',
    subtitle: 'হাদিস শিক্ষা — চল্লিশ হাদিস',
    description: 'Forty selected hadith for character development — designed to instil Islamic values from a young age.',
    image: '/photos/book-hadith-education.jpeg',
  },
  {
    title: 'Masnoon Dua Education Vol. 1 & 2',
    subtitle: 'মাসনুন দোয়া শিক্ষা',
    description: 'A comprehensive collection of prophetic supplications for all occasions, in two volumes.',
    image: '/photos/book-masnoon-dua-1.jpeg',
  },
  {
    title: 'Masnoon Dua Education',
    subtitle: 'মাসনুন দোয়া শিক্ষা',
    description: 'The essential daily du\'as from the Sunnah, presented in an easy-to-follow format.',
    image: '/photos/book-masnoon-dua-2.jpeg',
  },
  {
    title: 'Marriage: Reality & Preparation',
    subtitle: 'বিয়ে বাস্তবতা ও প্রস্তুতি',
    description: 'A complete Shariah guideline for those preparing for marriage — practical, honest, and rooted in Islamic law.',
    image: '/photos/book-marriage.jpeg',
  },
  {
    title: 'Masnoon Dua Education (Classic)',
    subtitle: 'মাসনুন দোয়া শিক্ষা',
    description: 'The classic edition of the beloved du\'a collection, translated with care and scholarly precision.',
    image: '/photos/book-masnoon-dua-3.jpeg',
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
    description: "Despite his critique of the philosophers and the Ash'arites, Ibn Taymiyyah has made important...",
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

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
                {t === 'books' ? `Books (${books.length})` : `Articles (${articles.length})`}
              </button>
            ))}
          </div>

          {/* Books Grid */}
          {tab === 'books' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-center text-sm text-gray-400 mb-10 tracking-wide">
                Translations by <span className="text-brand-dark font-semibold">Mawlana Mukhlisur Rahman</span>
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 sm:gap-8">
                {books.map((book, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                    className="group cursor-pointer flex flex-col"
                  >
                    {/* Cover */}
                    <div className="relative overflow-hidden shadow-lg group-hover:shadow-2xl transition-shadow duration-300 mb-4">
                      <img
                        src={book.image}
                        alt={book.title}
                        className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    {/* Info */}
                    <div className="flex-grow">
                      <h3 className="font-serif text-sm sm:text-base text-brand-dark font-medium leading-snug group-hover:text-[#a8885a] transition-colors mb-1">
                        {book.title}
                      </h3>
                      <p className="text-xs text-gray-400 mb-2">{book.subtitle}</p>
                      <p className="text-xs text-gray-500 leading-relaxed hidden sm:block">{book.description}</p>
                    </div>
                    <a
                      href="#"
                      className="mt-3 inline-block text-xs font-bold tracking-widest uppercase text-[#a8885a] hover:text-brand-dark transition-colors border-b border-[#a8885a] hover:border-brand-dark pb-0.5 w-fit"
                    >
                      Order Now
                    </a>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Articles Grid */}
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
