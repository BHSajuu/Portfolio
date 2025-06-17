import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";
import { motion } from "framer-motion";
import { Code, Database, Globe } from "lucide-react";
import { SiGit, SiNodedotjs, SiReact } from "react-icons/si";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      "React",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "HTML/CSS",
      "Tailwind CSS",
      "Framer Motion",
      "Three.js",
      "Clerk",
      "Material UI",
      "shadcn/ui",
    ],
    icon: <SiReact className="w-8 h-8 text-blue-500" />,
    color: "from-blue-500/20 to-blue-600/5",
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "Express",
      "SQL",
      "RESTful APIs",
      "MongoDB",
      "Mongoose",
    ],
    icon: <SiNodedotjs className="w-8 h-8 text-green-500" />,
    color: "from-green-500/20 to-green-600/5",
  },
  {
    title: "Tools & Others",
    skills: [
      "Java",
      "Python",
      "DBMS",
      "Git",
      "VS Code",
      "Data Structures & Algorithms",
      "Problem Solving",
      "Solidworks",
      "Ansys",
    ],
    icon: <SiGit className="w-8 h-8 text-orange-500" />,
    color: "from-orange-500/20 to-orange-600/5",
  },
];

export function Skills() {
  return (
    <section id="skills" className="pt-10 bg-muted/20 lg:px-6 pb-7">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl font-bold ">Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full "></div>
          
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-12">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.01 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="h-full shadow-lg hover:shadow-xl hover:shadow-blue-300/30 transition-shadow duration-300"
            >
              <Card className="h-full overflow-hidden bg-gradient-to-br border-0">
                <div className={`h-2 w-full bg-gradient-to-r ${category.color}`}></div>
                <CardContent className="p-6 pt-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-lg bg-card border">{category.icon}</div>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="secondary"
                        className="animate-in fade-in-10 transition-all duration-300 hover:bg-primary/20"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 lg:gap-12 mt-12"
        >
            <Card className="p-6 flex flex-col items-center text-center hover:scale-105  hover:shadow-xl hover:shadow-blue-300/30 transition-all hover:border-transparent duration-300 ease-in-out">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Code className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Clean Code</h3>
            <p className="text-muted-foreground">
              I write maintainable, well-documented code following best practices and design patterns.
            </p>
          </Card>

          <Card className="p-6 flex flex-col items-center text-center hover:scale-105  hover:shadow-xl hover:shadow-blue-300/30 transition-all hover:border-transparent duration-300 ease-in-out">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Globe className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Responsive Design</h3>
            <p className="text-muted-foreground">
              Creating seamless experiences across all devices from mobile to desktop.
            </p>
          </Card>

          <Card className="p-6 flex flex-col items-center text-center hover:scale-105  hover:shadow-xl hover:shadow-blue-300/30 transition-all hover:border-transparent duration-300 ease-in-out">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Database className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Data Structures</h3>
            <p className="text-muted-foreground">
              Proficient in optimizing algorithms and solving complex problems efficiently.
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}