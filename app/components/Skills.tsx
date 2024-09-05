'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { HiCode, HiServer, HiShieldCheck, HiSupport, HiChip, HiDatabase } from 'react-icons/hi';

const Skills = () => {
  const skills = [
    { name: 'Web Development', icon: <HiCode className="w-8 h-8" />, color: 'bg-blue-500' },
    { name: 'Network Administration', icon: <HiServer className="w-8 h-8" />, color: 'bg-green-500' },
    { name: 'Cybersecurity', icon: <HiShieldCheck className="w-8 h-8" />, color: 'bg-red-500' },
    { name: 'IT Support', icon: <HiSupport className="w-8 h-8" />, color: 'bg-yellow-500' },
    { name: 'Hardware', icon: <HiChip className="w-8 h-8" />, color: 'bg-purple-500' },
    { name: 'Database Management', icon: <HiDatabase className="w-8 h-8" />, color: 'bg-indigo-500' },
  ];

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
            Technical Skills
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-400">
            Expertise in Various IT Domains
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-12 text-center"
        >
          <p className="text-lg md:text-xl text-gray-300">
            Leveraging cutting-edge technology to solve complex IT challenges and drive innovation in the digital landscape.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className={`${skill.color} p-4 md:p-6 rounded-lg shadow-lg overflow-hidden relative`}
              whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(255, 255, 255, 0.2)' }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="flex items-center mb-2">
                <div className="text-white mr-3">{skill.icon}</div>
                <h3 className="text-base md:text-lg font-semibold text-white">{skill.name}</h3>
              </div>
              <div className="text-xs md:text-sm text-white opacity-80">
                Expert in {skill.name.toLowerCase()} solutions and best practices.
              </div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-white opacity-10 rounded-full"></div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-base md:text-lg text-gray-400">
            Continuously expanding my skill set to stay at the forefront of IT technologies and best practices.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;