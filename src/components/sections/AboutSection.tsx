import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Download, Mail, Linkedin, Github, Instagram } from "lucide-react";

export const AboutSection = () => {

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
    {
      name: "Microsoft Azure Fundamentals",
      link: "https://learn.microsoft.com/api/credentials/share/en-us/AKSHITHGOUD-5477/80D80966EC1E92C0?sharingId=198D4B21B0866E0B"
    },
    {
      name: "Microsoft Azure Fabric Analytics Engineer Associate", 
      link: "https://learn.microsoft.com/api/credentials/share/en-us/AKSHITHGOUD-5477/77839805F4D24DD8?sharingId=198D4B21B0866E0B"
    },
    {
      name: "IBM Data Analyst Professional Certificate",
      link: "https://www.credly.com/badges/e6732c10-4d6b-4aac-ab6d-9cb0f0ce0362/public_url"
    },
    {
      name: "Databricks Data Engineer Associate",
      link: "https://credentials.databricks.com/38effcc3-0de1-4cc2-a766-38b7a86da684#acc.Or2PbZxw"
    }, 
    {
      name: "Udemy - Statistics for Data Science and Business Analysis",
      link: "https://www.udemy.com/certificate/UC-2d28bb6f-c17a-4e33-a9f6-9c34efcf7671/?utm_campaign=email&utm_medium=email&utm_source=sendgrid.com"
    },
    {
      name: "GCP Data Engineer",
      link: ""
    },
    {
      name: "Power BI (PL-300)",
      link: ""
    },
    {
      name: "AWS Solutions Architect",
      link: ""
    }
  ];

  return (
    <section id="about" className="py-20 px-6 cosmic-bg">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {Object.entries(skills).map(([category, skillList], index) => (
              <Card key={index} className="bg-card/30 backdrop-blur-sm border-border/50 hover-scale bg-glow animate-scale-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader className="p-4 md:p-6">
                  <CardTitle className="text-base md:text-lg">{category}</CardTitle>
                </CardHeader>
                <CardContent className="p-4 md:p-6 pt-0">
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
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 px-4">
            {certifications.map((cert, index) => (
              <Badge key={index} variant="secondary" className="px-3 md:px-4 py-2 text-xs md:text-sm hover-scale animate-fade-in hover:bg-primary/20 transition-all duration-200" style={{animationDelay: `${index * 0.1}s`}}>
                <a href={cert.link} target="_blank" rel="noopener noreferrer" className="hover:underline">{cert.name}</a>
              </Badge>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center bg-card/30 backdrop-blur-sm rounded-lg p-8 border border-border/50 animate-fade-up">
          <h3 className="text-2xl font-bold mb-4">Let's Work Together</h3>
          <p className="text-foreground/80 mb-6 max-w-2xl mx-auto">
            I'm always interested in discussing new opportunities, innovative projects, 
            and ways to leverage data for meaningful impact.
          </p>
          <div className="flex items-center justify-center gap-4">
            <a 
              href="https://drive.google.com/file/d/1ROnv6Chs7wFZfkokalR6U2Tf6R5Fvy3Y/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              style={{display: 'inline-flex', alignItems: 'center', padding: '12px 24px', backgroundColor: '#3b82f6', color: 'white', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold', position: 'relative', zIndex: 10}}
            >
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </a>
          </div>
          <div className="mt-6 text-sm text-foreground/70">
            <p>📧 akshithmothkuri@gmail.com | 📱 +1 (608) 217-6632 | 📍 United States</p>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="text-center mt-16 animate-fade-up">
          <p className="text-lg text-foreground/80 mb-8">Nice to meet you here</p>
          <div className="flex items-center justify-center gap-8 mb-8">
            <a 
              href="mailto:akshithmothkuri@gmail.com" 
              className="w-12 h-12 rounded-full border-2 border-white/30 flex items-center justify-center hover:border-primary/60 hover:bg-primary/10 transition-all duration-300 hover-scale group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Mail className="w-5 h-5 text-white/80 group-hover:text-primary transition-colors duration-300" />
            </a>
            <a 
              href="https://www.linkedin.com/in/akshithgoudmothkuri/" 
              className="w-12 h-12 rounded-full border-2 border-white/30 flex items-center justify-center hover:border-primary/60 hover:bg-primary/10 transition-all duration-300 hover-scale group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-5 h-5 text-white/80 group-hover:text-primary transition-colors duration-300" />
            </a>
            <a 
              href="https://github.com/AKSHITHGOUD9" 
              className="w-12 h-12 rounded-full border-2 border-white/30 flex items-center justify-center hover:border-accent/60 hover:bg-accent/10 transition-all duration-300 hover-scale group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-5 h-5 text-white/80 group-hover:text-accent transition-colors duration-300" />
            </a>
            <a 
              href="https://www.instagram.com/akshith__49/" 
              className="w-12 h-12 rounded-full border-2 border-white/30 flex items-center justify-center hover:border-accent/60 hover:bg-accent/10 transition-all duration-300 hover-scale group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="w-5 h-5 text-white/80 group-hover:text-accent transition-colors duration-300" />
            </a>
          </div>
          <div className="text-sm text-foreground/60">
            <p>© Akshith Mothkuri All Rights Reserved</p>
          </div>
        </div>
      </div>
    </section>
  );
};