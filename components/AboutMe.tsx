"use client";

import  { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


type TabKey = "about" | "focus" | "stack";

const TABS: { key: TabKey; label: string }[] = [
  { key: "about", label: "Who I am" },
  { key: "focus", label: "What I focus on" },
  { key: "stack", label: "Tools & stack" },
];

export default function BioSection() {
  const [activeTab, setActiveTab] = useState<TabKey>("about");

  const renderContent = () => {
    switch (activeTab) {
      case "about":
        return (
          
          <p className="text-sm md:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
            I’m <span className="font-semibold text-slate-900 dark:text-white">Yatin Sharma</span>, a
            full-stack developer who loves turning rough ideas into polished, real products. I care
            about clean UX, fast performance, and building things that actually ship — not just sit on
            GitHub.
          </p>
        );
      case "focus":
        return (
          <p className="text-sm md:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
            My focus is on {" "}
            <span className="font-semibold text-indigo-500">Next.js apps with AI baked in</span> —
            think AI-powered dashboards, agents, and tools that automate boring work. I mix strong
            product thinking with practical engineering so features feel intuitive, not “just AI for the flex”.
          </p>
        );
      case "stack":
        return (
          <p className="text-sm md:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
            On the tech side, I’m most at home with {" "}
            <span className="font-semibold">Next.js, TypeScript, Snaity CMS ,Python, React ,TailwindCSS, Postgres</span>{" "}
            and modern AI tooling like <span className="font-semibold">Vercel AI SDK, OpenAI, Gemini</span>{" "}
            plus vector DBs & agents.
          </p>
        );
      default:
        return null;
    }
  };

  const stackChips = [
    "Next.js",
    "TypeScript",
    "Vercel AI SDK",
    "OpenAI / Gemini",
    "Convex",
    "Supabase",
    "Postgres",
    "Tailwind",
    "React",
    "Python",
    "Sanity CMS",
    "Docker",
    "GitHub Actions",
  ];

  return (
    <>
    <div className="text-center" id="about" >
      <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white">About Me</h1>
    </div>
     <section className="relative max-w-5xl mx-auto px-6 py-20 bg-white dark:bg-black transition-colors duration-500">
      <div className="grid grid-cols-1 md:grid-cols-[minmax(0,220px)_minmax(0,1fr)] gap-10 items-center">
        {/* LEFT: AVATAR + NAME */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center md:items-start gap-4"
        >
          {/* Floating avatar with glow */}
          <motion.div
            className="relative"
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="absolute -inset-1 rounded-[28px] bg-gradient-to-tr from-indigo-500 via-purple-500 to-cyan-400 blur-md opacity-80" />
           <h1 className="text-6xl font-extrabold text-white">YS</h1>
          </motion.div>

          <div className="text-center md:text-left space-y-1">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white">
              Yatin Sharma
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Full-stack Developer • AI integrations • Product-first builder
            </p>
          </div>
        </motion.div>

        {/* RIGHT: INTERACTIVE BIO CARD */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="relative"
        >
          <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-tr from-indigo-500/30 via-purple-500/20 to-cyan-400/20 blur-2xl opacity-80 pointer-events-none" />

          <div className="relative rounded-3xl bg-white/80 dark:bg-slate-900/80 border border-white/40 dark:border-white/10 backdrop-blur-xl px-5 py-5 md:px-6 md:py-6 shadow-xl">
            {/* Tabs */}
            <div className="flex flex-wrap gap-2 mb-4">
              {TABS.map((tab) => {
                const isActive = activeTab === tab.key;
                return (
                  <motion.button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    whileTap={{ scale: 0.96 }}
                    className={`relative px-3 py-1.5 rounded-full text-xs md:text-sm font-medium border transition ${
                      isActive
                        ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900 border-transparent"
                        : "bg-white/70 dark:bg-slate-900/60 text-slate-600 dark:text-slate-300 border-slate-200/60 dark:border-slate-700"
                    }`}
                  >
                    {tab.label}
                    {isActive && (
                      <motion.span
                        layoutId="tab-glow"
                        className="absolute inset-0 -z-10 rounded-full bg-indigo-500/20 dark:bg-indigo-400/20 blur-md"
                      />
                    )}
                  </motion.button>
                );
              })}
            </div>

            {/* Animated content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2 }}
                className="mb-5"
              >
                {renderContent()}
              </motion.div>
            </AnimatePresence>

            {/* Tech pills (interactive with pop/glass effect) */}
            <div className="flex flex-wrap gap-2 mt-1">
              {stackChips.map((tech) => (
                <motion.span
                  key={tech}
                  whileHover={{ scale: 1.1, y: -3 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  className="relative px-3 py-1 rounded-full text-[0.7rem] md:text-xs bg-slate-900/5 dark:bg-white/5 border border-slate-200/70 dark:border-slate-700 text-slate-700 dark:text-slate-200 cursor-default overflow-hidden"
                >
                  {tech}
                  <span className="absolute inset-0 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-200"
                    style={{ background: 'linear-gradient(90deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))' }} />
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
    </>
   
  );
}