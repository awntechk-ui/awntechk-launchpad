import React, { useEffect, useState } from "react";

interface TechStackSectionProps {
  accentColor?: "blue" | "teal";
  title?: string;
  subtitle?: string;
}

const defaultTechs = [
  { name: "React", icon: "⚛️" },
  { name: "Node.js", icon: "🟢" },
  { name: "Python", icon: "🐍" },
  { name: "AWS", icon: "☁️" },
  { name: "Docker", icon: "🐳" },
  { name: "Kubernetes", icon: "☸️" },
  { name: "TensorFlow", icon: "🧠" },
  { name: "PostgreSQL", icon: "🐘" },
];

const TechStackSection = ({ 
  accentColor = "blue",
  title = "Built With Modern Tech",
  subtitle = "Cutting-edge technologies that power our solutions"
}: TechStackSectionProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const isTeal = accentColor === "teal";

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  const accentClass = isTeal ? "text-teal-400" : "text-blue-400";
  const borderClass = isTeal ? "border-teal-500/25" : "border-blue-500/25";
  const bgClass = isTeal ? "bg-teal-500/8" : "bg-blue-500/8";
  const hoverBgClass = isTeal ? "hover:bg-teal-500/15" : "hover:bg-blue-500/15";

  return (
    <section className="py-20 px-6 bg-black">
      <div className="max-w-5xl mx-auto">
        <div className={`text-center mb-14 transition-all duration-700 transform ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="font-display text-5xl font-bold mb-3">
            {title.split(' ').map((word, i) => {
              const keyWord = word.toLowerCase();
              const isHighlighted = keyWord.includes('tech') || keyWord.includes('modern');
              return (
                <span key={i} className={isHighlighted ? `gradient-text ${isTeal ? 'text-teal-400' : ''}` : ''}>
                  {word}{' '}
                </span>
              );
            })}
          </h2>
          <p className="text-gray-500 font-body">{subtitle}</p>
        </div>

        <div className={`flex flex-wrap justify-center gap-3 transition-all duration-700 delay-200 transform ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {defaultTechs.map((tech, index) => (
            <span 
              key={index}
              className={`px-5 py-2 rounded-full border ${borderClass} ${bgClass} ${accentClass} text-sm font-body font-medium ${hoverBgClass} transition-colors cursor-default tech-icon`}
            >
              {tech.icon} {tech.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;

