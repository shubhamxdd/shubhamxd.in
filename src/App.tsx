import React, { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { SkillsAndExperience } from "./components/SkillsAndExperience";
import { Terminal } from "./components/Terminal";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "./data/portfolio";
import { Mail, Github, Linkedin, MessageSquare } from "lucide-react";
import { Button } from "./components/ui/button";

function App() {
  const [konami, setKonami] = useState(false);
  const [konamiIndex, setKonamiIndex] = useState(0);
  const konamiCode = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === konamiCode[konamiIndex]) {
        const nextIndex = konamiIndex + 1;
        if (nextIndex === konamiCode.length) {
          setKonami(true);
          setKonamiIndex(0);
          setTimeout(() => setKonami(false), 5000); // Effect lasts 5s
        } else {
          setKonamiIndex(nextIndex);
        }
      } else {
        setKonamiIndex(0);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [konamiIndex]);

  return (
    <div className={`min-h-screen bg-black text-white selection:bg-primary selection:text-black ${konami ? "rainbow-mode" : ""}`}>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <SkillsAndExperience />
        
        {/* Contact Section */}
        <section id="contact" className="py-24 px-4 text-center max-w-4xl mx-auto border-t border-white/5">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-primary/5 rounded-[40px] p-12 md:p-20 border border-primary/10 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <MessageSquare className="w-40 h-40" />
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter">Let's build something extraordinary.</h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-[500px] mx-auto">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="rounded-full px-10 h-14 text-lg" asChild>
                <a href={`mailto:${portfolioData.contact.email}`}>
                  <Mail className="mr-2 w-5 h-5" /> Say Hello
                </a>
              </Button>
              <Button variant="outline" size="lg" className="rounded-full px-10 h-14 text-lg border-white/10" asChild>
                <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 w-5 h-5" /> LinkedIn
                </a>
              </Button>
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="py-12 border-t border-white/5 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} {portfolioData.name}. Built with Passion.
          </p>
          <div className="flex gap-6">
            <a href={portfolioData.contact.github} className="text-muted-foreground hover:text-white transition-colors">GitHub</a>
            <a href={portfolioData.contact.linkedin} className="text-muted-foreground hover:text-white transition-colors">LinkedIn</a>
            <a href={portfolioData.contact.leetcode} className="text-muted-foreground hover:text-white transition-colors">Leetcode</a>
          </div>
        </div>
      </footer>

      <Terminal />

      <AnimatePresence>
        {konami && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 pointer-events-none z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm"
          >
            <motion.h2 
              animate={{ scale: [1, 1.5, 1], rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 0.5 }}
              className="text-6xl font-black text-primary italic"
            >
              RAVE MODE ACTIVATED!
            </motion.h2>
          </motion.div>
        )}
      </AnimatePresence>

      <style dangerouslySetInnerHTML={{ __html: `
        .rainbow-mode {
          animation: rainbow 5s infinite;
        }
        @keyframes rainbow {
          0% { filter: hue-rotate(0deg); }
          100% { filter: hue-rotate(360deg); }
        }
      `}} />
    </div>
  );
}

export default App;
