# Comprehensive Analytics Setup Guide

This guide covers setting up Google Analytics 4, Mixpanel, and Plausible Analytics for complete site tracking.

## Quick Setup

### 1. Environment Variables

Copy `.env.example` to `.env.local` and fill in your analytics credentials:

```bash
cp .env.example .env.local
```

```env
# Google Analytics 4
NEXT_PUBLIC_GA4_MEASUREMENT_ID=G-XXXXXXXXXX

# Mixpanel
NEXT_PUBLIC_MIXPANEL_TOKEN=your_mixpanel_token_here

# Plausible Analytics
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=yourdomain.com

# Development Analytics (optional)
NEXT_PUBLIC_ANALYTICS_DEBUG=true
```

### 2. Google Analytics 4 Setup

1. **Create GA4 Property:**
   - Go to [Google Analytics](https://analytics.google.com/)
   - Create a new GA4 property
   - Get your Measurement ID (starts with G-)

2. **Configure Enhanced Ecommerce:**
   - Enable Enhanced Ecommerce in GA4
   - Set up conversion events:
     - `purchase` (automatic)
     - `session_booked` (custom)
     - `calendly_clicked` (custom)

3. **Set up Goals:**
   - Session Booked ($75 value)
   - Email Contact
   - Calendly Clicked
   - FAQ Expanded

### 3. Mixpanel Setup

1. **Create Mixpanel Project:**
   - Sign up at [Mixpanel](https://mixpanel.com/)
   - Create a new project
   - Get your Project Token

2. **Configure Events:**
   - All events are automatically tracked
   - Revenue tracking is enabled for purchases
   - User identification for returning visitors

### 4. Plausible Analytics Setup

1. **Create Plausible Account:**
   - Sign up at [Plausible](https://plausible.io/)
   - Add your domain
   - Enable custom events

## Analytics CLI Commands

### Google Analytics CLI Setup

```bash
# Install Google Analytics CLI
npm install -g @google-analytics/cli

# Authenticate
gcloud auth login

# Create GA4 property (if needed)
ga4 properties create --display-name "AppSpark Coaching"
```

### Mixpanel CLI Setup

```bash
# Install Mixpanel CLI
npm install -g mixpanel-cli

# Login to Mixpanel
mixpanel login

# Create project
mixpanel projects create --name "AppSpark Coaching"

# Export events (for analysis)
mixpanel export --from-date 2024-01-01 --to-date 2024-12-31
```

## Tracked Events

### Core Conversion Events
- **Session Booked** - Primary conversion ($75 value)
- **Calendly Clicked** - Funnel step
- **Email Contact** - Alternative conversion
- **Form Submission** - Lead generation

### Engagement Events
- **Page View** - All page visits
- **Scroll Depth** - 25%, 50%, 75%, 90%
- **Time on Page** - Engagement duration
- **FAQ Expanded** - Content interaction
- **Video Play** - Media engagement
- **External Link Click** - Outbound traffic

### Technical Events
- **Error Occurred** - JavaScript errors
- **Performance** - Page load times
- **Search Query** - Site search usage

## Analytics Dashboard Setup

### Google Analytics 4 Dashboard

1. **Acquisition Reports:**
   - Traffic sources
   - Campaign performance
   - Organic search terms

2. **Engagement Reports:**
   - Page views and sessions
   - Scroll depth analysis
   - Time on page metrics

3. **Conversion Reports:**
   - Goal completions
   - Revenue tracking
   - Funnel analysis

4. **Custom Reports:**
   - Problem page performance
   - CTA effectiveness
   - User journey mapping

### Mixpanel Dashboard

1. **Funnel Analysis:**
   - Page View → Calendly Click → Session Booked
   - Problem Page → Solution Interest → Conversion

2. **Cohort Analysis:**
   - User retention
   - Repeat visitors
   - Conversion timing

3. **Revenue Analysis:**
   - Revenue per user
   - Conversion value
   - Payment success rates

### Key Metrics to Monitor

#### Primary KPIs
- **Conversion Rate:** Page views → Session bookings
- **Revenue per Visitor:** Total revenue / unique visitors
- **Cost per Acquisition:** Marketing spend / conversions
- **Customer Lifetime Value:** Average session value

#### Secondary Metrics
- **Bounce Rate:** Single-page sessions
- **Average Session Duration:** Engagement depth
- **Pages per Session:** Content consumption
- **Return Visitor Rate:** Brand loyalty

#### Technical Metrics
- **Page Load Speed:** Performance optimization
- **Error Rate:** Technical issues
- **Mobile vs Desktop:** Device preferences
- **Browser Compatibility:** Technical reach

## Advanced Tracking Features

### User Identification
```javascript
import { identifyUser } from '@/lib/analytics';

// Identify user after booking
identifyUser('user123', {
  email: 'user@example.com',
  plan: 'coaching_session',
  source: 'organic'
});
```

### Custom Event Tracking
```javascript
import { trackEvent } from '@/lib/analytics';

// Track custom interactions
trackEvent('Custom Event', {
  category: 'engagement',
  value: 100,
  custom_property: 'value'
});
```

### Revenue Tracking
```javascript
import { trackConversion } from '@/lib/analytics';

// Track revenue events
trackConversion('Session Booked', 75, 'USD', {
  source: 'calendly',
  campaign: 'launch'
});
```

## Privacy Compliance

### GDPR Compliance
- **Plausible:** No cookies, GDPR compliant by default
- **Google Analytics:** Anonymized IP, no personal data
- **Mixpanel:** User consent required, data retention controls

### Cookie Policy
```javascript
// Analytics only loads with user consent
if (userConsent) {
  // Initialize analytics
}
```

## Testing Analytics

### Development Testing
```bash
# Enable analytics in development
NEXT_PUBLIC_ANALYTICS_DEBUG=true npm run dev
```

### Production Verification
1. Check browser console for analytics events
2. Verify events in GA4 Real-time reports
3. Test Mixpanel event stream
4. Confirm Plausible goal tracking

## Troubleshooting

### Common Issues
1. **Events not showing:** Check environment variables
2. **Revenue not tracking:** Verify ecommerce setup
3. **High bounce rate:** Check page load speed
4. **Low conversion rate:** Analyze funnel dropoffs

### Debug Commands
```bash
# Check analytics configuration
npm run build && npm run start

# Test event tracking
curl -X POST "https://api.mixpanel.com/track" \
  -d "data=base64_encoded_event_data"
```

## Analytics Automation

### Daily Reports
Set up automated daily reports for:
- Conversion metrics
- Traffic sources
- Error monitoring
- Performance metrics

### Alerts
Configure alerts for:
- Conversion rate drops
- Traffic spikes
- Error rate increases
- Performance degradation

## ROI Measurement

### Campaign Attribution
- UTM parameter tracking
- Source/medium analysis
- Campaign performance
- Channel effectiveness

### A/B Testing
- Landing page variants
- CTA button testing
- Pricing experiments
- Content optimization

This comprehensive setup ensures full visibility into user behavior, conversion optimization opportunities, and business performance metrics.
