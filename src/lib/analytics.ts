import mixpanel from 'mixpanel-browser';

declare global {
  interface Window {
    plausible?: (event: string, options?: { props?: Record<string, string | number> }) => void;
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

// Initialize Mixpanel
if (typeof window !== 'undefined' && process.env.NEXT_PUBLIC_MIXPANEL_TOKEN) {
  mixpanel.init(process.env.NEXT_PUBLIC_MIXPANEL_TOKEN, {
    debug: process.env.NODE_ENV === 'development',
    track_pageview: true,
    persistence: 'localStorage',
  });
}

// Analytics configuration
const ANALYTICS_CONFIG = {
  GA4_ID: process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID || '',
  MIXPANEL_TOKEN: process.env.NEXT_PUBLIC_MIXPANEL_TOKEN || '',
  PLAUSIBLE_DOMAIN: process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN || '',
};

// Enhanced tracking function that sends to all analytics providers
export const trackEvent = (eventName: string, props?: Record<string, string | number>) => {
  if (process.env.NODE_ENV === 'development') {
    console.log('Analytics Event:', eventName, props);
  }
  
  // Plausible Analytics
  if (typeof window !== 'undefined' && window.plausible) {
    window.plausible(eventName, { props });
  }
  
  // Google Analytics 4
  if (typeof window !== 'undefined' && window.gtag && ANALYTICS_CONFIG.GA4_ID) {
    window.gtag('event', eventName.toLowerCase().replace(/\s+/g, '_'), {
      ...props,
      event_category: 'engagement',
    });
  }
  
  // Mixpanel
  if (typeof window !== 'undefined' && ANALYTICS_CONFIG.MIXPANEL_TOKEN) {
    mixpanel.track(eventName, props);
  }
};

// User identification for Mixpanel
export const identifyUser = (userId: string, traits?: Record<string, any>) => {
  if (typeof window !== 'undefined' && ANALYTICS_CONFIG.MIXPANEL_TOKEN) {
    mixpanel.identify(userId);
    if (traits) {
      mixpanel.people.set(traits);
    }
  }
  
  // Google Analytics user ID
  if (typeof window !== 'undefined' && window.gtag && ANALYTICS_CONFIG.GA4_ID) {
    window.gtag('config', ANALYTICS_CONFIG.GA4_ID, {
      user_id: userId,
    });
  }
};

// Page view tracking
export const trackPageView = (path: string, title?: string) => {
  if (process.env.NODE_ENV === 'development') {
    console.log('Page View:', path, title);
  }
  
  // Google Analytics 4
  if (typeof window !== 'undefined' && window.gtag && ANALYTICS_CONFIG.GA4_ID) {
    window.gtag('config', ANALYTICS_CONFIG.GA4_ID, {
      page_path: path,
      page_title: title,
    });
  }
  
  // Mixpanel
  if (typeof window !== 'undefined' && ANALYTICS_CONFIG.MIXPANEL_TOKEN) {
    mixpanel.track('Page View', {
      path,
      title,
    });
  }
};

// Enhanced conversion tracking
export const trackConversion = (eventName: string, value: number, currency: string = 'USD', props?: Record<string, any>) => {
  const conversionData = {
    value,
    currency,
    ...props,
  };
  
  // Track as regular event
  trackEvent(eventName, conversionData);
  
  // Enhanced Plausible revenue tracking
  if (typeof window !== 'undefined' && window.plausible) {
    window.plausible(eventName, {
      props: conversionData
    });
  }
  
  // Google Analytics 4 ecommerce tracking
  if (typeof window !== 'undefined' && window.gtag && ANALYTICS_CONFIG.GA4_ID) {
    window.gtag('event', 'purchase', {
      currency,
      value,
      items: [{
        item_name: eventName,
        price: value,
        quantity: 1
      }]
    });
  }
  
  // Mixpanel revenue tracking
  if (typeof window !== 'undefined' && ANALYTICS_CONFIG.MIXPANEL_TOKEN) {
    mixpanel.track('Revenue', {
      event: eventName,
      amount: value,
      currency,
      ...props
    });
  }
};

// Specific tracking functions
export const trackSessionBooked = (source?: string) => {
  trackConversion('Session Booked', 75, 'USD', { 
    source: source || 'unknown',
    product: 'cursor_coaching_session',
    booking_method: 'calendly',
  });
  
  // Enhanced Plausible revenue tracking
  if (typeof window !== 'undefined' && window.plausible) {
    window.plausible('Session Booked', {
      props: {
        source: source || 'unknown',
        product: 'cursor_coaching_session',
        booking_method: 'calendly'
      }
    });
  }
};

export const trackCalendlyClicked = (source: string) => {
  trackEvent('Calendly Clicked', { 
    source,
    cta_type: 'booking_button',
  });
};

export const trackEmailContact = (location: string) => {
  trackEvent('Email Contact', { 
    location,
    contact_method: 'email',
  });
};

export const trackScrollToCalendly = () => {
  trackEvent('Scrolled to Calendly', {
    engagement_type: 'scroll',
    section: 'booking',
  });
};

export const trackFAQExpanded = (question: string) => {
  trackEvent('FAQ Expanded', { 
    question,
    engagement_type: 'faq_interaction',
  });
};

// New comprehensive tracking functions
export const trackProblemPageVisit = (problemType: string) => {
  trackEvent('Problem Page Visit', {
    problem_type: problemType,
    page_category: 'problem_specific',
  });
};

export const trackVideoPlay = (videoId: string, source: string) => {
  trackEvent('Video Play', {
    video_id: videoId,
    source,
    content_type: 'video',
  });
};

export const trackFormSubmission = (formType: string, success: boolean) => {
  trackEvent('Form Submission', {
    form_type: formType,
    success: success ? 'true' : 'false',
    conversion_step: 'form_complete',
  });
};

export const trackSocialShare = (platform: string, content: string) => {
  trackEvent('Social Share', {
    platform,
    content,
    engagement_type: 'social_sharing',
  });
};

export const trackTimeOnPage = (path: string, timeSpent: number) => {
  trackEvent('Time on Page', {
    path,
    time_spent_seconds: timeSpent,
    engagement_type: 'time_tracking',
  });
};

export const trackExternalLinkClick = (url: string, linkText: string) => {
  trackEvent('External Link Click', {
    destination_url: url,
    link_text: linkText,
    click_type: 'external_link',
  });
};

export const trackSearchQuery = (query: string, resultsCount: number) => {
  trackEvent('Search Query', {
    query,
    results_count: resultsCount,
    engagement_type: 'search',
  });
};

export const trackErrorOccurred = (errorType: string, errorMessage: string, page: string) => {
  trackEvent('Error Occurred', {
    error_type: errorType,
    error_message: errorMessage,
    page,
    event_category: 'error',
  });
};
