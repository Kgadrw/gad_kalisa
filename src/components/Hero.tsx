'use client';

import React from 'react';
import { Phone, Mail, Linkedin, Github, Gitlab, Twitter, CloudUpload, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-gray-900">
      {/* Gradient Grid Background */}
      <div className="absolute inset-0 opacity-30 dark:opacity-20">
        {/* Vertical Lines */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(to right, rgba(59, 130, 246, 0.1) 1px, transparent 1px)',
          backgroundSize: '80px 100%',
          maskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)'
        }} />
        {/* Horizontal Lines */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(to bottom, rgba(59, 130, 246, 0.1) 1px, transparent 1px)',
          backgroundSize: '100% 80px',
          maskImage: 'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)'
        }} />
          </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium rounded-full">
            Full-Stack Developer & UI/UX Designer
          </span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl lg:text-6xl font-bold leading-tight mb-6"
        >
          <span className="block text-gray-900 dark:text-white">We are shaping the future</span>
          <span className="block gradient-text">through digital innovation</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto"
        >
          I&apos;m a passionate full-stack developer with a keen eye for design. I love creating beautiful, functional websites and applications that make a difference.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 mb-10 justify-center"
        >
            <a
              href="mailto:kalisagad05@gmail.com"
            className="group inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:rotate-1"
            >
            Start a Project
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/CV2.pdf"
              download
            className="inline-flex items-center justify-center px-6 py-3 border-2 border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105 hover:-rotate-1"
          >
            <CloudUpload className="mr-2 w-4 h-4" />
            Download CV
          </a>
        </motion.div>

        {/* Contact Info */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 text-sm text-gray-600 dark:text-gray-300 justify-center mb-8"
        >
          <div className="flex items-center justify-center">
            <Phone className="w-4 h-4 mr-2 text-blue-600" />
            <span>+250 791 998 365</span>
          </div>
          <div className="flex items-center justify-center">
            <Mail className="w-4 h-4 mr-2 text-blue-600" />
            <span>kalisagad05@gmail.com</span>
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="flex justify-center space-x-3"
        >
          <a href="https://github.com/Kgadrw" className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-110 hover:rotate-12">
            <Github className="w-4 h-4" />
          </a>
          <a href="https://linkedin.com/in/gad-kalisa-2aa319333/" className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-110 hover:-rotate-12">
            <Linkedin className="w-4 h-4" />
          </a>
          <a href="https://x.com/gadkalisa05" className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-110 hover:rotate-12">
            <Twitter className="w-4 h-4" />
          </a>
          <a href="https://gitlab.com/kalisagad05" className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-110 hover:-rotate-12">
            <Gitlab className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
