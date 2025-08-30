# Deployment Guide

Complete guide for deploying AppSpark coaching site to production.

## Pre-Deployment Checklist

### 1. Environment Setup
Create `.env.local` with production values:
```env
# Analytics
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=appspark.ai

# Optional: Calendly webhook integration
CALENDLY_ACCESS_TOKEN=your_production_token

# Optional: Notion automation
NOTION_API_KEY=your_notion_key
NOTION_DATABASE_ID=your_database_id
```

### 2. Domain Setup
- [ ] Purchase domain (recommended: `appspark.ai`)
- [ ] Configure DNS settings
- [ ] Set up SSL certificate (handled by Vercel)

### 3. Third-Party Services
- [ ] Plausible Analytics account setup
- [ ] Calendly event configuration
- [ ] Stripe payment setup
- [ ] Notion workspace preparation

## Vercel Deployment (Recommended)

### 1. Repository Setup
```bash
# Initialize git repository
git init
git add .
git commit -m "Initial commit"

# Push to GitHub/GitLab
git remote add origin <your-repo-url>
git push -u origin main
```

### 2. Vercel Configuration
1. **Connect Repository**
   - Go to [vercel.com](https://vercel.com)
   - Import your repository
   - Select "Next.js" framework preset

2. **Environment Variables**
   Add in Vercel dashboard:
   ```
   NEXT_PUBLIC_PLAUSIBLE_DOMAIN=appspark.ai
   ```

3. **Domain Configuration**
   - Add custom domain in Vercel dashboard
   - Configure DNS records as instructed
   - Enable automatic HTTPS

### 3. Build Settings
Vercel auto-detects Next.js settings, but verify:
- **Framework Preset:** Next.js
- **Build Command:** `npm run build`
- **Output Directory:** `.next`
- **Install Command:** `npm install`

### 4. Deploy
```bash
# Using Vercel CLI (optional)
npm i -g vercel
vercel --prod
```

Or deploy via Git push (automatic with GitHub integration).

## Alternative: Manual VPS Deployment

### 1. Server Setup
```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js 18+
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install PM2 for process management
sudo npm install -g pm2

# Install Nginx for reverse proxy
sudo apt install nginx -y
```

### 2. Application Deployment
```bash
# Clone repository
git clone <your-repo-url> appspark-coaching
cd appspark-coaching

# Install dependencies
npm install

# Build application
npm run build

# Start with PM2
pm2 start npm --name "appspark" -- start
pm2 save
pm2 startup
```

### 3. Nginx Configuration
Create `/etc/nginx/sites-available/appspark`:
```nginx
server {
    listen 80;
    server_name appspark.ai www.appspark.ai;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Enable site:
```bash
sudo ln -s /etc/nginx/sites-available/appspark /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### 4. SSL Certificate
```bash
# Install Certbot
sudo apt install certbot python3-certbot-nginx -y

# Get SSL certificate
sudo certbot --nginx -d appspark.ai -d www.appspark.ai
```

## Post-Deployment Setup

### 1. Analytics Configuration
1. **Plausible Setup**
   - Add domain in Plausible dashboard
   - Verify tracking script is working
   - Set up goals: "Session Booked", "Calendly Clicked", "Email Contact"

2. **Test Analytics**
   ```bash
   # Check in browser console
   window.plausible('test-event')
   ```

### 2. Calendly Integration
1. **Widget Integration** (when ready)
   Replace placeholder in `src/app/page.tsx`:
   ```tsx
   {/* Replace placeholder with actual Calendly widget */}
   <div 
     className="calendly-inline-widget" 
     data-url="https://calendly.com/your-link/appspark-session"
     style={{ minWidth: '320px', height: '700px' }}
   />
   <script 
     type="text/javascript" 
     src="https://assets.calendly.com/assets/external/widget.js" 
     async
   />
   ```

2. **Webhook Setup** (optional)
   Create API endpoint for booking notifications:
   ```tsx
   // src/app/api/calendly-webhook/route.ts
   export async function POST(request: Request) {
     const data = await request.json();
     
     if (data.event === 'invitee.created') {
       // Handle new booking
       console.log('New booking:', data.payload);
     }
     
     return new Response('OK', { status: 200 });
   }
   ```

### 3. Performance Optimization
1. **Enable Compression**
   ```javascript
   // next.config.js
   const nextConfig = {
     compress: true,
     // ... other config
   };
   ```

2. **Image Optimization**
   - Use Next.js Image component for any images
   - Optimize logo and background assets

3. **Caching Headers**
   ```javascript
   // next.config.js
   const nextConfig = {
     async headers() {
       return [
         {
           source: '/(.*)',
           headers: [
             {
               key: 'Cache-Control',
               value: 'public, max-age=31536000, immutable',
             },
           ],
         },
       ];
     },
   };
   ```

## Monitoring & Maintenance

### 1. Uptime Monitoring
Set up monitoring with:
- **Vercel Analytics** (built-in)
- **UptimeRobot** (free external monitoring)
- **Pingdom** (comprehensive monitoring)

### 2. Error Tracking
Consider adding:
- **Sentry** for error tracking
- **LogRocket** for session replay
- **Vercel Analytics** for performance monitoring

### 3. Backup Strategy
- **Code:** Git repository (GitHub/GitLab)
- **Analytics:** Plausible data export
- **Calendly:** Booking data export
- **Environment:** Document all configurations

### 4. Update Process
```bash
# Regular updates
git pull origin main
npm install
npm run build
pm2 restart appspark  # If using PM2

# Or for Vercel: automatic on git push
```

## Security Checklist

### 1. Environment Variables
- [ ] No secrets in code
- [ ] Production environment variables set
- [ ] Development keys removed

### 2. Headers Security
Add security headers in `next.config.js`:
```javascript
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};
```

### 3. Content Security Policy
```javascript
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' plausible.io assets.calendly.com; style-src 'self' 'unsafe-inline';",
          },
        ],
      },
    ];
  },
};
```

## Performance Targets

### Core Web Vitals
- **LCP (Largest Contentful Paint):** < 2.5s
- **FID (First Input Delay):** < 100ms
- **CLS (Cumulative Layout Shift):** < 0.1

### Optimization Checklist
- [ ] Images optimized and properly sized
- [ ] CSS and JS minified
- [ ] Fonts preloaded
- [ ] Critical CSS inlined
- [ ] Lazy loading implemented
- [ ] Service worker for caching (optional)

## SEO Optimization

### 1. Meta Tags
Verify in `src/app/layout.tsx`:
```tsx
export const metadata: Metadata = {
  title: 'AppSpark — 60-Minute Custom Cursor Session',
  description: 'Make Cursor work for you in 60 minutes. One focused session. Practical shortcuts. A clear next step.',
  keywords: 'Cursor, AI coding, development coaching, programming help',
  authors: [{ name: 'AppSpark' }],
  openGraph: {
    title: 'AppSpark — 60-Minute Custom Cursor Session',
    description: 'Make Cursor work for you in 60 minutes. One focused session. Practical shortcuts. A clear next step.',
    url: 'https://appspark.ai',
    siteName: 'AppSpark',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AppSpark — 60-Minute Custom Cursor Session',
    description: 'Make Cursor work for you in 60 minutes. One focused session. Practical shortcuts. A clear next step.',
  },
};
```

### 2. Structured Data
Add JSON-LD structured data:
```tsx
// src/components/StructuredData.tsx
export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AppSpark Cursor Coaching",
    "description": "60-minute custom Cursor coaching sessions",
    "provider": {
      "@type": "Organization",
      "name": "AppSpark"
    },
    "offers": {
      "@type": "Offer",
      "price": "150",
      "priceCurrency": "USD"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
```

### 3. Sitemap
Create `src/app/sitemap.ts`:
```tsx
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://appspark.ai',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://appspark.ai/terms',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: 'https://appspark.ai/privacy',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ];
}
```

## Launch Checklist

### Pre-Launch
- [ ] All content reviewed and approved
- [ ] Analytics tracking verified
- [ ] Contact forms working
- [ ] Mobile responsiveness tested
- [ ] Cross-browser compatibility checked
- [ ] Performance optimized
- [ ] SEO elements in place
- [ ] SSL certificate active
- [ ] Domain configured correctly

### Launch Day
- [ ] Final deployment to production
- [ ] DNS propagation verified
- [ ] Analytics goals configured
- [ ] Calendly integration tested
- [ ] Email notifications working
- [ ] Backup systems verified
- [ ] Monitoring alerts set up

### Post-Launch
- [ ] Submit sitemap to Google Search Console
- [ ] Monitor analytics for issues
- [ ] Test booking flow end-to-end
- [ ] Set up regular backups
- [ ] Document any issues and resolutions
- [ ] Plan first marketing campaigns

## Troubleshooting

### Common Issues
1. **Build Failures**
   - Check Node.js version compatibility
   - Verify all dependencies installed
   - Review TypeScript errors

2. **Analytics Not Working**
   - Verify domain configuration in Plausible
   - Check script loading in browser dev tools
   - Ensure environment variables set correctly

3. **Calendly Integration Issues**
   - Verify widget script loading
   - Check for CSP blocking external scripts
   - Test in incognito mode

4. **Performance Issues**
   - Run Lighthouse audit
   - Check for large images or assets
   - Verify caching headers

### Support Resources
- **Vercel Documentation:** [vercel.com/docs](https://vercel.com/docs)
- **Next.js Documentation:** [nextjs.org/docs](https://nextjs.org/docs)
- **Plausible Documentation:** [plausible.io/docs](https://plausible.io/docs)
- **Calendly API Documentation:** [developer.calendly.com](https://developer.calendly.com)
