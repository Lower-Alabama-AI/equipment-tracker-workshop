# Common v0 Issues and Fixes

During the workshop, participants might encounter these common issues. Here are the quick fixes:

## 1. Font Import Error
**Error**: "Cannot find module './fonts/GeistSans' or its corresponding type declarations"

**Fix**: Tell v0:
```
Replace the Geist font imports with Inter from Google Fonts. Update the CSS variables accordingly.
```

## 2. Blob URL / Module Loading Error
**Error**: "Failed to load module script: Expected a JavaScript module..."

**Fix**: Tell v0:
```
Update package.json to use stable versions:
- class-variance-authority: "0.7.0" (not ^0.7.1)
- Simplify the utils.ts file to remove the clsx dependency
```

## 3. useSearchParams() Error
**Error**: "useSearchParams() must be wrapped in a Suspense boundary"

**Fix**: Tell v0:
```
Wrap any components using useSearchParams() in a Suspense boundary with a fallback
```

## 4. Environment Variable Issues
**Error**: "Missing Supabase environment variables"

**Fix**: 
- Click gear icon in v0
- Add environment variables
- Save and refresh

## Quick Fix Prompt
If participants encounter multiple issues, use this comprehensive fix prompt:

```
Fix these common issues:
1. Replace Geist fonts with Inter from Google Fonts
2. Use stable package versions (remove ^ from versions)
3. Wrap any useSearchParams() in Suspense boundaries
4. Simplify utils.ts to avoid clsx issues
```

## Prevention Strategy
To avoid these issues, include setup requirements in your first prompt:
- Specify Google Fonts (not local)
- Request stable package versions
- Mention Suspense boundaries upfront