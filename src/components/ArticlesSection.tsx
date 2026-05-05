import React from 'react';
import { motion } from 'motion/react';

const articles = [
  {
    category: "ISLAM",
    title: "Age of Aisha the Ultimate Dawah Red Herring",
    description: "In the broader scholarly discourse concerning the historical details of Sayyidah Aisha radiyallahu...",
    image: "https://images.unsplash.com/photo-1609599006353-e629aaab31f5?q=80&w=400&h=300&auto=format&fit=crop"
  },
  {
    category: "ISLAM",
    title: "Pseudo Islamic Feminism: Feminism and the Madrasah",
    description: "It behooves the Muslim theologian to occupy himself with precisely, and almost solely, that which...",
    image: "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?q=80&w=400&h=300&auto=format&fit=crop"
  },
  {
    category: "ISLAM",
    title: "Maslaha – Common Interest",
    description: "In contemporary times, the Usuli legal maxim of Maslahah has become increasingly relevant to the...",
    image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=400&h=300&auto=format&fit=crop"
  },
  {
    category: "ISLAM",
    title: "The Cosmological Argument and the Quran",
    description: "Despite his critique of the philosophers and the Ash'arites, Ibn Taymiyyah has made important...",
    image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=400&h=300&auto=format&fit=crop"
  },
  {
    category: "LIBERALISM",
    title: "The Problems With Liberalism",
    description: "Liberalism, like many other ideologies, has existed in different political contexts. Many of these...",
    image: "https://images.unsplash.com/photo-1473161961556-32d8478ef864?q=80&w=400&h=300&auto=format&fit=crop"
  },
  {
    category: "ISLAM",
    title: "Evidences for the truth of Islam",
    description: "Imagine going to sleep on your bed and waking up on a boat. What are the first questions you are...",
    image: "https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?q=80&w=400&h=300&auto=format&fit=crop"
  },
  {
    category: "THEOLOGY",
    title: "Wrestling with Free Will: Reflections on Divine and Human Freedom",
    description: "The tension between determinist reasoning and free-will intuition is one of the most debated topics...",
    image: "https://images.unsplash.com/photo-1542816417-0983c9c9ad53?q=80&w=400&h=300&auto=format&fit=crop"
  }
];

export default function ArticlesSection() {
  return (
    <section id="articles" className="bg-islamic-pattern">
      {/* Bookshelf Hero Header */}
      <div className="relative w-full h-80 sm:h-96 md:h-[400px] flex items-center justify-center overflow-hidden bg-black/60">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1600&h=600&auto=format&fit=crop" 
            alt="Library bookshelf" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 text-center">
          <h2 className="text-white text-5xl md:text-6xl font-bold font-serif drop-shadow-lg">
            Articles
          </h2>
        </div>
      </div>

      <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white group cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
            >
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <div className="absolute top-4 right-4 z-10">
                  <span className="px-3 py-1 bg-black/40 backdrop-blur-sm text-white text-xs font-semibold tracking-wider rounded-sm uppercase">
                    {article.category}
                  </span>
                </div>
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6 sm:p-8 flex flex-col flex-grow">
                <h3 className="font-serif text-xl sm:text-2xl text-brand-dark font-medium mb-4 group-hover:text-[#a8885a] transition-colors leading-snug">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                  {article.description}
                </p>
                <div className="mt-auto pt-4 border-t border-gray-100 flex items-center text-xs font-bold tracking-widest uppercase text-brand-dark group-hover:text-[#a8885a] transition-colors">
                  READ MORE
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
