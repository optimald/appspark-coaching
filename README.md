# AppSpark Coaching

A Next.js application for AppSpark's 60-minute custom Cursor coaching sessions.

## Overview

AppSpark provides focused, one-on-one Cursor coaching sessions designed to help developers:
- Remove specific blockers
- Optimize AI-assisted development workflows  
- Create project scaffolds
- Fix deployment issues
- Learn practical shortcuts and techniques

## Features

- **Conversion-focused landing page** with clear value proposition
- **Calendly integration** for seamless booking and payment
- **Responsive design** with light/dark theme support
- **Modern UI components** with smooth animations
- **SEO optimized** with proper meta tags and structure

## Tech Stack

- **Framework:** Next.js 15 with App Router
- **Styling:** Tailwind CSS with custom design system
- **Icons:** React Icons (Feather Icons)
- **Deployment:** Vercel (recommended)
- **Analytics:** Plausible (privacy-friendly)
- **Booking:** Calendly with Stripe integration
- **Notifications:** Notion for After-Action Notes

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm 8+

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd appspark-coaching
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── globals.css        # Global styles and CSS variables
│   ├── layout.tsx         # Root layout component
│   ├── page.tsx           # Homepage
│   ├── terms/             # Terms of Service page
│   └── privacy/           # Privacy Policy page
├── components/            # Reusable React components
│   ├── Logo.tsx          # AppSpark logo component
│   ├── SpaceBackground.tsx # Animated background
│   ├── ThemeProvider.tsx  # Theme context and management
│   └── ThemeToggle.tsx    # Light/dark mode toggle
```

## Configuration

### Environment Variables

Create a `.env.local` file with:

```env
# Analytics
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=appspark.ai

# Calendly (if using custom integration)
CALENDLY_ACCESS_TOKEN=your_token_here

# Notion (for After-Action Notes automation)
NOTION_API_KEY=your_notion_key
NOTION_DATABASE_ID=your_database_id
```

### Calendly Setup

1. Create a Calendly event type: "AppSpark — 60-Minute Cursor Session ($150)"
2. Configure duration: 60 minutes
3. Enable Stripe payment collection: $150 USD
4. Add intake questions as specified in SPEC.md
5. Set up email reminders and confirmations

### Deployment

#### Vercel (Recommended)

1. Connect your repository to Vercel
2. Configure environment variables
3. Deploy with default settings

#### Manual Deployment

```bash
npm run build
npm start
```

## Customization

### Design System

The app uses a custom design system with CSS variables defined in `globals.css`:
- Light/dark theme support
- Consistent spacing and typography
- Modern glass-morphism effects
- Smooth animations and transitions

### Theme Colors

Primary colors can be customized in `tailwind.config.js` and `globals.css`:
- Blue gradient for primary actions
- Subtle backgrounds with space theme
- High contrast for accessibility

## Analytics

The site uses Plausible Analytics for privacy-friendly tracking:
- Page views and referrers
- Goal tracking for bookings
- No personal data collection
- GDPR compliant

## SEO Optimization

- Semantic HTML structure
- Proper heading hierarchy
- Meta descriptions and titles
- Open Graph tags
- Structured data markup

## Performance

- Optimized images and assets
- Minimal JavaScript bundle
- CSS-in-JS avoided for better performance
- Lazy loading where appropriate

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive design
- Progressive enhancement approach

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is proprietary to AppSpark. All rights reserved.

## Support

For technical issues or questions:
- Email: info@appspark.ai
- Documentation: See SPEC.md for detailed requirements

## Roadmap

- [ ] Calendly widget integration
- [ ] Notion automation for After-Action Notes
- [ ] Plausible Analytics setup
- [ ] Email automation sequences
- [ ] A/B testing for conversion optimization
