export const portfolioData = {
  name: "Shubham Sisodia",
  role: "Full Stack Developer & AI Enthusiast",
  contact: {
    email: "shubhamsisodia84@gmail.com",
    phone: "+919811827382",
    location: "New Delhi, India",
    linkedin: "https://linkedin.com/in/shubhamsisodia016",
    github: "https://github.com/shubhamxdd",
  },
  about: "I am a Software Developer Intern with a passion for building AI-powered applications and scalable web solutions. Currently pursuing my MCA at USICT, I focus on creating high-performance, interactive user experiences.",
  experience: [
    {
      company: "K.E.C Serv",
      role: "Software Developer Intern",
      period: "Dec 2025 - Present",
      description: [
        "Built and deployed kecserv.com and 0gyan.com (AI-powered admissions platform).",
        "Contributed to finotoai.com, working on template generation functionality.",
        "Developed a full-stack invoice management SaaS app independently.",
        "Integrated Azure Document Intelligence and Google Document AI for document processing.",
      ],
    },
  ],
  projects: [
    {
      title: "PdfTools",
      description: "AI-powered PDF utility application with multimodal analysis and manipulation features.",
      tech: ["React Native", "Expo", "Gemini 2.5", "TypeScript"],
      github: "https://github.com/shubhamxdd/pdftk-react-native",
      features: [
        "Chat with PDF using Google Gemini 2.5 Flash.",
        "PDF merging, splitting, and drag-and-drop system.",
        "Local file processing for security and performance.",
      ],
      image: "/projects/pdftools.png",
    },
    {
      title: "CalTrack",
      description: "AI-powered Calorie Tracker with multimodal dietary analysis.",
      tech: ["React Native", "Expo", "Gemini 2.5 Flash", "TypeScript"],
      github: "https://github.com/shubhamxdd/cal-track",
      features: [
        "Visual food recognition and macro estimation from photos.",
        "Health engine with TDEE/BMR calculations.",
        "Offline persistence via AsyncStorage.",
      ],
      image: "/projects/caltrack.png",
    },
    {
      title: "NextBuy",
      description: "Full-stack E-commerce platform with admin dashboard and payment integration.",
      tech: ["Next.js", "Prisma", "MongoDB", "Stripe", "TailwindCSS"],
      github: "https://github.com/shubhamxdd/e-commerce",
      visit: "https://ecom.shubhamxd.in/",
      features: [
        "Admin dashboard for managing orders, products, and users.",
        "Stripe payment integration and email notifications via Nodemailer.",
        "Responsive layout with ShadCN UI.",
      ],
      image: "/projects/nextbuy.png",
    },
    {
      title: "paste",
      description: "A self-hosted pastebin with syntax highlighting, paraphrase-protected pastes, gist collections, and full-text search.",
      tech: ["ReactJS", "TailwindCSS", "Express JS", "Prisma", "MongoDB", "Docker", "PostHog"],
      github: "https://github.com/shubhamxdd/paste",
      visit: "https://paste.shubhamxd.in",
      features: [
        "Create and manage code pastes with rich features like syntax highlighting (17 languages), custom URLs, line highlighting, raw view, file uploads, and light/dark themes.",
        "Control access and editing with paraphrase protection, delete codes, and support for grouping/editing multiple pastes as gists.",
        "Includes advanced tools like view tracking, full-text search, and an admin dashboard with metrics, activity logs, and content management.",
      ],
      image: "/projects/paste.png",
    },
  ],
  skills: {
    frontend: ["HTML", "CSS", "TailwindCSS", "JavaScript", "TypeScript", "ReactJS", "NextJS", "Zustand", "React Native", "Expo"],
    backend: ["Node.js", "Express.js", "Prisma", "Drizzle", "PostgreSQL", "MySQL", "MongoDB"],
    cloudDevOps: ["Azure", "Google Cloud", "Docker", "Git", "GitHub"],
    aiML: ["Supervised & Unsupervised Learning", "ANN", "CNN"],
  },
  education: [
    {
      school: "USICT, GGSIPU",
      degree: "Masters of Computer Applications (SE)",
      period: "Sept 2025 – May 2027 (Expected)",
    },
    {
      school: "Delhi University",
      degree: "Bachelor of Business Economics",
      period: "Nov 2021 – May 2024",
    },
  ],
  certifications: [
    "Supervised Machine Learning: Regression and Classification – Coursera",
    "Express.js - LinkedIn Learning",
    "MongoDB – LinkedIn Learning",
  ],
};
