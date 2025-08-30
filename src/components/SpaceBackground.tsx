'use client';

import React, { useEffect, useRef } from 'react';

const SpaceBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Star properties
    const stars: Array<{
      x: number;
      y: number;
      size: number;
      opacity: number;
      twinkleSpeed: number;
      twinklePhase: number;
    }> = [];

    // Create stars
    const createStars = () => {
      const numStars = Math.floor((canvas.width * canvas.height) / 8000);
      stars.length = 0;
      
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          opacity: Math.random() * 0.8 + 0.2,
          twinkleSpeed: Math.random() * 0.02 + 0.01,
          twinklePhase: Math.random() * Math.PI * 2,
        });
      }
    };

    createStars();

    // Animation loop
    let animationId: number;
    let time = 0;

    const animate = () => {
      time += 0.01;
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Check if dark mode
      const isDarkMode = document.documentElement.classList.contains('dark');
      
      // Draw stars
      stars.forEach((star) => {
        const twinkle = Math.sin(time * star.twinkleSpeed + star.twinklePhase) * 0.3 + 0.7;
        const alpha = star.opacity * twinkle * (isDarkMode ? 0.8 : 0.4);
        
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = isDarkMode 
          ? `rgba(255, 255, 255, ${alpha})`
          : `rgba(56, 189, 248, ${alpha})`;
        ctx.fill();
        
        // Add glow effect for larger stars
        if (star.size > 1.5) {
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size * 2, 0, Math.PI * 2);
          ctx.fillStyle = isDarkMode 
            ? `rgba(255, 255, 255, ${alpha * 0.1})`
            : `rgba(56, 189, 248, ${alpha * 0.1})`;
          ctx.fill();
        }
      });

      // Add nebula effects
      if (isDarkMode) {
        // Dark theme nebula
        const gradient1 = ctx.createRadialGradient(
          canvas.width * 0.2, canvas.height * 0.3, 0,
          canvas.width * 0.2, canvas.height * 0.3, canvas.width * 0.3
        );
        gradient1.addColorStop(0, 'rgba(139, 92, 246, 0.1)');
        gradient1.addColorStop(1, 'rgba(139, 92, 246, 0)');
        
        ctx.fillStyle = gradient1;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        const gradient2 = ctx.createRadialGradient(
          canvas.width * 0.8, canvas.height * 0.7, 0,
          canvas.width * 0.8, canvas.height * 0.7, canvas.width * 0.4
        );
        gradient2.addColorStop(0, 'rgba(236, 72, 153, 0.08)');
        gradient2.addColorStop(1, 'rgba(236, 72, 153, 0)');
        
        ctx.fillStyle = gradient2;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      } else {
        // Light theme subtle effects
        const gradient1 = ctx.createRadialGradient(
          canvas.width * 0.3, canvas.height * 0.2, 0,
          canvas.width * 0.3, canvas.height * 0.2, canvas.width * 0.4
        );
        gradient1.addColorStop(0, 'rgba(219, 234, 254, 0.3)');
        gradient1.addColorStop(1, 'rgba(219, 234, 254, 0)');
        
        ctx.fillStyle = gradient1;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="space-background-container">
      <canvas
        ref={canvasRef}
        className="space-background"
        data-testid="space-background"
      />
    </div>
  );
};

export default SpaceBackground;
