import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Shield, Globe } from "lucide-react";

const AwntechkIntro = ({ onOpenContact }) => {
  return (
    <section id="about" className="py-20 px-4 bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 border-2 border-gray-900 dark:border-4 dark:border-white text-gray-900 dark:text-white px-6 py-3 rounded-full mb-8 hover:shadow-lg transition-all duration-300 hover:scale-105 glitter-bg sparkle">
            <Zap className="w-5 h-5 animate-pulse" />
            <span className="text-sm font-semibold tracking-wide">Innovation Meets Excellence</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-8 leading-tight transition-colors duration-300">
            <span className="inline-block mt-2 relative">
              <span className="relative z-10 bg-white dark:bg-black px-4"> Welcome to AwntechK</span>
              <span className="absolute inset-0 bg-gray-900 dark:bg-white -z-10 transform -skew-x-12 transition-transform duration-300 hover:skew-x-6"></span>
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed transition-colors duration-300">
            We design and develop modern applications and AI-enabled solutions that help ideas grow into reliable, real-world products.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-gray-900 px-10 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              asChild
            >
              <a href="#projects">Learn More</a>
            </Button>
          </div>

          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            <div className="group p-6 border-2 border-gray-200 dark:border-4 dark:border-white rounded-lg hover:border-gray-900 dark:hover:border-white transition-all duration-300 hover:shadow-lg hover:-translate-y-2 glitter-border">
              <Shield className="w-8 h-8 text-gray-900 dark:text-white mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Secure & Reliable</h3>
              <p className="text-gray-600 dark:text-gray-400">Enterprise-grade security and reliability for your peace of mind</p>
            </div>
            <div className="group p-6 border-2 border-gray-200 dark:border-4 dark:border-white rounded-lg hover:border-gray-900 dark:hover:border-white transition-all duration-300 hover:shadow-lg hover:-translate-y-2 glitter-border">
              <Globe className="w-8 h-8 text-gray-900 dark:text-white mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Global Scale</h3>
              <p className="text-gray-600 dark:text-gray-400">Built to scale globally with performance and efficiency</p>
            </div>
            <div className="group p-6 border-2 border-gray-200 dark:border-4 dark:border-white rounded-lg hover:border-gray-900 dark:hover:border-white transition-all duration-300 hover:shadow-lg hover:-translate-y-2 glitter-border">
              <Zap className="w-8 h-8 text-gray-900 dark:text-white mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Lightning Fast</h3>
              <p className="text-gray-600 dark:text-gray-400">Optimized for speed and performance across all platforms</p>
            </div>
            <div className="group p-6 border-2 border-gray-200 dark:border-4 dark:border-white rounded-lg hover:border-gray-900 dark:hover:border-white transition-all duration-300 hover:shadow-lg hover:-translate-y-2 glitter-border">
              <Globe className="w-8 h-8 text-gray-900 dark:text-white mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Motive</h3>
              <p className="text-gray-600 dark:text-gray-400">Accepts the innovative challenges with confidence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwntechkIntro;
