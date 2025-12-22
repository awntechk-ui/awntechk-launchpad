import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const CTASection = () => {
  return (
    <section id="contact" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-primary opacity-95" />
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-4 h-4 rounded-full bg-white/20 animate-pulse-soft" />
      <div className="absolute top-20 right-20 w-3 h-3 rounded-full bg-white/30 animate-float" />
      <div className="absolute bottom-20 left-1/4 w-2 h-2 rounded-full bg-white/25 animate-float-delayed" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center opacity-0 animate-fade-in" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm mb-8">
            <Sparkles className="w-4 h-4 text-white" />
            <span className="text-sm font-medium text-white/90">
              Ready to start your project?
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Have a project in mind?
            <br />
            Let's build something{" "}
            <span className="relative">
              meaningful
              <span className="absolute bottom-1 left-0 right-0 h-3 bg-white/20 -z-10 rounded" />
            </span>{" "}
            together.
          </h2>

          <p className="text-lg text-white/80 mb-10 max-w-xl mx-auto">
            Whether you're starting from scratch or scaling an existing product,
            we're here to help you succeed.
          </p>

          <Button
            variant="secondary"
            size="xl"
            className="bg-white text-primary hover:bg-white/90 shadow-custom-lg hover:shadow-glow group"
          >
            Let's Talk
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
