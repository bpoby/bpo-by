import { NextResponse } from "next/server";
import { sendLead } from "@/server/email/provider";

export const runtime = "nodejs";

const allowedForms = new Set(["request-call", "find-cost", "order", "advice", "feedbackForm"]);

export async function POST(request: Request) {
  let payload: Record<string, unknown>;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  if (typeof payload.website === "string" && payload.website.trim()) return NextResponse.json({ ok: true });
  if (typeof payload.formId !== "string" || !allowedForms.has(payload.formId)) return NextResponse.json({ ok: false, error: "invalid_form" }, { status: 400 });

  const name = typeof payload.name === "string" ? payload.name.trim().slice(0, 160) : "";
  const tel = typeof payload.tel === "string" ? payload.tel.trim().slice(0, 80) : "";
  const email = typeof payload.email === "string" ? payload.email.trim().slice(0, 254) : "";
  const message = typeof payload.message === "string" ? payload.message.trim().slice(0, 5000) : "";
  if (!name || !tel || (payload.formId === "feedbackForm" && (!email || !message))) return NextResponse.json({ ok: false, error: "missing_fields" }, { status: 400 });

  try {
    await sendLead({ formId: payload.formId, name, tel, email, message });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "provider_unavailable" }, { status: 503 });
  }
}
