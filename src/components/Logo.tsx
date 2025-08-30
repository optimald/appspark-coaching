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
          className="relative flex-shrink-0 flex items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
          style={{ width: `${actualSize}px`, height: `${actualSize}px` }}
        >
          {/* The A letter for AppSpark */}
          <div 
            className="relative z-10 font-black text-white text-center"
            style={{ fontSize: `${actualSize * 0.6}px`, textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}
          >
            A
          </div>
          
          {/* Enhanced glow effects */}
          <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600 to-purple-500 opacity-80 rounded-2xl"></div>
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur-md opacity-40 animate-pulse-slow"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/20 rounded-2xl"></div>
        </div>
        
        {showText && (
          <div className="ml-4 font-black text-2xl tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400">
              AppSpark
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Logo;
