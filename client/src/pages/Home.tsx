import { motion } from "framer-motion";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-gradient-to-b from-background to-background/80">
      {/* Background Animation (shared with Hero) */}
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
            }}
          >
            <div className="w-full h-full border-[40px] rounded-full border-primary/20" />
          </motion.div>
        ))}
      </div>

      {/* Content Wrapper */}
      <div className="relative">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
