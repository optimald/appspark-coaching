'use client';

import { useEffect, useRef } from 'react';
import { trackEvent, trackScrollToCalendly } from '@/lib/analytics';

export default function ScrollTracker() {
  const scrollDepthRef = useRef({
    25: false,
    50: false,
    75: false,
    90: false,
  });
  const lastScrollTimeRef = useRef(Date.now());

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      );

      // Track scroll depth milestones
      Object.entries(scrollDepthRef.current).forEach(([depth, tracked]) => {
        const depthNum = parseInt(depth);
        if (scrollPercent >= depthNum && !tracked) {
          scrollDepthRef.current[depthNum as keyof typeof scrollDepthRef.current] = true;
          trackEvent('Scroll Depth', {
            depth_percent: depthNum,
            page_path: window.location.pathname,
            engagement_type: 'scroll_depth',
          });
        }
      });

      // Track scroll to booking section (if it exists)
      const bookingSection = document.getElementById('booking');
      if (bookingSection) {
        const bookingSectionTop = bookingSection.offsetTop;
        const scrollPosition = window.scrollY + window.innerHeight;
        
        if (scrollPosition >= bookingSectionTop && !sessionStorage.getItem('scrolled_to_booking')) {
          sessionStorage.setItem('scrolled_to_booking', 'true');
          trackScrollToCalendly();
        }
      }

      // Track scroll velocity (for engagement analysis)
      const now = Date.now();
      const timeDiff = now - lastScrollTimeRef.current;
      if (timeDiff > 1000) { // Only track every second to avoid spam
        const scrollVelocity = Math.abs(scrollPercent - (parseInt(sessionStorage.getItem('lastScrollPercent') || '0')));
        if (scrollVelocity > 10) { // Significant scroll movement
          trackEvent('Scroll Engagement', {
            scroll_velocity: scrollVelocity,
            scroll_percent: scrollPercent,
            engagement_type: 'scroll_velocity',
          });
        }
        sessionStorage.setItem('lastScrollPercent', scrollPercent.toString());
        lastScrollTimeRef.current = now;
      }
    };

    // Throttle scroll events
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', throttledScroll);
    };
  }, []);

  return null;
}
