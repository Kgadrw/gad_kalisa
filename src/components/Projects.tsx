import React, { useState } from "react";
import { motion } from "framer-motion";
import { Github } from "lucide-react";

// Sample Projects Data with Categories
const projects = [
  {
    name: "Shop Ease",
    description: "A logistics company frontend website to manage shipments and deliveries.",
    link: "https://my-project-eosin-rho.vercel.app/",
    image: "/web.png", // Replace with your actual image URL
    category: "Web"
  },
  {
    name: "WEVENT",
    description: "An event management platform designed to help users create and manage events.",
    link: "#",
    image: "/Wevent.JPG", // Replace with your actual image URL
    category: "Web"
  },
  {
    name: "Unicash",
    description: "A financial dashboard for university students to manage their money and gain loans.",
    link: "#",
    image: "/web.png", // Replace with your actual image URL
    category: "Mobile"
  },
  {
    name: "Personal Portfolio",
    description: "A personal portfolio website to showcase projects and work.",
    link: "#",
    image: "/IgaTech.JPG", // Replace with your actual image URL
    category: "UI/UX"
  },
  {
    name: "Project Pro",
    description: "A professional-grade project with advanced features.",
    link: "#",
    image: "/3dp.JPG", // Replace with your actual image URL
    category: "Pro"
  }
];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter projects based on selected category
  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section className="bg-white relative mx-auto  py-12 px-32 ">
      {/* Total Projects Count */}
      <div className="mb-6 flex justify-between items-center">
        <h2 className="text-6xl font-bold font-[Poppins] text-gray-900">Projects</h2>
        <span className="text-gray-700 font-[Poppins] font-semibold">Total Projects: {filteredProjects.length}</span>
      </div>

      {/* Categories Filter */}
      <div className="mb-6 flex space-x-4">
        {["All", "Pro", "Web", "Mobile", "UI/UX"].map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 text-sm font-semibold font-[Poppins] rounded-lg ${selectedCategory === category ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-900'} transition duration-300`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={index}
            className="p-4 border rounded-lg shadow-md bg-white relative"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold font-[Poppins] text-gray-800 mb-3">{project.name}</h3>
            <p className="text-sm font-[Poppins] text-gray-700 mb-4">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 hover:text-gray-700 font-[Poppins] text-sm font-semibold"
            >
              View Project
            </a>
            {/* GitHub Icon */}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 right-4 text-gray-900 hover:text-gray-700"
            >
              <Github size={20} />
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
