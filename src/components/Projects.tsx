import React, { useState } from "react";
import { motion } from "framer-motion";
import { Github } from "lucide-react";

const projects = [
  {
    name: "IgaTek",
    description: " platform is designed to onboard local citizens, enabling them to open accounts and access essential digital literacy resources.",
    link: "https://iga.speclucs.rw/",
    image: "/igatek.jpg",
    category: "Web"
  },
  {
    name: "WEVENT",
    description: "An event management platform designed to help users create and manage events.",
    link: "#",
    image: "/Wevent.JPG",
    category: "Web"
  },
  {
    name: "Unicash",
    description: "A financial dashboard for university students to manage their money and gain loans.",
    link: "#",
    image: "/web.png",
    category: "Mobile"
  }

];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section className="bg-white relative mx-auto py-12 px-6 sm:px-12 md:px-24 lg:px-32">
      <div className="mb-6 flex flex-col sm:flex-row justify-between items-center">
        <h2 className="text-4xl sm:text-5xl font-bold font-[Poppins] text-gray-700">Projects</h2>
        <span className="text-gray-700 font-[Poppins] font-semibold mt-2 sm:mt-0">Total Projects: {filteredProjects.length}</span>
      </div>
      
      <div className="mb-6 flex flex-wrap justify-center sm:justify-start gap-2">
        {["All", "Pro", "Web", "Mobile", "UI/UX"].map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 text-sm font-semibold font-[Poppins] rounded-lg transition duration-300 ${selectedCategory === category ? 'bg-blue-400 text-white' : 'bg-gray-400 text-gray-700'}`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={index}
            className="p-4 border rounded-lg shadow-md bg-white relative"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
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
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 right-4 text-blue-400 hover:text-blue-400"
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
