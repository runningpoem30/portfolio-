export const runtime = "nodejs";

import nodemailer from "nodemailer";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const data = contactSchema.parse(body);

    const { GMAIL_USER, GMAIL_PASSWORD, HOST } = process.env;

    if (GMAIL_USER && GMAIL_PASSWORD && HOST) {
      const transporter = nodemailer.createTransport({
        host: HOST,
        port: 587,
        secure: false,
        auth: {
          user: GMAIL_USER,
          pass: GMAIL_PASSWORD,
        },
      });

      await transporter.sendMail({
        from: `"Portfolio Contact" <${GMAIL_USER}>`,
        to: GMAIL_USER,
        replyTo: data.email,
        subject: `New message from ${data.name}`,
        text: `
Name: ${data.name}
Email: ${data.email}

Message:
${data.message}
        `,
      });
    } else {
      console.log("Contact form submission (email not configured):", data);
    }

    return Response.json({ success: true });
  } catch (err) {
    console.error(err);
    return Response.json(
      { success: false, error: "Invalid request" },
      { status: 400 }
    );
  }
}
