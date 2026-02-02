import React from "react";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  accentColor?: "blue" | "teal";
}

const FeatureCard = ({ icon: Icon, title, description, accentColor = "blue" }: FeatureCardProps) => {
  const isTeal = accentColor === "teal";
  
  return (
    <div className={`p-7 rounded-2xl hover-lift group ${
      isTeal 
        ? "border border-teal-500/20 bg-gradient-to-br from-teal-500/10 to-teal-500/5" 
        : "card-gradient"
    }`}>
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors ${
        isTeal 
          ? "bg-teal-500/20 group-hover:bg-teal-500/30" 
          : "bg-blue-500/20 group-hover:bg-blue-500/30"
      }`}>
        <Icon className={`w-6 h-6 ${isTeal ? "text-teal-400" : "text-blue-400"}`} />
      </div>
      <h3 className="font-display text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-500 text-sm font-body">{description}</p>
    </div>
  );
};

export default FeatureCard;

