import React, { useState, useEffect } from "react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import { ArrowRight, Code2, Brain, Database, Smartphone } from "lucide-react";



const StrongSuite = ({ onOpenContact }) => {

  const [selectedService, setSelectedService] = useState(0);

  const [isLoaded, setIsLoaded] = useState(false);



  useEffect(() => {

    // Stagger entrance animation

    setTimeout(() => setIsLoaded(true), 100);

  }, []);



  const services = [

    {

      icon: Code2,

      title: "Custom Software Development",

      description: "Tailored solutions built with modern frameworks and best practices to meet your unique business needs.",

      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",

      features: (

        <div className="grid grid-cols-2 gap-3">

          <div className="flex items-center gap-2">

            <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>

            <span className="text-gray-300 text-sm">Web Applications</span>

          </div>

          <div className="flex items-center gap-2">

            <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>

            <span className="text-gray-300 text-sm">Mobile Apps</span>

          </div>

          <div className="flex items-center gap-2">

            <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>

            <span className="text-gray-300 text-sm">API Development</span>

          </div>

          <div className="flex items-center gap-2">

            <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>

            <span className="text-gray-300 text-sm">System Integration</span>

          </div>

        </div>

      ),

    },

    {

      icon: Brain,

      title: "AI & Machine Learning",

      description: "Intelligent solutions that leverage cutting-edge AI to automate processes and drive insights.",

      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",

      features: (

        <div className="grid grid-cols-2 gap-3">

          <div className="flex items-center gap-2">

            <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>

            <span className="text-gray-300 text-sm">Predictive Analytics</span>

          </div>

          <div className="flex items-center gap-2">

            <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>

            <span className="text-gray-300 text-sm">Natural Language Processing</span>

          </div>

          <div className="flex items-center gap-2">

            <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>

            <span className="text-gray-300 text-sm">Computer Vision</span>

          </div>

          <div className="flex items-center gap-2">

            <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>

            <span className="text-gray-300 text-sm">Automation</span>

          </div>

        </div>

      ),

    },

    {

      icon: Database,

      title: "Data Engineering",

      description: "Robust data architecture and analytics solutions to transform raw data into actionable insights.",

      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",

      features: (

        <div className="grid grid-cols-2 gap-3">

          <div className="flex items-center gap-2">

            <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>

            <span className="text-gray-300 text-sm">Data Warehousing</span>

          </div>

          <div className="flex items-center gap-2">

            <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>

            <span className="text-gray-300 text-sm">ETL Pipelines</span>

          </div>

          <div className="flex items-center gap-2">

            <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>

            <span className="text-gray-300 text-sm">Business Intelligence</span>

          </div>

          <div className="flex items-center gap-2">

            <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>

            <span className="text-gray-300 text-sm">Data Visualization</span>

          </div>

        </div>

      ),

    },

    {

      icon: Smartphone,

      title: "Mobile Development",

      description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",

      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",

      features: (

        <div className="grid grid-cols-2 gap-3">

          <div className="flex items-center gap-2">

            <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>

            <span className="text-gray-300 text-sm">iOS Development</span>

          </div>

          <div className="flex items-center gap-2">

            <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>

            <span className="text-gray-300 text-sm">Android Development</span>

          </div>

          <div className="flex items-center gap-2">

            <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>

            <span className="text-gray-300 text-sm">React Native</span>

          </div>

          <div className="flex items-center gap-2">

            <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>

            <span className="text-gray-300 text-sm">Flutter</span>

          </div>

        </div>

      ),

    },

  ];





  const technologies = [

    { name: "React", icon: "https://react.dev/favicon.ico", isImage: true },

    { name: "Node.js", icon: "https://nodejs.org/static/images/favicons/favicon.ico", isImage: true },

    { name: "Python", icon: "https://www.python.org/static/favicon.ico", isImage: true },

    { name: "AWS", icon: "https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png", isImage: true },

    { name: "Docker", icon: "https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png", isImage: true },

    { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg", isImage: true },

    { name: "TensorFlow", icon: "https://www.tensorflow.org/images/tf_logo_social.png", isImage: true },

    { name: "PostgreSQL", icon: "https://www.postgresql.org/media/img/about/press/elephant.png", isImage: true },

    { name: "Supabase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg", isImage: true },

    { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg", isImage: true },

  ];



  return (

    <>

    {/* Areas of Expertise Section */}

    <section id="services" className="py-20 px-6 bg-gray-900 relative">

      {/* Background gradients */}

      <div className="absolute inset-0 bg-gradient-to-b from-gray-800 via-gray-900/50 to-gray-900" />



      <div className="max-w-7xl mx-auto relative z-10">

        {/* Centered Title */}

        <div className={`text-center mb-12 transition-all duration-700 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4">

            Areas of <span className="text-gradient">Expertise</span>

          </h2>

        </div>



        {/* Two-Column Layout */}

        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16 transition-all duration-700 delay-200 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

          {/* LEFT COLUMN: Sub-titles with Icons */}

          <div className="flex flex-col space-y-4">

            {services.map((service, index) => (

              <button

                key={index}

                onClick={() => setSelectedService(index)}

                className={`w-full text-left p-6 rounded-xl transition-all duration-300 min-h-[100px] flex items-center ${

                  selectedService === index

                    ? 'bg-gray-800 border-2 border-blue-500 shadow-lg'

                    : 'bg-gray-900 border-2 border-gray-700 hover:bg-gray-800/70'

                }`}

              >

                <div className="flex items-center gap-4 w-full">

                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${

                    selectedService === index

                      ? 'bg-blue-500/30 scale-110'

                      : 'bg-blue-500/20'

                  }`}>

                    <service.icon className={`w-7 h-7 transition-colors ${

                      selectedService === index ? 'text-blue-400' : 'text-blue-500'

                    }`} />

                  </div>

                  <h3 className={`text-xl font-bold transition-colors flex-1 ${

                    selectedService === index ? 'text-white' : 'text-gray-300'

                  }`}>

                    {service.title}

                  </h3>

                </div>

              </button>

            ))}

          </div>



          {/* RIGHT COLUMN: Detailed Information for Selected Service */}

          <div className="flex flex-col">

            <div className="p-8 rounded-2xl bg-gray-800/50 border border-gray-700 flex flex-col items-center text-center" style={{ minHeight: 'calc(4 * 100px + 3 * 1rem + 20px)' }}>

              <div className="flex flex-col items-center gap-4 mb-6 w-full">

                <img 

                  src={services[selectedService].image}

                  alt={services[selectedService].title}

                  className="w-full h-48 object-cover rounded-xl mb-4"

                />

                <div className="flex flex-col items-center">

                  <h3 className="text-2xl font-bold mb-4">{services[selectedService].title}</h3>

                  <p className="text-gray-400 mb-6 font-body leading-relaxed">

                    {services[selectedService].description}

                  </p>

                  <div className="flex justify-center">

                    {services[selectedService].features}

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>



      </div>

    </section>



    {/* Tech Infrastructure Section */}

    <section id="tech-infrastructure" className="py-20 px-6 bg-gradient-to-br from-[#0b1f3a] via-[#123a6f] to-[#0b1f3a] relative">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_60%)]" />

      

      <div className="max-w-7xl mx-auto relative z-10">

        <div className={`text-center mb-12 transition-all duration-700 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4">

            <span className="gradient-text">Tech</span> Infrastructure

          </h2>

          <p className="text-gray-400 text-lg">Cutting-edge technologies that power our solutions</p>

        </div>



        <div className={`grid gap-4 transition-all duration-700 delay-300 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ gridTemplateColumns: 'repeat(5, 1fr)' }}>
          {technologies.map((tech, index) => (
            <div key={index} className="p-4 rounded-xl card-gradient flex flex-col items-center">
              <div className="text-3xl mb-2">
                {tech.isImage ? (
                  <img src={tech.icon} alt={tech.name} className="w-8 h-8 object-contain" />
                ) : (
                  tech.icon
                )}
              </div>
              <div className="text-sm font-semibold text-gray-300">{tech.name}</div>
            </div>
          ))}
        </div>

      </div>

    </section>

    </>

  );

};



// Helper function for scrollToSection

function scrollToSection(sectionId) {

  const element = document.getElementById(sectionId);

  if (element) {

    element.scrollIntoView({ behavior: 'smooth' });

  }

}



export default StrongSuite;



