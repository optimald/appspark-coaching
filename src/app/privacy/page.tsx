'use client';

import React from 'react';
import Logo from '@/components/Logo';
import ThemeToggle from '@/components/ThemeToggle';
import Link from 'next/link';
import { FiArrowLeft } from 'react-icons/fi';

export default function PrivacyPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 w-full z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/">
              <Logo className="w-10 h-10 md:w-12 md:h-12" />
            </Link>
            <div className="hidden md:block">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      <div className="flex-grow">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <Link 
              href="/"
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 mb-8"
            >
              <FiArrowLeft className="mr-2 h-4 w-4" />
              Back to home
            </Link>
            
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
              Privacy Policy
            </h1>
            
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <div className="modern-card">
                <h2>Information We Collect</h2>
                <p>
                  We collect minimal information necessary to provide our coaching services:
                </p>
                <ul>
                  <li>Contact information (email, name) for booking and communication</li>
                  <li>Session details and objectives you provide during intake</li>
                  <li>Usage analytics for website improvement (via Plausible Analytics)</li>
                  <li>Payment information (processed securely by Stripe)</li>
                </ul>

                <h2>How We Use Your Information</h2>
                <ul>
                  <li>To schedule and conduct coaching sessions</li>
                  <li>To provide After-Action Notes and follow-up materials</li>
                  <li>To improve our services and website experience</li>
                  <li>To communicate about your sessions and any changes</li>
                </ul>

                <h2>Information We Don't Store</h2>
                <ul>
                  <li>Your credentials, passwords, or API keys</li>
                  <li>Your source code (beyond generic snippets for documentation)</li>
                  <li>Detailed technical information about your projects</li>
                  <li>Session recordings (automatically deleted after 7 days if created)</li>
                </ul>

                <h2>Data Sharing</h2>
                <p>
                  We do not share your personal information with third parties except:
                </p>
                <ul>
                  <li>Service providers necessary for operations (Calendly, Stripe, Zoom)</li>
                  <li>When required by law</li>
                  <li>With your explicit consent</li>
                </ul>

                <h2>Data Security</h2>
                <ul>
                  <li>All data is encrypted in transit and at rest</li>
                  <li>We use industry-standard security practices</li>
                  <li>Access to your information is limited to necessary personnel</li>
                  <li>Regular security audits and updates</li>
                </ul>

                <h2>Your Rights</h2>
                <p>You have the right to:</p>
                <ul>
                  <li>Request access to your personal information</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your information</li>
                  <li>Opt out of marketing communications</li>
                </ul>

                <h2>Cookies and Analytics</h2>
                <ul>
                  <li>We use Plausible Analytics for privacy-friendly website analytics</li>
                  <li>No personal information is tracked or stored in analytics</li>
                  <li>Essential cookies only for website functionality</li>
                  <li>No advertising or tracking cookies</li>
                </ul>

                <h2>Data Retention</h2>
                <ul>
                  <li>Contact information: Retained for business purposes and legal requirements</li>
                  <li>Session notes: Retained for quality improvement and reference</li>
                  <li>Recordings: Automatically deleted after 7 days</li>
                  <li>Payment information: Handled by Stripe per their retention policies</li>
                </ul>

                <h2>International Data Transfers</h2>
                <p>
                  Your information may be processed in countries other than your own. 
                  We ensure appropriate safeguards are in place for international transfers.
                </p>

                <h2>Changes to This Policy</h2>
                <p>
                  We may update this privacy policy from time to time. We will notify you of 
                  any material changes by email or through our website.
                </p>

                <h2>Contact Us</h2>
                <p>
                  For privacy-related questions or requests, contact us at{' '}
                  <a href="mailto:info@appspark.ai" className="text-blue-600 dark:text-blue-400">
                    info@appspark.ai
                  </a>
                </p>

                <p className="text-sm text-gray-500 dark:text-gray-400 mt-8">
                  Last updated: {new Date().toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
