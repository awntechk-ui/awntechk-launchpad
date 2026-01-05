// app/components/ContactModal.tsx
"use client";

import { useState, useEffect, useRef } from "react";

type ContactModalProps = {
  open: boolean;
  onClose: () => void;
  selectedTopic?: string; // ✅ added prop
};

const topics = [
  "Project Inquiry",
  "Support Request",
  "Partnership",
  "Careers",
  "Other",
];

export default function ContactModal({
  open,
  onClose,
  selectedTopic,
}: ContactModalProps) {
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; msg: string } | null>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  const handleClose = () => {
    if (submitting) return;
    onClose();
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus(null);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      phone: String(formData.get("phone") || "").trim(),
      topic: String(formData.get("topic") || "").trim(),
      message: String(formData.get("message") || "").trim(),
    };

    // Basic validation
    if (!payload.name || !payload.email || !payload.message) {
      setStatus({ type: "error", msg: "Name, Email, and Message are required." });
      return;
    }
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email);
    if (!emailOk) {
      setStatus({ type: "error", msg: "Please enter a valid email address." });
      return;
    }
    if (payload.phone && !/^\+?[0-9\-()\s]{7,}$/.test(payload.phone)) {
      setStatus({ type: "error", msg: "Please enter a valid phone number." });
      return;
    }

    try {
      setSubmitting(true);
      const res = await fetch("https://awntechk-launchpad-backend.onrender.com", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
});
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Failed to send message");

      setStatus({ type: "success", msg: "Thanks! We’ll get back to you shortly." });
      form.reset();
    } catch (err: any) {
      setStatus({ type: "error", msg: err.message || "Something went wrong." });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <dialog
      ref={dialogRef}
      className="contact-modal"
      aria-labelledby="contact-title"
      onCancel={handleClose}
    >
      <form method="dialog" className="modal-close">
        <button aria-label="Close" onClick={handleClose}>✕</button>
      </form>

      <div className="modal-body">
        <h2 id="contact-title">Let’s talk</h2>
        <p>Share your details and what you need. We’ll respond promptly.</p>

        <form onSubmit={handleSubmit} className="form">
          <div className="grid">
            <label>
              <span>Name</span>
              <input name="name" type="text" placeholder="Your name" required />
            </label>

            <label>
              <span>Email</span>
              <input name="email" type="email" placeholder="you@example.com" required />
            </label>

            <label>
              <span>Phone</span>
              <input name="phone" type="tel" placeholder="+91 90000 00000" />
            </label>

            <label>
              <span>Topic</span>
              {/* ✅ use selectedTopic here */}
              <select name="topic" defaultValue={selectedTopic || topics[0]}>
                {topics.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </label>
          </div>

          <label className="full">
            <span>Message</span>
            <textarea
              name="message"
              rows={5}
              placeholder="Describe your problem or project…"
              required
            />
          </label>

          {status && (
            <p className={status.type === "success" ? "ok" : "err"}>
              {status.msg}
            </p>
          )}

          <div className="actions">
            <button type="button" onClick={handleClose} disabled={submitting}>
              Cancel
            </button>
            <button type="submit" disabled={submitting}>
              {submitting ? "Sending…" : "Send message"}
            </button>
          </div>
        </form>
      </div>

      <style>{`
        dialog.contact-modal {
          border: none;
          border-radius: 16px;
          padding: 0;
          width: 640px;
          max-width: calc(100vw - 32px);
          background: linear-gradient(90deg, #20C6D7, #1BBFB0);



        }
        .modal-close {
          display: flex;
          justify-content: flex-end;
          padding: 8px 12px;
        }
        .modal-close button {
          background: transparent;
          border: none;
          font-size: 20px;
          cursor: pointer;
        }
        .modal-body {
          padding: 20px 24px 24px;
        }
        h2 {
          margin: 0 0 6px;
        }
        .grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin: 16px 0;
        }
        label {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        label.full {
          grid-column: 1 / -1;
          margin-top: 8px;
        }
        input, select, textarea {
          border: 1px solid #e2e8f0;
          border-radius: 10px;
          padding: 10px 12px;
          font-size: 14px;
        }
        .actions {
          display: flex;
          justify-content: flex-end;
          gap: 10px;
          margin-top: 14px;
        }
        .ok { color: #0f766e; }
        .err { color: #dc2626; }
      `}</style>
    </dialog>
  );
}