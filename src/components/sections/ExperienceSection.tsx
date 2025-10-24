import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";

export const ExperienceSection = () => {
  const experiences = [
    {
      title: "Data Integration Engineer",
      company: "American Red Cross",
      location: "United States",
      period: "March 2025 - Present",
      type: "Full-time",
      logo: "/lovable-uploads/american.png",
      achievements: [],
      skills: ["Python", "Azure Data Factory", "PySpark", "LangChain", "Power BI", "Azure DevOps", "SQL", "Microservices", "CI/CD", "Data Governance"]
    },
    {
      title: "Software Engineer",
      company: "University of Wisconsin-Madison",
      location: "Madison, WI",
      period: "May 2024 - April 2025",
      type: "Full-time",
      logo: "/lovable-uploads/UWM.png",
      achievements: [],
      skills: ["React", "Node.js", "Python", "FastAPI", "GPT-4", "OpenAI API", "PostgreSQL", "Docker", "Terraform", "GitHub Actions", "Microservices", "TypeScript"]
    },
    {
      title: "Data Analyst Intern",
      company: "Recreation & Wellbeing, University of Wisconsin",
      location: "Madison, WI", 
      period: "May 2024 - July 2024",
      type: "Internship",
      logo: "/lovable-uploads/RecWell.png",
      achievements: [],
      skills: [ "Azure Fabric", "Apache Spark", "Snowflake", "Google Analytics", "Power BI", "Python", "SQL", "Power Automate", "Alteryx"]
    },
    {
      title: "Software & Data Engineer Intern",
      company: "Skill Vertex, Bangalore",
      location: "Bangalore, India",
      period: "June 2022 - August 2022",
      type: "Internship",
      logo: "/lovable-uploads/SkillVertex.png",
      achievements: [],
      skills: ["Python", "R", "AWS Redshift", "PySpark", "ETL", "Kafka", "QuickSight", "Time Series Analysis", "Machine Learning", "SQL"]
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
            My journey through data engineering, AI systems, and full-stack development across various organizations and projects.
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
                {exp.achievements.length > 0 && (
                  <ul className="space-y-2 mb-6">
                    {exp.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="flex items-start gap-2 text-sm">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                )}
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