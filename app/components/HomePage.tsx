import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaEnvelope, FaChevronDown } from 'react-icons/fa';
import { BiCodeAlt } from 'react-icons/bi';

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
    <section className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-gray-300 p-4 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzMTQxNTUiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRoLTJWMGgydjM0em0tNCAwVjBoLTJ2MzRoMnptLTYgMGgtMlYwaDF2MzRoMXpNMjQgMHYzNGgtMlYwaDJ6bS00IDBoLTJ2MzRoMlYwem0tNiAzNGgtMlYwaDJ2MzR6bS02IDBoLTJWMGgydjM0eiIvPjwvZz48L2c+PC9zdmc+')] bg-repeat"></div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center z-10">
        <motion.div 
          className="mb-8 relative"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <BiCodeAlt className="text-8xl md:text-9xl mx-auto text-teal-600" />
        </motion.div>
        <motion.h1 
          className="text-6xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-indigo-500 font-tech"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          𝙵𝙴𝙻𝙼𝙾𝙽 𝙵𝙴𝙺𝙰𝙳𝚄
        </motion.h1>
        <motion.div
          className="text-3xl md:text-4xl mb-8 h-16"
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
            className="font-bold text-teal-500 font-tech"
          >
            {texts[currentTextIndex]}
          </motion.span>
        </motion.div>
        <motion.p 
          className="text-lg mb-12 max-w-2xl mx-auto leading-relaxed text-gray-400"
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
             className="text-teal-400 hover:text-teal-300 transition-colors inline-flex items-center bg-gray-800 bg-opacity-50 px-6 py-3 rounded-full border border-teal-400 hover:border-teal-300">
            <FaLinkedin size={24} className="mr-2" />
            <span>LinkedIn</span>
          </a>
          <a href="mailto:felmonwork@gmail.com" 
             className="text-indigo-400 hover:text-indigo-300 transition-colors inline-flex items-center bg-gray-800 bg-opacity-50 px-6 py-3 rounded-full border border-indigo-400 hover:border-indigo-300">
            <FaEnvelope size={24} className="mr-2" />
            <span>Email</span>
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
        <FaChevronDown className="w-8 h-8 text-teal-500 animate-bounce" />
      </motion.div>
    </section>
  );
};

export default HomePage;