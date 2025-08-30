'use client';

import React from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from './ThemeProvider';

interface ThemeToggleProps {
  floating?: boolean;
  className?: string;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ floating = false, className = '' }) => {
  const baseClasses = "p-2 rounded-full transition-all duration-200 hover:scale-110";
  const floatingClasses = "fixed bottom-4 right-4 z-50 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-lg border border-gray-200 dark:border-gray-700";
  const inlineClasses = "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700";

  try {
    const { theme, toggleTheme } = useTheme();

    return (
      <button
        onClick={toggleTheme}
        className={`${baseClasses} ${floating ? floatingClasses : inlineClasses} ${className}`}
        aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        {theme === 'dark' ? (
          <FiSun className="h-5 w-5 text-yellow-500" />
        ) : (
          <FiMoon className="h-5 w-5 text-gray-700" />
        )}
      </button>
    );
  } catch (error) {
    // Fallback for when ThemeProvider is not available (during SSR)
    return (
      <button
        className={`${baseClasses} ${floating ? floatingClasses : inlineClasses} ${className}`}
        aria-label="Toggle theme"
      >
        <FiMoon className="h-5 w-5 text-gray-700" />
      </button>
    );
  }
};

export default ThemeToggle;
