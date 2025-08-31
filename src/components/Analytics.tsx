'use client';

import Script from 'next/script';

export default function Analytics() {
  const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
  const ga4Id = process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID;
  const mixpanelToken = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN;
  
  // Only load in production or if explicitly enabled in development
  const shouldLoad = process.env.NODE_ENV === 'production' || process.env.NEXT_PUBLIC_ANALYTICS_DEBUG === 'true';
  
  if (!shouldLoad) {
    return null;
  }

  return (
    <>
      {/* Google Analytics 4 */}
      {ga4Id && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${ga4Id}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${ga4Id}', {
                page_path: window.location.pathname,
                send_page_view: true,
                anonymize_ip: true,
                allow_google_signals: false,
                allow_ad_personalization_signals: false,
              });
            `}
          </Script>
        </>
      )}

                  {/* Plausible Analytics */}
            {plausibleDomain && (
              <>
                <Script
                  defer
                  data-domain={plausibleDomain}
                  src="https://plausible.io/js/script.file-downloads.hash.outbound-links.pageview-props.revenue.tagged-events.js"
                  strategy="afterInteractive"
                />
                <Script id="plausible-init" strategy="afterInteractive">
                  {`
                    window.plausible = window.plausible || function() { 
                      (window.plausible.q = window.plausible.q || []).push(arguments) 
                    }
                  `}
                </Script>
              </>
            )}

      {/* Mixpanel - Initialized in analytics.ts */}
      {mixpanelToken && (
        <Script id="mixpanel-init" strategy="afterInteractive">
          {`
            // Mixpanel is initialized in analytics.ts
            // This script ensures proper loading order
            console.log('Mixpanel analytics ready');
          `}
        </Script>
      )}

      {/* Enhanced Analytics Setup */}
      <Script id="analytics-setup" strategy="afterInteractive">
        {`
          // Global analytics configuration
          window.analyticsConfig = {
            ga4Id: '${ga4Id || ''}',
            mixpanelToken: '${mixpanelToken || ''}',
            plausibleDomain: '${plausibleDomain || ''}',
            debug: ${process.env.NODE_ENV === 'development' || process.env.NEXT_PUBLIC_ANALYTICS_DEBUG === 'true'}
          };

          // Track initial page load
          if (window.gtag && '${ga4Id}') {
            gtag('event', 'page_view', {
              page_title: document.title,
              page_location: window.location.href,
              page_path: window.location.pathname
            });
          }

          // Enhanced error tracking
          window.addEventListener('error', function(e) {
            if (window.gtag && '${ga4Id}') {
              gtag('event', 'exception', {
                description: e.error?.message || 'Unknown error',
                fatal: false,
                page_path: window.location.pathname
              });
            }
          });

          // Track unhandled promise rejections
          window.addEventListener('unhandledrejection', function(e) {
            if (window.gtag && '${ga4Id}') {
              gtag('event', 'exception', {
                description: e.reason?.message || 'Unhandled promise rejection',
                fatal: false,
                page_path: window.location.pathname
              });
            }
          });

          // Performance tracking
          window.addEventListener('load', function() {
            setTimeout(function() {
              const perfData = performance.getEntriesByType('navigation')[0];
              if (perfData && window.gtag && '${ga4Id}') {
                gtag('event', 'timing_complete', {
                  name: 'page_load_time',
                  value: Math.round(perfData.loadEventEnd - perfData.loadEventStart)
                });
              }
            }, 0);
          });
        `}
      </Script>
    </>
  );
}
