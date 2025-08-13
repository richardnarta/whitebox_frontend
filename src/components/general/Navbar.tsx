// src/components/Navbar.tsx

import { useState, useEffect, useRef } from 'react';
import { HiMenuAlt1, HiPhone } from 'react-icons/hi';
import { HiX } from 'react-icons/hi';
import { ContactModal } from './ContactModal'; // <-- 1. IMPORT THE MODAL

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [navRef]);

  const navLinks = ['Home', 'Wedding', 'Portraiture', 'Studio', 'Printing'];

  return (
    <nav ref={navRef} className="sticky top-0 z-50 shadow-sm">
      <div className="container bg-brand-white/80 backdrop-blur-md mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="hidden lg:flex items-center">
            <a href="/" className="font-serif text-2xl font-bold text-brand-black">
              WHITEBOX
            </a>
          </div>
          <div className="hidden lg:flex items-center space-x-8">
            <div className="flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a key={link} href={`#${link.toLowerCase()}`} className="relative text-brand-black font-medium group">
                  <span>{link}</span>
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-brand-gold-500 group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
                </a>
              ))}
            </div>
            {/* 2. WRAP THE DESKTOP BUTTON */}
            <ContactModal>
              <button className="px-5 py-2 text-white font-semibold rounded-md bg-gradient-to-r from-brand-gold-500 to-brand-gold-600 hover:from-brand-gold-600 hover:to-brand-gold-700 transition-all duration-300 whitespace-nowrap">
                Contact Us
              </button>
            </ContactModal>
          </div>
          <div className="flex lg:hidden w-full items-center justify-between">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-brand-black hover:bg-brand-gold-100 focus:outline-none">
              {isMenuOpen ? <HiX size={24} /> : <HiMenuAlt1 size={24} />}
            </button>
            <a href="/" className="font-serif text-xl font-bold text-brand-black">
              WHITEBOX
            </a>
            <ContactModal>
            <a className="inline-flex items-center justify-center p-2 rounded-md text-brand-black hover:bg-brand-gold-100">
              <HiPhone size={24}/>
            </a>
            </ContactModal>
          </div>
        </div>
      </div>
      <div className={`absolute w-full lg:hidden bg-brand-white/80 backdrop-blur-md shadow-lg ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-3 sm:px-3 text-center">
          {navLinks.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="block px-3 py-2 rounded-md text-base font-medium text-brand-black hover:bg-brand-gold-100" onClick={() => setIsMenuOpen(false)}>
              {link}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;