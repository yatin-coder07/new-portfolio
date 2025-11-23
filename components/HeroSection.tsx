"use client";
import React from "react";
import { motion } from "framer-motion";

export default function HeroSection(): JSX.Element {
  const heroBg = "/mnt/data/27af3849-7ad3-4df1-a66e-5440fa4d3255.png";

  return (
    <section className="relative w-full overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 -z-20">
        <img
          src={heroBg}
          alt="background"
          className="w-full h-full object-cover pointer-events-none opacity-30 dark:opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-white/20 to-transparent dark:from-transparent dark:via-black/40 dark:to-black" />
      </div>

      <div className="absolute inset-0 -z-10 bg-white dark:bg-black" />

      <div className="max-w-7xl mx-auto px-6 py-28 md:py-36">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* LEFT SECTION */}
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-3">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300">
                Featured
              </span>
              <span className="text-sm text-slate-600 dark:text-slate-400">
                Building AI-driven workflows
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-slate-900 dark:text-white">
              Integrating{" "}
              <span className="text-indigo-600 dark:text-indigo-400">
                AI seamlessly
              </span>{" "}
              into modern web apps.
            </h1>

            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-xl">
              From intelligent automation to conversational UX — I design
              end-to-end AI workflows that enhance performance, scalability,
              and user experience without breaking the developer flow.
            </p>

            <div className="flex flex-wrap gap-3 mt-4">
              <motion.a
                whileHover={{ scale: 1.03 }}
                href="#projects"
                className="inline-flex items-center px-5 py-3 rounded-2xl bg-indigo-600 text-white font-semibold shadow-lg"
              >
                View projects
              </motion.a>
              <a
                href="/resume.pdf"
                download={"resume.pdf"}
                className="inline-flex items-center px-5 py-3 rounded-2xl   border border-white/10 text-sm font-medium text-slate-900 dark:text-white backdrop-blur-md dark:bg-indigo-600"
              >
                Download resume
              </a>

              <motion.a
                whileHover={{ scale: 1.03 }}
                href="#contact"
                className="inline-flex items-center px-5 py-3 rounded-2xl bg-white/8 dark:bg-white/6 border border-white/10 text-sm font-medium text-slate-900 dark:text-white backdrop-blur-md"
              >
                Contact
              </motion.a>

              
            </div>

            <div className="mt-6 text-sm text-slate-500 dark:text-slate-400">
              <strong>Current:</strong> AI workflow orchestration — building intelligent systems with agents and embeddings.
            </div>
          </motion.div>

          {/* RIGHT SECTION — AI WORKFLOW CARD */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center"
          >
            <div className="w-full max-w-md rounded-3xl p-5 bg-white/8 dark:bg-white/5 border border-white/15 dark:border-white/10 backdrop-blur-2xl shadow-2xl">
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-300">
                  <span className="h-2 w-2 rounded-full bg-indigo-400" />
                  <span>AI Integration Workflow</span>
                </div>
                <span className="text-[0.65rem] px-2 py-1 rounded-full bg-slate-900 text-white dark:bg-white/10 dark:text-slate-100">
                  seamless
                </span>
              </div>

              {/* Workflow visualization */}
              <div className="relative space-y-3 mb-4 text-[0.75rem] font-medium text-slate-200 font-mono">
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center gap-3 px-3 py-2 rounded-xl bg-black/80 border border-white/10"
                >
                  <span className="text-indigo-400">User Input</span>
                  <span className="text-slate-400">→</span>
                  <span className="text-emerald-400">AI Pipeline</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex items-center gap-3 px-3 py-2 rounded-xl bg-black/80 border border-white/10"
                >
                  <span className="text-emerald-400">AI Pipeline</span>
                  <span className="text-slate-400">→</span>
                  <span className="text-sky-400">Inngest Workflow</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex items-center gap-3 px-3 py-2 rounded-xl bg-black/80 border border-white/10"
                >
                  <span className="text-sky-400">Inngest Workflow</span>
                  <span className="text-slate-400">→</span>
                  <span className="text-yellow-400">Convex / Supabase</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 }}
                  className="flex items-center gap-3 px-3 py-2 rounded-xl bg-black/80 border border-white/10"
                >
                  <span className="text-yellow-400">Convex / Supabase</span>
                  <span className="text-slate-400">→</span>
                  <span className="text-pink-400">UI Update</span>
                </motion.div>
              </div>

              {/* Bottom tech stack badges */}
              <div className="mt-4 flex flex-wrap gap-2 text-[0.7rem] text-slate-600 dark:text-slate-300">
                {[
                  "Next.js 15",
                  "TypeScript",
                  "Vercel AI SDK",
                  "Inngest",
                  "Convex / Supabase",
                  "OpenAI / Gemini APIs",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 rounded-full bg-white/60 dark:bg-black/60 border border-white/40 dark:border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
