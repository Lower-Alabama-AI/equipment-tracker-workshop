import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

// Workshop API key - will be added during workshop
// DO NOT COMMIT REAL API KEYS TO GITHUB
const OPENAI_API_KEY = Deno.env.get('OPENAI_API_KEY') || 'YOUR-API-KEY-HERE'

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { userId, equipmentId } = await req.json()
    
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? ''
    )

    // Get user's checkout history
    const { data: userHistory } = await supabaseClient
      .from('checkouts')
      .select('*')
      .eq('user_id', userId)
      .not('actual_return', 'is', null)
      .order('checkout_date', { ascending: false })
      .limit(10)

    // Get equipment history
    const { data: equipmentHistory } = await supabaseClient
      .from('checkouts')
      .select('*')
      .eq('equipment_id', equipmentId)
      .not('actual_return', 'is', null)
      .limit(10)

    // Calculate return patterns
    const userAvgDays = calculateAverageReturnTime(userHistory)
    const equipmentAvgDays = calculateAverageReturnTime(equipmentHistory)
    
    // Call OpenAI for smart prediction
    const prediction = await getPrediction(
      userHistory,
      equipmentHistory,
      userAvgDays,
      equipmentAvgDays
    )

    return new Response(
      JSON.stringify({ 
        prediction,
        userReliabilityScore: calculateReliabilityScore(userHistory),
        historicalData: {
          userAvgDays,
          equipmentAvgDays
        }
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400
      }
    )
  }
})

function calculateAverageReturnTime(history: any[]) {
  if (!history || history.length === 0) return 3 // default
  
  const daysArray = history.map(checkout => {
    const expected = new Date(checkout.expected_return)
    const actual = new Date(checkout.actual_return)
    return Math.floor((actual.getTime() - expected.getTime()) / (1000 * 60 * 60 * 24))
  })
  
  return daysArray.reduce((a, b) => a + b, 0) / daysArray.length
}

function calculateReliabilityScore(history: any[]) {
  if (!history || history.length === 0) return 85 // default
  
  const onTimeReturns = history.filter(checkout => {
    const expected = new Date(checkout.expected_return)
    const actual = new Date(checkout.actual_return)
    return actual <= expected
  }).length
  
  return Math.round((onTimeReturns / history.length) * 100)
}

async function getPrediction(
  userHistory: any[],
  equipmentHistory: any[],
  userAvgDays: number,
  equipmentAvgDays: number
) {
  // Workshop participants will add their API key here
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${OPENAI_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: 'You are analyzing equipment checkout patterns. Provide a predicted return date and confidence level based on historical data.'
        },
        {
          role: 'user',
          content: `Based on this data, predict when the equipment will be returned:
          
User average days late/early: ${userAvgDays}
Equipment average days late/early: ${equipmentAvgDays}
User history count: ${userHistory?.length || 0}
Equipment history count: ${equipmentHistory?.length || 0}

Provide:
1. Recommended return timeframe (in days)
2. Confidence level (High/Medium/Low)
3. Key factors affecting prediction`
        }
      ],
      temperature: 0.3,
      max_tokens: 200
    })
  })

  if (!response.ok) {
    // Fallback prediction if API fails
    return {
      recommendedDays: Math.max(3, Math.ceil((userAvgDays + equipmentAvgDays) / 2)),
      confidence: 'Medium',
      reasoning: 'Based on average return patterns'
    }
  }

  const data = await response.json()
  const content = data.choices[0].message.content
  
  // Parse the response and structure it
  return {
    recommendedDays: 3,
    confidence: 'High',
    reasoning: content
  }
}