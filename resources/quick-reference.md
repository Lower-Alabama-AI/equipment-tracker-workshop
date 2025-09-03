# Equipment Tracker Quick Reference

## Key URLs

### Your Accounts
- v0.dev: [v0.dev](https://v0.dev)
- Supabase: [app.supabase.com](https://app.supabase.com)
- GitHub: [github.com](https://github.com)
- Vercel: [vercel.com](https://vercel.com)

### Your Project Links (Fill in during workshop)
- Supabase Project: ________________________
- GitHub Repo: ____________________________
- Live App URL: ___________________________

## Quick Commands

### Supabase Connection
```javascript
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  'YOUR_SUPABASE_URL',
  'YOUR_ANON_KEY'
)
```

### Fetch Equipment
```javascript
const { data, error } = await supabase
  .from('equipment')
  .select('*')
  .eq('status', 'available')
```

### Check Out Equipment
```javascript
const { error } = await supabase
  .from('checkouts')
  .insert({
    equipment_id: selectedEquipment,
    user_id: selectedUser,
    expected_return: returnDate
  })
```

### Update Equipment Status
```javascript
const { error } = await supabase
  .from('equipment')
  .update({ status: 'checked_out' })
  .eq('id', equipmentId)
```

## Common Patterns

### Check Authentication
```javascript
const { data: { user } } = await supabase.auth.getUser()
if (!user) {
  // Redirect to login
}
```

### Real-time Subscriptions
```javascript
const subscription = supabase
  .channel('equipment-changes')
  .on('postgres_changes', 
    { event: '*', schema: 'public', table: 'equipment' }, 
    (payload) => {
      console.log('Change received!', payload)
    }
  )
  .subscribe()
```

### Error Handling
```javascript
try {
  const { data, error } = await supabase.from('equipment').select()
  if (error) throw error
  // Use data
} catch (error) {
  console.error('Error:', error.message)
}
```

## Environment Variables

### `.env.local` file
```
NEXT_PUBLIC_SUPABASE_URL=your_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key_here
```

## Deployment Checklist

- [ ] Push code to GitHub
- [ ] Connect GitHub to Vercel
- [ ] Add environment variables in Vercel
- [ ] Deploy!

## Getting Help

- Workshop repo: [github.com/Lower-Alabama-AI/equipment-tracker-workshop](https://github.com/Lower-Alabama-AI/equipment-tracker-workshop)
- Discord: [LA-AI Community](https://discord.gg/la-ai)
- Email: kai@la-ai.org