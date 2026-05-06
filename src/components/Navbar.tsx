import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Facebook, Twitter, Youtube, Instagram, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const navLinks = [
  {
    label: 'ABOUT',
    href: '/about',
    dropdown: [
      { label: 'Biography', href: '/about' },
    ],
  },
  {
    label: 'ACADEMY & COURSES',
    href: '/academy',
  },
  {
    label: 'SERVICES',
    href: '/services',
    dropdown: [
      { label: 'Islamic Finance', href: '/services/islamic-finance' },
      { label: 'Islamic Consultation', href: '/services/islamic-consultation' },
    ],
  },
  { label: 'DAWAH', href: '/dawah' },
  { label: 'BOOKS & ARTICLES', href: '/books-articles' },
  { label: 'SUPPORT OUR WORK', href: '/donate' },
  { label: 'CONTACTS', href: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link
            to="/"
            className="font-serif text-lg sm:text-xl tracking-widest text-brand-dark flex-shrink-0"
          >
            MOHAMMAD MUKHLISUR RAHMAN
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.dropdown && setOpenDropdown(link.label)}
                onMouseLeave={() => link.dropdown && setOpenDropdown(null)}
              >
                <Link
                  to={link.href}
                  className="text-xs font-semibold tracking-wide flex items-center gap-1 text-brand-dark hover:text-brand-gold transition-colors"
                >
                  {link.label}
                  {link.dropdown && <ChevronDown className="w-3 h-3" />}
                </Link>

                {link.dropdown && (
                  <AnimatePresence>
                    {openDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute left-0 mt-4 w-56 bg-white shadow-lg py-2 z-50"
                      >
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.href}
                            to={item.href}
                            className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-gold transition-colors"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-brand-dark hover:text-brand-gold transition-colors"><Facebook className="w-4 h-4" /></a>
            <a href="#" className="text-brand-dark hover:text-brand-gold transition-colors"><Twitter className="w-4 h-4" /></a>
            <a href="#" className="text-brand-dark hover:text-brand-gold transition-colors"><Youtube className="w-4 h-4" /></a>
            <a href="#" className="text-brand-dark hover:text-brand-gold transition-colors"><Instagram className="w-4 h-4" /></a>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-brand-dark hover:text-brand-gold focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white shadow-md overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <div key={link.label}>
                  <Link
                    to={link.href}
                    className="flex justify-between items-center px-3 py-3 text-sm font-semibold text-brand-dark hover:text-brand-gold hover:bg-gray-50"
                    onClick={() =>
                      link.dropdown
                        ? setOpenDropdown(openDropdown === link.label ? null : link.label)
                        : setMobileMenuOpen(false)
                    }
                  >
                    {link.label}
                    {link.dropdown && <ChevronDown className="w-4 h-4" />}
                  </Link>
                  {link.dropdown && openDropdown === link.label && (
                    <div className="pl-6 space-y-1">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.href}
                          to={item.href}
                          className="block px-3 py-2 text-sm text-gray-600 hover:text-brand-gold"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="flex space-x-6 px-3 pt-4 border-t border-gray-100">
                <a href="#" className="text-gray-500 hover:text-brand-gold"><Facebook className="w-5 h-5" /></a>
                <a href="#" className="text-gray-500 hover:text-brand-gold"><Twitter className="w-5 h-5" /></a>
                <a href="#" className="text-gray-500 hover:text-brand-gold"><Youtube className="w-5 h-5" /></a>
                <a href="#" className="text-gray-500 hover:text-brand-gold"><Instagram className="w-5 h-5" /></a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
