import { Resend } from "resend";
import crypto from "crypto";

export async function POST(request) {
  const { email, firstName } = await request.json();

  const resendApiKey = process.env.RESEND_API_KEY;

  if (!resendApiKey) {
    return Response.json(
      { ok: false, error: "Missing RESEND_API_KEY" },
      { status: 500 }
    );
  }

  const resend = new Resend(resendApiKey);

  const token = crypto.randomBytes(32).toString("hex");

  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://cybersecurity-portal-i1fk.vercel.app";

  const link = `${siteUrl}/verify-email?token=${token}&email=${encodeURIComponent(email)}`;

  await resend.emails.send({
    from: process.env.FROM_EMAIL || "noreply@syncmax.ca",
    to: email,
    subject: "Verify your email",
    html: `
      <h2>Hello ${firstName || ""}</h2>
      <p>Please verify your email to continue training.</p>
      <a href="${link}">Verify Email</a>
    `,
  });

  return Response.json({ ok: true });
}