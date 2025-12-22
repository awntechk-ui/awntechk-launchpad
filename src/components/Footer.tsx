import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <span className="text-xl font-bold">
                Awntech<span className="text-primary-foreground opacity-70">K</span>
              </span>
            </div>
            <p className="text-white/60 max-w-sm leading-relaxed mb-6">
              Building practical, scalable digital solutions with strong
              engineering and thoughtful design.
            </p>
            <div className="flex gap-4">
              {["twitter", "linkedin", "github"].map((social) => (
                <a
                  key={social}
                  href={`#${social}`}
                  className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-200"
                  aria-label={social}
                >
                  <div className="w-5 h-5 rounded bg-white/30" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {["Services", "About", "Careers", "Blog"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-white/60 hover:text-white transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-white/40 mt-0.5" />
                <span className="text-white/60">hello@awntechk.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-white/40 mt-0.5" />
                <span className="text-white/60">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-white/40 mt-0.5" />
                <span className="text-white/60">
                  123 Tech Street
                  <br />
                  San Francisco, CA
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © {currentYear} AwntechK. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#privacy" className="text-white/40 hover:text-white/60 text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="text-white/40 hover:text-white/60 text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
