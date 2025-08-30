'use client';

import React from 'react';
import Logo from '@/components/Logo';
import { trackCalendlyClicked, trackEmailContact } from '@/lib/analytics';
import { FiCheck, FiX, FiClock, FiVideo, FiFileText, FiArrowRight } from 'react-icons/fi';
// Removed react-calendly import - using direct link instead

export default function HomePage() {

  return (
    <main className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Logo size="lg" />
            <nav className="hidden lg:flex space-x-6">
              <div className="relative group">
                <button className="text-gray-300 hover:text-white transition-colors flex items-center">
                  Common Issues
                  <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute top-full left-0 mt-2 w-64 bg-black/95 backdrop-blur-md border border-white/10 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="p-2">
                    <a href="/cursor-ai-suggestions-not-working" className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10 rounded transition-colors">AI Suggestions Not Working</a>
                    <a href="/cursor-slow-development-workflow" className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10 rounded transition-colors">Slow Development Workflow</a>
                    <a href="/cursor-debugging-problems" className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10 rounded transition-colors">Debugging Problems</a>
                    <a href="/cursor-ai-context-problems" className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10 rounded transition-colors">AI Context Issues</a>
                    <a href="/cursor-integration-setup" className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10 rounded transition-colors">Integration Setup</a>
                  </div>
                </div>
              </div>
              <a href="#booking" className="btn-primary px-4 py-2 text-sm">Book Session</a>
            </nav>
            <div className="lg:hidden">
              <a href="#booking" className="btn-primary px-4 py-2 text-sm">Book Session</a>
            </div>
          </div>
        </div>
      </header>

      <div className="flex-grow">
        {/* Hero Section */}
        <section className="pt-8 pb-20 md:pt-12 md:pb-32">
          <div className="container mx-auto container-padding">
            <div className="text-center max-w-6xl mx-auto">
                                              <div className="animate-fade-in">
                        {/* Special Offer Badge */}
                        <div className="mb-8 px-4">
                          <div className="inline-flex items-center justify-center">
                            <div className="relative">
                              <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-pink-500 rounded-full blur-lg opacity-75"></div>
                              <div className="relative bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-3 rounded-full font-bold text-lg md:text-xl animate-pulse">
                                🎉 INTRO OFFER: 50% OFF
                              </div>
                            </div>
                          </div>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white mb-8 px-4">
                  Make Cursor work for you in{' '}
                  <span className="gradient-text">
                    60 minutes
                  </span>
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl mb-12 text-gray-300 max-w-4xl mx-auto font-light leading-relaxed px-4">
                  One focused session. Practical shortcuts. A clear next step.
                </p>
                      </div>
            
              {/* Micro-proof */}
              <div className="animate-slide-up px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-16 max-w-4xl mx-auto">
                  <div className="flex items-center justify-center p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
                    <FiCheck className="h-5 w-5 text-emerald-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-300 font-medium text-sm md:text-base">Hands-on guidance via screenshare</span>
                  </div>
                  <div className="flex items-center justify-center p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
                    <FiCheck className="h-5 w-5 text-emerald-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-300 font-medium text-sm md:text-base">Proven shortcuts & workflows</span>
                  </div>
                  <div className="flex items-center justify-center p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
                    <FiCheck className="h-5 w-5 text-emerald-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-300 font-medium text-sm md:text-base">Immediate practical results</span>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="animate-fade-in px-4">
                <a
                  href="https://calendly.com/optimaldev/appspark-coaching-session"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-lg md:text-xl px-8 md:px-12 py-4 md:py-6 inline-flex items-center mb-6"
                  onClick={() => trackCalendlyClicked('hero')}
                >
                  Book your session
                  <FiArrowRight className="ml-2 md:ml-3 h-5 md:h-6 w-5 md:w-6" />
                </a>
                <div className="text-base md:text-lg font-medium">
                  <span className="text-gray-500 line-through mr-2">$150</span>
                  <span className="text-green-400 font-bold text-xl">$75</span>
                  <span className="text-gray-400 ml-2">• 60 minutes</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Cursor Section */}
        <section className="section-spacing bg-gradient-to-br from-purple-900/20 to-blue-900/20">
          <div className="container mx-auto container-padding">
            <div className="flex items-center justify-center px-4">
              <div className="relative max-w-6xl w-full">
                {/* Gradient background matching Cursor's style */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-blue-500/20 via-cyan-500/20 via-emerald-500/20 to-amber-500/20 rounded-3xl blur-xl"></div>

                <div className="relative flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8 p-8 md:p-12 rounded-3xl bg-black/40 backdrop-blur-xl border border-white/10">
                                                {/* Cursor Logo */}
                              <div className="flex-shrink-0">
                                <img
                                  src="/assets/images/cursor-logo.svg"
                                  alt="Cursor Logo"
                                  className="w-20 h-20 md:w-24 md:h-24"
                                />
                  </div>

                  {/* Content */}
                  <div className="text-center md:text-left flex-1">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                      <span className="bg-gradient-to-r from-purple-400 via-blue-400 via-cyan-400 via-emerald-400 to-amber-400 bg-clip-text text-transparent">
                        Why Cursor?
                      </span>
                    </h2>
                    <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8">
                      The <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent font-semibold">revolutionary AI-powered editor</span> that's changing how developers work.
                      <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent font-semibold"> Cursor</span> isn't just another editor—it's your 
                      intelligent coding partner that understands your project, anticipates your needs, and writes code alongside you.
                    </p>

                    {/* Feature highlights */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="text-center md:text-left p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                        <div className="text-base font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                          🤝 AI Pair Programming
                        </div>
                        <div className="text-sm text-gray-400">Like having a senior developer beside you—AI that reads your entire codebase and suggests solutions that actually fit</div>
                      </div>
                      <div className="text-center md:text-left p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                        <div className="text-base font-semibold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                          ⚡ Predictive Completions
                        </div>
                        <div className="text-sm text-gray-400">AI that finishes your thoughts—completions so accurate they feel like mind-reading, not guesswork</div>
                      </div>
                      <div className="text-center md:text-left p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                        <div className="text-base font-semibold bg-gradient-to-r from-emerald-400 to-amber-400 bg-clip-text text-transparent mb-2">
                          💬 Code with Words
                        </div>
                        <div className="text-sm text-gray-400">Describe what you want in plain English and watch AI write the exact code you need—no more syntax hunting</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What You Get Section */}
        <section className="section-spacing bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-900/20">
          <div className="container mx-auto container-padding">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="gradient-text-blue">What you get</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Three concrete deliverables in every 60-minute session
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
              <div className="modern-card text-center feature-card group">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FiClock className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  Fast clarity on your blockers
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  We'll zero in on what's really holding you back and align on a clear outcome for the hour.
                </p>
              </div>
              
              <div className="modern-card text-center feature-card group">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FiVideo className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  Hands-on progress in real time
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  Code together toward a concrete win — scaffolds, fixes, deploys, or optimized loops.
                </p>
              </div>
              
              <div className="modern-card text-center feature-card group">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FiFileText className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  Action notes you can run with
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  A short recap doc with changes made, key snippets, and your next 3 steps.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Who it's for / Not for Section */}
        <section className="section-spacing">
          <div className="container mx-auto container-padding">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="gradient-text">Is this right for you?</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div className="modern-card">
                <h3 className="text-2xl font-bold text-green-600 dark:text-green-400 mb-6 flex items-center">
                  <FiCheck className="mr-3 h-6 w-6" />
                  ✅ Perfect if you…
                </h3>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <FiCheck className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    Have a Cursor blocker or workflow question you need solved fast
                  </li>
                  <li className="flex items-start">
                    <FiCheck className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    Want to optimize your AI-assisted development loop
                  </li>
                  <li className="flex items-start">
                    <FiCheck className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    Need guidance on project scaffolding or deployment issues
                  </li>
                  <li className="flex items-start">
                    <FiCheck className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    Are looking for ongoing coaching or mentorship to level up your skills
                  </li>
                </ul>
              </div>
              
              <div className="modern-card">
                <h3 className="text-2xl font-bold text-red-600 dark:text-red-400 mb-6 flex items-center">
                  <FiX className="mr-3 h-6 w-6" />
                  ❌ Not the right fit if you…
                </h3>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <FiX className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    Expect a complete app built for you (done-for-you build service)
                  </li>
                  <li className="flex items-start">
                    <FiX className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    Need a formal security audit or penetration test
                  </li>
                  <li className="flex items-start">
                    <FiX className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    Require a full code review of a large codebase
                  </li>
                  <li className="flex items-start">
                    <FiX className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    Want round-the-clock support outside booked sessions
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

        {/* Book Your Session Section */}
        <section id="booking" className="section-spacing bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20">
          <div className="container mx-auto container-padding">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="gradient-text">Book your session</span>
              </h2>
              <p className="text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Choose a time that works for you
              </p>
            </div>
            
            <div className="max-w-2xl mx-auto">
              <div className="modern-card">
                {/* Direct Calendly Link */}
                <div className="text-center p-12">
                  <div className="mb-8">
                    {/* Special Offer Pricing */}
                    <div className="mb-4">
                      <div className="inline-flex items-center justify-center mb-4">
                        <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-full font-bold text-sm animate-pulse">
                          🎉 INTRO OFFER: 50% OFF
                        </div>
                      </div>
                      <div className="flex items-center justify-center gap-4 mb-2">
                        <span className="text-3xl md:text-4xl text-gray-500 dark:text-gray-400 line-through">$150</span>
                        <span className="text-6xl md:text-7xl font-bold">
                          <span className="gradient-text">$75</span>
                        </span>
                      </div>
                    </div>
                    <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                      60-minute focused session
                    </p>
                  </div>
                  
                  <a
                    href="https://calendly.com/optimaldev/appspark-coaching-session"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-xl px-12 py-6 inline-flex items-center mb-8"
                    onClick={() => trackCalendlyClicked('booking')}
                  >
                    Schedule on Calendly
                    <FiArrowRight className="ml-3 h-6 w-6" />
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
              <Logo className="mb-4" />
              <p className="text-gray-400 mb-4">
                60-minute focused Cursor coaching sessions. Practical shortcuts. Clear next steps.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="https://calendly.com/optimaldev/appspark-coaching-session"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    onClick={() => trackCalendlyClicked('footer')}
                  >
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
