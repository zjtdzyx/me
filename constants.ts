import { Experience, Project, Skill } from './types';

export const USER_INFO = {
  name: "张宇翔 (Zhang Yuxiang)",
  title: "资深软件工程师 | 前端 & AI 应用开发者",
  email: "yuxiang.zhang@example.com",
  github: "https://github.com/yuxiangzhang",
  linkedin: "https://linkedin.com/in/yuxiangzhang",
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
    role: "高级前端工程师 (AI 业务方向)",
    company: "未来科技有限公司",
    period: "2022 - 至今",
    description: [
      "主导公司核心SaaS平台的重构，将性能提升了40%。",
      "负责内部AI助手工具的开发，集成Gemini API，提升团队30%的编码效率。",
      "设计并落地基于RAG的企业知识库问答系统，打通前后端全链路。"
    ],
    technologies: ["React", "TypeScript", "Python", "Gemini API", "Vector DB"]
  },
  {
    id: "2",
    role: "前端工程师",
    company: "云端网络",
    period: "2019 - 2022",
    description: [
      "负责电商后台管理系统的前端架构设计与开发。",
      "建立了团队内部的UI组件库，统一了多条产品线的视觉风格。",
      "优化前端构建流程，将CI/CD构建时间缩短了50%。"
    ],
    technologies: ["Vue.js", "JavaScript", "Webpack", "Node.js"]
  },
  {
    id: "3",
    role: "初级开发工程师",
    company: "创新互联",
    period: "2017 - 2019",
    description: [
      "参与多个企业官网与H5营销页面的开发。",
      "协助后端团队进行API接口联调与文档维护。"
    ],
    technologies: ["HTML5", "CSS3", "jQuery", "PHP"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "p1",
    title: "AI 智能代码助手",
    description: "基于 Google Gemini Pro 模型的 IDE 插件，支持代码补全、重构建议与自然语言生成代码。后端使用 FastAPI 处理流式响应。",
    tags: ["Gemini API", "React", "FastAPI", "WebSockets"],
    imageUrl: "https://picsum.photos/600/400?random=1",
    category: "ai",
    repoUrl: "#",
    demoUrl: "#"
  },
  {
    id: "p2",
    title: "企业级低代码平台",
    description: "一款可视化的页面搭建系统，支持拖拽生成 React 代码。深度应用了 TypeScript 高级类型以确保生成的代码类型安全。",
    tags: ["React", "TypeScript", "DnD", "AST"],
    imageUrl: "https://picsum.photos/600/400?random=2",
    category: "web",
    repoUrl: "#",
    demoUrl: "#"
  },
  {
    id: "p3",
    title: "智能知识库 (RAG)",
    description: "全栈开发项目。允许用户上传 PDF/Markdown 文档，系统自动切片向量化，并提供基于语义的问答服务。",
    tags: ["Next.js", "PgVector", "Python", "LangChain"],
    imageUrl: "https://picsum.photos/600/400?random=3",
    category: "fullstack",
    repoUrl: "#",
    demoUrl: "#"
  },
  {
    id: "p4",
    title: "E-Commerce Dashboard",
    description: "高性能的电商数据可视化大屏，使用 D3.js 和 Recharts 展示实时销售数据。",
    tags: ["React", "D3.js", "Tailwind", "WebSocket"],
    imageUrl: "https://picsum.photos/600/400?random=4",
    category: "web",
    repoUrl: "#",
    demoUrl: "#"
  }
];
