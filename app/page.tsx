'use client';

import { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Blog from './components/Blog';
import Contact from './components/Contact';
import HomePage from './components/Home'; // Renamed import

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');

  console.log('Active section:', activeSection);

  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <Header setActiveSection={setActiveSection} />
      <div className="max-w-4xl mx-auto p-4">
        {activeSection === 'home' && <HomePage />}
        {activeSection === 'about' && <About />}
        {activeSection === 'skills' && <Skills />}
        {activeSection === 'projects' && <Projects />}
        {activeSection === 'education' && <Education />}
        {activeSection === 'blog' && <Blog />}
        {activeSection === 'contact' && <Contact />}
      </div>
    </main>
  );
}