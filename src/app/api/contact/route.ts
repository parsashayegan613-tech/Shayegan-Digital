import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Make sure to add RESEND_API_KEY to your .env.local file
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, timeline, details } = await req.json();

    // IMPORTANT: Since you haven't tied a specific domain (like shayegandigital.com) to Resend yet,
    // we MUST use their authorized testing email 'onboarding@resend.dev'. Otherwise, it blocks the email for spam.
    const fromAddress = 'onboarding@resend.dev'; 
    
    // The email address that receives the leads:
    const myInbox = 'parsashayegan613@gmail.com';

    // 1. Send the Lead Notification to your inbox
    const notification = await resend.emails.send({
      from: fromAddress,
      to: myInbox,
      replyTo: email, // This allows you to just hit 'Reply' in Gmail to reply directly to the client
      subject: `New Project Inquiry: ${name}`,
      text: `New Lead from Website!\n\nName: ${name}\nEmail: ${email}\nBudget/Timeline: ${timeline}\n\nProject Overview:\n${details}`,
    });

    if (notification.error) {
      console.error(notification.error);
      return NextResponse.json({ success: false, error: notification.error.message }, { status: 500 });
    }

    // 2. Send the Auto-Responder to the Client
    // (This will fail in Resend until you verify your domain, but won't crash the form due to the separate block)
    try {
      await resend.emails.send({
        from: fromAddress,
        to: email, // Send to the client
        subject: `Got your project details - Let's talk soon`,
        text: `Hi ${name.split(' ')[0]},\n\nThis is an automated quick note to confirm I received your project inquiry.\n\nI'll be reviewing your current website and details shortly, and I'll follow up within 24 hours so we can schedule your strategy call.\n\nBest,\nParsa\nShayegan Digital\n\n---\nRef: ${timeline} | ${email}`,
      });
    } catch (e) {
      console.log("Auto-responder skipped (likely domain not verified yet): ", e);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}
