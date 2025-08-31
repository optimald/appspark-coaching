#!/usr/bin/env node

/**
 * Create Google Analytics 4 Account via API
 * 
 * This script uses the Google Analytics Admin API to programmatically
 * create a GA4 property and get the measurement ID.
 * 
 * Prerequisites:
 * 1. Google Cloud Project with Analytics Admin API enabled
 * 2. Service account with Analytics Admin permissions
 * 3. Service account key file
 */

const fs = require('fs');
const path = require('path');
const https = require('https');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

// Simple OAuth2 implementation for Google APIs
class GoogleAuth {
  constructor(credentials) {
    this.credentials = credentials;
    this.accessToken = null;
  }

  async getAccessToken() {
    if (this.accessToken) return this.accessToken;

    const jwt = this.createJWT();
    const tokenResponse = await this.exchangeJWTForToken(jwt);
    this.accessToken = tokenResponse.access_token;
    return this.accessToken;
  }

  createJWT() {
    const header = {
      alg: 'RS256',
      typ: 'JWT'
    };

    const now = Math.floor(Date.now() / 1000);
    const payload = {
      iss: this.credentials.client_email,
      scope: 'https://www.googleapis.com/auth/analytics.edit',
      aud: 'https://oauth2.googleapis.com/token',
      exp: now + 3600,
      iat: now
    };

    // Note: This is a simplified JWT implementation
    // In production, use a proper JWT library
    const encodedHeader = Buffer.from(JSON.stringify(header)).toString('base64url');
    const encodedPayload = Buffer.from(JSON.stringify(payload)).toString('base64url');
    
    return `${encodedHeader}.${encodedPayload}`;
  }

  async exchangeJWTForToken(jwt) {
    // Simplified token exchange
    // In production, implement proper JWT signing and token exchange
    throw new Error('JWT signing not implemented in this demo. Use the manual setup guide instead.');
  }
}

async function createGA4Account() {
  console.log('🚀 Google Analytics 4 Account Creator\n');
  
  console.log('⚠️  Note: This script requires Google Cloud setup and service account credentials.');
  console.log('For a simpler setup, use: npm run ga4-setup-guide\n');

  const useManualSetup = await question('Would you prefer the manual setup guide instead? (Y/n): ');
  
  if (useManualSetup.toLowerCase() !== 'n' && useManualSetup.toLowerCase() !== 'no') {
    console.log('\n🔄 Redirecting to manual setup guide...\n');
    rl.close();
    
    // Run the manual setup guide
    const { spawn } = require('child_process');
    const setupProcess = spawn('node', ['scripts/ga4-setup-guide.js'], {
      stdio: 'inherit',
      cwd: process.cwd()
    });
    
    return;
  }

  console.log('\n🔧 API Setup Requirements:');
  console.log('1. Google Cloud Project with Analytics Admin API enabled');
  console.log('2. Service account with Analytics Admin permissions');
  console.log('3. Downloaded service account key JSON file\n');

  const keyPath = await question('Enter path to your service account key file: ');
  
  if (!fs.existsSync(keyPath)) {
    console.log('❌ Service account key file not found.');
    console.log('💡 Create one at: https://console.cloud.google.com/iam-admin/serviceaccounts');
    rl.close();
    return;
  }

  try {
    const credentials = JSON.parse(fs.readFileSync(keyPath, 'utf8'));
    const auth = new GoogleAuth(credentials);

    console.log('\n📊 Creating GA4 Property...');
    
    // This would normally create the GA4 property via API
    // For demo purposes, we'll show the manual process
    console.log('❌ API creation not fully implemented in this demo.');
    console.log('💡 Use the manual setup guide: npm run ga4-setup-guide');
    
  } catch (error) {
    console.error('❌ Error:', error.message);
    console.log('💡 Use the manual setup guide: npm run ga4-setup-guide');
  }

  rl.close();
}

// Alternative: Generate gcloud commands for CLI setup
async function generateGCloudCommands() {
  console.log('\n🔧 Google Cloud CLI Commands for GA4 Setup:\n');
  
  console.log('# 1. Install and authenticate gcloud CLI');
  console.log('curl https://sdk.cloud.google.com | bash');
  console.log('gcloud auth login');
  console.log('gcloud config set project YOUR_PROJECT_ID\n');
  
  console.log('# 2. Enable Analytics Admin API');
  console.log('gcloud services enable analyticsadmin.googleapis.com\n');
  
  console.log('# 3. Create service account');
  console.log('gcloud iam service-accounts create ga4-admin \\');
  console.log('  --display-name="GA4 Admin Service Account"\n');
  
  console.log('# 4. Grant Analytics Admin permissions');
  console.log('gcloud projects add-iam-policy-binding YOUR_PROJECT_ID \\');
  console.log('  --member="serviceAccount:ga4-admin@YOUR_PROJECT_ID.iam.gserviceaccount.com" \\');
  console.log('  --role="roles/analyticsadmin.editor"\n');
  
  console.log('# 5. Create and download service account key');
  console.log('gcloud iam service-accounts keys create ga4-key.json \\');
  console.log('  --iam-account=ga4-admin@YOUR_PROJECT_ID.iam.gserviceaccount.com\n');
  
  console.log('# 6. Use the Google Analytics Admin API');
  console.log('# See: https://developers.google.com/analytics/devguides/config/admin/v1\n');
  
  console.log('💡 For easier setup, use: npm run ga4-setup-guide');
}

// Check command line arguments
const args = process.argv.slice(2);
if (args.includes('--commands')) {
  generateGCloudCommands();
} else {
  createGA4Account().catch(console.error);
}
