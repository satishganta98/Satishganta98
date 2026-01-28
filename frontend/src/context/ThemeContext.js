import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(true);

  // Load theme preference from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
    } else {
      // Default to dark mode
      setIsDark(true);
    }
  }, []);

  // Save theme preference to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const theme = {
    isDark,
    toggleTheme,
    colors: isDark ? {
      // Dark theme (current)
      bg: {
        primary: '#1a1c1b',
        secondary: '#302f2c',
        tertiary: '#3d3c38',
      },
      text: {
        primary: '#ffffff',
        secondary: '#b8b8b8',
        tertiary: '#808080',
      },
      accent: '#d9fb06',
      border: '#3d3c38',
    } : {
      // Light theme
      bg: {
        primary: '#f5f5f5',
        secondary: '#ffffff',
        tertiary: '#e8e8e8',
      },
      text: {
        primary: '#1a1c1b',
        secondary: '#4a4a4a',
        tertiary: '#808080',
      },
      accent: '#b8860b',
      border: '#e0e0e0',
    }
  };

  return (
    <ThemeContext.Provider value={{ ...theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};
