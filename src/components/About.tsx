'use client';

import React from 'react';
import { useDarkMode } from '../components/darkmode';
import { Code, Users, Award, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const { darkMode } = useDarkMode();

  const stats = [
    { icon: <Code className="w-8 h-8" />, number: "50+", label: "Projects Completed" },
    { icon: <Users className="w-8 h-8" />, number: "30+", label: "Happy Clients" },
    { icon: <Award className="w-8 h-8" />, number: "4+", label: "Years Experience" },
    { icon: <Clock className="w-8 h-8" />, number: "24/7", label: "Support Available" }
  ];

  const skills = [
    "Web Development", "UI/UX Design", "Mobile Development", 
    "E-commerce Solutions", "Digital Marketing", "Branding"
  ];


  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              About Me
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Hey! I&apos;m Gad, a full-stack developer from Kigali, Rwanda. What started as curiosity about how websites work has grown into a passion for building digital solutions that make a real impact. I love the challenge of turning complex problems into elegant, user-friendly applications.
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Over the past 4+ years, I&apos;ve had the privilege of working with amazing clients across Rwanda and Africa, helping them bring their ideas to life. Whether it&apos;s an e-commerce platform, a data analytics dashboard, or a business management system, I approach each project with the same dedication and attention to detail.
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community. I believe in continuous learning and staying ahead of the curve in this ever-evolving tech landscape.
            </p>

            {/* Technical Skills */}
            <div className="mb-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Technical Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                        <motion.span
                          key={index}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.2, delay: index * 0.05 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.05 }}
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            darkMode
                              ? 'bg-gray-800 text-gray-300 border border-gray-700'
                              : 'bg-white text-gray-700 border border-gray-200'
                          }`}
                        >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

                    <motion.a
                      href="mailto:kalisagad05@gmail.com"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-all duration-300"
                    >
              Let&apos;s Work Together
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </motion.div>

          {/* Right Content - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className={`text-center p-6 rounded-xl card-hover ${
                  darkMode
                    ? 'bg-gray-800 border border-gray-700'
                    : 'bg-white border border-gray-200'
                }`}
              >
                <div className="text-blue-600 dark:text-blue-400 mb-3 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                  {stat.number}
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-300 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default About;
