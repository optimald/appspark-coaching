declare global {
  interface Window {
    plausible?: (event: string, options?: { props?: Record<string, string | number> }) => void;
  }
}

export const trackEvent = (eventName: string, props?: Record<string, string | number>) => {
  if (process.env.NODE_ENV === 'development') {
    console.log('Analytics Event:', eventName, props);
  }
  
  if (typeof window !== 'undefined' && window.plausible) {
    window.plausible(eventName, { props });
  }
};

// Predefined tracking functions
export const trackSessionBooked = () => {
  trackEvent('Session Booked', { revenue: 150 });
};

export const trackCalendlyClicked = (source: string) => {
  trackEvent('Calendly Clicked', { source });
};

export const trackEmailContact = (location: string) => {
  trackEvent('Email Contact', { location });
};

export const trackScrollToCalendly = () => {
  trackEvent('Scrolled to Calendly');
};

export const trackFAQExpanded = (question: string) => {
  trackEvent('FAQ Expanded', { question });
};
