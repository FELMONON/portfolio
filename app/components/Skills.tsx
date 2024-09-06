'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { HiCode, HiServer, HiShieldCheck, HiSupport, HiChip, HiDatabase } from 'react-icons/hi';

const Skills = () => {
  const skills = [
    { name: 'React', level: 90 },
    { name: 'Next.js', level: 85 },
    { name: 'TypeScript', level: 80 },
    { name: 'Node.js', level: 75 },
    { name: 'CSS/Tailwind', level: 85 },
  ];

  return (
    <section className="py-16 px-4 md:px-8 bg-gray-800">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-green-400">Skills</h2>
      <div className="max-w-3xl mx-auto">
        {skills.map((skill, index) => (
          <div key={index} className="mb-6">
            <div className="flex justify-between mb-2">
              <span className="text-lg font-semibold text-white">{skill.name}</span>
              <span className="text-gray-400">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2.5">
              <div 
                className="bg-green-500 h-2.5 rounded-full" 
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;