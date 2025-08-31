#!/usr/bin/env node

/**
 * Analytics Setup Script
 * 
 * This script helps configure Google Analytics 4 and Mixpanel
 * Run with: node scripts/setup-analytics.js
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

async function setupAnalytics() {
  console.log('🚀 AppSpark Analytics Setup\n');
  
  // Check if .env.local exists
  const envPath = path.join(process.cwd(), '.env.local');
  const envExamplePath = path.join(process.cwd(), '.env.example');
  
  let envContent = '';
  
  if (fs.existsSync(envPath)) {
    console.log('📄 Found existing .env.local file');
    envContent = fs.readFileSync(envPath, 'utf8');
  } else if (fs.existsSync(envExamplePath)) {
    console.log('📄 Creating .env.local from .env.example');
    envContent = fs.readFileSync(envExamplePath, 'utf8');
  }

  console.log('\n🔧 Let\'s configure your analytics services:\n');

  // Google Analytics 4 Setup
  console.log('📊 Google Analytics 4 Setup');
  console.log('1. Go to https://analytics.google.com/');
  console.log('2. Create a new GA4 property');
  console.log('3. Get your Measurement ID (starts with G-)\n');
  
  const ga4Id = await question('Enter your GA4 Measurement ID (or press Enter to skip): ');
  
  if (ga4Id) {
    envContent = updateEnvVar(envContent, 'NEXT_PUBLIC_GA4_MEASUREMENT_ID', ga4Id);
    console.log('✅ GA4 configured');
  }

  // Mixpanel Setup
  console.log('\n📈 Mixpanel Setup');
  console.log('1. Go to https://mixpanel.com/');
  console.log('2. Create a new project');
  console.log('3. Get your Project Token from Settings > Project Settings\n');
  
  const mixpanelToken = await question('Enter your Mixpanel Token (or press Enter to skip): ');
  
  if (mixpanelToken) {
    envContent = updateEnvVar(envContent, 'NEXT_PUBLIC_MIXPANEL_TOKEN', mixpanelToken);
    console.log('✅ Mixpanel configured');
  }

  // Plausible Setup
  console.log('\n📊 Plausible Analytics Setup');
  console.log('1. Go to https://plausible.io/');
  console.log('2. Add your domain');
  console.log('3. Enable custom events\n');
  
  const plausibleDomain = await question('Enter your domain for Plausible (or press Enter to skip): ');
  
  if (plausibleDomain) {
    envContent = updateEnvVar(envContent, 'NEXT_PUBLIC_PLAUSIBLE_DOMAIN', plausibleDomain);
    console.log('✅ Plausible configured');
  }

  // Development Analytics
  const enableDebug = await question('\nEnable analytics in development? (y/N): ');
  if (enableDebug.toLowerCase() === 'y' || enableDebug.toLowerCase() === 'yes') {
    envContent = updateEnvVar(envContent, 'NEXT_PUBLIC_ANALYTICS_DEBUG', 'true');
    console.log('✅ Development analytics enabled');
  }

  // Write .env.local file
  fs.writeFileSync(envPath, envContent);
  console.log('\n✅ Configuration saved to .env.local');

  // Display next steps
  console.log('\n🎉 Analytics setup complete!\n');
  console.log('Next steps:');
  console.log('1. Restart your development server: npm run dev');
  console.log('2. Test analytics in browser console');
  console.log('3. Verify events in your analytics dashboards');
  console.log('4. Set up conversion goals in GA4 and Mixpanel');
  
  if (ga4Id) {
    console.log('\n📊 Google Analytics 4 Goals to Set Up:');
    console.log('- Session Booked (conversion, $75 value)');
    console.log('- Calendly Clicked (engagement)');
    console.log('- Email Contact (engagement)');
    console.log('- FAQ Expanded (engagement)');
  }

  if (mixpanelToken) {
    console.log('\n📈 Mixpanel Events to Monitor:');
    console.log('- Session Booked (revenue event)');
    console.log('- Page View (engagement)');
    console.log('- Scroll Depth (engagement)');
    console.log('- Time on Page (engagement)');
  }

  console.log('\n📚 Read the full setup guide: docs/comprehensive-analytics-setup.md');
  
  rl.close();
}

function updateEnvVar(content, key, value) {
  const regex = new RegExp(`^${key}=.*$`, 'm');
  const newLine = `${key}=${value}`;
  
  if (regex.test(content)) {
    return content.replace(regex, newLine);
  } else {
    return content + (content.endsWith('\n') ? '' : '\n') + newLine + '\n';
  }
}

// Handle errors
process.on('unhandledRejection', (error) => {
  console.error('❌ Error:', error.message);
  process.exit(1);
});

// Run setup
setupAnalytics().catch(console.error);
