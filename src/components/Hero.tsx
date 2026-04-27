import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, FileText } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { InteractiveBackground } from "./InteractiveBackground";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-4 pt-20 overflow-hidden">
      <InteractiveBackground />
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10"
      >
        
        <motion.h1 
          className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 bg-gradient-to-b from-foreground to-foreground/40 bg-clip-text text-transparent cursor-pointer select-none"
          whileTap={{ scale: 0.95 }}
          onClick={(e) => {
            const target = e.currentTarget;
            const original = portfolioData.name;
            let iterations = 0;
            const interval = setInterval(() => {
              target.innerText = original.split("")
                .map((char, i) => {
                  if (i < iterations) return original[i];
                  return String.fromCharCode(65 + Math.floor(Math.random() * 26));
                })
                .join("");
              if (iterations >= original.length) clearInterval(interval);
              iterations += 1/3;
            }, 30);
          }}
        >
          {portfolioData.name}
        </motion.h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground max-w-[600px] mx-auto mb-10 leading-relaxed font-light">
          {portfolioData.role}. <span className="text-foreground/80">Crafting AI-driven experiences with precision and passion.</span>
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" className="rounded-full px-8 bg-white text-black hover:bg-white/90 group" asChild>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <FileText className="mr-2 w-4 h-4" />
              Download Resume
              <motion.div
                className="ml-1 inline-block"
                animate={{ y: [0, 2, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                ↓
              </motion.div>
            </a>
          </Button>
          <div className="flex gap-2">
            {[
              { icon: Github, href: portfolioData.contact.github },
              { icon: Linkedin, href: portfolioData.contact.linkedin },
              { icon: Mail, href: `mailto:${portfolioData.contact.email}` },
            ].map((social, i) => (
              <Button key={i} variant="outline" size="icon" className="rounded-full border-white/10 hover:border-white/40 transition-colors" asChild>
                <a href={social.href} target="_blank" rel="noopener noreferrer">
                  <social.icon className="w-5 h-5" />
                </a>
              </Button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-30"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-foreground flex justify-center p-1">
          <motion.div
            className="w-1 h-2 bg-foreground rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          />
        </div>
      </motion.div>
    </section>
  );
};
