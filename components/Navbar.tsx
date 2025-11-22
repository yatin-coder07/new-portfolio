"use client";
// components/Navbar.tsx
// Translucent glass-style navbar with hover "pop" effects and a working theme toggle.
// Requirements:
//  - Tailwind CSS with `darkMode: 'class'`
//  - framer-motion (optional but used here): `npm i framer-motion`

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const navLinks = [
  { name: "Projects", href: "/#projects" },
  { name: "About", href: "/#about" },
  { name: "Contact", href: "/#contact" },
];

export default function Navbar(): JSX.Element {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window === "undefined") return "light";
    const saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") return saved;
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    try {
      localStorage.setItem("theme", theme);
    } catch (e) {}
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <header className="fixed inset-x-4 top-4 z-50">
      <div className="max-w-5xl mx-auto">
        <nav
          className="flex items-center justify-between gap-3 p-2 rounded-2xl
                     bg-white/8 dark:bg-black/30
                     border border-white/10 dark:border-white/8
                     backdrop-blur-2xl backdrop-saturate-150
                     shadow-[0_6px_30px_rgba(2,6,23,0.12)]"
          aria-label="Primary navigation"
        >
          {/* Brand */}
          <a href="/" className="flex items-center gap-3 no-underline">
            <div
              className="h-10 w-10 rounded-lg flex items-center justify-center
                         bg-white/20 dark:bg-white/8 border border-white/8 dark:border-white/12
                         backdrop-blur-md shadow-sm"
            >
              <span className="font-extrabold text-slate-900 dark:text-white">YS</span>
            </div>
            <div className="text-sm font-semibold text-slate-900 dark:text-white">
              Yatin Sharma
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-3">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                whileHover={{ y: -4, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium
                           text-slate-800 dark:text-slate-100
                           hover:bg.white/6 dark:hover:bg-white/6 hover:border hover:border-white/10
                           transition-all duration-200 ease-out
                           hover:text-indigo-600 dark:hover:text-indigo-300"
                aria-label={link.name}
              >
                {/* subtle glass sheen */}
                <span className="relative z-10">{link.name}</span>

                {/* glow layer */}
                <span
                  className="absolute inset-0 rounded-lg pointer-events-none opacity-0 hover:opacity-100 transition-opacity duration-200"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
                    boxShadow: "0 6px 24px rgba(99,102,241,0.06)",
                  }}
                />
              </motion.a>
            ))}

            {/* Contact CTA */}
            <motion.a
              href="/#techstack"
              whileHover={{ y: -4, scale: 1.03 }}
              className="ml-2 inline-flex items-center px-4 py-2 rounded-lg text-sm font-semibold
                         bg-indigo-600 text-white shadow-md hover:shadow-lg
                         focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-400
                         transition-all duration-220"
            >
              Tech Stack
            </motion.a>
          </div>

          {/* Right side: theme toggle + mobile menu */}
          <div className="flex items-center gap-2">
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              aria-pressed={theme === "dark"}
              className="p-2 rounded-xl bg-white/8 dark:bg-white/10 border border-white/12
                         focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-400
                         transition-all hover:-translate-y-0.5 hover:scale-[1.03]"
            >
              {theme === "dark" ? (
                <motion.svg
                  key="sun"
                  initial={{ rotate: -90, scale: 0.6, opacity: 0 }}
                  animate={{ rotate: 0, scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18 }}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 text-yellow-400"
                >
                  <path d="M12 18a6 6 0 100-12 6 6 0 000 12z" />
                </motion.svg>
              ) : (
                <motion.svg
                  key="moon"
                  initial={{ rotate: 90, scale: 0.6, opacity: 0 }}
                  animate={{ rotate: 0, scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18 }}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 text-slate-800 dark:text-white"
                >
                  <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                </motion.svg>
              )}
            </button>

            {/* Mobile hamburger (glass) */}
            <button
              onClick={() => setOpen((prev) => !prev)}
              aria-label={open ? "Close navigation menu" : "Open navigation menu"}
              className="md:hidden p-2 rounded-xl bg-white/8 dark:bg-white/10 border border-white/12
                         focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-400
                         transition-all hover:-translate-y-0.5 hover:scale-[1.03]"
            >
              <motion.svg
                initial={false}
                animate={open ? { rotate: 90 } : { rotate: 0 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-5 h-5 text-slate-900 dark:text-slate-100"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.8}
                strokeLinecap="round"
              >
                {open ? (
                  <path d="M6 6l12 12M6 18L18 6" />
                ) : (
                  <>
                    <path d="M4 7h16" />
                    <path d="M4 12h16" />
                    <path d="M4 17h16" />
                  </>
                )}
              </motion.svg>
            </button>
          </div>
        </nav>

        {/* Mobile dropdown */}
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18 }}
            className="mt-2 rounded-2xl overflow-hidden
                       bg-white/10 dark:bg-black/40
                       border border-white/10 dark:border-white/15
                       backdrop-blur-xl shadow-lg md:hidden"
          >
            <div className="flex flex-col px-3 py-2 gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-2 rounded-lg text-sm font-medium
                             text-slate-900 dark:text-slate-100
                             hover:bg-white/12 dark:hover:bg-white/10
                             hover:text-indigo-600 dark:hover:text-indigo-300
                             transition-colors"
                >
                  {link.name}
                </a>
              ))}

              <a
                href="/#contact"
                onClick={() => setOpen(false)}
                className="mt-1 px-4 py-2 rounded-lg text-sm font-semibold
                           bg-indigo-600 text-white text-center
                           hover:bg-indigo-500 transition-colors"
              >
                Contact
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
}
