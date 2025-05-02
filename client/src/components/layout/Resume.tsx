"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import {
  Download,
  ExternalLink,
  Mail,
  MapPin,
  Phone,
  UserCircle2,
} from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";

export default function ResumePage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const fadeInUpVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const sections = [
    {
      id: 'Experience',
      title: 'Experience',
      icon: "briefcase",
      items: [
        {
          label: 'Bluestock Fintech SDE Intern',
          period: 'March 2025 - Present',
          points: [
            'Led team to build web app & REST API for IPO info.',
            'Displayed company logo, price band, dates, listing details, CMP, and returns.',
            'Enabled download of RHP & DRHP PDFs.'
          ]
        }
      ]
    },
    {
      id: 'Projects',
      title: 'Projects',
      icon: "code",
      items: [
        {
          label: 'BHConnect - Video Calling application',
          sub: 'Nextjs, TypeScript, Clerk, Stream, Tailwind CSS',
          links: [
            { text: 'Repository', href: 'https://github.com/BHSajuu/BHConnect.git' },
            { text: 'Live Demo', href: 'https://bh-connect-vqwv.vercel.app/' }
          ]
        },
        {
          label: 'Chatty',
          sub: 'React, Javascript, Tailwind CSS, DaisyUI, Zustand, Node.js, Express.js, MongoDB, Socket.IO',
          links: [
            { text: 'Repository', href: 'https://github.com/BHSajuu/chatty.git' },
            { text: 'Live Demo', href: 'https://bh-chatty.onrender.com/' }
          ]
        },
        {
          label: 'Live React Code Editor',
          sub: 'React, Sandpack, Tailwind CSS, XTerm.js, Google Gemini API',
          links: [
            { text: 'Repository', href: 'https://github.com/BHSajuu/Live-React-Code-Editor.git' },
            { text: 'Live Demo', href: 'https://live-react-code-editor-eosin.vercel.app/' }
          ]
        },
        {
          label: 'Simon Game - Web-Based Memory Game',
          sub: 'HTML, CSS, JavaScript',
          links: [
            { text: 'Repository', href: 'https://github.com/BHSajuu/Simon-Game' },
            { text: 'Live Demo', href: 'https://bhsajuu.github.io/Simon-Game/' }
          ]
        }
      ]
    },
    {
      id: 'Education',
      title: 'Education',
      icon: "graduation-cap",
      items: [
        {
          label: 'NIT Silchar',
          sub: 'B.Tech Mechanical Engineering (CGPA: 7.3) | July 2022 - June 2026',
          location: 'Silchar, Assam'
        },
        {
          label: 'Ajmal College',
          sub: '12th Boards (84.5%) | July 2019 - June 2021',
          location: 'Hojai, Assam'
        },
        {
          label: 'Anipur Adarsha Vidyaniketan',
          sub: '10th Boards (74.9%) | July 2017 - June 2019',
          location: 'Hojai, Assam'
        }
      ]
    },
    {
      id: 'Skills',
      title: 'Skills',
      icon: "tool",
      categories: [
        {
          name: "Frontend",
          skills: ["React", "JavaScript", "TypeScript", "HTML", "CSS", "Next.js", "Tailwind CSS", "Bootstrap", "Material UI", "shadcn/ui"]
        },
        {
          name: "Backend",
          skills: ["Node.js", "Express.js", "Java", "C++"]
        },
        {
          name: "Database",
          skills: ["MongoDB", "MySQL", "SQL", "Firebase", "DBMS"]
        },
        {
          name: "Tools & Others",
          skills: ["Git", "DSA", "Stream", "Clerk"]
        }
      ]
    },
    {
      id: 'Leadership',
      title: 'Leadership',
      icon: "users",
      items: [
        {
          label: 'IEEE RAS NIT Silchar — WebMaster',
          period: 'Sep 2024 - Present',
          subPoints: [
            'Collaborated to design & develop society website.',
            'Implemented server-side logic & MongoDB management.'
          ]
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-background/90 pt-8 pb-16 px-4 sm:px-8 lg:px-16">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-5xl mx-auto space-y-12"
      >
        {/* Header/Profile Section */}
        <motion.div
          variants={itemVariants}
          className="relative overflow-hidden bg-gradient-to-br from-background/80 to-background/60 border-2 border-primary/20 rounded-[2rem] p-8 sm:p-12 shadow-xl backdrop-blur-xl"
        >
          {/* Background patterns */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0ibm9uZSI+PC9yZWN0Pgo8cGF0aCBkPSJNMzAgMzAgTDYwIDMwIEw2MCA2MCBMMzAgNjAiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgZmlsbD0ibm9uZSI+PC9wYXRoPgo8cGF0aCBkPSJNMzAgMzAgTDMwIDYwIEwwIDYwIEwwIDMwIiBzdHJva2U9IiNmZmYiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIGZpbGw9Im5vbmUiPjwvcGF0aD4KPHBhdGggZD0iTTMwIDMwIEwwIDMwIEwwIDAgTDMwIDAiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgZmlsbD0ibm9uZSI+PC9wYXRoPgo8cGF0aCBkPSJNMzAgMzAgTDMwIDAgTDYwIDAgTDYwIDMwIiBzdHJva2U9IiNmZmYiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIGZpbGw9Im5vbmUiPjwvcGF0aD4KPC9zdmc+')]"></div>
          </div>

          <div className="relative z-10">
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="flex flex-col items-center"
              >
                {/* Name and title with animated underline */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2 text-center">
                  <span className="relative inline-block">
                    Boktiar Hussain Talukdar
                    <motion.span
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ delay: 0.8, duration: 0.8, ease: "easeInOut" }}
                      className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary/80 to-primary/20 rounded-full"
                    />
                  </span>
                </h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="text-xl text-foreground/80 mt-2 font-medium"
                >
                  Software Developer
                </motion.p>

                {/* Contact Information */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.5 }}
                  className="flex flex-wrap justify-center gap-5 mt-6"
                >
                  <TooltipProvider delayDuration={300}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <motion.div 
                          whileHover={{ y: -3 }} 
                          className="flex items-center gap-2 bg-primary/5 hover:bg-primary/10 px-4 py-2 rounded-lg transition-all duration-300"
                        >
                          <Mail className="text-primary" size={18} />
                          <span className="text-foreground/90">boktiaroff01@gmail.com</span>
                        </motion.div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Send me an email</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>

                  <TooltipProvider delayDuration={300}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <motion.div 
                          whileHover={{ y: -3 }}
                          className="flex items-center gap-2 bg-primary/5 hover:bg-primary/10 px-4 py-2 rounded-lg transition-all duration-300"
                        >
                          <Phone className="text-primary" size={18} />
                          <span className="text-foreground/90">+91-600-2580-289</span>
                        </motion.div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Call me</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>

                  <TooltipProvider delayDuration={300}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <motion.div 
                          whileHover={{ y: -3 }}
                          className="flex items-center gap-2 bg-primary/5 hover:bg-primary/10 px-4 py-2 rounded-lg transition-all duration-300"
                        >
                          <MapPin className="text-primary" size={18} />
                          <span className="text-foreground/90">Silchar, Assam, India</span>
                        </motion.div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>My location</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </motion.div>

                {/* Social Links */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1, duration: 0.5 }}
                  className="flex flex-wrap justify-center gap-4 mt-8"
                >
                  {[
                    { Icon: SiGithub, label: 'GitHub', href: 'https://github.com/BHSajuu' },
                    { Icon: SiLinkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/username/' },
                   
                  ].map((link, idx) => (
                    <motion.a
                      key={idx}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, translateY: -3 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center gap-2 bg-foreground/5 hover:bg-primary/15 px-6 py-2.5 rounded-full border border-primary/20 shadow-sm hover:shadow-md transition-all duration-300 group"
                    >
                      <link.Icon size={20} className="text-foreground/70 group-hover:text-primary transition-colors duration-300" />
                      <span className="font-medium text-foreground/80 group-hover:text-primary transition-colors duration-300">{link.label}</span>
                    </motion.a>
                  ))}

                  <motion.a
                    href="https://drive.google.com/file/d/1Cdf1eaEnGyM80Eg1r2qv184KamexfiOI/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-2 bg-gradient-to-r from-primary to-primary/70 text-primary-foreground px-6 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <Download size={20} />
                    <span className="font-medium">Download Resume</span>
                  </motion.a>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Tabs for different sections */}
        <motion.div variants={itemVariants} className="w-full relative">
          <Tabs defaultValue="Experience" className="w-full">
            <div className="sticky top-4 z-10 bg-background/80 backdrop-blur-md rounded-full p-1 border border-primary/20 shadow-md mb-8 overflow-x-auto scrollbar-hide">
              <TabsList className="w-full bg-transparent h-12 px-1">
                {sections.map((section) => (
                  <TabsTrigger
                    key={section.id}
                    value={section.id}
                    className="flex-1 data-[state=active]:bg-primary/10 data-[state=active]:text-primary data-[state=active]:font-medium data-[state=active]:shadow-sm transition-all duration-300"
                  >
                    {section.title}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {sections.map((section) => (
              <TabsContent key={section.id} value={section.id} className="pt-4">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={containerVariants}
                  className="space-y-8"
                >
                  <motion.div variants={fadeInUpVariant} className="flex items-center gap-3 mb-2">
                    <h2 className="text-3xl font-bold text-primary">{section.title}</h2>
                    <div className="h-0.5 flex-1 bg-primary/20 rounded-full" />
                  </motion.div>

                  {/* Render section content based on type */}
                  {section.id === 'Skills' ? (
                    <div className="space-y-8">
                      {section.categories?.map((category, cIdx) => (
                        <motion.div key={cIdx} variants={fadeInUpVariant} className="space-y-4">
                          <h3 className="text-xl font-semibold text-foreground/90">{category.name}</h3>
                          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                            {category.skills.map((skill, sIdx) => (
                              <motion.div
                                key={sIdx}
                                whileHover={{ scale: 1.05, translateY: -2 }}
                                whileTap={{ scale: 0.98 }}
                                className="bg-gradient-to-br from-background to-primary/5 hover:from-primary/10 hover:to-primary/5 border border-primary/20 hover:border-primary/30 rounded-lg px-4 py-3 shadow-sm hover:shadow-md transition-all duration-300"
                              >
                                <p className="text-center font-medium text-foreground/90 hover:text-primary transition-colors duration-300">{skill}</p>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  ) : (
                    <div className="space-y-6">
                      {(section.items ?? []).map((item, idx) => (
                        <motion.div
                          key={idx}
                          variants={fadeInUpVariant}
                          className="w-full"
                        >
                          <Card className="border border-primary/20 hover:border-primary/30 shadow-md hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-background/90 to-background/70 backdrop-blur-sm overflow-hidden group">
                            <CardContent className="p-0">
                              <div className="relative">
                                {/* Subtle accent line */}
                                <div className="absolute left-0 top-0 w-1 h-full bg-primary/30 group-hover:bg-primary/60 transition-colors duration-300"></div>
                                <div className="p-6 pl-8">
                                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                                    <div className="space-y-2">
                                      <div className="flex items-center gap-2">
                                        <h3 className="text-xl font-semibold">{item.label}</h3>
                                        {"period" in item && item.period && (
                                          <Badge variant="outline" className="text-xs font-medium">
                                            {item.period}
                                          </Badge>
                                        )}
                                      </div>
                                      
                                      {"sub" in item && item.sub && (
                                        <p className="text-foreground/70 text-sm">{item.sub}</p>
                                      )}
                                      
                                      {"location" in item && item.location && (
                                        <div className="flex items-center gap-1.5 text-foreground/60 text-sm">
                                          <MapPin size={14} />
                                          <span>{item.location}</span>
                                        </div>
                                      )}
                                      
                                      {"points" in item && item.points && (
                                        <ul className="list-disc list-inside space-y-1 text-foreground/80 mt-3">
                                          {item.points.map((point, pi) => (
                                            <li key={pi} className="text-sm">{point}</li>
                                          ))}
                                        </ul>
                                      )}
                                      
                                      {"subPoints" in item && item.subPoints && (
                                        <ul className="list-disc list-inside space-y-1 text-foreground/80 mt-3">
                                          {item.subPoints.map((point, pi) => (
                                            <li key={pi} className="text-sm">{point}</li>
                                          ))}
                                        </ul>
                                      )}
                                    </div>
                                    
                                    {"links" in item && item.links && (
                                      <div className="flex flex-wrap gap-3">
                                        {item.links.map((link, li) => (
                                          <Button
                                            key={li}
                                            variant="outline"
                                            size="sm"
                                            className="gap-1.5 text-foreground/80 hover:text-primary hover:border-primary/30 transition-colors duration-300"
                                            asChild
                                          >
                                            <a href={link.href} target="_blank" rel="noopener noreferrer">
                                              <ExternalLink size={14} />
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