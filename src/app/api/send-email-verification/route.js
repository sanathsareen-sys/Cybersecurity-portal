import { Resend } from "resend";
import crypto from "crypto";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  const { email, firstName } = await request.json();

  const token = crypto.randomBytes(32).toString("hex");

  const link = `${process.env.NEXT_PUBLIC_SITE_URL}/verify-email?token=${token}&email=${encodeURIComponent(email)}`;

  await resend.emails.send({
    from: process.env.FROM_EMAIL,
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