const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();
const app = express();
const { RESEND_API_KEY, RESEND_FROM, MAIL_TO } = process.env;
const missingMailSettings = ["RESEND_API_KEY", "RESEND_FROM", "MAIL_TO"].filter(
  (key) => !process.env[key]?.trim()
);

if (missingMailSettings.length) {
  console.error("Missing contact email settings:", missingMailSettings.join(", "));
}

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
  const name = typeof req.body?.name === "string" ? req.body.name.trim() : "";
  const email = typeof req.body?.email === "string" ? req.body.email.trim() : "";
  const message = typeof req.body?.message === "string" ? req.body.message.trim() : "";
  const phone = typeof req.body?.phone === "string" ? req.body.phone.trim() : "";
  const topic = typeof req.body?.subject === "string" ? req.body.subject.trim() : "";

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Name, email, and message are required." });
  }

  if (!/^[^\s@,;<>]+@[^\s@,;<>]+\.[^\s@,;<>]+$/.test(email)) {
    return res.status(400).json({ error: "Enter a valid email address." });
  }

  if (missingMailSettings.length) {
    return res.status(503).json({ error: "Email service is temporarily unavailable." });
  }

  const subject = (topic ? `Contact Form: ${topic}` : `New message from ${name}`).replace(/[\r\n]+/g, " ");
  const mail = {
    from: RESEND_FROM,
    to: MAIL_TO,
    reply_to: email,
    subject,
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "Not provided"}\nSubject: ${topic || "Not provided"}\n\nMessage:\n${message}`,
  };

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(mail),
      signal: AbortSignal.timeout(10000),
    });

    if (!response.ok) {
      console.error("Resend rejected the contact email:", response.status);
      return res.status(502).json({ error: "Failed to send email." });
    }

    return res.status(200).json({ message: "Email sent successfully." });
  } catch (error) {
    console.error("Resend request failed:", error.name);
    return res.status(502).json({ error: "Failed to send email." });
  }
});

// Health check
app.get("/", (req, res) => {
  res.send("Server is running.");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
