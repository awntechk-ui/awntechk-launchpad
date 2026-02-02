import React, { useEffect, useState } from "react";

interface StatItem {
  value: string;
  label: string;
}

interface StatsSectionProps {
  stats: StatItem[];
  accentColor?: "blue" | "teal";
}

const StatsSection = ({ stats, accentColor = "blue" }: StatsSectionProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const isTeal = accentColor === "teal";

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  return (
    <section className="py-16 px-6" style={{ 
      background: "linear-gradient(180deg, #000000 0%, #0a0a0a 50%, #000000 100%)" 
    }}>
      <div className="max-w-5xl mx-auto">
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-5 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`} style={{ transition: 'all 0.7s ease' }}>
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`p-6 rounded-2xl text-center hover-lift ${
                isTeal 
                  ? "border border-teal-500/20 bg-gradient-to-br from-teal-500/10 to-teal-500/5" 
                  : "card-gradient"
              }`}
            >
              <div className={`font-display text-3xl font-black mb-1 ${
                isTeal ? "text-gradient-teal" : "gradient-text"
              }`}>
                {stat.value}
              </div>
              <div className="text-gray-500 text-xs font-body uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

