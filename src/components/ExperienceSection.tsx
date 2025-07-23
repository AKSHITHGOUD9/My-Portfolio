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
      achievements: [
        "Developed full-stack archival catalog system using Django/PostgreSQL and React",
        "Improved data discoverability and reduced search latency by 50%",
        "Automated CSV ingestion into Snowflake via Pandas and Airflow",
        "Built GCP-based PySpark pipelines for real-time dashboard insights",
        "Set up Dockerized microservices with CI/CD pipelines"
      ],
      skills: ["Django", "PostgreSQL", "React", "Snowflake", "GCP", "Docker", "Airflow"]
    },
    {
      title: "Data Analyst Intern (Business Optimization)",
      company: "Recreation & Wellbeing, University of Wisconsin",
      location: "Madison, WI", 
      period: "May 2024 - July 2024",
      type: "Internship",
      achievements: [
        "Designed Spark workflows to integrate sensor + ticketing data",
        "Reduced Snowflake loads by 15% through optimized data processing",
        "Connected Google Analytics with venue data, increasing monthly student attendance by 200+",
        "Automated Tableau dashboards via Lambda, saving 3 hours/week in manual refreshes",
        "Conducted A/B testing via Python and SQL, demonstrated 12% lift in engagement"
      ],
      skills: ["Apache Spark", "Snowflake", "Google Analytics", "Tableau", "Python", "SQL", "AWS Lambda"]
    },
    {
      title: "Data Science Intern",
      company: "Skill Vertex, Bangalore",
      location: "Bangalore, India",
      period: "June 2022 - August 2022",
      type: "Internship",
      achievements: [
        "Built time-series models in Python/R for course demand forecasting",
        "Improved accuracy by 8% across 10+ categories",
        "Managed ETL pipelines on AWS Redshift for 2M+ learner records",
        "Enhanced content curation workflows",
        "Delivered interactive dashboards via PySpark + QuickSight"
      ],
      skills: ["Python", "R", "AWS Redshift", "PySpark", "QuickSight", "Time Series Analysis"]
    },
    {
      title: "Data Engineering - Trainee", 
      company: "DataNest Innovations",
      location: "Chennai, India",
      period: "July 2021 - May 2023",
      type: "Training Program",
      achievements: [
        "Worked on building Python-based ETL pipelines and Django APIs for PostgreSQL and Snowflake data integration",
        "Assisted in deploying Docker/Kubernetes microservices on AWS",
        "Set up Kafka-Apache Airflow workflows for real-time log processing",
        "Contributed to Power BI/Tableau dashboards and collaborated on designing GCP-based data lakes using BigQuery"
      ],
      skills: ["Python", "Django", "PostgreSQL", "Snowflake", "Docker", "Kubernetes", "Kafka", "BigQuery"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-gradient-space">
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
            <Card key={index} className="bg-card/30 backdrop-blur-sm border-border/50 hover:shadow-cosmic transition-all duration-300">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl font-semibold mb-2">
                      {exp.title}
                    </CardTitle>
                    <CardDescription className="text-lg font-medium text-primary">
                      {exp.company}
                    </CardDescription>
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