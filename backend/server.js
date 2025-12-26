const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const sgMail = require("@sendgrid/mail");

dotenv.config();
const app = express();

// Set SendGrid API Key
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Middleware to parse JSON
app.use(express.json());

// CORS middleware – updated
app.use(
  cors({
    origin: [
      "https://awntechk-launchpad.vercel.app", // your deployed frontend on Vercel
      "https://www.awntechk.com",             // your main domain
      "http://localhost:5173",                 // local dev
    ],
    methods: ["GET", "POST"],
  })
);

// Contact route
app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  const msg = {
    to: process.env.MAIL_TO,
    from: process.env.SENDGRID_VERIFIED_SENDER,
    subject: `New message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    await sgMail.send(msg);
    res.status(200).json({ message: "Email sent successfully." });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send email." });
  }
});

// Health check
app.get("/", (req, res) => {
  res.send("Server is running.");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
