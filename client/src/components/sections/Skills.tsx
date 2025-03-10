import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SiReact, SiTypescript, SiNodedotjs, SiPostgresql, SiTailwindcss, SiGit } from "react-icons/si";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "TypeScript", "HTML/CSS", "Tailwind CSS", "Framer Motion"],
    icon: <SiReact className="w-8 h-8" />,
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "PostgreSQL", "RESTful APIs", "WebSocket"],
    icon: <SiNodedotjs className="w-8 h-8" />,
  },
  {
    title: "Tools & Others",
    skills: ["Git", "VS Code", "Data Structures", "Algorithms", "Problem Solving"],
    icon: <SiGit className="w-8 h-8" />,
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      {category.icon}
                      <h3 className="text-xl font-semibold">{category.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <Badge key={skill} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
