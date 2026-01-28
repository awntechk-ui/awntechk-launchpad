import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 p-3 rounded-full border-2 bg-white dark:bg-black border-gray-900 dark:border-white transition-all duration-300 hover:scale-110 hover:rotate-180 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 shadow-lg hover:shadow-xl"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <Moon className="w-5 h-5 text-gray-900 transition-colors duration-300" />
      ) : (
        <Sun className="w-5 h-5 text-white transition-colors duration-300" />
      )}
    </button>
  );
};

export default ThemeToggle;
