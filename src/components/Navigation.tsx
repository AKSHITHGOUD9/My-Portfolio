import { Button } from "@/components/ui/button";
import { FileText, Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { useState } from "react";
import akshithName from "@/assets/akshith-name.png";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3 hover-scale group">
            <img 
              src={akshithName} 
              alt="Akshith" 
              className="h-10 object-contain opacity-90 group-hover:opacity-100 transition-opacity"
            />
          </div>

          {/* Navigation Links - Desktop */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="glassmorphism rounded-full px-6 py-2 hover:shadow-glass transition-all duration-300">
              <button 
                onClick={() => scrollToSection('work')}
                className="text-foreground/70 hover:text-primary transition-all duration-300 font-medium text-sm"
              >
                Work
              </button>
            </div>
            <div className="glassmorphism rounded-full px-6 py-2 hover:shadow-glass transition-all duration-300">
              <button 
                onClick={() => scrollToSection('projects')}
                className="text-foreground/70 hover:text-primary transition-all duration-300 font-medium text-sm"
              >
                Projects
              </button>
            </div>
            <div className="glassmorphism rounded-full px-6 py-2 hover:shadow-glass transition-all duration-300">
              <button 
                onClick={() => scrollToSection('experience')}
                className="text-foreground/70 hover:text-primary transition-all duration-300 font-medium text-sm"
              >
                Experience
              </button>
            </div>
            <div className="glassmorphism rounded-full px-6 py-2 hover:shadow-glass transition-all duration-300">
              <button 
                onClick={() => scrollToSection('education')}
                className="text-foreground/70 hover:text-primary transition-all duration-300 font-medium text-sm"
              >
                Education
              </button>
            </div>
            <div className="glassmorphism rounded-full px-6 py-2 hover:shadow-glass transition-all duration-300">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-foreground/70 hover:text-primary transition-all duration-300 font-medium text-sm"
              >
                About
              </button>
            </div>
          </div>

          {/* Action Buttons - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <a 
              href="https://github.com/akshithmothkuri" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://linkedin.com/in/akshith-linkedin" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="mailto:akshithmothkuri@gmail.com"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
            >
              <Mail className="w-5 h-5" />
            </a>
            <Button variant="hero" size="sm" className="ml-2">
              <FileText className="w-4 h-4" />
              Resume
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-foreground hover:text-primary transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden absolute top-full left-0 right-0 glassmorphism border-b border-primary/10 transform transition-all duration-300 ${
          isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
        }`}>
          <div className="flex flex-col space-y-4 p-6">
            <button 
              onClick={() => scrollToSection('work')}
              className="text-foreground/70 hover:text-primary transition-colors text-left"
            >
              Work
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-foreground/70 hover:text-primary transition-colors text-left"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('experience')}
              className="text-foreground/70 hover:text-primary transition-colors text-left"
            >
              Experience
            </button>
            <button 
              onClick={() => scrollToSection('education')}
              className="text-foreground/70 hover:text-primary transition-colors text-left"
            >
              Education
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-foreground/70 hover:text-primary transition-colors text-left"
            >
              About
            </button>
            
            <div className="flex items-center space-x-4 pt-4 border-t border-primary/10">
              <a 
                href="https://github.com/akshithmothkuri" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com/in/akshith-linkedin" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="mailto:akshithmothkuri@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
              <Button variant="hero" size="sm">
                <FileText className="w-4 h-4" />
                Resume
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};