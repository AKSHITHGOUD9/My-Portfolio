import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export const ProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "Moodify",
      description: "AI-powered music discovery platform using Spotify API, OpenAI embeddings, and collaborative filtering to create personalized playlists by mood and listening context. Microservice architecture with React frontend, FastAPI backend, and Redis caching for sub-200ms recommendations.",
      image: "/lovable-uploads/Spotify.mp4",
      tags: ["React", "FastAPI", "OpenAI", "Spotify API", "Redis", "Azure ML"],
      type: "AI/ML Engineering",
      githubUrl: "https://github.com/AKSHITHGOUD9/Moodify",
      demoUrl: "https://moodify-topaz.vercel.app/",
      specs: {
        volume: "Multi-User Personalization",
        latency: "Sub-200ms Inference",
        reliability: "ML Model Training",
        scalability: "Microservice Architecture"
      }
    },
    {
      id: 2,
      title: "Financial Document Classifier",
      description: "Intelligent document classification system leveraging LangChain, OpenAI GPT-4, and scikit-learn to categorize invoices, contracts, and balance sheets with >94% accuracy. Features auto-labeling and validation pipelines using AWS S3 triggers + Lambda.",
      image: "/lovable-uploads/FDC.png",
      tags: ["LangChain", "GPT-4", "FastAPI", "PostgreSQL", "AWS Lambda", "NLP"],
      type: "AI/NLP Pipeline",
      githubUrl: "https://github.com/AKSHITHGOUD9/financial-doc-classifier",
      demoUrl: null,
      specs: {
        volume: "Document Classification",
        latency: "Scalable Ingestion",
        reliability: "94%+ Accuracy",
        scalability: "AWS Serverless"
      }
    },
    {
      id: 3,
      title: "Gmail Automation Agent",
      description: "LLM-powered email automation agent using LangChain and OpenAI API for parsing, categorizing, and auto-responding to high-volume Gmail inboxes. Integrated Vercel AI SDK for prompt orchestration with sentiment analysis and rule-based logic for contextual replies.",
      image: "/lovable-uploads/Gmail.mp4",
      tags: ["LangChain", "OpenAI", "Gmail API", "AWS Lambda", "Vercel AI SDK", "Python"],
      type: "AI Workflow Automation",
      githubUrl: "https://github.com/AKSHITHGOUD9/Gmail-Automation",
      demoUrl: null,
      specs: {
        volume: "Email Automation",
        latency: "Real-Time Processing",
        reliability: "Context-Aware Replies",
        scalability: "Lambda Deployment"
      }
    },
    {
      id: 4,
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
      id: 5,
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
      id: 6,
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
      id: 7,
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
      id: 8,
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
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="bg-gradient-cosmic bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed font-light">
            Transforming complex data challenges into elegant solutions through innovative engineering and design
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
            <Card
              className="group relative overflow-hidden glassmorphism glassmorphism-hover transition-all duration-700 hover:scale-105 border-0"
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
                    <h3 className={`text-lg md:text-xl font-semibold mb-3 transition-all duration-300 ${
                      project.id === 1 
                        ? 'text-white group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-600 group-hover:bg-clip-text group-hover:text-transparent' 
                        : project.id === 2
                        ? 'bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent'
                        : project.id === 3
                        ? 'text-black group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-600 group-hover:bg-clip-text group-hover:text-transparent'
                        : project.id === 4
                        ? 'text-red-600'
                        : project.id === 5
                        ? 'text-black'
                        : 'text-foreground group-hover:text-primary'
                    }`}>
                      {project.id === 3 ? (
                        <>Gmail Automation Agent</>
                      ) : project.id === 2 ? (
                        <>Financial Document Classifier</>
                      ) : project.id === 4 ? (
                        <><span className="text-red-600 font-bold">NETFLIX</span> Movie Analytics Pipeline</>
                      ) : project.id === 5 ? (
                        <><span className="text-blue-500">P</span><span className="text-black">a</span><span className="text-red-500">r</span><span className="text-yellow-500">i</span><span className="text-green-500">s</span> <span className="text-blue-600">O</span><span className="text-black">l</span><span className="text-red-600">y</span><span className="text-yellow-600">m</span><span className="text-green-600">p</span><span className="text-blue-600">i</span><span className="text-black">c</span> <span className="text-black">Azure Analytics</span></>
                      ) : project.id === 6 ? (
                        <><span className="text-black">UBER</span> Data Analytics Pipeline</>
                      ) : project.id === 7 ? (
                        <><span className="font-bold">STOCKS</span> Market Kafka Real-Time Pipeline</>
                      ) : project.id === 8 ? (
                        <><span className="text-red-500 font-bold">YOUTUBE</span> Data Engineering Analysis</>
                      ) : project.id === 1 ? (
                        <>Moodify</>
                      ) : (
                        project.title
                      )}
                    </h3>
                    <p className={`text-xs md:text-sm leading-relaxed mb-4 transition-colors ${
                      project.id === 1
                        ? 'line-clamp-3'
                        : project.id === 3 || project.id === 5
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
                    <div className={`grid ${project.id === 1 ? 'grid-cols-2 gap-2' : 'grid-cols-2 gap-2'} mb-2 md:mb-3`}>
                      {Object.entries(project.specs).slice(0, project.id === 1 ? 2 : 4).map(([key, value]) => (
                        <div key={key} className="glassmorphism rounded-md p-2">
                          <div className="text-xs text-primary uppercase tracking-wide font-medium">{key}</div>
                          <div className="text-xs text-foreground/90 font-medium">{value}</div>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-1 mb-3 md:mb-3">
                      {project.tags.slice(0, project.id === 1 ? 3 : 3).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs glassmorphism text-foreground/80 border-primary/20">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2">
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
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            </motion.div>
          ))}
        </div>

        {/* Learning Quote */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="glassmorphism rounded-2xl p-8 max-w-4xl mx-auto">
            <p className="text-2xl md:text-3xl font-light text-foreground/90 mb-4 italic">
              "Projects may come and go, but learning is a continuous journey - 
              <span className="text-primary font-medium"> every challenge shapes the engineer you become</span>"
            </p>
            <p className="text-lg text-foreground/70 font-light">
              Embracing the process, one data pipeline at a time
            </p>
          </div>
        </motion.div>

        {/* View All Projects CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Button 
            variant="shimmer" 
            size="lg" 
            className="font-semibold"
            onClick={() => window.open('https://github.com/AKSHITHGOUD9', '_blank')}
          >
            <Github className="w-5 h-5" />
            View All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  );
};