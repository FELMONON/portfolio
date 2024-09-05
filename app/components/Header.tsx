'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiHome, HiUser, HiCode, HiAcademicCap, HiNewspaper, HiMail, HiMenu, HiX } from 'react-icons/hi';

const Header = ({ setActiveSection }: { setActiveSection: (section: string) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const navItems = [
    { name: 'home', icon: <HiHome className="w-5 h-5" /> },
    { name: 'about', icon: <HiUser className="w-5 h-5" /> },
    { name: 'skills', icon: <HiCode className="w-5 h-5" /> },
    { name: 'education', icon: <HiAcademicCap className="w-5 h-5" /> },
    { name: 'blog', icon: <HiNewspaper className="w-5 h-5" /> },
    { name: 'contact', icon: <HiMail className="w-5 h-5" /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.header
      className="fixed w-full z-50 transition-all duration-300"
      initial={{ backgroundColor: 'rgba(17, 24, 39, 0)', height: '80px' }}
      animate={{ 
        backgroundColor: scrollPosition > 50 ? 'rgba(17, 24, 39, 0.8)' : 'rgba(17, 24, 39, 0)', 
        height: scrollPosition > 50 ? '60px' : '80px' 
      }}
    >
      <div className="container mx-auto px-4 h-full flex items-center justify-center">
        <nav className="hidden md:block">
          <ul className="flex space-x-2">
            {navItems.map((item) => (
              <motion.li key={item.name} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <button
                  onClick={() => setActiveSection(item.name)}
                  className="text-white hover:bg-gray-700 hover:text-green-400 transition-all duration-300 px-4 py-2 rounded-full flex items-center"
                >
                  {item.icon}
                  <span className="ml-2 capitalize text-sm">{item.name}</span>
                </button>
              </motion.li>
            ))}
          </ul>
        </nav>

        {/* Mobile Navigation Toggle */}
        <motion.button
          className="md:hidden text-white absolute right-4"
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {isOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
        </motion.button>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            className="md:hidden bg-gray-800 absolute top-full left-0 right-0"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="py-4">
              {navItems.map((item) => (
                <motion.li 
                  key={item.name}
                  whileHover={{ backgroundColor: 'rgba(59, 130, 246, 0.1)' }}
                >
                  <button
                    onClick={() => {
                      setActiveSection(item.name);
                      setIsOpen(false);
                    }}
                    className="w-full text-left text-white hover:text-green-400 transition-colors duration-300 py-3 px-4 flex items-center"
                  >
                    {item.icon}
                    <span className="ml-2 capitalize">{item.name}</span>
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;