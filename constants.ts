import { Experience, Project, Skill } from './types';

export const USER_INFO = {
  name: "张宇翔 (Zhang Yuxiang)",
  title: "资深软件工程师 | 前端 & AI 应用开发者",
  email: "yuxiang.zhang@example.com",
  github: "https://github.com/yuxiangzhang",
  linkedin: "https://linkedin.com/in/yuxiangzhang",
  twitter: "https://x.com/yuxiang_builds",
  location: "中国，上海",
  about: "我是一名拥有多年经验的资深前端工程师，目前正积极拓展技术边界，深入研究后端架构与大语言模型（LLM）应用开发。我热衷于构建高性能、高可用且用户体验极佳的Web应用，并致力于将AI技术落地到实际业务场景中。我不仅关注代码质量，更关注产品价值与技术带来的变革。",
  resumeEn: {
    summary: "Senior Software Engineer with a strong background in Frontend development (React, TypeScript), currently expanding expertise into Backend (Node.js, Python) and Generative AI applications. Proven track record of delivering scalable web solutions and innovative AI-integrated features.",
  }
};

export const SKILLS: Skill[] = [
  { name: "React / Next.js", category: "frontend", level: 95 },
  { name: "TypeScript", category: "frontend", level: 90 },
  { name: "Tailwind CSS", category: "frontend", level: 95 },
  { name: "Node.js", category: "backend", level: 80 },
  { name: "Python / FastAPI", category: "backend", level: 75 },
  { name: "PostgreSQL", category: "backend", level: 70 },
  { name: "Google Gemini API", category: "ai", level: 85 },
  { name: "LangChain", category: "ai", level: 80 },
  { name: "RAG Architecture", category: "ai", level: 75 },
  { name: "Docker / K8s", category: "tools", level: 70 },
  { name: "Git / CI/CD", category: "tools", level: 85 },
];

export const EXPERIENCE: Experience[] = [
  {
    id: "1",
    role: "Senior Frontend Engineer (AI Focus)",
    company: "Future Tech Ltd.",
    period: "2022 - Present",
    highlight: "AI Infrastructure Strategy",
    description: [
      "Architected the core SaaS platform migration, boosting system throughput by 40% and significantly reducing technical debt.",
      "Engineered the internal AI infrastructure, empowering the engineering team to ship code 30% faster via custom LLM agents.",
      "Deployed an enterprise-grade RAG knowledge system, closing the loop between support tickets and internal documentation."
    ],
    technologies: ["React", "TypeScript", "Python", "Gemini API", "Vector DB"]
  },
  {
    id: "2",
    role: "Frontend Engineer",
    company: "CloudNet Solutions",
    period: "2019 - 2022",
    highlight: "System Standardization",
    description: [
      "Spearheaded the unified UI Design System, enforcing visual consistency across 4 major product lines and reducing design-to-code time.",
      "Revolutionized the frontend build pipeline, slashing CI/CD deployment times by 50% through webpack optimization and caching strategies.",
      "Designed the state management architecture for the high-traffic e-commerce dashboard."
    ],
    technologies: ["Vue.js", "JavaScript", "Webpack", "Node.js"]
  },
  {
    id: "3",
    role: "Junior Developer",
    company: "InnoWeb Agency",
    period: "2017 - 2019",
    highlight: "Pixel Perfection",
    description: [
      "Delivered pixel-perfect interactive marketing experiences for high-profile enterprise clients, ensuring 100% fidelity to design mocks.",
      "Optimized legacy codebases for SEO and accessibility, improving search rankings for client portfolios."
    ],
    technologies: ["HTML5", "CSS3", "jQuery", "PHP"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "memory-echoes",
    title: "Memory Echoes",
    subtitle: "Emotional AI • LLM • Vibe Coding",
    description: "An AI companion that listens to the 3 AM anxiety. Zero friction, pure resonance.",
    tags: ["Next.js", "Gemini Pro", "Sentiment Analysis", "Tailwind"],
    imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop", // Dark abstract, moody
    category: "ai",
    repoUrl: "#",
    demoUrl: "#",
    caseStudy: {
      problem: "Traditional journaling apps are passive and cold. Users experiencing late-night anxiety feel isolated, and standard chatbots offer generic 'solution-oriented' advice rather than emotional validation.",
      process: "Engineered 'Vibe-First' latency architecture. The LLM prompt chain was fine-tuned not for accuracy, but for empathy and tone matching. Implemented a dynamic UI theme engine that shifts color temperatures based on the sentiment analysis of the conversation in real-time.",
      outcome: "Achieved a 40% higher retention rate compared to standard chatbot baselines. Average session duration exceeds 25 minutes, with user feedback highlighting 'feeling truly heard' for the first time by a machine."
    }
  },
  {
    id: "lumina",
    title: "Lumina",
    subtitle: "Generative UI • Digital Garden",
    description: "Transforming daily inputs into a living, breathing digital flora.",
    tags: ["Three.js", "React", "Procedural Gen", "WebGL"],
    imageUrl: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=2727&auto=format&fit=crop", // Plant/Light abstract
    category: "design",
    repoUrl: "#",
    demoUrl: "#",
    caseStudy: {
      problem: "Productivity dashboards are notoriously stressful and utilitarian. They turn life into a checklist, increasing cognitive load and anxiety around 'unfinished tasks'.",
      process: "Developed a Generative UI system where data points act as 'nutrients'. Task completion drives L-system algorithms to grow unique digital plants. Failed tasks don't show red alerts but rather 'dormant' seeds waiting for water.",
      outcome: "Transformed the 'Checklist Fatigue' into a nurturing habit. Users report checking the app 3x more frequently just to see their garden grow. Won the 'Best Emotional Design' internal hackathon award."
    }
  },
  {
    id: "aetheria",
    title: "Aetheria",
    subtitle: "Future Interface • OS Design",
    description: "A dual-mode information terminal for the post-web era.",
    tags: ["Rust", "Tauri", "WebAssembly", "Cyberpunk UI"],
    imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop", // Cyberpunk/HUD
    category: "fullstack",
    repoUrl: "#",
    demoUrl: "#",
    caseStudy: {
      problem: "The modern browser is a distraction engine. Context switching between 'Deep Work' and 'Exploration' destroys flow state. Current OS window management is spatial, not modal.",
      process: "Designed a dual-mode kernel wrapper. 'Focus Mode' strips all UI to a HUD-style terminal (Green/Black monochrome) for pure output. 'Prism Mode' explodes data into a 3D canvas for connection discovery. Built with Rust/Tauri for native performance.",
      outcome: "Beta testers reported an estimated 15% reduction in cognitive load during complex research tasks. The 'Prism' navigation paradigm reduced time-to-insight for data analysts by visualizing hidden connections."
    }
  }
];