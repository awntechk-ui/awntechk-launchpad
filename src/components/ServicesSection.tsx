import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Brain, Layers, Wrench } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Application Development",
    description:
      "Custom web and mobile applications built with modern frameworks, designed for performance and user experience.",
  },
  {
    icon: Brain,
    title: "AI-Enabled Solutions",
    description:
      "Intelligent automation and machine learning integrations that transform data into actionable insights.",
  },
  {
    icon: Layers,
    title: "Scalable Software Systems",
    description:
      "Robust architectures that grow with your business, from startup MVPs to enterprise-grade platforms.",
  },
  {
    icon: Wrench,
    title: "Product Engineering & Support",
    description:
      "End-to-end product lifecycle management with continuous improvement and dedicated support.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 lg:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-subtle" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/3 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 opacity-0 animate-fade-in" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What We <span className="text-gradient">Do</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We offer focused services that help teams build, scale, and maintain
            reliable digital products. Every solution is designed with clarity,
            usability, and long-term growth in mind.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card
              key={service.title}
              variant="elevated"
              className="group opacity-0 animate-scale-in"
              style={{ animationDelay: `${0.2 + index * 0.1}s`, animationFillMode: "forwards" }}
            >
              <CardHeader className="pb-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center mb-4 shadow-custom-sm group-hover:shadow-custom-md transition-shadow duration-300">
                  <service.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl md:text-2xl group-hover:text-gradient transition-all duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
