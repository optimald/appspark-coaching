import './globals.css';
import type { Metadata } from 'next';
import SpaceBackground from '@/components/SpaceBackground';
import ThemeProvider from '@/components/ThemeProvider';
import ThemeToggle from '@/components/ThemeToggle';
import Analytics from '@/components/Analytics';

export const metadata: Metadata = {
  title: 'AppSpark — 60-Minute Custom Cursor Session',
  description: 'Make Cursor work for you in 60 minutes. One focused session. Practical shortcuts. A clear next step.',
  icons: {
    icon: '/favicon.svg',
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
    <html lang="en">
      <body className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <SpaceBackground />
        <ThemeProvider>
          {children}
          <div className="md:hidden">
            <ThemeToggle floating={true} />
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
