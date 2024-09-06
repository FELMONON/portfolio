import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const HomePage: React.FC = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const texts = ["IT Professional", "Web Developer", "Problem Solver"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white p-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Felmon Fekadu
        </motion.h1>
        <motion.div
          className="text-2xl md:text-3xl mb-8 h-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <span className="text-green-400">Aspiring </span>
          <motion.span
            key={currentTextIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {texts[currentTextIndex]}
          </motion.span>
        </motion.div>
        <motion.p 
          className="text-xl mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          Passionate about technology and eager to start my career in IT. 
          Seeking an entry-level position to apply my skills and grow in the field.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <Link href="#skills" 
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300 inline-block mr-4"
          >
            View My Skills
          </Link>
          <Link href="#contact" 
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300 inline-block"
          >
            Contact Me
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HomePage;