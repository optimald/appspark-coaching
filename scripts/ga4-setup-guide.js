#!/usr/bin/env node

/**
 * Google Analytics 4 Setup Guide
 * 
 * This script provides step-by-step instructions for setting up GA4
 * and generates the necessary configuration for your project.
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

async function setupGA4() {
  console.log('🚀 Google Analytics 4 Setup Guide\n');
  
  console.log('📊 Step 1: Create Google Analytics 4 Property');
  console.log('1. Go to https://analytics.google.com/');
  console.log('2. Click "Admin" (gear icon) in the bottom left');
  console.log('3. In the "Account" column, select or create an account');
  console.log('4. In the "Property" column, click "Create Property"');
  console.log('5. Choose "GA4" (Google Analytics 4)');
  console.log('6. Fill in property details:');
  console.log('   - Property name: "AppSpark Coaching"');
  console.log('   - Reporting time zone: Your timezone');
  console.log('   - Currency: USD');
  console.log('7. Choose business information (select appropriate options)');
  console.log('8. Accept terms and create property\n');

  const hasCreated = await question('Have you created the GA4 property? (y/N): ');
  if (hasCreated.toLowerCase() !== 'y' && hasCreated.toLowerCase() !== 'yes') {
    console.log('\n❌ Please create the GA4 property first, then run this script again.');
    rl.close();
    return;
  }

  console.log('\n📱 Step 2: Create Web Data Stream');
  console.log('1. In your new GA4 property, go to "Data Streams"');
  console.log('2. Click "Add stream" → "Web"');
  console.log('3. Enter your website URL (e.g., https://appspark.ai)');
  console.log('4. Enter stream name: "AppSpark Website"');
  console.log('5. Enable "Enhanced measurement" (recommended)');
  console.log('6. Click "Create stream"\n');

  const hasStream = await question('Have you created the web data stream? (y/N): ');
  if (hasStream.toLowerCase() !== 'y' && hasStream.toLowerCase() !== 'yes') {
    console.log('\n❌ Please create the web data stream first.');
    rl.close();
    return;
  }

  console.log('\n🔑 Step 3: Get Measurement ID');
  console.log('1. In your web data stream, you should see a "Measurement ID"');
  console.log('2. It looks like: G-XXXXXXXXXX');
  console.log('3. Copy this ID\n');

  const measurementId = await question('Enter your Measurement ID (G-XXXXXXXXXX): ');
  
  if (!measurementId || !measurementId.startsWith('G-')) {
    console.log('\n❌ Invalid Measurement ID. It should start with "G-"');
    rl.close();
    return;
  }

  console.log('\n⚙️ Step 4: Configure Enhanced Ecommerce');
  console.log('1. In GA4, go to "Configure" → "Events"');
  console.log('2. Click "Create event"');
  console.log('3. Create these custom events:');
  console.log('   - session_booked (for tracking coaching session purchases)');
  console.log('   - calendly_clicked (for tracking CTA clicks)');
  console.log('   - email_contact (for tracking email interactions)');
  console.log('4. Go to "Configure" → "Conversions"');
  console.log('5. Mark "purchase" and "session_booked" as conversion events\n');

  console.log('💰 Step 5: Set up Enhanced Ecommerce');
  console.log('1. Go to "Configure" → "Enhanced measurement"');
  console.log('2. Enable "Purchase" tracking');
  console.log('3. This will automatically track revenue from your trackConversion calls\n');

  const hasEcommerce = await question('Have you configured ecommerce tracking? (y/N): ');

  // Update environment file
  const envPath = path.join(process.cwd(), '.env.local');
  let envContent = '';
  
  if (fs.existsSync(envPath)) {
    envContent = fs.readFileSync(envPath, 'utf8');
  } else {
    const envExamplePath = path.join(process.cwd(), '.env.example');
    if (fs.existsSync(envExamplePath)) {
      envContent = fs.readFileSync(envExamplePath, 'utf8');
    }
  }

  // Update GA4 measurement ID
  const ga4Regex = /^NEXT_PUBLIC_GA4_MEASUREMENT_ID=.*$/m;
  const ga4Line = `NEXT_PUBLIC_GA4_MEASUREMENT_ID=${measurementId}`;
  
  if (ga4Regex.test(envContent)) {
    envContent = envContent.replace(ga4Regex, ga4Line);
  } else {
    envContent += (envContent.endsWith('\n') ? '' : '\n') + ga4Line + '\n';
  }

  fs.writeFileSync(envPath, envContent);

  console.log('\n✅ Configuration saved to .env.local');
  console.log(`✅ GA4 Measurement ID: ${measurementId}`);

  console.log('\n🧪 Step 6: Test Your Setup');
  console.log('1. Start your development server: npm run dev');
  console.log('2. Open your website in a browser');
  console.log('3. Open browser developer tools (F12)');
  console.log('4. Go to Console tab');
  console.log('5. You should see analytics events being logged');
  console.log('6. In GA4, go to "Reports" → "Realtime" to see live data\n');

  console.log('📈 Step 7: Set up Goals and Conversions');
  console.log('Goals to create in GA4:');
  console.log('1. Session Booked (conversion, $75 value)');
  console.log('   - Event: session_booked');
  console.log('   - Value: 75');
  console.log('   - Currency: USD');
  console.log('2. Calendly Clicked (engagement)');
  console.log('   - Event: calendly_clicked');
  console.log('3. Email Contact (engagement)');
  console.log('   - Event: email_contact');
  console.log('4. Page Views (automatic)');
  console.log('5. Scroll Depth (automatic with enhanced measurement)\n');

  console.log('🔗 Step 8: Link Google Ads (Optional)');
  console.log('1. In GA4, go to "Admin" → "Google Ads Linking"');
  console.log('2. Link your Google Ads account for better attribution');
  console.log('3. Enable auto-tagging for better tracking\n');

  console.log('📊 Step 9: Create Custom Reports');
  console.log('Recommended reports to create:');
  console.log('1. Conversion Funnel Report');
  console.log('   - Page View → Calendly Click → Session Booked');
  console.log('2. Traffic Source Performance');
  console.log('   - Sessions, conversions, and revenue by source/medium');
  console.log('3. Content Performance');
  console.log('   - Page views and engagement by page');
  console.log('4. User Journey Analysis');
  console.log('   - Path analysis from landing to conversion\n');

  console.log('🎯 Next Steps:');
  console.log('1. Test your analytics implementation');
  console.log('2. Set up Google Ads campaigns with proper UTM tracking');
  console.log('3. Create custom audiences for remarketing');
  console.log('4. Set up automated reports and alerts');
  console.log('5. Monitor and optimize based on data\n');

  console.log('📚 Resources:');
  console.log('- GA4 Documentation: https://developers.google.com/analytics/devguides/collection/ga4');
  console.log('- Enhanced Ecommerce: https://developers.google.com/analytics/devguides/collection/ga4/ecommerce');
  console.log('- Custom Events: https://developers.google.com/analytics/devguides/collection/ga4/events');
  console.log('- Measurement Protocol: https://developers.google.com/analytics/devguides/collection/protocol/ga4\n');

  console.log('🎉 Google Analytics 4 setup complete!');
  console.log('Your measurement ID has been saved to .env.local');
  console.log('Restart your development server to see analytics in action.');

  rl.close();
}

// Run setup
setupGA4().catch(console.error);
