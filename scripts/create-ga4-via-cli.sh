#!/bin/bash

# Create Google Analytics 4 Property via CLI
# This script creates a GA4 property using Firebase and Google Cloud CLI

set -e

echo "🚀 Creating Google Analytics 4 Property via CLI"
echo ""

# Check if required tools are installed
command -v gcloud >/dev/null 2>&1 || { echo "❌ gcloud CLI is required but not installed. Aborting." >&2; exit 1; }
command -v firebase >/dev/null 2>&1 || { echo "❌ Firebase CLI is required but not installed. Run: npm install -g firebase-tools" >&2; exit 1; }

# Set up environment
export PATH=$PATH:$HOME/google-cloud-sdk/bin
PROJECT_ID="appspark-coaching-1756590460"

echo "📋 Project: $PROJECT_ID"
echo ""

# Authenticate with Firebase
echo "🔐 Authenticating with Firebase..."
firebase login --no-localhost

# Create Firebase project (this will also create GA4 property)
echo "🔥 Creating Firebase project..."
firebase projects:create $PROJECT_ID --display-name "AppSpark Coaching"

# Link to existing Google Cloud project
echo "🔗 Linking to Google Cloud project..."
firebase use $PROJECT_ID

# Initialize Firebase in current directory
echo "⚙️ Initializing Firebase..."
firebase init --project $PROJECT_ID

# Get the GA4 measurement ID
echo "📊 Getting GA4 Measurement ID..."
GA4_ID=$(firebase apps:list --project $PROJECT_ID | grep -o 'G-[A-Z0-9]*' | head -1)

if [ -z "$GA4_ID" ]; then
    echo "⚠️ Could not automatically get GA4 ID. Creating web app..."
    firebase apps:create web "AppSpark Website" --project $PROJECT_ID
    GA4_ID=$(firebase apps:list --project $PROJECT_ID | grep -o 'G-[A-Z0-9]*' | head -1)
fi

if [ -n "$GA4_ID" ]; then
    echo "✅ GA4 Measurement ID: $GA4_ID"
    
    # Update .env.local file
    if [ -f ".env.local" ]; then
        sed -i.bak "s/NEXT_PUBLIC_GA4_MEASUREMENT_ID=.*/NEXT_PUBLIC_GA4_MEASUREMENT_ID=$GA4_ID/" .env.local
        echo "✅ Updated .env.local with GA4 ID"
    else
        echo "NEXT_PUBLIC_GA4_MEASUREMENT_ID=$GA4_ID" >> .env.local
        echo "✅ Created .env.local with GA4 ID"
    fi
    
    echo ""
    echo "🎉 Google Analytics 4 setup complete!"
    echo "📊 Measurement ID: $GA4_ID"
    echo ""
    echo "🚀 Next steps:"
    echo "1. npm run dev"
    echo "2. Test analytics events in browser console"
    echo "3. Check GA4 Real-time reports"
    echo "4. Set up conversion goals in GA4"
else
    echo "❌ Failed to get GA4 Measurement ID"
    echo "💡 You may need to create it manually at https://analytics.google.com/"
fi
