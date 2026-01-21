"use client";

import React from "react";
import { motion } from "framer-motion";

export default function BestProjects() {
  return (
    <section
      id="projects"
      className="relative w-full bg-white dark:bg-black transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div className="text-center w-full">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">
              Featured projects
            </h2>
            <p className="mt-2 text-sm md:text-base text-slate-600 dark:text-slate-400">
              A focused look at the products I’m proud of — production-grade apps with real users and
              real workflows.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Jobify – FIRST */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4 }}
            whileHover={{ y: -6 }}
            className="relative group rounded-3xl p-[1px] bg-gradient-to-br from-indigo-500/60 via-purple-500/40 to-sky-500/40"
          >
            <div className="h-full rounded-3xl bg-white/80 dark:bg-slate-900/90 backdrop-blur-xl border border-white/40 dark:border-white/10 px-5 py-5 md:px-6 md:py-6 shadow-xl flex flex-col">
              <div className="flex items-center justify-between mb-3">
                <span className="px-3 py-1 rounded-full text-[0.7rem] font-semibold bg-slate-900 text-white dark:bg-white dark:text-slate-900">
                  Platform • Full-Stack
                </span>
                <span className="text-[0.65rem] text-slate-500 dark:text-slate-400">
                  Jobs / Hiring
                </span>
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-2">
                Jobify – Smart Job Portal
              </h3>
              <p className="text-sm md:text-[0.95rem] text-slate-600 dark:text-slate-300 mb-4 flex-1">
                Full-stack job portal connecting candidates and employers with role-based access,
                secure authentication, and real-time hiring workflows.
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "Next.js",
                  "TypeScript",
                  "Django REST",
                  "PostgreSQL",
                  "JWT Auth",
                  "Tailwind CSS",
                ].map((tech) => (
                  <motion.span
                    key={tech}
                    whileHover={{ scale: 1.05, y: -2 }}
                    transition={{ type: "spring", stiffness: 260, damping: 18 }}
                    className="px-3 py-1 rounded-full text-[0.7rem] md:text-xs
                               bg-slate-900/5 dark:bg-white/5
                               border border-slate-200/70 dark:border-slate-700
                               text-slate-700 dark:text-slate-200"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              <div className="mt-auto flex gap-3">
                <a
                  href="https://jobify-frontend-o7fperik2-yatin-coder07s-projects.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-xl text-sm font-semibold bg-indigo-600 text-white shadow-md hover:shadow-lg"
                >
                  Live demo
                </a>
                <a
                  href="https://github.com/yatin-coder07/jobify-backend"
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-2 rounded-xl text-xs md:text-sm border border-white/20 text-slate-700 dark:text-slate-300 hover:bg-white/5"
                >
                  GitHub
                </a>
              </div>
            </div>
          </motion.article>

          {/* AI Receipt Scanner – SECOND */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            whileHover={{ y: -6 }}
            className="relative group rounded-3xl p-[1px] bg-gradient-to-br from-indigo-500/60 via-purple-500/40 to-sky-500/40"
          >
            <div className="h-full rounded-3xl bg-white/80 dark:bg-slate-900/90 backdrop-blur-xl border border-white/40 dark:border-white/10 px-5 py-5 md:px-6 md:py-6 shadow-xl flex flex-col">
              <div className="flex items-center justify-between mb-3">
                <span className="px-3 py-1 rounded-full text-[0.7rem] font-semibold bg-slate-900 text-white dark:bg-white dark:text-slate-900">
                  SaaS • AI
                </span>
                <span className="text-[0.65rem] text-slate-500 dark:text-slate-400">
                  Finance
                </span>
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-2">
                AI Receipt Scanner
              </h3>
              <p className="text-sm md:text-[0.95rem] text-slate-600 dark:text-slate-300 mb-4 flex-1">
                SaaS app that extracts structured data from receipts and PDFs, summarizes expenses,
                and automates bookkeeping using AI workflows.
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {["Next.js", "TypeScript", "Convex", "OpenAI / LLM", "Stripe", "Vercel"].map(
                  (tech) => (
                    <motion.span
                      key={tech}
                      whileHover={{ scale: 1.05, y: -2 }}
                      transition={{ type: "spring", stiffness: 260, damping: 18 }}
                      className="px-3 py-1 rounded-full text-[0.7rem] md:text-xs
                                 bg-slate-900/5 dark:bg-white/5
                                 border border-slate-200/70 dark:border-slate-700
                                 text-slate-700 dark:text-slate-200"
                    >
                      {tech}
                    </motion.span>
                  )
                )}
              </div>

              <div className="mt-auto flex gap-3">
                <a
                  href="https://my-reciept-app.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-xl text-sm font-semibold bg-indigo-600 text-white shadow-md hover:shadow-lg"
                >
                  Live demo
                </a>
                <a
                  href="https://github.com/yatin-coder07/Ai-Receipt-app"
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-2 rounded-xl text-xs md:text-sm border border-white/20 text-slate-700 dark:text-slate-300 hover:bg-white/5"
                >
                  GitHub
                </a>
              </div>
            </div>
          </motion.article>

          
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            whileHover={{ y: -6 }}
            className="relative group rounded-3xl p-[1px] bg-gradient-to-br from-indigo-500/60 via-purple-500/40 to-sky-500/40"
          >
            <div className="h-full rounded-3xl bg-white/80 dark:bg-slate-900/90 backdrop-blur-xl border border-white/40 dark:border-white/10 px-5 py-5 md:px-6 md:py-6 shadow-xl flex flex-col">
              <div className="flex items-center justify-between mb-3">
                <span className="px-3 py-1 rounded-full text-[0.7rem] font-semibold bg-slate-900 text-white dark:bg-white dark:text-slate-900">
                  Tool • AI
                </span>
                <span className="text-[0.65rem] text-slate-500 dark:text-slate-400">
                  Reports / Docs
                </span>
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-2">
                AI Report Maker
              </h3>
              <p className="text-sm md:text-[0.95rem] text-slate-600 dark:text-slate-300 mb-4 flex-1">
                AI-powered platform that converts raw user input into clean, structured, and
                professional reports, reducing manual drafting effort by ~70%.
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "Next.js",
                  "TypeScript",
                  "Django REST",
                  "PostgreSQL",
                  "OpenAI / LLM",
                ].map((tech) => (
                  <motion.span
                    key={tech}
                    whileHover={{ scale: 1.05, y: -2 }}
                    transition={{ type: "spring", stiffness: 260, damping: 18 }}
                    className="px-3 py-1 rounded-full text-[0.7rem] md:text-xs
                               bg-slate-900/5 dark:bg-white/5
                               border border-slate-200/70 dark:border-slate-700
                               text-slate-700 dark:text-slate-200"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              <div className="mt-auto flex gap-3">
                <a
                  href="https://ai-report-maker.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-xl text-sm font-semibold bg-indigo-600 text-white shadow-md hover:shadow-lg"
                >
                  Live demo
                </a>
                <a
                  href="https://github.com/yatin-coder07"
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-2 rounded-xl text-xs md:text-sm border border-white/20 text-slate-700 dark:text-slate-300 hover:bg-white/5"
                >
                  GitHub
                </a>
              </div>
            </div>
          </motion.article>
        </div>
      </div>

      <div className="mt-5 flex justify-center mb-10">
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
            className="px-4 py-2 rounded-xl text-xs md:text-sm font-semibold
                       bg-slate-900 text-white dark:bg-white dark:text-slate-900"
          >
            View all projects
          </a>
        </motion.div>
      </div>
    </section>
  );
}
