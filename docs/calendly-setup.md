# Calendly Configuration Guide

Complete setup guide for AppSpark 60-minute Cursor coaching sessions.

## Event Type Setup

### Basic Information
- **Event Name:** "AppSpark — 60-Minute Cursor Session ($150)"
- **Duration:** 60 minutes
- **Location:** Zoom (use Calendly's Zoom integration)
- **Description:** 
```
Get unstuck with Cursor in 60 focused minutes. We'll work together via screenshare to solve your specific challenge - whether it's scaffolding a project, removing a blocker, fixing deployment issues, or optimizing your AI development workflow.

What you'll get:
• Hands-on guidance via screenshare
• Practical shortcuts and techniques
• After-Action Notes with next steps
• Optional recording (expires in 7 days)

This is coaching, not done-for-you development. Come prepared with your specific challenge and we'll solve it together.
```

### Availability Settings
- **Weekly Hours:** Tue–Sat, 11:00–18:00 MT (adjust as needed)
- **Buffer Time:** 15 minutes before and after each slot
- **Minimum Scheduling Notice:** 6 hours
- **Maximum Events Per Day:** 4
- **Future Booking Limit:** 21 days
- **Time Zone:** Mountain Time (or your preferred zone)

### Payment Configuration
- **Enable:** Collect payment with Stripe
- **Amount:** $150.00 USD
- **Currency:** USD
- **Payment Required:** Before booking confirmation
- **Refund Policy:** No refunds (clearly stated)

## Intake Questions

Configure these as **required questions** in Calendly:

### 1. Primary Challenge
**Question:** "What's your primary stuck point in Cursor?"
- **Type:** Long text
- **Character limit:** 250
- **Required:** Yes
- **Help text:** "Be specific about what's blocking you - the more detail, the better we can help."

### 2. Session Objective
**Question:** "What do you want out of this hour?"
- **Type:** Multiple choice (single select)
- **Required:** Yes
- **Options:**
  - Create project scaffold
  - Remove a specific blocker/bug
  - Unblock deploy/build pipeline
  - Optimize AI dev loop (prompts/tools/workflow)
  - Other (please specify below)
- **Help text:** "Pick one. We'll optimize for that specific result in this session."

### 3. Repository Link
**Question:** "Repo or code link (GitHub/GitLab)"
- **Type:** URL
- **Required:** No
- **Help text:** "Optional - helps us prepare if you can share it"

### 4. Tech Stack
**Question:** "Stack & environment"
- **Type:** Long text
- **Character limit:** 150
- **Required:** Yes
- **Placeholder:** "e.g., Next.js + Supabase on Vercel; Mac/Win"

### 5. Recording Consent
**Question:** "Recording okay?"
- **Type:** Multiple choice (single select)
- **Required:** Yes
- **Options:**
  - Yes, please record
  - No recording needed

### 6. Error Messages
**Question:** "Share any error messages or screenshots link"
- **Type:** URL
- **Required:** No
- **Help text:** "Optional - link to screenshots, error logs, or relevant documentation"

### 7. Time Sensitivity
**Question:** "Time sensitivity"
- **Type:** Multiple choice (single select)
- **Required:** Yes
- **Options:**
  - Demo today
  - This week
  - Flexible

### 8. Terms Agreement
**Question:** "Agreement"
- **Type:** Checkbox
- **Required:** Yes
- **Text:** "I understand this is a coaching session, not a done-for-you build. No refunds; reschedules ≥12h."

### 9. Credentials Consent
**Question:** "Consent"
- **Type:** Checkbox
- **Required:** Yes
- **Text:** "I won't share secrets; I'll enter credentials on my machine only."

## Confirmation Page Setup

### Confirmation Message
```
🎉 Your AppSpark session is booked!

You'll receive a confirmation email with:
• Zoom link for your session
• Preparation checklist
• Reschedule link (free with ≥12h notice)

PREP CHECKLIST:
✓ Open your repo and ensure you have push permissions
✓ Have environment variables/keys handy (you'll paste them locally)
✓ Be ready to screen-share
✓ Define 'success for this hour' in one line

Questions? Reply to your confirmation email.

POLICY REMINDER:
• No refunds offered
• One free reschedule with ≥12h notice
• Late >10 min counts toward time; >20 min forfeits session
• We don't store credentials - you'll enter them locally
```

### Redirect Settings
- **Stay on confirmation page** (don't redirect)
- **Show social sharing:** Disabled
- **Add to calendar:** Enabled (Google, Outlook, etc.)

## Email Notifications

### Confirmation Email (Immediate)
**Subject:** "Your AppSpark Session is Confirmed - Prep Checklist Inside"

**Body:**
```
Hi [Name],

Your 60-minute Cursor coaching session is confirmed for [Date/Time].

🔗 JOIN LINK: [Zoom Link]

📋 PREP CHECKLIST (Important):
• Open your repo and ensure you have push permissions
• Have environment variables/keys handy (you'll paste them locally; we won't store them)
• Be ready to screen-share your development environment
• Define 'success for this hour' in one line (we'll confirm at start)

📝 YOUR SESSION DETAILS:
• Objective: [Answer from intake form]
• Challenge: [Answer from intake form]
• Stack: [Answer from intake form]

⏰ RESCHEDULE/CANCEL:
Free reschedule with ≥12h notice: [Reschedule Link]
<12h notice requires new booking (no refunds)

🎯 WHAT TO EXPECT:
We'll spend 60 focused minutes solving your specific Cursor challenge. This is hands-on coaching - we'll work together via screenshare to get you unstuck.

Questions? Just reply to this email.

See you soon!
[Your Name]
AppSpark
```

### Reminder Email (24 hours before)
**Subject:** "Your AppSpark session is tomorrow - Ready?"

**Body:**
```
Hi [Name],

Your AppSpark session is in 24 hours: [Date/Time]

🔗 JOIN LINK: [Zoom Link]

QUICK PREP CHECK:
✓ Repo open with push permissions?
✓ Environment variables handy?
✓ Ready to screenshare?
✓ One-line success definition ready?

We'll focus on: [Objective from intake]

See you tomorrow!
[Your Name]
```

### Reminder Email (3 hours before)
**Subject:** "AppSpark session starting soon - [Time]"

**Body:**
```
Hi [Name],

Your session starts in 3 hours: [Time]

🔗 JOIN: [Zoom Link]

Ready to solve: [Challenge from intake]

See you soon!
```

## Routing Form (Optional)

To filter out mismatched requests:

### Routing Question
"Which best describes what you need?"
- **60-minute focused Cursor coaching** → Continue to booking
- **Complete app development** → Redirect with message
- **Security audit/code review** → Redirect with message
- **Ongoing mentorship** → Redirect with message

### Redirect Message
```
Thanks for your interest! 

This sounds like a larger project than our focused 60-minute sessions can address. AppSpark specializes in specific, tactical Cursor coaching.

If you need a scoped project bid or ongoing development work, please email us at info@appspark.ai with your requirements.

For focused Cursor challenges (scaffolding, specific blockers, deployment fixes, workflow optimization), please go back and select the coaching option.
```

## Integration Settings

### Zoom Integration
- **Enable:** Calendly's native Zoom integration
- **Meeting Type:** Scheduled meetings
- **Auto-generate:** Unique meeting per booking
- **Waiting room:** Enabled
- **Recording:** Host can record (with consent)

### Stripe Integration
- **Payment processor:** Stripe
- **Collect payment:** Before confirmation
- **Amount:** $150.00 USD
- **Tax handling:** Stripe Tax (if applicable)
- **Refunds:** Disabled in Stripe dashboard

### Webhook Setup (Optional)
For automation with Notion/email:
- **Webhook URL:** Your automation endpoint
- **Events:** invitee.created, invitee.canceled
- **Use for:** Auto-creating Notion templates

## Testing Checklist

Before going live:
- [ ] Book a test session and verify all emails
- [ ] Test payment flow with Stripe test mode
- [ ] Verify Zoom integration creates unique meetings
- [ ] Check all intake questions display correctly
- [ ] Test reschedule flow with different notice periods
- [ ] Verify confirmation page shows all necessary info
- [ ] Test mobile booking experience

## Analytics Tracking

Add UTM parameters to your Calendly links:
- **Source tracking:** `?utm_source=website&utm_medium=cta&utm_campaign=coaching`
- **Goal tracking:** Set up Calendly conversion goals in Plausible
- **A/B testing:** Test different CTA copy and placement

## Maintenance

### Weekly Tasks:
- [ ] Review booking patterns and adjust availability
- [ ] Check for any failed payments or issues
- [ ] Update availability for holidays/time off

### Monthly Tasks:
- [ ] Review intake question responses for patterns
- [ ] Analyze conversion rates and optimize
- [ ] Update pricing or policies if needed
- [ ] Gather client feedback for improvements
