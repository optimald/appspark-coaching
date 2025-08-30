'use client';

import React from 'react';
import Logo from '@/components/Logo';
import ThemeToggle from '@/components/ThemeToggle';
import { trackCalendlyClicked, trackEmailContact } from '@/lib/analytics';
import { FiCheck, FiX, FiClock, FiVideo, FiFileText, FiArrowRight } from 'react-icons/fi';

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 w-full z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Logo className="w-10 h-10 md:w-12 md:h-12" />
            <div className="hidden md:block">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      <div className="flex-grow">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
              Make Cursor work for you in{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                60 minutes
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              One focused session. Practical shortcuts. A clear next step.
            </p>
            
            {/* Micro-proof */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-12 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center">
                <FiCheck className="h-4 w-4 text-green-500 mr-2" />
                Hands-on guidance via screenshare
              </div>
              <div className="flex items-center">
                <FiCheck className="h-4 w-4 text-green-500 mr-2" />
                Proven shortcuts & workflows
              </div>
              <div className="flex items-center">
                <FiCheck className="h-4 w-4 text-green-500 mr-2" />
                Immediate practical results
              </div>
            </div>

            {/* CTA Button */}
            <div className="mb-16">
              <a
                href="#calendly"
                className="btn-primary text-lg px-8 py-4 inline-flex items-center"
                onClick={() => trackCalendlyClicked('hero')}
              >
                Book your session
                <FiArrowRight className="ml-2 h-5 w-5" />
              </a>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-3">
                $150 • 60 minutes • No refunds
              </p>
            </div>
          </div>
        </section>

        {/* What You Get Section */}
        <section className="bg-gray-50 dark:bg-gray-800/50 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                What you get
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="modern-card text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FiClock className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  Immediate clarity on your setup and stuck points
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We'll quickly diagnose what's blocking you and get straight to solutions.
                </p>
              </div>
              
              <div className="modern-card text-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FiVideo className="h-8 w-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  Code-along to a concrete improvement
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Scaffold creation, blocker removal, deploy fixes, or workflow optimization.
                </p>
              </div>
              
              <div className="modern-card text-center">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FiFileText className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  After-Action Notes with next steps
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  A short doc with what we changed, code snippets, and your next 3 steps.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Who it's for / Not for Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <div className="modern-card">
                <h3 className="text-2xl font-bold text-green-600 dark:text-green-400 mb-6 flex items-center">
                  <FiCheck className="mr-3 h-6 w-6" />
                  Perfect if you...
                </h3>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <FiCheck className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    Have a specific Cursor blocker or workflow question
                  </li>
                  <li className="flex items-start">
                    <FiCheck className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    Want to optimize your AI-assisted development loop
                  </li>
                  <li className="flex items-start">
                    <FiCheck className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    Need help with project scaffolding or deployment issues
                  </li>
                </ul>
              </div>
              
              <div className="modern-card">
                <h3 className="text-2xl font-bold text-red-600 dark:text-red-400 mb-6 flex items-center">
                  <FiX className="mr-3 h-6 w-6" />
                  Not right if you need...
                </h3>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <FiX className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    A complete app built for you (done-for-you service)
                  </li>
                  <li className="flex items-start">
                    <FiX className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    Security audit or code review
                  </li>
                  <li className="flex items-start">
                    <FiX className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    Ongoing support or mentorship
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-gray-50 dark:bg-gray-800/50 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Frequently Asked Questions
              </h2>
            </div>
            
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="modern-card">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  What will we cover?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We'll focus on your specific objective: creating a project scaffold, removing a blocker, 
                  unblocking deployment, or optimizing your AI development workflow. One clear outcome per session.
                </p>
              </div>
              
              <div className="modern-card">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Do you record sessions?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Only with your consent. If recorded, you'll get a link that expires in 7 days. 
                  You'll always receive written After-Action Notes regardless.
                </p>
              </div>
              
              <div className="modern-card">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  What are the reschedule/cancel rules?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Free reschedule with ≥12 hours notice. Less than 12 hours requires a new booking. 
                  No refunds offered - this keeps sessions focused and valuable.
                </p>
              </div>
              
              <div className="modern-card">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Will you write code?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  This is hands-on coaching. I'll guide you through writing code, share proven snippets, 
                  and work alongside you to solve your specific challenge.
                </p>
              </div>
              
              <div className="modern-card">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Can I book more time?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Absolutely! Each session is standalone, but you can book additional sessions 
                  using the same booking link. No packages or bundles - just focused, valuable sessions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Calendly Embed Section */}
        <section id="calendly" className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Book your session
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Choose a time that works for you
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="modern-card">
                {/* Calendly Embed Placeholder */}
                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-12 text-center">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FiClock className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Calendly Integration Coming Soon
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    The Calendly booking widget will be embedded here. For now, you can reach out directly.
                  </p>
                  <a
                    href="mailto:info@appspark.ai"
                    className="btn-primary inline-flex items-center"
                    onClick={() => trackEmailContact('calendly-placeholder')}
                  >
                    Contact directly
                    <FiArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
                
                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    <strong>Policy:</strong> Coaching session, not done-for-you. No refunds. 
                    Free reschedule with ≥12h notice. Late &gt;10 min counts toward time; &gt;20 min forfeits the session. 
                    No credential sharing—we'll have you paste secrets locally.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <Logo showText={true} className="mb-4" />
              <p className="text-gray-400 mb-4">
                60-minute focused Cursor coaching sessions. Practical shortcuts. Clear next steps.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#calendly" className="text-gray-400 hover:text-white transition-colors">
                    Book Session
                  </a>
                </li>
                <li>
                  <a href="/terms" className="text-gray-400 hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <p className="text-gray-400 mb-2">
                Have questions or need help?
              </p>
              <a
                href="mailto:info@appspark.ai"
                className="text-blue-400 hover:text-blue-300 transition-colors"
                onClick={() => trackEmailContact('footer')}
              >
                info@appspark.ai
              </a>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-gray-800 text-center">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} AppSpark. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
