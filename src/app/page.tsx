'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [response, setResponse] = useState('');

  useEffect(() => {
    async function fetchAIResponse() {
      const res = await fetch('/api/openai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: "What's the best way to untangle a complex thought?" }),
      });

      const data = await res.json();
      setResponse(data.response || 'No response');
    }

    fetchAIResponse();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <p className="max-w-md text-center">{response}</p>
    </div>
  );
}