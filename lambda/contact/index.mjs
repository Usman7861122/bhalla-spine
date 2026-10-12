/**
 * Contact form handler for bhallaspine.com
 * Runtime: Node.js 22, called through a Lambda Function URL.
 * Sends the request to the clinic by email using Amazon SES.
 *
 * Two emails are sent: the request to the clinic, and a short confirmation to the person
 * who filled the form (only when they gave an email address).
 *
 * Environment variables (set in the Lambda console, Configuration > Environment variables):
 *   FROM_EMAIL       an address verified in SES, e.g. alphadeveloper91@gmail.com
 *   TO_EMAILS        comma separated recipients, e.g. drbhallaoffice@commonsclinic.com
 *   ALLOWED_ORIGINS  (optional) extra site addresses to allow, comma separated, no trailing slash
 *
 * Privacy: the message text is never written to the logs.
 */
import { SESv2Client, SendEmailCommand } from '@aws-sdk/client-sesv2';

const ses = new SESv2Client({});

/** Sites allowed to use this form. Add more through the ALLOWED_ORIGINS variable if needed. */
const DEFAULT_ORIGINS = [
  'https://www.bhallaspine.com',
  'https://bhallaspine.com',
  'https://bhalla-spine.vercel.app',
  'http://localhost:4321',
];

/** Shown in the confirmation email. */
const CLINIC = {
  name: 'Dr. Amandeep Bhalla, Orthopedic Spine Surgeon',
  place: 'Commons Clinic',
  address: '3610 Long Beach Blvd, Suite 202, Long Beach, CA 90807',
  phone: '(562) 427-8119',
  hours: 'Monday to Friday, 8:00 AM to 5:00 PM',
  site: 'https://www.bhallaspine.com',
};

const esc = (v) =>
  String(v).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

const confirmationText = (name) =>
  [
    `Hello ${name},`,
    '',
    'Thank you for contacting our office. We have received your appointment request.',
    'A member of our team will call you back within one business day.',
    '',
    `If your matter is urgent, please call us at ${CLINIC.phone}.`,
    'If this is a medical emergency, call 911 or go to the nearest emergency room.',
    '',
    'For your privacy, please do not reply to this email with medical records. We will ask for them securely once we have spoken.',
    '',
    `${CLINIC.name}`,
    `${CLINIC.place}`,
    `${CLINIC.address}`,
    `${CLINIC.phone}  |  ${CLINIC.hours}`,
    `${CLINIC.site}`,
  ].join('\n');

const confirmationHtml = (name) => `<!doctype html>
<html><body style="margin:0;padding:0;background:#f3f4f6;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f3f4f6;padding:32px 16px;">
<tr><td align="center">
<table role="presentation" width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;background:#ffffff;border:1px solid #e3e6ea;">
<tr><td style="background:#0f1f2e;padding:28px 32px;color:#ffffff;font-family:Georgia,'Times New Roman',serif;font-size:22px;">Amandeep Bhalla, MD</td></tr>
<tr><td style="padding:32px;font-family:Arial,Helvetica,sans-serif;color:#334155;font-size:16px;line-height:1.6;">
<p style="margin:0 0 16px;font-size:20px;color:#0f1f2e;font-family:Georgia,'Times New Roman',serif;">Hello ${esc(name)},</p>
<p style="margin:0 0 16px;">Thank you for contacting our office. We have received your appointment request.</p>
<p style="margin:0 0 16px;">A member of our team will call you back within <strong>one business day</strong>.</p>
<p style="margin:0 0 16px;">If your matter is urgent, please call us at <a href="tel:+15624278119" style="color:#0f1f2e;">${esc(CLINIC.phone)}</a>. If this is a medical emergency, call 911 or go to the nearest emergency room.</p>
<p style="margin:0;font-size:14px;color:#64748b;">For your privacy, please do not reply to this email with medical records. We will ask for them securely once we have spoken.</p>
</td></tr>
<tr><td style="padding:20px 32px;background:#f8f9fb;border-top:1px solid #e3e6ea;font-family:Arial,Helvetica,sans-serif;font-size:13px;color:#64748b;line-height:1.6;">
${esc(CLINIC.place)}<br>${esc(CLINIC.address)}<br>${esc(CLINIC.phone)} &middot; ${esc(CLINIC.hours)}<br>
<a href="${CLINIC.site}" style="color:#64748b;">${CLINIC.site.replace('https://', '')}</a>
</td></tr>
</table>
</td></tr></table>
</body></html>`;

const json = (statusCode, body) => ({
  statusCode,
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(body),
});

const clean = (v, max) => String(v ?? '').replace(/\r/g, '').trim().slice(0, max);
const oneLine = (v, max) => clean(v, max).replace(/\s+/g, ' ');

export const handler = async (event) => {
  const method = event.requestContext?.http?.method;
  if (method !== 'POST') return json(405, { ok: false, error: 'Method not allowed' });

  // Only accept requests that come from our own website.
  const extra = (process.env.ALLOWED_ORIGINS ?? '').split(',').map((s) => s.trim().replace(/\/$/, '')).filter(Boolean);
  const allowed = [...DEFAULT_ORIGINS, ...extra];
  const origin = event.headers?.origin ?? '';
  if (!allowed.includes(origin)) {
    return json(403, { ok: false, error: 'Not allowed' });
  }

  let data;
  try {
    const raw = event.isBase64Encoded ? Buffer.from(event.body ?? '', 'base64').toString('utf8') : event.body ?? '';
    if (raw.length > 10000) return json(413, { ok: false, error: 'Too large' });
    data = JSON.parse(raw);
  } catch {
    return json(400, { ok: false, error: 'Invalid request' });
  }

  // Hidden spam trap: real people never fill this in. Pretend it worked.
  if (clean(data.website, 200)) return json(200, { ok: true });

  const name = oneLine(data.name, 100);
  const phone = oneLine(data.phone, 30);
  const email = oneLine(data.email, 150);
  const interest = oneLine(data.interest, 100);
  const message = clean(data.message, 2000);

  if (name.length < 2) return json(400, { ok: false, error: 'Please enter your name.' });
  if (!/^[0-9+()\-.\s]{7,30}$/.test(phone)) return json(400, { ok: false, error: 'Please enter a valid phone number.' });
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return json(400, { ok: false, error: 'Please enter a valid email address.' });

  const text = [
    'New appointment request from the website',
    '',
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Email: ${email || 'not given'}`,
    `Interested in: ${interest || 'not sure yet'}`,
    '',
    'Message:',
    message || '(none)',
    '',
    `Sent: ${new Date().toISOString()}`,
  ].join('\n');

  try {
    await ses.send(
      new SendEmailCommand({
        FromEmailAddress: process.env.FROM_EMAIL,
        Destination: { ToAddresses: (process.env.TO_EMAILS ?? '').split(',').map((s) => s.trim()).filter(Boolean) },
        ReplyToAddresses: email ? [email] : undefined,
        Content: {
          Simple: {
            Subject: { Data: `Website request: ${name}`, Charset: 'UTF-8' },
            Body: { Text: { Data: text, Charset: 'UTF-8' } },
          },
        },
      }),
    );
    console.log('contact request sent');
  } catch (err) {
    console.error('SES error', err?.name);
    return json(500, { ok: false, error: 'We could not send your request. Please call the office.' });
  }

  // Confirmation to the person who filled the form. The request above already went through,
  // so a problem here must never make the visitor think the request failed.
  let confirmed = false;
  if (email) {
    try {
      const firstName = name.split(' ')[0];
      const replyTo = (process.env.TO_EMAILS ?? '').split(',').map((s) => s.trim()).filter(Boolean)[0];
      await ses.send(
        new SendEmailCommand({
          FromEmailAddress: process.env.FROM_EMAIL,
          Destination: { ToAddresses: [email] },
          ReplyToAddresses: replyTo ? [replyTo] : undefined,
          Content: {
            Simple: {
              Subject: { Data: 'We received your request | Dr. Amandeep Bhalla', Charset: 'UTF-8' },
              Body: {
                Text: { Data: confirmationText(firstName), Charset: 'UTF-8' },
                Html: { Data: confirmationHtml(firstName), Charset: 'UTF-8' },
              },
            },
          },
        }),
      );
      confirmed = true;
      console.log('confirmation sent');
    } catch (err) {
      console.error('Confirmation error', err?.name);
    }
  }

  return json(200, { ok: true, confirmed });
};
