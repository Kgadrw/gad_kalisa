'use client'; // Ensure this is a client-side component

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Laptop, Factory, User, CalendarDays } from "lucide-react";
import { useDarkMode } from '../components/darkmode'; // Import the dark mode context

// Experiences Data
const experiences = [
  {
    role: "Frontend Web Developer",
    company: "3DP | Data Driven Decision Partners",
    duration: "Dec 2023 - Present | Seasonal",
    responsibilities: [
      "Develop and maintain front-end components for data-driven platforms.",
      "Enhance user experience through optimized UI/UX designs.",
      "Collaborate with data teams to visualize and present insights effectively."
    ]
  },
  {
    role: "Web Developer",
    company: "Capitalist And Supply L ltd",
    duration: "Dec 2024 - Feb 2025 | Remote (Kigali, Rwanda)",
    responsibilities: [
      "Develop and maintain responsive web applications using HTML, CSS, JavaScript, and React.js.",
      "Collaborate with cross-functional teams to design and implement user-friendly interfaces.",
      "Troubleshoot and debug issues to ensure optimal functionality and performance of the website.",
      "Optimize web pages for speed and scalability, ensuring a seamless user experience across all devices.",
      "Integrate back-end services and APIs with front-end applications to enhance site functionality.",
      "Continuously update and improve websites based on client feedback and user data.",
      "Stay up-to-date with emerging web technologies and design trends to implement innovative solutions."
    ]
  },
    {
    role: "IT specialist",
    company: "Uza solution",
    duration: "April 2024 - Feb 2025",
    responsibilities: [
      "Supported the design and development of websites using platforms like Wix and other web development tools",
      "Assisted in IT infrastructure support, troubleshooting technical issues, and improving system performance",
      "Troubleshoot and debug issues to ensure optimal functionality and performance of the website.",
      "Optimize web pages for speed and scalability, ensuring a seamless user experience across all devices.",
      "Integrate back-end services and APIs with front-end applications to enhance site functionality.",
      "Worked closely with clients to gather requirements and deliver tailored website solutions",
    ]
  },
  {
    role: "Freelancer",
    company: "Self-employed",
    duration: "2024 - Present",
    responsibilities: [
      "Designed user-friendly interfaces for clients using tools like Figma and Adobe XD.",
      "Worked on front-end projects utilizing HTML, CSS, and JavaScript to bring designs to life.",
      "Conducted usability testing and gathered user feedback to refine designs and improve user experiences."
    ]
  }
];

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState<number>(0); // Set first experience as default
  const { darkMode } = useDarkMode(); // Consume the dark mode context

  return (
    <section
      className={`relative mx-auto px-6 sm:px-12 md:px-24 lg:px-32 py-12 ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-700'
      }`}
    >
      <h2 className={`text-4xl sm:text-5xl md:text-6xl font-[Poppins] font-bold ${
        darkMode ? 'text-white' : 'text-gray-700'
      } mb-8 text-center md:text-left`}>
        Work <span className="text-blue-400">Experience</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`cursor-pointer p-4 border ${
                darkMode ? 'border-gray-800 text-gray-400' : 'border-blue-400'
              } shadow-md rounded-lg transition duration-300 ease-in-out ${
                selectedExperience === index
                  ? 'bg-blue-400 text-gray-400 font-[Poppins]'
                  : `${
                      darkMode
                        ? 'bg-gray-900 hover:bg-gray-700'
                        : 'bg-white hover:bg-gray-200'
                    } font-[Poppins]`
              }`}
              onClick={() => setSelectedExperience(index)}
            >
              <div className="flex items-center space-x-3">
                {index === 0 && (
                  <Laptop
                    className={`text-2xl ${
                      darkMode ? 'text-white' : 'text-gray-700'
                    }`}
                  />
                )}
                {index === 1 && (
                  <Factory
                    className={`text-2xl ${
                      darkMode ? 'text-white' : 'text-gray-700'
                    }`}
                  />
                )}
                {index === 2 && (
                  <User
                    className={`text-2xl ${
                      darkMode ? 'text-white' : 'text-gray-700'
                    }`}
                  />
                )}
                <h3
                  className={`text-lg font-semibold ${
                    darkMode ? 'text-white' : 'text-gray-600'
                  }`}
                >
                  {exp.company}
                </h3>
              </div>
            </div>
          ))}
        </div>
        <div className="col-span-2">
          {selectedExperience !== null && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`p-6 border rounded-lg ${
                darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
              }`}
            >
              <h3 className="text-xl sm:text-2xl font-bold font-[Poppins] text-blue-400 mb-2">
                {experiences[selectedExperience].role}
              </h3>
              <p className="text-gray-400 font-[Poppins] mb-4 italic flex items-center">
                <CalendarDays className="mr-2 text-blue-400" />
                {experiences[selectedExperience].duration}
              </p>
              <ul className="list-disc pl-6 text-gray-300 font-[Poppins] space-y-2">
                {experiences[selectedExperience].responsibilities.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Experience;
