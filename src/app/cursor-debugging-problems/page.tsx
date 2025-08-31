'use client';

import React from 'react';
import Logo from '@/components/Logo';
import Footer from '@/components/Footer';
import { trackCalendlyClicked, trackEmailContact } from '@/lib/analytics';
import { FiCheck, FiX, FiClock, FiVideo, FiFileText, FiArrowRight, FiZap, FiCode, FiSettings } from 'react-icons/fi';

// Metadata moved to layout.tsx since this is a client component

export default function CursorDebuggingPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <a href="/">
              <Logo size="lg" />
            </a>
            <nav className="hidden md:flex space-x-6">
              <a href="/" className="text-gray-300 hover:text-white transition-colors">Home</a>
              <a href="#booking" className="btn-primary px-4 py-2 text-sm">Book Session</a>
            </nav>
          </div>
        </div>
      </header>

      <div className="flex-grow">
        {/* Hero Section */}
        <section className="pt-8 pb-20 md:pt-12 md:pb-32">
          <div className="container mx-auto container-padding">
            <div className="text-center max-w-6xl mx-auto">
              <div className="animate-fade-in">
                {/* Problem Badge */}
                <div className="mb-8 px-4">
                  <div className="inline-flex items-center justify-center">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-600 rounded-full blur-lg opacity-75"></div>
                      <div className="relative bg-gradient-to-r from-red-600 to-orange-600 text-white px-6 py-3 rounded-full font-bold text-lg md:text-xl">
                        DEBUGGING NIGHTMARES?
                      </div>
                    </div>
                  </div>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white mb-8 px-4">
                  Debug like a{' '}
                  <span className="gradient-text">
                    pro with AI
                  </span>
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl mb-12 text-gray-300 max-w-4xl mx-auto font-light leading-relaxed px-4">
                  Stop hunting bugs blindly. Master Cursor's AI-powered debugging tools and systematic troubleshooting techniques.
                </p>
              </div>

              {/* Problem Indicators */}
              <div className="animate-slide-up px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-16 max-w-4xl mx-auto">
                  <div className="flex items-center justify-center p-4 rounded-2xl bg-red-500/10 backdrop-blur-sm border border-red-500/20">
                    <FiX className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-300 font-medium text-sm md:text-base">Debugger won't connect</span>
                  </div>
                  <div className="flex items-center justify-center p-4 rounded-2xl bg-red-500/10 backdrop-blur-sm border border-red-500/20">
                    <FiX className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-300 font-medium text-sm md:text-base">Can't understand errors</span>
                  </div>
                  <div className="flex items-center justify-center p-4 rounded-2xl bg-red-500/10 backdrop-blur-sm border border-red-500/20">
                    <FiX className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-300 font-medium text-sm md:text-base">Hours hunting simple bugs</span>
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
                  onClick={() => trackCalendlyClicked('debugging-hero')}
                >
                  Fix my debugging
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

        {/* What We'll Fix Section */}
        <section className="section-spacing bg-gradient-to-br from-slate-900 to-blue-900/20">
          <div className="container mx-auto container-padding">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="gradient-text-blue">Debugging skills we'll master</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Transform debugging from frustration into systematic problem-solving
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
              <div className="modern-card text-center feature-card group">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FiCode className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">
                  Debugger Setup & Configuration
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Set up debuggers for any language/framework, configure breakpoints, and master step-through debugging with Cursor.
                </p>
              </div>

              <div className="modern-card text-center feature-card group">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FiSettings className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">
                  AI-Powered Error Analysis
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Use Cursor's AI to understand complex error messages, stack traces, and get targeted solutions for your specific bugs.
                </p>
              </div>

              <div className="modern-card text-center feature-card group">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FiCode className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">
                  Systematic Bug Hunting
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Learn proven debugging methodologies, logging strategies, and how to isolate problems efficiently with AI assistance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Debugging Scenarios Section */}
        <section className="section-spacing">
          <div className="container mx-auto container-padding">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="gradient-text">Common debugging scenarios we'll solve</span>
              </h2>
            </div>
            
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="modern-card">
                  <h3 className="text-xl font-bold mb-4 text-white flex items-center">
                    <FiCode className="mr-3 h-5 w-5 text-red-400" />
                    Frontend Issues
                  </h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• React component state problems</li>
                    <li>• JavaScript runtime errors</li>
                    <li>• CSS layout and styling bugs</li>
                    <li>• API call failures and network issues</li>
                    <li>• Browser compatibility problems</li>
                    <li>• Performance bottlenecks</li>
                  </ul>
                </div>
                
                <div className="modern-card">
                  <h3 className="text-xl font-bold mb-4 text-white flex items-center">
                    <FiCode className="mr-3 h-5 w-5 text-blue-400" />
                    Backend Issues
                  </h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Server crashes and exceptions</li>
                    <li>• Database connection problems</li>
                    <li>• API endpoint errors</li>
                    <li>• Authentication and authorization bugs</li>
                    <li>• Memory leaks and performance issues</li>
                    <li>• Environment configuration problems</li>
                  </ul>
                </div>
                
                <div className="modern-card">
                  <h3 className="text-xl font-bold mb-4 text-white flex items-center">
                    <FiCode className="mr-3 h-5 w-5 text-green-400" />
                    Integration Issues
                  </h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Docker container problems</li>
                    <li>• CI/CD pipeline failures</li>
                    <li>• Third-party service integration</li>
                    <li>• Git merge conflicts and issues</li>
                    <li>• Package dependency conflicts</li>
                    <li>• Environment variable problems</li>
                  </ul>
                </div>
                
                <div className="modern-card">
                  <h3 className="text-xl font-bold mb-4 text-white flex items-center">
                    <FiCode className="mr-3 h-5 w-5 text-purple-400" />
                    AI-Assisted Techniques
                  </h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Error message interpretation with AI</li>
                    <li>• Stack trace analysis and solutions</li>
                    <li>• Code review for bug prevention</li>
                    <li>• Automated test generation</li>
                    <li>• Performance profiling with AI insights</li>
                    <li>• Root cause analysis workflows</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Before/After Section */}
        <section className="section-spacing bg-gradient-to-br from-purple-900/20 to-blue-900/20">
          <div className="container mx-auto container-padding">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="gradient-text">From bug hunting to bug squashing</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div className="modern-card border-red-500/20">
                <h3 className="text-2xl font-bold text-red-400 mb-6 flex items-center">
                  <FiCode className="mr-3 h-6 w-6" />
                  Before: Debugging Hell
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li>• Spend hours on simple bugs with no clear approach</li>
                  <li>• Debugger setup is confusing and often broken</li>
                  <li>• Error messages are cryptic and unhelpful</li>
                  <li>• Resort to console.log debugging everywhere</li>
                  <li>• Can't reproduce bugs consistently</li>
                  <li>• Feel lost when facing complex stack traces</li>
                </ul>
              </div>
              <div className="modern-card border-green-500/20">
                <h3 className="text-2xl font-bold text-green-400 mb-6 flex items-center">
                  <FiCheck className="mr-3 h-6 w-6" />
                  After: Debugging Master
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li>• Systematic approach finds bugs in minutes, not hours</li>
                  <li>• Debugger works perfectly for your tech stack</li>
                  <li>• AI explains errors and suggests specific fixes</li>
                  <li>• Professional debugging tools and techniques</li>
                  <li>• Reproduce and isolate bugs efficiently</li>
                  <li>• Confident tackling any error or stack trace</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Book Your Session Section */}
        <section id="booking" className="section-spacing bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20">
          <div className="container mx-auto container-padding">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="gradient-text">Master debugging today</span>
              </h2>
              <p className="text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
                60 minutes to transform from bug hunter to bug squasher
              </p>
            </div>
            
            <div className="max-w-2xl mx-auto">
              <div className="modern-card">
                <div className="text-center p-12">
                  <div className="mb-8">
                    <div className="mb-4">
                      <div className="inline-flex items-center justify-center mb-4">
                        <div className="bg-gradient-to-r from-purple-500 via-blue-500 to-emerald-500 text-white px-4 py-2 rounded-full font-bold text-sm animate-pulse">
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
                      60-minute debugging mastery session
                    </p>
                  </div>
                  
                  <a
                    href="https://calendly.com/optimaldev/appspark-coaching-session"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-xl px-12 py-6 inline-flex items-center mb-8"
                    onClick={() => trackCalendlyClicked('debugging-booking')}
                  >
                    Book Debug Session
                    <FiArrowRight className="ml-3 h-6 w-6" />
                  </a>
                  
                  <div className="text-center">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      <strong>Policy:</strong> Coaching session, not done-for-you.
                      Free reschedule with ≥12h notice. Late &gt;10 min counts toward time; &gt;20 min forfeits the session.
                      No credential sharing—we'll have you paste secrets locally.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
