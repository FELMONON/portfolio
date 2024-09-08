'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaGoogle, FaMicrosoft } from 'react-icons/fa';
import { SiComptia } from 'react-icons/si';
import { IoSchoolOutline } from 'react-icons/io5';

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  description: string;
  status: 'Completed' | 'In Progress';
  icon: React.ElementType;
}

const certificates: Certificate[] = [
  {
    title: "Associate of Science in Computer Science (AS-CS)",
    issuer: "University of the People",
    date: "Expected October 2024",
    description: "Comprehensive program covering programming fundamentals, databases, networking, web programming, operating systems, and software engineering.",
    status: "In Progress",
    icon: IoSchoolOutline
  },
  {
    title: "Google IT Support Professional Certificate",
    issuer: "Google",
    date: "2023",
    description: "Comprehensive IT support training covering troubleshooting, customer service, networking, operating systems, system administration, and security",
    status: "Completed",
    icon: FaGoogle
  },
  {
    title: "CompTIA A+",
    issuer: "CompTIA",
    date: "Expected 2024",
    description: "Fundamental understanding of installing, configuring, and maintaining devices, PCs, and software for end users",
    status: "In Progress",
    icon: SiComptia
  },
  {
    title: "Microsoft Certified: Azure Fundamentals",
    issuer: "Microsoft",
    date: "Expected 2024",
    description: "Foundational knowledge of cloud services and how those services are provided with Microsoft Azure",
    status: "In Progress",
    icon: FaMicrosoft
  },
];

const CertificateCard: React.FC<Certificate> = ({ title, issuer, date, description, status, icon: Icon }) => (
  <motion.div 
    className="bg-gray-800 bg-opacity-50 p-6 rounded-lg shadow-lg border border-cyan-400 relative overflow-hidden card-hover"
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.98 }}
  >
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-purple-400"></div>
    <div className="flex items-center mb-4">
      <Icon className="text-cyan-400 mr-2 neon-glow" size={24} />
      <h3 className="text-xl font-semibold text-cyan-300">{title}</h3>
    </div>
    <p className="text-gray-400 mb-2">{issuer} • {date}</p>
    <p className="text-gray-300 mb-4">{description}</p>
    <span className={`px-3 py-1 rounded-full text-sm ${status === 'Completed' ? 'bg-green-500 text-white' : 'bg-yellow-500 text-gray-800'}`}>
      {status}
    </span>
  </motion.div>
);

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-transparent text-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 neon-glow"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Education & Certifications
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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