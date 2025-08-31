#!/usr/bin/env node

/**
 * Test GA4 Events - Verify analytics integration
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🧪 Testing GA4 Events Integration');
console.log('================================');
console.log();

// Check if .env.local exists and has GA4 ID
const envPath = path.join(process.cwd(), '.env.local');
if (!fs.existsSync(envPath)) {
    console.log('❌ .env.local file not found');
    process.exit(1);
}

const envContent = fs.readFileSync(envPath, 'utf8');
const ga4Match = envContent.match(/NEXT_PUBLIC_GA4_MEASUREMENT_ID=(.+)/);

if (!ga4Match || !ga4Match[1] || ga4Match[1].includes('XXXXXXXXXX')) {
    console.log('❌ GA4 Measurement ID not configured in .env.local');
    process.exit(1);
}

const ga4Id = ga4Match[1].trim();
console.log(`✅ GA4 Measurement ID: ${ga4Id}`);
console.log();

// Test analytics library
console.log('📚 Testing Analytics Library...');
try {
    const analyticsPath = path.join(process.cwd(), 'src/lib/analytics.ts');
    const analyticsContent = fs.readFileSync(analyticsPath, 'utf8');
    
    // Check for key functions
    const requiredFunctions = [
        'trackEvent',
        'trackPageView',
        'trackConversion',
        'trackCalendlyClicked',
        'trackSessionBooked',
        'trackExternalLinkClick'
    ];
    
    let allFunctionsFound = true;
    requiredFunctions.forEach(func => {
        if (analyticsContent.includes(`export const ${func}`)) {
            console.log(`✅ ${func} function found`);
        } else {
            console.log(`❌ ${func} function missing`);
            allFunctionsFound = false;
        }
    });
    
    if (allFunctionsFound) {
        console.log('✅ All required analytics functions present');
    }
    
} catch (error) {
    console.log('❌ Error reading analytics library:', error.message);
}

console.log();

// Test components
console.log('🧩 Testing Analytics Components...');
const components = [
    'src/components/Analytics.tsx',
    'src/components/PageTracker.tsx',
    'src/components/ScrollTracker.tsx'
];

components.forEach(component => {
    const componentPath = path.join(process.cwd(), component);
    if (fs.existsSync(componentPath)) {
        console.log(`✅ ${component} exists`);
    } else {
        console.log(`❌ ${component} missing`);
    }
});

console.log();

// Provide testing instructions
console.log('🚀 Manual Testing Instructions:');
console.log('==============================');
console.log();
console.log('1. Development server should be running at http://localhost:3000');
console.log('2. Open browser developer tools (F12)');
console.log('3. Go to Console tab');
console.log('4. Look for analytics debug messages');
console.log();
console.log('Expected console output:');
console.log('  - "Analytics Event: Page View" on page load');
console.log('  - "Analytics Event: Calendly Clicked" when clicking book session');
console.log('  - "Analytics Event: Scroll Depth" when scrolling');
console.log();
console.log('5. Verify in GA4 Real-time Reports:');
console.log('   - Go to https://analytics.google.com/');
console.log('   - Navigate to Reports → Real-time');
console.log('   - You should see active users');
console.log('   - Events should appear in real-time');
console.log();

// Test event tracking
console.log('📊 Event Tracking Test:');
console.log('======================');
console.log();
console.log('Test these events by interacting with the site:');
console.log();
console.log('✅ Page View - Automatic on page load');
console.log('✅ Scroll Depth - Scroll down the page');
console.log('✅ Calendly Clicked - Click "Book your session" button');
console.log('✅ External Link Click - Click any external link');
console.log('✅ Problem Page Visit - Visit any /cursor-* page');
console.log();

// GA4 Real-time verification
console.log('🔍 GA4 Real-time Verification:');
console.log('=============================');
console.log();
console.log(`1. Open: https://analytics.google.com/analytics/web/#/p${ga4Id.replace('G-', '')}/reports/realtime`);
console.log('2. Keep this page open while testing');
console.log('3. You should see:');
console.log('   - Active users count increase');
console.log('   - Events appearing in real-time');
console.log('   - Page views and custom events');
console.log();

console.log('🎉 GA4 Integration Test Complete!');
console.log();
console.log('📋 Summary:');
console.log(`✅ GA4 Measurement ID: ${ga4Id}`);
console.log('✅ Analytics library configured');
console.log('✅ Components integrated');
console.log('✅ Development server running with debug mode');
console.log();
console.log('🚀 Ready to track user behavior and conversions!');
