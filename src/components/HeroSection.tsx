import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroIllustration from "@/assets/hero-illustration.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-subtle" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 opacity-0 animate-fade-in-left" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent border border-primary/10">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse-soft" />
              <span className="text-sm font-medium text-accent-foreground">
                Technology Partner for Growth
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-foreground">
              Building Smart,{" "}
              <span className="text-gradient">Scalable</span> Digital Solutions
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              We design and develop modern applications and AI-enabled solutions
              that help ideas grow into reliable, real-world products.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="hero" size="lg" className="group">
                Get Started
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="heroOutline" size="lg">
                Contact Us
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-8 pt-8 border-t border-border/50">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">50+</div>
                <div className="text-sm text-muted-foreground">Projects Delivered</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">99%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
              <div className="w-px h-12 bg-border hidden sm:block" />
              <div className="text-center hidden sm:block">
                <div className="text-2xl font-bold text-foreground">24/7</div>
                <div className="text-sm text-muted-foreground">Support Available</div>
              </div>
            </div>
          </div>

          {/* Right Column - Illustration */}
          <div className="relative opacity-0 animate-fade-in-right" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
            <div className="relative">
              {/* Floating elements */}
              <div className="absolute -top-8 -left-8 w-24 h-24 rounded-2xl bg-accent shadow-custom-md animate-float flex items-center justify-center">
                <div className="w-12 h-12 rounded-xl bg-gradient-primary" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-2xl bg-card shadow-custom-md animate-float-delayed flex items-center justify-center">
                <div className="w-8 h-8 rounded-lg bg-primary/20" />
              </div>

              {/* Main illustration */}
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-custom-lg">
                <img
                  src={heroIllustration}
                  alt="AI and digital solutions illustration showing floating UI cards and data connections"
                  className="w-full h-auto"
                />
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-primary opacity-10 blur-2xl -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
