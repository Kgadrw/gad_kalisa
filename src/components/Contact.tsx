'use client';

import React, { useState } from "react";
import emailjs from "emailjs-com";
import { motion } from 'framer-motion';
import { Phone, Mail, Send, CheckCircle } from 'lucide-react';
import HomeNavbar from './HomeNavbar';
import Aurora from './Aurora';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "", projectType: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_15gmamg",
        "template_2d43xx1",
        { from_name: formData.name, from_email: formData.email, message: formData.message },
        "0t7uS81N1_DAuGVjE"
      )
      .then(() => {
        setIsSubmitted(true);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });

    setFormData({ name: "", email: "", message: "", projectType: "" });
  };

  const services = ["Web Design", "Web App Development", "Digital Marketing", "Ecommerce Development", "Mobile App Development", "Branding"];

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

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 pb-32 relative z-10 w-full min-h-full">
        {/* Header */}
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
            Get a Free Quote Today
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base text-blue-200/90 max-w-2xl mx-auto"
          >
            Please fill out the <span className="text-cyan-300 font-semibold">quick form</span> and we will get in touch with you in <span className="text-purple-300 font-semibold">lightning speed</span>.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-800/10 backdrop-blur-md rounded-xl shadow-lg border border-gray-700/20 p-8"
          >
            <h3 className="text-xl font-bold mb-6" style={{
              background: 'linear-gradient(to right, #3A29FF, #FF94B4, #FF3232)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Talk to our expert today
            </h3>
            
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-16 h-16 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-500/30">
                  <CheckCircle className="w-8 h-8 text-green-400" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">
                  Thank you for reaching out!
                </h4>
                <p className="text-blue-200/80">
                  We will get back to you as soon as possible.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-blue-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700/30 text-white border border-gray-600/40 rounded-lg focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-colors placeholder:text-gray-500"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-blue-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700/30 text-white border border-gray-600/40 rounded-lg focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-colors placeholder:text-gray-500"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="projectType" className="block text-sm font-semibold text-blue-300 mb-2">
                    Type of Project
                  </label>
                  <select 
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-700/30 text-white border border-gray-600/40 rounded-lg focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-colors"
                  >
                    <option value="">Select a project type</option>
                    <option value="Website">Website</option>
                    <option value="E-commerce">E-commerce</option>
                    <option value="SEO & Digital Marketing">SEO & Digital Marketing</option>
                    <option value="Branding">Branding</option>
                    <option value="Mobile App">Mobile App</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-blue-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-700/30 text-white border border-gray-600/40 rounded-lg focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-colors resize-none placeholder:text-gray-500"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className={`w-full py-3 px-6 font-semibold rounded-lg transition-all duration-300 flex justify-center items-center gap-2 ${
                      loading 
                        ? "bg-blue-400/50 cursor-not-allowed text-white" 
                        : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transform hover:scale-105"
                    }`}
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <svg
                          className="animate-spin h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 11-8 8z"
                          ></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Get a Free Quote
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <div className="bg-gray-800/10 backdrop-blur-md rounded-xl shadow-lg border border-gray-700/20 p-8">
              <h3 className="text-xl font-bold mb-6" style={{
                background: 'linear-gradient(to right, #3A29FF, #FF94B4, #FF3232)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                Contact Us
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="p-3 bg-blue-600/20 rounded-lg mr-4 border border-blue-500/30">
                    <Phone className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-blue-200/70">Phone</p>
                    <p className="text-lg font-semibold text-blue-200">+250 791 998 365</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="p-3 bg-purple-600/20 rounded-lg mr-4 border border-purple-500/30">
                    <Mail className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm text-blue-200/70">Email</p>
                    <p className="text-lg font-semibold text-blue-200">kalisagad05@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/10 backdrop-blur-md rounded-xl shadow-lg border border-gray-700/20 p-8">
              <h4 className="text-lg font-bold mb-4 text-blue-300">Services</h4>
              <div className="grid grid-cols-2 gap-3">
                {services.map((service, index) => (
                  <div 
                    key={index} 
                    className="text-sm text-blue-200/80 p-2 bg-gray-700/20 rounded border border-gray-600/30 hover:border-blue-500/50 transition-colors"
                  >
                    {service}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
