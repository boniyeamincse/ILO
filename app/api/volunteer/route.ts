import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(1).max(120),
  email: z.string().email(),
  phone: z.string().max(20).optional(),
  area: z.string().max(50).optional(),
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

  // In production: save to database or send notification email
  console.log("[Volunteer Application]", parsed.data);

  return NextResponse.json({ success: true });
}
