import React, { useState, useEffect } from 'react';
import { Menu, X, Facebook, Twitter, Youtube, Instagram, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'MOHAMMAD MUKHLISUR RAHMAN', href: '#' },
    { label: 'ABOUT', href: '#about' },
    { 
      label: 'PRESS RELEASE', 
      href: '#',
      dropdown: [
        'Victory over Dutch Travel Ban',
        'Response to Norwegian MP',
        'Telegraph Response',
        "Douglas Murray's Response"
      ]
    },
    { label: 'BOOKS', href: '#books' },
    { label: 'ARTICLES', href: '#articles' },
    { label: 'CONTACT', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className={`font-serif text-lg sm:text-xl lg:text-2xl tracking-widest ${isScrolled ? 'text-brand-dark' : 'text-brand-dark'}`}>
              MOHAMMAD MUKHLISUR RAHMAN
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center justify-center space-x-6 lg:space-x-8">
            {navLinks.map((link, index) => (
              <div key={index} className="relative group" 
                onMouseEnter={() => link.dropdown && setDropdownOpen(true)}
                onMouseLeave={() => link.dropdown && setDropdownOpen(false)}
              >
                <a 
                  href={link.href}
                  className={`text-sm font-semibold tracking-wide flex items-center gap-1 transition-colors ${
                    isScrolled ? 'text-brand-dark hover:text-brand-gold' : 'text-brand-dark hover:text-brand-gold'
                  }`}
                >
                  {link.label}
                  {link.dropdown && <ChevronDown className="w-4 h-4" />}
                </a>

                {/* Dropdown */}
                {link.dropdown && (
                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute left-0 mt-4 w-64 bg-white shadow-lg py-4 px-2 z-50"
                      >
                        {link.dropdown.map((item, i) => (
                          <a 
                            key={i} 
                            href="#" 
                            className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-gold transition-colors"
                          >
                            {item}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* Social Icons Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-brand-dark hover:text-brand-gold transition-colors"><Facebook className="w-4 h-4" /></a>
            <a href="#" className="text-brand-dark hover:text-brand-gold transition-colors"><Twitter className="w-4 h-4" /></a>
            <a href="#" className="text-brand-dark hover:text-brand-gold transition-colors"><Youtube className="w-4 h-4" /></a>
            <a href="#" className="text-brand-dark hover:text-brand-gold transition-colors"><Instagram className="w-4 h-4" /></a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-brand-dark hover:text-brand-gold focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
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
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link, index) => (
                <div key={index}>
                  <a 
                    href={link.href}
                    className="block px-3 py-3 text-base font-medium text-brand-dark hover:text-brand-gold hover:bg-gray-50"
                    onClick={() => !link.dropdown && setMobileMenuOpen(false)}
                  >
                    <div className="flex justify-between items-center">
                      {link.label}
                      {link.dropdown && <ChevronDown className="w-4 h-4" />}
                    </div>
                  </a>
                  {link.dropdown && (
                    <div className="pl-6 space-y-1 pb-2">
                      {link.dropdown.map((item, i) => (
                        <a 
                          key={i} 
                          href="#" 
                          className="block px-3 py-2 text-sm text-gray-600 hover:text-brand-gold"
                        >
                          {item}
                        </a>
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
