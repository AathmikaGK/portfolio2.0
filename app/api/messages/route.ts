import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_SECRET_KEY;

  if (!supabaseUrl || !supabaseKey) {
    return NextResponse.json(
      { error: "Message sending is not configured yet. Please try again later." },
      { status: 503 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const values = body as { name?: unknown; email?: unknown; message?: unknown; website?: unknown };
  // A hidden honeypot field catches simple automated submissions.
  if (typeof values.website === "string" && values.website.trim()) {
    return NextResponse.json({ ok: true });
  }

  const name = typeof values.name === "string" ? values.name.trim() : "";
  const email = typeof values.email === "string" ? values.email.trim() : "";
  const message = typeof values.message === "string" ? values.message.trim() : "";
  if (!name || name.length > 120 || !email || email.length > 320 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !message || message.length > 5000) {
    return NextResponse.json({ error: "Please check the fields and try again." }, { status: 400 });
  }

  const supabase = createClient(supabaseUrl, supabaseKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
  const { error } = await supabase.from("messages").insert({ name, email, message });
  if (error) {
    console.error("Unable to save contact message:", error.message);
    return NextResponse.json({ error: "Your message could not be saved. Please try again later." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
