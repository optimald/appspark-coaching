import Logo from './Logo';
import { SITE_CONFIG } from '@/lib/constants';
import { trackCalendlyClicked, trackEmailContact, trackExternalLinkClick } from '@/lib/analytics';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: SITE_CONFIG.colors.footerBg }} className="text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Logo className="mb-4" />
            <p className="text-gray-400 mb-4">
              60-minute focused vibe code coaching sessions. Master AI collaboration. Clear next steps.
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
            <p className="text-gray-400 mb-2">
              <strong>Email:</strong>{' '}
              <a 
                href={`mailto:${SITE_CONFIG.email}`}
                className="text-blue-400 hover:text-blue-300 transition-colors"
                onClick={() => trackEmailContact('footer')}
              >
                {SITE_CONFIG.email}
              </a>
            </p>
            <ul className="space-y-2 mt-4">
              <li>
                <a 
                  href={SITE_CONFIG.calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  onClick={() => {
                    trackCalendlyClicked('footer');
                    trackExternalLinkClick(SITE_CONFIG.calendlyUrl, 'Book Session');
                  }}
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
        </div>
        <div className="mt-8 pt-6 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} {SITE_CONFIG.companyName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
