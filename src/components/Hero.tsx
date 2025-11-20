'use client';

import React from 'react';
import { Phone, Mail, Linkedin, Github, Gitlab, Twitter, CloudUpload, ArrowRight, MapPin, Calendar, Code, Palette, Database, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Aurora from './Aurora';

const Hero = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();
  
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
  ];

  const keySkills = [
    { icon: <Code className="w-5 h-5" />, name: "Full-Stack Development", level: "Expert" },
    { icon: <Palette className="w-5 h-5" />, name: "UI/UX Design", level: "Advanced" },
    { icon: <Database className="w-5 h-5" />, name: "Database Management", level: "Expert" }
  ];

  return (
    <section className="relative h-screen flex flex-col overflow-hidden bg-gray-900">
      {/* Aurora Background */}
      <div className="absolute inset-0">
        <Aurora
          colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>


      {/* Navbar */}
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

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 flex-1 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Content - Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            {/* Professional Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="mb-4"
        >
              <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm font-semibold rounded-full border border-blue-200 dark:border-blue-700">
            Full-Stack Developer & UI/UX Designer
          </span>
        </motion.div>
        
            {/* Name and Title */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="text-3xl lg:text-4xl font-bold leading-tight mb-3"
        >
              <span 
                className="block"
                style={{
                  background: 'linear-gradient(to right, #3A29FF, #FF94B4, #FF3232)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                Gad Kalisa
              </span>
              <span className="block text-blue-200/90 text-xl lg:text-2xl font-medium">Full-Stack Developer</span>
        </motion.h1>

            {/* Experience Summary */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="mb-4"
            >
              <p className="text-base text-blue-200/90 mb-4">
                <span className="text-cyan-300 font-semibold">4+ years of experience</span> building <span className="text-purple-300 font-semibold">scalable web applications</span> and <span className="text-pink-300 font-semibold">digital solutions</span> for businesses across <span className="text-blue-300 font-semibold">Rwanda and Africa</span>.
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-blue-200/80 justify-center lg:justify-start">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2 text-cyan-400" />
                  <span className="text-cyan-300">4+ Years Experience</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2 text-purple-400" />
                  <span className="text-purple-300">Kigali, Rwanda</span>
                </div>
              </div>
            </motion.div>

            {/* Key Skills */}
            <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              className="mb-4"
            >
              <h3 
                className="text-base font-semibold mb-3"
                style={{
                  background: 'linear-gradient(to right, #3A29FF, #FF94B4, #FF3232)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                Core Expertise
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {keySkills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2, delay: 0.5 + index * 0.1 }}
                    className="flex items-center p-2 bg-gray-800/20 backdrop-blur-sm rounded-lg border border-gray-700/30"
                  >
                    <div className="text-blue-400 mr-2">{skill.icon}</div>
                    <div>
                      <div className="text-xs font-medium text-blue-200">{skill.name}</div>
                      <div className="text-xs text-blue-300/70">{skill.level}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 mb-4 justify-center lg:justify-start"
        >
            <a
              href="mailto:kalisagad05@gmail.com"
                className="group inline-flex items-center justify-center px-6 py-3 bg-transparent text-white font-semibold rounded-3xl border-2 border-cyan-400/40 hover:border-cyan-400/80 hover:bg-cyan-400/10 transition-all duration-300 transform hover:scale-105 hover:text-cyan-300"
            >
            Start a Project
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/CV2.pdf"
              download
                className="group inline-flex items-center justify-center px-6 py-3 bg-transparent text-white font-semibold rounded-3xl border-2 border-purple-400/40 hover:border-purple-400/80 hover:bg-purple-400/10 transition-all duration-300 transform hover:scale-105 hover:text-purple-300"
          >
            <CloudUpload className="mr-2 w-4 h-4 group-hover:rotate-12 transition-transform" />
            Download CV
          </a>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-6 text-sm text-blue-200/80 justify-center lg:justify-start mb-4"
        >
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-blue-400" />
            <span>+250 791 998 365</span>
          </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-blue-400" />
            <span>kalisagad05@gmail.com</span>
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.8 }}
              className="flex justify-center lg:justify-start space-x-4 mb-2"
        >
              <a href="https://github.com/Kgadrw" className="p-3 bg-gray-800/20 backdrop-blur-sm rounded-full hover:bg-cyan-500/30 hover:text-cyan-300 border border-transparent hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-110">
                <Github className="w-5 h-5 text-blue-200" />
          </a>
              <a href="https://linkedin.com/in/gad-kalisa-2aa319333/" className="p-3 bg-gray-800/20 backdrop-blur-sm rounded-full hover:bg-blue-500/30 hover:text-blue-300 border border-transparent hover:border-blue-400/50 transition-all duration-300 transform hover:scale-110">
                <Linkedin className="w-5 h-5 text-blue-200" />
          </a>
              <a href="https://x.com/gadkalisa05" className="p-3 bg-gray-800/20 backdrop-blur-sm rounded-full hover:bg-pink-500/30 hover:text-pink-300 border border-transparent hover:border-pink-400/50 transition-all duration-300 transform hover:scale-110">
                <Twitter className="w-5 h-5 text-blue-200" />
          </a>
              <a href="https://gitlab.com/kalisagad05" className="p-3 bg-gray-800/20 backdrop-blur-sm rounded-full hover:bg-purple-500/30 hover:text-purple-300 border border-transparent hover:border-purple-400/50 transition-all duration-300 transform hover:scale-110">
                <Gitlab className="w-5 h-5 text-blue-200" />
          </a>
        </motion.div>
          </motion.div>

          {/* Right Content - Professional Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto lg:max-w-lg">
              {/* Image Container with Professional Styling */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full transform rotate-3"></div>
                        <div className="relative bg-gray-800 p-2 rounded-full shadow-2xl">
                  <div className="aspect-square relative overflow-hidden rounded-full">
                    <Image
                      src="/profile.jpeg"
                      alt="Gad Kalisa - Full-Stack Developer"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>
              
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
