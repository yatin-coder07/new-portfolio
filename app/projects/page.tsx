"use client";

import { motion } from "framer-motion";
import { JSX } from "react";

type Project = {
  id: string;
  title: string;
  slug: string;
  tagline: string;
  description: string;
  role: string;
  status: string;
  area: string;
  tech: string[];
  highlights: string[];
  demoUrl?: string;
};

const projects: Project[] = [
  {
    id: "jobify",
    title: "Jobify – Smart Job Portal",
    slug: "jobify",
    tagline: "A role-based job platform connecting candidates and employers.",
    description:
      "A full-stack hiring platform with separate employer and candidate flows, secure authentication, job posting, and real-time applications — built with scalability and clean workflows in mind.",
    role: "Solo builder · Product, full-stack, backend",
    status: "Live",
    area: "Hiring · Recruitment · Platform",
    tech: [
      "Next.js",
      "TypeScript",
      "Django REST",
      "PostgreSQL",
      "JWT Auth",
      "Tailwind CSS",
    ],
    highlights: [
      "Role-based access for employers and candidates.",
      "Secure JWT authentication with protected APIs.",
      "End-to-end hiring workflow from posting to application.",
    ],
    demoUrl: "https://jobify-frontend-nine.vercel.app/",
  },
  {
    id: "ai-receipt-scanner",
    title: "AI Receipt Scanner",
    slug: "ai-receipt-scanner",
    tagline: "Reads receipts, extracts structured data, and summarizes expenses.",
    description:
      "A SaaS web app that turns messy receipts and PDFs into clean, queryable financial data. It uses AI workflows to parse line items, categorize spend, and generate summaries.",
    role: "Solo builder · Product, frontend, backend, AI",
    status: "Live",
    area: "SaaS · Finance · Automation",
    tech: ["Next.js", "TypeScript", "Convex", "OpenAI / LLM", "Stripe", "Vercel"],
    highlights: [
      "End-to-end pipeline: upload → parse → extract → summarize.",
      "Multi-step AI workflow powered by background jobs.",
      "Stripe-powered subscriptions with usage-based intent.",
    ],
    demoUrl: "https://my-reciept-app.vercel.app/",
  },
  
  {
    id: "ai-report-maker",
    title: "AI Report Maker",
    slug: "ai-report-maker",
    tagline: "Turns raw input into clear, structured, ready-to-use reports.",
    description:
      "An AI-powered report generation platform that converts unstructured user input into professional, well-formatted reports. Designed to reduce manual drafting effort while maintaining clarity, structure, and consistency.",
    role: "Solo builder · Product, full-stack, AI",
    status: "Live",
    area: "Productivity · Documentation · AI",
    tech: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Django REST",
      "OpenAI / LLM",
      "Tailwind CSS",
    ],
    highlights: [
      "Converts raw text into structured, formatted reports automatically.",
      "Secure, access-controlled database for sensitive data.",
      "Reduced manual report creation effort by ~70%.",
    ],
    demoUrl: "https://ai-report-maker.vercel.app/",
  },
];

export default function Projects(): JSX.Element {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors duration-500">
      <section className="max-w-6xl mx-auto px-6 py-24 md:py-28">
        <div className="mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-900 text-xs font-semibold">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            <span>Projects</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">
            All projects in one place
          </h1>
          <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 max-w-2xl">
            These are the projects where I actually shipped things end-to-end — from idea and UX to
            backend, AI workflows, and deployment.
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="relative rounded-3xl p-[1px] bg-gradient-to-br from-indigo-500/60 via-purple-500/40 to-sky-500/40"
            >
              <div className="rounded-3xl bg-white/85 dark:bg-slate-950/90 border border-white/50 dark:border-white/10 backdrop-blur-2xl px-5 py-5 md:px-7 md:py-6 shadow-2xl flex flex-col md:flex-row gap-6">
                <div className="flex-1 space-y-3">
                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                    <span className="px-2 py-1 rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-900 text-[0.65rem] font-semibold">
                      {project.status}
                    </span>
                    <span>{project.area}</span>
                    <span className="hidden md:inline text-slate-400">•</span>
                    <span className="text-[0.7rem] md:text-xs">{project.role}</span>
                  </div>

                  <div>
                    <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
                      {project.title}
                    </h2>
                    <p className="text-sm md:text-[0.95rem] text-slate-600 dark:text-slate-300">
                      {project.tagline}
                    </p>
                  </div>

                  <p className="text-sm md:text-[0.95rem] text-slate-600 dark:text-slate-300">
                    {project.description}
                  </p>

                  <ul className="mt-2 space-y-1.5 text-xs md:text-sm text-slate-600 dark:text-slate-300">
                    {project.highlights.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-indigo-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <motion.span
                        key={tech}
                        whileHover={{ scale: 1.06, y: -2 }}
                        transition={{ type: "spring", stiffness: 280, damping: 20 }}
                        className="px-3 py-1 rounded-full text-[0.7rem] md:text-xs
                                   bg-slate-900/5 dark:bg-white/5
                                   border border-slate-200/70 dark:border-slate-700
                                   text-slate-700 dark:text-slate-200"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  <div className="mt-4 flex flex-wrap gap-3">
                    <motion.a
                      whileHover={{ y: -2, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      href={`/project/${project.slug}`}
                      className="inline-flex items-center px-4 py-2 rounded-xl text-sm font-semibold
                                 bg-indigo-600 text-white shadow-md hover:shadow-lg transition-all"
                    >
                      View full case study
                    </motion.a>
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center px-3 py-2 rounded-xl text-xs md:text-sm font-medium
                                   bg-white/10 dark:bg-white/5 border border-white/20
                                   text-slate-800 dark:text-slate-200
                                   hover:bg-white/20 dark:hover:bg-white/10 transition"
                      >
                        Live demo
                      </a>
                    )}
                  </div>
                </div>

                <div className="w-full md:w-60">
                  <div className="h-full rounded-2xl bg-slate-900 text-slate-100 dark:bg-black border border-slate-700 px-4 py-4">
                    <div className="text-[0.65rem] uppercase tracking-wide text-slate-400 mb-3">
                      Snapshot
                    </div>

                    <div className="grid grid-cols-3 gap-2 text-[0.7rem]">
                      <div className="rounded-xl bg-white/5 px-2 py-2">
                        <div className="text-slate-400 mb-1">Role</div>
                        <div className="font-semibold">Full-stack</div>
                      </div>
                      <div className="rounded-xl bg-white/5 px-2 py-2">
                        <div className="text-slate-400 mb-1">Stack</div>
                        <div className="font-semibold">
                          {project.id === "jobify"
                            ? "Django"
                            : project.id === "ai-receipt-scanner"
                            ? "Convex"
                            : "Postgres"}
                        </div>
                      </div>
                      <div className="rounded-xl bg-white/5 px-2 py-2">
                        <div className="text-slate-400 mb-1">AI</div>
                        <div className="font-semibold text-emerald-400">
                          {project.id === "jobify" ? "—" : "LLM"}
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 border-t border-slate-700 pt-3 text-[0.7rem]">
                      <div className="text-slate-400 mb-1">Focus</div>
                      <div>
                        {project.id === "jobify"
                          ? "Scalable hiring workflows."
                          : project.id === "ai-receipt-scanner"
                          ? "Automating finance with AI."
                          : "Faster, structured report generation."}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-12 flex justify-between text-sm">
          <a
            href="/"
            className="text-slate-600 dark:text-slate-300 hover:text-indigo-500 transition"
          >
            ← Back to home
          </a>
          <span className="text-xs text-slate-500">
            More projects coming soon.
          </span>
        </div>
      </section>
    </main>
  );
}
