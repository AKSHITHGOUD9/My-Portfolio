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
      title: "Smart City Traffic & Anomaly Detection",
      description: "Real-time traffic monitoring system with streaming analytics, anomaly detection, and intelligent alerting for smart city infrastructure using Kafka, Spark, and ML pipelines.",
      image: "/lovable-uploads/Traffic.mp4",
      tags: ["Kafka", "Spark", "ML", "Docker", "Kubernetes"],
      type: "Real-Time Analytics",
      githubUrl: null,
      demoUrl: null,
      isOngoing: true,
      specs: {
        volume: "Real-Time Streaming",
        latency: "Sub-second Processing",
        reliability: "ML Anomaly Detection",
        scalability: "Cloud-Native Architecture"
      }
    },
    {
      id: 2,
      title: "Netflix Movie Analytics Pipeline",
      description: "Built a scalable analytics pipeline using dbt, Snowflake, and Amazon S3 to transform raw movie data into clean, analytics-ready tables with automated data quality tests.",
      image: "/lovable-uploads/Netflix.mp4",
      tags: ["dbt", "Snowflake", "Amazon S3", "Python", "SQL"],
      type: "Data Engineering",
      githubUrl: "https://github.com/AKSHITHGOUD9/Netflix-Project",
      demoUrl: "",
      specs: {
        volume: "MovieLens 20M Dataset",
        latency: "Automated Pipeline",
        reliability: "Data Quality Tests",
        scalability: "Cloud-based Architecture"
      }
    },
    {
      id: 3,
      title: "Paris Olympic Azure Analytics",
      description: "Built comprehensive analytics platform for Paris Olympics data using Azure services to process and analyze athlete, medal, venue, and schedule information for sports insights.",
      image: "/lovable-uploads/Paris-Azure.mp4",
      tags: ["Azure", "Python", "Data Analytics", "CSV", "Sports Data"],
      type: "Cloud Analytics",
      githubUrl: "https://github.com/AKSHITHGOUD9/Paris-olympic-azure-project",
      demoUrl: null,
      specs: {
        volume: "Multiple CSV Datasets",
        latency: "Azure Processing",
        reliability: "Structured Data",
        scalability: "Cloud-based Platform"
      }
    },
    {
      id: 4,
      title: "Uber Data Analytics Pipeline",
      description: "Built modern data engineering pipeline using GCP, Mage AI, and BigQuery to process Uber trip data for analytics and visualization with Looker Studio.",
      image: "/lovable-uploads/uber.mp4",
      tags: ["GCP", "BigQuery", "Mage AI", "Python", "Looker Studio"],
      type: "Data Engineering",
      githubUrl: "https://github.com/AKSHITHGOUD9/Uber-Data-Project",
      demoUrl: null,
      specs: {
        volume: "TLC Trip Record Data",
        latency: "ETL Pipeline",
        reliability: "GCP Infrastructure",
        scalability: "Cloud-based Analytics"
      }
    },
    {
      id: 5,
      title: "Stock Market Kafka Real-Time Pipeline",
      description: "Built end-to-end real-time data engineering pipeline using Apache Kafka, AWS services, and Python to process live stock market data for analytics.",
      image: "/lovable-uploads/Stocks.mp4",
      tags: ["Apache Kafka", "AWS", "Python", "S3", "Athena"],
      type: "Real-Time Data Engineering",
      githubUrl: "https://github.com/AKSHITHGOUD9/STOCKS-Market-Project",
      demoUrl: null,
      specs: {
        volume: "Real-Time Stock Data",
        latency: "Live Streaming",
        reliability: "Kafka Infrastructure",
        scalability: "AWS Cloud Services"
      }
    },
    {
      id: 6,
      title: "YouTube Data Engineering Analysis",
      description: "Developed comprehensive data pipeline using AWS services to analyze YouTube trending videos data with ETL processing and business intelligence.",
      image: "/lovable-uploads/Youtube.mp4",
      tags: ["AWS", "Lambda", "Glue", "QuickSight", "PySpark"],
      type: "Cloud Data Engineering",
      githubUrl: "https://github.com/AKSHITHGOUD9/YOUTUBE-Data-Analysis",
      demoUrl: null,
      specs: {
        volume: "YouTube Trending Data",
        latency: "ETL Processing",
        reliability: "AWS Infrastructure",
        scalability: "Serverless Architecture"
      }
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 cosmic-bg">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="bg-gradient-cosmic bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed font-light">
            Transforming complex data challenges into elegant solutions through innovative engineering and design
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {projects.map((project, index) => (
            <Card 
              key={project.id}
              className="group relative overflow-hidden glassmorphism glassmorphism-hover transition-all duration-700 hover:scale-105 animate-fade-in border-0"
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <CardContent className="p-0 relative h-[20rem] md:h-[28rem]">
                {/* Project Image/Video */}
                <div className="absolute inset-0 overflow-hidden rounded-lg">
                  {project.image.endsWith('.mp4') || project.image.endsWith('.webm') || project.image.endsWith('.mov') ? (
                    <video 
                      src={project.image}
                      loop
                      muted
                      playsInline
                      ref={(el) => {
                        if (el) {
                          if (hoveredProject === project.id) {
                            el.play();
                          } else {
                            el.pause();
                            el.currentTime = 0;
                          }
                        }
                      }}
                      className={`w-full h-full object-cover transition-all duration-700 ${
                        hoveredProject === project.id ? 'scale-110 blur-sm' : 'scale-100'
                      }`}
                    />
                  ) : (
                    <img 
                      src={project.image}
                      alt={project.title}
                      className={`w-full h-full object-cover transition-all duration-700 ${
                        hoveredProject === project.id ? 'scale-110 blur-sm' : 'scale-100'
                      }`}
                    />
                  )}
                  <div className={`absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent transition-opacity duration-500 ${
                    hoveredProject === project.id ? 'opacity-95' : 'opacity-70'
                  }`} />
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-between">
                  <div className={`transition-all duration-500 ${
                    hoveredProject === project.id ? 'translate-y-0' : 'translate-y-2'
                  }`}>
                    <Badge variant="secondary" className="mb-3 glassmorphism text-primary border-primary/30 font-medium text-xs">
                      {project.type}
                    </Badge>
                    <h3 className={`text-lg md:text-xl font-semibold mb-3 transition-colors ${
                      project.id === 3 
                        ? 'text-primary' 
                        : project.id === 2
                        ? 'text-foreground group-hover:text-primary'
                        : project.id === 4
                        ? 'text-foreground group-hover:text-black'
                        : 'text-foreground group-hover:text-primary'
                    }`}>
                      {project.id === 3 ? (
                        <>Paris <span className="text-blue-500">O</span><span className="text-black">l</span><span className="text-red-500">y</span><span className="text-yellow-500">m</span><span className="text-green-500">p</span><span className="text-blue-500">i</span><span className="text-black">c</span> Azure Analytics</>
                      ) : project.id === 2 ? (
                        <><span className="text-red-600">NETFLIX</span> Movie Analytics Pipeline</>
                      ) : project.id === 4 ? (
                        <><span className="text-black">UBER</span> Data Analytics Pipeline</>
                      ) : project.id === 5 ? (
                        <><span className="font-bold">STOCKS</span> Market Kafka Real-Time Pipeline</>
                      ) : project.id === 6 ? (
                        <><span className="text-red-500 font-bold">YOUTUBE</span> Data Engineering Analysis</>
                      ) : project.id === 1 ? (
                        <>Smart City Traffic & Anomaly Detection</>
                      ) : (
                        project.title
                      )}
                    </h3>
                    <p className={`text-xs md:text-sm leading-relaxed mb-4 transition-colors ${
                      project.id === 3 
                        ? 'text-black'
                        : 'text-foreground/80'
                    }`}>
                      {project.description}
                    </p>
                  </div>

                  {/* Hover Content */}
                  <div className={`transition-all duration-500 ${
                    hoveredProject === project.id ? 'translate-y-0 opacity-100' : 'translate-y-4 md:translate-y-8 opacity-0'
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
                      {project.isOngoing ? (
                        <Button variant="cosmic" size="sm" className="flex-1 text-xs" disabled>
                          🚧 Ongoing
                        </Button>
                      ) : (
                        <>
                          {project.githubUrl && (
                            <Button 
                              variant="hero" 
                              size="sm" 
                              className="flex-1 text-xs"
                              onClick={() => window.open(project.githubUrl, '_blank')}
                            >
                              <Github className="w-3 h-3" />
                              Code
                            </Button>
                          )}
                          {project.demoUrl && (
                            <Button 
                              variant="cosmic" 
                              size="sm" 
                              className="flex-1 text-xs"
                              onClick={() => window.open(project.demoUrl, '_blank')}
                            >
                              <ExternalLink className="w-3 h-3" />
                              Demo
                            </Button>
                          )}
                          {!project.githubUrl && !project.demoUrl && (
                            <Button variant="hero" size="sm" className="flex-1 text-xs" disabled>
                              Coming Soon
                            </Button>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Learning Quote */}
        <div className="text-center animate-fade-in mb-8" style={{ animationDelay: '0.8s' }}>
          <div className="glassmorphism rounded-2xl p-8 max-w-4xl mx-auto">
            <p className="text-2xl md:text-3xl font-light text-foreground/90 mb-4 italic">
              "Projects may come and go, but learning is a continuous journey - 
              <span className="text-primary font-medium"> every challenge shapes the engineer you become</span>"
            </p>
            <p className="text-lg text-foreground/70 font-light">
              Embracing the process, one data pipeline at a time
            </p>
          </div>
        </div>

        {/* View All Projects CTA */}
        <div className="text-center animate-fade-in" style={{ animationDelay: '1s' }}>
          <Button 
            variant="shimmer" 
            size="lg" 
            className="font-semibold"
            onClick={() => window.open('https://github.com/AKSHITHGOUD9', '_blank')}
          >
            <Github className="w-5 h-5" />
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};