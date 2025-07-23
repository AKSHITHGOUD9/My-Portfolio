import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { WorkSection } from "@/components/WorkSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { AboutSection } from "@/components/AboutSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <WorkSection />
      <ExperienceSection />
      <AboutSection />
    </div>
  );
};

export default Index;
