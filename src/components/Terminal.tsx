import { useState, useEffect, useRef } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { portfolioData } from "@/data/portfolio";

export const Terminal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [history, setHistory] = useState<string[]>(["Welcome to Shubham's CLI v1.0.0", "Type 'help' to see available commands."]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "`") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (cmd: string) => {
    const command = cmd.toLowerCase().trim();
    let response = "";

    switch (command) {
      case "help":
        response = "Available commands: about, projects, skills, contact, clear, exit, whoami, matrix";
        break;
      case "about":
        response = portfolioData.about;
        break;
      case "projects":
        response = portfolioData.projects.map((p) => `- ${p.title}: ${p.description}`).join("\n");
        break;
      case "skills":
        response = Object.entries(portfolioData.skills)
          .map(([category, skills]) => `${category.toUpperCase()}: ${skills.join(", ")}`)
          .join("\n");
        break;
      case "contact":
        response = `Email: ${portfolioData.contact.email}\nGitHub: ${portfolioData.contact.github}\nLinkedIn: ${portfolioData.contact.linkedin}`;
        break;
      case "whoami":
        response = `${portfolioData.name} - ${portfolioData.role}`;
        break;
      case "matrix":
        response = "Wake up, Shubham...\nThe Matrix has you...\nFollow the white rabbit. 🐇";
        break;
      case "clear":
        setHistory([]);
        return;
      case "exit":
        setIsOpen(false);
        return;
      default:
        response = `Command not found: ${command}. Type 'help' for assistance.`;
    }

    setHistory((prev) => [...prev, `> ${cmd}`, response]);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[600px] bg-black/90 border-green-500/50 text-green-500 font-mono p-4 rounded-lg shadow-[0_0_20px_rgba(34,197,94,0.3)]">
        <div className="flex flex-col h-[400px]">
          <div className="flex items-center justify-between border-b border-green-500/30 pb-2 mb-2">
            <span className="text-xs uppercase tracking-widest opacity-70">Shubham-Terminal ~ v1.0</span>
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
            </div>
          </div>
          <div 
            ref={scrollRef}
            className="flex-1 overflow-y-auto pr-4 scrollbar-hide"
          >
            <div className="space-y-1 text-sm whitespace-pre-wrap">
              {history.map((line, i) => (
                <div key={i} className={line.startsWith(">") ? "text-white" : "text-green-400"}>
                  {line}
                </div>
              ))}
            </div>
          </div>
          <div className="mt-4 flex items-center gap-2 border-t border-green-500/30 pt-2">
            <span className="text-white font-bold">$</span>
            <input
              autoFocus
              className="bg-transparent border-none outline-none flex-1 text-green-400 font-mono"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleCommand(input);
                  setInput("");
                }
              }}
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
