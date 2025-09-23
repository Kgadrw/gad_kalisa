'use client';

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useDarkMode } from '../components/darkmode';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { darkMode } = useDarkMode();

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Works', href: '#works' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>

      {/* Main Navbar */}
      <nav className={`w-full ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="text-2xl font-bold">
              <span className="text-blue-600">G</span>
              <span className={darkMode ? 'text-white' : 'text-gray-900'}>K</span>
          </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`font-medium transition-colors hover:text-blue-600 ${
                    darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700'
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center">
              <a
                href="mailto:kalisagad05@gmail.com"
                className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get A Quote
              </a>
            </div>

          {/* Mobile Menu Button */}
          <button
              className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className={`lg:hidden ${darkMode ? 'bg-gray-800' : 'bg-white'} border-t border-gray-200 dark:border-gray-700`}>
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      darkMode 
                        ? 'text-gray-300 hover:bg-gray-700 hover:text-white' 
                        : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <div className="pt-4 pb-2">
                  <a
                    href="mailto:kalisagad05@gmail.com"
                    className="block w-full px-3 py-2 bg-blue-600 text-white font-semibold rounded-md text-center hover:bg-blue-700 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Get A Quote
                  </a>
                </div>
              </div>
            </div>
          )}
      </div>
    </nav>
    </>
  );
};

export default Navbar;
