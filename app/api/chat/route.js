import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { message, conversationHistory } = await req.json();

    // Initialize the Gemini API
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

    // Use gemini-2.5-flash - the current stable model
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    // Format conversation history
    const history = conversationHistory?.map((msg) => ({
      role: msg.role === "user" ? "user" : "model",
      parts: [{ text: msg.content }],
    })) || [];

    // Start chat with history
    const chat = model.startChat({
      history: history,
      generationConfig: {
        maxOutputTokens: 1000,
        temperature: 0.7,
      },
    });

    // Send message and get response
    const result = await chat.sendMessage(message);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ 
      response: text,
      success: true 
    });

  } catch (error) {
    console.error("Error in chat route:", error);
    return NextResponse.json(
      { 
        error: "Failed to generate response",
        details: error.message,
        success: false
      },
      { status: 500 }
    );
  }
}
