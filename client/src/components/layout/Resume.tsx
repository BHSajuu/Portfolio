import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

import { cn } from "@/lib/utils";
import {
  DownloadIcon,
  ExternalLinkIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  PhoneIcon,
} from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 * i, duration: 0.6, ease: "anticipate" },
  }),
};

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-background/90 p-6 sm:p-12">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-5xl mx-auto space-y-12"
        custom={0}
      >
        {/* Header */}
        <motion.div
          variants={containerVariants}
          custom={1}
          className="flex flex-col items-center bg-background/90 border-2 border-primary/30 rounded-[2rem] p-8 sm:p-10 shadow-xl backdrop-blur-xl backdrop-saturate-150"
        >
          <h1 className="text-4xl sm:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent drop-shadow-md">
            Boktiar Hussain Talukdar
          </h1>
          <div className="flex flex-wrap justify-center gap-6 text-foreground/80 mt-2">
            <motion.div whileHover={{ y: -3 }} className="flex items-center space-x-2">
              <MailIcon size={22} className="text-primary/90" />
              <span className="text-foreground/90 hover:text-primary transition-colors">boktiaroff01@gmail.com</span>
            </motion.div>
            <motion.div whileHover={{ y: -3 }} className="flex items-center space-x-2">
              <PhoneIcon size={22} className="text-primary/90" />
              <span className="text-foreground/90 hover:text-primary transition-colors">+91-600-2580-289</span>
            </motion.div>
          </div>
          <div className="flex  flex-wrap justify-center gap-6 mt-6">
            {[
              { Icon: SiGithub, label: 'Github', href: 'https://github.com/BHSajuu' },
              { Icon: SiLinkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/username/' },
              
            ].map((link, idx) => (
              <motion.a
                key={idx}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, translateY: -2 }}
                className="flex items-center space-x-2  bg-primary/10 border-2 border-primary/20 px-5 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all duration-200 hover:bg-primary/15 group"
              >
                <link.Icon size={24} className=" group-hover:text-primary" />
                <span className="font-semibold text-gray-300 group-hover:text-primary transition-colors">{link.label}</span>
              </motion.a>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 bg-gradient-to-br from-primary to-primary/80 text-background px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-shadow font-bold hover:brightness-105"
              onClick={() => window.open('https://drive.google.com/file/d/1Cdf1eaEnGyM80Eg1r2qv184KamexfiOI/view?usp=sharing', '_blank')}
            >
              <DownloadIcon size={24} className="text-background/90" />
              <span className="text-gray-400">Download PDF</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Sections */}
        {[
          { id: 'Experience', title: 'Experience', items: [
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
          { id: 'Projects', title: 'Projects', items: [
              {
                label: 'BHConnect - Video Calling application',
                sub: 'Nextjs, TypeScript, Clerk, Stream, Tailwind CSS',
                links: [{ text: 'Repo', href: 'https://github.com/BHSajuu/BHConnect.git' }, { text: 'Live', href: 'https://bh-connect-vqwv.vercel.app/' }]
              },
              {
                label: 'Chatty',
                sub: 'React, Javascript, Tailwind CSS, DaisyUI, Zustand, Node.js, Express.js, MongoDB, Socket.IO',
                links: [{ text: 'Repo', href: 'https://github.com/BHSajuu/chatty.git' }, { text: 'Live', href: 'https://bh-chatty.onrender.com/' }]
              },
              {
                label: 'Live React Code Editor',
                sub: 'React, Sandpack, Tailwind CSS, XTerm.js, Google Gemini API',
                links: [{ text: 'Repo', href: 'https://github.com/BHSajuu/Live-React-Code-Editor.git' }, { text: 'Live', href: 'https://live-react-code-editor-eosin.vercel.app/' }]
              },
              {
                label: 'Simon Game - Web-Based Memory Game',
                sub: 'HTML, CSS, JavaScript',
                links: [{ text: 'Repo', href: 'https://github.com/BHSajuu/Simon-Game' }, { text: 'Live', href: 'https://bhsajuu.github.io/Simon-Game/' }]
              }
            ]
          },
          { id: 'Education', title: 'Education', items: [
              { label: 'NIT Silchar', sub: 'B.Tech Mechanical Engineering (CGPA: 7.3) | July 2022 - June 2026' },
              { label: 'Ajmal College', sub: '12th Boards (84.5%) | July 2019 - June 2021' },
              { label: 'Anipur Adarsha Vidyaniketan', sub: '10th Boards (74.9%) | July 2017 - June 2019' }
            ]
          },
          { id: 'Skills', title: 'Skills', grid: true, items: [
              "React","Java","JavaScript","TypeScript","SQL","Stream",
              "Next.js","Clerk","Bootstrap","Material UI","shadcn/ui","HTML",
              "Node.js","Express.js","MySQL","MongoDB","Git","CSS",
              "C++","Tailwind CSS","DSA","DBMS","Firebase"
            ]
          },
          { id: 'Leadership', title: 'Extracurricular & Leadership', items: [
              { label: 'IEEE RAS NIT Silchar — WebMaster (Sep 2024 - Present)', subPoints: [
                  'Collaborated to design & develop society website.',
                  'Implemented server-side logic & MongoDB management.'
                ] }
            ]
          }
        ].map((section, idx) => (
          <motion.section key={section.id} variants={containerVariants} custom={2 + idx}>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-primary/90 pb-2 border-b-4 border-primary/30 w-fit">
              {section.title}
            </h2>
            {section.grid ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {section.items.map((skill, i) => (
                  <motion.div 
                    whileHover={{ scale: 1.05, translateY: -4 }}
                    className={cn(
                      "py-2 px-4 rounded-xl",
                      "text-center font-medium text-foreground/90",
                      "border-2 border-primary/20 shadow-sm hover:shadow-lg",
                      "transition-all duration-200",
                      "bg-gradient-to-b from-background/95 to-primary/5",
                      "hover:text-primary/90"
                    )}
                    key={i}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            ) : (
              section.items.map((item, i) => (
                <Card key={i} className="rounded-xl mb-4 border-2 border-primary/20 shadow-lg hover:shadow-xl transition-shadow group hover:border-primary/40 bg-gradient-to-br from-background/95 to-primary/5">
                  <CardContent className="p-6 flex flex-col sm:flex-row sm:justify-between gap-4">
                    <div>
                      {typeof item === 'object' && 'label' in item && (
                        <h3 className="text-2xl font-semibold text-foreground/90">{item.label}</h3>
                      )}
                      {typeof item === 'object' && 'sub' in item && <p className="text-foreground/70 mt-1 text-sm leading-relaxed">{item.sub}</p>}
                      {typeof item === 'object' && 'period' in item && item.period && <p className="text-foreground/70 mt-1 text-sm italic">{item.period}</p>}
                      {typeof item === 'object' && 'points' in item && (
                        <ul className="list-disc list-inside mt-2 space-y-1 text-foreground/80">
                          {item.points.map((pt, pi) => (
                            <li key={pi}>{pt}</li>
                          ))}
                        </ul>
                      )}
                      {typeof item === 'object' && 'subPoints' in item && (
                        <ul className="list-disc list-inside mt-2 space-y-1 ml-4 text-foreground/80">
                          {item.subPoints.map((pt, pi) => (
                            <li key={pi}>{pt}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                    {typeof item === 'object' && 'links' in item && (
                      <div className="flex flex-wrap gap-4 mt-4 sm:mt-0">
                        {item.links.map((ln, li) => (
                          <a
                            key={li}
                            href={ln.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-1 text-primary/90 hover:text-primary transition-colors"
                          >
                            <ExternalLinkIcon size={18} />
                            <span>{ln.text}</span>
                          </a>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))
            )}
          </motion.section>
        ))}
      </motion.div>
    </div>
  );
}