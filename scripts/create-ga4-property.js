#!/usr/bin/env node

/**
 * Create Google Analytics 4 Property using Admin API
 * 
 * This script uses the Google Analytics Admin API to programmatically
 * create a GA4 property and get the measurement ID.
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

// Google Analytics Admin API endpoints
const GA_ADMIN_API_BASE = 'https://analyticsadmin.googleapis.com/v1beta';

class GoogleAnalyticsAdmin {
  constructor(credentials) {
    this.credentials = credentials;
    this.accessToken = null;
  }

  async getAccessToken() {
    if (this.accessToken) return this.accessToken;

    const jwt = await this.createJWT();
    const tokenResponse = await this.exchangeJWTForToken(jwt);
    this.accessToken = tokenResponse.access_token;
    return this.accessToken;
  }

  async createJWT() {
    const crypto = require('crypto');
    
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

    const encodedHeader = Buffer.from(JSON.stringify(header)).toString('base64url');
    const encodedPayload = Buffer.from(JSON.stringify(payload)).toString('base64url');
    
    const signatureInput = `${encodedHeader}.${encodedPayload}`;
    const signature = crypto.sign('RSA-SHA256', Buffer.from(signatureInput), this.credentials.private_key);
    const encodedSignature = signature.toString('base64url');

    return `${signatureInput}.${encodedSignature}`;
  }

  async exchangeJWTForToken(jwt) {
    return new Promise((resolve, reject) => {
      const postData = new URLSearchParams({
        grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
        assertion: jwt
      }).toString();

      const options = {
        hostname: 'oauth2.googleapis.com',
        port: 443,
        path: '/token',
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Content-Length': Buffer.byteLength(postData)
        }
      };

      const req = https.request(options, (res) => {
        let data = '';
        res.on('data', (chunk) => data += chunk);
        res.on('end', () => {
          try {
            const response = JSON.parse(data);
            if (response.access_token) {
              resolve(response);
            } else {
              reject(new Error(`Token exchange failed: ${data}`));
            }
          } catch (error) {
            reject(error);
          }
        });
      });

      req.on('error', reject);
      req.write(postData);
      req.end();
    });
  }

  async makeAPIRequest(endpoint, method = 'GET', data = null) {
    const accessToken = await this.getAccessToken();
    
    return new Promise((resolve, reject) => {
      const url = new URL(endpoint);
      const postData = data ? JSON.stringify(data) : null;

      const options = {
        hostname: url.hostname,
        port: 443,
        path: url.pathname + url.search,
        method: method,
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        }
      };

      if (postData) {
        options.headers['Content-Length'] = Buffer.byteLength(postData);
      }

      const req = https.request(options, (res) => {
        let responseData = '';
        res.on('data', (chunk) => responseData += chunk);
        res.on('end', () => {
          try {
            const response = JSON.parse(responseData);
            if (res.statusCode >= 200 && res.statusCode < 300) {
              resolve(response);
            } else {
              reject(new Error(`API request failed: ${res.statusCode} ${responseData}`));
            }
          } catch (error) {
            reject(new Error(`Failed to parse response: ${responseData}`));
          }
        });
      });

      req.on('error', reject);
      
      if (postData) {
        req.write(postData);
      }
      
      req.end();
    });
  }

  async createAccount(accountName) {
    const accountData = {
      displayName: accountName,
      countryCode: 'US',
      currencyCode: 'USD'
    };

    try {
      const response = await this.makeAPIRequest(
        `${GA_ADMIN_API_BASE}/accounts`,
        'POST',
        accountData
      );
      return response;
    } catch (error) {
      console.log('Note: Account creation may require manual setup in GA4 interface');
      throw error;
    }
  }

  async createProperty(accountId, propertyName, websiteUrl) {
    const propertyData = {
      displayName: propertyName,
      currencyCode: 'USD',
      timeZone: 'America/New_York',
      industryCategory: 'TECHNOLOGY'
    };

    const response = await this.makeAPIRequest(
      `${GA_ADMIN_API_BASE}/properties?parent=accounts/${accountId}`,
      'POST',
      propertyData
    );

    return response;
  }

  async createDataStream(propertyId, websiteUrl) {
    const streamData = {
      type: 'WEB_DATA_STREAM',
      displayName: 'AppSpark Website',
      webStreamData: {
        measurementId: '', // Will be generated
        firebaseAppId: '',
        defaultUri: websiteUrl
      }
    };

    const response = await this.makeAPIRequest(
      `${GA_ADMIN_API_BASE}/properties/${propertyId}/dataStreams`,
      'POST',
      streamData
    );

    return response;
  }

  async listAccounts() {
    try {
      const response = await this.makeAPIRequest(`${GA_ADMIN_API_BASE}/accounts`);
      return response.accounts || [];
    } catch (error) {
      console.log('Could not list accounts, you may need to create one manually');
      return [];
    }
  }
}

async function createGA4Setup() {
  console.log('🚀 Creating Google Analytics 4 Property via API\n');

  // Check for service account key
  const keyPath = path.join(process.cwd(), 'ga4-key.json');
  if (!fs.existsSync(keyPath)) {
    console.log('❌ Service account key file (ga4-key.json) not found');
    console.log('💡 Make sure you ran the gcloud commands to create the service account');
    return;
  }

  try {
    const credentials = JSON.parse(fs.readFileSync(keyPath, 'utf8'));
    const ga = new GoogleAnalyticsAdmin(credentials);

    console.log('🔍 Checking existing accounts...');
    const accounts = await ga.listAccounts();
    
    let accountId;
    if (accounts.length > 0) {
      console.log(`✅ Found existing account: ${accounts[0].displayName}`);
      accountId = accounts[0].name.split('/')[1];
    } else {
      console.log('📊 Creating new Analytics account...');
      try {
        const account = await ga.createAccount('AppSpark Coaching');
        accountId = account.name.split('/')[1];
        console.log(`✅ Created account: ${account.displayName}`);
      } catch (error) {
        console.log('⚠️  Account creation failed. You may need to create an account manually at https://analytics.google.com/');
        console.log('💡 Then run this script again.');
        return;
      }
    }

    console.log('🏠 Creating GA4 property...');
    const property = await ga.createProperty(accountId, 'AppSpark Coaching Website', 'https://appspark.ai');
    const propertyId = property.name.split('/')[1];
    console.log(`✅ Created property: ${property.displayName} (ID: ${propertyId})`);

    console.log('📱 Creating web data stream...');
    const dataStream = await ga.createDataStream(propertyId, 'https://appspark.ai');
    const measurementId = dataStream.webStreamData.measurementId;
    console.log(`✅ Created data stream with Measurement ID: ${measurementId}`);

    // Update .env.local file
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

    console.log('\n🎉 Google Analytics 4 setup complete!');
    console.log(`✅ Measurement ID: ${measurementId}`);
    console.log('✅ Configuration saved to .env.local');
    console.log('\n📋 Next steps:');
    console.log('1. Restart your development server: npm run dev');
    console.log('2. Test analytics events in browser console');
    console.log('3. Verify data in GA4 Real-time reports');
    console.log('4. Set up conversion goals in GA4 interface');

    // Clean up service account key for security
    console.log('\n🔒 Cleaning up service account key for security...');
    fs.unlinkSync(keyPath);
    console.log('✅ Service account key removed');

  } catch (error) {
    console.error('❌ Error creating GA4 property:', error.message);
    console.log('\n💡 Alternative: Use the manual setup guide');
    console.log('   npm run ga4-setup-guide');
  }
}

// Run the setup
createGA4Setup().catch(console.error);
