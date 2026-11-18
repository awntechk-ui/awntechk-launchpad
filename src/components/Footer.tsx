import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="landing-footer">
      <div className="enquiry-shell">
        <div className="landing-footer-grid">
          <div className="landing-footer-brand">
            <a href="#home" aria-label="AwnTechK home"><img src="/logo.png" alt="AwnTechK" width="152" className="enquiry-logo" /></a>
            <p>Building practical, scalable digital solutions with strong engineering and thoughtful design.</p>
          </div>
          <nav aria-label="Explore AwnTechK">
            <h2>Explore</h2>
            <ul>
              <li><a href="#about">About us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#process">How we work</a></li>
              <li><a href="#expertise">Our expertise</a></li>
            </ul>
          </nav>
          <nav aria-label="Product pages">
            <h2>Products</h2>
            <ul>
              <li><Link to="/tripsync">TripSync</Link></li>
              <li><Link to="/neaaa">Neaaa</Link></li>
            </ul>
          </nav>
          <div>
            <h2>Get in touch</h2>
            <ul>
              <li><a href="mailto:awntechk@gmail.com"><Mail size={16} aria-hidden="true" /> awntechk@gmail.com</a></li>
              <li><a href="tel:+919346013341"><Phone size={16} aria-hidden="true" /> +91 93460 13341</a></li>
              <li><a href="#hero-form">Send an enquiry <ArrowUpRight size={16} aria-hidden="true" /></a></li>
            </ul>
          </div>
        </div>
        <div className="landing-footer-bottom">
          <p>© {new Date().getFullYear()} AwnTechK. All rights reserved.</p>
          <a href="#home">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
