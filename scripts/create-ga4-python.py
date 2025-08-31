#!/usr/bin/env python3

"""
Create Google Analytics 4 Property using Python and Google Analytics Admin API
"""

import os
import json
import sys
from google.oauth2 import service_account
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError

def create_ga4_property():
    """Create GA4 property using the Admin API"""
    
    print("🚀 Creating Google Analytics 4 Property via Python API")
    print()
    
    # Check for service account key
    key_path = 'ga4-key.json'
    if not os.path.exists(key_path):
        print("❌ Service account key file (ga4-key.json) not found")
        print("💡 Make sure you have the service account key file")
        return False
    
    try:
        # Load service account credentials
        credentials = service_account.Credentials.from_service_account_file(
            key_path,
            scopes=['https://www.googleapis.com/auth/analytics.edit']
        )
        
        # Build the Analytics Admin API service
        service = build('analyticsadmin', 'v1beta', credentials=credentials)
        
        print("🔍 Checking existing accounts...")
        
        # List existing accounts
        try:
            accounts_response = service.accounts().list().execute()
            accounts = accounts_response.get('accounts', [])
            
            if accounts:
                account_id = accounts[0]['name'].split('/')[-1]
                print(f"✅ Found existing account: {accounts[0]['displayName']} (ID: {account_id})")
            else:
                print("📊 Creating new Analytics account...")
                # Create new account
                account_body = {
                    'displayName': 'AppSpark Coaching',
                    'countryCode': 'US',
                    'currencyCode': 'USD'
                }
                
                # Note: Account creation via API requires special permissions
                # For now, we'll skip account creation and assume manual creation
                print("⚠️ Account creation requires manual setup. Please create an account at https://analytics.google.com/")
                return False
                account_id = account_response['name'].split('/')[-1]
                print(f"✅ Created account: {account_response['displayName']} (ID: {account_id})")
                
        except HttpError as e:
            if e.resp.status == 403:
                print("⚠️ Account access denied. You may need to create an account manually first.")
                print("💡 Go to https://analytics.google.com/ and create an account, then run this script again.")
                return False
            else:
                raise e
        
        print("🏠 Creating GA4 property...")
        
        # Create property
        property_body = {
            'displayName': 'AppSpark Coaching Website',
            'currencyCode': 'USD',
            'timeZone': 'America/New_York',
            'industryCategory': 'TECHNOLOGY'
        }
        
        property_response = service.properties().create(
            parent=f'accounts/{account_id}',
            body=property_body
        ).execute()
        
        property_id = property_response['name'].split('/')[-1]
        print(f"✅ Created property: {property_response['displayName']} (ID: {property_id})")
        
        print("📱 Creating web data stream...")
        
        # Create web data stream
        stream_body = {
            'type': 'WEB_DATA_STREAM',
            'displayName': 'AppSpark Website',
            'webStreamData': {
                'defaultUri': 'https://appspark.ai'
            }
        }
        
        stream_response = service.properties().dataStreams().create(
            parent=f'properties/{property_id}',
            body=stream_body
        ).execute()
        
        measurement_id = stream_response['webStreamData']['measurementId']
        print(f"✅ Created data stream with Measurement ID: {measurement_id}")
        
        # Update .env.local file
        env_path = '.env.local'
        env_content = ''
        
        if os.path.exists(env_path):
            with open(env_path, 'r') as f:
                env_content = f.read()
        else:
            # Read from .env.example if .env.local doesn't exist
            if os.path.exists('.env.example'):
                with open('.env.example', 'r') as f:
                    env_content = f.read()
        
        # Update GA4 measurement ID
        import re
        ga4_pattern = r'^NEXT_PUBLIC_GA4_MEASUREMENT_ID=.*$'
        ga4_line = f'NEXT_PUBLIC_GA4_MEASUREMENT_ID={measurement_id}'
        
        if re.search(ga4_pattern, env_content, re.MULTILINE):
            env_content = re.sub(ga4_pattern, ga4_line, env_content, flags=re.MULTILINE)
        else:
            if not env_content.endswith('\n') and env_content:
                env_content += '\n'
            env_content += ga4_line + '\n'
        
        with open(env_path, 'w') as f:
            f.write(env_content)
        
        print()
        print("🎉 Google Analytics 4 setup complete!")
        print(f"✅ Measurement ID: {measurement_id}")
        print("✅ Configuration saved to .env.local")
        print()
        print("📋 Next steps:")
        print("1. npm run dev")
        print("2. Test analytics events in browser console")
        print("3. Verify data in GA4 Real-time reports")
        print("4. Set up conversion goals in GA4 interface")
        
        # Clean up service account key for security
        print()
        print("🔒 Cleaning up service account key for security...")
        os.remove(key_path)
        print("✅ Service account key removed")
        
        return True
        
    except HttpError as e:
        print(f"❌ API Error: {e}")
        if e.resp.status == 403:
            print("💡 You may need to:")
            print("   1. Create an Analytics account manually at https://analytics.google.com/")
            print("   2. Grant proper permissions to the service account")
            print("   3. Enable the Analytics Admin API")
        return False
    except Exception as e:
        print(f"❌ Error: {e}")
        return False

if __name__ == '__main__':
    success = create_ga4_property()
    sys.exit(0 if success else 1)
