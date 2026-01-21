// lib/projects.ts

export type Project = {
  id: string;
  title: string;
  description: string;
  explanation: string;
  techStack: string[];
  image1: string;
  image2: string;
  image3: string;
  githubUrl?: string;
  demoUrl?: string;
};

export const projects: Project[] = [
  {
    id: "ai-receipt-scanner",
    title: "AI Receipt Scanner",
    description:
      "SaaS app that scans receipts & PDFs, extracts structured data and summarizes expenses.",
    explanation:
      "This project is a full-stack SaaS built with Next.js and automated processing workflows. Users can upload receipts or PDFs, which are processed to extract line items, categorize spend, and generate summaries. It integrates authentication, billing, and a dashboard for viewing historical uploads. Protected routes ensure only subscribed users can access the main functionality.\n\nKey features include:\n\n- Automated receipt and PDF data extraction.\n- Structured expense categorization and summaries.\n- User authentication and subscription billing with Stripe.\n- Background jobs for processing uploads.\n- Responsive dashboard to view and manage uploads.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Convex",
      "OpenAI",
      "Stripe",
      "Inngest",
    ],
    image1: "/images/receipt-1.png",
    image2: "/images/receipt-2.png",
    image3: "/images/receipt-3.png",
    githubUrl: "https://github.com/yatin-coder07/Ai-Receipt-app",
    demoUrl: "https://my-reciept-app.vercel.app/",
  },

  {
    id: "jobify",
    title: "Jobify – Smart Job Portal",
    description:
      "Full-stack job portal with role-based access for candidates and employers.",
    explanation:
      "Jobify is a full-stack hiring platform built with a Next.js frontend and a Django REST backend. The system is designed around strict role-based access, clearly separating employer and candidate capabilities.\n\nAuthentication is handled using JWT, ensuring secure session management and protected API routes. Employers can post and manage jobs, review applicants, and track hiring activity, while candidates can browse listings and apply for roles in real time.\n\nThe backend is structured for scalability and maintainability, with well-defined REST APIs, permission checks, and secure data handling.\n\nKey features include:\n\n- JWT-based authentication for secure user sessions.\n- Role-based authorization for employers and candidates.\n- Django REST backend with PostgreSQL.\n- Job posting, application, and tracking workflows.\n- Clear separation between frontend and backend responsibilities.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Django REST Framework",
      "PostgreSQL",
      "JWT Authentication",
      "Tailwind CSS",
    ],
    image1: "/images/jobify-1.png",
    image2: "/images/jobify-2.png",
    image3: "/images/jobify-3.png",
    githubUrl: "https://github.com/yatin-coder07/jobify-backend",
    demoUrl:
      "https://jobify-frontend-o7fperik2-yatin-coder07s-projects.vercel.app/",
  },

  {
    id: "ai-report-maker",
    title: "AI Report Maker",
    description:
      "Platform that converts raw input into structured, professional reports.",
    explanation:
      "This project automates report creation from unstructured user input. Users provide raw text, which is transformed into well-organized, readable reports with clear sections and formatting. The system focuses on consistency, clarity, and speed, making it useful for business, academic, and internal documentation.\n\nA secure backend ensures user data is stored safely with proper access control. The platform significantly reduces the time required to produce structured reports compared to manual drafting.\n\nKey features include:\n\n- Automatic conversion of raw text into structured reports.\n- Consistent formatting and section generation.\n- Secure, access-controlled backend with PostgreSQL.\n- Reduced manual report creation effort by ~70%.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Django REST Framework",
      "PostgreSQL",
      "OpenAI",
      "Tailwind CSS",
    ],
    image1: "/images/email-1.png",
    image2: "/images/email-2.png",
    image3: "/images/email-3.png",
    demoUrl: "https://ai-report-maker.vercel.app/",
  },
];
