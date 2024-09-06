'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiCode, HiServer, HiShieldCheck, HiSupport, HiChip, HiDatabase } from 'react-icons/hi';

interface Skill {
  name: string;
  level: number;
}

interface SkillCategoryProps {
  category: string;
  skills: Skill[];
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ category, skills }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-6">
      <button
        className="w-full text-left text-xl font-bold text-green-400 mb-2 focus:outline-none flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{category}</span>
        <span>{isOpen ? '▼' : '▶'}</span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {skills.map((skill, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between mb-2">
                  <span className="text-lg font-semibold text-white">{skill.name}</span>
                  <span className="text-gray-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <motion.div 
                    className="bg-green-500 h-2.5 rounded-full" 
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                  ></motion.div>
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Skills: React.FC = () => {
  const skillCategories: SkillCategoryProps[] = [
    {
      category: "IT Fundamentals",
      skills: [
        { name: "Hardware Troubleshooting", level: 85 },
        { name: "Operating Systems (Windows, Linux)", level: 80 },
        { name: "Network Basics", level: 75 },
      ]
    },
    {
      category: "Web Development",
      skills: [
        { name: "HTML/CSS", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "React", level: 80 },
      ]
    },
    {
      category: "Cybersecurity Basics",
      skills: [
        { name: "Security Principles", level: 70 },
        { name: "Threat Identification", level: 65 },
        { name: "Security Best Practices", level: 75 },
      ]
    },
    // Add more categories as needed
  ];

  return (
    <section id="skills" className="py-16 px-4 md:px-8 bg-gray-800">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-green-400">Technical Skills</h2>
      <div className="max-w-3xl mx-auto">
        {skillCategories.map((category, index) => (
          <SkillCategory key={index} {...category} />
        ))}
      </div>
    </section>
  );
};

export default Skills;