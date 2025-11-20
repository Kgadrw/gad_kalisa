'use client';

import React from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const HomeNavbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();
  
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
  ];

  return (
    <nav className="w-full relative z-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center h-16 bg-gray-800/10 backdrop-blur-md rounded-2xl shadow-lg border border-gray-700/20 px-6">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold">
            <span className="text-blue-600">G</span>
            <span className="text-white">K</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`font-medium transition-colors ${
                    isActive
                      ? 'text-white font-semibold border-b-2 border-blue-400 pb-1'
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link
              href="/contact"
              className="px-6 py-2 bg-transparent text-white font-semibold rounded-xl border-2 border-white/30 hover:border-white/60 hover:bg-white/10 transition-all duration-300"
            >
              Contact Me
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-gray-800/10 backdrop-blur-md border border-gray-700/20 rounded-2xl shadow-lg mt-2 mx-6">
            <div className="px-4 pt-4 pb-4 space-y-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      isActive
                        ? 'bg-white/20 text-white font-semibold border-l-4 border-blue-400'
                        : 'text-white hover:bg-white/10'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                );
              })}
              <div className="pt-4 pb-2">
                <Link
                  href="/contact"
                  className="block w-full px-3 py-2 bg-transparent text-white font-semibold rounded-xl text-center border-2 border-white/30 hover:border-white/60 hover:bg-white/10 transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default HomeNavbar;

