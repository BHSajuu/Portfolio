import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Download,
  ExternalLink,
  Mail,
  MapPin,
  Phone,
  UserCircle2,
  Briefcase,
  Code,
  GraduationCap,
  Wrench,
  Users,
  ChevronRight,
  Award,
  Globe,
  BarChart2
} from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";

export default function ResumePage() {
  const [activeTab, setActiveTab] = useState("Experience");
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const fadeInUpVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const sections = [
    {
      id: 'Experience',
      title: 'Professional Experience',
      icon: Briefcase,
      items: [
        {
          label: 'Bluestock Fintech - Software Engineering Intern',
          period: 'April 2025 - May 2025',
          points: [
            'Led a team of 10 developers to architect and launch a web portal and REST API delivering real-time IPO data to 3220+ users',
            'Improved public access to IPO insights by 27% through efficient data delivery',
            'Engineered front-end display of 10+ IPO metrics (price bands, issue size, listing gains, CMP)',
            'Achieved 35% reduction in user queries and enhanced data transparency'
          ]
        }
      ]
    },
    {
      id: 'Projects',
      title: 'Technical Projects',
      icon: Code,
      items: [
        {
          label: 'BHConnect - Video Calling Application',
          sub: 'Modern video conferencing platform with scheduling and recording features',
          tech: 'Nextjs, TypeScript, Clerk, Stream, Tailwind CSS',
          links: [
            { text: 'Repository', href: 'https://github.com/BHSajuu/BHConnect.git' },
            { text: 'Live Demo', href: 'https://bh-connect-vqwv.vercel.app/' }
          ]
        },
        {
          label: 'Chatty - Real-time Chat Application',
          sub: 'Full-featured chat application with user authentication and real-time messaging',
          tech: 'React, Javascript, Tailwind CSS, DaisyUI, Zustand, Node.js, Express.js, MongoDB, Socket.IO',
          links: [
            { text: 'Repository', href: 'https://github.com/BHSajuu/chatty.git' },
            { text: 'Live Demo', href: 'https://chatty-notb.onrender.com/login' }
          ]
        },
        {
          label: 'Live React Code Editor',
          sub: 'Interactive coding environment with AI-powered suggestions',
          tech: 'React, Sandpack, Tailwind CSS, XTerm.js, Google Gemini API',
          links: [
            { text: 'Repository', href: 'https://github.com/BHSajuu/Live-React-Code-Editor.git' },
            { text: 'Live Demo', href: 'https://live-react-code-editor-eosin.vercel.app/' }
          ]
        }
      ]
    },
    {
      id: 'Education',
      title: 'Education',
      icon: GraduationCap,
      items: [
        {
          label: 'National Institute of Technology, Silchar',
          degree: 'B.Tech Mechanical Engineering',
          details: 'CGPA: 7.3/10.0',
          period: 'July 2022 - June 2026',
          location: 'Silchar, Assam'
        },
        {
          label: 'Ajmal College Of Arts Commerce and Science, Hojai',
          degree: '12th Boards (AHSEC)',
          details: 'Percentage: 84.5%',
          period: 'July 2019 - June 2021',
          location: 'Hojai, Assam'
        },
        {
          label: 'Anipur Adarhsa Vidyanketan, Karimganj',
          degree: '10th Boards (SEBA)',
          details: 'Percentage: 74.9%',
          period: 'July 2017 - June 2019',
          location: 'Karimganj, Assam'
        }
      ]
    },
    {
      id: 'Skills',
      title: 'Technical Skills',
      icon: Wrench,
      categories: [
        {
          name: "Frontend Development",
          skills: ["React", "JavaScript", "TypeScript", "HTML", "CSS", "Next.js", "Tailwind CSS", "Bootstrap", "Material UI", "shadcn/ui"]
        },
        {
          name: "Backend & Languages",
          skills: ["Node.js", "Express.js", "Java", "C++"]
        },
        {
          name: "Database & Storage",
          skills: ["MongoDB", "MySQL", "SQL", "Firebase", "DBMS"]
        },
        {
          name: "Tools & Platforms",
          skills: ["Git", "GitHub", "DSA", "Stream", "Clerk"]
        }
      ]
    },
    {
      id: 'Leadership',
      title: 'Leadership & Activities',
      icon: Users,
      items: [
        {
          label: 'IEEE RAS NIT Silchar — WebMaster',
          period: 'Sep 2024 - Present',
          points: [
            'Collaborated to design & develop society website',
            'Implemented server-side logic & MongoDB management'
          ]
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-600/90 to-slate-950/70 pt-8 pb-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-6xl mx-auto space-y-8"
      >
        {/* Enhanced Header/Profile Section */}
        <motion.div
          variants={itemVariants}
          className="relative overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 sm:p-8 shadow-2xl"
        >
          {/* Background accent elements */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-blue-600/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-600/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row gap-8">
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="flex flex-col items-center md:items-start"
              >
                {/* Profile image placeholder */}
                <div className="mb-4 bg-gradient-to-br from-blue-500 to-indigo-600 p-1 rounded-full shadow-lg">
                  <div className="bg-slate-800 p-1 rounded-full">
                    <div className="bg-gradient-to-br from-slate-700 to-slate-800 w-24 h-24 rounded-full flex items-center justify-center">
                      <UserCircle2 className="text-blue-400" size={40} />
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            
            <div className="flex-1">
              <div className="mb-4">
                <motion.h1
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-3xl sm:text-4xl font-bold text-white"
                >
                  Boktiar Hussain Talukdar
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="text-lg text-blue-200 mt-2 font-medium flex items-center gap-2"
                >
                  <BarChart2 size={18} />
                  Software Developer
                </motion.p>
              </div>

              {/* Enhanced Contact Information */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-4"
              >
                <div className="flex items-center gap-2 text-blue-100">
                  <Mail className="text-blue-300 flex-shrink-0" size={18} />
                  <span className="text-sm truncate">boktiaroff01@gmail.com</span>
                </div>

                <div className="flex items-center gap-2 text-blue-100">
                  <Phone className="text-blue-300 flex-shrink-0" size={18} />
                  <span className="text-sm">+91-600-2580-289</span>
                </div>

                <div className="flex items-center gap-2 text-blue-100">
                  <MapPin className="text-blue-300 flex-shrink-0" size={18} />
                  <span className="text-sm">Silchar, Assam, India</span>
                </div>

              
              </motion.div>

              {/* Enhanced Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.4 }}
                className="flex flex-wrap gap-8 mt-6"
              >
                <motion.a
                  href="https://github.com/BHSajuu"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, translateY: -3 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 hover:border-white/40 px-4 py-2 rounded-lg shadow-sm hover:shadow transition-all duration-300 group"
                >
                  <SiGithub size={18} className="text-blue-200 group-hover:text-white transition-colors duration-300" />
                  <span className="text-sm font-medium text-blue-100 group-hover:text-white transition-colors duration-300">GitHub</span>
                </motion.a>

                <motion.a
                  href="https://www.linkedin.com/in/boktiar-hussain/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, translateY: -3 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 hover:border-white/40 px-4 py-2 rounded-lg shadow-sm hover:shadow transition-all duration-300 group"
                >
                  <SiLinkedin size={18} className="text-blue-200 group-hover:text-white transition-colors duration-300" />
                  <span className="text-sm font-medium text-blue-100 group-hover:text-white transition-colors duration-300">LinkedIn</span>
                </motion.a>

                <motion.a
                  href="https://drive.google.com/file/d/1Qj9wLsWNWENKKwN0zOmwaSlhFoYCUFF3/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-2 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <Download size={18} />
                  <span className="text-sm font-medium">Download Resume</span>
                </motion.a>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          variants={itemVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-items-center ml-24"
        >
          <Card className="hover:cursor-pointer bg-gradient-to-br from-blue-300 to-indigo-100 border border-blue-500 shadow-sm hover:shadow-xl hover:shadow-blue-300/30 transition-all duration-300">
            <CardContent className="p-4 flex items-center gap-3">
              <div className="bg-blue-100 p-2 rounded-lg">
                <Briefcase className="text-blue-600" size={20} />
              </div>
              <div>
                <p className="text-sm text-slate-600">Experience</p>
                <p className="text-lg font-bold text-slate-800">6+ month</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="hover:cursor-pointer bg-gradient-to-br from-blue-300 to-indigo-100 border border-blue-500 shadow-sm hover:shadow-xl hover:shadow-blue-300/30 transition-all duration-300">
            <CardContent className="p-4 flex items-center gap-3">
              <div className="bg-indigo-100 p-2 rounded-lg">
                <Code className="text-indigo-600" size={20} />
              </div>
              <div>
                <p className="text-sm text-slate-600">Projects</p>
                <p className="text-lg font-bold text-slate-800">8</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="hover:cursor-pointer bg-gradient-to-br from-blue-300 to-indigo-100 border border-blue-500 shadow-sm hover:shadow-xl hover:shadow-blue-300/30 transition-all duration-300">
            <CardContent className="p-4 flex items-center gap-3">
              <div className="bg-purple-100 p-2 rounded-lg">
                <Award className="text-purple-600" size={20} />
              </div>
              <div>
                <p className="text-sm text-slate-600">Technologies</p>
                <p className="text-lg font-bold text-slate-800">25+</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Enhanced Tabs for different sections */}
        <motion.div variants={itemVariants} className="w-full relative">
          <Tabs defaultValue="Experience" className="w-full">
            <div className="sticky top-4 z-10 bg-gradient-to-br from-blue-300 to-indigo-100 hover:shadow-xl hover:shadow-blue-300/30 transition-all duration-300 backdrop-blur-sm rounded-xl p-1 border border-slate-200 shadow-md mb-8">
              <TabsList className="w-full bg-transparent h-auto px-0">
                {sections.map((section) => (
                  <TabsTrigger
                    key={section.id}
                    value={section.id}
                    className="flex-1 h-12 data-[state=active]:bg-blue-50 data-[state=active]:text-black data-[state=active]:shadow-sm transition-all duration-300 group"
                  >
                    <div className="flex items-center justify-center gap-2">
                      <section.icon className="w-4 h-4 text-blue-800 group-data-[state=active]:text-blue-800 transition-colors" />
                      <span className="font-medium text-black">{section.title}</span>
                    </div>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {sections.map((section) => (
              <TabsContent key={section.id} value={section.id} className="pt-2">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={containerVariants}
                  className="space-y-6 bg-gradient-to-r from-slate-700 to-slate-800 p-6 rounded-xl shadow-lg"
                >
                  <motion.div variants={fadeInUpVariant} className="flex items-center gap-3 mb-4">
                    <section.icon className="w-5 h-5 text-blue-600" />
                    <h2 className="text-2xl font-bold text-gray-200">{section.title}</h2>
                    <div className="h-px flex-1 bg-blue-100 rounded-full" />
                  </motion.div>

                  {/* Render section content based on type */}
                  {section.id === 'Skills' ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {section.categories?.map((category, cIdx) => (
                        <motion.div 
                          key={cIdx} 
                          variants={fadeInUpVariant}
                          className="bg-gradient-to-br from-blue-300 to-indigo-100 border border-slate-200 rounded-xl shadow-sm p-5"
                        >
                          <h3 className="text-lg font-semibold text-black flex items-center gap-2 mb-4 pb-2 border-b border-slate-100">
                            <span className="w-2 h-2 rounded-full bg-green-500"></span>
                            {category.name}
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {category.skills.map((skill, sIdx) => (
                              <motion.div
                                key={sIdx}
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.98 }}
                                className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 hover:border-blue-300 rounded-lg px-3 py-2 shadow-sm hover:shadow transition-all duration-300"
                              >
                                <p className="text-sm font-medium text-slate-700">{skill}</p>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  ) : (
                    <div className="space-y-5">
                      {(section.items ?? []).map((item, idx) => (
                        <motion.div
                          key={idx}
                          variants={fadeInUpVariant}
                          className="w-full"
                        >
                          <Card className="border border-slate-200  hover:border-blue-300 shadow-sm hover:shadow-lg hover:shadow-black transition-all duration-300 bg-gradient-to-br from-blue-300 to-indigo-100 overflow-hidden">
                            <CardContent className="p-0">
                              <div className="relative">
                                <div className="p-5">
                                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                                    <div className="space-y-3 flex-1">
                                      <div className="flex flex-wrap items-center gap-2">
                                        <h3 className="text-lg font-semibold text-slate-800">{item.label}</h3>
                                        {"period" in item && item.period && (
                                          <Badge 
                                            className="text-xs font-medium bg-blue-100 text-blue-700"
                                          >
                                            {item.period}
                                          </Badge>
                                        )}
                                      </div>
                                      
                                      {"sub" in item && item.sub && (
                                        <p className="text-slate-600 text-sm">{item.sub}</p>
                                      )}
                                      
                                      {"tech" in item && item.tech && (
                                        <p className="text-black text-sm bg-slate-300 p-2 rounded-md border border-slate-100">
                                          {item.tech}
                                        </p>
                                      )}
                                      
                                      {"degree" in item && item.degree && (
                                        <p className="text-slate-700 font-medium">{item.degree}</p>
                                      )}
                                      
                                      {"details" in item && item.details && (
                                        <p className="text-slate-600 text-sm">{item.details}</p>
                                      )}
                                      
                                      {"location" in item && item.location && (
                                        <div className="flex items-center gap-1.5 text-slate-500 text-xs">
                                          <MapPin size={12} className="text-blue-500" />
                                          <span>{item.location}</span>
                                        </div>
                                      )}
                                      
                                      {"points" in item && item.points && (
                                        <ul className="space-y-2 text-slate-700 mt-3">
                                          {item.points.map((point, pi) => (
                                            <li key={pi} className="flex items-start gap-2 text-sm">
                                              <ChevronRight size={14} className="text-blue-500 mt-0.5 flex-shrink-0" />
                                              <span>{point}</span>
                                            </li>
                                          ))}
                                        </ul>
                                      )}
                                    </div>
                                    
                                    {"links" in item && item.links && (
                                      <div className="flex flex-col gap-2 mt-3 md:mt-0">
                                        {item.links.map((link, li) => (
                                          <Button
                                            key={li}
                                            variant="outline"
                                            size="sm"
                                            className="gap-1.5 text-xs text-white hover:bg-blue-600 hover:border-blue-600 transition-colors duration-300"
                                            asChild
                                          >
                                            <a href={link.href} target="_blank" rel="noopener noreferrer">
                                              <ExternalLink size={12} />
                                              <span>{link.text}</span>
                                            </a>
                                          </Button>
                                        ))}
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </motion.div>
    </div>
  );
}