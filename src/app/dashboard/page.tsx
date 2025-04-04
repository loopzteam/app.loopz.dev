"use client";

import { useState } from 'react';
import Sidebar from './components/Sidebar';

export default function Dashboard() {
  const [inputValue, setInputValue] = useState(''); // <-- Clearly define state here

  const handleSubmit = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && inputValue.trim() !== '') {
      console.log("User input:", inputValue);
      setInputValue('');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Sidebar>
        <div className="space-y-4">
          <p>Your Loopz items go here!</p>
        </div>
      </Sidebar>

      <div className="fixed bottom-0 w-full bg-white p-4 shadow-md flex items-center space-x-2">
        <input
          type="text"
          placeholder="What's on your mind?"
          className="flex-grow p-3 rounded-full border focus:outline-none focus:ring-2 focus:ring-gray-400"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleSubmit}
        />

        <button
          onClick={() => {
            if (inputValue.trim() !== '') {
              console.log("User input:", inputValue);
              setInputValue('');
            }
          }}
          className="bg-black text-white w-12 h-12 rounded-full shadow-md hover:bg-gray-800 transition-colors duration-200"
        >
          <strong>+</strong>
        </button>
      </div>
    </div>
  );
}