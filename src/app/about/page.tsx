'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, Phone, Mail, GraduationCap, Briefcase, Award, 
  Code, Palette, Languages, Heart, ExternalLink 
} from 'lucide-react';
import HomeNavbar from '@/components/HomeNavbar';
import Aurora from '@/components/Aurora';
import Link from 'next/link';

const AboutPage = () => {
  const certifications = [
    "JavaScript Full Course — Klab Academy (Nov 2024)",
    "HTML — Klab Academy (Nov 2024)",
    "Data Privacy — Klab Academy (Nov 2024)",
    "Business Model Readiness — Klab Academy (Nov 2024)",
    "Data Analysis with Python — FreeCodeCamp (Nov 2024, 300-hour curriculum)",
    "Compliance and Agreements — Klab Academy (Nov 2024)",
    "UI Design with Figma — Klab Academy (Oct 2024)",
    "Front-End Development Libraries Certification — FreeCodeCamp (Oct 2024, Focus on React.js and Bootstrap)",
    "AI Integration Bootcamp — Klab Academy (Oct 2024)"
  ];

  const skills = {
    "Design & Prototyping": ["Figma", "Adobe XD", "Sketch"],
    "Front-End Development": ["HTML", "CSS", "JavaScript", "React.js", "Bootstrap", "WIX"],
    "User Research & Testing": ["Wireframing", "User Flows", "Usability Testing"],
    "AI Integration": ["Integrating AI tools within design workflows to enhance user experience"],
    "Programming & Tools": ["MS 360 Suite", "G-Suite", "Canva", "PowerBI", "Tableau"]
  };

  const experiences = [
    {
      role: "Frontend Web Developer",
      company: "3DP | Data Driven Decision Partners",
      duration: "Dec 2023 - Present | Seasonal",
      website: "https://3dp.rw",
      responsibilities: [
        "Develop and maintain front-end components for data-driven platforms",
        "Enhance user experience through optimized UI/UX designs",
        "Collaborate with data teams to visualize and present insights effectively"
      ]
    },
    {
      role: "Web Developer",
      company: "CAPITALIST SUPPLY AND LOGISTICS LTD",
      duration: "Dec 2024 - Feb 2025 | Remote - On-site",
      responsibilities: [
        "Develop and maintain responsive web applications using HTML, CSS, JavaScript, and React.js",
        "Collaborate with cross-functional teams to design and implement user-friendly interfaces",
        "Troubleshoot and debug issues to ensure optimal functionality and performance",
        "Optimize web pages for speed and scalability across all devices",
        "Integrate back-end services and APIs with front-end applications",
        "Continuously update and improve websites based on client feedback and user data",
        "Stay up-to-date with emerging web technologies and design trends"
      ]
    },
    {
      role: "IT Specialist",
      company: "Uza Solution",
      duration: "April 2024 - Feb 2025",
      website: "https://uzasolutions.com",
      responsibilities: [
        "Supported the design and development of websites using platforms like Wix and other web development tools",
        "Assisted in IT infrastructure support, troubleshooting technical issues, and improving system performance",
        "Worked closely with clients to gather requirements and deliver tailored website solutions"
      ]
    },
    {
      role: "Freelancer",
      company: "Self-employed",
      duration: "2024 - Present",
      responsibilities: [
        "Designed user-friendly interfaces for clients using tools like Figma and Adobe XD",
        "Worked on front-end projects utilizing HTML, CSS, and JavaScript to bring designs to life",
        "Conducted usability testing and gathered user feedback to refine designs and improve user experiences"
      ]
    }
  ];

  return (
    <div className="fixed inset-0 overflow-y-auto bg-gray-900" style={{ height: '100vh' }}>
      {/* Aurora Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <Aurora
          colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>

      {/* Navbar */}
      <div className="relative z-20">
        <HomeNavbar />
      </div>
      
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20 pb-32 relative z-10 w-full min-h-full">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl lg:text-4xl font-bold mb-3"
            style={{
              background: 'linear-gradient(to right, #3A29FF, #FF94B4, #FF3232)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            About Me
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base text-blue-200/90 max-w-2xl mx-auto"
          >
            Full-Stack Developer & UI/UX Designer from <span className="text-cyan-300 font-semibold">Kigali, Rwanda</span>
          </motion.p>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-gray-800/10 backdrop-blur-md rounded-2xl p-6 mb-12 border border-gray-700/20"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-cyan-400" />
              <span className="text-blue-200/90">Kigali, Rwanda</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-cyan-400" />
              <a href="tel:+250791998365" className="text-blue-200/90 hover:text-cyan-300 transition-colors">
                +250 791 998 365
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-cyan-400" />
              <a href="mailto:kalisagad05@gmail.com" className="text-blue-200/90 hover:text-cyan-300 transition-colors">
                kalisagad05@gmail.com
              </a>
            </div>
          </div>
        </motion.div>

        {/* Summary */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <Code className="w-6 h-6 text-cyan-400" />
            Summary
          </h2>
          <div className="bg-gray-800/10 backdrop-blur-md rounded-xl p-6 border border-gray-700/20">
            <p className="text-blue-200/90 leading-relaxed">
              Skilled in <span className="font-semibold text-cyan-300">HTML, CSS, JavaScript, and React.js</span>, with hands-on experience developing responsive, high-performance websites. 
              Proficient in design tools like <span className="font-semibold text-purple-300">Figma and Adobe XD</span>, specializing in crafting intuitive user interfaces and seamless user experiences. 
              Background includes working with both code-based and no-code platforms, collaborating with teams, and delivering tailored digital solutions across diverse industries.
            </p>
          </div>
        </motion.section>

        {/* Education */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <GraduationCap className="w-6 h-6 text-cyan-400" />
            Education
          </h2>
          <div className="bg-gray-800/10 backdrop-blur-md rounded-xl p-6 border border-gray-700/20">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg">
                <GraduationCap className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-1">
                  Bachelor&apos;s Degree, Computer Science
                </h3>
                <p className="text-blue-200/80 mb-2">University of the People</p>
                <p className="text-sm text-blue-200/60">Nov 2024 - 2028</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Experience */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <Briefcase className="w-6 h-6 text-cyan-400" />
            Experience
          </h2>
          <div className="space-y-4">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="bg-gray-800/10 backdrop-blur-md rounded-xl p-6 border border-gray-700/20 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 
                        className="text-xl font-semibold"
                        style={{
                          background: 'linear-gradient(to right, #3A29FF, #FF94B4, #FF3232)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text'
                        }}
                      >
                        {exp.role}
                      </h3>
                      {exp.website && (
                        <a
                          href={exp.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-cyan-400 hover:text-cyan-300 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                    <p className="text-blue-200/80 font-medium mb-2">{exp.company}</p>
                    <p className="text-sm text-blue-200/60">{exp.duration}</p>
                  </div>
                </div>
                <ul className="space-y-2 mt-4">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start gap-2 text-blue-200/90">
                      <span className="text-cyan-400 mt-1.5">•</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Certifications */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <Award className="w-6 h-6 text-cyan-400" />
            Certifications
          </h2>
          <div className="bg-gray-800/10 backdrop-blur-md rounded-xl p-6 border border-gray-700/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.9 + index * 0.05 }}
                  className="flex items-start gap-2 p-3 bg-gray-800/20 backdrop-blur-sm rounded-lg border border-gray-700/30 hover:border-yellow-400/50 transition-colors"
                >
                  <Award className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-blue-200/90">{cert}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Skills */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <Palette className="w-6 h-6 text-cyan-400" />
            Skills
          </h2>
          <div className="space-y-4">
            {Object.entries(skills).map(([category, items], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1 + index * 0.1 }}
                className="bg-gray-800/10 backdrop-blur-md rounded-xl p-6 border border-gray-700/20"
              >
                <h3 className="text-lg font-semibold text-white mb-3">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((item, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 bg-gradient-to-r from-blue-600/30 to-purple-600/30 text-blue-200 rounded-lg text-sm font-medium border border-blue-400/40"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Languages & Interests */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
        >
          {/* Languages */}
          <div className="bg-gray-800/10 backdrop-blur-md rounded-xl p-6 border border-gray-700/20">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Languages className="w-6 h-6 text-cyan-400" />
              Languages
            </h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-800/20 backdrop-blur-sm rounded-lg border border-gray-700/30">
                <span className="text-blue-200/90 font-medium">English</span>
                <span className="text-cyan-400 font-semibold">Fluent</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-800/20 backdrop-blur-sm rounded-lg border border-gray-700/30">
                <span className="text-blue-200/90 font-medium">Kinyarwanda</span>
                <span className="text-cyan-400 font-semibold">Native</span>
              </div>
            </div>
          </div>

          {/* Interests */}
          <div className="bg-gray-800/10 backdrop-blur-md rounded-xl p-6 border border-gray-700/20">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Heart className="w-6 h-6 text-cyan-400" />
              Interests
            </h2>
            <div className="flex flex-wrap gap-2">
              {["Technology", "Digital Art", "User Experience Trends"].map((interest, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gradient-to-r from-pink-600/30 to-purple-600/30 text-pink-200 rounded-lg text-sm font-medium border border-pink-400/40"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          className="text-center"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-transparent text-white font-semibold rounded-xl border-2 border-white/30 hover:border-white/60 hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
          >
            Get In Touch
            <ExternalLink className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;

