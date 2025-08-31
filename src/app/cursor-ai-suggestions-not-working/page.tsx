'use client';

import React from 'react';
import Logo from '@/components/Logo';
import { trackCalendlyClicked, trackEmailContact } from '@/lib/analytics';
import { FiCheck, FiX, FiClock, FiVideo, FiFileText, FiArrowRight, FiZap, FiCode, FiSettings } from 'react-icons/fi';

// Metadata moved to layout.tsx since this is a client component

export default function CursorAISuggestionsPage() {
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
                      <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 rounded-full blur-lg opacity-75"></div>
                      <div className="relative bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-3 rounded-full font-bold text-lg md:text-xl">
                        AI SUGGESTIONS NOT HELPING?
                      </div>
                    </div>
                  </div>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white mb-8 px-4">
                  Get Cursor AI to{' '}
                  <span className="gradient-text">
                    actually help you code
                  </span>
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl mb-12 text-gray-300 max-w-4xl mx-auto font-light leading-relaxed px-4">
                  Stop fighting with irrelevant suggestions. Learn to make Cursor's AI understand your code and give you exactly what you need.
                </p>
              </div>

              {/* Problem Indicators */}
              <div className="animate-slide-up px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-16 max-w-4xl mx-auto">
                  <div className="flex items-center justify-center p-4 rounded-2xl bg-red-500/10 backdrop-blur-sm border border-red-500/20">
                    <FiX className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-300 font-medium text-sm md:text-base">Slow or irrelevant suggestions</span>
                  </div>
                  <div className="flex items-center justify-center p-4 rounded-2xl bg-red-500/10 backdrop-blur-sm border border-red-500/20">
                    <FiX className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-300 font-medium text-sm md:text-base">AI doesn't understand context</span>
                  </div>
                  <div className="flex items-center justify-center p-4 rounded-2xl bg-red-500/10 backdrop-blur-sm border border-red-500/20">
                    <FiX className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-300 font-medium text-sm md:text-base">Suggestions break your code</span>
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
                  onClick={() => trackCalendlyClicked('ai-suggestions-hero')}
                >
                  Fix my AI suggestions
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
                <span className="gradient-text-blue">What we'll fix in 60 minutes</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Transform your AI from a hindrance into your most productive coding partner
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
              <div className="modern-card text-center feature-card group">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FiSettings className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">
                  AI Configuration Mastery
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Set up your AI models, adjust temperature settings, and configure context windows for your specific coding style.
                </p>
              </div>

              <div className="modern-card text-center feature-card group">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FiCode className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">
                  Context & Prompting Techniques
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Learn to write comments and structure code so AI understands your intentions and gives relevant suggestions.
                </p>
              </div>

              <div className="modern-card text-center feature-card group">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FiZap className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">
                  Workflow Optimization
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Master when to use chat vs autocomplete, how to iterate on suggestions, and keyboard shortcuts for AI features.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Before/After Section */}
        <section className="section-spacing">
          <div className="container mx-auto container-padding">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="gradient-text">Before vs After</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div className="modern-card border-red-500/20">
                <h3 className="text-2xl font-bold text-red-400 mb-6 flex items-center">
                  <FiX className="mr-3 h-6 w-6" />
                  Before: Frustrating AI
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li>• AI suggests code that doesn't match your project structure</li>
                  <li>• Suggestions are slow and often irrelevant</li>
                  <li>• You spend more time fixing AI code than writing your own</li>
                  <li>• AI doesn't understand your coding patterns or preferences</li>
                  <li>• Autocomplete interrupts your flow with wrong suggestions</li>
                </ul>
              </div>
              <div className="modern-card border-green-500/20">
                <h3 className="text-2xl font-bold text-green-400 mb-6 flex items-center">
                  <FiCheck className="mr-3 h-6 w-6" />
                  After: AI That Actually Helps
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li>• AI understands your codebase and suggests relevant solutions</li>
                  <li>• Fast, accurate completions that match your coding style</li>
                  <li>• AI helps you write better code faster than before</li>
                  <li>• Context-aware suggestions that fit your project patterns</li>
                  <li>• Seamless workflow where AI enhances your productivity</li>
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
                <span className="gradient-text">Fix your AI suggestions today</span>
              </h2>
              <p className="text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
                60 minutes to transform your Cursor AI from frustrating to fantastic
              </p>
            </div>
            
            <div className="max-w-2xl mx-auto">
              <div className="modern-card">
                <div className="text-center p-12">
                  <div className="mb-8">
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
                      60-minute focused AI optimization session
                    </p>
                  </div>
                  
                  <a
                    href="https://calendly.com/optimaldev/appspark-coaching-session"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-xl px-12 py-6 inline-flex items-center mb-8"
                    onClick={() => trackCalendlyClicked('ai-suggestions-booking')}
                  >
                    Schedule AI Fix Session
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
      <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <Logo className="mb-4" />
              <p className="text-gray-400 mb-4">
                60-minute focused Cursor coaching sessions. Practical shortcuts. Clear next steps.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Cursor Issues We Fix</h3>
              <ul className="space-y-2">
                <li><a href="/cursor-ai-suggestions-not-working" className="text-gray-400 hover:text-white transition-colors">AI Suggestions Not Working</a></li>
                <li><a href="/cursor-slow-development-workflow" className="text-gray-400 hover:text-white transition-colors">Slow Development Workflow</a></li>
                <li><a href="/cursor-debugging-problems" className="text-gray-400 hover:text-white transition-colors">Debugging Problems</a></li>
                <li><a href="/cursor-ai-context-problems" className="text-gray-400 hover:text-white transition-colors">AI Context Issues</a></li>
                <li><a href="/cursor-integration-setup" className="text-gray-400 hover:text-white transition-colors">Integration Setup</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} AppSpark. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
