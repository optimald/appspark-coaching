'use client';

import React from 'react';
import Logo from '@/components/Logo';
import { trackCalendlyClicked, trackEmailContact } from '@/lib/analytics';
import { FiCheck, FiX, FiClock, FiVideo, FiFileText, FiArrowRight } from 'react-icons/fi';
import { InlineWidget } from 'react-calendly';

export default function HomePage() {

  return (
    <main className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Logo size="lg" />
          </div>
        </div>
      </header>

      <div className="flex-grow">
        {/* Hero Section */}
        <section className="pt-8 pb-20 md:pt-12 md:pb-32">
          <div className="container mx-auto container-padding">
            <div className="text-center max-w-6xl mx-auto">
              <div className="animate-fade-in">
                {/* Cursor Logo and Synopsis - Matching Cursor's Theme */}
                <div className="flex items-center justify-center mb-12 px-4">
                  <div className="relative max-w-4xl w-full">
                    {/* Gradient background matching Cursor's style */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-blue-500/20 via-cyan-500/20 via-emerald-500/20 to-amber-500/20 rounded-3xl blur-xl"></div>
                    
                    <div className="relative flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8 p-8 rounded-3xl bg-black/40 backdrop-blur-xl border border-white/10">
                      {/* Cursor Logo */}
                      <div className="flex-shrink-0">
                        <img 
                          src="/assets/images/cursor-logo-official.svg" 
                          alt="Cursor Logo" 
                          className="w-16 h-16 md:w-20 md:h-20"
                        />
                      </div>
                      
                      {/* Content */}
                      <div className="text-center md:text-left flex-1">
                        <h3 className="text-2xl md:text-3xl font-bold mb-4">
                          <span className="bg-gradient-to-r from-purple-400 via-blue-400 via-cyan-400 via-emerald-400 to-amber-400 bg-clip-text text-transparent">
                            Why Cursor?
                          </span>
                        </h3>
                        <p className="text-gray-300 text-lg leading-relaxed">
                          The <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent font-semibold">AI-first code editor</span> that transforms how you build. 
                          <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent font-semibold"> Cursor</span> combines the power of VS Code with 
                          intelligent AI assistance, making coding faster, smarter, and more intuitive than ever before.
                        </p>
                        
                        {/* Feature highlights */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                          <div className="text-center md:text-left">
                            <div className="text-sm font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                              AI Pair Programming
                            </div>
                            <div className="text-xs text-gray-400">Code with AI assistance</div>
                          </div>
                          <div className="text-center md:text-left">
                            <div className="text-sm font-semibold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                              Smart Completions
                            </div>
                            <div className="text-xs text-gray-400">Context-aware suggestions</div>
                          </div>
                          <div className="text-center md:text-left">
                            <div className="text-sm font-semibold bg-gradient-to-r from-emerald-400 to-amber-400 bg-clip-text text-transparent">
                              Natural Language
                            </div>
                            <div className="text-xs text-gray-400">Edit code by describing</div>
                          </div>
                        </div>
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
                <p className="text-base md:text-lg text-gray-400 font-medium">
                  $150 • 60 minutes
                </p>
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
                  Immediate clarity on your setup and stuck points
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  We'll quickly diagnose what's blocking you and get straight to solutions.
                </p>
              </div>
              
              <div className="modern-card text-center feature-card group">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FiVideo className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  Code-along to a concrete improvement
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  Scaffold creation, blocker removal, deploy fixes, or workflow optimization.
                </p>
              </div>
              
              <div className="modern-card text-center feature-card group">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FiFileText className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  After-Action Notes with next steps
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  A short doc with what we changed, code snippets, and your next 3 steps.
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
        <section id="calendly" className="section-spacing bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20">
          <div className="container mx-auto container-padding">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="gradient-text">Book your session</span>
              </h2>
              <p className="text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Choose a time that works for you
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="modern-card overflow-hidden calendly-container">
                {/* Calendly Embed with React Component */}
                <InlineWidget 
                  url="https://calendly.com/optimaldev/appspark-coaching-session"
                  styles={{
                    height: '700px',
                    minWidth: '320px'
                  }}
                />
                
                {/* CSS to hide Calendly branding and text */}
                <style jsx global>{`
                  .calendly-container iframe {
                    height: 700px !important;
                  }
                  
                  /* Hide Calendly branding */
                  .calendly-badge-widget,
                  .calendly-badge-content,
                  [data-calendly-branding],
                  .calendly-popup-close,
                  .calendly-overlay,
                  .calendly-spinner,
                  .calendly-badge {
                    display: none !important;
                    visibility: hidden !important;
                  }
                  
                  /* Hide event description and details */
                  .calendly-container iframe[src*="calendly"] {
                    transform: translateY(-120px);
                    height: 820px !important;
                  }
                `}</style>
                
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
