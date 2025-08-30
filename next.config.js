/** @type {import('next').NextConfig} */
const nextConfig = {
  // Use standalone output mode for better deployment compatibility
  output: 'standalone',
  
  // Enable React strict mode
  reactStrictMode: true,
  
  // Configure image handling
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  
  // Experimental features
  experimental: {
    // Reduce CPU usage during development
    cpus: 1
  },
  
  // Webpack configuration
  webpack: (config, { isServer, dev }) => {
    // Fix webpack caching issues
    if (dev) {
      // Use memory caching instead of filesystem caching in development
      config.cache = {
        type: 'memory',
        maxGenerations: 1
      };
      
      // Optimize webpack for development speed
      config.infrastructureLogging = {
        level: 'error', // Hide verbose webpack logs
      };
      
      // Disable unnecessary webpack processing
      config.watchOptions = {
        // Don't watch node_modules to improve performance
        ignored: /node_modules/,
        // Reduce the number of file system polls to improve CPU usage
        poll: 1000,
      };
    }
    
    // Add resolve fallbacks for browser-specific modules
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false,
      child_process: false,
    };
    
    return config;
  },
  
  // Configure build settings
  onDemandEntries: {
    // Keep pages in memory for longer periods
    maxInactiveAge: 60 * 60 * 1000, // 1 hour
    pagesBufferLength: 5,
  },
  
  // Disable unnecessary telemetry to reduce build overhead
  typescript: {
    // Increase type checking speed by skipping some checks in development
    ignoreBuildErrors: process.env.NODE_ENV === 'development',
  },
  
  // Improve ESLint performance
  eslint: {
    // Only run ESLint on production builds
    ignoreDuringBuilds: process.env.NODE_ENV === 'development',
  },
};

module.exports = nextConfig;
