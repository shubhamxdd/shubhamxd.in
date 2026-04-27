export const portfolioData = {
  name: "Shubham Sisodia",
  role: "Full Stack Developer & AI Enthusiast",
  contact: {
    email: "shubhamsisodia84@gmail.com",
    phone: "+919811827382",
    location: "New Delhi, India",
    linkedin: "https://linkedin.com/in/shubhamsisodia016",
    github: "https://github.com/shubhamxdd",
    leetcode: "https://leetcode.com/shubhamxdd",
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
      github: "https://github.com/shubhamsisodia/pdftools",
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
      github: "https://github.com/shubhamsisodia/caltrack",
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
      github: "https://github.com/shubhamsisodia/nextbuy",
      visit: "https://nextbuy-demo.com",
      features: [
        "Admin dashboard for managing orders, products, and users.",
        "Stripe payment integration and email notifications via Nodemailer.",
        "Responsive layout with ShadCN UI.",
      ],
      image: "/projects/nextbuy.png",
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
