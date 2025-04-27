'use client';

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, X } from "lucide-react";
import { useDarkMode } from '../components/darkmode';

// Carousel component for slideshow
const Carousel = ({ images, onClick }: { images: string[], onClick?: () => void }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div onClick={onClick} className="w-full h-48 overflow-hidden rounded-t-xl relative cursor-pointer">
      <AnimatePresence initial={false}>
        <motion.img
          key={images[index]}
          src={images[index]}
          alt="Project Slide"
          className="w-full h-full object-cover absolute top-0 left-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        />
      </AnimatePresence>
    </div>
  );
};

// Modal for viewing image
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
        <img src={images[current]} alt="Full View" className="w-full max-h-[80vh] object-contain rounded-xl" />
      </div>
    </div>
  );
};

// All project data
const projects = [
  {
    name: "IgaTek",
    description: "Self project: I built and designed the entire UI. Platform helps locals access digital literacy.",
    link: "https://iga.speclucs.rw/",
    image: "/igatek.JPG",
    categories: ["Pro", "Self"]
  },
  {
    name: "Uza bulk",
    description: "I handled everything solo — development and UI design for this e-commerce platform.",
    link: "https://www.uzabulk.com/",
    image: "/uza.PNG",
    categories: ["Pro", "Self"]
  },
  {
    name: "Unicash",
    description: "I built and designed this dashboard solo to help students manage their finances.",
    link: "https://unicash.vercel.app/",
    image: "/unicash.PNG",
    categories: ["Pro", "Self"]
  },
  {
    name: "JSM Ecomerce",
    description: "Full-stack e-commerce app with full UI design — all done by me alone.",
    link: "https://ecommerce-seven-kappa-12.vercel.app/",
    image: "/jsm.JPG",
    categories: ["Pro", "Self"]
  },
  {
    name: "Data driven partners",
    description: "Solo project: Built and designed the platform to connect data-driven partners with businesses.",
    link: "https://3dp.rw/",
    image: "/3dp.JPG",
    categories: ["Pro", "Self"]
  },
  {
    name: "Uza solution",
    description: "Solo project: i built it for uzasolution company.",
    link: "https://uzasolution.vercel.app/",
    image: "/uza.png",
    categories: ["Pro", "Self"]
  },
  {
    name: "Figma Mockup - Dashboard",
    description: "Clean and responsive UI mockup for Dashboard.",
    link: "#",
    image: "/1.png",
    categories: ["Web","Pro", "Self"]
  },
  {
    name: "Figma Mockup - Dashboard",
    description: "Dashboard UI mockup with a focus on data visualization.",
    link: "#",
    images: ["/2.png", "/3.png"],
    categories: ["Web", "Pro", "Self"]
  },
  {
    name: "Figma Mockup - Dashboard",
    description: "Responsive UI mockup for a dashboard with a modern design.",
    link: "#",
    image: "/4.png",
    categories: ["Web", "Pro", "Self"]
  }
];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [modalImages, setModalImages] = useState<string[] | null>(null);
  const { darkMode } = useDarkMode();

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter(project => project.categories.includes(selectedCategory));

  return (
    <section className={`relative mx-auto py-12 px-6 sm:px-12 md:px-24 lg:px-32 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-700'}`}>
      <div className="mb-6 flex flex-col sm:flex-row justify-between items-center">
        <h2 className="text-4xl sm:text-5xl font-bold font-[Poppins]">Projects</h2>
        <span className="font-[Poppins] font-semibold mt-2 sm:mt-0">Total Projects: {filteredProjects.length}</span>
      </div>

      <div className="mb-6 flex flex-wrap justify-center sm:justify-start gap-2">
        {["All", "Pro", "Self", "Web"].map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 text-sm font-semibold font-[Poppins] rounded-lg transition duration-300 ${selectedCategory === category ? 'bg-blue-400 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={index}
            className={`overflow-hidden border rounded-xl shadow-lg ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-300'}`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            {project.images ? (
              <Carousel images={project.images} onClick={() => setModalImages(project.images)} />
            ) : (
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover rounded-t-xl cursor-pointer"
                onClick={() => setModalImages([project.image])}
              />
            )}
            <div className="p-5">
              <h3 className="text-xl font-semibold font-[Poppins] mb-2">{project.name}</h3>
              <p className="text-sm font-[Poppins] mb-4">{project.description}</p>
              <div className="flex justify-between items-center">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline font-[Poppins] text-sm">
                  View Project
                </a>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <Github size={20} className="text-blue-400" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {modalImages && <Modal images={modalImages} onClose={() => setModalImages(null)} />}
    </section>
  );
};

export default Projects;
