'use client';

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, X } from "lucide-react";
import { useDarkMode } from '../components/darkmode';
import Tilt from 'react-parallax-tilt';

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
          className="w-full max-h-[80vh] rounded-xl"
        >
          <img src={images[current]} alt="Full View" className="w-full h-full object-contain rounded-xl" />
        </motion.div>
      </div>
    </div>
  );
};

const projects = [
  {
    name: "IgaTek",
    description: "Self project: I built and designed the entire UI. Platform helps locals access digital literacy.",
    link: "https://iga.speclucs.rw/",
    image: "/igatek.JPG",
    categories: ["Web"]
  },
  {
    name: "Uza bulk",
    description: "I handled everything solo — development and UI design for this e-commerce platform.",
    link: "https://www.uzabulk.com/",
    image: "/bullk.PNG",
    categories: ["Web"]
  },
  {
    name: "Unicash",
    description: "I built and designed this dashboard solo to help students manage their finances.",
    link: "https://unicash.vercel.app/",
    image: "/unicash.PNG",
    categories: ["Web"]
  },
  {
    name: "JSM Ecomerce",
    description: "Full-stack e-commerce app with full UI design — all done by me alone.",
    link: "https://ecommerce-seven-kappa-12.vercel.app/",
    image: "/jsm.JPG",
    categories: ["Web"]
  },
  {
    name: "Data driven partners",
    description: "Solo project: Built and designed the platform to connect data-driven partners with businesses.",
    link: "https://3dp.rw/",
    image: "/3dp.JPG",
    categories: ["Web"]
  },
  {
    name: "Uza solution",
    description: "Solo project: i built it for uzasolution company.",
    link: "https://uzasolution.vercel.app/",
    image: "/uza.PNG",
    categories: ["Web"]
  },
  {
    name: "Figma Mockup - Dashboard",
    description: "Clean and responsive UI mockup for Dashboard.",
    link: "#",
    image: "/1.png",
    categories: ["UI/UX"]
  },
  {
    name: "Figma Mockup - Dashboard",
    description: "Dashboard UI mockup with a focus on data visualization.",
    link: "#",
    images: ["/2.png", "/3.png"],
    categories: ["UI/UX"]
  },
  {
    name: "Figma Mockup - Dashboard",
    description: "Responsive UI mockup for a dashboard with a modern design.",
    link: "#",
    image: "/4.png",
    categories: ["UI/UX"]
  }
];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("Web");
  const [modalImages, setModalImages] = useState<string[] | null>(null);
  const [showAll, setShowAll] = useState(false);
  const { darkMode } = useDarkMode();

  const filteredProjects = projects.filter(project =>
    project.categories.includes(selectedCategory)
  );

  const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, 3);

  return (
    <section className={`relative mx-auto py-12 px-6 sm:px-12 md:px-24 lg:px-32 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-700'}`}>
      <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center">
        <div>
          <h2 className="text-4xl sm:text-5xl font-bold font-[Poppins]">Projects</h2>
          <span className="block font-[Poppins] font-semibold mt-1 text-sm">Total: {filteredProjects.length}</span>
          {filteredProjects.length > 3 && (
            <button
              onClick={() => setShowAll(prev => !prev)}
              className="mt-1 text-sm text-blue-500 hover:underline font-[Poppins]"
            >
              {showAll ? "Show Less" : "Show More"}
            </button>
          )}
        </div>
        <div className="mt-4 sm:mt-0 flex gap-4">
          {["Web", "UI/UX"].map(category => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setShowAll(false); // reset when switching
              }}
              className={`px-6 py-2 text-sm font-bold font-[Poppins] rounded-xl transition duration-300 border-2 ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-transparent text-gray-700 border-gray-400 hover:border-blue-400 hover:text-blue-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleProjects.map((project, index) => (
          <Tilt
            glareEnable={true}
            glareMaxOpacity={0.3}
            scale={1.05}
            transitionSpeed={250}
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            key={index}
          >
            <motion.div
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
          </Tilt>
        ))}
      </div>

      {modalImages && <Modal images={modalImages} onClose={() => setModalImages(null)} />}
    </section>
  );
};

export default Projects;
