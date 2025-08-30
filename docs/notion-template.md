# AppSpark After-Action Notes Template

This is the Notion template for After-Action Notes that should be duplicated for each client session.

## Template Structure

### Database Properties
- **Client Name** (Title)
- **Date** (Date)
- **Session Type** (Select: Scaffold, Fix, Deploy, Loop, Other)
- **Status** (Select: Completed, In Progress, Follow-up Needed)
- **Recording Link** (URL) - Optional, expires in 7 days
- **Client Email** (Email)

### Template Content

---

# AppSpark Session Notes - [Client Name]

**Date:** [Session Date]
**Duration:** 60 minutes
**Session Type:** [Scaffold/Fix/Deploy/Loop/Other]

## Objective
*One line description of what the client wanted to achieve*

[Client's stated objective from intake form]

## What We Changed
*Bullet list of concrete changes made during the session*

- [ ] **Change 1:** Brief description
  - File: `path/to/file.ext`
  - Commit: [link if applicable]
  
- [ ] **Change 2:** Brief description
  - File: `path/to/file.ext`
  - Command: `specific command used`
  
- [ ] **Change 3:** Brief description
  - Configuration: what was modified
  - Result: what this achieved

## Code Snippets
*Reusable code blocks and configurations*

### Snippet 1: [Description]
```language
// Code block with comments explaining key parts
const example = () => {
  // Implementation details
};
```

### Snippet 2: [Description]
```bash
# Command line examples
npm install package-name
# Explanation of what this does
```

## Next 3 Steps
*Short, actionable items for the client to complete*

1. **[Action Item 1]**
   - What: Specific task description
   - Why: Brief explanation of importance
   - How: Quick guidance on approach

2. **[Action Item 2]**
   - What: Specific task description
   - Why: Brief explanation of importance
   - How: Quick guidance on approach

3. **[Action Item 3]**
   - What: Specific task description
   - Why: Brief explanation of importance
   - How: Quick guidance on approach

## Useful Links
*Resources, documentation, and references*

- **Repository:** [GitHub/GitLab link]
- **Deploy URL:** [Production/staging link]
- **Documentation:** [Relevant docs]
- **Tools Used:** [Cursor extensions, packages, etc.]

## Recording
*If session was recorded*

**Recording Link:** [Zoom/Loom URL]
**Expires:** [Date - 7 days from session]
**Password:** [If applicable]

---

## Template Usage Instructions

### For Each New Session:

1. **Duplicate this template** in Notion
2. **Rename** with client name and date: "AppSpark Notes - [Client] - [Date]"
3. **Fill in database properties** from Calendly booking info
4. **Complete during/after session:**
   - Update objective based on actual session focus
   - Document changes made in real-time
   - Capture useful code snippets
   - Define clear next steps
   - Add relevant links and resources

### Post-Session Workflow:

1. **Complete notes within 2 hours** of session end
2. **Review for clarity** - ensure client can understand without context
3. **Share link** via email within 24 hours
4. **Set reminder** to follow up if client has questions
5. **Archive** after 30 days or when client confirms completion

### Email Template for Sharing:

```
Subject: AppSpark Session Notes + Next Steps

Hi [Client Name],

Thanks for the great session today! Here are your After-Action Notes with everything we covered:

[Notion Link]

Key takeaways:
- [Brief summary of main achievement]
- [One key insight or technique learned]
- [Next immediate step]

Your next 3 steps are outlined in the notes. Feel free to reply if you have any questions!

[Recording link - expires in 7 days]: [Link if applicable]

Best,
[Your name]

P.S. Need another session? Use the same booking link: [Calendly URL]
```

### Quality Checklist:

- [ ] Objective clearly stated and matches what was actually worked on
- [ ] All changes documented with file paths/commands
- [ ] Code snippets are complete and commented
- [ ] Next steps are specific and actionable
- [ ] Links are working and accessible
- [ ] Notes are clear without requiring session context
- [ ] Client contact info is correct
- [ ] Recording link added if session was recorded

## Automation Ideas (Future):

- **Calendly → Notion:** Auto-create template from booking
- **Email automation:** Send notes link automatically
- **Follow-up reminders:** Check in after 1 week
- **Template improvements:** Based on client feedback
