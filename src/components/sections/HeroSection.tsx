import { Button } from "@/components/ui/button";
import { ArrowDown, Database, Code, BarChart3 } from "lucide-react";
import cosmicBg from "@/assets/cosmic-bg.jpg";
import akshithName from "@/assets/akshith-name.png";
import { useAnalytics } from "@/hooks/use-analytics";

export const HeroSection = () => {
  const { trackButtonClick } = useAnalytics();
  
  const scrollToWork = () => {
    const element = document.getElementById('projects');
    element?.scrollIntoView({ behavior: 'smooth' });
    trackButtonClick('view_work');
  };

  const logos = [
    { src: "/lovable-uploads/UWM.png", alt: "University of Wisconsin" },
    { src: "/lovable-uploads/SkillVertex.png", alt: "Skill Vertex" },
    { src: "/lovable-uploads/DataNest.png", alt: "DataNest Innovations" },
    { src: "/lovable-uploads/RecWell.png", alt: "Rec Well" },
    { src: "/lovable-uploads/UWM.png", alt: "University of Wisconsin" },
    { src: "/lovable-uploads/SkillVertex.png", alt: "Skill Vertex" },
    { src: "/lovable-uploads/DataNest.png", alt: "DataNest Innovations" },
    { src: "/lovable-uploads/RecWell.png", alt: "Rec Well" },
    { src: "/lovable-uploads/UWM.png", alt: "University of Wisconsin" },
    { src: "/lovable-uploads/SkillVertex.png", alt: "Skill Vertex" },
    { src: "/lovable-uploads/DataNest.png", alt: "DataNest Innovations" },
    { src: "/lovable-uploads/RecWell.png", alt: "Rec Well" },
    { src: "/lovable-uploads/UWM.png", alt: "University of Wisconsin" },
    { src: "/lovable-uploads/SkillVertex.png", alt: "Skill Vertex" },
    { src: "/lovable-uploads/DataNest.png", alt: "DataNest Innovations" },
    { src: "/lovable-uploads/RecWell.png", alt: "Rec Well" },
    { src: "/lovable-uploads/UWM.png", alt: "University of Wisconsin" },
    { src: "/lovable-uploads/SkillVertex.png", alt: "Skill Vertex" },
    { src: "/lovable-uploads/DataNest.png", alt: "DataNest Innovations" },
    { src: "/lovable-uploads/RecWell.png", alt: "Rec Well" },
    { src: "/lovable-uploads/UWM.png", alt: "University of Wisconsin" },
    { src: "/lovable-uploads/SkillVertex.png", alt: "Skill Vertex" },
    { src: "/lovable-uploads/DataNest.png", alt: "DataNest Innovations" },
    { src: "/lovable-uploads/RecWell.png", alt: "Rec Well" },
  ];

  return (
    <section id="hero" className="min-h-screen relative flex items-center justify-center overflow-hidden cosmic-bg">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${cosmicBg})` }}
      />
      
      {/* Spline Animation Overlay */}
      <div className="absolute inset-0 opacity-60">
        <iframe 
          src='https://my.spline.design/particlenebula-mRTizpxxsAEVal12RjOQfu3y/' 
          frameBorder='0' 
          width='100%' 
          height='100%'
          className="pointer-events-none"
        />
      </div>
      
      {/* Subtle overlay for text readability */}
      <div className="absolute inset-0 bg-background/20" />
      
      {/* Twinkling Stars */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(80)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">

        {/* Large Logo */}
        <div className="mb-8 animate-fade-in [animation-delay:0.1s]">
          <img 
            src={akshithName} 
            alt="Akshith" 
            className="h-32 md:h-48 object-contain opacity-90 drop-shadow-2xl mx-auto"
          />
        </div>

        {/* Main Title with Name */}
        <div className="mb-8 animate-fade-in [animation-delay:0.2s]">
          <h1 className="text-5xl md:text-7xl font-light leading-tight text-foreground/90">
            Hi, I'm <span className="font-serif italic text-white">Akshith</span>
          </h1>
        </div>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-foreground/80 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in [animation-delay:0.4s] font-light">
          I build seamless data experiences—from pipelines to dashboards—turning complexity into clarity and insights into action.
        </p>

        {/* Skills Icons - now inside a pill-shaped container for visibility */}
        <div className="flex items-center justify-center mb-12 animate-fade-in [animation-delay:0.4s]">
          <div className="flex items-center gap-8 px-8 py-3 rounded-full bg-black/40 backdrop-blur-md border border-white/20 shadow-lg">
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
        </div>

        {/* Previous Employers - Scrolling */}
        <div className="mb-12">
          <p className="text-sm text-muted-foreground mb-6">— Previous Employers —</p>
          <div className="overflow-hidden relative h-16 flex justify-center items-center mx-auto max-w-xl">
            <div className="inline-flex items-center animate-scroll-x gap-16 whitespace-nowrap">
              {[...logos, ...logos].map((logo, i) => (
                <img
                  key={i}
                  src={logo.src}
                  alt={logo.alt}
                  className="h-12 object-contain opacity-60 hover:opacity-100 transition-opacity"
                />
              ))}
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in [animation-delay:0.6s]">
          <Button 
            onClick={scrollToWork}
            className="px-8 py-3 text-lg font-semibold bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-float-gentle"
          >
            View My Work
          </Button>
          <Button 
            variant="outline"
            className="px-8 py-3 text-lg font-semibold border-2 border-white/30 text-white hover:bg-white/10 rounded-full backdrop-blur-md transition-all duration-300"
          >
            Get In Touch
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-white/60" />
        </div>
      </div>
    </section>
  );
};