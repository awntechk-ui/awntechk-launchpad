import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StrongSuite from "@/components/StrongSuite";
import OngoingProjects from "@/components/OngoingProjects";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";

interface IndexProps {
  onOpenContact: () => void;
}

const Index = ({ onOpenContact }: IndexProps) => {   
  return (
    <div className="min-h-screen bg-black text-white">
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
