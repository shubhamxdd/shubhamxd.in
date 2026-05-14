import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

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
              className="text-5xl md:text-6xl font-bold tracking-tighter"
            >
              Featured Projects
            </motion.h2>
          </div>
          {/* <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-white/50 text-base md:text-lg max-w-sm mb-2 font-light leading-relaxed"
          >
            A collection of meticulously crafted digital experiences that push the boundaries of design and performance.
          </motion.p> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative h-full flex flex-col bg-white/[0.02] border border-white/5 rounded-[2rem] overflow-hidden backdrop-blur-sm transition-all duration-500 hover:bg-white/[0.04] hover:border-primary/20">
                {/* Image Section */}
                <div className="relative h-60 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-transparent to-transparent opacity-80" />
                </div>

                {/* Content Section */}
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.slice(0, 3).map((tag, j) => (
                      <span 
                        key={j} 
                        className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[9px] font-bold uppercase tracking-widest text-primary/80 backdrop-blur-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-2xl font-bold mb-3 flex items-center justify-between text-white group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-white/60 text-sm leading-relaxed mb-8 flex-1 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Permanent Actions */}
                  <div className="flex gap-3 mb-8">
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-white/5 border border-white/10 rounded-xl text-xs font-medium hover:bg-white/10 transition-colors"
                      >
                        <Github className="w-4 h-4" /> Github
                      </a>
                    )}
                    {project.visit && (
                      <a 
                        href={project.visit} 
                        target="_blank" 
                        rel="noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-primary/10 border border-primary/20 rounded-xl text-xs font-medium text-primary hover:bg-primary/20 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" /> Visit
                      </a>
                    )}
                  </div>

                  <div className="space-y-3 p-5 bg-white/[0.01] border border-white/5 rounded-2xl">
                    {project.features.map((feature, k) => (
                      <div key={k} className="flex items-start gap-3 text-xs text-white/70">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="leading-tight">{feature}</span>
                      </div>
                    ))}
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
