import './globals.css';
import type { Metadata } from 'next';
import SpaceBackground from '@/components/SpaceBackground';
import Analytics from '@/components/Analytics';
import PageTracker from '@/components/PageTracker';
import ScrollTracker from '@/components/ScrollTracker';

export const metadata: Metadata = {
  title: 'AppSpark — One Hour to Accelerate Your Vibe Coding',
  description: 'One hour to accelerate your vibe coding. Direct, hands-on coaching with Cursor. Stop fighting AI. Start collaborating with it.',
  keywords: ['vibe code', 'Cursor', 'AI coding', 'developer coaching', 'AI collaboration', 'coding with AI'],
  authors: [{ name: 'AppSpark Coaching' }],
  creator: 'AppSpark Coaching',
  publisher: 'AppSpark Coaching',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://appspark.ai',
    siteName: 'AppSpark Coaching',
    title: 'AppSpark — One Hour to Accelerate Your Vibe Coding',
    description: 'One hour to accelerate your vibe coding. Direct, hands-on coaching with Cursor. Stop fighting AI. Start collaborating with it.',
    images: [
      {
        url: '/assets/images/social-share.png',
        width: 1200,
        height: 630,
        alt: 'Cursor + Appspark Coaching - One hour to accelerate your vibe coding',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AppSpark — One Hour to Accelerate Your Vibe Coding',
    description: 'One hour to accelerate your vibe coding. Direct, hands-on coaching with Cursor. Stop fighting AI. Start collaborating with it.',
    images: ['/assets/images/social-share.png'],
    creator: '@appspark_coaching',
    site: '@appspark_coaching',
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
    ],
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-black text-white">
        <SpaceBackground />
        {children}
        <Analytics />
        <PageTracker />
        <ScrollTracker />
      </body>
    </html>
  );
}
