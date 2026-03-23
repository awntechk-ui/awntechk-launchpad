const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const sgMail = require("@sendgrid/mail");

dotenv.config();
const app = express();

if (!process.env.SENDGRID_API_KEY) {
  console.error("SENDGRID_API_KEY is missing");
}
if (!process.env.MAIL_TO) {
  console.error("MAIL_TO is missing");
}
if (!process.env.SENDGRID_VERIFIED_SENDER) {
  console.error("SENDGRID_VERIFIED_SENDER is missing");
}

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.use(express.json());

app.use(
  cors({
    origin: [
      "https://awntechk-launchpad.vercel.app",
      "https://www.awntechk.com",
      "http://localhost:5173",
    ],
    methods: ["GET", "POST"],
  })
);

app.post("/api/contact", async (req, res) => {
  try {
    console.log("Incoming contact request:", req.body);

    const { name, email, phone, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Name, email, and message are required." });
    }

    const msg = {
      to: process.env.MAIL_TO,
      from: process.env.SENDGRID_VERIFIED_SENDER,
      subject: subject ? `Contact Form: ${subject}` : `New message from ${name}`,
      text: `Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}
Subject: ${subject || "Not provided"}

Message:
${message}`,
    };

    const response = await sgMail.send(msg);
    console.log("SendGrid success:", response[0]?.statusCode);

    return res.status(200).json({ message: "Email sent successfully." });
  } catch (error) {
    console.error("Error sending email:", error.response?.body || error.message || error);
    return res.status(500).json({
      error: "Failed to send email.",
      details: error.response?.body || error.message,
    });
  }
});

app.get("/", (req, res) => {
  res.send("Server is running.");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));