#!/usr/bin/env node

/**
 * Get GA4 Measurement ID Helper
 * 
 * This script helps you get your GA4 Measurement ID and configure it
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

async function getGA4MeasurementId() {
  console.log('🎯 Get Your GA4 Measurement ID\n');
  
  console.log('📋 Quick Setup Steps:');
  console.log('1. Go to https://analytics.google.com/');
  console.log('2. Create account → "AppSpark Coaching"');
  console.log('3. Create property → "AppSpark Website"');
  console.log('4. Add data stream → Web → https://appspark.ai');
  console.log('5. Copy the Measurement ID (G-XXXXXXXXXX)\n');

  const measurementId = await question('Enter your GA4 Measurement ID: ');
  
  if (!measurementId || !measurementId.startsWith('G-')) {
    console.log('❌ Invalid Measurement ID. It should start with "G-"');
    console.log('💡 Example: G-ABC123DEF4');
    rl.close();
    return;
  }

  // Update .env.local
  const envPath = path.join(process.cwd(), '.env.local');
  let envContent = fs.readFileSync(envPath, 'utf8');
  
  envContent = envContent.replace(
    /NEXT_PUBLIC_GA4_MEASUREMENT_ID=.*/,
    `NEXT_PUBLIC_GA4_MEASUREMENT_ID=${measurementId}`
  );
  
  fs.writeFileSync(envPath, envContent);
  
  console.log(`\n✅ GA4 Measurement ID saved: ${measurementId}`);
  console.log('✅ Updated .env.local');
  
  console.log('\n🚀 Test Your Setup:');
  console.log('1. npm run dev');
  console.log('2. Open http://localhost:3000');
  console.log('3. Check browser console for analytics events');
  console.log('4. Check GA4 Real-time reports');
  
  console.log('\n🎯 Set Up Goals in GA4:');
  console.log('1. Go to GA4 → Configure → Events');
  console.log('2. Mark these as conversions:');
  console.log('   - purchase (automatic)');
  console.log('   - session_booked (custom)');
  console.log('3. Set up Enhanced Ecommerce for revenue tracking');
  
  rl.close();
}

getGA4MeasurementId().catch(console.error);
