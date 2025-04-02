'use client';

import { useState } from 'react';

export default function Home() {
  const [thought, setThought] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async () => {
    if (!thought.trim()) {
      alert("Enter a thought before submitting.");
      return;
    }

    console.log("Sending thought:", thought); // explicitly log this

    try {
      const res = await fetch('/api/openai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ thought }),
      });

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      const data = await res.json();
      setResponse(data.response);
      console.log("AI Response:", data.response);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <textarea
        value={thought}
        onChange={(e) => setThought(e.target.value)}
        className="border rounded-md p-3 w-3/4 h-40"
        placeholder="What's on your mind?"
      />
      <button
        onClick={handleSubmit}
        className="mt-4 bg-black text-white px-4 py-2 rounded-md"
      >
        Untangle Your Mind
      </button>

      {response && (
        <div className="mt-6 p-4 border rounded-md w-3/4">
          <strong>AI Reflection:</strong>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
}