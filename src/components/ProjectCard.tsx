import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Eye } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  onClick?: () => void;
}

const ProjectCard = ({ 
  title, 
  description, 
  image, 
  category, 
  tags, 
  githubUrl, 
  liveUrl,
  onClick 
}: ProjectCardProps) => {
  return (
    <Card className="group overflow-hidden border-0 shadow-soft hover:shadow-large transition-all duration-300 hover:-translate-y-2 bg-gradient-card">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="absolute top-4 left-4">
          <Badge className="bg-data-blue text-white shadow-soft">
            {category}
          </Badge>
        </div>
        
        <div className="absolute bottom-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
          {githubUrl && (
            <Button size="sm" variant="glass" className="p-2" asChild>
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4" />
              </a>
            </Button>
          )}
          {liveUrl && (
            <Button size="sm" variant="glass" className="p-2" asChild>
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          )}
          <Button size="sm" variant="glass" className="p-2" onClick={onClick}>
            <Eye className="w-4 h-4" />
          </Button>
        </div>
      </div>
      
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-data-blue transition-colors duration-300">
          {title}
        </h3>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Badge 
              key={index} 
              variant="secondary" 
              className="text-xs bg-secondary/50 hover:bg-secondary transition-colors duration-200"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;