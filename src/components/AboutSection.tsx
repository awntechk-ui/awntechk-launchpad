import { CheckCircle2 } from "lucide-react";
import aboutIllustration from "@/assets/about-illustration.png";

const values = [
  "Strong engineering practices",
  "Thoughtful, user-first design",
  "Problem-first thinking",
  "Continuous improvement focus",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 lg:py-32 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 opacity-0 animate-fade-in-left" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium">
              About Us
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              About <span className="text-gradient">AwntechK</span>
            </h2>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                AwntechK is a technology-driven team focused on building practical,
                scalable digital solutions. We combine strong engineering,
                thoughtful design, and problem-first thinking to create products
                that deliver real value.
              </p>
              <p>
                We believe good software is built with clarity, ownership, and
                purpose. Our focus is on long-term value, reliability, and
                continuous improvement.
              </p>
            </div>

            {/* Values */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {values.map((value, index) => (
                <div
                  key={value}
                  className="flex items-center gap-3 opacity-0 animate-fade-in"
                  style={{ animationDelay: `${0.3 + index * 0.1}s`, animationFillMode: "forwards" }}
                >
                  <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Illustration */}
          <div className="relative opacity-0 animate-fade-in-right" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-accent animate-pulse-soft" />
              <div className="absolute -bottom-8 -left-8 w-24 h-24 rounded-2xl bg-primary/10 rotate-12 animate-float" />

              {/* Main image */}
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-custom-lg bg-gradient-card p-2">
                <img
                  src={aboutIllustration}
                  alt="Team collaboration and product journey visualization"
                  className="w-full h-auto rounded-2xl"
                />
              </div>

              {/* Stats overlay */}
              <div className="absolute -bottom-6 -left-6 z-20 bg-card rounded-2xl shadow-custom-lg p-6 animate-float-delayed">
                <div className="text-3xl font-bold text-gradient mb-1">5+</div>
                <div className="text-sm text-muted-foreground">Years of Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
