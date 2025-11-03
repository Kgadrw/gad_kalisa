'use client';

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Globe, Eye, X } from "lucide-react";
import { projects } from '@/data/projects';
import HomeNavbar from './HomeNavbar';
import Aurora from './Aurora';

const Projects = () => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  
  // Filter to show only uzasolutions.com and wegoconnect.net
  const featuredProjects = projects.filter(project => 
    project.id === "uzasolutions-com" || project.id === "wegoconnect-net"
  );

  const openPreview = (url: string) => {
    setPreviewUrl(url);
  };

  const closePreview = () => {
    setPreviewUrl(null);
  };

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
              Featured Projects
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-base text-blue-200/90 max-w-2xl mx-auto"
            >
              A showcase of <span className="text-cyan-300 font-semibold">impactful projects</span> demonstrating expertise in <span className="text-purple-300 font-semibold">full-stack development</span>, 
              <span className="text-pink-300 font-semibold"> digital transformation</span>, and <span className="text-blue-300 font-semibold">innovative solutions</span>.
            </motion.p>
        </motion.div>

        {/* Projects Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-800/10 backdrop-blur-md rounded-xl shadow-lg border border-gray-700/20 overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-700/30">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-blue-300">Project</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-blue-300">Description</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-blue-300">Category</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-blue-300">Technologies</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-blue-300">Actions</th>
                </tr>
              </thead>
              <tbody>
                {featuredProjects.map((project, index) => (
                  <motion.tr
                    key={project.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="border-b border-gray-700/20 hover:bg-gray-700/10 transition-colors"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <Globe className="w-4 h-4 text-blue-400" />
                        <span 
                          className="font-semibold"
                          style={{
                            background: 'linear-gradient(to right, #3A29FF, #FF94B4, #FF3232)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                          }}
                        >
                          {project.name}
                        </span>
                        {project.pro && (
                          <span className="bg-yellow-400 text-black text-xs font-bold px-2 py-0.5 rounded-full">
                            PRO
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-blue-200/80 max-w-xs">
                        {project.description}
                      </p>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-wrap gap-1.5">
                        {project.categories.map((category, catIndex) => (
                          <span
                            key={catIndex}
                            className="px-2 py-1 bg-gradient-to-r from-blue-600/30 to-purple-600/30 text-blue-200 text-xs rounded border border-blue-400/40"
                          >
                            {category}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.slice(0, 3).map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-gray-700/30 text-xs rounded border border-gray-600/40 font-medium"
                            style={{
                              background: 'linear-gradient(to right, #3A29FF, #FF94B4, #FF3232)',
                              WebkitBackgroundClip: 'text',
                              WebkitTextFillColor: 'transparent',
                              backgroundClip: 'text',
                              borderColor: 'rgba(58, 41, 255, 0.3)'
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span 
                            className="px-2 py-1 text-xs"
                            style={{
                              background: 'linear-gradient(to right, #3A29FF, #FF94B4, #FF3232)',
                              WebkitBackgroundClip: 'text',
                              WebkitTextFillColor: 'transparent',
                              backgroundClip: 'text',
                              opacity: 0.6
                            }}
                          >
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => openPreview(project.link)}
                          className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200 transition-colors group/preview"
                        >
                          <Eye className="w-4 h-4" />
                          <span className="text-sm">Preview</span>
                        </button>
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-blue-300 hover:text-blue-200 transition-colors group/link"
                        >
                          <span className="text-sm">Visit</span>
                          <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                        </a>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Live Preview Modal */}
        <AnimatePresence>
          {previewUrl && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
              onClick={closePreview}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative w-full max-w-4xl max-h-[70vh] bg-gray-900 rounded-xl shadow-2xl overflow-hidden border border-gray-700/50"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="flex items-center justify-between p-3 bg-gray-800/50 border-b border-gray-700/50">
                  <div className="flex items-center gap-2">
                    <Eye className="w-4 h-4 text-cyan-400" />
                    <h3 className="text-base font-semibold text-white">Live Preview</h3>
                  </div>
                  <button
                    onClick={closePreview}
                    className="p-1.5 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-gray-700/50"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Preview Frame */}
                <div className="w-full h-[calc(70vh-3rem)]">
                  <iframe
                    src={previewUrl}
                    className="w-full h-full border-0"
                    title="Live Preview"
                    allow="fullscreen"
                  />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Projects;
