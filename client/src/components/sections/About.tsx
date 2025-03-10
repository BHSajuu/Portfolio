import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          
          <Card>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Background</h3>
                  <p className="text-muted-foreground">
                    As a third-year Mechanical Engineering student, I've developed a strong foundation in problem-solving and analytical thinking. My passion for technology led me to explore software development, where I've found my true calling.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4">Journey into Tech</h3>
                  <p className="text-muted-foreground">
                    Through self-study and practical projects, I've gained expertise in full-stack development and data structures & algorithms. I believe my unique background brings a fresh perspective to software engineering.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
