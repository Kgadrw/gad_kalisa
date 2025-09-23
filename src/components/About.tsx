'use client';

import React, { useState } from 'react';
import { useDarkMode } from '../components/darkmode';
import { Code, Users, Award, Clock, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const { darkMode } = useDarkMode();
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

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

  const faqs = [
    {
      question: "Why should I choose you for my web design and development?",
      answer: "I am a trusted web design developer in Rwanda offering creative and customized websites that help businesses grow. I use the latest technology to build user-friendly and SEO-optimized websites that fit your business needs."
    },
    {
      question: "Do you offer custom website design or use pre-built templates?",
      answer: "I specialize in creating top-class custom-designed websites tailored to fit your business goals and target audience. I bring unique ideas to life, ensuring your website stands out and leaves a lasting impact."
    },
    {
      question: "Do you provide SEO-friendly websites?",
      answer: "Yes, I ensure that every website I create is SEO-friendly. An SEO-friendly website is easily crawlable by search engines, improving visibility, user experience, and overall online presence."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Best Web Design Company In Rwanda
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              I am a passionate full-stack developer with a keen eye for design, serving a variety of clients with industry-leading web solutions. My team is a curious mix of developers, designers, digital marketing experts and path breakers who can digitise your dreams.
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              I provide highly scalable business solutions to my clients with innovative approaches and advanced methodologies. I focus on understanding my clients, being transparent, and offering affordable services without cutting corners.
            </p>

            {/* Skills */}
            <div className="mb-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Services</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
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
              whileHover={{ scale: 1.05, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-all duration-300"
            >
              Get a Free Quote Today
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </motion.div>

          {/* Right Content - Stats */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, rotateY: 10 }}
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

        {/* FAQ Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-xl font-bold text-gray-900 dark:text-white text-left mb-8">
            FAQ
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {faqs.map((faq, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className={`rounded-xl overflow-hidden ${
                  darkMode 
                    ? 'bg-gray-800 border border-gray-700' 
                    : 'bg-white border border-gray-200'
                }`}
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full p-4 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <h4 className="text-sm font-bold text-gray-900 dark:text-white pr-2">
                    {faq.question}
                  </h4>
                  <ChevronDown 
                    className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
                      openFAQ === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                <motion.div
                  initial={false}
                  animate={{ 
                    height: openFAQ === index ? 'auto' : 0,
                    opacity: openFAQ === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-4 pt-0">
                    <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
