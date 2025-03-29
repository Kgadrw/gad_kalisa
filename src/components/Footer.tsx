import React from "react";
import { useDarkMode } from "../components/darkmode"; // Import the dark mode context

const Footer = () => {
  const { darkMode } = useDarkMode(); // Get the dark mode value from context

  return (
    <footer className={`py-8 ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}>
      <div className="container mx-auto text-center">
        <p className={`text-lg font-medium font-[Poppins] mb-2 ${darkMode ? "text-white" : "text-gray-900"}`}>
          Crafted with love by <span className="font-semibold">Gad Kalisa</span>
        </p>
        <p className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-600"} font-[Poppins]`}>
          A black-and-white web, where simplicity meets elegance, creating a
          timeless space for creativity.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
