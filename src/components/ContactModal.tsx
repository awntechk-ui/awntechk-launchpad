import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import ContactForm from "./ContactForm";

type ContactModalProps = {
  open: boolean;
  onClose: () => void;
  selectedTopic?: string;
};

export default function ContactModal({ open, onClose, selectedTopic }: ContactModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (open && dialog && !dialog.open) dialog.showModal();
    if (!open && dialog?.open) dialog.close();
  }, [open]);

  return (
    <dialog
      ref={dialogRef}
      className="enquiry-dialog"
      aria-labelledby="contact-dialog-heading"
      onClose={onClose}
    >
      <div className="enquiry-card">
        <button type="button" className="enquiry-close" aria-label="Close contact form" onClick={onClose}>
          <X size={20} aria-hidden="true" />
        </button>
        <h2 id="contact-dialog-heading">Let’s build something great</h2>
        <p>Tell us about your idea and we'll help you design, build, and scale it.</p>
        <ul className="enquiry-dialog-benefits">
          <li>Fast response within 24 hours</li>
          <li>Industry-grade solutions</li>
          <li>Dedicated technical team</li>
        </ul>
        <ContactForm key={selectedTopic || "contact"} selectedTopic={selectedTopic} />
      </div>
    </dialog>
  );
}
