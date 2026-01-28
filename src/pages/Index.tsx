import Header from "@/components/Header";
import AwntechkIntro from "@/components/AwntechkIntro";
import StrongSuite from "@/components/StrongSuite";
import OngoingProjects from "@/components/OngoingProjects";
import ExtraInformation from "@/components/ExtraInformation";

const Index = ({ onOpenContact }) => {   
  return (
    <div className="min-h-screen bg-white">
      <Header onOpenContact={onOpenContact} />   
      <main>
        <AwntechkIntro onOpenContact={onOpenContact} />
        <StrongSuite onOpenContact={onOpenContact} />
        <OngoingProjects onOpenContact={onOpenContact} />
        <ExtraInformation onOpenContact={onOpenContact} />
      </main>
    </div>
  );
};

export default Index;