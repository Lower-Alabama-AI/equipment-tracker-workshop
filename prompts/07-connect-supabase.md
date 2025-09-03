# Connect to Supabase

Update this app to connect to a Supabase database and to make it fully functional (we will install the Environment variables in Vercel):

1. Install @supabase/supabase-js as a dependency

2. Create app/lib/supabase.js:
```javascript
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}
export const supabase = createClient(supabaseUrl, supabaseAnonKey)
```

3. Update the equipment page to:
   - Fetch real equipment from the 'equipment' table on load
   - Show loading state while fetching
   - Handle any errors gracefully
   - Display the real equipment data in the existing cards

4. Update the checkout page to:
   - Fetch available equipment from Supabase (status = 'available')
   - Fetch users from the 'users' table for the dropdown
   - When form is submitted, insert into 'checkouts' table and update equipment status to 'checked_out'
   - Show success message and redirect after checkout

5. Update the check-in page to:
   - Fetch current checkouts from the 'current_checkouts' view
   - When checking in, update the checkout record with actual_return timestamp and condition_in
   - Update equipment status back to 'available' (or 'maintenance' if condition is 'needs_repair')

6. Update the dashboard to show real counts from the database
   - Make sure all database operations properly handle loading and error states. Keep the existing UI design.