'use client';

import React from 'react';
import Logo from '@/components/Logo';
import { trackCalendlyClicked, trackEmailContact } from '@/lib/analytics';
import { FiCheck, FiX, FiClock, FiVideo, FiFileText, FiArrowRight, FiZap, FiGitBranch, FiTerminal } from 'react-icons/fi';

// Metadata moved to layout.tsx since this is a client component

export default function CursorIntegrationPage() {
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
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-lg opacity-75"></div>
                      <div className="relative bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full font-bold text-lg md:text-xl">
                        🔧 INTEGRATION HEADACHES?
                      </div>
                    </div>
                  </div>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white mb-8 px-4">
                  Connect Cursor to{' '}
                  <span className="gradient-text">
                    your entire dev stack
                  </span>
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl mb-12 text-gray-300 max-w-4xl mx-auto font-light leading-relaxed px-4">
                  Stop fighting with broken integrations. Set up Git, Docker, CI/CD, and terminal workflows that actually work.
                </p>
              </div>

              {/* Problem Indicators */}
              <div className="animate-slide-up px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-16 max-w-4xl mx-auto">
                  <div className="flex items-center justify-center p-4 rounded-2xl bg-blue-500/10 backdrop-blur-sm border border-blue-500/20">
                    <FiX className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-300 font-medium text-sm md:text-base">Git integration broken</span>
                  </div>
                  <div className="flex items-center justify-center p-4 rounded-2xl bg-blue-500/10 backdrop-blur-sm border border-blue-500/20">
                    <FiX className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-300 font-medium text-sm md:text-base">Terminal doesn't work</span>
                  </div>
                  <div className="flex items-center justify-center p-4 rounded-2xl bg-blue-500/10 backdrop-blur-sm border border-blue-500/20">
                    <FiX className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-300 font-medium text-sm md:text-base">Docker setup fails</span>
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
                  onClick={() => trackCalendlyClicked('integration-hero')}
                >
                  Fix my integrations
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

        {/* What We'll Integrate Section */}
        <section className="section-spacing bg-gradient-to-br from-slate-900 to-blue-900/20">
          <div className="container mx-auto container-padding">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="gradient-text-blue">Integrations we'll set up</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Connect Cursor seamlessly with your entire development workflow
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
              <div className="modern-card text-center feature-card group">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FiGitBranch className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">
                  Git & Version Control
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Set up Git integration, branch management, merge conflict resolution, and AI-powered commit message generation.
                </p>
              </div>

              <div className="modern-card text-center feature-card group">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FiTerminal className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">
                  Terminal & CLI Integration
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Configure terminal, shell integration, command execution, and seamless CLI workflow within Cursor.
                </p>
              </div>

              <div className="modern-card text-center feature-card group">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FiZap className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">
                  Docker & DevOps Tools
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Set up Docker development, container debugging, CI/CD integration, and deployment workflow automation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Integration Categories Section */}
        <section className="section-spacing">
          <div className="container mx-auto container-padding">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="gradient-text">Complete integration coverage</span>
              </h2>
            </div>
            
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="modern-card">
                  <h3 className="text-xl font-bold mb-4 text-white flex items-center">
                    <FiGitBranch className="mr-3 h-5 w-5 text-blue-400" />
                    Version Control
                  </h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Git configuration and authentication</li>
                    <li>• Branch management and switching</li>
                    <li>• Merge conflict resolution with AI</li>
                    <li>• Commit message generation</li>
                    <li>• Pull request workflow optimization</li>
                    <li>• GitHub/GitLab integration setup</li>
                  </ul>
                </div>
                
                <div className="modern-card">
                  <h3 className="text-xl font-bold mb-4 text-white flex items-center">
                    <FiTerminal className="mr-3 h-5 w-5 text-green-400" />
                    Terminal & Shell
                  </h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Integrated terminal configuration</li>
                    <li>• Shell profile and environment setup</li>
                    <li>• Custom command shortcuts</li>
                    <li>• Package manager integration (npm, yarn, pip)</li>
                    <li>• Build tool configuration</li>
                    <li>• Task runner integration</li>
                  </ul>
                </div>
                
                <div className="modern-card">
                  <h3 className="text-xl font-bold mb-4 text-white flex items-center">
                    <FiZap className="mr-3 h-5 w-5 text-purple-400" />
                    Development Environment
                  </h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Docker container development</li>
                    <li>• Remote development setup</li>
                    <li>• Database connection configuration</li>
                    <li>• API testing tool integration</li>
                    <li>• Environment variable management</li>
                    <li>• Local server and proxy setup</li>
                  </ul>
                </div>
                
                <div className="modern-card">
                  <h3 className="text-xl font-bold mb-4 text-white flex items-center">
                    <FiClock className="mr-3 h-5 w-5 text-orange-400" />
                    CI/CD & Deployment
                  </h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• GitHub Actions integration</li>
                    <li>• Deployment pipeline setup</li>
                    <li>• Testing framework integration</li>
                    <li>• Code quality tools (ESLint, Prettier)</li>
                    <li>• Automated deployment workflows</li>
                    <li>• Monitoring and logging setup</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Framework-Specific Integrations */}
        <section className="section-spacing bg-gradient-to-br from-purple-900/20 to-blue-900/20">
          <div className="container mx-auto container-padding">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="gradient-text">Framework-specific setups</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Optimized configurations for your specific tech stack
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="modern-card text-center">
                  <h3 className="text-lg font-bold mb-3 text-white">Frontend</h3>
                  <ul className="space-y-1 text-gray-300 text-sm">
                    <li>• React/Next.js setup</li>
                    <li>• Vue/Nuxt configuration</li>
                    <li>• Angular development</li>
                    <li>• Vite/Webpack integration</li>
                    <li>• Tailwind CSS setup</li>
                  </ul>
                </div>
                
                <div className="modern-card text-center">
                  <h3 className="text-lg font-bold mb-3 text-white">Backend</h3>
                  <ul className="space-y-1 text-gray-300 text-sm">
                    <li>• Node.js/Express setup</li>
                    <li>• Python/Django configuration</li>
                    <li>• Go development environment</li>
                    <li>• Rust toolchain setup</li>
                    <li>• Database integrations</li>
                  </ul>
                </div>
                
                <div className="modern-card text-center">
                  <h3 className="text-lg font-bold mb-3 text-white">DevOps</h3>
                  <ul className="space-y-1 text-gray-300 text-sm">
                    <li>• Docker Compose setup</li>
                    <li>• Kubernetes development</li>
                    <li>• AWS/GCP integration</li>
                    <li>• Terraform configuration</li>
                    <li>• Monitoring tools setup</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Before/After Section */}
        <section className="section-spacing">
          <div className="container mx-auto container-padding">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="gradient-text">From integration hell to seamless workflow</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div className="modern-card border-red-500/20">
                <h3 className="text-2xl font-bold text-red-400 mb-6 flex items-center">
                  <FiX className="mr-3 h-6 w-6" />
                  Before: Integration Nightmare
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li>• Git operations fail or require external tools</li>
                  <li>• Terminal doesn't work or has wrong environment</li>
                  <li>• Docker containers won't connect or debug</li>
                  <li>• CI/CD pipelines break with Cursor changes</li>
                  <li>• Switching between multiple tools constantly</li>
                  <li>• Development environment setup takes days</li>
                </ul>
              </div>
              <div className="modern-card border-green-500/20">
                <h3 className="text-2xl font-bold text-green-400 mb-6 flex items-center">
                  <FiCheck className="mr-3 h-6 w-6" />
                  After: Seamless Integration
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li>• All Git operations work perfectly within Cursor</li>
                  <li>• Terminal integrated with proper environment</li>
                  <li>• Docker development and debugging seamless</li>
                  <li>• CI/CD pipelines work flawlessly with your workflow</li>
                  <li>• Everything accessible from one unified interface</li>
                  <li>• New projects set up in minutes, not days</li>
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
                <span className="gradient-text">Fix integrations today</span>
              </h2>
              <p className="text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
                60 minutes to connect Cursor with your entire dev stack
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
                      60-minute integration setup session
                    </p>
                  </div>
                  
                  <a
                    href="https://calendly.com/optimaldev/appspark-coaching-session"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-xl px-12 py-6 inline-flex items-center mb-8"
                    onClick={() => trackCalendlyClicked('integration-booking')}
                  >
                    Book Integration Session
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
