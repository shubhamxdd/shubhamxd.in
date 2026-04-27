import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { Button } from "./ui/button";

export const Projects = () => {
  return (
    <section id="projects" className="py-32 px-6 bg-[#020202]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="h-px w-8 bg-primary" />
              <span className="text-primary font-mono text-xs tracking-[0.3em] uppercase font-bold">
                Selected Work
              </span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold tracking-tighter"
            >
              Featured Projects
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-white/50 text-lg max-w-sm mb-2 font-light leading-relaxed"
          >
            A collection of meticulously crafted digital experiences that push the boundaries of design and performance.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {portfolioData.projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative h-full flex flex-col bg-white/[0.03] border border-white/10 rounded-[2.5rem] overflow-hidden backdrop-blur-sm transition-all duration-700 hover:bg-white/[0.05] hover:border-primary/30 hover:shadow-[0_0_80px_rgba(var(--primary-rgb),0.1)]">
                {/* Image Section */}
                <div className="relative h-80 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-[#020202]/20 to-transparent opacity-90" />
                  
                  {/* Action Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center gap-6 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100">
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noreferrer"
                        className="w-14 h-14 bg-white text-black rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-xl"
                      >
                        <Github className="w-6 h-6" />
                      </a>
                    )}
                    {project.visit && (
                      <a 
                        href={project.visit} 
                        target="_blank" 
                        rel="noreferrer"
                        className="w-14 h-14 bg-primary text-black rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-xl"
                      >
                        <ExternalLink className="w-6 h-6" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-10 -mt-20 relative z-10 flex flex-col flex-1">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tag, j) => (
                      <span 
                        key={j} 
                        className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest text-primary/90 backdrop-blur-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-4xl font-bold mb-4 flex items-center gap-3 text-white group-hover:text-primary transition-colors">
                    {project.title}
                    <ArrowUpRight className="w-6 h-6 opacity-0 -translate-y-2 translate-x-2 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-500" />
                  </h3>
                  
                  <p className="text-white/60 text-lg leading-relaxed mb-10 flex-1">
                    {project.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 p-6 bg-white/[0.02] border border-white/5 rounded-3xl">
                    {project.features.map((feature, k) => (
                      <div key={k} className="flex items-start gap-3 text-sm text-white/80">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="leading-tight">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-white/10">
                    <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/30">Case Study</span>
                    <div className="flex gap-4">
                      <Button variant="link" className="p-0 text-white/50 hover:text-primary transition-colors text-xs uppercase tracking-widest h-auto">
                        Details
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
