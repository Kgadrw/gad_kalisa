'use client';

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { projects } from '@/data/projects';
import Link from 'next/link';
import Image from 'next/image';

const Carousel = ({ images, onClick }: { images: string[], onClick?: () => void }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div onClick={onClick} className="w-full h-64 overflow-hidden relative cursor-pointer">
      <AnimatePresence initial={false}>
            <Image
              key={images[index]}
              src={images[index]}
              alt="Project Slide"
              fill
              className="object-cover absolute top-0 left-0"
            />
      </AnimatePresence>
    </div>
  );
};

const Modal = ({ images, onClose }: { images: string[], onClose: () => void }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const esc = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', esc);
    return () => document.removeEventListener('keydown', esc);
  }, [onClose]);

  useEffect(() => {
    const loop = setInterval(() => {
      setCurrent(prev => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(loop);
  }, [images]);

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center">
      <div className="relative max-w-4xl w-full p-4">
        <button onClick={onClose} className="absolute top-4 right-4 text-white">
          <X size={28} />
        </button>
            <motion.div
              initial={{ rotateY: 90, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1 }}
              exit={{ rotateY: -90, opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full max-h-[80vh] rounded-xl relative"
            >
              <Image 
                src={images[current]} 
                alt="Full View" 
                fill
                className="object-contain rounded-xl" 
              />
            </motion.div>
      </div>
    </div>
  );
};


const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("Web");
  const [modalImages, setModalImages] = useState<string[] | null>(null);
  const [showAll, setShowAll] = useState(false);

  const filteredProjects = projects.filter(project =>
    project.categories.includes(selectedCategory)
  );

  const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);

  return (
    <section id="works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-left mb-12"
        >
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
            Our Works
          </h2>
          <p className="text-sm text-gray-600 max-w-2xl mb-6">
                Explore our portfolio of successful projects and see how we&apos;ve helped businesses grow through digital innovation.
          </p>
          
          {/* Category Filter */}
          <div className="flex gap-3 mb-8">
            {["Web", "UI/UX"].map(category => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setSelectedCategory(category);
                  setShowAll(false);
                }}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {visibleProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/projects/${project.id}`}>
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden rounded-lg mb-4">
                  {project.images && project.images.length > 0 ? (
                    <Carousel images={project.images} onClick={() => setModalImages(project.images!)} />
                  ) : (
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-cover cursor-pointer group-hover:scale-105 transition-transform duration-300"
                      onClick={() => setModalImages([project.image])}
                    />
                  )}
                  {project.pro && (
                    <div className="absolute top-3 right-3">
                      <span className="bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded-full">
                        PRO
                      </span>
                    </div>
                  )}
                </div>
                
                {/* Project Name */}
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {project.name}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Show More/Less Button */}
        {filteredProjects.length > 6 && (
          <div className="text-center mt-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowAll(prev => !prev)}
              className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              {showAll ? "Show Less" : "See Portfolio"}
            </motion.button>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="inline-block p-8 rounded-2xl bg-gray-50">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to start your project?
            </h3>
            <p className="text-gray-600 mb-6">
                  Let&apos;s discuss how we can help bring your ideas to life.
            </p>
            <a
              href="mailto:kalisagad05@gmail.com"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Get a Free Quote
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {modalImages && <Modal images={modalImages} onClose={() => setModalImages(null)} />}
    </section>
  );
};

export default Projects;