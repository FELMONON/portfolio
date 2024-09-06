'use client';

import { useEffect } from 'react';
import HomePage from './components/HomePage';
import Skills from './components/Skills';
import Education from './components/Education';
import { Analytics } from '@vercel/analytics/react';

export default function Home() {
  useEffect(() => {
    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <main>
      <HomePage />
      <Skills />
      <Education />
      <Analytics />
    </main>
  );
}