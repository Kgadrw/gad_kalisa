'use client';

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useDarkMode } from '../components/darkmode';
import { X } from "lucide-react";
import styles from '../components/sass.css';

const galleryImages = [
  "/image (1).jpeg",
  "/image (1).jpg",
  "/image (1).png",
  "/image (2).jpg",
  "/image (3).jpg",
  "/image (4).jpg",
  

];

const Gallery = () => {
  const { darkMode } = useDarkMode();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section
      className={`relative mx-auto px-6 md:px-12 lg:px-32 py-16 ${styles.sectionBg} ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-700'
      }`}
    >
      <h2 className="text-4xl md:text-6xl font-bold font-[Poppins] mb-12 text-center">
       Graphics Gallery
      </h2>

      {/* Masonry layout using columns */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {galleryImages.map((src, index) => (
          <motion.img
            key={index}
            src={src}
            alt={`Artwork ${index + 1}`}
            className="w-full mb-4 cursor-pointer object-cover hover:opacity-90 transition duration-300 break-inside-avoid"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onClick={() => setSelectedImage(src)}
          />
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="relative max-w-5xl w-full px-4">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white z-10"
              >
                <X size={28} />
              </button>
              <motion.img
                src={selectedImage}
                alt="Selected artwork"
                className="w-full max-h-[80vh] object-contain rounded-lg"
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
