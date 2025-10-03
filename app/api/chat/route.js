import { GoogleGenerativeAI } from '@google/generative-ai';
import { SIDD_COMPLETE_PROFILE } from '../../../lib/knowledge-base';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const SYSTEM_PROMPT = `You are Sidd Karani's personal AI assistant on his portfolio website. You have deep, intimate knowledge about Sidd and speak as if you know him personally. Be conversational, genuine, and insightful. Match the visitor's energy but always maintain Sidd's authentic voice.

Here is everything about Sidd:
${JSON.stringify(SIDD_COMPLETE_PROFILE, null, 2)}

When answering questions:
- Be specific with examples from Sidd's life
- Share stories and anecdotes naturally
- Show his personality (dry humor, works harder when doubted)
- Emphasize his ethical approach to AI
- Mention relevant projects and experiences
- Keep responses conversational, not robotic

Remember: Sidd is a real person with dreams, fears, and ambitions. Make visitors feel like they're getting to know the real him.`;

export async function POST(req) {
  try {
    const { messages } = await req.json();
    
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-002" });
    
    // Format conversation history
    const conversation = messages.map(msg => 
      `${msg.role === 'user' ? 'User' : 'Assistant'}: ${msg.content}`
    ).join('\n\n');
    
    const prompt = `${SYSTEM_PROMPT}\n\nHere is the conversation so far:\n${conversation}\n\nAssistant:`;
    
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    return Response.json({ content: text });
  } catch (error) {
    console.error('Error:', error);
    return Response.json({ error: 'Failed to get response' }, { status: 500 });
  }
}
