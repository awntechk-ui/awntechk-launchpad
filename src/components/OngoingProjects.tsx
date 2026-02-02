import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ExternalLink,
  CheckCircle,
  Clock,
  Target,
  MapPin,
  Utensils,
} from "lucide-react";

const OngoingProjects = ({ onOpenContact }) => {
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  const projects = [
    {
      id: "tripsync",
      title: "TripSync",
      description: "TripSync is a travel planning platform that helps users collaboratively plan trips in real time.",
      icon: MapPin,
      status: "in-progress",
      statusLabel: "In Progress",
      accent: "blue",
      tags: ["Travel Tech", "Real-Time", "Collaboration"]
    },
    {
      id: "neaaa",
      title: "Neaaa",
      description: "Neaaa is a smart food-tech platform that connects users with nearby places.",
      icon: Utensils,
      status: "planning",
      statusLabel: "Planning",
      accent: "teal",
      tags: ["Food Tech", "AI-Powered", "Discovery"]
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "completed":
        return "bg-gradient-to-r from-green-500 to-emerald-500";
      case "in-progress":
        return "bg-gradient-to-r from-blue-500 to-cyan-500";
      case "testing":
        return "bg-gradient-to-r from-yellow-500 to-orange-500";
      case "planning":
        return "bg-gradient-to-r from-purple-500 to-pink-500";
      default:
        return "bg-gradient-to-r from-gray-500 to-gray-600";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-4 h-4" />;
      case "in-progress":
        return <Clock className="w-4 h-4" />;
      case "testing":
        return <Clock className="w-4 h-4" />;
      case "planning":
        return <Target className="w-4 h-4" />;
      default:
        return <Clock className="w-4 h-4" />;
    }
  };

  const isTeal = (accent) => accent === "teal";

  return (
    <section id="projects" className="py-20 px-6 bg-black relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/30 to-black" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-700 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Ongoing <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 font-body max-w-2xl mx-auto">
            Discover our current projects that are pushing the boundaries of innovation and delivering exceptional value.
          </p>
        </div>

        {/* Projects Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 transition-all duration-700 delay-200 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className={`group relative overflow-hidden rounded-2xl bg-gray-800 border border-gray-700 hover:border-blue-500 transition-colors duration-300`}
            >
              <div className="p-8">
                <div className="flex items-start mb-4">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                    isTeal(project.accent) ? "bg-teal-500/20" : "bg-blue-500/20"
                  }`}>
                    <project.icon className={`w-7 h-7 ${isTeal(project.accent) ? "text-teal-400" : "text-blue-400"}`} />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-400 font-body mb-5">{project.description}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className={`text-xs px-3 py-1 rounded-full ${
                        isTeal(project.accent) 
                          ? "bg-teal-500/15 text-teal-400 border border-teal-500/20" 
                          : "bg-blue-500/15 text-blue-400 border border-blue-500/20"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OngoingProjects;

