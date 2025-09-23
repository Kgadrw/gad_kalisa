'use client';

import React from 'react';
import { Code, Smartphone, ShoppingCart, Search, PenTool, ArrowRight } from 'lucide-react';
import { useDarkMode } from '../components/darkmode';
import { motion } from 'framer-motion';

const Services = () => {
  const { darkMode } = useDarkMode();

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Web Design",
      description: "Static Web Design, Responsive Web Design, Dynamic Web Design",
      features: ["Custom Design", "Responsive Layout", "SEO Optimized", "Fast Loading"]
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Web App Development",
      description: "React App Development, Laravel App Development, Codeigniter App Development",
      features: ["Modern Frameworks", "Scalable Architecture", "API Integration", "Database Design"]
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "Digital Marketing",
      description: "Social Media Optimization, Social Media Marketing, Search Engine Optimization",
      features: ["SEO Strategy", "Social Media", "Content Marketing", "Analytics"]
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "Ecommerce Development",
      description: "Woo Commerce Development, Shopify Ecommerce development",
      features: ["Online Store", "Payment Integration", "Inventory Management", "Order Tracking"]
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile App Development",
      description: "Hybrid Apps, Android Apps Development",
      features: ["Cross Platform", "Native Performance", "App Store Ready", "Push Notifications"]
    },
    {
      icon: <PenTool className="w-8 h-8" />,
      title: "Branding",
      description: "Company Profile & Brochure, Business Card Design, Corporate Identity Design",
      features: ["Logo Design", "Brand Guidelines", "Marketing Materials", "Visual Identity"]
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className="text-left mb-12"
        >
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-3">
            Services
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-300 max-w-2xl">
            Comprehensive digital solutions to help your business grow and succeed.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02 }}
                      className={`group p-6 rounded-xl card-hover ${
                        darkMode
                          ? 'bg-gray-800 border border-gray-700'
                          : 'bg-white border border-gray-200'
                      }`}
                    >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg text-blue-600 dark:text-blue-400 mr-3">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {service.title}
                </h3>
              </div>
              
              <p className="text-xs text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-1 mb-4">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-xs text-gray-600 dark:text-gray-300">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="inline-flex items-center text-blue-600 dark:text-blue-400 text-xs font-medium group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors"
              >
                Learn More
                <ArrowRight className="ml-1 w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        
      </div>
    </section>
  );
};

export default Services;
