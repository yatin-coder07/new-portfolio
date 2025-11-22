import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY); // set in .env.local

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!email || !message) {
      return NextResponse.json(
        { error: "Email and message are required" },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>", // or your domain
      to: "yatins113@gmail.com",                 // where YOU receive it
      reply_to: email,
      subject: `New message from ${name || "someone"} via portfolio`,
      text: `
Name: ${name || "N/A"}
Email: ${email}

Message:
${message}
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("CONTACT_FORM_ERROR", err);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
