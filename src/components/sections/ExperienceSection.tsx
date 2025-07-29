import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";

export const ExperienceSection = () => {
  const experiences = [
    {
      title: "Data Engineer/Backend Developer",
      company: "University of Wisconsin, Information School",
      location: "Madison, WI",
      period: "March 2025 - July 2025",
      type: "Full-time",
      logo: "/lovable-uploads/UWM.png",
      achievements: [
        "Built a modular data platform to explore historical poet archives using PySpark and Snowflake on GCP.",
        "Automated catalog ingestion and API integration with Airflow + Power Automate — cut manual work by 30%.",
        "Designed dbt-style pipelines to analyze poet bios, themes, and writing styles for deeper research insights.",
        "Used Alteryx to clean messy archival data and support on-demand faculty research needs.",
        "Set up Kafka streams to monitor 50M+ events in real time — boosted freshness and flagged anomalies faster.",
        "Containerized all services with Docker for clean, scalable deployments."
      ],
      skills: ["PySpark", "Kafka", "Django", "PostgreSQL", "React", "Snowflake", "GCP", "Docker", "Airflow", "Alteryx"]
    },
    {
      title: "Data Analyst Intern (Business Optimization)",
      company: "Recreation & Wellbeing, University of Wisconsin",
      location: "Madison, WI", 
      period: "May 2024 - July 2024",
      type: "Internship",
      logo: "/lovable-uploads/RecWell.png",
      achievements: [
        "Built real-time ETL pipelines with Azure Fabric, Airflow, and Spark to process sensor + ticketing data into Snowflake.",
        "Automated data syncs using Power Automate and Alteryx — kept Power BI dashboards fresh and decision-ready.",
        "Designed Power BI & Tableau dashboards to visualize peak hours and student traffic — improved space usage.",
        "Ran A/B tests with SQL and Python to test messaging strategies — boosted student engagement by 12%+.",
        "Created reusable Power BI dataflows and trained 5+ departments — enabled self-serve insights campus-wide."
      ],
      skills: [ "Azure Fabric", "Apache Spark", "Snowflake", "Google Analytics", "Power BI", "Python", "SQL", "Power Automate", "Alteryx"]
    },
    {
      title: "Data Science Intern",
      company: "Skill Vertex, Bangalore",
      location: "Bangalore, India",
      period: "June 2022 - August 2022",
      type: "Internship",
      logo: "/lovable-uploads/SkillVertex.png",
      achievements: [
        "Built time-series models in Python/R for course demand forecasting",
        "Improved forecast accuracy by 8% across 10+ course categories",
        "Managed ETL pipelines on AWS Redshift for 2M+ learner records",
        "Enhanced backend workflows for content curation and delivery",
        "Delivered interactive dashboards via PySpark + QuickSight",
        "Boosted campaign CTR by 12% using real-time Kafka sentiment analysis"
      ],
      skills: ["Python", "R", "AWS Redshift", "PySpark", "ETL", "Kafka", "QuickSight", "Time Series Analysis"]
    },
    {
      title: "Data Engineering - Trainee", 
      company: "DataNest Innovations",
      location: "Chennai, India",
      period: "July 2021 - May 2023",
      type: "Training Program",
      logo: "/lovable-uploads/DataNest.png",
      achievements: [
        "Developed Python ETL pipelines and Django APIs for data transfer",
        "Migrated and transformed data across PostgreSQL and Snowflake",
        "Set up Kafka + Airflow pipelines for real-time business metrics",
        "Built Power BI and Tableau dashboards for business teams",
        "Contributed to GCP data lake architecture using BigQuery",
        "Supported scalable analytics and automated reporting workflows"
      ],
      skills: ["Django", "PostgreSQL", "Tableau", "BigQuery"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 cosmic-bg">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Work <span className="bg-gradient-cosmic bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My journey through data engineering, analytics, and full-stack development across various organizations and projects.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="bg-card/30 backdrop-blur-sm border-border/50 hover:shadow-cosmic transition-all duration-300 group">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="relative overflow-hidden rounded-lg bg-background/50 p-3 group-hover:bg-background/80 transition-all duration-300">
                      <img 
                        src={exp.logo} 
                        alt={exp.company} 
                        className="w-12 h-12 object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-semibold mb-2">
                        {exp.title}
                      </CardTitle>
                      <CardDescription className="text-lg font-medium text-primary">
                        {exp.company}
                      </CardDescription>
                    </div>
                  </div>
                  <div className="flex flex-col items-start md:items-end gap-2">
                    <Badge variant="secondary" className="text-xs">
                      {exp.type}
                    </Badge>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {exp.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex} className="flex items-start gap-2 text-sm">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      {achievement}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};