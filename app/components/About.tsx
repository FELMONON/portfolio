'use client';

import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-400">
            About Me
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-400">
            IT Professional & Developer
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-12 text-center"
        >
          <p className="text-lg md:text-xl text-gray-300">
            I&apos;m passionate about leveraging cutting-edge technology 
            to solve complex challenges and drive innovation in the digital landscape.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center"
        >
          <p className="text-base md:text-lg text-gray-400">
            With expertise in web development, network administration, cybersecurity, and IT support, 
            I&apos;ve honed my skills to deliver efficient and innovative solutions. My goal is to contribute 
            to the tech industry by leveraging my skills and creativity to solve complex problems 
            and enhance user experiences.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-base md:text-lg text-gray-400">
            I&apos;m always eager to take on new challenges and continue learning in this ever-evolving field.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;