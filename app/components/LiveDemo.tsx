'use client';

import { useState } from 'react';

const LiveDemo = () => {
  const [demoMessage, setDemoMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const fetchDemoData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/demo');
      console.log('Response status:', response.status);
      console.log('Response headers:', response.headers);
      
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.status} ${response.statusText}`);
      }
      const data = await response.json();
      setDemoMessage(data.message);
    } catch (error) {
      console.error('Error fetching demo data:', error);
      setDemoMessage('Error fetching demo data. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-black p-4 rounded-lg">
      <p className="mb-4">This is a simple demo that fetches data from an API route.</p>
      <button 
        onClick={fetchDemoData}
        className="bg-green-500 text-black px-4 py-2 rounded hover:bg-green-600 transition"
        disabled={isLoading}
      >
        {isLoading ? 'Loading...' : 'Fetch Demo Data'}
      </button>
      {demoMessage && (
        <div className="mt-4 p-4 bg-gray-800 rounded">
          <p>{demoMessage}</p>
        </div>
      )}
    </div>
  );
};

export default LiveDemo;