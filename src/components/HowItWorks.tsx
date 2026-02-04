import React, { useEffect, useState } from "react";

interface StepItem {
  step: string;
  title: string;
  desc: string;
}

interface HowItWorksProps {
  steps: StepItem[];
  accentColor?: "blue" | "teal";
  title?: string;
}

const HowItWorks = ({ steps, accentColor = "blue", title = "How It Works" }: HowItWorksProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const isTeal = accentColor === "teal";

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  const accentClass = isTeal ? "text-teal-400" : "text-blue-400";
  const bgClass = isTeal ? "bg-teal-500" : "bg-blue-500";
  const borderClass = isTeal ? "border-teal-500/20" : "border-blue-500/20";

  return (
    <section className="py-20 px-6" style={{ 
      background: "linear-gradient(180deg, #000000 0%, #0a0a0a 50%, #000000 100%)" 
    }}>
      <div className="max-w-5xl mx-auto">
        <div className={`text-center mb-14 transition-all duration-700 transform ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="font-display text-5xl font-bold mb-3">
            {title.split(' ').map((word, i) => (
              <span key={i} className={i === title.split(' ').length - 1 ? `gradient-text ${isTeal ? 'text-teal-400' : ''}` : ''}>
                {word}{' '}
              </span>
            ))}
          </h2>
          <div className={`w-16 h-1 mx-auto rounded-full ${bgClass}`} />
        </div>

        <div className={`grid grid-cols-4 gap-5 transition-all duration-700 delay-200 transform ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {steps.map((item, index) => (
            <div 
              key={index} 
              className={`p-6 rounded-2xl hover-lift relative pt-8 ${isTeal 
                ? "border border-teal-500/20 bg-gradient-to-br from-teal-500/10 to-teal-500/5" 
                : "card-gradient"
              }`}
            >
              <div className={`absolute -top-3 left-6`}>
                <span className={`px-3 py-1 rounded-full ${bgClass} text-white text-xs font-bold font-body`}>
                  {item.step}
                </span>
              </div>
              <h3 className="font-display text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm font-body">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

