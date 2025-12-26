const express = require("express");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
app.use(express.json()); // ✅ parse JSON body
const cors = require("cors");

app.use(cors({
  origin: "https://awntechk-launchpad.vercel.app",
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type"],
}));

app.options("*", cors());

// ✅ Keep your Gmail transporter, but add SendGrid transporter as well
// Configure transporter (SendGrid)
const sendgridTransporter = nodemailer.createTransport({
  host: "smtp.sendgrid.net",
  port: 587,
  secure: false,
  auth: {
    user: "apikey",
    pass: process.env.SENDGRID_API_KEY,
  },
});


// Contact route
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, message, topic } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: "Missing required fields." });
    }

    // ✅ Use SendGrid transporter here
   await sendgridTransporter.sendMail({
  from: `"Awntechk Website" <${process.env.SENDGRID_VERIFIED_SENDER}>`,
  to: process.env.MAIL_TO,
  replyTo: email,
  subject: `Contact: ${topic || "General"} from ${name}`,
  html: `
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Topic:</strong> ${topic || "General"}</p>
    <p><strong>Message:</strong></p>
    <p>${message}</p>
  `,
});


    return res.status(200).json({ message: "Message sent successfully." });
  } catch (err) {
    console.error("Email error:", err); // ✅ log actual error
    return res.status(500).json({ error: err.message || "Failed to send message." });
  }
});

// ✅ Health check route for Render
app.get("/", (req, res) => {
  res.send("Backend is running on Render");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));