import React from 'react';
import Image from 'next/image';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12', 
    lg: 'w-16 h-16'
  };

  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl'
  };

  return (
    <div className={`flex items-center ${className}`}>
      {/* AppSpark Logo Icon */}
      <div className="relative mr-3">
        {/* Light version for dark theme (default) */}
        <Image
          src="/assets/images/appspark-logo-light.svg"
          alt="AppSpark Logo"
          width={size === 'sm' ? 32 : size === 'md' ? 48 : 64}
          height={size === 'sm' ? 32 : size === 'md' ? 48 : 64}
          className={`${sizeClasses[size]} dark:block hidden`}
        />
        
        {/* Dark version for light theme */}
        <Image
          src="/assets/images/appspark-logo-dark.svg"
          alt="AppSpark Logo"
          width={size === 'sm' ? 32 : size === 'md' ? 48 : 64}
          height={size === 'sm' ? 32 : size === 'md' ? 48 : 64}
          className={`${sizeClasses[size]} dark:hidden block`}
        />
      </div>
      
      <div className={`text-white dark:text-white font-bold tracking-tight ${textSizeClasses[size]}`}>
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100 dark:from-white dark:to-blue-100">
          AppSpark
        </span>
      </div>
    </div>
  );
};

export default Logo;