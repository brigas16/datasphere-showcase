import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { Search, Filter } from "lucide-react";

// Import project images
import mlProject from "@/assets/ml-project.jpg";
import nlpProject from "@/assets/nlp-project.jpg";
import analyticsProject from "@/assets/analytics-project.jpg";

const categories = ["All", "Machine Learning", "Data Analytics", "NLP", "Visualization"];

const projects = [
  {
    id: 1,
    title: "Customer Churn Prediction",
    description: "Built a machine learning model to predict customer churn using ensemble methods, achieving 94% accuracy and helping reduce customer attrition by 15%.",
    image: mlProject,
    category: "Machine Learning",
    tags: ["Python", "Scikit-learn", "XGBoost", "Pandas"],
    githubUrl: "https://github.com/username/churn-prediction",
    liveUrl: "https://churn-demo.herokuapp.com",
    details: {
      overview: "Developed a comprehensive customer churn prediction system for a telecommunications company using advanced machine learning techniques.",
      methodology: "Utilized ensemble methods including Random Forest, XGBoost, and Gradient Boosting with careful feature engineering and hyperparameter tuning.",
      results: "Achieved 94% accuracy with 0.89 F1-score, identifying key factors contributing to customer churn and providing actionable insights for retention strategies.",
      impact: "Implementation led to a 15% reduction in customer attrition rate and $2.3M in retained revenue over 6 months."
    }
  },
  {
    id: 2,
    title: "Sentiment Analysis Dashboard",
    description: "Created a real-time sentiment analysis system for social media monitoring using BERT transformers and interactive visualizations.",
    image: nlpProject,
    category: "NLP",
    tags: ["BERT", "PyTorch", "Streamlit", "MongoDB"],
    githubUrl: "https://github.com/username/sentiment-dashboard",
    liveUrl: "https://sentiment-dashboard.streamlit.app",
    details: {
      overview: "Developed a real-time sentiment analysis platform that processes social media data to provide instant insights into public opinion.",
      methodology: "Implemented BERT-based transformer models fine-tuned on domain-specific data with real-time data pipeline using Apache Kafka.",
      results: "Processed over 1M tweets daily with 92% accuracy in sentiment classification across multiple languages.",
      impact: "Enabled marketing teams to respond to trends 3x faster and improved campaign effectiveness by 25%."
    }
  },
  {
    id: 3,
    title: "Sales Analytics Platform",
    description: "Designed and built a comprehensive sales analytics platform with automated reporting and predictive forecasting capabilities.",
    image: analyticsProject,
    category: "Data Analytics",
    tags: ["Power BI", "SQL", "Python", "Azure"],
    githubUrl: "https://github.com/username/sales-analytics",
    details: {
      overview: "Created an end-to-end sales analytics solution that transformed how the sales team tracks performance and predicts future trends.",
      methodology: "Built automated ETL pipelines, implemented time series forecasting models, and designed interactive dashboards with drill-down capabilities.",
      results: "Reduced reporting time by 80% and improved forecast accuracy by 35% using ARIMA and Prophet models.",
      impact: "Sales team increased quarterly revenue by 18% through data-driven decision making and improved target setting."
    }
  }
];

const ProjectsSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === "All" || project.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore my latest data science projects showcasing machine learning, analytics, and innovative solutions.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-6 mb-12">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              placeholder="Search projects, technologies, or keywords..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 h-12 text-base shadow-soft border-0 bg-card"
            />
          </div>
          
          <div className="flex items-center gap-2">
            <Filter className="text-muted-foreground w-5 h-5" />
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="transition-all duration-200"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              category={project.category}
              tags={project.tags}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-semibold text-foreground mb-2">No projects found</h3>
            <p className="text-muted-foreground">Try adjusting your search terms or filters.</p>
          </div>
        )}
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default ProjectsSection;