'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { HiCode, HiServer, HiShieldCheck, HiSupport, HiChip, HiDatabase } from 'react-icons/hi';
import Image from 'next/image';

const HomePage = () => {
  return (
    <section className="py-16 px-4 md:px-8 flex flex-col md:flex-row items-center justify-between">
      <div className="text-center md:text-left mb-8 md:mb-0">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-green-400">Felmon Fekadu</h1>
        <p className="text-xl md:text-2xl mb-6 text-gray-300">Web Developer & Designer</p>
        <p className="text-lg max-w-2xl mx-auto md:mx-0 text-gray-400">
          Crafting beautiful and functional web experiences with a passion for clean code and user-centric design.
        </p>
        <button className="mt-8 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full transition duration-300">
          View My Work
        </button>
      </div>
      <div className="w-48 h-48 md:w-64 md:h-64 relative rounded-full overflow-hidden">
        <Image
          src="/path-to-your-image.jpg"  // Replace with your actual image path
          alt="Felmon Fekadu"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </section>
  );
};

export default HomePage;