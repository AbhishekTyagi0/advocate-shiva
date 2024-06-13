import {nodemailer} from "nodemailer";

const sendMail =  async (req: Request) => {
    const { name, email, message } = await req.json();    

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    });
}