# Analytics Setup Guide

Complete guide for setting up privacy-friendly analytics with Plausible for AppSpark coaching site.

## Plausible Analytics Setup

### 1. Account Creation
1. Sign up at [plausible.io](https://plausible.io)
2. Choose the appropriate plan (likely the $9/month plan)
3. Add your domain: `appspark.ai` (or your chosen domain)

### 2. Script Installation
Add the Plausible script to your Next.js app:

#### Option A: Via Script Component (Recommended)
Create `src/components/Analytics.tsx`:

```tsx
'use client';

import Script from 'next/script';

export default function Analytics() {
  if (process.env.NODE_ENV !== 'production') {
    return null;
  }

  return (
    <Script
      defer
      data-domain="appspark.ai"
      src="https://plausible.io/js/script.js"
      strategy="afterInteractive"
    />
  );
}
```

Add to `src/app/layout.tsx`:
```tsx
import Analytics from '@/components/Analytics';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

#### Option B: Environment Variable Approach
Update `src/components/Analytics.tsx`:

```tsx
'use client';

import Script from 'next/script';

export default function Analytics() {
  const domain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
  
  if (!domain || process.env.NODE_ENV !== 'production') {
    return null;
  }

  return (
    <Script
      defer
      data-domain={domain}
      src="https://plausible.io/js/script.js"
      strategy="afterInteractive"
    />
  );
}
```

Add to `.env.local`:
```env
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=appspark.ai
```

### 3. Goal Tracking Setup

#### Define Goals in Plausible Dashboard:
1. **Session Booking** - Most important conversion
   - Goal: Custom event
   - Event name: `Session Booked`
   - Revenue tracking: $150

2. **Calendly Click** - Funnel tracking
   - Goal: Custom event  
   - Event name: `Calendly Clicked`

3. **Email Contact** - Alternative conversion
   - Goal: Custom event
   - Event name: `Email Contact`

#### Implement Goal Tracking:
Create `src/lib/analytics.ts`:

```tsx
declare global {
  interface Window {
    plausible?: (event: string, options?: { props?: Record<string, string | number> }) => void;
  }
}

export const trackEvent = (eventName: string, props?: Record<string, string | number>) => {
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
```

#### Add Tracking to Components:
Update your main page buttons:

```tsx
import { trackCalendlyClicked, trackEmailContact } from '@/lib/analytics';

// For Calendly CTA buttons
<a
  href="#calendly"
  className="btn-primary"
  onClick={() => trackCalendlyClicked('hero')}
>
  Book your session
</a>

// For email links
<a
  href="mailto:info@appspark.ai"
  onClick={() => trackEmailContact('footer')}
>
  info@appspark.ai
</a>
```

### 4. Enhanced Script with Goals
Update Analytics component for goal tracking:

```tsx
'use client';

import Script from 'next/script';

export default function Analytics() {
  const domain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
  
  if (!domain || process.env.NODE_ENV !== 'production') {
    return null;
  }

  return (
    <Script
      defer
      data-domain={domain}
      src="https://plausible.io/js/script.tagged-events.js"
      strategy="afterInteractive"
    />
  );
}
```

## Key Metrics to Track

### Primary KPIs
1. **Conversion Rate** (Page views → Session bookings)
   - Target: 20-30% as specified in SPEC.md
   - Track by source (organic, referral, direct)

2. **Show-up Rate** (Bookings → Actual sessions)
   - Target: 90% as specified in SPEC.md
   - Track via Calendly webhook integration

3. **Reschedule Rate** (Bookings → Reschedules)
   - Monitor for patterns and optimization

### Secondary Metrics
1. **Page Views** - Overall traffic
2. **Bounce Rate** - Content engagement
3. **Time on Page** - Interest level
4. **Traffic Sources** - Marketing effectiveness
5. **Device/Browser** - Technical optimization

### Funnel Tracking
1. **Landing Page View**
2. **Scroll to Calendly Section**
3. **Calendly Widget Click**
4. **Calendly Page Load**
5. **Session Booked**

## Dashboard Setup

### Plausible Dashboard Configuration
1. **Time Period:** Default to last 30 days
2. **Goals Dashboard:** Pin key conversion goals
3. **Sources:** Monitor referral traffic
4. **Pages:** Track which content performs best
5. **Countries:** Understand geographic reach

### Custom Dashboard Views
Create filtered views for:
- **Marketing campaigns** (UTM tracking)
- **Mobile vs Desktop** performance
- **Peak booking times** and days
- **Seasonal trends**

## UTM Campaign Tracking

### Campaign Structure
Use consistent UTM parameters:

```
https://appspark.ai/?utm_source=twitter&utm_medium=social&utm_campaign=launch
https://appspark.ai/?utm_source=newsletter&utm_medium=email&utm_campaign=weekly
https://appspark.ai/?utm_source=linkedin&utm_medium=social&utm_campaign=content
```

### Campaign Categories
- **Source:** twitter, linkedin, newsletter, podcast, referral
- **Medium:** social, email, organic, paid, referral
- **Campaign:** launch, weekly, content, retargeting

## Privacy Compliance

### Plausible Benefits
- **No cookies** - GDPR compliant by default
- **No personal data** collection
- **Lightweight script** - fast loading
- **EU-hosted** - data sovereignty
- **Open source** - transparent

### Privacy Policy Updates
Ensure your privacy policy mentions:
```
We use Plausible Analytics for website analytics. Plausible is privacy-friendly 
and doesn't use cookies or collect personal information. It only tracks page 
views and basic usage patterns to help us improve our website.
```

## Calendly Integration

### Webhook Setup for Conversion Tracking
1. **Calendly Webhook URL:** Point to your analytics endpoint
2. **Events to Track:**
   - `invitee.created` → Session Booked goal
   - `invitee.canceled` → Track cancellations
3. **Data to Capture:**
   - Booking source (if available)
   - Session type
   - Revenue attribution

### Implementation Example
Create API endpoint `src/app/api/calendly-webhook/route.ts`:

```tsx
import { trackEvent } from '@/lib/analytics';

export async function POST(request: Request) {
  const data = await request.json();
  
  if (data.event === 'invitee.created') {
    // Track successful booking
    trackEvent('Session Booked', {
      revenue: 150,
      source: data.payload?.utm_source || 'direct'
    });
  }
  
  return new Response('OK', { status: 200 });
}
```

## Reporting and Analysis

### Weekly Reports
Track these metrics weekly:
- Total page views
- Conversion rate (views → bookings)
- Top traffic sources
- Device breakdown
- Goal completions

### Monthly Analysis
- **Trend analysis** - growth patterns
- **Source performance** - ROI by channel
- **Content optimization** - page performance
- **Technical issues** - loading times, errors
- **Seasonal patterns** - booking trends

### Quarterly Reviews
- **Goal achievement** vs targets (20-30% conversion, 90% show-up)
- **Channel optimization** - double down on what works
- **Content strategy** - update based on user behavior
- **Technical improvements** - site speed, mobile experience

## A/B Testing Setup

### Test Ideas
1. **Hero headline** variations
2. **CTA button** text and placement
3. **Pricing presentation** ($150 vs value-focused)
4. **Social proof** placement and content
5. **FAQ section** order and content

### Implementation
Use Plausible's custom events to track variants:

```tsx
// Track which variant user sees
useEffect(() => {
  const variant = Math.random() > 0.5 ? 'A' : 'B';
  trackEvent('Variant Shown', { variant, test: 'hero-headline' });
}, []);
```

## Troubleshooting

### Common Issues
1. **Script not loading** - Check domain configuration
2. **Goals not tracking** - Verify event names match exactly
3. **Duplicate tracking** - Ensure script only loads once
4. **Development tracking** - Disable in non-production environments

### Debug Mode
Add debug logging in development:

```tsx
export const trackEvent = (eventName: string, props?: Record<string, string | number>) => {
  if (process.env.NODE_ENV === 'development') {
    console.log('Analytics Event:', eventName, props);
  }
  
  if (typeof window !== 'undefined' && window.plausible) {
    window.plausible(eventName, { props });
  }
};
```

## Performance Optimization

### Script Loading
- Use `strategy="afterInteractive"` for non-critical tracking
- Defer script loading to not block page rendering
- Consider using `strategy="lazyOnload"` for even better performance

### Data Efficiency
- Minimize custom event properties
- Use consistent naming conventions
- Avoid tracking sensitive information

## Cost Management

### Plausible Pricing Tiers
- **Essential ($9/month):** Up to 10K page views
- **Growth ($19/month):** Up to 100K page views
- **Business ($39/month):** Up to 1M page views

### Optimization Tips
- Monitor page view usage monthly
- Optimize for conversion quality over quantity
- Use UTM parameters efficiently
- Regular cleanup of unused goals/events
