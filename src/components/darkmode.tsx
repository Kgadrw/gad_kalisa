'use client';  // Make sure this is at the top to mark it as a client-side component

import React, { useState, useEffect, createContext, useContext } from 'react';

// Create context
const DarkModeContext = createContext({
  darkMode: false,
  toggleDarkMode: () => {},
});

// Custom hook to use dark mode context
export const useDarkMode = () => useContext(DarkModeContext);

// Context provider component
export const DarkModeProvider = ({ children }: { children: React.ReactNode }) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Load saved dark mode preference from localStorage
    const savedMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedMode);
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('darkMode', newMode.toString());
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
