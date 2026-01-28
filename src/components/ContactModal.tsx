"use client";

import { useEffect, useRef, useState } from "react";

type ContactModalProps = {
  open: boolean;
  onClose: () => void;
  selectedTopic?: string;
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
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error";
    msg: string;
  } | null>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    open ? dialog.showModal() : dialog.close();
  }, [open]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus(null);

    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      setSubmitting(true);
      const res = await fetch(
        "https://awntechk-launchpad-backend.onrender.com/api/contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      if (!res.ok) throw new Error("Failed to send message");

      setStatus({
        type: "success",
        msg: "Thanks! Our team will contact you shortly.",
      });

      e.currentTarget.reset();
    } catch (err: any) {
      setStatus({
        type: "error",
        msg: err.message || "Something went wrong.",
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <dialog
      ref={dialogRef}
      className="contact-dialog"
      onCancel={onClose}
    >
      <div className="modal-container">
        {/* LEFT INFO PANEL */}
        <aside className="modal-info">
          <h2>Let’s build something great</h2>
          <p>
            Tell us about your idea and we'll help you design, build, and
            scale it.
          </p>

          <ul>
            <li>✔ Fast response within 24 hours</li>
            <li>✔ Industry-grade solutions</li>
            <li>✔ Dedicated technical team</li>
          </ul>
        </aside>

        {/* RIGHT FORM PANEL */}
        <section className="modal-form">
          <button className="close-btn" onClick={onClose}>✕</button>

          <form onSubmit={handleSubmit}>
            <div className="grid">
              <input name="name" placeholder="Your name" required />
              <input
                name="email"
                type="email"
                placeholder="Your email"
                required
              />
              <input name="phone" placeholder="+91 90000 00000" />
              <select name="topic" defaultValue={selectedTopic || topics[0]}>
                {topics.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </div>

            <textarea
              name="message"
              placeholder="Briefly describe your requirements…"
              rows={5}
              required
            />

            {status && (
              <p className={`status ${status.type}`}>
                {status.msg}
              </p>
            )}

            <button className="submit-btn" disabled={submitting}>
              {submitting ? "Sending…" : "Send message"}
            </button>
          </form>
        </section>
      </div>

      {/* STYLES */}
      <style>{`
        .contact-dialog {
          border: none;
          background: transparent;
          padding: 0;
        }

        .contact-dialog::backdrop {
          background: rgba(0,0,0,0.45);
          backdrop-filter: blur(6px);
        }

        .modal-container {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          width: 760px;
          max-width: 95vw;
          background: #fff;
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 30px 80px rgba(0,0,0,0.25);
          animation: fadeUp 0.25s ease;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .modal-info {
          padding: 32px;
          background: linear-gradient(135deg, #000000, #1a1a1a);
          color: white;
        }

        .modal-info h2 {
          font-size: 24px;
          margin-bottom: 12px;
        }

        .modal-info ul {
          margin-top: 20px;
          padding-left: 0;
          list-style: none;
        }

        .modal-info li {
          margin-bottom: 10px;
          opacity: 0.95;
        }

        .modal-form {
          padding: 32px;
          position: relative;
        }

        .close-btn {
          position: absolute;
          top: 14px;
          right: 14px;
          border: none;
          background: none;
          font-size: 18px;
          cursor: pointer;
        }

        form {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        input, select, textarea {
          padding: 12px 14px;
          border-radius: 10px;
          border: 2px solid #e5e7eb;
          background: white;
          font-size: 14px;
        }

        input:focus, select:focus, textarea:focus {
          outline: none;
          border-color: #000000;
          box-shadow: 0 0 0 3px rgba(0,0,0,0.15);
        }

        .submit-btn {
          background: #000000;
          color: white;
          border: 2px solid #000000;
          padding: 14px;
          border-radius: 12px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .submit-btn:hover {
          background: white;
          color: #000000;
        }

        .status.success {
          color: #16a34a;
          font-size: 14px;
        }

        .status.error {
          color: #dc2626;
          font-size: 14px;
        }

        @media (max-width: 768px) {
          .modal-container {
            grid-template-columns: 1fr;
          }
          .modal-info {
            display: none;
          }
        }
      `}</style>
    </dialog>
  );
}
