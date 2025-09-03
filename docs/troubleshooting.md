# Troubleshooting Guide

## Common Issues & Quick Fixes

### v0.dev Issues

**Can't access v0.dev**
- Clear browser cache
- Try incognito/private mode
- Use Chrome or Edge browser

**Generated code looks different**
- Make sure to mention "Next.js app router"
- Be specific about styling requirements
- Use the exact prompts provided

**Can't export code**
- Click "View Code" first
- Then use "Export" button
- Choose "Download" or "Push to GitHub"

### Supabase Issues

**Can't create project**
- Verify email first
- Try a different project name
- Check if you have projects limit

**Import CSV fails**
- Check column headers match exactly
- Remove any empty rows
- Try smaller batch first

**Can't see data after import**
- Refresh the table view
- Check the correct schema (public)
- Verify row count shows > 0

### GitHub Issues

**Can't push code**
- Make sure you're logged in
- Repository must be created first
- Use GitHub's web upload for simplicity

**Repository is private**
- Go to Settings → Change to Public
- Needed for Vercel deployment

### Deployment Issues

**Vercel deployment fails**
- Check for environment variables
- Ensure package.json exists
- Repository must be public

**"Module not found" errors**
- Normal for first deployment
- Wait 2-3 minutes and refresh
- Check build logs for details

### AI Features Issues

**Prediction returns error**
- Check Supabase Edge Function logs
- Verify API key is set
- Try a different user/equipment combo

**No AI predictions showing**
- Check browser console for errors
- Verify Edge Function is deployed
- Test with user who has history

## General Tips

### If you're stuck:
1. Don't panic - this is normal!
2. Check with your neighbor
3. Raise your hand early
4. We have checkpoints - you can catch up

### Browser Tips:
- Use Chrome or Edge for best results
- Keep only necessary tabs open
- Disable ad blockers temporarily

### Copy-Paste Carefully:
- Watch for extra spaces
- Check quote marks didn't change
- Verify indentation is correct

## Emergency Fixes

**Complete restart needed?**
1. We have backup checkpoints
2. Skip to the current section
3. Use pre-built components

**Nothing working?**
1. Pair with successful neighbor
2. Watch and learn this round
3. We'll help you after workshop

Remember: The goal is learning, not perfection!