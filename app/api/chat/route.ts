// app/api/chat/route.ts
import { NextRequest, NextResponse } from "next/server";

const GEMINI_API_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent";


export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.error("GEMINI_API_KEY is not set");
      return NextResponse.json(
        { error: "Server misconfigured: missing API key" },
        { status: 500 }
      );
    }

    // Build prompt tailored to YOUR portfolio
    const systemPrompt = `
You are an AI assistant on the personal portfolio of Yatin Sharma.

You know:
- He builds modern web apps with Next.js, TypeScript, Convex, Supabase, Postgres, Stripe, Schematic, Vercel.
- Key projects:
  1) AI Receipt Scanner:
     - SaaS web app that reads receipts & PDFs.
     - Extracts structured data and summarizes expenses.
     - Stack: Next.js, TypeScript, Convex, OpenAI/LLM, Stripe, Schematic, Vercel.
  2) AI Email Finder:
     - Finds, validates and enriches professional emails from minimal input.
     - Uses embeddings, vector search, and enrichment.
     - Stack: Next.js, TypeScript, Supabase, Postgres, HuggingFace API, vector embeddings.

Your job:
- Answer questions about his projects, tech stack, and how he integrates AI into web apps.
- Be concise, clear, and friendly.
- When relevant, mention specific technologies he used.
- If asked for contact, suggest checking the contact section or WhatsApp/LinkedIn on the site.
`;

    const payload = {
      contents: [
        {
          role: "user",
          parts: [
            {
              text: `${systemPrompt}\n\nUser: ${message}`,
            },
          ],
        },
      ],
    };

    const geminiRes = await fetch(`${GEMINI_API_URL}?key=${apiKey}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!geminiRes.ok) {
      const errText = await geminiRes.text();
      console.error("Gemini API error:", errText);
      return NextResponse.json(
        { error: "Gemini API error", details: errText },
        { status: 500 }
      );
    }

    const data = await geminiRes.json();

    const replyText =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ??
      "Sorry, I couldn’t generate a response.";

    return NextResponse.json({ reply: replyText });
  } catch (err) {
    console.error("Chat API error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
