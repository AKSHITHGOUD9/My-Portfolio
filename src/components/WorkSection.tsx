import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

export const WorkSection = () => {
  const projects = [
    {
      title: "Full-Stack Archive Catalog System",
      description: "Built using Django/PostgreSQL and React, improving data discoverability and reducing search latency by 50%.",
      tags: ["Django", "PostgreSQL", "React", "Data Management"],
      type: "Full Stack Development",
      impact: "50% faster search, improved UX"
    },
    {
      title: "Real-Time Data Pipeline",
      description: "Automated CSV ingestion into Snowflake via Pandas and Airflow, cutting 30% of manual effort and standardizing data integrity.",
      tags: ["Snowflake", "Pandas", "Airflow", "ETL"],
      type: "Data Engineering",
      impact: "30% reduction in manual work"
    },
    {
      title: "GCP-based PySpark Pipelines",
      description: "Built scalable data processing pipelines enabling real-time dashboard insights for 50+ scholarly works.",
      tags: ["GCP", "PySpark", "Cloud Computing", "Analytics"],
      type: "Cloud Engineering",
      impact: "Real-time insights for 50+ projects"
    },
    {
      title: "Kafka-based Streaming System",
      description: "Deployed event streaming with CI/CD pipelines via Git & GCP Cloud Build, integrated anomaly detection to flag 200+ data outliers.",
      tags: ["Kafka", "GCP", "CI/CD", "Anomaly Detection"],
      type: "Data Streaming",
      impact: "200+ outliers detected"
    },
    {
      title: "Python/R Forecasting Models",
      description: "Built time-series models improving accuracy by 8% across 10+ categories for course demand prediction.",
      tags: ["Python", "R", "Machine Learning", "Time Series"],
      type: "Machine Learning",
      impact: "8% accuracy improvement"
    },
    {
      title: "Interactive Dashboards",
      description: "Created comprehensive analytics dashboards using Tableau, Power BI, and custom visualization solutions.",
      tags: ["Tableau", "Power BI", "Analytics", "Visualization"],
      type: "Data Visualization",
      impact: "Enhanced decision making"
    }
  ];

  return (
    <section id="work" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="bg-gradient-cosmic bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A collection of data engineering and full-stack projects that demonstrate my expertise in building scalable, 
            high-performance systems and delivering meaningful insights.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-cosmic transition-all duration-300 hover:-translate-y-2 bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {project.type}
                  </Badge>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <Github className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <CardTitle className="text-lg font-semibold leading-tight">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-sm text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="text-sm font-medium text-accent">
                  Impact: {project.impact}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="cosmic" size="lg">
            <Github className="w-4 h-4 mr-2" />
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};