# Connect AI Predictions

Update the checkout page to call the Supabase Edge Function for AI predictions:

1. In the checkout form, make the "Predict Return Date" button functional
2. When clicked, it should:
   - Show a loading spinner
   - Call the Edge Function using:
   ```javascript
   const { data, error } = await supabase.functions.invoke('predict-return', {
     body: { userId: selectedUser, equipmentId: selectedEquipment }
   })
   ```
3. Display the AI prediction in a nice card below the button showing:
   - The prediction text
   - Number of historical checkouts for context
   - A suggested return date based on the prediction
4. Handle any errors gracefully
5. The prediction should influence the default return date in the date picker

Keep the purple/indigo theme for AI elements as specified before.