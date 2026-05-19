import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { phone, code, user } = await request.json();

    if (!phone || !code) {
      return NextResponse.json({ ok: false, error: 'Missing phone or code' }, { status: 400 });
    }

    // If Twilio env vars are provided, attempt to send via Twilio
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const fromNumber = process.env.TWILIO_FROM_NUMBER; // e.g. +1234567890

    const messageBody = `Your verification code is ${code}. Do not share it with anyone.`;

    if (accountSid && authToken && fromNumber) {
      // Use Twilio REST API via fetch
      const url = `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`;
      const body = new URLSearchParams();
      body.append('To', phone);
      body.append('From', fromNumber);
      body.append('Body', messageBody);

      const basicAuth = Buffer.from(`${accountSid}:${authToken}`).toString('base64');

      const resp = await fetch(url, {
        method: 'POST',
        headers: {
          'Authorization': `Basic ${basicAuth}`,
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: body.toString()
      });

      if (!resp.ok) {
        const text = await resp.text();
        console.error('Twilio error', resp.status, text);
        return NextResponse.json({ ok: false, error: 'SMS provider returned an error' }, { status: 502 });
      }

      const data = await resp.json();
      return NextResponse.json({ ok: true, provider: 'twilio', data });
    }

    // No provider configured — mock send (log server-side) and return success
    console.log(`Mock SMS to ${phone}: ${messageBody} (user: ${user || 'unknown'})`);
    return NextResponse.json({ ok: true, provider: 'mock' });
  } catch (err) {
    console.error('send-sms error', err);
    return NextResponse.json({ ok: false, error: err.message || 'Server error' }, { status: 500 });
  }
}
