import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";

export const ProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "Real-Time Data Pipeline",
      description: "Built scalable ETL pipeline processing 1M+ records daily with Apache Kafka, Spark, and cloud infrastructure.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80",
      tags: ["Apache Kafka", "Spark", "Python", "AWS"],
      type: "Data Engineering",
      specs: {
        volume: "1M+ Records Daily",
        latency: "< 100ms Processing",
        reliability: "99.9% Uptime",
        scalability: "Auto-scaling"
      }
    },
    {
      id: 2,
      title: "ML Analytics Dashboard",
      description: "Developed interactive dashboard with predictive analytics and real-time visualizations for business intelligence.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80",
      tags: ["React", "Python", "ML", "D3.js"],
      type: "Full Stack + ML",
      specs: {
        users: "10K+ Active Users",
        metrics: "50+ KPI Tracked",
        performance: "Real-time Updates",
        accuracy: "94% Prediction Rate"
      }
    },
    {
      id: 3,
      title: "Cloud Data Warehouse",
      description: "Architected modern data warehouse with automated data governance and multi-source integration.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80",
      tags: ["Snowflake", "DBT", "Airflow", "SQL"],
      type: "Data Architecture",
      specs: {
        storage: "50TB+ Data Storage",
        sources: "20+ Data Sources",
        queries: "Sub-second Response",
        governance: "Automated Lineage"
      }
    },
    {
      id: 4,
      title: "Microservices Platform",
      description: "Built containerized microservices architecture with API gateway and comprehensive monitoring.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80",
      tags: ["Docker", "Kubernetes", "Node.js", "Redis"],
      type: "Backend Development",
      specs: {
        services: "15+ Microservices",
        throughput: "10K+ Requests/sec",
        availability: "99.99% SLA",
        monitoring: "Full Observability"
      }
    },
    {
      id: 5,
      title: "Financial Risk Analytics",
      description: "Developed risk assessment models and automated reporting system for investment decision support.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80",
      tags: ["Python", "Pandas", "PostgreSQL", "Tableau"],
      type: "Data Analytics",
      specs: {
        models: "5+ Risk Models",
        automation: "Daily Reports",
        accuracy: "92% Risk Prediction",
        compliance: "SOX Compliant"
      }
    },
    {
      id: 6,
      title: "IoT Data Processing",
      description: "Created real-time IoT data processing system with edge computing and predictive maintenance.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80",
      tags: ["IoT", "Edge Computing", "Time Series", "Azure"],
      type: "IoT Platform",
      specs: {
        devices: "1000+ IoT Devices",
        frequency: "Real-time Streaming",
        predictions: "Predictive Maintenance",
        efficiency: "25% Cost Reduction"
      }
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 cosmic-bg">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-light mb-6 text-foreground">
            Featured <span className="bg-gradient-cosmic bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed font-light">
            Transforming complex data challenges into elegant solutions through innovative engineering and design
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <Card 
              key={project.id}
              className="group relative overflow-hidden glassmorphism glassmorphism-hover transition-all duration-700 hover:scale-105 animate-fade-in border-0"
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <CardContent className="p-0 relative h-80">
                {/* Project Image */}
                <div className="absolute inset-0 overflow-hidden rounded-lg">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className={`w-full h-full object-cover transition-all duration-700 ${
                      hoveredProject === project.id ? 'scale-110 blur-sm' : 'scale-100'
                    }`}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent transition-opacity duration-500 ${
                    hoveredProject === project.id ? 'opacity-95' : 'opacity-70'
                  }`} />
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  <div className={`transition-all duration-500 ${
                    hoveredProject === project.id ? 'translate-y-0' : 'translate-y-2'
                  }`}>
                    <Badge variant="secondary" className="mb-3 glassmorphism text-primary border-primary/30 font-medium">
                      {project.type}
                    </Badge>
                    <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-foreground/80 text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>
                  </div>

                  {/* Hover Content */}
                  <div className={`transition-all duration-500 ${
                    hoveredProject === project.id ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}>
                    {/* Specs Grid */}
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {Object.entries(project.specs).slice(0, 4).map(([key, value]) => (
                        <div key={key} className="glassmorphism rounded-md p-2">
                          <div className="text-xs text-primary uppercase tracking-wide font-medium">{key}</div>
                          <div className="text-xs text-foreground/90 font-medium">{value}</div>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs glassmorphism text-foreground/80 border-primary/20">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <Button variant="hero" size="sm" className="flex-1 text-xs">
                        <Github className="w-3 h-3" />
                        Code
                      </Button>
                      <Button variant="cosmic" size="sm" className="flex-1 text-xs">
                        <ExternalLink className="w-3 h-3" />
                        Demo
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Projects CTA */}
        <div className="text-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <Button variant="shimmer" size="lg" className="font-semibold">
            <Github className="w-5 h-5" />
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};