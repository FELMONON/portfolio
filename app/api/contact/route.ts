import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      type: 'login',
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    debug: true, // Enable debug output
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'felmonwork@gmail.com',
    subject: `New message from ${name}`,
    text: `
      Name: ${name}
      Email: ${email}
      Message: ${message}
    `,
  };

  try {
    console.log('Verifying connection...');
    await transporter.verify();
    console.log('Connection verified, sending email...');
    const info = await transporter.sendMail(mailOptions);
    console.log('Message sent: %s', info.messageId);
    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error: unknown) {
    console.error('Failed to send email:', error);
    if (error instanceof Error) {
      return NextResponse.json({ error: 'Failed to send email', details: error.message }, { status: 500 });
    } else {
      return NextResponse.json({ error: 'Failed to send email', details: 'An unknown error occurred' }, { status: 500 });
    }
  }
}
