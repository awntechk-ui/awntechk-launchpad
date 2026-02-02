import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, Search, Heart, Truck, Star } from "lucide-react";
import FeatureCard from "@/components/FeatureCard";
import StatsSection from "@/components/StatsSection";
import HowItWorks from "@/components/HowItWorks";
import TechStackSection from "@/components/TechStackSection";

const NeaaaPage = () => {
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 100);
    window.scrollTo(0, 0);
  }, []);

  const stats = [
    { value: "8K+", label: "Happy Foodies" },
    { value: "200+", label: "Partner Places" },
    { value: "15 min", label: "Avg Delivery" },
    { value: "4.8", label: "App Rating" },
  ];

  const features = [
    {
      icon: Search,
      title: "Smart Discovery",
      desc: "Find the best food spots near you powered by AI recommendations tailored to your taste preferences and dietary needs."
    },
    {
      icon: Heart,
      title: "Personalized Picks",
      desc: "Our algorithm learns what you love. The more you use Neaaa, the better your recommendations become."
    },
    {
      icon: Truck,
      title: "Lightning Delivery",
      desc: "Order from your favorite nearby places and get doorstep delivery in minutes, not hours."
    },
    {
      icon: Star,
      title: "Community Reviews",
      desc: "Real reviews from real people. Trust the crowd and discover hidden gems in your neighborhood."
    }
  ];

  const steps = [
    { step: "01", title: "Open & Explore", desc: "Browse hundreds of nearby food spots instantly. Filter by cuisine, rating, or distance." },
    { step: "02", title: "Pick & Customize", desc: "Choose your meal, customize it to your liking, and add extras with a tap." },
    { step: "03", title: "Pay & Relax", desc: "Secure checkout in seconds. Multiple payment options, zero hassle." },
    { step: "04", title: "Enjoy!", desc: "Your food arrives fresh at your door. Rate and review to help others discover great spots." },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section with Food-themed Cover Background */}
      <section className="min-h-screen flex items-center justify-center px-5 pt-24 pb-20 relative overflow-hidden">
        {/* Food-themed cover background */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
              radial-gradient(ellipse at 30% 10%, rgba(20, 184, 166, 0.25) 0%, transparent 55%),
              radial-gradient(ellipse at 70% 80%, rgba(245, 158, 11, 0.15) 0%, transparent 50%),
              radial-gradient(ellipse at 50% 50%, rgba(16, 185, 129, 0.12) 0%, transparent 60%)
            `
          }}
        />
        {/* Animated floating elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 w-4 h-4 bg-teal-500/30 rounded-full animate-float" style={{ animationDelay: '0s' }} />
          <div className="absolute top-32 left-1/4 w-3 h-3 bg-amber-400/20 rounded-full animate-float-delayed" style={{ animationDelay: '0.5s' }} />
          <div className="absolute top-16 right-1/3 w-5 h-5 bg-emerald-500/20 rounded-full animate-float" style={{ animationDelay: '1.5s' }} />
          <div className="absolute bottom-40 left-1/5 w-4 h-4 bg-teal-400/30 rounded-full animate-float-delayed" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-20 right-20 w-6 h-6 bg-amber-500/20 rounded-full animate-float" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-10 w-3 h-3 bg-green-400/25 rounded-full animate-float-delayed" style={{ animationDelay: '2.5s' }} />
          {/* Food icons */}
          <div className="absolute top-28 left-10 text-teal-500/20 animate-float" style={{ animationDelay: '0.8s' }}>🍽️</div>
          <div className="absolute bottom-32 right-1/4 text-amber-500/20 animate-float-delayed" style={{ animationDelay: '1.3s' }}>🍕</div>
          <div className="absolute top-40 left-1/3 text-emerald-500/20 animate-float" style={{ animationDelay: '2.2s' }}>🍜</div>
          <div className="absolute bottom-20 left-20 text-teal-400/20 animate-float-delayed" style={{ animationDelay: '3.2s' }}>🍴</div>
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          {/* Back button */}
          <button 
            onClick={() => navigate('/')}
            className="text-teal-400 hover:text-teal-300 text-sm font-body flex items-center gap-2 mx-auto mb-8 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" /> Back to AwnTechK
          </button>

          {/* Badge */}
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-teal-500/25 bg-teal-500/10 text-teal-400 text-xs font-semibold tracking-wider uppercase mb-5">
            🍽️ FOOD-TECH
          </span>

          {/* Title */}
          <h1 className={`font-display text-6xl md:text-8xl font-black leading-tight mb-5 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`} style={{ transition: 'all 0.7s ease' }}>
            <span className="text-gradient-teal">Neaaa</span>
          </h1>

          {/* Description */}
          <p className={`text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8 font-body ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`} style={{ transition: 'all 0.7s ease', transitionDelay: '0.1s' }}>
            The smart food-tech platform that connects you with the best nearby places. Discover, order, and enjoy — all in one place.
          </p>

          {/* Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`} style={{ transition: 'all 0.7s ease', transitionDelay: '0.2s' }}>
            <Button 
              size="lg"
              className="bg-teal-500 text-white hover:bg-teal-600 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2 group"
              style={{ background: 'linear-gradient(135deg, #14b8a6 0%, #0d9488 100%)' }}
            >
              Download App
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="px-8 py-4 border-2 border-teal-500/50 text-teal-400 rounded-full font-semibold hover:bg-teal-500 hover:text-white transition-all duration-300"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection stats={stats} accentColor="teal" />

      {/* Features Section */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-3">
              What Makes <span className="text-gradient-teal">Neaaa</span> Special?
            </h2>
            <div className="w-16 h-1 mx-auto rounded-full bg-teal-500" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {features.map((feature, index) => (
              <FeatureCard 
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.desc}
                accentColor="teal"
              />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <HowItWorks 
        steps={steps} 
        accentColor="teal" 
        title="How It Works" 
      />

      {/* Tech Stack */}
      <TechStackSection 
        accentColor="teal"
        title="Powered By Smart Tech"
        subtitle="Advanced technologies that power our intelligent food discovery platform"
      />

      {/* CTA Section */}
      <section className="py-20 px-6" style={{ 
        background: "linear-gradient(180deg, #000000 0%, #0a0a0a 50%, #000000 100%)" 
      }}>
        <div className="max-w-4xl mx-auto">
          <div 
            className="p-12 rounded-3xl text-center"
            style={{
              background: "linear-gradient(135deg, rgba(20, 184, 166, 0.18), rgba(20, 184, 166, 0.06))"
            }}
          >
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
              Hungry? Your next favorite spot is <span className="text-gradient-teal">right here</span>.
            </h2>
            <p className="text-gray-400 font-body mb-8">
              Join thousands of foodies already enjoying the best food experiences nearby.
            </p>
            <Button 
              size="lg"
              className="text-white hover:bg-teal-600 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2 mx-auto group"
              style={{ background: 'linear-gradient(135deg, #14b8a6 0%, #0d9488 100%)' }}
            >
              Download Neaaa
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Back Navigation */}
      <div className="py-10 px-5 bg-black text-center border-t border-white/5">
        <button 
          onClick={() => navigate('/')}
          className="text-teal-400 hover:text-teal-300 text-sm font-body flex items-center gap-2 mx-auto transition-colors"
        >
          <ChevronLeft className="w-4 h-4" /> Back to AwnTechK
        </button>
      </div>
    </div>
  );
};

export default NeaaaPage;

