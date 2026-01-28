import { Mail, MapPin, Phone, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 py-16 transition-colors duration-300 scroll-mt-20">
      <div className="w-full px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12 max-w-7xl mx-auto">
          {/* Brand */}
          <div>
            <div className="mb-6">
              <img 
                src="/logo.png" 
                alt="AwntechK Logo" 
                className="h-12 w-auto object-contain hover:scale-105 transition-all duration-300"
              />
            </div>

            <p className="text-gray-300 dark:text-gray-700 leading-relaxed mb-6 max-w-xs transition-colors duration-300">
              Building practical, scalable digital solutions with strong engineering and thoughtful design.
            </p>

            {/* Social Media Icons */}
            <div className="flex gap-3">
              <div className="w-10 h-10 bg-gray-800 dark:bg-gray-200 rounded-lg flex items-center justify-center hover:bg-white dark:hover:bg-gray-900 hover:scale-110 transition-all duration-300 cursor-pointer group">
                <Facebook className="w-5 h-5 text-white dark:text-gray-900 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300" />
              </div>
              <div className="w-10 h-10 bg-gray-800 dark:bg-gray-200 rounded-lg flex items-center justify-center hover:bg-white dark:hover:bg-gray-900 hover:scale-110 transition-all duration-300 cursor-pointer group">
                <Twitter className="w-5 h-5 text-white dark:text-gray-900 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300" />
              </div>
              <div className="w-10 h-10 bg-gray-800 dark:bg-gray-200 rounded-lg flex items-center justify-center hover:bg-white dark:hover:bg-gray-900 hover:scale-110 transition-all duration-300 cursor-pointer group">
                <Linkedin className="w-5 h-5 text-white dark:text-gray-900 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300" />
              </div>
              <div className="w-10 h-10 bg-gray-800 dark:bg-gray-200 rounded-lg flex items-center justify-center hover:bg-white dark:hover:bg-gray-900 hover:scale-110 transition-all duration-300 cursor-pointer group">
                <Instagram className="w-5 h-5 text-white dark:text-gray-900 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-white dark:text-gray-900 transition-colors duration-300">Quick Links</h4>
            <ul className="space-y-3">
              {["Services", "About", "Careers", "Blog"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-300 dark:text-gray-700 hover:text-white dark:hover:text-gray-900 transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-white dark:text-gray-900 transition-colors duration-300">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <Mail className="w-5 h-5 text-gray-400 dark:text-gray-600 mt-0.5 group-hover:text-white dark:group-hover:text-gray-900 transition-colors duration-300" />
                <a
                  href="mailto:hello@awntechk.com"
                  className="text-gray-300 dark:text-gray-700 hover:text-white dark:hover:text-gray-900 transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  hello@awntechk.com
                </a>
              </li>

              <li className="flex items-start gap-3 group">
                <Phone className="w-5 h-5 text-gray-400 dark:text-gray-600 mt-0.5 group-hover:text-white dark:group-hover:text-gray-900 transition-colors duration-300" />
                <a
                  href="tel:+15551234567"
                  className="text-gray-300 dark:text-gray-700 hover:text-white dark:hover:text-gray-900 transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  +1 (555) 123-4567
                </a>
              </li>

              <li className="flex items-start gap-3 group">
                <MapPin className="w-5 h-5 text-gray-400 dark:text-gray-600 mt-0.5 group-hover:text-white dark:group-hover:text-gray-900 transition-colors duration-300" />
                <span className="text-gray-300 dark:text-gray-700 transition-colors duration-300">
                  123 Tech Street<br />
                  San Francisco, CA
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t-2 border-gray-700 dark:border-4 dark:border-white flex flex-col sm:flex-row justify-between items-center gap-4 transition-colors duration-300 max-w-7xl mx-auto">
          <p className="text-gray-400 dark:text-gray-600 text-sm transition-colors duration-300">
            © {currentYear} AwnTechK. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#privacy" className="text-gray-400 dark:text-gray-600 hover:text-white dark:hover:text-gray-900 text-sm transition-all duration-300 hover:translate-y-[-2px] inline-block">
              Privacy Policy
            </a>
            <a href="#terms" className="text-gray-400 dark:text-gray-600 hover:text-white dark:hover:text-gray-900 text-sm transition-all duration-300 hover:translate-y-[-2px] inline-block">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
