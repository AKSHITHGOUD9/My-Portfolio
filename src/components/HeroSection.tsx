import { Button } from "@/components/ui/button";
import { ArrowDown, Database, Code, BarChart3 } from "lucide-react";
import akshithName from "@/assets/akshith-name.png";
import cosmicBg from "@/assets/cosmic-bg.jpg";

export const HeroSection = () => {
  const scrollToWork = () => {
    const element = document.getElementById('work');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden cosmic-bg">
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
        {/* Title Badge */}
        <div className="inline-flex items-center gap-2 glassmorphism rounded-full px-8 py-4 mb-12 animate-fade-in">
          <Database className="w-5 h-5 text-primary" />
          <span className="text-sm font-medium text-foreground/90">Data Engineer | Full Stack Developer | Cloud Platform Engineer</span>
        </div>

        {/* Main Title with Name Image */}
        <div className="mb-8 animate-fade-in [animation-delay:0.2s]">
          <h1 className="text-4xl md:text-6xl font-light mb-4 leading-tight text-foreground/90">
            Hi, I'm
          </h1>
          <div className="flex justify-center mb-4">
            <img 
              src={akshithName} 
              alt="Akshith" 
              className="h-16 md:h-24 object-contain animate-gentle-glow drop-shadow-glow-primary"
            />
          </div>
        </div>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-foreground/80 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in [animation-delay:0.4s] font-light">
          I build seamless data experiences—from pipelines to dashboards—turning complexity into clarity and insights into action.
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

        {/* Previous Employers - Scrolling */}
        <div className="mb-12">
          <p className="text-sm text-muted-foreground mb-6">— Previous Employers —</p>
          <div className="overflow-hidden relative">
            <div className="flex items-center animate-scroll-x gap-12 whitespace-nowrap">
              <div className="text-sm font-medium opacity-60 hover:opacity-100 transition-opacity">University of Wisconsin</div>
              <div className="text-sm font-medium opacity-60 hover:opacity-100 transition-opacity">Skill Vertex</div>
              <div className="text-sm font-medium opacity-60 hover:opacity-100 transition-opacity">DataNest Innovations</div>
              <div className="text-sm font-medium opacity-60 hover:opacity-100 transition-opacity">Cerence Inc</div>
              <div className="text-sm font-medium opacity-60 hover:opacity-100 transition-opacity">University of Wisconsin</div>
              <div className="text-sm font-medium opacity-60 hover:opacity-100 transition-opacity">Skill Vertex</div>
              <div className="text-sm font-medium opacity-60 hover:opacity-100 transition-opacity">DataNest Innovations</div>
              <div className="text-sm font-medium opacity-60 hover:opacity-100 transition-opacity">Cerence Inc</div>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex items-center justify-center gap-6 animate-fade-in [animation-delay:0.8s]">
          <Button variant="cosmic" size="lg" onClick={scrollToWork} className="hover-scale font-semibold">
            View My Work
          </Button>
          <Button variant="shimmer" size="lg" className="animate-gentle-glow">
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