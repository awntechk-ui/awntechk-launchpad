import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StrongSuite from "@/components/StrongSuite";
import OngoingProjects from "@/components/OngoingProjects";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import "./enquiry.css";

interface IndexProps {
  onOpenContact: () => void;
}

export default function Index({ onOpenContact }: IndexProps) {
  return (
    <div className="enquiry-home">
      <Header />
      <main>
        <HeroSection />
        <StrongSuite onOpenContact={onOpenContact} />
        <OngoingProjects onOpenContact={onOpenContact} />
        <CTASection onOpenContact={onOpenContact} />
      </main>
      <Footer />
    </div>
  );
}
