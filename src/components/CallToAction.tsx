import React from "react";
import { Mail, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CallToAction = ({ onOpenContact }) => {
  const currentYear = new Date().getFullYear();

  return (
    <section className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 py-20 px-4 transition-colors duration-300">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-8">
          Ready to start your journey?
        </h2>
        
        <p className="text-xl mb-12 text-gray-300 dark:text-gray-700 max-w-2xl mx-auto">
          Building practical, scalable digital solutions with strong engineering and thoughtful design.
        </p>

        <div className="flex flex-row gap-6 justify-center items-center mb-12">
          <div className="flex items-center gap-3 group">
            <Mail className="w-5 h-5 text-gray-400 dark:text-gray-600 group-hover:text-white dark:group-hover:text-gray-900 transition-colors duration-300" />
            <a 
              href="mailto:awntechk@gmail.com" 
              className="text-gray-300 dark:text-gray-700 hover:text-white dark:hover:text-gray-900 transition-colors duration-300"
            >
              awntechk@gmail.com
            </a>
          </div>
          
          <div className="flex items-center gap-3 group">
            <Phone className="w-5 h-5 text-gray-400 dark:text-gray-600 group-hover:text-white dark:group-hover:text-gray-900 transition-colors duration-300" />
            <a 
              href="tel:+919346013341" 
              className="text-gray-300 dark:text-gray-700 hover:text-white dark:hover:text-gray-900 transition-colors duration-300"
            >
              +91 93460 13341
            </a>
          </div>
        </div>

        <Button 
          size="lg" 
          className="bg-blue-500 text-white hover:bg-blue-600 border-2 border-blue-500 hover:border-blue-600 px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          onClick={() => onOpenContact('project-inquiry')}
        >
          Start Your Project
          <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
        </Button>

        <div className="mt-16 pt-8 border-t border-gray-700 dark:border-gray-300">
          <p className="text-gray-400 dark:text-gray-600 text-sm">
            © {currentYear} AwntechK. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
