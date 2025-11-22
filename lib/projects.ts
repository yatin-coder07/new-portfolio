// lib/projects.ts


export type Project = {
  id: string;                 // used in the URL: /projects/[id]
  title: string;
  description: string;        // short summary
  explanation: string;        // longer detailed text
  techStack: string[];        // list of tech badges
  image1: string;             // from /public/images
  image2: string;
  image3: string;
};

export const projects: Project[] = [
  {
    id: "ai-receipt-scanner",
    title: "AI Receipt Scanner",
    description:
      "SaaS app that scans receipts & PDFs, extracts structured data and summarizes expenses.",
    explanation:
      "This project is a full-stack SaaS built with Next.js and AI workflows. Users can upload receipts or PDFs, which are processed via an LLM pipeline to extract line items, categorize spend, and generate summaries. It integrates authentication, billing, and a dashboard for viewing historical uploads.Protected routes ensure only subscribed users can access the main functionality. Key features include:\n\n- LLM-powered data extraction and summarization.\n- User authentication and subscription billing with Stripe.\n- Multi-step AI workflows powered by background jobs.\n- Responsive dashboard to view and manage uploads.",
    techStack: ["Next.js", "TypeScript", "Convex", "OpenAI / LLM", "Stripe", "Inngest","Ai Workflows"],
    image1: "/images/receipt-1.png",
    image2: "/images/receipt-2.png",
    image3: "/images/receipt-3.png",
    githubUrl: "https://github.com/yatin-coder07/Ai-Receipt-app",
    demoUrl: "https://my-reciept-app.vercel.app/",

  },
  {
    id: "ai-email-finder",
    title: "AI Email Finder",
    description:
      "AI-powered tool that finds, validates and enriches professional emails with scoring.",
    explanation:
      "This tool helps with outbound outreach by taking minimal user input (name, company, domain) and generating likely email candidates. It combines pattern-based logic, verification APIs, and an AI-based enrichment layer for role, seniority, and context. Results are ranked with a confidence score.This app uses Vector Embeddings to store and search email candidates efficiently. Key features include:\n\n- Pattern-based email generation.\n- Email validation via third-party APIs.\n- LLM-generated enrichment (role, seniority, context).\n- Scoring system to prioritize best leads first.",
    techStack: ["Next.js", "TypeScript", "Supabase", "Postgres", "Vercel AI SDK"],
    image1: "/images/email-1.png",
    image2: "/images/email-2.png",
    image3: "/images/email-3.png",
    githubUrl: "https://github.com/yatin-coder07/vector-embedded-email-app",
    demoUrl: "https://vector-embedded-email-app.vercel.app/",
  },
];
