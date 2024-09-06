'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { HiCode, HiServer, HiShieldCheck, HiSupport, HiChip, HiDatabase } from 'react-icons/hi';
import Image from 'next/image';

const HomePage = () => {
  return (
    <section className="py-16 px-4 md:px-8 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-green-400">Felmon Fekadu</h1>
      <p className="text-xl md:text-2xl mb-6 text-gray-300">Aspiring IT Professional</p>
      <p className="text-lg max-w-2xl mx-auto text-gray-400">
        Passionate about technology and eager to start my career in IT. 
        Seeking an entry-level position to apply my skills and grow in the field.
      </p>
      <button className="mt-8 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full transition duration-300">
        View My Skills
      </button>
    </section>
  );
};

export default HomePage;