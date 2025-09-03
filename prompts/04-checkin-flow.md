# Check In Flow

Create a check-in page showing currently checked out items.

Display checked out equipment as cards with:
- Equipment details (name, serial, who has it)
- Days out vs expected return
- Overdue indicator if past return date
- "Check In" button on each card

When "Check In" is clicked, show a modal with:
- Equipment being returned (read-only)
- Condition assessment dropdown:
  - Excellent
  - Good  
  - Fair
  - Needs Repair
- Return notes textarea
- Photo upload area (placeholder for now)
- "Cancel" and "Complete Check In" buttons

After check-in:
- Update equipment status
- Show success notification
- Remove from checked-out list
- If condition is "Needs Repair", set status to maintenance