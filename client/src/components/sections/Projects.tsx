import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { motion } from "framer-motion";
import { ExternalLink, Github, Search } from "lucide-react";
import { useState, useRef, useEffect, useMemo } from "react";

const projects = [
  {
    title: "CodeNexta",
    description:"CodeNexta is a powerful SaaS-based online code editor. It supports 10+ languages, offers VSCode-like themes, smart output handling, free & pro plans, webhook integration, profile tracking, code sharing, and a dashboard with stats. Perfect for developers to collaborate, share, and execute code in real-time.",
    image: "assets/codeNexta.png",
    tech: ["Next.js", "TypeScript", "Tailwind", "Framer-motion", "Monaco-editor", "Zustand", "Convex", "Clerk", "Lemon-Squeezy"],
    github: "https://github.com/BHSajuu/SaaS-Code-Editor.git",
    demo: "https://codenexta.vercel.app/",
  },
  {
    title: "FitFlow - AI Fitness Trainer",
    description:
      "Smart AI Assistant: Engage in conversation with an AI that asks about your fitness goals, physical condition, and preferences. Personalized Workout Plans and Diet Recommendations.",
    image: "assets/fitness.png",
    tech: ["Next.js", "TypeScript", "Tailwind", "Shadcn UI", "Clerk", "Convex", "Vapi", "LLM(Gemini)"],
    github: "https://github.com/BHSajuu/Fitness-Trainer-AI.git",
    demo: "https://fitness-trainer-ai.vercel.app/",
  },
    {
    title: "Chatty",
    description:
      "Chatty is a MERN  based real-time chat application. It allows users to communicate seamlessly with features like user authentication, real-time messaging, and more.",
    image: "assets/chatty.png",
    tech: [
      "Node.js",
      "Express",
      "React",
      "Javascript",
      "Tailwind",
      "DaisyUI",
      "Zustand",
      "MongoDB",
      "Socket.IO",
      "Stream SDk"
    ],
    github: "https://github.com/BHSajuu/chatty.git",
    demo: "https://chatty-hu1i.onrender.com",
  },
  {
    title: "BHConnect - Video Calling application",
    description:
      "This project, BHConnect, is a video calling application built using modern web technologies. The application provides features for scheduling and managing video calls, including upcoming, ended, and recorded calls.",
    image: "assets/BHC.png",
    tech: ["Next.js", "TypeScript", "Tailwind", "Clerk", "Stream SDK"],
    github: "https://github.com/BHSajuu/BHConnect.git",
    demo: "https://bh-connect-vqwv.vercel.app/",
  },

  {
    title: "IEEE Society Website",
    description:
      "This is the IEEE Society Website. It is built using modern tools like React, Nodejs, and Tailwind CSS. You can check the code on GitHub, but there is no demo available yet.",
    image: "assets/IEEE.png",
    tech: [
      "React",
      "Tailwind",
      "JavaScript",
      "Nodejs",
      "Expressjs",
      "MongoDB",
      "Mongoose",
      "Framer Motion",
    ],
    github: "https://github.com/BHSajuu/IEEE-Website.git",
    demo: "",
  },
  {
    title: "Live React Code Editor",
    description:
      "It is a live code editor built using React and Sandpack, allowing users to write, edit, and execute React code in real time. The project also integrates external package installation and AI-powered code suggestions using the Gemini API.",
    image: "assets/React_Editor.png",
    tech: [
      "React",
      "Sandpack",
      "JavaScript",
      "Tailwind",
      "XTerm.js",
      "LLM(Gemini)",
    ],
    github: "https://github.com/BHSajuu/Live-React-Code-Editor.git",
    demo: "https://live-react-code-editor-eosin.vercel.app/",
  },
  {
    title: "Advanced Placement Preparation Tracker",
    description:
      "This is a smart and personalized preparation tracker for MAANG aspirants.It helps users set 60-day goals, track daily progress, and visualize skill-based completion.",
    image: "assets/Tracker.png",
    tech: [
      "React", 
      "Tailwind",
      "TypeScript",
    ],
    github: "https://github.com/BHSajuu/Advanced-Placement-Preparation-Tracker.git",
    demo: "https://advanced-placement-preparation-trac.vercel.app/",
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

  {
    title: "Text to Image Generator",
    description:
      "A simple Next.js application that transforms text prompts into images using AI. This project leverages modern technologies such as Next.js, Tailwind CSS, and React to deliver a seamless, interactive experience.",
    image: "assets/Text.png",
    tech: ["Next.js", "Tailwind","TypeScript", "FLUX.1-dev model ", "Lucide-react"],
    github: "https://github.com/BHSajuu/Text-to-image-.git",
    demo: "https://text-to-image-sooty.vercel.app/",
  },
];

interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  github: string;
  demo: string;
}

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

function ProjectCard({ project }: { project: Project }) {
  const imageRef = useRef<HTMLDivElement>(null);

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

  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.5 }}
      variants={cardVariants}
      whileHover="hover"
      className="h-full"
    >
      <Card className="h-full flex flex-col overflow-hidden border-transparent bg-gradient-to-br from-white/10 to-transparent backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:shadow-blue-300/20">
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
          
          <motion.div
            variants={techVariants}
            className="flex flex-wrap gap-2 mb-4"
          >
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
          
          <p className="text-muted-foreground line-clamp-3 mb-4">
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
    </motion.div>
  );
}

// Extract all unique tech stacks
const allTechs = projects.reduce((acc, project) => {
  project.tech.forEach(tech => {
    const trimmedTech = tech.trim();
    if (!acc.includes(trimmedTech)) {
      acc.push(trimmedTech);
    }
  });
  return acc;
}, [] as string[]);

// Sort by frequency for better UX
const techFrequency: Record<string, number> = {};
projects.forEach(project => {
  project.tech.forEach(tech => {
    const trimmedTech = tech.trim();
    techFrequency[trimmedTech] = (techFrequency[trimmedTech] || 0) + 1;
  });
});

const popularTechs = ["Next.js", "React", "Node.js","TypeScript","JavaScript"] as string[];

export function Projects() {
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSticky, setIsSticky] = useState(false);
  
  // Combine search and filter
  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesTech = selectedTech 
        ? project.tech.some(tech => tech.trim().toLowerCase() === selectedTech.toLowerCase()) 
        : true;
      
      const matchesSearch = searchQuery 
        ? project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
          project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          project.tech.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()))
        : true;
      
      return matchesTech && matchesSearch;
    });
  }, [selectedTech, searchQuery]);

  // Handle scroll for sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const clearFilters = () => {
    setSelectedTech(null);
    setSearchQuery("");
  };

  return (
    <section id="projects" className="pt-10 pb-16 lg:px-8 relative">
      <div className="absolute top-0 left-0 right-0 bottom-0 overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Projects
          </motion.h2>
        </motion.div>

        {/* Awesome Filter Navbar */}
        <motion.div 
          className={`mb-12 transition-all duration-300 ${isSticky ? "sticky top-4 z-10 bg-gray-400/10 backdrop-blur-lg py-4 rounded-xl shadow-lg border border-white/10" : ""}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="px-5 flex flex-col md:flex-row gap-4 items-center justify-self-start lg:gap-32">
            {/* Search Bar */}
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search projects..."
                className="w-full pl-10 pr-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/20 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 transition-all duration-300"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-white transition-colors"
                >
                  ×
                </button>
              )}
            </div>

            {/* Tech Filter Chips */}
            <div className="flex flex-wrap justify-center gap-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={clearFilters}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  !selectedTech && !searchQuery
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30"
                    : "bg-gray-900/90 backdrop-blur-sm border border-white/20 hover:bg-white/10"
                }`}
              >
                All Projects
              </motion.button>
              
              {popularTechs.map((tech) => (
                <motion.button
                  key={tech}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedTech(selectedTech === tech ? null : tech)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedTech === tech
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30"
                      : "bg-gray-900/90 backdrop-blur-sm border border-white/20 hover:bg-white/10"
                  }`}
                >
                  {tech}
                </motion.button>
              ))}
            </div>
          </div>
          
          
        </motion.div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {filteredProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </motion.div>
        ) : (
          <motion.div 
            className="text-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-5xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold mb-2">No projects found</h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              Try adjusting your search or filter criteria. No projects match "{searchQuery}"{selectedTech ? ` in the ${selectedTech} category` : ''}.
            </p>
            <Button 
              onClick={clearFilters}
              variant="outline"
              className="mt-6"
            >
              Clear filters
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
}