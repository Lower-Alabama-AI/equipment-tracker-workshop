# Initial Dashboard Build

Create a modern equipment check-in/check-out tracking system using Next.js app router and TypeScript.

**Important setup requirements**:
- Use Inter font from Google Fonts (not local fonts)
- Wrap any components using useSearchParams() in Suspense boundaries
- Use stable package versions

The dashboard page should have:

1. A sidebar navigation with:
   - Logo/Title area saying "Equipment Tracker"
   - Navigation items: Dashboard, Equipment, Check Out, Check In, History, Users
   - Use icons from lucide-react
   - Dark blue background with white text

2. Main dashboard area with:
   - Header showing "Equipment Dashboard" and current date
   - 4 metric cards in a grid:
     - Total Equipment (blue card)
     - Available Now (green card)
     - Checked Out (yellow card)
     - Overdue Items (red card)
   - Each card should show a large number and icon

3. Below the metrics:
   - Recent Activity table showing last 5 checkouts
   - Columns: Equipment, User, Checked Out, Expected Return, Status

Use Tailwind CSS for styling. Make it responsive and professional looking.
Use modern card designs with subtle shadows.