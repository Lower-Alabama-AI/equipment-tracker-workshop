# Check Out Flow

Create a check-out page with a form for equipment checkout.

The form should have:

1. User Selection
   - Dropdown to select user (show name and department)
   - Display user's trust score when selected

2. Equipment Selection  
   - Dropdown showing only available equipment
   - Show equipment name and serial number in dropdown
   - Display equipment image placeholder when selected

3. Checkout Details
   - Expected return date picker (default 3 days from today)
   - Purpose/Notes textarea
   - "Predict Return Date" button (prepare for AI integration)
   - Area to show AI prediction (initially hidden)

4. Form Actions
   - "Cancel" button (returns to equipment page)
   - "Check Out" button (blue, prominent)

Add form validation:
- All fields required
- Return date must be future date
- Show confirmation dialog before submission

After successful checkout:
- Show success message
- Redirect to equipment page