'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiCode, HiServer, HiShieldCheck, HiSupport, HiChip, HiDatabase } from 'react-icons/hi';

const SkillCategory = ({ category, skills }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="mb-6">
      <button
        className="w-full text-left text-xl font-bold text-green-400 mb-2 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {category} {isOpen ? '▼' : '▶'}
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

const Skills = () => {
  const skillCategories = [
    {
      category: "Basic Computer Hardware and Software",
      skills: [
        { name: "Hardware Components", level: 85 },
        { name: "Operating Systems (Windows, macOS, Linux)", level: 80 },
        { name: "Software Applications", level: 90 },
      ]
    },
    {
      category: "Troubleshooting and Diagnostics",
      skills: [
        { name: "Basic Troubleshooting Techniques", level: 85 },
        { name: "Network Troubleshooting", level: 75 },
        { name: "Diagnostic Tools and Utilities", level: 80 },
      ]
    },
    {
      category: "Networking Fundamentals",
      skills: [
        { name: "Network Basics (IP, DNS, DHCP, TCP/IP)", level: 80 },
        { name: "Network Types and Devices", level: 75 },
        { name: "Wi-Fi and Wireless Networks", level: 70 },
      ]
    },
    {
      category: "Cybersecurity Basics",
      skills: [
        { name: "Security Principles", level: 75 },
        { name: "Common Threats", level: 80 },
        { name: "Security Practices", level: 85 },
      ]
    },
    {
      category: "Web Development",
      skills: [
        { name: "HTML/CSS", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "React", level: 80 },
        { name: "Node.js", level: 75 },
      ]
    },
    // Add more categories as needed
  ];

  return (
    <section className="py-16 px-4 md:px-8 bg-gray-800">
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