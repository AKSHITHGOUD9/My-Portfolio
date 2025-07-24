import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

export const EducationSection = () => {
  return (
    <section id="education" className="py-20 px-6 relative overflow-hidden">
      {/* Artistic Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-accent/10 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-primary/5 rounded-full blur-2xl animate-pulse" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-cosmic bg-clip-text text-transparent">Education</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Continuous learning and academic excellence in the field of Information Science and Data Analytics
          </p>
        </div>

        {/* Education Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent transform md:-translate-x-0.5" />

          {/* Current Education */}
          <div className="relative mb-16 animate-slide-in-left">
            <div className="flex items-center mb-4">
              <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full transform md:-translate-x-2 shadow-glow-primary animate-glow-pulse" />
              <span className="ml-12 md:ml-0 md:absolute md:right-1/2 md:mr-8 text-sm text-primary font-medium bg-primary/10 px-3 py-1 rounded-full">
                September 2023 - Present
              </span>
            </div>
            
            <div className="ml-12 md:ml-0 md:w-1/2 md:ml-auto md:pl-8">
              <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-cosmic">
                <CardContent className="p-6">
                  {/* University Logo Placeholder */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-gradient-cosmic rounded-lg p-2 flex items-center justify-center">
                      <img 
                        src="/lovable-uploads/242d185f-f6e5-4e2a-87cf-39963be1afbd.png"
                        alt="University of Wisconsin"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground">Master's in Information Science</h3>
                      <p className="text-muted-foreground flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        University of Wisconsin-Madison
                      </p>
                    </div>
                    <div className="hidden md:flex items-center justify-center w-20 h-20 bg-gradient-cosmic rounded-full opacity-20">
                      <span className="text-xs text-center">Academic Journey</span>
                    </div>
                  </div>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary">Data Analysis</Badge>
                    <Badge variant="secondary">Decision Making</Badge>
                    <Badge variant="secondary">Data Visualization</Badge>
                    <Badge variant="secondary">Database Management</Badge>
                    <Badge variant="secondary">Project Management</Badge>
                    <Badge variant="secondary">Product Management</Badge>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    I am currently pursuing a Master's degree in Information Science, where I am exploring the dynamic and ever-evolving 
                    field of information management, technology, and data analysis to gain a deep understanding of how information 
                    shapes our world and influences decision-making processes.
                  </p>

                  {/* Achievements */}
                  <div className="flex items-center gap-2 text-sm text-primary">
                    <Award className="w-4 h-4" />
                    <span>Focus: Data Science & Information Systems</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Previous Education */}
          <div className="relative animate-slide-in-right">
            <div className="flex items-center mb-4">
              <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-accent rounded-full transform md:-translate-x-2 shadow-glow-accent" />
              <span className="ml-12 md:ml-0 md:absolute md:left-1/2 md:ml-8 text-sm text-accent font-medium bg-accent/10 px-3 py-1 rounded-full">
                Feb 2021 - Jun 2023
              </span>
            </div>
            
            <div className="ml-12 md:ml-0 md:w-1/2 md:pr-8">
              <Card className="bg-card/50 backdrop-blur-sm border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-cosmic">
                <CardContent className="p-6">
                  {/* Company Logo */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/70 rounded-lg p-2 flex items-center justify-center">
                      <img 
                        src="/lovable-uploads/242d185f-f6e5-4e2a-87cf-39963be1afbd.png"
                        alt="Cerence"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground">Bachelor of Technology in Computer Science Engineering</h3>
                      <p className="text-muted-foreground flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        Hindustan Institute of Technology and Science
                      </p>
                    </div>
                    <div className="hidden md:flex items-center justify-center w-20 h-20 bg-gradient-cosmic rounded-full opacity-20">
                      <span className="text-xs text-center">Academic Journey</span>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline">Software Development</Badge>
                    <Badge variant="outline">Data Structures</Badge>
                    <Badge variant="outline">Algorithms</Badge>
                    <Badge variant="outline">Database Systems</Badge>
                    <Badge variant="outline">Programming</Badge>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Built strong foundation in computer science fundamentals, programming languages, and software engineering principles that laid the groundwork for my data engineering career.
                  </p>

                  <div className="flex items-center gap-2 text-sm text-accent">
                    <GraduationCap className="w-4 h-4" />
                    <span>Foundation in Computer Science & Engineering</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};