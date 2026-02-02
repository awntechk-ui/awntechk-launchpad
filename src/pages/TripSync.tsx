import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, Users, Map, Navigation, Calendar } from "lucide-react";
import FeatureCard from "@/components/FeatureCard";
import StatsSection from "@/components/StatsSection";
import HowItWorks from "@/components/HowItWorks";
import TechStackSection from "@/components/TechStackSection";

const TripSyncPage = () => {
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 100);
    window.scrollTo(0, 0);
  }, []);

  const stats = [
    { value: "12K+", label: "Active Travelers" },
    { value: "340+", label: "Cities Covered" },
    { value: "98%", label: "Satisfaction" },
    { value: "4.9", label: "App Rating" },
  ];

  const features = [
    {
      icon: Users,
      title: "Real-Time Collaboration",
      desc: "Plan trips together with friends and family simultaneously. Everyone stays in the loop — no missed updates, no confusion."
    },
    {
      icon: Map,
      title: "Smart Itinerary Builder",
      desc: "AI-powered suggestions based on your interests, budget, and travel dates to craft the perfect itinerary automatically."
    },
    {
      icon: Navigation,
      title: "Live Route Tracking",
      desc: "Track your journey in real time with interactive maps and turn-by-turn navigation built right in."
    },
    {
      icon: Calendar,
      title: "Trip Timeline",
      desc: "Visualize your entire trip on a sleek timeline. Drag, drop, and reorder activities with ease."
    }
  ];

  const steps = [
    { step: "01", title: "Create a Trip", desc: "Start a new trip, set your destination, dates, and budget in seconds." },
    { step: "02", title: "Invite Your Group", desc: "Share a link with your travel companions. Everyone joins instantly." },
    { step: "03", title: "Build Together", desc: "Collaboratively add activities, hotels, and flights to your shared itinerary." },
    { step: "04", title: "Hit the Road", desc: "Export your plan, follow live navigation, and enjoy every moment." },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section with Cover Background */}
      <section className="min-h-screen flex items-center justify-center px-5 pt-24 pb-20 relative overflow-hidden">
        {/* Travel-themed cover background */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
              radial-gradient(ellipse at 20% 30%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
              radial-gradient(ellipse at 80% 70%, rgba(20, 184, 166, 0.2) 0%, transparent 50%),
              radial-gradient(ellipse at 50% 50%, rgba(37, 99, 235, 0.15) 0%, transparent 60%)
            `
          }}
        />
        {/* Animated floating elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-4 h-4 bg-blue-500/30 rounded-full animate-float" style={{ animationDelay: '0s' }} />
          <div className="absolute top-32 left-1/4 w-3 h-3 bg-cyan-400/20 rounded-full animate-float-delayed" style={{ animationDelay: '1s' }} />
          <div className="absolute top-16 right-1/3 w-5 h-5 bg-blue-400/20 rounded-full animate-float" style={{ animationDelay: '2s' }} />
          <div className="absolute bottom-40 left-1/5 w-4 h-4 bg-teal-500/30 rounded-full animate-float-delayed" style={{ animationDelay: '0.5s' }} />
          <div className="absolute bottom-20 right-20 w-6 h-6 bg-blue-500/20 rounded-full animate-float" style={{ animationDelay: '1.5s' }} />
          <div className="absolute top-1/2 right-10 w-3 h-3 bg-cyan-400/25 rounded-full animate-float-delayed" style={{ animationDelay: '3s' }} />
          {/* Location pin icons */}
          <div className="absolute top-28 right-1/4 text-blue-500/20 animate-float" style={{ animationDelay: '0.8s' }}>📍</div>
          <div className="absolute bottom-32 left-1/3 text-teal-500/20 animate-float-delayed" style={{ animationDelay: '1.2s' }}>✈️</div>
          <div className="absolute top-40 right-20 text-blue-400/20 animate-float" style={{ animationDelay: '2.2s' }}>🗺️</div>
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          {/* Back button */}
          <button 
            onClick={() => navigate('/')}
            className="text-blue-400 hover:text-blue-300 text-sm font-body flex items-center gap-2 mx-auto mb-8 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" /> Back to AwnTechK
          </button>

          {/* Badge */}
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/25 bg-blue-500/10 text-blue-400 text-xs font-semibold tracking-wider uppercase mb-5">
            🗺️ TRAVEL PLANNING
          </span>

          {/* Title */}
          <h1 className={`font-display text-6xl md:text-8xl font-black leading-tight mb-5 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`} style={{ transition: 'all 0.7s ease' }}>
            <span className="gradient-text">TripSync</span>
          </h1>

          {/* Description */}
          <p className={`text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8 font-body ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`} style={{ transition: 'all 0.7s ease', transitionDelay: '0.1s' }}>
            The collaborative travel planning platform that brings your group together — plan trips in real time, from anywhere in the world.
          </p>

          {/* Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`} style={{ transition: 'all 0.7s ease', transitionDelay: '0.2s' }}>
            <Button 
              size="lg"
              className="bg-blue-500 text-white hover:bg-blue-600 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              Get Started Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="px-8 py-4 border-2 border-blue-500/50 text-blue-400 rounded-full font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300"
            >
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection stats={stats} accentColor="blue" />

      {/* Features Section */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-3">
              Why <span className="gradient-text">TripSync</span>?
            </h2>
            <div className="w-16 h-1 mx-auto rounded-full bg-blue-500" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {features.map((feature, index) => (
              <FeatureCard 
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.desc}
                accentColor="blue"
              />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <HowItWorks 
        steps={steps} 
        accentColor="blue" 
        title="How It Works" 
      />

      {/* Tech Stack */}
      <TechStackSection 
        accentColor="blue"
        title="Built With Modern Tech"
        subtitle="Cutting-edge technologies that power our collaborative travel platform"
      />

      {/* CTA Section */}
      <section className="py-20 px-6" style={{ 
        background: "linear-gradient(180deg, #000000 0%, #0a0a0a 50%, #000000 100%)" 
      }}>
        <div className="max-w-4xl mx-auto">
          <div 
            className="p-12 rounded-3xl text-center"
            style={{
              background: "linear-gradient(135deg, rgba(59, 130, 246, 0.18), rgba(37, 99, 235, 0.06))"
            }}
          >
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
              Ready to plan your next <span className="gradient-text">adventure</span>?
            </h2>
            <p className="text-gray-400 font-body mb-8">
              Join thousands of travelers already using TripSync to plan unforgettable trips together.
            </p>
            <Button 
              size="lg"
              className="bg-blue-500 text-white hover:bg-blue-600 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2 mx-auto group"
            >
              Start Planning Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Back Navigation */}
      <div className="py-10 px-5 bg-black text-center border-t border-white/5">
        <button 
          onClick={() => navigate('/')}
          className="text-blue-400 hover:text-blue-300 text-sm font-body flex items-center gap-2 mx-auto transition-colors"
        >
          <ChevronLeft className="w-4 h-4" /> Back to AwnTechK
        </button>
      </div>
    </div>
  );
};

export default TripSyncPage;

