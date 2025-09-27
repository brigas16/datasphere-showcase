import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Github, ExternalLink, X, Target, Lightbulb, TrendingUp, Zap } from "lucide-react";

interface ProjectDetails {
  overview: string;
  methodology: string;
  results: string;
  impact: string;
}

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  details: ProjectDetails;
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <DialogTitle className="text-2xl md:text-3xl text-foreground">
                {project.title}
              </DialogTitle>
              <div className="flex items-center gap-3">
                <Badge className="bg-data-blue text-white">
                  {project.category}
                </Badge>
                <div className="flex gap-2">
                  {project.githubUrl && (
                    <Button size="sm" variant="outline" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.liveUrl && (
                    <Button size="sm" variant="default" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          {/* Project Image */}
          <div className="relative rounded-lg overflow-hidden shadow-medium">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>

          {/* Overview */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-data-blue" />
              <h3 className="text-xl font-semibold text-foreground">Overview</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              {project.details.overview}
            </p>
          </div>

          <Separator />

          {/* Methodology */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Target className="w-5 h-5 text-data-teal" />
              <h3 className="text-xl font-semibold text-foreground">Methodology</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              {project.details.methodology}
            </p>
          </div>

          <Separator />

          {/* Results */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-data-green" />
              <h3 className="text-xl font-semibold text-foreground">Results</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              {project.details.results}
            </p>
          </div>

          <Separator />

          {/* Impact */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-data-purple" />
              <h3 className="text-xl font-semibold text-foreground">Business Impact</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              {project.details.impact}
            </p>
          </div>

          {/* Technologies */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-foreground">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, index) => (
                <Badge 
                  key={index} 
                  variant="secondary" 
                  className="bg-secondary/50 hover:bg-secondary transition-colors duration-200"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;