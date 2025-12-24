import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = ({ onOpenContact }) => {   
  return (
    <div className="min-h-screen bg-background">
      <Header onOpenContact={onOpenContact} />   
      <main>
        <HeroSection onOpenContact={onOpenContact} />  
        <ServicesSection />
        <AboutSection />
        <CTASection onOpenContact={onOpenContact}/>
      </main>
      <Footer/>   
    </div>
  );
};

export default Index;