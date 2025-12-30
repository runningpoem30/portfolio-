export const runtime = "nodejs";
import clientPromise from "../../lib/mongoose";
import nodemailer from "nodemailer";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phoneNumber: z.string().min(8),
  message: z.string().min(10),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const data = contactSchema.parse(body);

    const client = await clientPromise;
    const db = client.db("portfolio");

    const transporter = nodemailer.createTransport({
      host: process.env.HOST,
      port: 587,
      secure: false,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASSWORD,
      },
    });

    console.log(process.env.GMAIL_USER)

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: data.email,
      subject: `New message from ${data.name}`,
      text: `
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phoneNumber}

Message:
${data.message}
      `,
    });

    await db.collection("messages").insertOne({
      ...data,
      createdAt: new Date(),
    });

    return Response.json({ success: true });
  } catch (err) {
    console.error(err);
    return Response.json(
      { success: false, error: "Invalid request" },
      { status: 400 }
    );
  }
}