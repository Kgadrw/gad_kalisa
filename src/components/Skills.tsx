'use client';

import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useDarkMode } from '../components/darkmode';
import styles from '../components/sass.css';

const skills = [
  {
    category: "Frontend Development",
    tools: ["HTML", "CSS", "JavaScript", "React", "Vue", "Sass", "Bootstrap", "Tailwind CSS", "Webpack"]
  },
  {
    category: "UI/UX Design",
    tools: ["Figma", "Adobe XD", "Sketch", "InVision", "Zeplin", "Illustrator", "Photoshop"]
  },
  {
    category: "Mobile Development",
    tools: ["React Native", "Flutter", "Swift", "Kotlin", "Xcode", "Android Studio"]
  }
];

const Skills = () => {
  const { darkMode } = useDarkMode();

  return (
    <section
      className={`relative mx-auto px-6 md:px-12 lg:px-32 py-12 overflow-hidden ${styles.sectionBg} ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-black'
      }`}
    >
      <h2
        className={`text-4xl md:text-6xl font-bold font-[Poppins] mb-6 text-center md:text-left ${
          darkMode ? 'text-white' : 'text-gray-900'
        }`}
      >
        Skills
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {skills.map((category, index) => {
          const ref = useRef(null);
          const isInView = useInView(ref, { once: true, margin: "-100px" });

          const [rotate, setRotate] = useState({ x: 0, y: 0 });

          const handleMouseMove = (e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const midX = rect.width / 2;
            const midY = rect.height / 2;

            const rotateY = ((x - midX) / midX) * 10;
            const rotateX = -((y - midY) / midY) * 10;
            setRotate({ x: rotateX, y: rotateY });
          };

          const handleMouseLeave = () => {
            setRotate({ x: 0, y: 0 });
          };

          return (
            <motion.div
              key={index}
              ref={ref}
              className={`${styles.card} p-6 border rounded-2xl shadow-xl transition-transform duration-1000 ${
                darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
              }`}
              initial={{ rotateX: -90, opacity: 0, scale: 0.8 }}
              animate={isInView ? { rotateX: 0, opacity: 1, scale: 1 } : {}}
              transition={{
                duration: 1,
                delay: index * 0.3,
                type: "spring",
                stiffness: 40,
              }}
              style={{
                transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
              }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              whileHover={{ scale: 1.03 }}
            >
              <h3 className="text-lg font-bold mb-4 text-center md:text-left font-[Poppins]">
                {category.category}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {category.tools.map((tool, i) => (
                  <motion.div
                    key={i}
                    className={`${styles.bubble} p-2 text-xs font-medium text-center rounded-full ${
                      darkMode ? 'bg-blue-500 text-white' : 'bg-blue-400 text-white'
                    }`}
                    initial={{ y: -30, opacity: 0 }}
                    animate={isInView ? { y: 0, opacity: 1 } : {}}
                    transition={{
                      duration: 0.6,
                      delay: i * 0.05,
                      type: "spring",
                      stiffness: 60,
                    }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {tool}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
