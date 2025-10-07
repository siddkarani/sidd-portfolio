import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";
import { SIDD_COMPLETE_PROFILE } from "@/lib/knowledge-base";

export async function POST(req) {
  try {
    const { messages } = await req.json();
    
    // Get the last user message
    const lastMessage = messages[messages.length - 1].content;

    // Initialize Gemini
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    // Create context with knowledge base
    const systemPrompt = `You are Sidd Karani's AI assistant. Answer questions about Sidd based on this information: ${JSON.stringify(SIDD_COMPLETE_PROFILE)}. Be conversational, enthusiastic, and personal. Keep responses concise but informative.`;

    const prompt = `${systemPrompt}\n\nUser question: ${lastMessage}`;

    // Generate response
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ 
      content: text
    });

  } catch (error) {
    console.error("Error in chat route:", error);
    return NextResponse.json(
      { 
        content: "Sorry, I had trouble processing that. Please try again!"
      },
      { status: 500 }
    );
  }
}
