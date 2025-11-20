'use client';

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Globe, Eye, X, Search } from "lucide-react";
import { projects } from '@/data/projects';
import HomeNavbar from './HomeNavbar';
import Aurora from './Aurora';

const Projects = () => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  
  // Filter projects based on search
  const filteredProjects = projects.filter(project =>
    project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.categories.some(cat => cat.toLowerCase().includes(searchQuery.toLowerCase()))
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
            className="text-center mb-8"
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
              Projects
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-base text-blue-200/90 max-w-2xl mx-auto mb-6"
            >
              Here are some projects I&apos;ve built that I&apos;m <span className="text-cyan-300 font-semibold">proud of</span>. Each one represents a unique challenge solved, a client&apos;s vision realized, and a step forward in my journey as a <span className="text-purple-300 font-semibold">developer</span>. 
              From <span className="text-pink-300 font-semibold">e-commerce platforms</span> to <span className="text-blue-300 font-semibold">data-driven solutions</span>, these are the stories behind the code.
            </motion.p>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="max-w-md mx-auto"
            >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-300/60" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-gray-800/30 backdrop-blur-md border border-gray-700/30 rounded-xl text-white placeholder-blue-200/50 focus:outline-none focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                />
              </div>
            </motion.div>
        </motion.div>

        {/* Projects Cards Grid */}
        {filteredProjects.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-blue-200/70 text-lg">No projects found matching your search.</p>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-gray-800/20 backdrop-blur-md rounded-2xl shadow-lg border border-gray-700/30 overflow-hidden hover:border-cyan-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10 hover:scale-[1.03] group cursor-pointer"
              >
                {/* Project Content */}
                <div className="p-6 h-full flex flex-col">
                  {/* Project Name */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3 flex-1 min-w-0">
                      <div className="p-2 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg flex-shrink-0">
                        <Globe className="w-5 h-5 text-cyan-400" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 
                          className="font-bold text-lg mb-1 truncate"
                          style={{
                            background: 'linear-gradient(to right, #3A29FF, #FF94B4, #FF3232)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                          }}
                        >
                          {project.name}
                        </h3>
                        <p className="text-xs text-blue-200/60 line-clamp-2">
                          {project.description}
                        </p>
                      </div>
                    </div>
                    {project.pro && (
                      <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black text-xs font-bold px-2.5 py-1 rounded-full flex-shrink-0 shadow-lg">
                        PRO
                      </span>
                    )}
                  </div>

                  {/* Categories */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.categories.slice(0, 2).map((category, catIndex) => (
                      <span
                        key={catIndex}
                        className="px-2.5 py-1 bg-blue-500/10 text-blue-300 text-xs rounded-lg border border-blue-400/20"
                      >
                        {category}
                      </span>
                    ))}
                    {project.categories.length > 2 && (
                      <span className="px-2.5 py-1 text-blue-300/60 text-xs">
                        +{project.categories.length - 2}
                      </span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3 pt-4 mt-auto border-t border-gray-700/30">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        openPreview(project.link);
                      }}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 rounded-lg transition-all duration-300 group/preview border border-cyan-400/20 hover:border-cyan-400/40"
                    >
                      <Eye className="w-4 h-4" />
                      <span className="text-sm font-medium">Preview</span>
                    </button>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-500/10 hover:bg-blue-500/20 text-blue-300 rounded-lg transition-all duration-300 group/link border border-blue-400/20 hover:border-blue-400/40"
                    >
                      <span className="text-sm font-medium">Visit Site</span>
                      <ExternalLink className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

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
