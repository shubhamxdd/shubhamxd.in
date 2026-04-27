import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const SkillsAndExperience = () => {
  return (
    <section id="about" className="py-24 px-4 max-w-7xl mx-auto border-t border-white/5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Experience Section */}
        <div>
          <h2 className="text-3xl font-bold mb-12">Journey</h2>
          <div className="space-y-12">
            {portfolioData.experience.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative pl-8 border-l border-primary/20"
              >
                <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-primary" />
                <span className="text-sm text-primary font-medium mb-1 block">{exp.period}</span>
                <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                <p className="text-white/70 mb-4 font-medium">{exp.company}</p>
                <ul className="space-y-3">
                  {exp.description.map((item, j) => (
                    <li key={j} className="text-sm text-white/60 leading-relaxed flex gap-2">
                      <span className="text-primary mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
            
            {portfolioData.education.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative pl-8 border-l border-white/10"
              >
                <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-white/20" />
                <span className="text-sm text-muted-foreground mb-1 block">{edu.period}</span>
                <h3 className="text-lg font-bold">{edu.degree}</h3>
                <p className="text-muted-foreground">{edu.school}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div>
          <h2 className="text-3xl font-bold mb-12">Arsenal</h2>
          <Tabs defaultValue="frontend" className="w-full">
            <TabsList className="bg-white/5 border border-white/10 p-1 mb-8 w-full justify-start overflow-x-auto no-scrollbar">
              <TabsTrigger value="frontend">Frontend</TabsTrigger>
              <TabsTrigger value="backend">Backend</TabsTrigger>
              <TabsTrigger value="cloud">Cloud & DevOps</TabsTrigger>
              <TabsTrigger value="ai">AI / ML</TabsTrigger>
            </TabsList>
            
            {Object.entries(portfolioData.skills).map(([key, skills]) => (
              <TabsContent key={key} value={key === 'cloudDevOps' ? 'cloud' : key === 'aiML' ? 'ai' : key} className="mt-0">
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.05 }}
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)", borderColor: "rgba(255,255,255,0.3)" }}
                      className="px-5 py-2.5 bg-white/5 border border-white/10 rounded-2xl text-sm font-medium text-white/80 transition-colors"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>

          <div className="mt-16 p-8 bg-primary/5 rounded-3xl border border-primary/10">
            <h4 className="text-lg font-bold mb-4">Certifications</h4>
            <ul className="space-y-4">
              {portfolioData.certifications.map((cert, i) => (
                <li key={i} className="text-sm text-muted-foreground flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                  {cert}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
