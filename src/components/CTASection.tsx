import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  onOpenContact: () => void;
}

const CTASection = ({ onOpenContact }: CTASectionProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 px-8 bg-gradient-to-b from-[#1A2233] via-gray-900 to-black relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-blue-900/10 to-gray-900/50" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className={`p-12 rounded-3xl bg-gradient-to-br from-[#0b1f3a] via-[#123a6f] to-[#0b1f3a] border border-blue-500/20 transition-all duration-700 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl mb-4">
  <span className="font-display font-light tracking-[0.01em]">
    You Ideate
  </span>{' '}
  &{' '}
  <span className="font-display font-bold tracking-[0.01em]">
    We Innovate.
  </span>
</h2>

          <p className="text-gray-300 mb-8 font-body">
            Let's discuss how we can bring your vision to life with our expertise.
          </p>
          <Button 
            size="lg"
            onClick={onOpenContact}
            className="bg-[#1A2233] text-white rounded-full font-semibold hover:bg-[#0f161f] transition-all duration-300 flex items-center justify-center gap-2 mx-auto group"
          >
            Let's Connect
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

