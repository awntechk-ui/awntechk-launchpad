import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Code2, 
  Database, 
  Cloud, 
  Smartphone, 
  Shield, 
  Brain,
  Cpu,
  Network,
  Palette,
  BarChart3,
  Lock,
  Rocket
} from "lucide-react";

const StrongSuite = ({ onOpenContact }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const services = [
    {
      icon: Code2,
      title: "Custom Software Development",
      description: "Tailored solutions built with modern frameworks and best practices to meet your unique business needs.",
      features: (
        <div className="grid grid-cols-2 gap-3 px-4">
          <h3 className="text-xl font-semibold text-gray-800 text-center">Web Applications</h3>
          <h3 className="text-xl font-semibold text-gray-800 text-center">Mobile Apps</h3>
          <h3 className="text-xl font-semibold text-gray-800 text-center">API Development</h3>
          <h3 className="text-xl font-semibold text-gray-800 text-center">System Integration</h3>
        </div>
      )
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Intelligent solutions that leverage cutting-edge AI to automate processes and drive insights.",
      features: (
        <div className="grid grid-cols-2 gap-3 px-4">
          <h3 className="text-xl font-semibold text-gray-800 text-center">Predictive Analytics</h3>
          <h3 className="text-xl font-semibold text-gray-800 text-center">Natural Language Processing</h3>
          <h3 className="text-xl font-semibold text-gray-800 text-center">Computer Vision</h3>
          <h3 className="text-xl font-semibold text-gray-800 text-center">Automation</h3>
        </div>
      )
    },
    {
      icon: Database,
      title: "Data Engineering",
      description: "Robust data architecture and analytics solutions to transform raw data into actionable insights.",
      features: (
        <div className="grid grid-cols-2 gap-3 px-4">
          <h3 className="text-xl font-semibold text-gray-800 text-center">Data Warehousing</h3>
          <h3 className="text-xl font-semibold text-gray-800 text-center">ETL Pipelines</h3>
          <h3 className="text-xl font-semibold text-gray-800 text-center">Business Intelligence</h3>
          <h3 className="text-xl font-semibold text-gray-800 text-center">Data Visualization</h3>
        </div>
      )
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
      features: (
        <div className="grid grid-cols-2 gap-3 px-4">
          <h3 className="text-xl font-semibold text-gray-800 text-center">iOS Development</h3>
          <h3 className="text-xl font-semibold text-gray-800 text-center">Android Development</h3>
          <h3 className="text-xl font-semibold text-gray-800 text-center">React Native</h3>
          <h3 className="text-xl font-semibold text-gray-800 text-center">Flutter</h3>
        </div>
      )
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
    }, 4000); // Auto-scroll every 4 seconds

    return () => clearInterval(interval);
  }, [services.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + services.length) % services.length);
  };

  const technologies = [
    { name: "React", category: "Frontend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Node.js", category: "Backend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Python", category: "Backend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "AWS", category: "Cloud", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
    { name: "Docker", category: "DevOps", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "Kubernetes", category: "DevOps", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
    { name: "TensorFlow", category: "AI/ML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
    { name: "PostgreSQL", category: "Database", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "Supabase", category: "Database", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" },
    { name: "Flutter", category: "Mobile", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" }
  ];

  return (
    <section id="services" className="py-20 px-4 bg-blue-100 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            <span className="relative inline-block">
              <span className="relative z-10 text-gray-900">Areas of Expertise</span>
              <span className="absolute inset-0 bg-blue-600 -z-10 transform -skew-x-12"></span>
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to accelerate your digital transformation 
            and drive sustainable growth.
          </p>
        </div>

        {/* Auto-scrolling Slider */}
        <div className="relative mb-16">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {services.map((service, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Card key={index} className="border-4 border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 bg-white">
                    <CardHeader className="text-center">
                      <div className="w-16 h-16 bg-gray-100 border-4 border-gray-300 rounded-xl flex items-center justify-center mx-auto mb-6 hover:scale-110 transition-transform duration-300">
                        <service.icon className="w-8 h-8 text-gray-900" />
                      </div>
                      <CardTitle className="text-2xl text-gray-900 mb-4">{service.title}</CardTitle>
                      <CardDescription className="text-gray-600 text-lg">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      {service.features}
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index 
                    ? 'bg-gray-900 scale-125' 
                    : 'bg-gray-400 hover:bg-gray-600'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg"
            aria-label="Previous slide"
          >
            ❮
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg"
            aria-label="Next slide"
          >
            ❯
          </button>
        </div>

        <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 mb-16 transition-colors duration-300">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">TECH Infrastructure</h3>
            <p className="text-gray-600">Cutting-edge technologies that power our solutions</p>
          </div>
          
          <div className="grid grid-cols-5 gap-3 max-w-5xl mx-auto !grid-cols-5">
            {technologies.map((tech, index) => (
              <div 
                key={index}
                className="bg-white border-2 border-gray-300 px-2 py-2 rounded-lg hover:border-gray-900 hover:shadow-lg transition-all duration-300 hover:scale-105 flex flex-col items-center justify-center min-h-[80px]"
              >
                <img 
                  src={tech.logo} 
                  alt={tech.name} 
                  className="w-8 h-8 md:w-10 md:h-10 object-contain"
                  onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    const nextElement = target.nextElementSibling as HTMLElement;
                    if (nextElement) {
                      nextElement.style.display = 'block';
                    }
                  }}
                />
                <div className="text-center" style={{ display: 'none' }}>
                  <span className="font-medium text-gray-900 text-xs">{tech.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center bg-white rounded-2xl p-8 transition-colors duration-300">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to transform your business?
          </h3>
          <p className="text-gray-600 mb-8">
            Let's discuss how our strong suite can help you achieve your goals
          </p>
          <Button 
            size="lg" 
            className="bg-gray-900 text-white hover:bg-white hover:text-gray-900 border-2 border-gray-900 hover:border-gray-900 px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            onClick={() => onOpenContact('consultation')}
          >
            Schedule a Consultation
            <Rocket className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default StrongSuite;
