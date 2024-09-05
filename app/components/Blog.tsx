'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiCalendar, HiChevronRight, HiX, HiLightBulb, HiCode, HiShieldCheck } from 'react-icons/hi';

const Blog = () => {
  const [activeSection, setActiveSection] = useState<number | null>(null);

  const article = {
    title: "Revolutionizing IT Infrastructure: A Deep Dive into Modern Technologies",
    date: "April 15, 2024",
    excerpt: "Explore the cutting-edge technologies reshaping IT infrastructure and learn how they're transforming businesses in the digital age.",
    sections: [
      {
        title: "The Evolution of Cloud Computing",
        icon: <HiCode className="w-8 h-8" />,
        color: 'bg-blue-500',
        content: `
          <p>Cloud computing has undergone a remarkable transformation in recent years, evolving from a novel concept to an indispensable part of modern IT infrastructure. This section explores the latest advancements in cloud technologies and their impact on businesses.</p>
          <h4>Key Developments:</h4>
          <ul>
            <li><strong>Multi-Cloud Strategies:</strong> Organizations are increasingly adopting multi-cloud approaches to optimize performance, reduce costs, and avoid vendor lock-in.</li>
            <li><strong>Serverless Computing:</strong> The rise of serverless architectures is changing how applications are built and deployed, leading to faster development cycles and reduced operational overhead.</li>
            <li><strong>Edge Computing:</strong> As IoT devices proliferate, edge computing is becoming crucial for processing data closer to its source, enabling real-time analytics and improved performance.</li>
          </ul>
        `
      },
      {
        title: "AI and Machine Learning in IT Operations",
        icon: <HiLightBulb className="w-8 h-8" />,
        color: 'bg-green-500',
        content: `
          <p>Artificial Intelligence (AI) and Machine Learning (ML) are revolutionizing IT operations, bringing unprecedented levels of automation, prediction, and optimization to infrastructure management.</p>
          <h4>Transformative Applications:</h4>
          <ul>
            <li><strong>AIOps (AI for IT Operations):</strong> AIOps platforms use machine learning algorithms to analyze vast amounts of operational data, identifying patterns and anomalies that would be impossible for humans to detect manually.</li>
            <li><strong>Predictive Maintenance:</strong> ML models can predict when hardware failures are likely to occur, allowing IT teams to perform maintenance before issues arise.</li>
            <li><strong>Intelligent Automation:</strong> AI-powered automation tools are taking over routine tasks, freeing up IT professionals to focus on more strategic initiatives.</li>
          </ul>
        `
      },
      {
        title: "Next-Generation Cybersecurity",
        icon: <HiShieldCheck className="w-8 h-8" />,
        color: 'bg-red-500',
        content: `
          <p>As cyber threats become increasingly sophisticated, the cybersecurity landscape is evolving rapidly to keep pace. This section examines cutting-edge security technologies and strategies that are reshaping how organizations protect their digital assets.</p>
          <h4>Emerging Security Paradigms:</h4>
          <ul>
            <li><strong>Zero Trust Architecture:</strong> The Zero Trust model assumes no user or system should be trusted by default, even if they're inside the network perimeter.</li>
            <li><strong>AI-Powered Threat Detection:</strong> Machine learning algorithms are being employed to detect and respond to threats in real-time, analyzing network traffic patterns and user behavior.</li>
            <li><strong>Quantum-Safe Cryptography:</strong> With the looming threat of quantum computers, researchers are developing quantum-resistant algorithms to ensure long-term data security.</li>
          </ul>
        `
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-400">
            Tech Insights
          </h1>
          <h2 className="text-lg md:text-xl lg:text-2xl text-gray-400">
            Exploring the Future of IT
          </h2>
        </motion.div>
        
        <motion.div
          className="bg-gray-800 rounded-lg overflow-hidden shadow-lg mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="p-6">
            <h3 className="text-2xl font-semibold mb-2 text-blue-400">{article.title}</h3>
            <div className="flex items-center text-gray-400 mb-4">
              <HiCalendar className="mr-2" />
              <span>{article.date}</span>
            </div>
            <p className="text-gray-300 mb-4">{article.excerpt}</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="space-y-4"
        >
          {article.sections.map((section, index) => (
            <motion.div
              key={section.title}
              className={`${section.color} rounded-lg shadow-lg overflow-hidden`}
              whileHover={{ scale: 1.02, boxShadow: '0 0 25px rgba(255, 255, 255, 0.2)' }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div 
                className="p-4 flex items-center justify-between cursor-pointer"
                onClick={() => setActiveSection(activeSection === index ? null : index)}
              >
                <div className="flex items-center">
                  <div className="text-white mr-4">{section.icon}</div>
                  <h3 className="text-lg md:text-xl font-semibold text-white">{section.title}</h3>
                </div>
                {activeSection === index ? <HiX className="w-6 h-6" /> : <HiChevronRight className="w-6 h-6" />}
              </div>
              <AnimatePresence>
                {activeSection === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-4 pb-4"
                  >
                    <div 
                      className="prose prose-invert max-w-none"
                      dangerouslySetInnerHTML={{ __html: section.content }}
                    />
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
            Stay tuned for more insights into the ever-evolving world of IT and technology.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Blog;