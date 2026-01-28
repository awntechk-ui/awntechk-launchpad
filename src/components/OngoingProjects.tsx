import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Calendar,
  Users,
  Target,
  TrendingUp,
  Clock,
  CheckCircle,
  AlertCircle,
  ExternalLink,
  Code,
  Database,
  Globe,
  Smartphone,
  Brain
} from "lucide-react";

const OngoingProjects = ({ onOpenContact }) => {
  const projects = [
    {
      id: 1,
      title: "Neaaa",
      description: "Neaaa is a smart food-tech platform that connects users with nearby places.",
      icon: Smartphone
    },
    {
      id: 2,
      title: "TripSync",
      description: "TripSync is a travel planning platform that helps users collaboratively plan trips in real time.",
      icon: Smartphone
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "completed": return "bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white";
      case "in-progress": return "bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white";
      case "testing": return "bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white";
      case "planning": return "bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white";
      default: return "bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "completed": return <CheckCircle className="w-4 h-4" />;
      case "in-progress": return <Clock className="w-4 h-4" />;
      case "testing": return <AlertCircle className="w-4 h-4" />;
      case "planning": return <Target className="w-4 h-4" />;
      default: return <Clock className="w-4 h-4" />;
    }
  };

  return (
    <section id="projects" className="py-20 px-4 bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Ongoing <span className="relative inline-block">
              <span className="relative z-10">Projects</span>
              <span className="absolute inset-0 bg-gray-900 dark:bg-white -z-10 transform -skew-x-12"></span>
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover our current projects that are pushing the boundaries of innovation 
            and delivering exceptional value to our clients.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="border-2 border-gray-200 dark:border-gray-800 hover:border-gray-900 dark:hover:border-white hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white dark:bg-black">
              <CardHeader>
                <div className="w-12 h-12 bg-gray-100 dark:bg-gray-900 border-2 border-gray-300 dark:border-gray-700 rounded-lg flex items-center justify-center mb-4 hover:scale-110 transition-transform duration-300">
                  <project.icon className="w-6 h-6 text-gray-900 dark:text-white" />
                </div>
                <CardTitle className="text-xl text-gray-900 dark:text-white">{project.title}</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-400">
                  {project.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Interested in collaborating?
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Let's discuss how we can bring your vision to life
          </p>
          <Button 
            size="lg" 
            className="bg-gray-900 text-white hover:bg-white hover:text-gray-900 border-2 border-gray-900 hover:border-gray-900 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-900 dark:hover:text-white dark:border-white dark:hover:border-white px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            onClick={() => onOpenContact('project-inquiry')}
          >
            Start Your Project
            <ExternalLink className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default OngoingProjects;
