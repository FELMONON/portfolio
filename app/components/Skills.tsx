'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  const itSkills = [
    { name: "Network Troubleshooting", level: 85 },
    { name: "Windows Server Administration", level: 80 },
    { name: "Linux Systems", level: 75 },
    { name: "IT Security", level: 80 },
    { name: "Cloud Services (AWS, Azure)", level: 70 },
    { name: "Virtualization", level: 75 },
    { name: "Help Desk Support", level: 90 },
    { name: "Hardware Maintenance", level: 85 },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          IT Skills
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {itSkills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-4 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
              <div className="w-full bg-gray-700 rounded-full h-2.5">
                <motion.div 
                  className="bg-blue-500 h-2.5 rounded-full" 
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                ></motion.div>
              </div>
              <span className="text-sm text-gray-400">{skill.level}%</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;