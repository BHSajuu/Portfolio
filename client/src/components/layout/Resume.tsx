import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  DownloadIcon,
  ExternalLinkIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  PhoneIcon,
} from "lucide-react";

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
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80 p-6 sm:p-12">
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
          className="flex flex-col items-center bg-background/80 border border-primary/20 rounded-3xl p-10 shadow-lg backdrop-blur-lg"
        >
          <h1 className="text-6xl font-extrabold mb-4 text-primary animate-pulse">
            Boktiar Hussain Talukdar
          </h1>
          <div className="flex flex-wrap justify-center gap-6 text-muted-foreground mt-2">
            <motion.div whileHover={{ y: -3 }} className="flex items-center space-x-2">
              <MailIcon size={22} className="text-primary" />
              <span>boktiaroff01@gmail.com</span>
            </motion.div>
            <motion.div whileHover={{ y: -3 }} className="flex items-center space-x-2">
              <PhoneIcon size={22} className="text-primary" />
              <span>+91-600-2580-289</span>
            </motion.div>
          </div>
          <div className="flex flex-wrap justify-center gap-6 mt-6">
            {[
              { Icon: ExternalLinkIcon, label: 'Portfolio', href: 'https://portfolio055.vercel.app/' },
              { Icon: GithubIcon, label: 'Github', href: 'https://github.com/BHSajuu' },
              { Icon: LinkedinIcon, label: 'LinkedIn', href: 'https://www.linkedin.com/in/username/' },
            ].map((link, idx) => (
              <motion.a
                key={idx}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-2 bg-primary/10 border border-primary/20 px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-shadow"
              >
                <link.Icon size={24} className="text-primary" />
                <span className="font-semibold text-primary">{link.label}</span>
              </motion.a>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 bg-primary text-background px-6 py-2 rounded-full shadow hover:opacity-90 transition-opacity"
              onClick={() => window.open('/resume.pdf', '_blank')}
            >
              <DownloadIcon size={24} />
              <span className="font-semibold">Download PDF</span>
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
            <h2 className="text-4xl font-bold mb-6 text-primary border-b-2 border-primary/50 inline-block">
              {section.title}
            </h2>
            {section.grid ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {section.items.map((skill, i) => (
                  <motion.div whileHover={{ scale: 1.05 }} className="bg-background py-2 px-4 rounded-full text-center font-medium text-primary border border-primary/20 shadow-sm hover:shadow-md transition-shadow" key={i}>
                    {skill}
                  </motion.div>
                ))}
              </div>
            ) : (
              section.items.map((item, i) => (
                <Card key={i} className="rounded-xl mb-4 border border-primary/20 shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="flex flex-col sm:flex-row sm:justify-between">
                    <div>
                      {typeof item === 'object' && 'label' in item && (
                        <h3 className="text-2xl font-semibold text-primary">{item.label}</h3>
                      )}
                      {typeof item === 'object' && 'sub' in item && <p className="italic text-muted-foreground mt-1">{item.sub}</p>}
                      {typeof item === 'object' && 'period' in item && item.period && <p className="italic text-muted-foreground mt-1">{item.period}</p>}
                      {typeof item === 'object' && 'points' in item && (
                        <ul className="list-disc list-inside mt-2 space-y-1">
                          {item.points.map((pt, pi) => (
                            <li key={pi}>{pt}</li>
                          ))}
                        </ul>
                      )}
                      {typeof item === 'object' && 'subPoints' in item && (
                        <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
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
                            className="flex items-center space-x-1 text-primary hover:underline"
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
