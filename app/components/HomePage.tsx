import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

const HomePage: React.FC = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const texts = ["Systems Analyst", "IT Support Specialist", "Network Administrator"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 text-white p-4 relative overflow-hidden">
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
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="space-x-6"
        >
          <Link href="#skills" 
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 inline-block hover:shadow-lg hover:-translate-y-1"
          >
            IT Skills
          </Link>
          <Link href="#certifications" 
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 inline-block hover:shadow-lg hover:-translate-y-1"
          >
            Certifications
          </Link>
        </motion.div>
        
        <motion.div 
          className="mt-12 space-x-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <a href="https://www.linkedin.com/in/felmonfekadu/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors">
            <FaLinkedin size={24} />
          </a>
        </motion.div>
      </div>
      
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1, repeat: Infinity, repeatType: "reverse" }}
      >
        <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </motion.div>
    </section>
  );
};

export default HomePage;