import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-10 h-10',
    md: 'w-14 h-14', 
    lg: 'w-20 h-20'
  };

  const textSizeClasses = {
    sm: 'text-xl',
    md: 'text-3xl',
    lg: 'text-4xl'
  };

  return (
    <div className={`flex items-center ${className}`}>
      {/* Professional space-themed logo */}
      <div className="relative mr-4">
        {/* Base shape */}
        <div className={`${sizeClasses[size]} rounded-lg bg-gradient-to-br from-indigo-900 to-slate-900 flex items-center justify-center relative overflow-hidden`}>
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="w-full h-full border-t border-l border-blue-400/20 grid grid-cols-3 grid-rows-3">
              <div className="border-r border-b border-blue-400/20"></div>
              <div className="border-r border-b border-blue-400/20"></div>
              <div className="border-b border-blue-400/20"></div>
              <div className="border-r border-b border-blue-400/20"></div>
              <div className="border-r border-b border-blue-400/20"></div>
              <div className="border-b border-blue-400/20"></div>
              <div className="border-r border-blue-400/20"></div>
              <div className="border-r border-blue-400/20"></div>
              <div></div>
            </div>
          </div>
          
          {/* App icon */}
          <div className="relative z-10 w-8 h-8">
            <div className="absolute inset-0 rounded-md bg-gradient-to-br from-blue-500 to-indigo-600"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
          </div>
          
          {/* Subtle stars */}
          <div className="absolute top-1 left-1 w-1 h-1 bg-blue-300 rounded-full opacity-70"></div>
          <div className="absolute bottom-2 right-2 w-0.5 h-0.5 bg-blue-300 rounded-full opacity-70"></div>
          <div className="absolute top-3 right-2 w-0.5 h-0.5 bg-blue-300 rounded-full opacity-70"></div>
        </div>
        
        {/* Subtle glow effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/40 to-indigo-600/40 rounded-lg blur opacity-70"></div>
      </div>
      
      <div className={`text-white font-bold tracking-tight ${textSizeClasses[size]}`}>
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">AppSpark</span>
      </div>
    </div>
  );
};

export default Logo;