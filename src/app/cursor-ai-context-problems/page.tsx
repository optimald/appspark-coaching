'use client';

import React from 'react';
import Logo from '@/components/Logo';
import { trackCalendlyClicked, trackEmailContact } from '@/lib/analytics';
import { FiCheck, FiX, FiClock, FiVideo, FiFileText, FiArrowRight, FiZap, FiLayers, FiDatabase } from 'react-icons/fi';

// Metadata moved to layout.tsx since this is a client component

export default function CursorAIContextPage() {
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
                      <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full blur-lg opacity-75"></div>
                      <div className="relative bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-3 rounded-full font-bold text-lg md:text-xl">
                        🧠 AI DOESN'T UNDERSTAND YOUR CODE?
                      </div>
                    </div>
                  </div>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white mb-8 px-4">
                  Make Cursor AI{' '}
                  <span className="gradient-text">
                    understand your codebase
                  </span>
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl mb-12 text-gray-300 max-w-4xl mx-auto font-light leading-relaxed px-4">
                  Stop getting irrelevant suggestions. Teach Cursor AI your project structure, patterns, and preferences.
                </p>
              </div>

              {/* Problem Indicators */}
              <div className="animate-slide-up px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-16 max-w-4xl mx-auto">
                  <div className="flex items-center justify-center p-4 rounded-2xl bg-yellow-500/10 backdrop-blur-sm border border-yellow-500/20">
                    <FiX className="h-5 w-5 text-yellow-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-300 font-medium text-sm md:text-base">AI ignores project structure</span>
                  </div>
                  <div className="flex items-center justify-center p-4 rounded-2xl bg-yellow-500/10 backdrop-blur-sm border border-yellow-500/20">
                    <FiX className="h-5 w-5 text-yellow-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-300 font-medium text-sm md:text-base">Wrong coding patterns</span>
                  </div>
                  <div className="flex items-center justify-center p-4 rounded-2xl bg-yellow-500/10 backdrop-blur-sm border border-yellow-500/20">
                    <FiX className="h-5 w-5 text-yellow-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-300 font-medium text-sm md:text-base">Suggestions don't fit</span>
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
                  onClick={() => trackCalendlyClicked('ai-context-hero')}
                >
                  Fix AI context issues
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

        {/* What We'll Setup Section */}
        <section className="section-spacing bg-gradient-to-br from-slate-900 to-blue-900/20">
          <div className="container mx-auto container-padding">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="gradient-text-blue">Context mastery we'll achieve</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Transform AI from clueless to context-aware with proper setup
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
              <div className="modern-card text-center feature-card group">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FiFileText className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">
                  .cursorrules Configuration
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Set up comprehensive .cursorrules files that teach AI your coding standards, patterns, and project-specific requirements.
                </p>
              </div>

              <div className="modern-card text-center feature-card group">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FiLayers className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">
                  Project Structure Optimization
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Organize your codebase so AI understands relationships, dependencies, and architectural patterns across your project.
                </p>
              </div>

              <div className="modern-card text-center feature-card group">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FiDatabase className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">
                  Context Management Strategies
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Learn to manage large codebases, use context windows effectively, and provide AI with the right information at the right time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Context Techniques Section */}
        <section className="section-spacing">
          <div className="container mx-auto container-padding">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="gradient-text">Context techniques you'll master</span>
              </h2>
            </div>
            
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="modern-card">
                  <h3 className="text-xl font-bold mb-4 text-white flex items-center">
                    <FiFileText className="mr-3 h-5 w-5 text-blue-400" />
                    .cursorrules Mastery
                  </h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Project-specific coding standards</li>
                    <li>• Framework and library preferences</li>
                    <li>• Architecture and design patterns</li>
                    <li>• File naming and organization rules</li>
                    <li>• Code style and formatting guidelines</li>
                    <li>• Testing and documentation standards</li>
                  </ul>
                </div>
                
                <div className="modern-card">
                  <h3 className="text-xl font-bold mb-4 text-white flex items-center">
                    <FiLayers className="mr-3 h-5 w-5 text-green-400" />
                    Project Organization
                  </h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Logical folder structure for AI understanding</li>
                    <li>• README and documentation strategy</li>
                    <li>• Component and module relationships</li>
                    <li>• Import/export pattern consistency</li>
                    <li>• Configuration file organization</li>
                    <li>• Asset and resource management</li>
                  </ul>
                </div>
                
                <div className="modern-card">
                  <h3 className="text-xl font-bold mb-4 text-white flex items-center">
                    <FiZap className="mr-3 h-5 w-5 text-purple-400" />
                    AI Context Optimization
                  </h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Strategic commenting for AI understanding</li>
                    <li>• Context window management techniques</li>
                    <li>• Relevant file selection strategies</li>
                    <li>• Cross-file relationship documentation</li>
                    <li>• API and schema documentation</li>
                    <li>• Business logic explanation methods</li>
                  </ul>
                </div>
                
                <div className="modern-card">
                  <h3 className="text-xl font-bold mb-4 text-white flex items-center">
                    <FiDatabase className="mr-3 h-5 w-5 text-orange-400" />
                    Large Codebase Management
                  </h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Monorepo AI context strategies</li>
                    <li>• Microservice architecture documentation</li>
                    <li>• Legacy code integration approaches</li>
                    <li>• Third-party dependency management</li>
                    <li>• Performance optimization for AI parsing</li>
                    <li>• Incremental context building techniques</li>
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
                <span className="gradient-text">From confused AI to context-aware assistant</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div className="modern-card border-red-500/20">
                <h3 className="text-2xl font-bold text-red-400 mb-6 flex items-center">
                  <FiX className="mr-3 h-6 w-6" />
                  Before: Clueless AI
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li>• AI suggests code that doesn't fit your architecture</li>
                  <li>• Recommendations ignore your coding standards</li>
                  <li>• AI doesn't understand project relationships</li>
                  <li>• Suggestions break existing patterns and conventions</li>
                  <li>• AI can't navigate large or complex codebases</li>
                  <li>• Generic solutions that don't match your context</li>
                </ul>
              </div>
              <div className="modern-card border-green-500/20">
                <h3 className="text-2xl font-bold text-green-400 mb-6 flex items-center">
                  <FiCheck className="mr-3 h-6 w-6" />
                  After: Context-Aware AI
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li>• AI understands and follows your architecture</li>
                  <li>• Suggestions match your exact coding standards</li>
                  <li>• AI navigates complex project relationships easily</li>
                  <li>• Recommendations enhance existing patterns</li>
                  <li>• AI efficiently works with any codebase size</li>
                  <li>• Tailored solutions that fit your specific context</li>
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
                <span className="gradient-text">Fix AI context today</span>
              </h2>
              <p className="text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
                60 minutes to make AI truly understand your codebase
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
                      60-minute AI context optimization session
                    </p>
                  </div>
                  
                  <a
                    href="https://calendly.com/optimaldev/appspark-coaching-session"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-xl px-12 py-6 inline-flex items-center mb-8"
                    onClick={() => trackCalendlyClicked('ai-context-booking')}
                  >
                    Book Context Session
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact</h3>
              <p className="text-gray-400">Email: <a href="mailto:badger@slickrockholdings.com" className="text-blue-400 hover:underline" onClick={() => trackEmailContact('footer')}>badger@slickrockholdings.com</a></p>
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
