import React from "react";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const ExtraInformation = ({ onOpenContact }) => {
  return (
    <footer id="contact" className="bg-[#214E5A] text-white py-12 px-6 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-start justify-start text-left space-y-12">
          
          {/* Description */}
          <div className="max-w-2xl">
            <p className="text-gray-300 text-sm leading-relaxed">
              Building practical, scalable digital solutions with strong engineering and thoughtful design.
            </p>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col items-start">
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <div className="space-y-4 text-left">
              <div className="flex items-center justify-start gap-3">
                <Mail className="w-4 h-4 text-gray-400 flex-shrink-0" />
                <a href="mailto:awntechk@gmail.com" className="text-gray-300 hover:text-white transition-colors text-sm">
                  awntechk@gmail.com
                </a>
              </div>
              <div className="flex items-center justify-start gap-3">
                <Phone className="w-4 h-4 text-gray-400 flex-shrink-0" />
                <a href="tel:+919346013341" className="text-gray-300 hover:text-white transition-colors text-sm">
                  +91 93460 13341
                </a>
              </div>
              <div className="flex items-center justify-start gap-3">
                <MapPin className="w-4 h-4 text-gray-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  Malakpet, Hyderabad - 500001
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-600">
          <div className="flex flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-0">
              © 2026 AwntechK. All rights reserved.
            </div>
            <div className="flex gap-6">
              <a className="text-gray-400 hover:text-white transition-colors text-sm">
                Privacy Policy
              </a>
              <a className="text-gray-400 hover:text-white transition-colors text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ExtraInformation;
