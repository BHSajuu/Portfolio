import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export function About() {
  return (
    <section id="about" className="pt-5 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className=" text-3xl font-bold">About Me</h2>
          <div className="w-44 h-1 bg-primary mx-auto rounded-full "></div>
         
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ y: -10, scale: 1.01 }}
            className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <Card className=" h-full overflow-hidden bg-gradient-to-br border-0">
              <div className="h-6 w-full bg-gradient-to-r from-blue-500/20 to-blue-600/5"></div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Background</h3>
                <p className="text-muted-foreground">
                  As a third-year Mechanical Engineering student, I've developed a strong foundation in problem-solving and analytical thinking. My passion for technology led me to explore software development, where I've found my true calling.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ y: -10, scale: 1.01 }}
            className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <Card className="h-full overflow-hidden bg-gradient-to-br border-0">
              <div className="h-6 w-full bg-gradient-to-r from-green-500/20 to-green-600/5"></div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Journey into Tech</h3>
                <p className="text-muted-foreground">
                  Through self-study and practical projects, I've gained expertise in full-stack development and data structures & algorithms. I believe my unique background brings a fresh perspective to software engineering.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}