import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const user = process.env.EMAIL;
const pass = process.env.PASSWORD;

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();
    
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    });
   

        const info = await transporter.sendMail({
            from: `${name}" 👻" <${email}>`, // sender address
            to: "abhishektyagigi4310@gmail.com", // list of receivers
            subject: "New Contact me message from website", // Subject line
            text: `${message}`, // plain text body
          });
          return NextResponse.json(
            { message: "Message sent successfully" },
            { status: 200 },
          );
        } catch (error) {
          return new NextResponse("Failed to send message.", { status: 500 })
        }
      }

