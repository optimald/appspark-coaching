'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { trackPageView, trackProblemPageVisit, trackTimeOnPage } from '@/lib/analytics';

export default function PageTracker() {
  const pathname = usePathname();

  useEffect(() => {
    let startTime = Date.now();
    
    // Track page view
    trackPageView(pathname, document.title);
    
    // Track specific problem page visits
    if (pathname.includes('cursor-')) {
      const problemType = pathname.split('/').pop()?.replace('cursor-', '').replace(/-/g, '_') || 'unknown';
      trackProblemPageVisit(problemType);
    }

    // Track time on page when user leaves
    const handleBeforeUnload = () => {
      const timeSpent = Math.round((Date.now() - startTime) / 1000);
      if (timeSpent > 5) { // Only track if user spent more than 5 seconds
        trackTimeOnPage(pathname, timeSpent);
      }
    };

    // Track time on page when navigating away (SPA)
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        const timeSpent = Math.round((Date.now() - startTime) / 1000);
        if (timeSpent > 5) {
          trackTimeOnPage(pathname, timeSpent);
        }
      } else if (document.visibilityState === 'visible') {
        startTime = Date.now(); // Reset timer when page becomes visible again
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      
      // Track time on page when component unmounts (navigation)
      const timeSpent = Math.round((Date.now() - startTime) / 1000);
      if (timeSpent > 5) {
        trackTimeOnPage(pathname, timeSpent);
      }
    };
  }, [pathname]);

  return null;
}
