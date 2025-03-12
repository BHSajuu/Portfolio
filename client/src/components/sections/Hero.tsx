import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Code2, Cpu, Terminal } from "lucide-react";
import { SiGithub, SiLeetcode, SiLinkedin } from "react-icons/si";

const typewriterVariants = {
  hidden: { width: 0 },
  visible: {
    width: "100%",
    transition: {
      duration: 1,
      ease: "easeOut",
      delay: 0.5,
    },
  },
};

const cursorVariants = {
  blinking: {
    opacity: [0, 0, 1, 1],
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatDelay: 0,
    },
  },
};

const handleNavClick = (
  e: React.MouseEvent<HTMLAnchorElement>,
  href: string
) => {
  e.preventDefault();
  const element = document.querySelector(href);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export function Hero() {
  return (
    <section className="ml-16 min-h-screen relative overflow-hidden bg-gradient-to-b from-background to-background/80">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10" />
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute inset-0 opacity-10"
            initial={{ rotate: 0, scale: 1 }}
            animate={{
              rotate: [0, 90, 180, 270, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              delay: i * 2,
              ease: "linear",
            }}>
            <div className="w-full h-full border-[40px] rounded-full border-primary/20" />
          </motion.div>
        ))}
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 min-h-screen flex items-center relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6">
            {/* Full Stack Developer with typewriter effect */}
            <div className="inline-block">
              <div className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 inline-flex items-center gap-2">
                <Code2 className="w-4 h-4" />
                <div className="relative">
                  <motion.div
                    variants={typewriterVariants}
                    initial="hidden"
                    animate="visible"
                    className="overflow-hidden whitespace-nowrap">
                    Full Stack Developer
                  </motion.div>
                  <motion.div
                    variants={cursorVariants}
                    animate="blinking"
                    className="absolute right-[-4px] top-0 w-[2px] h-full bg-primary"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              {/* Name and Title with reveal effect */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 1.5,
                  type: "spring",
                  stiffness: 100,
                }}
                className="text-4xl md:text-6xl font-bold leading-tight relative overflow-hidden">
                <motion.div
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 1.5 }}
                  className="text-3xl md:text-4xl font-medium mb-8">
                  Boktiar Hussain Talukdar
                </motion.div>
                {/* <motion.div
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 1.7 }}
                  className="text-3xl md:text-4xl font-medium mb-2">
                  Mechanical Engineer
                </motion.div> */}
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{ duration: 1, delay: 1.5 }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent"
                />
              </motion.h1>

              {/* Passionate About Tech with floating effect */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  y: [0, -8, 0],
                  filter: [
                    "drop-shadow(0 0 0px hsl(var(--primary)))",
                    "drop-shadow(0 0 10px hsl(var(--primary)))",
                    "drop-shadow(0 0 0px hsl(var(--primary)))",
                  ],
                }}
                transition={{
                  y: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                  filter: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                  opacity: {
                    duration: 0.5,
                    delay: 2.3,
                  },
                }}
                className="block text-4xl md:text-6xl font-bold">
                <span className="bg-gradient-to-r from-primary to-primary/50 text-transparent bg-clip-text">
                  Passionate About Tech
                </span>
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3, duration: 0.5 }}
              className="text-xl text-muted-foreground max-w-lg">
              Combining analytical rigor from DSA with modern full-stack
              development to create impactful digital experiences
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.5, duration: 0.5 }}
              className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-2 text-lg" asChild>
                <a
                  href="#projects"
                  onClick={(e) => handleNavClick(e, "#projects")}>
                  <Terminal className="w-5 h-5" />
                  View Projects
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 text-lg"
                asChild>
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, "#contact")}>
                  Contact Me
                </a>
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 4, duration: 0.5 }}
              className="flex gap-4 mt-4">
              <a
                href="https://www.linkedin.com/in/boktiar-hussain-58766a254/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-primary/20 hover:bg-primary/10 transition-colors">
                <SiLinkedin className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/BHSajuu"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-primary/20 hover:bg-primary/10 transition-colors">
                <SiGithub className="w-6 h-6" />
              </a>
              <a
                href="https://leetcode.com/u/Boktiar/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-primary/20 hover:bg-primary/10 transition-colors">
                <SiLeetcode className="w-6 h-6" />
              </a>
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative aspect-square w-[500px] h-[500px] mx-auto">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-primary/5 animate-pulse" />
            <div className="relative rounded-full overflow-hidden border-2 border-primary/20 w-full h-full">
              <img
                src="assets/profile_image.jpeg"
                alt="Professional headshot"
                className="object-cover object-center w-full h-full scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
            {/* Tech icons floating around */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                initial={{ rotate: i * 120 }}
                animate={{
                  rotate: [i * 120, i * 120 + 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  width: "40px",
                  height: "40px",
                  top: "5%",
                  left: "50%",
                  marginLeft: "-20px",
                  marginTop: "-20px",
                  transform: "translate(-50%, -50%)",
                  transformOrigin: `center ${250 * 1}px`,
                }}>
                <div className="w-10 h-10 rounded-lg bg-background/80 backdrop-blur-sm border border-primary/20 flex items-center justify-center shadow-lg">
                  <Cpu className="w-6 h-6 text-primary" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
