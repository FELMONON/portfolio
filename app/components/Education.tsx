'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiAcademicCap, HiBookOpen, HiLightBulb, HiChevronDown, HiChevronUp } from 'react-icons/hi';

const Education = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const educationItems = [
    {
      title: "Associate Degree in Computer Science",
      institution: "University of the People",
      date: "Expected Graduation: October 2024",
      icon: <HiAcademicCap className="w-8 h-8" />,
      color: 'bg-blue-500',
      details: [
        "CGPA: 3.16",
        "Major: Computer Science",
        "Key Courses: Web Programming, Operating Systems, Databases, Networking",
        "Proctored Courses: Completed 5 courses including Web Programming and Operating Systems",
      ]
    },
    {
      title: "Google IT Support Professional Certificate",
      institution: "Google",
      date: "Completed: Aug 23, 2024",
      icon: <HiBookOpen className="w-8 h-8" />,
      color: 'bg-green-500',
      details: [
        "Gained hands-on experience in IT support, networking, operating systems, and security",
        "Developed skills in customer service and problem-solving in IT contexts"
      ]
    },
    {
      title: "Ongoing Professional Development",
      institution: "Self-study",
      date: "Current",
      icon: <HiLightBulb className="w-8 h-8" />,
      color: 'bg-yellow-500',
      details: [
        "Currently studying for the CompTIA A+ certification",
        "Enhancing skills in IT fundamentals, troubleshooting, networking, and security"
      ]
    }
  ];

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-4">
      <div className="max-w-3xl w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-400">
            Education Journey
          </h1>
          <h2 className="text-lg md:text-xl lg:text-2xl text-gray-400">
            Continuous Learning and Growth
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-12 text-center"
        >
          <p className="text-base md:text-lg lg:text-xl text-gray-300">
            Committed to expanding knowledge and skills in the ever-evolving field of IT and Computer Science.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="space-y-4"
        >
          {educationItems.map((item, index) => (
            <motion.div
              key={item.title}
              className={`${item.color} rounded-lg shadow-lg overflow-hidden`}
              whileHover={{ scale: 1.02, boxShadow: '0 0 25px rgba(255, 255, 255, 0.2)' }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div 
                className="p-4 flex items-center justify-between cursor-pointer"
                onClick={() => toggleExpand(index)}
              >
                <div className="flex items-center">
                  <div className="text-white mr-4">{item.icon}</div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-white">{item.title}</h3>
                    <p className="text-sm text-gray-200">{item.institution}</p>
                  </div>
                </div>
                {expandedIndex === index ? <HiChevronUp className="w-6 h-6" /> : <HiChevronDown className="w-6 h-6" />}
              </div>
              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-4 pb-4"
                  >
                    <p className="text-xs text-gray-300 mb-2">{item.date}</p>
                    <ul className="list-disc list-inside text-sm text-white space-y-1">
                      {item.details.map((detail, detailIndex) => (
                        <li key={detailIndex}>{detail}</li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
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
            Always seeking new opportunities to learn and grow in the field of IT and Computer Science.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Education;