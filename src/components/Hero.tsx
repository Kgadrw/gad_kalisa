'use client';  // Ensure this is a client-side component

import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Phone, Mail, Linkedin, Github, Gitlab, Twitter, CloudUpload } from 'lucide-react';
import { useDarkMode } from '../components/darkmode';  // Import the dark mode context

const Hero = () => {
  const { darkMode } = useDarkMode(); // Consume the dark mode context

  return (
    <section
      className={`flex items-center justify-center min-h-screen px-6 md:px-12 lg:px-32  ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-black'}`}
      style={{
        backgroundImage: 'url(/.png)',
        backgroundPosition: 'bottom',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center w-full">
        {/* Hero Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className={`text-4xl md:text-6xl font-extrabold leading-tight mb-4 font-[Poppins] ${darkMode ? 'text-white' : 'text-gray-600'}`}>
            Hello, I am Gad Kalisa
          </h1>
          <TypeAnimation
            sequence={[
              "I am a Frontend Developer", 1000,
              "UI/UX Designer", 1000,
              "Mobile Developer", 1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className={`text-2xl md:text-3xl font-extrabold font-[Poppins] ${darkMode ? 'text-blue-400' : 'text-blue-400'}`}
          />
          
          {/* Contact Information */}
          <div className="mt-6 space-y-2">
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <Phone className={darkMode ? 'text-blue-400' : 'text-blue-400'} />
              <span>0791998365</span>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <Mail className={darkMode ? 'text-blue-400' : 'text-blue-400'} />
              <span>kalisagad05@gmail.com</span>
            </div>
          </div>

          <p className={`mt-4 text-center md:text-left ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            I am Gad Kalisa, a certified UI/UX Designer and Front-End Developer skilled in HTML, CSS, JavaScript, and React.js. I specialize in
            creating responsive websites and user-friendly designs using tools like Figma and Adobe XD, delivering seamless
            user experiences and efficient web solutions.
          </p>

          <div className="mt-4 flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            {/* Hire me Button */}
            <a
              href="mailto:kalisagad05@gmail.com"
              className="px-4 py-3 bg-blue-400 text-white font-bold rounded-full hover:bg-gray-50 border border-blue-400 hover:text-blue-400 w-full sm:w-auto"
            >
              Hire me
            </a>
            {/* Get CV Button */}
            <a
              href="/CV.pdf"
              download
              className="flex items-center justify-center space-x-2 px-4 py-3 border border-blue-400 text-blue-400 font-bold rounded-full hover:text-white hover:bg-blue-400 w-full sm:w-auto"
            >
              <CloudUpload className="w-5 h-5" />
              <span>Get my CV</span>
            </a>
          </div>

          {/* Social Media Icons */}
          <div className="mt-8 flex justify-center md:justify-start space-x-4 text-white text-2xl">
            <a href="https://gitlab.com/kalisagad05" className="bg-blue-400 border border-blue-400 rounded-full p-2"><Gitlab /></a>
            <a href="https://x.com/gadkalisa05" className="bg-blue-400 border border-blue-400 rounded-full p-2"><Twitter /></a>
            <a href="https://github.com/Kgadrw" className="bg-blue-400 border border-blue-400 rounded-full p-2"><Github /></a>
            <a href="https://linkedin.com/in/gad-kalisa-2aa319333/" className="bg-blue-400 border border-blue-400 rounded-full p-2"><Linkedin /></a>
          </div>
        </div>

        {/* Hero Image - Hidden on Mobile */}
        <div className="hidden md:flex md:w-1/2 justify-center md:justify-end mt-8 md:mt-0">
          <img
            src="/profile.png"
            alt="Profile"
            className={`w-40 md:w-2/3 max-w-xs rounded-full object-contain aspect-square border-4 border-blue-500 bg-blue-400 border-dotted ${darkMode ? 'bg-gray-900' : 'bg-blue-400'}`}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
