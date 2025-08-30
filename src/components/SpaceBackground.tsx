'use client';

import React, { useEffect, useRef } from 'react';

const SpaceBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Star properties
    const stars: {x: number, y: number, radius: number, opacity: number, speed: number}[] = [];
    const generateStars = () => {
      const starCount = Math.floor(window.innerWidth * window.innerHeight / 1000);
      stars.length = 0;
      
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.5,
          opacity: Math.random() * 0.8 + 0.2,
          speed: Math.random() * 0.05 + 0.01
        });
      }
    };
    
    generateStars();
    
    // Nebula properties
    const nebulae = [
      {
        x: canvas.width * 0.8,
        y: canvas.height * 0.2,
        radius: canvas.width * 0.15,
        color: 'rgba(236, 72, 153, 0.1)'  // Pink
      },
      {
        x: canvas.width * 0.2,
        y: canvas.height * 0.7,
        radius: canvas.width * 0.2,
        color: 'rgba(139, 92, 246, 0.1)'  // Purple
      },
      {
        x: canvas.width * 0.5,
        y: canvas.height * 0.5,
        radius: canvas.width * 0.25,
        color: 'rgba(0, 102, 255, 0.08)'  // Blue
      }
    ];
    
    // Planet properties
    const planets = [
      {
        x: canvas.width * 0.85,
        y: canvas.height * 0.75,
        radius: 40,
        color: 'rgba(28, 163, 178, 0.7)',  // Teal
        ringColor: 'rgba(0, 245, 255, 0.3)',
        ringWidth: 10,
        ringAngle: Math.PI / 6
      },
      {
        x: canvas.width * 0.15,
        y: canvas.height * 0.25,
        radius: 25,
        color: 'rgba(220, 110, 125, 0.7)',  // Rose
        hasMoons: true,
        moons: [
          { distance: 40, radius: 5, angle: 0, speed: 0.005, color: 'rgba(255, 255, 255, 0.7)' }
        ]
      }
    ];
    
    // Shooting star properties
    const shootingStars: {x: number, y: number, length: number, angle: number, speed: number, opacity: number, active: boolean}[] = [];
    const generateShootingStar = () => {
      if (shootingStars.length < 3 && Math.random() < 0.01) {
        shootingStars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height / 2,
          length: Math.random() * 80 + 50,
          angle: Math.PI / 4 + (Math.random() * Math.PI / 4),
          speed: Math.random() * 5 + 5,
          opacity: 1,
          active: true
        });
      }
    };
    
    // Animation loop
    let animationFrameId: number;
    const render = () => {
      // Clear canvas
      ctx.fillStyle = 'black';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw background gradient
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, 'rgba(0, 0, 15, 1)');
      gradient.addColorStop(1, 'rgba(0, 0, 40, 1)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw nebulae
      nebulae.forEach(nebula => {
        const gradient = ctx.createRadialGradient(
          nebula.x, nebula.y, 0,
          nebula.x, nebula.y, nebula.radius
        );
        gradient.addColorStop(0, nebula.color);
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(nebula.x, nebula.y, nebula.radius, 0, Math.PI * 2);
        ctx.fill();
      });
      
      // Draw stars
      stars.forEach(star => {
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
        
        // Move stars slightly for twinkling effect
        star.opacity = 0.2 + Math.abs(Math.sin(Date.now() * 0.001 * star.speed)) * 0.8;
      });
      
      // Draw planets
      planets.forEach(planet => {
        // Planet body
        ctx.fillStyle = planet.color;
        ctx.beginPath();
        ctx.arc(planet.x, planet.y, planet.radius, 0, Math.PI * 2);
        ctx.fill();
        
        // Planet shadow
        const gradient = ctx.createLinearGradient(
          planet.x - planet.radius, planet.y, 
          planet.x + planet.radius, planet.y
        );
        gradient.addColorStop(0, 'rgba(0, 0, 0, 0.5)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(planet.x, planet.y, planet.radius, 0, Math.PI * 2);
        ctx.fill();
        
        // Planet rings
        if (planet.ringColor) {
          ctx.save();
          ctx.translate(planet.x, planet.y);
          ctx.rotate(planet.ringAngle);
          ctx.scale(1, 0.3);
          
          ctx.strokeStyle = planet.ringColor;
          ctx.lineWidth = planet.ringWidth;
          ctx.beginPath();
          ctx.arc(0, 0, planet.radius * 1.5, 0, Math.PI * 2);
          ctx.stroke();
          
          ctx.restore();
        }
        
        // Planet moons
        if (planet.hasMoons) {
          planet.moons.forEach(moon => {
            // Update moon position
            moon.angle += moon.speed;
            
            const moonX = planet.x + Math.cos(moon.angle) * moon.distance;
            const moonY = planet.y + Math.sin(moon.angle) * moon.distance;
            
            ctx.fillStyle = moon.color;
            ctx.beginPath();
            ctx.arc(moonX, moonY, moon.radius, 0, Math.PI * 2);
            ctx.fill();
          });
        }
      });
      
      // Generate and draw shooting stars
      generateShootingStar();
      
      shootingStars.forEach((star, index) => {
        if (!star.active) return;
        
        ctx.strokeStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(star.x, star.y);
        
        const endX = star.x + Math.cos(star.angle) * star.length;
        const endY = star.y + Math.sin(star.angle) * star.length;
        
        ctx.lineTo(endX, endY);
        ctx.stroke();
        
        // Move shooting star
        star.x += Math.cos(star.angle) * star.speed;
        star.y += Math.sin(star.angle) * star.speed;
        
        // Fade out shooting star
        star.opacity -= 0.01;
        
        // Remove shooting star if it's off screen or faded out
        if (
          star.x < 0 || 
          star.x > canvas.width || 
          star.y < 0 || 
          star.y > canvas.height ||
          star.opacity <= 0
        ) {
          star.active = false;
          shootingStars.splice(index, 1);
        }
      });
      
      animationFrameId = requestAnimationFrame(render);
    };
    
    render();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 -z-10"
      style={{ background: 'black' }}
    />
  );
};

export default SpaceBackground; 