import React from 'react';
import Logo from '@/components/Logo';
import ThemeToggle from '@/components/ThemeToggle';
import Link from 'next/link';
import { FiArrowLeft } from 'react-icons/fi';

export default function TermsPage() {
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
              Terms of Service
            </h1>
            
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <div className="modern-card">
                <h2>Service Description</h2>
                <p>
                  AppSpark provides 1:1 custom Cursor coaching sessions. Each session is 60 minutes long, 
                  conducted via Zoom with screenshare, and focuses on practical guidance for Cursor-related challenges.
                </p>

                <h2>Payment and Pricing</h2>
                <ul>
                  <li>Sessions are priced at $150 USD per 60-minute session</li>
                  <li>Payment is collected at the time of booking via Calendly and Stripe</li>
                  <li>All sales are final - no refunds are offered</li>
                </ul>

                <h2>Scheduling and Cancellation</h2>
                <ul>
                  <li><strong>Reschedule:</strong> Free reschedule with ≥12 hours notice via your Calendly link</li>
                  <li><strong>Late reschedule:</strong> Less than 12 hours notice requires a new booking</li>
                  <li><strong>Late arrival:</strong> Sessions start on time. After 10 minutes late, the clock runs. After 20 minutes, the session is forfeited</li>
                  <li><strong>No-show:</strong> Sessions are forfeited if you don't join within 20 minutes</li>
                </ul>

                <h2>Session Format and Deliverables</h2>
                <ul>
                  <li>Sessions are conducted via Zoom with screenshare capability</li>
                  <li>Recording is optional and requires your consent</li>
                  <li>If recorded, links are provided for 7 days only</li>
                  <li>After-Action Notes are provided within 24 hours regardless of recording</li>
                </ul>

                <h2>Scope and Limitations</h2>
                <ul>
                  <li>This is coaching, not done-for-you development</li>
                  <li>No ongoing support is implied beyond the session</li>
                  <li>We do not provide security reviews or audits</li>
                  <li>Additional sessions can be booked separately</li>
                </ul>

                <h2>Credentials and Security</h2>
                <ul>
                  <li>You retain and enter your own credentials</li>
                  <li>AppSpark does not store secrets or sensitive information</li>
                  <li>You are responsible for protecting your own credentials during sessions</li>
                </ul>

                <h2>Intellectual Property</h2>
                <ul>
                  <li>You own your code and project ideas</li>
                  <li>AppSpark retains rights to generic code snippets and techniques demonstrated</li>
                  <li>No warranty is provided for downstream usage of guidance provided</li>
                </ul>

                <h2>Limitation of Liability</h2>
                <p>
                  AppSpark provides coaching services only. We are not liable for any issues arising from 
                  third-party services, deployment problems, or implementation of guidance provided during sessions.
                </p>

                <h2>Contact</h2>
                <p>
                  For questions about these terms, contact us at{' '}
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
