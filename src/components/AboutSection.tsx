import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Database, 
  BarChart3, 
  Code, 
  Lightbulb, 
  Users,
  Award,
  BookOpen
} from "lucide-react";

const skills = [
  { category: "Programming", items: ["Python", "R", "SQL", "JavaScript", "Scala"] },
  { category: "Machine Learning", items: ["Scikit-learn", "TensorFlow", "PyTorch", "XGBoost", "Keras"] },
  { category: "Data Tools", items: ["Pandas", "NumPy", "Apache Spark", "Hadoop", "Airflow"] },
  { category: "Visualization", items: ["Tableau", "Power BI", "Plotly", "D3.js", "Matplotlib"] },
  { category: "Cloud & Big Data", items: ["AWS", "Azure", "GCP", "Docker", "Kubernetes"] },
  { category: "Databases", items: ["PostgreSQL", "MongoDB", "Snowflake", "BigQuery", "Redis"] }
];

const achievements = [
  {
    icon: Award,
    title: "Data Science Certification",
    description: "Advanced certification in Machine Learning and AI",
    year: "2023"
  },
  {
    icon: BookOpen,
    title: "Published Research",
    description: "3 peer-reviewed papers in data science journals",
    year: "2022-2023"
  },
  {
    icon: Users,
    title: "Team Leadership",
    description: "Led a team of 5 data scientists on enterprise projects",
    year: "2022"
  }
];

const AboutSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* About Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                About Me
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  I'm a passionate data scientist with over 5 years of experience transforming 
                  complex data into actionable business insights. My expertise spans machine learning, 
                  statistical analysis, and data visualization.
                </p>
                <p>
                  I specialize in building end-to-end data solutions that drive measurable business 
                  value, from predictive models that improve customer retention to analytics platforms 
                  that optimize operations.
                </p>
                <p>
                  When I'm not analyzing data, you can find me contributing to open-source projects, 
                  writing technical blogs, or exploring the latest developments in AI and machine learning.
                </p>
              </div>
            </div>

            {/* Achievements */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground flex items-center gap-2">
                <Lightbulb className="w-6 h-6 text-data-blue" />
                Key Achievements
              </h3>
              <div className="space-y-4">
                {achievements.map((achievement, index) => {
                  const IconComponent = achievement.icon;
                  return (
                    <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-card shadow-soft">
                      <div className="p-2 rounded-lg bg-data-blue/10">
                        <IconComponent className="w-6 h-6 text-data-blue" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-semibold text-foreground">{achievement.title}</h4>
                          <Badge variant="secondary" className="text-xs">
                            {achievement.year}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground text-sm">{achievement.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <Code className="w-6 h-6 text-data-teal" />
                Technical Skills
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {skills.map((skillGroup, index) => (
                  <Card key={index} className="border-0 shadow-soft bg-gradient-card hover:shadow-medium transition-all duration-300">
                    <CardContent className="p-6">
                      <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                        {skillGroup.category === "Programming" && <Code className="w-4 h-4 text-data-blue" />}
                        {skillGroup.category === "Machine Learning" && <Brain className="w-4 h-4 text-data-purple" />}
                        {skillGroup.category === "Data Tools" && <Database className="w-4 h-4 text-data-teal" />}
                        {skillGroup.category === "Visualization" && <BarChart3 className="w-4 h-4 text-data-green" />}
                        {(skillGroup.category === "Cloud & Big Data" || skillGroup.category === "Databases") && <Database className="w-4 h-4 text-data-blue" />}
                        {skillGroup.category}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {skillGroup.items.map((skill, skillIndex) => (
                          <Badge 
                            key={skillIndex} 
                            variant="secondary" 
                            className="text-xs bg-secondary/50 hover:bg-secondary transition-colors duration-200 cursor-default"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Contact CTA */}
            <Card className="border-0 shadow-medium bg-gradient-primary text-white">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-2">Let's Work Together</h3>
                <p className="mb-6 text-blue-100">
                  Ready to turn your data into insights? Let's discuss your next project.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Badge className="bg-white/20 text-white text-sm px-4 py-2">
                    📧 john.doe@email.com
                  </Badge>
                  <Badge className="bg-white/20 text-white text-sm px-4 py-2">
                    📱 +1 (555) 123-4567
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;