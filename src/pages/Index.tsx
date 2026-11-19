import { ArrowDown, ArrowUpRight, Code2, Database, Smartphone, Sparkles } from "lucide-react";
import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import OngoingProjects from "@/components/OngoingProjects";
import "./enquiry.css";

const services = [
  {
    icon: Code2,
    title: "Custom Software Development",
    description: "Tailored solutions built with modern frameworks and best practices to meet your unique business needs.",
  },
  {
    icon: Sparkles,
    title: "AI & Machine Learning",
    description: "Intelligent solutions that leverage cutting-edge AI to automate processes and drive insights.",
  },
  {
    icon: Database,
    title: "Data Engineering",
    description: "Robust data architecture and analytics solutions to transform raw data into actionable insights.",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
  },
];

const steps = [
  {
    title: "Discover and design",
    description: "We get to know your users, goals, and constraints, then define what the product needs to do and how it should work.",
  },
  {
    title: "Build and validate",
    description: "We build in stages, share working versions, and use feedback to test and refine the product.",
  },
  {
    title: "Launch and improve",
    description: "We prepare the release, check how it performs in use, and identify what to improve next.",
  },
];

const expertise = [
  { title: "Web applications", description: "Modern browser-based software and interfaces.", tools: "React · Node.js" },
  { title: "Mobile apps", description: "Native and cross-platform experiences for users on the move.", tools: "Flutter" },
  { title: "Applied AI", description: "Machine learning for automation and data-driven decisions.", tools: "Python · TensorFlow" },
  { title: "Data platforms", description: "Databases and pipelines that make information useful.", tools: "PostgreSQL · Supabase" },
  { title: "Cloud infrastructure", description: "Infrastructure to deploy and operate scalable products.", tools: "AWS · Docker · Kubernetes" },
  { title: "Systems integration", description: "APIs that help new products work with existing tools.", tools: "APIs · System integrations" },
];

export default function Index() {
  const { hash } = useLocation();

  useLayoutEffect(() => {
    if (hash === "#projects") {
      document.getElementById("projects")?.scrollIntoView({ behavior: "instant" });
    }
  }, [hash]);

  return (
    <div className="enquiry-home" id="home">
      <Header />
      <main>
        <HeroSection />

        <section id="about" className="landing-band landing-light" aria-labelledby="about-heading">
          <div className="enquiry-shell landing-split">
            <div>
              <p className="landing-label">About AwnTechK</p>
              <h2 id="about-heading">You Ideate.<br />We Innovate.</h2>
            </div>
            <div className="landing-about-copy">
              <p>We design and develop modern applications and AI-enabled solutions that help ideas grow into reliable, real-world products.</p>
              <p>We turn complex problems into elegant software with strong engineering and thoughtful design.</p>
              <a className="landing-text-link" href="#process">See how we work <ArrowDown size={17} aria-hidden="true" /></a>
            </div>
          </div>
        </section>

        <section id="services" className="landing-band landing-dark" aria-labelledby="services-heading">
          <div className="enquiry-shell">
            <div className="landing-heading landing-split">
              <h2 id="services-heading">What we do</h2>
              <p>Explore how we can help with software, AI, data, and mobile development.</p>
            </div>
            <div className="landing-services">
              {services.map(({ icon: Icon, title, description }) => (
                <article key={title}>
                  <Icon size={25} aria-hidden="true" />
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="landing-band landing-light" aria-labelledby="process-heading">
          <div className="enquiry-shell">
            <div className="landing-heading">
              <h2 id="process-heading">How we work</h2>
            </div>
            <ol className="landing-process">
              {steps.map((step, index) => (
                <li key={step.title}>
                  <span className="landing-step" aria-hidden="true">0{index + 1}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </li>
              ))}
            </ol>
            <div className="landing-process-cta">
              <p>Let's discuss how we can bring your vision to life with our expertise.</p>
              <a className="enquiry-button" href="#hero-form">Let’s connect <ArrowUpRight size={17} aria-hidden="true" /></a>
            </div>
          </div>
        </section>

        <section id="expertise" className="landing-band landing-dark" aria-labelledby="expertise-heading">
          <div className="enquiry-shell">
            <div className="landing-heading landing-split">
              <h2 id="expertise-heading">Our expertise</h2>
              <p>Explore the technologies we use to design, build, and operate digital products.</p>
            </div>
            <div className="landing-expertise">
              {expertise.map(({ title, description, tools }) => (
                <article key={title}>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <p className="landing-tools">{tools}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <OngoingProjects />

        <section id="contact" className="landing-band landing-contact" aria-labelledby="contact-heading">
          <div className="enquiry-shell landing-split">
            <div>
              <h2 id="contact-heading">Let’s build something great.</h2>
              <p className="landing-contact-description">Tell us about your idea and we'll help you design, build, and scale it.</p>
            </div>
            <a className="enquiry-button landing-contact-action" href="#hero-form">
              Send an enquiry <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
