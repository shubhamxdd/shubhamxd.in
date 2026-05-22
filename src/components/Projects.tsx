import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, ArrowUpRight, CheckCircle2, X, Maximize2 } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { trackEvent } from "@/lib/analytics";
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { ProjectCarousel } from "./ProjectCarousel";

export const Projects = () => {
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.projects.map((project, i) => (
            <Dialog key={i} onOpenChange={(open) => {
              if (open) {
                trackEvent('Project Modal Opened', { project: project.title });
              } else {
                setZoomedImage(null);
              }
            }}>
              <DialogTrigger asChild>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="group relative cursor-pointer"
                >
                  <div className="relative h-full flex flex-col bg-white/[0.02] border border-white/5 rounded-[2rem] overflow-hidden backdrop-blur-sm transition-all duration-500 hover:bg-white/[0.04] hover:border-primary/20">
                    {/* Project Image Carousel (Card Version - Zoom Disabled) */}
                    <ProjectCarousel 
                      images={project.images} 
                      showZoom={false}
                      className="h-64"
                    />

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
                        <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                      </h3>
                      
                      <p className="text-white/60 text-sm leading-relaxed mb-8 line-clamp-2">
                        {project.description}
                      </p>

                      <div className="mt-auto flex gap-3">
                        <div className="flex-1 py-2.5 bg-white/5 border border-white/10 rounded-xl text-center text-xs font-medium group-hover:bg-primary group-hover:text-black transition-all">
                          View Details
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </DialogTrigger>

              <DialogContent 
                className="max-w-4xl bg-[#0a0a0a] border-white/10 p-0 overflow-hidden rounded-[2rem]"
                onInteractOutside={(e) => {
                  if (zoomedImage) e.preventDefault();
                }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 h-full max-h-[90vh] overflow-y-auto">
                  {/* Detailed Image Carousel (Modal Version - Zoom Enabled) */}
                  <ProjectCarousel 
                    images={project.images} 
                    showZoom={true}
                    onZoom={(img) => {
                      setZoomedImage(img);
                      trackEvent('Project Image Zoomed', { project: project.title });
                    }}
                    className="h-72 md:h-full"
                  />
                  
                  <div className="p-8 md:p-12 flex flex-col">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <DialogTitle className="text-4xl font-bold tracking-tighter mb-2">{project.title}</DialogTitle>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tag, j) => (
                            <span key={j} className="text-[10px] font-mono text-primary/80 uppercase tracking-wider">{tag}</span>
                          ))}
                        </div>
                      </div>
                      <DialogClose className="p-2 hover:bg-white/5 rounded-full transition-colors">
                        <X className="w-6 h-6" />
                      </DialogClose>
                    </div>

                    <p className="text-white/70 leading-relaxed mb-8 text-lg">
                      {project.description}
                    </p>

                    <div className="space-y-6 mb-10">
                      <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-white/40">Key Features</h4>
                      <div className="grid gap-4">
                        {project.features.map((feature, k) => (
                          <div key={k} className="flex items-start gap-4 p-4 bg-white/[0.02] border border-white/5 rounded-2xl">
                            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-white/80">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-4 mt-auto">
                      {project.github && (
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noreferrer"
                          onClick={() => trackEvent('Project Github Click', { project: project.title, location: 'modal' })}
                          className="flex-1 flex items-center justify-center gap-3 py-4 bg-white text-black rounded-2xl font-bold hover:bg-primary transition-colors"
                        >
                          <Github className="w-5 h-5" /> GitHub
                        </a>
                      )}
                      {project.visit && (
                        <a 
                          href={project.visit} 
                          target="_blank" 
                          rel="noreferrer"
                          onClick={() => trackEvent('Project Visit Click', { project: project.title, location: 'modal' })}
                          className="flex-1 flex items-center justify-center gap-3 py-4 bg-primary text-black rounded-2xl font-bold hover:opacity-90 transition-opacity"
                        >
                          <ExternalLink className="w-5 h-5" /> Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Fullscreen Lightbox - Nested inside to bypass Radix modal interaction lock */}
                <AnimatePresence>
                  {zoomedImage && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/98 backdrop-blur-2xl p-4 md:p-20 cursor-zoom-out"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setZoomedImage(null);
                        trackEvent('Project Image Unzoomed');
                      }}
                    >
                      <motion.div
                        initial={{ scale: 0.9, y: 20 }}
                        animate={{ scale: 1, y: 0 }}
                        exit={{ scale: 0.9, y: 20 }}
                        className="relative w-full h-full flex items-center justify-center cursor-auto"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <img
                          src={zoomedImage}
                          alt="Zoomed project screenshot"
                          className="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
                        />
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setZoomedImage(null);
                          }}
                          className="absolute top-4 right-4 p-3 bg-white/10 border border-white/10 rounded-full hover:bg-white/20 transition-colors text-white cursor-pointer"
                        >
                          <X className="w-6 h-6" />
                        </button>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};
