import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaEnvelope, FaChevronDown } from 'react-icons/fa';
import Link from 'next/link';

const HomePage: React.FC = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const texts = ["Systems Analyst", "IT Support Specialist", "Network Administrator"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [texts.length]);

  const scrollToNextSection = () => {
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 text-white p-4 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-grid-white/[0.2] bg-grid-white/[0.2] transform -skew-y-12"></div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center z-10">
        <motion.h1 
          className="text-7xl md:text-8xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-500"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Felmon Fekadu
        </motion.h1>
        <motion.div
          className="text-4xl md:text-5xl mb-8 h-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.span
            key={currentTextIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="font-bold text-blue-400"
          >
            {texts[currentTextIndex]}
          </motion.span>
        </motion.div>
        <motion.p 
          className="text-xl mb-12 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          Dedicated IT professional with Google IT Support certification. 
          Skilled in network administration, system troubleshooting, and IT security. 
          Committed to delivering efficient technical solutions and ensuring smooth IT operations.
        </motion.p>
        
        <motion.div 
          className="mt-12 space-x-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <a href="https://www.linkedin.com/in/felmonfekadu/" target="_blank" rel="noopener noreferrer" 
             className="text-white hover:text-blue-400 transition-colors inline-flex items-center">
            <FaLinkedin size={32} />
            <span className="ml-2">LinkedIn</span>
          </a>
          <a href="mailto:felmonwork@gmail.com" 
             className="text-white hover:text-green-400 transition-colors inline-flex items-center">
            <FaEnvelope size={32} />
            <span className="ml-2">felmonwork@gmail.com</span>
          </a>
        </motion.div>
      </div>
      
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1, repeat: Infinity, repeatType: "reverse" }}
        onClick={scrollToNextSection}
      >
        <FaChevronDown className="w-8 h-8 text-white animate-bounce" />
      </motion.div>
    </section>
  );
};

export default HomePage;