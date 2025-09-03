# AI Integration UI

Update the checkout form to integrate with AI predictions.

On the checkout page:

1. Modify the "Predict Return Date" button:
   - When clicked, show loading spinner
   - Make it call an API endpoint (prepare for edge function)
   - Show prediction results in a styled box below

2. Prediction display should show:
   - Recommended return date (prominent)
   - Confidence level (High/Medium/Low) with color coding
   - Reasoning text explaining the prediction
   - Historical insights (e.g., "This user typically returns 1 day late")

3. Add intelligence indicators:
   - User reliability badge next to their name
   - Equipment popularity indicator
   - "Busy periods" warning if applicable

4. On the dashboard, add:
   - "AI Insights" card showing predictions for today
   - Overdue probability for current checkouts

Style AI elements with a purple/indigo theme to distinguish from regular UI.
Include placeholder API calls that can be connected to real endpoints.