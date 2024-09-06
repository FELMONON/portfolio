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
    title: "Google IT Support Professional Certificate",
    issuer: "Google",
    date: "2023",
    description: "Comprehensive IT support training covering troubleshooting, customer service, networking, operating systems, system administration, and security"
  },
  {
    title: "CompTIA A+",
    issuer: "CompTIA",
    date: "2023",
    description: "Fundamental understanding of installing, configuring, and maintaining devices, PCs, and software for end users"
  },
  {
    title: "Microsoft Certified: Azure Fundamentals",
    issuer: "Microsoft",
    date: "2023",
    description: "Foundational knowledge of cloud services and how those services are provided with Microsoft Azure"
  },
  // Add more relevant IT certifications here
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
    <section id="certifications" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          IT Certifications
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