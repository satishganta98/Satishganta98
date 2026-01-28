import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(true);

  // Load theme preference from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
      // Default to dark mode
      setIsDark(true);
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, []);

  // Save theme preference and apply to document
  useEffect(() => {
    const theme = isDark ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.style.colorScheme = theme;
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
