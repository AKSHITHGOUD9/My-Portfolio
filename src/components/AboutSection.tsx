import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GraduationCap, Award, Download, Mail } from "lucide-react";

export const AboutSection = () => {
  const education = [
    {
      degree: "Master of Science in Information (Data Track)",
      school: "University of Wisconsin, Madison",
      period: "September 2023 - May 2025",
      gpa: "3.8 / 4.0 GPA",
      focus: "Data Science, Machine Learning, Information Systems"
    },
    {
      degree: "Bachelor of Technology in Computer Science Engineering", 
      school: "Hindustan Institute of Technology and Science",
      period: "July 2019 - May 2023",
      gpa: "3.4 / 4.0 GPA",
      focus: "Software Engineering, Data Structures, Algorithms"
    }
  ];

  const skills = {
    "Languages & Scripting": ["Python", "Java", "Shell Scripting", "SQL", "T-SQL"],
    "Databases & Warehouses": ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Snowflake", "SQL Server", "SSMS"],
    "Big Data & Processing": ["PySpark", "Apache Airflow", "Kafka", "Azure Data Lake", "Azure Stream Analytics", "Azure Synapse Analytics", "Databricks"],
    "Cloud & DevOps": ["AWS (S3, EC2, Lambda, RDS, Glue)", "Azure (Microsoft Fabric, Data Factory, OneLake)", "GCP (BigQuery, Cloud Functions)", "Docker", "Terraform", "Azure DevOps", "Git"],
    "Visualization & BI": ["Tableau", "Power BI", "Amazon QuickSight", "D3.js"],
    "Libraries & Tools": ["Pandas", "NumPy", "Scikit-learn", "XGBoost", "Selenium", "Polars", "Matplotlib", "Seaborn", "spaCy", "NLTK", "Transformers"],
    "Web & Frameworks": ["Django", "Supabase", "React", "HTML/CSS"]
  };

  const certifications = [
    "Azure Databricks",
    "GCP Data Engineer", 
    "IBM Cloud",
    "Microsoft Fabric",
    "AWS Solutions Architect"
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="bg-gradient-cosmic bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-foreground/90 max-w-3xl mx-auto leading-relaxed drop-shadow-sm animate-fade-in">
            I'm a passionate Data Engineer with expertise in building end-to-end data platforms, real-time pipelines, 
            and interactive dashboards. I enjoy bringing structure to messy data through innovative solutions across 
            AWS, GCP, and Microsoft Fabric ecosystems.
          </p>
        </div>


        {/* Skills */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center animate-fade-up">Technical Skills</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, skillList], index) => (
              <Card key={index} className="bg-card/30 backdrop-blur-sm border-border/50 hover-scale bg-glow animate-scale-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader>
                  <CardTitle className="text-lg">{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="outline" className="text-xs hover-scale transition-all duration-200 hover:bg-primary/10">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center animate-fade-up">
            <Award className="inline w-6 h-6 mr-2" />
            Certifications
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {certifications.map((cert, index) => (
              <Badge key={index} variant="secondary" className="px-4 py-2 text-sm hover-scale animate-fade-in hover:bg-primary/20 transition-all duration-200" style={{animationDelay: `${index * 0.1}s`}}>
                {cert}
              </Badge>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center bg-card/30 backdrop-blur-sm rounded-lg p-8 border border-border/50 bg-glow animate-fade-up">
          <h3 className="text-2xl font-bold mb-4">Let's Work Together</h3>
          <p className="text-foreground/80 mb-6 max-w-2xl mx-auto">
            I'm always interested in discussing new opportunities, innovative projects, 
            and ways to leverage data for meaningful impact.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Button variant="cosmic" size="lg" className="hover-scale">
              <Mail className="w-4 h-4 mr-2" />
              Get In Touch
            </Button>
            <Button variant="hero" size="lg" className="hover-scale">
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
          </div>
          <div className="mt-6 text-sm text-foreground/70">
            <p>📧 akshithmothkuri@gmail.com | 📱 +1 (608) 217-6632 | 📍 United States</p>
          </div>
        </div>
      </div>
    </section>
  );
};