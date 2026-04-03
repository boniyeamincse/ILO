import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(1).max(120),
  email: z.string().email(),
  subject: z.string().min(1).max(250),
  message: z.string().min(5).max(3000),
});

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid input" }, { status: 400 });
  }

  // In production: integrate with email provider (e.g. Resend, SendGrid, Nodemailer)
  console.log("[Contact Form]", parsed.data);

  return NextResponse.json({ success: true });
}
