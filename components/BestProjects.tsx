"use client";

import React from "react";
import { motion } from "framer-motion";

type Project = {
  id: string;
  title: string;
  slug: string;
  description: string;
  tech: string[];
  demoUrl?: string;
  githubUrl?: string;
};

const projects: Project[] = [
  {
    id: "receipt",
    title: "AI Receipt Scanner",
    slug: "ai-receipt-scanner",
    description:
      "SaaS web app that reads receipts & PDFs, extracts structured data and summarizes expenses using AI workflows and Schematic payment gateway.",
    tech: ["Next.js", "TypeScript", "Convex", "OpenAI / LLM", "Stripe", "Schematic", "Vercel"],
    demoUrl: "https://my-reciept-app.vercel.app/", // put your real demo link here
    githubUrl: "https://github.com/yatin-coder07/Ai-Receipt-app", // put your GitHub repo here
  },
  {
    id: "email-finder",
    title: "AI Email Finder",
    slug: "ai-email-finder",
    description:
      "AI-powered tool that finds, validates and enriches professional emails from minimal input, with smart scoring.",
    tech: ["Next.js", "TypeScript", "Supabase", "HuggingFace API" , "Vector Embeddings", "Postgres"],
    demoUrl: "https://vector-embedded-email-app.vercel.app/",
    githubUrl: "https://github.com/yatin-coder07/vector-embedded-email-app",
  },
];

export default function BestProjects() {
  return (
    <section
      id="projects"
      className="relative w-full bg-white dark:bg-black transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto px-6 py-20">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div className="text-center w-full">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">
              Featured projects
            </h2>
            <p className="mt-2 text-sm md:text-base text-slate-600 dark:text-slate-400 ">
              A focused look at the products I’m proud of — production-grade apps with real users and
              real workflows.
            </p>
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -6 }}
              className="relative group rounded-3xl p-[1px] bg-gradient-to-br from-indigo-500/60 via-purple-500/40 to-sky-500/40"
            >
              {/* Inner glass card */}
              <div className="h-full rounded-3xl bg-white/80 dark:bg-slate-900/90 backdrop-blur-xl border border-white/40 dark:border-white/10 px-5 py-5 md:px-6 md:py-6 shadow-xl flex flex-col">
                {/* Top label row */}
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 rounded-full text-[0.7rem] font-semibold bg-slate-900 text-white dark:bg-white dark:text-slate-900">
                    {index === 0 ? "SaaS • AI" : "Tool • AI"}
                  </span>
                  <span className="text-[0.65rem] text-slate-500 dark:text-slate-400">
                    {index === 0 ? "Receipts / Finance" : "Outreach / Growth"}
                  </span>
                </div>

                {/* Title + description */}
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-sm md:text-[0.95rem] text-slate-600 dark:text-slate-300 mb-4 flex-1">
                  {project.description}
                </p>

                {/* Tech stack pills */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <motion.span
                      key={tech}
                      whileHover={{ scale: 1.05, y: -2 }}
                      transition={{ type: "spring", stiffness: 260, damping: 18 }}
                      className="relative px-3 py-1 rounded-full text-[0.7rem] md:text-xs
                                 bg-slate-900/5 dark:bg-white/5
                                 border border-slate-200/70 dark:border-slate-700
                                 text-slate-700 dark:text-slate-200
                                 overflow-hidden cursor-default"
                    >
                      {tech}
                      {/* glass/highlight layer like navbar links */}
                      <span
                        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 hover:opacity-100 transition-opacity duration-200"
                        style={{
                          background:
                            "linear-gradient(90deg, rgba(255,255,255,0.10), rgba(255,255,255,0.03))",
                        }}
                      />
                    </motion.span>
                  ))}
                </div>

                {/* Actions */}
                <div className="mt-auto flex flex-wrap gap-3 items-center">
                  {/* Case study button -> detail page */}
                  <motion.a
                    whileHover={{ y: -2, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center px-4 py-2 rounded-xl text-sm font-semibold
                               bg-indigo-600 text-white shadow-md hover:shadow-lg
                               transition-all"
                  >
                    View case study
                  </motion.a>

                  {/* Demo + GitHub smaller buttons */}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      className="inline-flex items-center px-3 py-2 rounded-xl text-xs md:text-sm font-medium
                                 bg-white/10 dark:bg-white/5 border border-white/20
                                 text-slate-800 dark:text-slate-200
                                 hover:bg-white/20 dark:hover:bg-white/10
                                 transition"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      className="inline-flex items-center px-3 py-2 rounded-xl text-xs md:text-sm font-medium
                                 bg-transparent border border-white/20
                                 text-slate-700 dark:text-slate-300
                                 hover:bg-white/5
                                 transition"
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
        {/* LINK TO FULL PROJECTS PAGE */}
        <div className="mt-5 flex justify-center mb-10 ">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl
                       bg-white/70 dark:bg-slate-900/80
                       border border-slate-200/70 dark:border-slate-700
                       backdrop-blur-xl shadow-md"
          >
            <span className="text-sm text-slate-700 dark:text-slate-200">
              Want to see everything I’ve built?
            </span>
            <a
              href="/projects"
              className="inline-flex items-center px-4 py-2 rounded-xl text-xs md:text-sm font-semibold
                         bg-slate-900 text-white dark:bg-white dark:text-slate-900
                         hover:scale-[1.02] active:scale-100 transition-transform"
            >
              View all projects
            </a>
          </motion.div>
        </div>
      
    </section>
  );
}
