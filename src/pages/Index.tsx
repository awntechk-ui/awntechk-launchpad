import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StrongSuite from "@/components/StrongSuite";
import OngoingProjects from "@/components/OngoingProjects";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";

const Index = ({ onOpenContact }) => {   
  return (
    <div className="min-h-screen bg-black text-white min-w-[1400px]">
      <Header onOpenContact={onOpenContact} />   
      <main>
        <HeroSection onOpenContact={onOpenContact} />
        <StrongSuite onOpenContact={onOpenContact} />
        <OngoingProjects onOpenContact={onOpenContact} />
        <CTASection onOpenContact={onOpenContact} />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

