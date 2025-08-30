'use client';
import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: number | string;
}

const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  showText = true,
  size = 40
}) => {
  // Convert string sizes to numbers
  const getNumericSize = (): number => {
    if (typeof size === 'number') return size;
    
    // Map string sizes to numeric values
    switch(size) {
      case 'xs': return 24;
      case 'sm': return 32;
      case 'md': return 40;
      case 'lg': return 60;
      case 'xl': return 80;
      default: return 40;
    }
  };
  
  const actualSize = getNumericSize();

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className="flex items-center justify-center">
        <div 
          className="relative flex-shrink-0 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg"
          style={{ width: `${actualSize}px`, height: `${actualSize}px` }}
        >
          {/* The A letter for AppSpark */}
          <div 
            className="relative z-10 font-bold text-white text-center"
            style={{ fontSize: `${actualSize * 0.6}px` }}
          >
            A
          </div>
          
          {/* Subtle glow effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-indigo-500 opacity-70 rounded-xl"></div>
          <div className="absolute -inset-1 bg-blue-500 rounded-xl blur-sm opacity-30 animate-pulse"></div>
        </div>
        
        {showText && (
          <div className="ml-3 font-bold text-xl tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-300">
              AppSpark
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Logo;
