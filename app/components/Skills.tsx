'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaServer, FaNetworkWired, FaShieldAlt, FaTools } from 'react-icons/fa';

const SkillCard: React.FC<{ icon: React.ReactNode; title: string; skills: string[] }> = ({ icon, title, skills }) => (
  <motion.div 
    className="bg-gray-800 bg-opacity-50 p-6 rounded-lg shadow-lg border border-teal-400 relative overflow-hidden"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-400 to-indigo-500"></div>
    <div className="text-4xl mb-4 text-teal-400">{icon}</div>
    <h3 className="text-xl font-semibold mb-2 text-teal-300">{title}</h3>
    <ul className="text-gray-300">
      {skills.map((skill, index) => (
        <li key={index} className="mb-1">{skill}</li>
      ))}
    </ul>
  </motion.div>
);

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-indigo-500 font-tech"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          IT Skills
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <SkillCard 
            icon={<FaServer />}
            title="System Administration"
            skills={["Windows Server", "Linux", "Active Directory", "Virtualization"]}
          />
          <SkillCard 
            icon={<FaNetworkWired />}
            title="Networking"
            skills={["TCP/IP", "VLANs", "Firewalls", "VPNs"]}
          />
          <SkillCard 
            icon={<FaShieldAlt />}
            title="Security"
            skills={["Threat Analysis", "Encryption", "Access Control", "Security Audits"]}
          />
          <SkillCard 
            icon={<FaTools />}
            title="Troubleshooting"
            skills={["Hardware Diagnostics", "Software Debugging", "Network Troubleshooting", "Performance Optimization"]}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;