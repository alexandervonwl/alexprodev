import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Github, ExternalLink } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Projects() {
  const projects = [
    {
      title: "Web Solution for Managing Physical Tournaments",
      description:
        "This solution helps hosts of board games tournaments to better manage participants, event lifecycle and leaderboards, through a responsive and intuitive UI. Also participants can track progress and score points in the same manner they would use a scoring card.",
      technologies: [
        "Node.js",
        "WebSockets",
        "Lambbda",
        "Cognito",
        "DynamoDB",
        "One Table Design",
        "Domain Driven Design",
        "Event Driven Design",
        "MUI",
        "React",
        "react-query",
        "GithHub Actions",
        "CI/CD",
      ],
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      github: "https://boardgamesevents.com/",
      demo: "https://boardgamesevents.com/",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      technologies: ["Next.js", "TypeScript", "Supabase", "Framer Motion"],
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      github: "#",
      demo: "#",
    },
    {
      title: "Weather Analytics Dashboard",
      description:
        "A data visualization dashboard that displays weather analytics with interactive charts, real-time updates, and location-based forecasting.",
      technologies: ["React", "D3.js", "Express.js", "PostgreSQL", "Chart.js"],
      image:
        "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop",
      github: "#",
      demo: "#",
    },
    {
      title: "Social Media API",
      description:
        "A RESTful API for social media platform with features like posts, comments, likes, user authentication, and real-time notifications.",
      technologies: ["Python", "Django", "PostgreSQL", "Redis", "Docker"],
      image:
        "https://images.unsplash.com/photo-1611262588024-d12430b98920?w=500&h=300&fit=crop",
      github: "#",
      demo: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-8 text-center">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-video overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-2"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </Button>
                    <Button size="sm" className="flex items-center gap-2">
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
