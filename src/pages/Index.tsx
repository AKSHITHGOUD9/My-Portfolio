import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { EducationSection } from "@/components/EducationSection";
import { AboutSection } from "@/components/AboutSection";
import cosmicBg from "@/assets/cosmic-bg.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ProjectsSection />
      <ExperienceSection />
      <EducationSection />
      <AboutSection />
    </div>
  );
};

export default Index;
