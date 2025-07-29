import { Button } from "@/components/ui/button";
import { FileText, Menu, X } from "lucide-react";
import akshithName from "@/assets/akshith-name.png";
import { useAnalytics } from "@/hooks/use-analytics";
import { useState } from "react";

export const Navigation = () => {
  const { trackButtonClick, trackDownload } = useAnalytics();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    trackButtonClick(`nav_${id}`);
    setIsMenuOpen(false); // Close menu on mobile after clicking
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
        {/* Logo - left */}
        <div className="flex items-center">
          <button 
            onClick={() => scrollToSection('hero')}
            className="cursor-pointer"
          >
            <img 
              src={akshithName} 
              alt="Akshith" 
              className="h-16 md:h-24 object-contain opacity-100 drop-shadow-xl"
            />
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex flex-1 justify-center">
          <div className="flex items-center rounded-full border border-white/40 bg-black/40 backdrop-blur-md px-10 py-3 gap-8 shadow-lg">
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-white text-lg font-semibold px-4 py-1 focus:outline-none hover:text-primary transition-all duration-300 relative group"
            >
              <span>Projects</span>
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></div>
            </button>
            <button 
              onClick={() => scrollToSection('experience')}
              className="text-white text-lg font-semibold px-4 py-1 focus:outline-none hover:text-primary transition-all duration-300 relative group"
            >
              <span>Experience</span>
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></div>
            </button>
            <button 
              onClick={() => scrollToSection('education')}
              className="text-white text-lg font-semibold px-4 py-1 focus:outline-none hover:text-primary transition-all duration-300 relative group"
            >
              <span>Education</span>
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></div>
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-white text-lg font-semibold px-4 py-1 focus:outline-none hover:text-primary transition-all duration-300 relative group"
            >
              <span>About</span>
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></div>
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white p-2 rounded-full bg-black/40 backdrop-blur-md border border-white/20"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Resume Button - right */}
        <div className="hidden md:flex items-center">
          <a 
            href="https://drive.google.com/file/d/1ROnv6Chs7wFZfkokalR6U2Tf6R5Fvy3Y/view?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer" 
            onClick={() => trackDownload('resume')}
            className="relative group"
          >
            {/* Enhanced glow effect */}
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-white/30 via-white/50 to-white/30 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-white/20 to-white/40 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <Button
              variant="ghost"
              size="sm"
              className="relative z-10 border-2 border-white/80 text-white font-semibold text-lg px-6 py-2 rounded-full bg-black/60 backdrop-blur-md shadow-xl hover:bg-white/20 hover:border-white transition-all duration-300 flex items-center group-hover:scale-105"
              style={{ boxShadow: '0 0 30px 8px rgba(255,255,255,0.25)' }}
            >
              <FileText className="w-5 h-5 mr-2" />
              Resume
            </Button>
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/90 backdrop-blur-md border-t border-white/20">
          <div className="container mx-auto px-4 py-4 space-y-3">
            <button 
              onClick={() => scrollToSection('projects')}
              className="w-full text-left text-white text-lg font-semibold py-3 px-4 rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              Work
            </button>
            <button 
              onClick={() => scrollToSection('experience')}
              className="w-full text-left text-white text-lg font-semibold py-3 px-4 rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              Experience
            </button>
            <button 
              onClick={() => scrollToSection('education')}
              className="w-full text-left text-white text-lg font-semibold py-3 px-4 rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              Education
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="w-full text-left text-white text-lg font-semibold py-3 px-4 rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              About
            </button>
            <div className="pt-2 border-t border-white/20">
              <a 
                href="https://drive.google.com/file/d/1ROnv6Chs7wFZfkokalR6U2Tf6R5Fvy3Y/view?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer" 
                onClick={() => trackDownload('resume')}
                className="flex items-center text-white text-lg font-semibold py-3 px-4 rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                <FileText className="w-5 h-5 mr-3" />
                Resume
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};