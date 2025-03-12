import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "BHConnect - Video Calling application",
    description:
      "This project, BHConnect, is a video calling application built using modern web technologies. The application provides features for scheduling and managing video calls, including upcoming, ended, and recorded calls.",
    image: "assets/BHC.png",
    tech: ["Node.js", "TypeScript", " Tailwind CSS", "Clerk", "Stream"],
    github: "https://github.com/BHSajuu/BHConnect.git",
    demo: "https://bh-connect-vqwv.vercel.app/",
  },
  {
    title: "IEEE Society Website",
    description:
      "This is the IEEE Society Website. It is built using modern tools like React, Nodejs, and Tailwind CSS. It uses Framer Motion for smooth effects and connects to a MongoDB database using Expressjs and Mongoose. The website is simple and fun to use. You can check the code on GitHub, but there is no demo available yet.",
    image: "assets/IEEE.png",
    tech: [
      "React",
      " Tailwind CSS",
      "JavaScript",
      "Nodejs",
      "Expressjs",
      "MongoDB",
      "Mongoose",
      "Framer Motion",
    ],
    github: "https://github.com/BHSajuu/IEEE-Website.git",
    demo: "/notAvailable",
  },
  {
    title: "Simon Game - Web-Based Memory Game",
    description:
      "The game challenges players to memorize and repeat sequences of colors and sounds, progressively increasing in difficulty.",
    image: "assets/Simon.png",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/BHSajuu/Simon-Game.git",
    demo: "https://bhsajuu.github.io/Simon-Game/",
  },
  {
    title: "Chat Application",
    description:
      "A real-time chat application that allows users to communicate via text. It features secure user authentication, data storage, and message synchronization using Firebase.The app is responsive, ensuring a smooth experience across all devices.",
    image: "assets/ChapApp.png",
    tech: ["React", "JavaScript", "Firebase", " CSS"],
    github: "https://github.com/BHSajuu/Chat-Application.git",
    demo: "https://chat-app-gs-b3dbb.firebaseapp.com/",
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
          viewport={{ once: true }}>
          <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}>
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
                    <p className="text-muted-foreground mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-primary/10 text-primary rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex gap-4">
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" asChild>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer">
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
