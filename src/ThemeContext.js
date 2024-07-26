// ThemeContext.js
import React, { createContext, useState, useEffect } from 'react';
import '../src/Theme.css'
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    // Update the CSS variables or class based on the darkMode state
    const root = document.documentElement;

    if (darkMode) {
      root.style.setProperty('--background-color', 'black');
      root.style.setProperty('--text-color', '#fff');
      root.style.setProperty('--primary-color', '#bfd94a');
    } else {
      root.style.setProperty('--background-color', '#fff');
      root.style.setProperty('--text-color', '#333');
      root.style.setProperty('--primary-color', '#333');
    }
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
