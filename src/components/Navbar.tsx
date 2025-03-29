// components/Navbar.tsx
'use client';

import React, { useState } from 'react';
import { Github, Linkedin, Menu, X, Moon, Sun } from 'lucide-react';
import { useDarkMode } from '../components/darkmode'; // Adjust path as necessary
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <nav className={`w-full fixed top-0 left-0 z-50 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-black'} `}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between h-16 px-16 items-center">
          {/* Name on the left */}
          <Link href="/" className={`text-2xl font-black ${darkMode ? 'text-blue-400' : 'text-blue-400'}`}>
            <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>G</span>k
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-blue-400"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Social icons */}
          <div className={`lg:flex space-x-4 ${isOpen ? 'flex flex-col items-center absolute top-16 right-6 bg-white border border-gray-300 p-4 rounded-lg' : 'hidden lg:flex'}`}>
            <a href="https://github.com/Kgadrw" target="_blank" rel="noopener noreferrer">
              <Github size={24} className="text-blue-400 hover:text-blue-500" />
            </a>
            <a href="linkedin.com/in/gad-kalisa-2aa319333/" target="_blank" rel="noopener noreferrer">
              <Linkedin size={24} className="text-blue-400 hover:text-blue-500" />
            </a>
          </div>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="text-blue-400 p-2 rounded-full hover:bg-gray-300 dark:hover:bg-gray-700"
          >
            {darkMode ? <Sun size={24} /> : <Moon size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
