#!/usr/bin/env node

/**
 * Update all footer instances to use the new background color and email variable
 */

const fs = require('fs');
const path = require('path');

const pages = [
  'src/app/cursor-ai-suggestions-not-working/page.tsx',
  'src/app/cursor-slow-development-workflow/page.tsx', 
  'src/app/cursor-debugging-problems/page.tsx',
  'src/app/cursor-ai-context-problems/page.tsx',
  'src/app/cursor-integration-setup/page.tsx'
];

const oldFooterPattern = /footer className="bg-gray-900 dark:bg-gray-950 text-white py-12"/g;
const newFooterStyle = 'footer style={{ backgroundColor: SITE_CONFIG.colors.footerBg }} className="text-white py-12"';

const oldImportPattern = /import { trackCalendlyClicked, trackEmailContact } from '@\/lib\/analytics';/g;
const newImportStatement = `import { trackCalendlyClicked, trackEmailContact } from '@/lib/analytics';
import { SITE_CONFIG } from '@/lib/constants';`;

console.log('🔄 Updating all footer instances...');
console.log();

pages.forEach(pagePath => {
  console.log(`📝 Processing: ${pagePath}`);
  
  try {
    let content = fs.readFileSync(pagePath, 'utf8');
    
    // Update imports
    if (content.includes("import { trackCalendlyClicked, trackEmailContact } from '@/lib/analytics';")) {
      content = content.replace(oldImportPattern, newImportStatement);
      console.log('  ✅ Updated imports');
    }
    
    // Update footer background
    if (content.includes('bg-gray-900 dark:bg-gray-950')) {
      content = content.replace(oldFooterPattern, newFooterStyle);
      console.log('  ✅ Updated footer background');
    }
    
    // Add contact section if it doesn't exist
    if (content.includes('Cursor Issues We Fix') && !content.includes('Contact')) {
      // Find the footer grid and update it from 2 columns to 3 columns
      content = content.replace(
        /grid grid-cols-1 md:grid-cols-2 gap-8/g,
        'grid grid-cols-1 md:grid-cols-3 gap-8'
      );
      
      // Add contact section before the closing footer div
      const contactSection = `            <div>
              <h3 className="text-xl font-semibold mb-4">Contact</h3>
              <p className="text-gray-400 mb-2">
                <strong>Email:</strong>{' '}
                <a 
                  href={\`mailto:\${SITE_CONFIG.email}\`}
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                  onClick={() => trackEmailContact('footer')}
                >
                  {SITE_CONFIG.email}
                </a>
              </p>
            </div>`;
      
      // Insert contact section before the closing div of the grid
      content = content.replace(
        /(\s+)<\/div>\s+<\/div>\s+<div className="border-t border-gray-800/,
        `$1</div>
${contactSection}
          </div>
          <div className="border-t border-gray-800`
      );
      
      console.log('  ✅ Added contact section');
    }
    
    // Update company name in copyright
    content = content.replace(
      /© \{new Date\(\)\.getFullYear\(\)\} AppSpark\. All rights reserved\./g,
      `© {new Date().getFullYear()} {SITE_CONFIG.companyName}. All rights reserved.`
    );
    
    fs.writeFileSync(pagePath, content);
    console.log('  ✅ File updated successfully');
    
  } catch (error) {
    console.log(`  ❌ Error processing ${pagePath}:`, error.message);
  }
  
  console.log();
});

console.log('🎉 All footer updates complete!');
console.log();
console.log('📋 Changes made:');
console.log('  • Updated footer background to #0F0F0F');
console.log('  • Added SITE_CONFIG import');
console.log('  • Added Contact section with email variable');
console.log('  • Updated grid to 3 columns');
console.log('  • Used company name variable in copyright');
