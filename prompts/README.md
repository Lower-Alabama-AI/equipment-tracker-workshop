# v0 Prompts for Equipment Tracker

Use these prompts in order at [v0.dev](https://v0.dev) to build your equipment tracker.

## Prompts Overview

1. **01-initial-dashboard.md** - Create the basic layout and dashboard
2. **02-equipment-view.md** - Build the equipment catalog  
3. **03-checkout-flow.md** - Add check-out functionality
4. **04-checkin-flow.md** - Add check-in functionality
5. **05-user-management.md** - Create user views
6. **06-ai-integration.md** - Add AI predictions
7. **07-connect-supabase.md** - Connect to your Supabase database

## Tips for Using v0

- Be specific about styling preferences
- Request "Next.js app router" for modern React
- Ask for "TypeScript" if you want type safety
- Say "use Supabase client" for database integration
- Iterate on the generated code with follow-up prompts

## Environment Variables Setup

Before running prompt #7, add these in v0 Settings (gear icon):
- `NEXT_PUBLIC_SUPABASE_URL` - Your Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Your Supabase anon key

## Example Workflow

1. Copy the first prompt
2. Paste into v0.dev
3. Review the generated code
4. Use "Edit with prompt" to refine
5. When satisfied, move to the next prompt

Remember: v0 understands context, so you can say things like "make the cards bigger" or "add a loading state" to refine your design.