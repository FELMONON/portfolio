'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HiCode, HiServer, HiShieldCheck, HiSupport, HiChip, HiDatabase } from 'react-icons/hi';
import Image from 'next/image';

const HomePage = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="py-16 px-4 md:px-8 text-center">
      <motion.h1 
        className="text-4xl md:text-6xl font-bold mb-4 text-green-400"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Felmon Fekadu
      </motion.h1>
      <motion.p 
        className="text-xl md:text-2xl mb-6 text-gray-300"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Aspiring IT Professional & Web Developer
      </motion.p>
      <motion.p 
        className="text-lg max-w-2xl mx-auto text-gray-400"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {isExpanded ? (
          <>
            Passionate about technology with a strong foundation in IT fundamentals and web development. 
            Seeking an entry-level position to apply my diverse skill set, including hardware troubleshooting, 
            networking basics, and web technologies. Eager to contribute to a dynamic IT team and grow in the field.
          </>
        ) : (
          <>
            Passionate about technology and eager to start my career in IT. 
            Seeking an entry-level position to apply my skills and grow in the field.
          </>
        )}
      </motion.p>
      <motion.button 
        className="mt-4 text-green-400 underline cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {isExpanded ? 'Read Less' : 'Read More'}
      </motion.button>
      <motion.button 
        className="mt-8 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full transition duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        View My Skills
      </motion.button>
    </section>
  );
};

export default HomePage;