import React, { createContext, useContext, useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  toggleTheme: () => {},
});

function shouldUseDarkMode(): boolean {
  const currentHour = new Date().getHours();
  return currentHour >= 19 || currentHour < 7; // Dark mode between 7 PM and 7 AM
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    // Check local storage first
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme) return savedTheme;
    
    // Otherwise, check time of day
    return shouldUseDarkMode() ? 'dark' : 'light';
  });

  useEffect(() => {
    // Update document class and local storage when theme changes
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Check time every minute to auto-switch theme
  useEffect(() => {
    const interval = setInterval(() => {
      const savedTheme = localStorage.getItem('theme');
      // Only auto-switch if user hasn't manually set a theme
      if (!savedTheme) {
        setTheme(shouldUseDarkMode() ? 'dark' : 'light');
      }
    }, 60000); // Check every minute

    return () => clearInterval(interval);
  }, []);

  const toggleTheme = () => {
    setTheme(prev => {
      const newTheme = prev === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme); // Save manual preference
      return newTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);