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

    
   const systemPrompt = `
You are an AI assistant on the personal portfolio of Yatin Sharma.

You know:
- He builds modern full-stack web applications using Next.js, TypeScript, Django REST, PostgreSQL, Convex, Stripe, and Vercel.
- He focuses on clean architecture, secure authentication, and production-ready systems.

Key projects:

1) Jobify – Smart Job Portal:
   - Full-stack hiring platform with separate flows for employers and candidates.
   - Implements JWT-based authentication and strict role-based access control.
   - Employers can post jobs and manage applicants.
   - Candidates can browse listings and apply in real time.
   - Stack: Next.js, TypeScript, Django REST Framework, PostgreSQL, JWT, Tailwind CSS.

2) AI Receipt Scanner:
   - SaaS web app that reads receipts & PDFs.
   - Extracts structured data and summarizes expenses automatically.
   - Includes authentication, billing, and a dashboard for uploads.
   - Stack: Next.js, TypeScript, Convex, OpenAI, Stripe, Inngest, Vercel.

3) AI Report Maker:
   - AI-powered platform that converts raw user input into structured, professional reports.
   - Uses the Gemini API to generate well-formatted, readable reports.
   - Focuses on clarity, consistency, and reducing manual drafting effort.
   - Stack: Next.js, TypeScript, Clerk for authentication, Gemini API.

Your job:
- Answer questions about his projects, tech stack, and system design decisions.
- Clearly explain backend logic, authentication, and workflows when asked.
- Mention AI only for projects where it is actually used (Receipt Scanner, Report Maker).
- Be concise, clear, and professional — not salesy or overhyped.
- If asked for contact details, suggest checking the contact section or LinkedIn/WhatsApp links on the site.
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
