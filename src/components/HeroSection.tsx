import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Shield, Globe } from "lucide-react";

type HeroSectionProps = {
  onOpenContact: (topic?: string) => void;
};

const HeroSection = ({ onOpenContact }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20 bg-white dark:bg-black transition-colors duration-300">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 border-4 border-gray-900 dark:border-white rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 border-4 border-gray-900 dark:border-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 border-4 border-gray-900 dark:border-white rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border-2 border-gray-900 dark:border-white hover:shadow-lg transition-all duration-300 hover:scale-105">
              <Zap className="w-5 h-5 text-gray-900 dark:text-white animate-pulse" />
              <span className="text-sm font-bold text-gray-900 dark:text-white">
                Technology Partner for Growth
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight text-gray-900 dark:text-white">
              Building Smart,{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Scalable</span>
                <span className="absolute inset-0 bg-gray-900 dark:bg-white -z-10 transform -skew-x-12 transition-transform duration-300 hover:skew-x-6"></span>
              </span>{" "}
              <br />Digital Solutions
            </h1>

            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-xl leading-relaxed">
              We design and develop modern applications and AI-enabled solutions
              that help ideas grow into reliable, real-world products.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <Button
                className="bg-gray-900 text-white hover:bg-white hover:text-gray-900 border-2 border-gray-900 hover:border-gray-900 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-900 dark:hover:text-white dark:border-white dark:hover:border-white px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                onClick={() => onOpenContact("Support Request")}
              >
                Contact Us
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-gray-900 px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                Learn More
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-8 pt-8 border-t-2 border-gray-200 dark:border-gray-800">
              <div className="text-center group cursor-pointer">
                <div className="text-3xl font-bold text-gray-900 dark:text-white group-hover:scale-110 transition-transform duration-300">50+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Projects Delivered
                </div>
              </div>
              <div className="w-px h-12 bg-gray-300 dark:bg-gray-700"></div>
              <div className="text-center group cursor-pointer">
                <div className="text-3xl font-bold text-gray-900 dark:text-white group-hover:scale-110 transition-transform duration-300">99%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Client Satisfaction
                </div>
              </div>
              <div className="w-px h-12 bg-gray-300 dark:bg-gray-700 hidden sm:block"></div>
              <div className="text-center hidden sm:block group cursor-pointer">
                <div className="text-3xl font-bold text-gray-900 dark:text-white group-hover:scale-110 transition-transform duration-300">24/7</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Support Available
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual Elements */}
          <div className="relative">
            {/* Floating elements */}
            <div className="absolute -top-8 -left-8 w-24 h-24 rounded-2xl border-2 border-gray-900 dark:border-white shadow-lg animate-float flex items-center justify-center bg-white dark:bg-black hover:scale-110 transition-transform duration-300">
              <Shield className="w-12 h-12 text-gray-900 dark:text-white" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-2xl border-2 border-gray-900 dark:border-white shadow-lg animate-float-delayed flex items-center justify-center bg-white dark:bg-black hover:scale-110 transition-transform duration-300">
              <Globe className="w-8 h-8 text-gray-900 dark:text-white" />
            </div>

            {/* Main visual card */}
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-2 border-gray-900 dark:border-white bg-white dark:bg-black p-8 hover:scale-105 transition-transform duration-300">
              <div className="space-y-6">
                <div className="w-full h-48 bg-gray-100 dark:bg-gray-900 rounded-xl border-2 border-gray-200 dark:border-gray-800 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gray-900 dark:bg-white rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <Zap className="w-8 h-8 text-white dark:text-gray-900" />
                    </div>
                    <p className="text-gray-900 dark:text-white font-semibold">AI Solutions</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="h-24 bg-gray-100 dark:bg-gray-900 rounded-lg border-2 border-gray-200 dark:border-gray-800 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-300">
                    <span className="text-sm font-medium text-gray-900 dark:text-white">Web Apps</span>
                  </div>
                  <div className="h-24 bg-gray-100 dark:bg-gray-900 rounded-lg border-2 border-gray-200 dark:border-gray-800 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-300">
                    <span className="text-sm font-medium text-gray-900 dark:text-white">Mobile</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;