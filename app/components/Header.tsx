// app/components/Header.tsx
'use client'
import Link from "next/link";
import React, { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
   <header className="p-4 bg-white/30 backdrop-blur-md flex justify-between items-center fixed top-0 left-0 w-full z-50">
      {/* Logo / Brand */}
      <h1 className="text-xl font-bold">Stand Out</h1>

      {/* Hamburger Menu */}
      <div className="relative">
        {/* Hamburger Icon */}
        <button
          className="p-2 text-gray-700 rounded-md focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="space-y-1">
            <span className="block w-6 h-0.5 bg-gray-700"></span>
            <span className="block w-6 h-0.5 bg-gray-700"></span>
            <span className="block w-6 h-0.5 bg-gray-700"></span>
          </div>
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md">
            <Link href="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
              Home
            </Link>
            <Link href="/resources" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
              Resources
            </Link>
            <Link href="mailto:dayton@letsoutstand.com" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
              Contact
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
