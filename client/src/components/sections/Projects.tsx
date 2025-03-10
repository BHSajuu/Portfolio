import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Project Management App",
    description: "A full-stack application for managing projects and tasks with real-time updates.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
    tech: ["React", "Node.js", "PostgreSQL", "WebSocket"],
    github: "#",
    demo: "#",
  },
  {
    title: "Algorithm Visualizer",
    description: "Interactive visualization of various sorting and pathfinding algorithms.",
    image: "https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8",
    tech: ["TypeScript", "React", "Framer Motion"],
    github: "#",
    demo: "#",
  },
  {
    title: "E-commerce Platform",
    description: "A modern e-commerce platform with cart management and payment integration.",
    image: "https://images.unsplash.com/photo-1739514984003-330f7c1d2007",
    tech: ["Next.js", "Stripe", "Tailwind CSS"],
    github: "#",
    demo: "#",
  },
  {
    title: "Portfolio Website",
    description: "A responsive portfolio website built with modern technologies.",
    image: "https://images.unsplash.com/photo-1510759395231-72b17d622279",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    github: "#",
    demo: "#",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                  </CardHeader>
                  <CardContent>
                    <CardTitle className="mb-2">{project.title}</CardTitle>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-primary/10 text-primary rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex gap-4">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
