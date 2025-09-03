# User Management View

Create a users page showing all users and their checkout statistics.

Display users in a data table with columns:
- Name
- Department  
- Email
- Trust Score (displayed as progress bar)
- Current Checkouts (number)
- Total Checkouts (historical)
- Actions (View History button)

Add user metrics cards at top:
- Total Users
- Average Trust Score
- Items Currently Out
- Overdue Items by User

When "View History" is clicked:
- Show modal with user's complete checkout history
- Include equipment name, dates, and whether returned on time
- Calculate and show on-time return percentage

Style trust scores:
- 90-100: Green
- 80-89: Blue  
- 70-79: Yellow
- Below 70: Red

Add search functionality to find users by name or department.