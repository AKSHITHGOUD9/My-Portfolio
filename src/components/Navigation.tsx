import { Button } from "@/components/ui/button";
import { FileText, Github, Linkedin, Mail } from "lucide-react";

export const Navigation = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold bg-gradient-cosmic bg-clip-text text-transparent">
            Akshith
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('work')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Work
            </button>
            <button 
              onClick={() => scrollToSection('experience')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Experience
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary transition-colors"
            >
              About
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
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
    </nav>
  );
};