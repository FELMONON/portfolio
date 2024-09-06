'use client';

import HomePage from './components/HomePage';
import Skills from './components/Skills';
import Education from './components/Education';
import { Analytics } from '@vercel/analytics/react';

export default function Home() {
  return (
    <main>
      <HomePage />
      <Skills />
      <Education />
      <Analytics />
    </main>
  );
}