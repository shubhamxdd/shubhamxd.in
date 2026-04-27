import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail, Menu, X, Terminal as TerminalIcon, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  const navLinks = [
    { name: "Projects", href: "#projects", id: "01" },
    { name: "Journey", href: "#about", id: "02" },
    { name: "Contact", href: "#contact", id: "03" },
  ];

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const handleLinkClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const top = target.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[50] transition-all duration-500 ${
          isScrolled ? "py-4 bg-black/80 backdrop-blur-xl border-b border-white/5" : "py-8 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <a 
              href="#" 
              onClick={scrollToTop}
              className="text-xl font-bold tracking-tighter hover:text-primary transition-colors"
            >
              shubhamxd.in
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-sm font-medium text-white/50 hover:text-white transition-all hover:tracking-widest"
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center gap-4 border-l border-white/10 pl-10 ml-4">
              <Button variant="ghost" size="sm" className="text-[10px] font-bold uppercase tracking-widest text-white/40 hover:text-white group px-4 bg-white/5 rounded-full border border-white/5">
                <TerminalIcon className="w-3.5 h-3.5 mr-2" />
                Press <span className="mx-1.5 px-1.5 py-0.5 bg-white/10 rounded group-hover:bg-primary group-hover:text-black transition-colors">`</span>
              </Button>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(true)}
              className="p-3 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-colors"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Full-screen Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed inset-0 z-[100] bg-black flex flex-col"
          >
            {/* Menu Header */}
            <div className="p-8 flex justify-between items-center border-b border-white/5">
              <span className="text-sm font-mono text-white/40 tracking-[0.2em] uppercase">Navigation</span>
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="p-3 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Menu Body */}
            <div className="flex-1 flex flex-col justify-center p-8 md:p-16">
              <div className="space-y-8">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.1 }}
                  >
                    <a
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className="group flex items-center gap-6"
                    >
                      <span className="text-sm font-mono text-primary">{link.id}</span>
                      <span className="text-6xl md:text-8xl font-bold tracking-tighter transition-all group-hover:translate-x-4 group-hover:text-primary">
                        {link.name}
                      </span>
                      <ArrowRight className="w-8 h-8 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary" />
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Menu Footer */}
            <div className="p-8 md:p-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
              <div className="space-y-2">
                <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest block">Get in touch</span>
                <a href="mailto:shubhamsisodia84@gmail.com" className="text-lg hover:text-primary transition-colors">
                  shubhamsisodia84@gmail.com
                </a>
              </div>
              <div className="flex gap-6">
                {[
                  { icon: Github, href: "https://github.com/shubhamxdd" },
                  { icon: Linkedin, href: "https://linkedin.com/in/shubhamsisodia016" },
                  { icon: Mail, href: "mailto:shubhamsisodia84@gmail.com" }
                ].map((item, i) => (
                  <a 
                    key={i}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="p-4 bg-white/5 rounded-full hover:bg-primary transition-all group"
                  >
                    <item.icon className="w-5 h-5 group-hover:text-black" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
