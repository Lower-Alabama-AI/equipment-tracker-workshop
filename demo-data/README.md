# Demo Data for Equipment Tracker

These CSV files contain sample data for the workshop. Import them into Supabase in this order:

1. `users.csv` - Sample users with different departments
2. `equipment.csv` - Various equipment items  
3. `checkouts.csv` - Historical checkout data with patterns

## Import Instructions

1. Open your Supabase project
2. Go to Table Editor
3. For each table:
   - Click "Import data from CSV"
   - Upload the corresponding CSV file
   - Verify the column mappings
   - Click "Import"

## Data Patterns

The demo data includes hidden patterns for AI to discover:
- Sarah always returns items on time
- Mike tends to return cameras 1-2 days late
- Equipment checked out on Fridays often returns late
- Drones require more maintenance than other equipment

These patterns will make the AI predictions more interesting during the workshop!