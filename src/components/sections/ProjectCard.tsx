import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { ExternalLink, Github } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "../ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";

// Add this helper outside the component

const cardVariants = {
  offscreen: {
    y: 100,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const techVariants = {
  hover: {
    scale: 1.05,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hover: {
    y: -3,
    textShadow: "0px 0px 8px rgba(59, 130, 246, 0.5)",
  },
};

interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  github: string;
  demo: string;
}

function useClickOutside(ref: any, handler: () => void) {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (!ref.current || ref.current.contains(event.target)) return;
      handler();
    };
    document.addEventListener("mousedown", listener);
    return () => document.removeEventListener("mousedown", listener);
  }, [ref, handler]);
}

function ProjectCard({ project }: { project: Project }) {
  const imageRef = useRef<HTMLDivElement>(null);
  const descRef = useRef(null);
  const [showFullDesc, setShowFullDesc] = useState(false);
  const [coords, setCoords] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  useClickOutside(descRef, () => setShowFullDesc(false));

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return;
    const rect = imageRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateY = (x - centerX) / 25;
    const rotateX = (centerY - y) / 25;

    imageRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    imageRef.current.style.boxShadow = `${-rotateY * 2}px ${rotateX * 2}px 20px rgba(0, 0, 0, 0.2)`;
  };

  const handleMouseLeave = () => {
    if (imageRef.current) {
      imageRef.current.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
      imageRef.current.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
    }
  };

  const handleDescriptionClick = (e: React.MouseEvent) => {
    const rect = (e.target as HTMLElement).getBoundingClientRect();
    setCoords({ x: rect.left, y: rect.top + window.scrollY });
    setShowFullDesc(true);
  };

  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.5 }}
      variants={cardVariants}
      whileHover="hover"
      className="h-full relative"
    >
      <Card className="h-full rounded-3xl flex flex-col overflow-hidden border-transparent bg-gradient-to-br from-white/10 to-transparent backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:shadow-blue-300/20">
        <CardHeader className="p-0 relative overflow-hidden">
          <motion.div
            ref={imageRef}
            className="relative overflow-hidden"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
          </motion.div>
        </CardHeader>

        <CardContent className="flex-grow p-6">
          <CardTitle className="mb-3 text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            {project.title}
          </CardTitle>

          <motion.div variants={techVariants} className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech) => (
              <motion.span
                key={tech}
                variants={itemVariants}
                className="px-3 py-1 bg-primary/10 text-blue-200 rounded-full text-xs font-medium backdrop-blur-sm"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>

          <p
            className="text-muted-foreground line-clamp-3 mb-4 cursor-pointer"
            onClick={handleDescriptionClick}
          >
            {project.description}
          </p>
        </CardContent>

        <CardFooter className="p-6 pt-0 flex justify-between">
          <Button 
            variant="outline" 
            size="sm" 
            asChild
            className="bg-transparent backdrop-blur-sm border-white/20 hover:bg-white/10 transition-colors"
          >
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              Code
            </a>
          </Button>

          {project.demo ? (
            <Button 
              size="sm" 
              asChild
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transition-all"
            >
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                Live Demo
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          ) : (
            <Dialog>
              <DialogTrigger asChild>
                <Button 
                  size="sm"
                  className="bg-gradient-to-r from-blue-600/50 to-purple-600/75 hover:from-blue-700 hover:to-purple-700 text-white transition-all"
                >
                  Live Demo
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </DialogTrigger>
              
              <DialogContent className="max-w-md rounded-lg">
                <DialogHeader>
                  <div className="bg-yellow-500/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4 mx-auto">
                    <span className="text-2xl">🚧</span>
                  </div>
                  <DialogTitle className="text-xl text-center">Project Ongoing</DialogTitle>
                  <DialogDescription className="pt-2 text-base text-center">
                    This project is currently in development. You can view the
                    code on GitHub!
                  </DialogDescription>
                </DialogHeader>

                <div className="flex gap-3 mt-6">
                  <Button asChild className="flex-1">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      View Code
                    </a>
                  </Button>
                  <DialogClose asChild>
                    <Button variant="outline" className="flex-1">
                      Close
                    </Button>
                  </DialogClose>
                </div>
              </DialogContent>
            </Dialog>
          )}
        </CardFooter>
      </Card>

      {/* Full description pop-out with smooth scale-up animation */}
      {showFullDesc &&
        createPortal(
          <motion.div
            ref={descRef}
            className="absolute text-justify mx-3 hyphens-auto z-50 bg-zinc-900 text-white p-4 rounded-3xl border border-white/10 w-96 hover:cursor-pointer hover:shadow-xl hover:shadow-blue-300/30"
            style={{
              top: coords.y + 30,
              left: coords.x,
            }}
            initial={{ scale: 0.2, opacity: 0.5 }}
            animate={{ scale: 1.25, opacity: 1 }}
            transition={{ type: "spring", duration: 1.2, bounce: 0.3 }}
            onClick={() => setShowFullDesc(false)}
          >
            <p className="text-sm leading-relaxed">{project.description}</p>
          </motion.div>,
          document.body
        )}
    </motion.div>
  );
}

export default ProjectCard;
