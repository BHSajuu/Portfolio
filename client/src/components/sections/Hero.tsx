import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Code2, Cpu, Terminal } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-b from-background to-background/80">
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
            }}
          >
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
            className="space-y-6"
          >
            <div className="inline-block">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 inline-flex items-center gap-2"
              >
                <Code2 className="w-4 h-4" />
                <span className="text-sm font-medium">Full Stack Developer</span>
              </motion.div>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-4xl md:text-6xl font-bold leading-tight"
            >
              Mechanical Engineer 
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/50">
                Passionate About Tech
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-xl text-muted-foreground max-w-lg"
            >
              Bridging the gap between mechanical systems and software solutions. Expertise in DSA and full-stack development.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Button size="lg" className="gap-2 text-lg" asChild>
                <Link href="#projects">
                  <Terminal className="w-5 h-5" />
                  View Projects
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="gap-2 text-lg" asChild>
                <Link href="#contact">
                  Contact Me
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative aspect-square"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-primary/5 animate-pulse" />
            <div className="relative rounded-full overflow-hidden border-2 border-primary/20 aspect-square">
              <img
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf"
                alt="Professional headshot"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
            {/* Tech icons floating around */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                initial={{ rotate: (i * 120) }}
                animate={{ 
                  rotate: [(i * 120), (i * 120) + 360]
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  width: '40px',
                  height: '40px',
                  top: '50%',
                  left: '50%',
                  marginLeft: '-20px',
                  marginTop: '-20px',
                  transformOrigin: '150px 0px'
                }}
              >
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