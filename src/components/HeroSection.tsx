import { ArrowDown } from "lucide-react";
import ContactForm from "./ContactForm";

export default function HeroSection() {
  return (
    <section className="enquiry-hero" aria-labelledby="hero-heading">
      <div className="enquiry-shell enquiry-hero-inner">
        <div className="enquiry-hero-copy">
          <p className="enquiry-eyebrow">Innovation Meets Excellence</p>
          <h1 id="hero-heading">
            We Build Digital<br />
            Future-Proof<br />
            <span>Products.</span>
          </h1>
          <p className="enquiry-hero-description">
            We design and develop modern applications and AI-enabled solutions
            that transform complex ideas into reliable, scalable reality.
          </p>
          <a href="#services" className="enquiry-services-link">
            Explore our services <ArrowDown size={17} aria-hidden="true" />
          </a>
        </div>
        <section id="hero-form" className="enquiry-card" aria-labelledby="enquiry-heading">
          <h2 id="enquiry-heading">Let’s build something great</h2>
          <p>Tell us about your idea and we'll help you design, build, and scale it.</p>
          <ContactForm />
        </section>
      </div>
    </section>
  );
}
