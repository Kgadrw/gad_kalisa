'use client'; // Ensure this is a client-side component

import React from "react";
import { motion } from "framer-motion";
import { useDarkMode } from '../components/darkmode';  // Import the dark mode context

// Skills Data
const skills = [
  { category: "Frontend Development", tools: ["HTML", "CSS", "JavaScript", "React", "Vue", "Sass", "Bootstrap", "Tailwind CSS", "Webpack"] },
  { category: "UI/UX Design", tools: ["Figma", "Adobe XD", "Sketch", "InVision", "Zeplin", "Illustrator", "Photoshop"] },
  { category: "Mobile Development", tools: ["React Native", "Flutter", "Swift", "Kotlin", "Xcode", "Android Studio"] }
];

const Skills = () => {
  const { darkMode } = useDarkMode(); // Consume the dark mode context

  return (
    <section
      className={`relative mx-auto px-6 md:px-12 lg:px-32 py-12 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-black'}`}
      style={{ backgroundImage: 'url(/.png)' }}
    >
      <h2 className={`text-4xl md:text-6xl font-bold font-[Poppins] ${darkMode ? 'text-white' : 'text-gray-900'} mb-6 text-center md:text-left`}>
        Skills
      </h2>
      
      {/* Skills Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {skills.map((category, index) => (
          <motion.div
            key={index}
            className={`p-4 border rounded-lg ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-100 border-gray-200'}`}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-800'} mb-3 text-center md:text-left`}>
              {category.category}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 justify-center">
              {category.tools.map((tool, i) => (
                <motion.div
                  key={i}
                  className={`p-2 text-xs text-center rounded-full ${darkMode ? 'bg-blue-500 text-white' : 'bg-blue-400 text-white'}`}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  {tool}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
