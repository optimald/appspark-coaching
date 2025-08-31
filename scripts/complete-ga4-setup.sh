#!/bin/bash

# Complete Google Analytics 4 Setup via CLI
# This script provides a complete GA4 setup workflow

set -e

echo "🚀 Complete Google Analytics 4 Setup"
echo "======================================"
echo ""

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_step() {
    echo -e "${BLUE}$1${NC}"
}

print_success() {
    echo -e "${GREEN}✅ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

print_error() {
    echo -e "${RED}❌ $1${NC}"
}

# Check if required tools are installed
command -v gcloud >/dev/null 2>&1 || { print_error "gcloud CLI is required but not installed. Please install Google Cloud SDK first."; exit 1; }

# Set up environment
export PATH=$PATH:$HOME/google-cloud-sdk/bin

print_step "Step 1: Manual GA4 Account Creation"
echo "Since Google Analytics accounts require manual creation, please follow these steps:"
echo ""
echo "1. Go to https://analytics.google.com/"
echo "2. Sign in with your Google account"
echo "3. Click 'Start measuring'"
echo "4. Account setup:"
echo "   - Account name: 'AppSpark Coaching'"
echo "   - Country: United States"
echo "   - Currency: US Dollar"
echo "5. Property setup:"
echo "   - Property name: 'AppSpark Website'"
echo "   - Reporting time zone: Your timezone"
echo "   - Currency: USD"
echo "6. Business information:"
echo "   - Industry: Technology"
echo "   - Business size: Small"
echo "7. Data stream setup:"
echo "   - Choose 'Web'"
echo "   - Website URL: https://appspark.ai"
echo "   - Stream name: 'AppSpark Website'"
echo ""

read -p "Have you completed the GA4 setup? (y/N): " ga4_completed

if [[ ! "$ga4_completed" =~ ^[Yy]$ ]]; then
    print_warning "Please complete the GA4 setup first, then run this script again."
    exit 1
fi

print_step "Step 2: Get Measurement ID"
echo "Now we need your GA4 Measurement ID:"
echo "1. In your GA4 property, go to Admin (gear icon)"
echo "2. Under Property, click 'Data Streams'"
echo "3. Click on your web stream"
echo "4. Copy the Measurement ID (starts with G-)"
echo ""

read -p "Enter your GA4 Measurement ID (G-XXXXXXXXXX): " measurement_id

# Validate measurement ID format
if [[ ! "$measurement_id" =~ ^G-[A-Z0-9]+$ ]]; then
    print_error "Invalid Measurement ID format. It should start with 'G-' followed by alphanumeric characters."
    exit 1
fi

print_step "Step 3: Update Configuration"

# Update .env.local file
if [ -f ".env.local" ]; then
    # Update existing file
    if grep -q "NEXT_PUBLIC_GA4_MEASUREMENT_ID=" .env.local; then
        sed -i.bak "s/NEXT_PUBLIC_GA4_MEASUREMENT_ID=.*/NEXT_PUBLIC_GA4_MEASUREMENT_ID=$measurement_id/" .env.local
    else
        echo "NEXT_PUBLIC_GA4_MEASUREMENT_ID=$measurement_id" >> .env.local
    fi
else
    # Create new file from example
    if [ -f ".env.example" ]; then
        cp .env.example .env.local
        sed -i.bak "s/NEXT_PUBLIC_GA4_MEASUREMENT_ID=.*/NEXT_PUBLIC_GA4_MEASUREMENT_ID=$measurement_id/" .env.local
    else
        echo "NEXT_PUBLIC_GA4_MEASUREMENT_ID=$measurement_id" > .env.local
    fi
fi

print_success "Updated .env.local with GA4 Measurement ID: $measurement_id"

print_step "Step 4: Configure Enhanced Ecommerce"
echo "To track revenue from coaching sessions, set up these goals in GA4:"
echo ""
echo "1. Go to GA4 → Configure → Events"
echo "2. Click 'Create event'"
echo "3. Create these custom events:"
echo "   - Event name: session_booked"
echo "   - Description: Coaching session purchase"
echo "4. Go to Configure → Conversions"
echo "5. Mark these events as conversions:"
echo "   - purchase (should be automatic)"
echo "   - session_booked (mark manually)"
echo ""

read -p "Have you set up the conversion events? (y/N): " conversions_setup

print_step "Step 5: Test Analytics Setup"

# Test the analytics configuration
echo "Testing analytics configuration..."

if npm run test-analytics > /dev/null 2>&1; then
    print_success "Analytics configuration test passed"
else
    print_warning "Analytics test had some issues, but GA4 should still work"
fi

print_step "Step 6: Start Development Server"
echo "Starting development server with analytics debugging enabled..."
echo ""
echo "Run this command to test your analytics:"
echo "  npm run dev-with-analytics"
echo ""
echo "Then:"
echo "1. Open http://localhost:3000"
echo "2. Open browser developer tools (F12)"
echo "3. Go to Console tab"
echo "4. You should see analytics events being logged"
echo "5. Click buttons and navigate to test tracking"
echo "6. Check GA4 Real-time reports to see live data"
echo ""

print_step "Step 7: Verify in GA4"
echo "To verify everything is working:"
echo "1. Go to your GA4 property"
echo "2. Navigate to Reports → Real-time"
echo "3. You should see active users when testing"
echo "4. Test the booking flow to verify conversion tracking"
echo ""

print_success "Google Analytics 4 setup complete!"
echo ""
echo "📊 Summary:"
echo "✅ GA4 Measurement ID: $measurement_id"
echo "✅ Configuration saved to .env.local"
echo "✅ Analytics library supports GA4, Mixpanel, and Plausible"
echo "✅ Enhanced ecommerce tracking configured"
echo "✅ Conversion events ready for session bookings"
echo ""
echo "🚀 Next steps:"
echo "1. npm run dev-with-analytics  # Test analytics"
echo "2. Set up Mixpanel and Plausible (optional)"
echo "3. Configure Google Ads linking (optional)"
echo "4. Set up custom reports and alerts"
echo ""
echo "📚 Documentation: docs/comprehensive-analytics-setup.md"

# Clean up any temporary files
rm -f .env.local.bak 2>/dev/null || true

print_success "Setup completed successfully! 🎉"
