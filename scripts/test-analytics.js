#!/usr/bin/env node

/**
 * Analytics Test Script
 * 
 * This script tests the analytics configuration
 * Run with: node scripts/test-analytics.js
 */

const fs = require('fs');
const path = require('path');

function testAnalyticsSetup() {
  console.log('🧪 Testing Analytics Setup\n');

  // Check if .env.local exists
  const envPath = path.join(process.cwd(), '.env.local');
  
  if (!fs.existsSync(envPath)) {
    console.log('❌ .env.local file not found');
    console.log('💡 Run: npm run setup-analytics');
    return;
  }

  // Read environment variables
  const envContent = fs.readFileSync(envPath, 'utf8');
  const envVars = {};
  
  envContent.split('\n').forEach(line => {
    const [key, value] = line.split('=');
    if (key && value) {
      envVars[key.trim()] = value.trim();
    }
  });

  // Check analytics configuration
  console.log('📊 Analytics Configuration:');
  
  const ga4Id = envVars['NEXT_PUBLIC_GA4_MEASUREMENT_ID'];
  if (ga4Id && ga4Id !== 'G-XXXXXXXXXX') {
    console.log('✅ Google Analytics 4:', ga4Id);
  } else {
    console.log('⚠️  Google Analytics 4: Not configured');
  }

  const mixpanelToken = envVars['NEXT_PUBLIC_MIXPANEL_TOKEN'];
  if (mixpanelToken && mixpanelToken !== 'your_mixpanel_token_here') {
    console.log('✅ Mixpanel:', mixpanelToken.substring(0, 8) + '...');
  } else {
    console.log('⚠️  Mixpanel: Not configured');
  }

  const plausibleDomain = envVars['NEXT_PUBLIC_PLAUSIBLE_DOMAIN'];
  if (plausibleDomain && plausibleDomain !== 'yourdomain.com') {
    console.log('✅ Plausible:', plausibleDomain);
  } else {
    console.log('⚠️  Plausible: Not configured');
  }

  const debugMode = envVars['NEXT_PUBLIC_ANALYTICS_DEBUG'];
  console.log('🐛 Debug Mode:', debugMode === 'true' ? 'Enabled' : 'Disabled');

  // Check required files
  console.log('\n📁 File Check:');
  
  const requiredFiles = [
    'src/lib/analytics.ts',
    'src/components/Analytics.tsx',
    'src/components/PageTracker.tsx',
    'src/components/ScrollTracker.tsx'
  ];

  let allFilesExist = true;
  
  requiredFiles.forEach(file => {
    const filePath = path.join(process.cwd(), file);
    if (fs.existsSync(filePath)) {
      console.log('✅', file);
    } else {
      console.log('❌', file);
      allFilesExist = false;
    }
  });

  // Check package.json dependencies
  console.log('\n📦 Dependencies:');
  
  const packagePath = path.join(process.cwd(), 'package.json');
  const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
  
  const requiredDeps = [
    'mixpanel-browser',
    '@types/mixpanel-browser',
    'gtag'
  ];

  requiredDeps.forEach(dep => {
    if (packageJson.dependencies[dep] || packageJson.devDependencies[dep]) {
      console.log('✅', dep);
    } else {
      console.log('❌', dep);
      allFilesExist = false;
    }
  });

  // Summary
  console.log('\n📋 Summary:');
  
  if (allFilesExist && (ga4Id || mixpanelToken || plausibleDomain)) {
    console.log('✅ Analytics setup is ready!');
    console.log('\n🚀 Next steps:');
    console.log('1. Start development server: npm run dev');
    console.log('2. Open browser console to see analytics events');
    console.log('3. Test by clicking buttons and navigating pages');
    console.log('4. Verify events in your analytics dashboards');
  } else {
    console.log('⚠️  Setup incomplete');
    console.log('\n🔧 To fix:');
    if (!allFilesExist) {
      console.log('- Ensure all required files are present');
    }
    if (!ga4Id && !mixpanelToken && !plausibleDomain) {
      console.log('- Configure at least one analytics service');
      console.log('- Run: npm run setup-analytics');
    }
  }

  console.log('\n📚 Documentation: docs/comprehensive-analytics-setup.md');
}

// Run test
testAnalyticsSetup();
