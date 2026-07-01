import { NextResponse } from "next/server";
import { Resend } from "resend";

const TO = process.env.CONTACT_TO || "cindyniemetz19@gmail.com";
const FROM = process.env.CONTACT_FROM || "GYRA <contacto@notificaciones.mundogyra.com>";

type DescuentoPayload = {
  type: "descuento";
  nombre?: string;
  email?: string;
  cumple?: string;
};

type SumatePayload = {
  type: "sumate";
  local?: string;
  nombre?: string;
  contacto?: string;
  barrio?: string;
};

type Payload = DescuentoPayload | SumatePayload;

function esc(value: unknown): string {
  return String(value ?? "—")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function row(label: string, value: unknown): string {
  return `<tr>
    <td style="padding:6px 16px 6px 0;color:#143CA0;font-weight:700;white-space:nowrap;vertical-align:top;">${esc(
      label,
    )}</td>
    <td style="padding:6px 0;">${esc(value)}</td>
  </tr>`;
}

function build(payload: Payload): { subject: string; html: string; replyTo?: string } {
  if (payload.type === "sumate") {
    const rows = [
      row("Nombre del local", payload.local),
      row("Nombre", payload.nombre),
      row("Barrio", payload.barrio),
      row("WhatsApp o mail", payload.contacto),
    ].join("");
    return {
      subject: `Nuevo local interesado — ${payload.local?.trim() || "sin nombre"}`,
      html: table("Sumate · nuevo local interesado", rows),
    };
  }

  const rows = [
    row("Nombre", payload.nombre),
    row("Mail", payload.email),
    row("Cumpleaños", payload.cumple),
  ].join("");
  return {
    subject: `Nuevo registro de descuento — ${payload.nombre?.trim() || "sin nombre"}`,
    html: table("Descuento · nuevo registro", rows),
    replyTo: payload.email?.trim() || undefined,
  };
}

function table(title: string, rows: string): string {
  return `<div style="font-family:Arial,Helvetica,sans-serif;color:#0E2C7A;">
    <h2 style="margin:0 0 16px;color:#143CA0;">${esc(title)}</h2>
    <table style="border-collapse:collapse;font-size:14px;">${rows}</table>
    <p style="margin:20px 0 0;font-size:12px;color:#6b7280;">Enviado desde mundogyra.com</p>
  </div>`;
}

export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { ok: false, error: "Email service not configured" },
      { status: 500 },
    );
  }

  let payload: Payload;
  try {
    payload = (await req.json()) as Payload;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }

  if (payload?.type !== "descuento" && payload?.type !== "sumate") {
    return NextResponse.json({ ok: false, error: "Unknown form type" }, { status: 400 });
  }

  const { subject, html, replyTo } = build(payload);

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: FROM,
      to: TO,
      subject,
      html,
      replyTo,
    });

    if (error) {
      console.error("[contact] Resend error:", error);
      return NextResponse.json({ ok: false, error: "Could not send" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] Unexpected error:", err);
    return NextResponse.json({ ok: false, error: "Could not send" }, { status: 500 });
  }
}
