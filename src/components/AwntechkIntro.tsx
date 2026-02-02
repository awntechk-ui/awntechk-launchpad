import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Shield, Globe } from "lucide-react";

const AwntechkIntro = ({ onOpenContact }) => {
  return (
    // CHANGED: Background to Royal Blue Gradient so Header (white text) is visible
    <section id="about" className="py-20 px-4 bg-gradient-to-br from-[#0B2447] via-[#19376D] to-[#0B2447] transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          {/* UPDATED: Colors for dark background */}
          <div className="inline-flex items-center gap-2 border-2 border-blue-400/30 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full mb-8 hover:shadow-lg transition-all duration-300 hover:scale-105 glitter-bg sparkle">
            <Zap className="w-5 h-5 animate-pulse text-blue-200" />
            <span className="text-sm font-semibold tracking-wide text-white">Innovation Meets Excellence</span>
          </div>
          
          {/* UPDATED: Text to White */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight transition-colors duration-300">
            <span className="inline-block mt-2 relative">
              <span className="relative z-10 px-4"> Welcome to AwnTechK</span>
              <span className="absolute inset-0 bg-blue-500/20 -z-10 transform -skew-x-12 transition-transform duration-300 hover:skew-x-6"></span>
            </span>
          </h1>
          
          {/* UPDATED: Text to Light Blue/White */}
          <p className="text-xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed transition-colors duration-300">
            We design and develop modern applications and AI-enabled solutions that help ideas grow into reliable, real-world products.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              variant="outline" 
              size="lg"
              // UPDATED: Button styles for Blue background
              className="border-2 border-transparent bg-white text-[#0B2447] hover:bg-blue-50 px-10 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              asChild
            >
              <a href="#projects">Learn More</a>
            </Button>
          </div>

          {/* Feature highlights REMOVED (Screenshot 4 request) */}
        </div>
      </div>
    </section>
  );
};

export default AwntechkIntro;