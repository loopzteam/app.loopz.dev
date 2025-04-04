"use client";

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Sidebar({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Sidebar toggle button */}
      <button
        className="fixed top-4 left-4 z-50"
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Sidebar container */}
      <div
        className={`fixed top-0 left-0 h-full w-[80%] md:w-[400px] bg-gray-100 shadow-xl transition-transform duration-300 ease-in-out transform ${
          open ? 'translate-x-0' : '-translate-x-full'
        } z-40 p-6 overflow-y-auto`}
      >
        <h2 className="text-xl font-semibold mb-4">Open Loopz</h2>
        {children}
      </div>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-30"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
}