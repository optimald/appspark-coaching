import './globals.css';
import type { Metadata } from 'next';
import SpaceBackground from '@/components/SpaceBackground';
import Analytics from '@/components/Analytics';
import PageTracker from '@/components/PageTracker';
import ScrollTracker from '@/components/ScrollTracker';

export const metadata: Metadata = {
  title: 'AppSpark — Master Vibe Code with Cursor in 60 Minutes',
  description: 'Master vibe code with Cursor in 60 minutes. Learn to code with words, not syntax. One focused session. A clear next step.',
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
