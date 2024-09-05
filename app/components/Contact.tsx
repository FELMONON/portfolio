'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HiMail, HiLocationMarker } from 'react-icons/hi';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setSubmitted(true);
      setName('');
      setEmail('');
      setMessage('');
    } catch (err) {
      setError('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-4">
      <div className="max-w-4xl w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-400">
            Contact Me
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-400">
            Let's Connect and Create Something Amazing
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-blue-400">Get in Touch</h3>
            <p className="text-gray-300 mb-6">
              I&apos;m always eager to new opportunities and collaborations. Feel free to reach out!
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <HiMail className="text-green-400 mr-3 text-xl" />
                <span>felmonwork@gmail.com</span>
              </div>
              <div className="flex items-center">
                <HiLocationMarker className="text-green-400 mr-3 text-xl" />
                <span>Calgary, Alberta</span>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-400">Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-400">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-400">Message</label>
              <textarea
                id="message"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </motion.form>
        </div>

        {submitted && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-8 text-center text-green-400"
          >
            Thank you for your message! I&apos;ll get back to you soon.
          </motion.div>
        )}

        {error && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-8 text-center text-red-400"
          >
            {error}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Contact;