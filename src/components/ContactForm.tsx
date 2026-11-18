import { useState, type FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";

const topics = ["Project Inquiry", "Support Request", "Partnership", "Careers", "Other"];
const contactUrl = import.meta.env.DEV
  ? "/api/contact"
  : "https://awntechk-launchpad-backend.onrender.com/api/contact";

export default function ContactForm({ selectedTopic }: { selectedTopic?: string }) {
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; text: string } | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting) return;

    const form = event.currentTarget;
    const fields = new FormData(form);
    const payload = {
      name: String(fields.get("name") ?? "").trim(),
      email: String(fields.get("email") ?? "").trim(),
      phone: String(fields.get("phone") ?? "").trim(),
      subject: String(fields.get("subject") ?? ""),
      message: String(fields.get("message") ?? "").trim(),
    };

    if (!payload.name || !payload.email || !payload.message) {
      setStatus({ type: "error", text: "Please enter your name, email, and message." });
      return;
    }

    setStatus(null);
    setSubmitting(true);

    try {
      const response = await fetch(contactUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Contact request failed");

      form.reset();
      setStatus({ type: "success", text: "Thanks! Our team will contact you shortly." });
    } catch {
      setStatus({ type: "error", text: "Your message couldn’t be sent. Please try again." });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form className="enquiry-form" onSubmit={handleSubmit} aria-busy={submitting}>
      <fieldset disabled={submitting}>
        <div className="enquiry-fields">
          <label>
            Full name
            <input name="name" autoComplete="name" placeholder="Your name" maxLength={120} required />
          </label>
          <label>
            Email
            <input name="email" type="email" autoComplete="email" placeholder="you@company.com" maxLength={254} required />
          </label>
          <label>
            <span>Phone <span className="enquiry-optional">(optional)</span></span>
            <input name="phone" type="tel" autoComplete="tel" placeholder="+91 90000 00000" maxLength={30} />
          </label>
          <label>
            Topic
            <select name="subject" defaultValue={selectedTopic || topics[0]}>
              {topics.map((topic) => <option key={topic}>{topic}</option>)}
            </select>
          </label>
          <label className="enquiry-message">
            How can we help?
            <textarea name="message" placeholder="Briefly describe your requirements…" rows={3} maxLength={4000} required />
          </label>
        </div>
        <button type="submit" className="enquiry-button enquiry-submit">
          {submitting ? "Sending…" : "Send message"}
          <ArrowUpRight size={18} aria-hidden="true" />
        </button>
      </fieldset>
      <div role="status" aria-live="polite">
        {status && <p className={`enquiry-status enquiry-status-${status.type}`}>{status.text}</p>}
      </div>
    </form>
  );
}
