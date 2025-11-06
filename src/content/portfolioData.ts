export type Project = {
  slug: string;
  title: string;
  shortDescription: string;
  tags: string[];
  imageUrl?: string; // Optional - will use placeholder if missing
  githubUrl?: string;
  demoUrl?: string; // Live demo/deployed app link
  status?: 'public' | 'proprietary' | 'coming-soon'; // More professional labels
};

export const projects: Project[] = [
  {
    slug: "report-gen",
    title: "ReportGen: AI-Powered Report Generator",
    shortDescription: "Multi-agent system automating LaTeX report generation from natural language queries.",
    tags: ["Python", "FastAPI", "Gemini API", "ChromaDB", "Docker", "LaTeX"],
    imageUrl: "reportgen.png",
    githubUrl: "https://github.com/Ragoubi57/ReportGen",
  },
  {
    slug: "voltix-ai",
    title: "VoltixAI: Multi-Agent Conversational AI",
    shortDescription: "Built a conversational AI with RAG pipeline and secure MySQL agent, reducing query time by 40%.",
    tags: ["Python", "FastAPI", "LangChain", "RAG", "MySQL"],
    imageUrl: "voltix.png",
    status: 'proprietary', // Internship project - company code
  },
  {
    slug: "market-intelligence",
    title: "Market Intelligence Platform",
    shortDescription: "Full-stack analytics platform with containerized PySpark ETL processing 28K+ records and FinBERT sentiment analysis.",
    tags: ["Python", "PySpark", "Docker", "React", "FinBERT", "Supabase"],
    imageUrl: "market-intelligence.png",
    githubUrl: "https://github.com/Ragoubi57/Market_Intelligence",
  },
  {
    slug: "diffusion-model",
    title: "Diffusion Model from Scratch",
    shortDescription: "Text-to-image generative model with UNet architecture and CLIP for text-conditional synthesis.",
    tags: ["PyTorch", "Transformers", "CLIP", "UNet", "Generative AI"],
    // No imageUrl - will use gradient placeholder
  },
  {
    slug: "tunigo",
    title: "TuniGo: Tourism Promotion App",
    shortDescription: "Mobile application promoting tourism in Tunisia with real-time recommendations and interactive guides.",
    tags: ["React Native", "Expo", "Firebase", "Mobile Dev"],
    imageUrl: "tunigo.png",
    githubUrl: "https://github.com/Ragoubi57/TuniGo-Mobile-Application",
  },
  {
    slug: "service-exchange-app",
    title: "Service-to-Service: Skill Exchange Web App",
    shortDescription: "Full-stack platform connecting users for local skill exchanges with real-time chat (30% increase in session duration).",
    tags: ["Node.js", "React", "Next.js", "Express.js", "MongoDB"],
    // No imageUrl - will use gradient placeholder
  },
];