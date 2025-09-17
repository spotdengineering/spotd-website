export const runtime = 'nodejs';
import { Mailer } from '@/components/ui/custom/mailer';
import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

export async function POST(request: NextRequest) {
  const { name, email, subject, message } = await request.json();

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.APP_EMAIL,
      pass: process.env.APP_PASSWORD,
    },
  });

  const mailOption: Mail.Options = {
    from: process.env.APP_EMAIL,
    to: process.env.SENDER_EMAIL,
    subject: `⚠️ Query alert from ${name}`,
    html: Mailer({ name, email, subject, message }),
    replyTo: email,
  };

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transporter.sendMail(mailOption, function (err) {
        if (!err) {
          resolve('Message sent successfully 🥳');
        } else {
          reject(`Failed to send message: ${err}`);
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({
      message: 'Message sent successfully 🥳',
    });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
