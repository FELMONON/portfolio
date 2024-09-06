'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaGoogle } from 'react-icons/fa';

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  description: string;
}

const certificates: Certificate[] = [
  {
    title: "Technical Support Fundamentals",
    issuer: "Google",
    date: "2023",
    description: "Gained essential IT support skills and knowledge of computer networks, operating systems, and security."
  },
  {
    title: "The Bits and Bytes of Computer Networking",
    issuer: "Google",
    date: "2023",
    description: "Learned about network protocols, topologies, and troubleshooting techniques."
  },
  {
    title: "Operating Systems and You: Becoming a Power User",
    issuer: "Google",
    date: "2023",
    description: "Mastered advanced OS features, command-line interfaces, and system administration tasks."
  },
  {
    title: "System Administration and IT Infrastructure Services",
    issuer: "Google",
    date: "2023",
    description: "Explored server management, cloud computing, and IT infrastructure maintenance."
  },
  {
    title: "IT Security: Defense against the digital dark arts",
    issuer: "Google",
    date: "2023",
    description: "Studied cybersecurity principles, threat detection, and implementation of security measures."
  }
];

const CertificateCard: React.FC<Certificate> = ({ title, issuer, date, description }) => (
  <motion.div 
    className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.98 }}
  >
    <div className="flex items-center mb-4">
      <FaGoogle className="text-blue-500 mr-2" size={24} />
      <h3 className="text-xl font-semibold text-blue-400">{title}</h3>
    </div>
    <p className="text-gray-400 mb-2">{issuer} • {date}</p>
    <p className="text-gray-300">{description}</p>
  </motion.div>
);

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Educational Journey
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <CertificateCard {...cert} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;