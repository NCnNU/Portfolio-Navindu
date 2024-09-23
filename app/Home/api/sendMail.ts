// pages/api/sendMail.ts
import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function sendMail(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { firstname, lastname, email, message } = req.body;

    // Create a transporter using Gmail service
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "yourgmail@gmail.com", // Your Gmail account
        pass: "yourpassword", // Your Gmail password or App Password
      },
    });

    try {
      // Send the email
      await transporter.sendMail({
        from: "yourgmail@gmail.com", // Sender address
        to: "spynavindu@gmail.com", // Receiver's address
        subject: `New message from ${firstname} ${lastname}`, // Subject line
        html: `
          <h3>New Contact Form Submission</h3>
          <p><strong>First Name:</strong> ${firstname}</p>
          <p><strong>Last Name:</strong> ${lastname}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong> ${message}</p>
        `,
      });

      // Success response
      res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Email failed to send" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
