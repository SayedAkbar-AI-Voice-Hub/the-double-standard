/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ArticlesSection from './components/ArticlesSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="font-sans antialiased min-h-screen bg-brand-light selection:bg-brand-gold selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <ArticlesSection />
      </main>
      <Footer />
    </div>
  );
}

