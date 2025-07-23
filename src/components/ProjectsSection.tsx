import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";

export const ProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "HaiTou Website Redesign",
      description: "Designed a responsive job-hunting platform from concept to high-fidelity prototype, driving a 16.2% boost in daily active users and a 12.9% increase in user satisfaction.",
      image: "/lovable-uploads/133f9686-e698-4e3d-9367-4f060e804284.png",
      tags: ["UI/UX Design", "Figma", "User Research", "Prototyping"],
      type: "Design System",
      specs: {
        users: "50K+ Daily Active Users",
        improvement: "16.2% User Engagement",
        satisfaction: "12.9% Satisfaction Increase",
        timeline: "6 Months"
      }
    },
    {
      id: 2,
      title: "Fintech Banking System",
      description: "Developed an inclusive fintech design system and banking interface with advanced security features and seamless user experience for SPD Bank.",
      image: "/lovable-uploads/133f9686-e698-4e3d-9367-4f060e804284.png",
      tags: ["Fintech", "Design System", "Banking", "Security"],
      type: "Financial Platform",
      specs: {
        transactions: "1M+ Monthly Transactions",
        security: "Bank-Grade Security",
        accessibility: "WCAG 2.1 AA Compliant",
        integration: "Real-time Processing"
      }
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-cosmic bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Transforming ideas into impactful digital experiences through innovative design and development
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.id}
              className="group relative overflow-hidden border-0 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-500 hover:shadow-cosmic animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <CardContent className="p-0 relative h-80">
                {/* Project Image */}
                <div className="absolute inset-0 overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className={`w-full h-full object-cover transition-all duration-700 ${
                      hoveredProject === project.id ? 'scale-110 blur-sm' : 'scale-100'
                    }`}
                  />
                  <div className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${
                    hoveredProject === project.id ? 'opacity-80' : 'opacity-40'
                  }`} />
                </div>

                {/* Content Overlay */}
                <div className={`absolute inset-0 p-6 flex flex-col justify-between transition-all duration-500 ${
                  hoveredProject === project.id ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-90'
                }`}>
                  <div>
                    <Badge variant="secondary" className="mb-3 bg-primary/20 text-primary border-primary/30">
                      {project.type}
                    </Badge>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-white/90 leading-relaxed mb-4">
                      {project.description}
                    </p>
                  </div>

                  {/* Hover Specs */}
                  <div className={`transition-all duration-500 ${
                    hoveredProject === project.id ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}>
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      {Object.entries(project.specs).map(([key, value]) => (
                        <div key={key} className="bg-black/30 backdrop-blur-sm rounded-lg p-2">
                          <div className="text-xs text-white/70 uppercase tracking-wide">{key}</div>
                          <div className="text-sm text-white font-medium">{value}</div>
                        </div>
                      ))}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs bg-white/10 text-white border-white/30">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <button className="flex items-center gap-2 px-3 py-2 bg-primary/20 text-primary rounded-lg hover:bg-primary/30 transition-colors text-sm">
                        <Github className="w-4 h-4" />
                        Code
                      </button>
                      <button className="flex items-center gap-2 px-3 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors text-sm">
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};