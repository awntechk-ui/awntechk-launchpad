import { ArrowUpRight } from "lucide-react";

export default function Header() {
  return (
    <header className="enquiry-header">
      <div className="enquiry-shell enquiry-header-inner">
        <a href="#home" aria-label="AwnTechK home">
          <img src="/logo.png" alt="AwnTechK" width="152" className="enquiry-logo" />
        </a>
        <nav aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#process">Process</a>
          <a href="#projects">Products</a>
        </nav>
        <a className="enquiry-button enquiry-header-cta" href="#contact">
          Contact <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </div>
    </header>
  );
}
