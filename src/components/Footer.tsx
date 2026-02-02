import React from "react";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-black text-white py-8 overflow-hidden relative">
      
      {/* Decorative Gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-900 rounded-full blur-[128px] opacity-20 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-900 rounded-full blur-[128px] opacity-20 pointer-events-none" />
      
      <div className="mx-auto px-6 relative z-10 w-full">

        {/* Main Footer Content - Centered Single Column */}
        <div className="flex flex-col items-center text-center gap-8 mb-8 pb-6 border-b border-white/10 w-full">

          {/* TOP SECTION: Logo + Description */}
          <div className="flex flex-col items-center space-y-4 max-w-2xl">
            <div className="flex items-center mb-2">
              <img 
                src="/logo.png" 
                alt="Awntechk" 
                className="h-16 w-auto object-contain" 
              />
            </div>
            
            <p className="text-gray-400 text-sm leading-snug px-4">
              Building practical, scalable digital solutions with strong engineering and thoughtful design. We turn complex problems into elegant software.
            </p>
          </div>

          {/* BOTTOM SECTION: Contact Logos Only */}
          <div className="flex items-center justify-center gap-6">
            <a href="mailto:awntechk@gmail.com" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors group">
              <div className="p-2 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors">
                <Mail className="w-4 h-4" />
              </div>
            </a>
            <a href="tel:+919346013341" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors group">
              <div className="p-2 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors">
                <Phone className="w-4 h-4" />
              </div>
            </a>
            <div className="flex items-center gap-2 text-gray-300">
              <div className="p-2 bg-white/10 rounded-lg">
                <MapPin className="w-4 h-4" />
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-row justify-center items-center gap-4 text-xs text-gray-500">
          <p>© {currentYear} Awntechk. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;