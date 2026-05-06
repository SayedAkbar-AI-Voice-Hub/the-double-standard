/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Biography from './pages/Biography';
import Academy from './pages/Academy';
import IslamicFinance from './pages/IslamicFinance';
import IslamicConsultation from './pages/IslamicConsultation';
import Dawah from './pages/Dawah';
import BooksArticles from './pages/BooksArticles';
import Donate from './pages/Donate';
import Contact from './pages/Contact';

export default function App() {
  return (
    <BrowserRouter>
      <div className="font-sans antialiased min-h-screen bg-brand-light selection:bg-brand-gold selection:text-white">
        <Navbar />
        <main className="pt-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Biography />} />
            <Route path="/academy" element={<Academy />} />
            <Route path="/services/islamic-finance" element={<IslamicFinance />} />
            <Route path="/services/islamic-consultation" element={<IslamicConsultation />} />
            <Route path="/dawah" element={<Dawah />} />
            <Route path="/books-articles" element={<BooksArticles />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
