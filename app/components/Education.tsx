'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiAcademicCap, HiBookOpen, HiLightBulb, HiChevronDown, HiChevronUp } from 'react-icons/hi';

interface Education {
  degree: string;
  institution: string;
  year: string;
  description: string[];
}

const EducationCard = ({ education }: { education: Education }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div 
      className="bg-gray-800 rounded-lg p-6 mb-6 cursor-pointer"
      whileHover={{ scale: 1.02 }}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <h3 className="text-xl font-bold text-green-400 mb-2">{education.degree}</h3>
      <p className="text-gray-300 mb-2">{education.institution}</p>
      <p className="text-gray-400 mb-4">{education.year}</p>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="list-disc list-inside text-gray-300">
              {education.description.map((item, index) => (
                <li key={index} className="mb-2">{item}</li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.button 
        className="mt-4 text-green-400 underline focus:outline-none"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {isExpanded ? 'Show Less' : 'Show More'}
      </motion.button>
    </motion.div>
  );
};

const Education = () => {
  const educationHistory: Education[] = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Example",
      year: "2018 - 2022",
      description: [
        "Focused on software development, algorithms, and data structures",
        "Completed projects in web development, mobile app development, and machine learning",
        "Participated in coding competitions and hackathons"
      ]
    },
    {
      degree: "High School Diploma",
      institution: "Example High School",
      year: "2014 - 2018",
      description: [
        "Excelled in mathematics and computer science courses",
        "Participated in robotics club and science fairs",
        "Developed a passion for technology and problem-solving"
      ]
    }
  ];

  return (
    <section className="py-16 px-4 md:px-8 bg-gray-900">
      <motion.h2 
        className="text-3xl md:text-4xl font-bold mb-8 text-center text-green-400"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Education Journey
      </motion.h2>
      <div className="max-w-3xl mx-auto">
        {educationHistory.map((edu, index) => (
          <EducationCard key={index} education={edu} />
        ))}
      </div>
    </section>
  );
};

export default Education;