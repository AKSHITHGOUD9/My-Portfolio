import { Button } from "@/components/ui/button";
import { ArrowDown, Database, Code, BarChart3 } from "lucide-react";
import heroImage from "@/assets/hero-cosmic.jpg";

export const HeroSection = () => {
  const scrollToWork = () => {
    const element = document.getElementById('work');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Title Badge */}
        <div className="inline-flex items-center gap-2 bg-card/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-primary/30">
          <Database className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium">Data Engineer | Full Stack Developer | Cloud Platform Engineer</span>
        </div>

        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in">
          Hi, I'm{" "}
          <span className="bg-gradient-cosmic bg-clip-text text-transparent drop-shadow-lg animate-pulse">
            Akshith Goud
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in [animation-delay:0.2s] drop-shadow-sm">
          Passionate about building end-to-end data platforms, real-time pipelines, and interactive dashboards that make a real impact. 
          Bringing structure to messy data through innovative solutions.
        </p>

        {/* Skills Icons */}
        <div className="flex items-center justify-center gap-8 mb-12 animate-fade-in [animation-delay:0.4s]">
          <div className="flex items-center gap-2 text-primary hover-scale group">
            <Database className="w-6 h-6 group-hover:drop-shadow-glow-primary transition-all duration-300" />
            <span className="text-sm font-medium">Data Engineering</span>
          </div>
          <div className="flex items-center gap-2 text-accent hover-scale group">
            <Code className="w-6 h-6 group-hover:drop-shadow-glow-accent transition-all duration-300" />
            <span className="text-sm font-medium">Full Stack</span>
          </div>
          <div className="flex items-center gap-2 text-primary hover-scale group">
            <BarChart3 className="w-6 h-6 group-hover:drop-shadow-glow-primary transition-all duration-300" />
            <span className="text-sm font-medium">Analytics</span>
          </div>
        </div>

        {/* Previous Employers */}
        <div className="mb-12">
          <p className="text-sm text-muted-foreground mb-6">— Previous Employers —</p>
          <div className="flex items-center justify-center gap-8 opacity-60 hover:opacity-100 transition-opacity">
            <div className="text-sm font-medium">University of Wisconsin</div>
            <div className="text-sm font-medium">Skill Vertex</div>
            <div className="text-sm font-medium">DataNest Innovations</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex items-center justify-center gap-4 animate-fade-in [animation-delay:0.6s]">
          <Button variant="cosmic" size="lg" onClick={scrollToWork} className="hover-scale">
            View My Work
          </Button>
          <Button variant="hero" size="lg" className="hover-scale">
            Get In Touch
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button onClick={scrollToWork} className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};