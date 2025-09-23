import React from 'react'
import { Github, Linkedin, Twitter, Mail, Phone, ArrowRight } from 'lucide-react'
import { useDarkMode } from '../components/darkmode'

const Footer = () => {
  const { darkMode } = useDarkMode()

  return (
    <footer className={`${darkMode ? 'bg-gray-900' : 'bg-gray-50'} py-16`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-blue-600">G</span>
              <span className={darkMode ? 'text-white' : 'text-gray-900'}>K</span>
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-md">
              I am a passionate full-stack developer with a keen eye for design. I love creating beautiful, functional websites and applications that make a difference.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/Kgadrw" className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-blue-600 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/gad-kalisa-2aa319333/" className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-blue-600 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://x.com/gadkalisa05" className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-blue-600 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Services</h4>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              <li><a href="#services" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Web Design</a></li>
              <li><a href="#services" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Web App Development</a></li>
              <li><a href="#services" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Digital Marketing</a></li>
              <li><a href="#services" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Ecommerce Development</a></li>
              <li><a href="#services" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Mobile App Development</a></li>
              <li><a href="#services" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Branding</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone size={16} className="mr-3 text-blue-600" />
                <span className="text-gray-600 dark:text-gray-300">+250 791 998 365</span>
              </div>
              <div className="flex items-center">
                <Mail size={16} className="mr-3 text-blue-600" />
                <span className="text-gray-600 dark:text-gray-300">kalisagad05@gmail.com</span>
              </div>
              <div className="flex items-center">
                <span className="mr-3 text-blue-600">🇷🇼</span>
                <span className="text-gray-600 dark:text-gray-300">Rwanda</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className={`p-8 rounded-2xl text-center mb-12 ${
          darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
        }`}>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Want to know more about our way of working?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Request a quote and let&apos;s discuss how we can help your business grow.
          </p>
          <a
            href="mailto:kalisagad05@gmail.com"
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
          >
            Request a Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              ©2014 - 2025 Gad Kalisa. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#home" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors">Home</a>
              <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors">About</a>
              <a href="#works" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors">Works</a>
              <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
