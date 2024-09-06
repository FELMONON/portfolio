'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log('Form submitted:', { name, email, message });
    // Reset form fields
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section id="contact" className="py-16 px-4 md:px-8 bg-gray-900">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-green-400">Contact Me</h2>
      <motion.form 
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-4">
          <label htmlFor="name" className="block text-white mb-2">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-green-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-white mb-2">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-green-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-white mb-2">Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-green-500 h-32"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
        >
          Send Message
        </button>
      </motion.form>
    </section>
  );
};

export default Contact;