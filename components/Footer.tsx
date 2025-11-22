"use client";

import React from "react";
import { motion } from "framer-motion";

const socialLinks = {
  github: "https://github.com/yatin-coder07",      // replace with your link
  whatsapp: "https://wa.me/917973650983",          // replace with your number (no '+' or leading zero)
  linkedin: "https://www.linkedin.com/in/yatin-sharma-12a34428b/", // replace with your link
  twitter: "https://twitter.com/your-handle",      // replace with your link
};

export default function Footer(): JSX.Element {
  return (
    <footer className="w-full mt-16 border-t border-white/10 dark:border-white/10 bg-gradient-to-t from-black/60 via-slate-950/40 to-transparent dark:from-black/80">
      <div className="max-w-5xl mx-auto px-6 py-6">
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-4
                     rounded-2xl px-4 py-3
                     bg-white/10 dark:bg-black/40
                     border border-white/12
                     backdrop-blur-2xl backdrop-saturate-150
                     shadow-[0_8px_40px_rgba(15,23,42,0.45)]"
        >
          {/* Left text */}
          <div className="text-xs md:text-sm text-slate-700 dark:text-slate-300 text-center md:text-left">
            <p className="font-medium">
              Built by <span className="text-slate-900 dark:text-white">Yatin Sharma</span>
            </p>
            <p className="text-[0.7rem] md:text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Crafting modern web apps with Next.js, TypeScript & AI.
            </p>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {/* GitHub */}
            <motion.a
              href={socialLinks.github}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.12, y: -2  ,transition: { duration: 0.12, ease: "easeOut" }}}
              whileTap={{ scale: 0.98, y: 0 }}
              className="group inline-flex h-9 w-9 items-center justify-center rounded-xl
                         bg-white/10 dark:bg-white/10
                         border border-white/20
                         shadow-sm
                         transition-all duration-200"
              aria-label="GitHub"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-4 w-4 text-slate-800 dark:text-slate-100 opacity-85 group-hover:opacity-100 transition-opacity"
              >
                <path
                  fill="currentColor"
                  d="M12 .5C5.648.5.5 5.648.5 12c0 5.086 3.292 9.395 7.868 10.915.576.107.787-.247.787-.555 0-.274-.01-1.002-.015-1.967-3.199.695-3.874-1.542-3.874-1.542-.524-1.33-1.28-1.684-1.28-1.684-1.046-.716.079-.701.079-.701 1.158.082 1.768 1.188 1.768 1.188 1.028 1.762 2.697 1.253 3.354.958.104-.744.402-1.253.73-1.54-2.553-.29-5.236-1.277-5.236-5.682 0-1.255.45-2.282 1.187-3.087-.119-.29-.515-1.458.112-3.04 0 0 .968-.31 3.172 1.18a10.95 10.95 0 0 1 2.888-.389c.98.005 1.97.132 2.893.389 2.203-1.49 3.17-1.18 3.17-1.18.628 1.582.232 2.75.114 3.04.739.805 1.186 1.832 1.186 3.087 0 4.417-2.688 5.389-5.252 5.674.414.355.783 1.057.783 2.133 0 1.54-.014 2.78-.014 3.158 0 .31.21.668.793.554C20.213 21.39 23.5 17.083 23.5 12 23.5 5.648 18.352.5 12 .5Z"
                />
              </svg>
            </motion.a>

            {/* WhatsApp */}
            <motion.a
              href={socialLinks.whatsapp}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.12, y: -2, transition: { duration: 0.12, ease: "easeOut" } }}
              whileTap={{ scale: 0.98, y: 0 }}
              className="group inline-flex h-9 w-9 items-center justify-center rounded-xl
                         bg-white/10 dark:bg-white/10
                         border border-white/20
                         shadow-sm
                         transition-all duration-200"
              aria-label="WhatsApp"
            >
              <svg
                viewBox="0 0 32 32"
                fill="currentColor"
                className="h-4 w-4 text-green-500 opacity-90 group-hover:opacity-100 transition-opacity"
              >
                <path d="M16 2.667c-7.36 0-13.333 5.973-13.333 13.333 0 2.347.613 4.64 1.787 6.667L2.667 29.333l6.773-1.76A13.26 13.26 0 0016 29.333c7.36 0 13.333-5.973 13.333-13.333S23.36 2.667 16 2.667zm0 24c-2.267 0-4.48-.613-6.4-1.787l-.453-.267-4.027 1.067 1.067-3.92-.293-.453a10.65 10.65 0 01-1.6-5.6c0-5.893 4.8-10.667 10.667-10.667s10.667 4.773 10.667 10.667S21.867 26.667 16 26.667zm5.867-8.32c-.32-.16-1.893-.933-2.187-1.04-.293-.107-.507-.16-.72.16s-.827 1.04-1.013 1.253c-.187.213-.373.24-.693.08-.32-.16-1.36-.507-2.587-1.6-.96-.853-1.6-1.893-1.787-2.213-.187-.32-.02-.493.14-.653.147-.146.32-.373.48-.56.16-.187.213-.32.32-.533.107-.213.053-.4-.027-.56-.08-.16-.72-1.733-.987-2.373-.26-.64-.533-.56-.72-.56h-.613c-.213 0-.56.08-.853.4-.293.32-1.12 1.093-1.12 2.667 0 1.573 1.147 3.093 1.307 3.307.16.213 2.24 3.413 5.413 4.773.76.333 1.36.533 1.813.68.76.24 1.453.213 2.013.133.613-.093 1.893-.773 2.16-1.52.267-.747.267-1.387.187-1.52-.08-.133-.293-.213-.613-.373z" />
              </svg>
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.12, y: -2, transition: { duration: 0.12, ease: "easeOut" } }}
              whileTap={{ scale: 0.98, y: 0 }}
              className="group inline-flex h-9 w-9 items-center justify-center rounded-xl
                         bg-white/10 dark:bg-white/10
                         border border-white/20
                         shadow-sm
                         transition-all duration-200"
              aria-label="LinkedIn"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-4 w-4 text-sky-700 dark:text-sky-400 opacity-90 group-hover:opacity-100 transition-opacity"
              >
                <path
                  fill="currentColor"
                  d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.448-2.136 2.943v5.663H9.352V9h3.414v1.561h.047c.476-.9 1.637-1.852 3.37-1.852 3.603 0 4.269 2.372 4.269 5.455v6.288zM5.337 7.433a2.062 2.062 0 11.001-4.124 2.062 2.062 0 01-.001 4.124zM7.114 20.452H3.558V9h3.556v11.452z"
                />
              </svg>
            </motion.a>

            {/* Twitter / X */}
            <motion.a
              href={socialLinks.twitter}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.12, y: -2,transition: { duration: 0.12, ease: "easeOut" }  }}
              whileTap={{ scale: 0.98, y: 0 }}
              className="group inline-flex h-9 w-9 items-center justify-center rounded-xl
                         bg-white/10 dark:bg-white/10
                         border border-white/20
                         shadow-sm
                         transition-all duration-200"
              aria-label="Twitter"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-4 w-4 text-slate-900 dark:text-slate-100 opacity-90 group-hover:opacity-100 transition-opacity"
              >
                <path
                  fill="currentColor"
                  d="M18.9 3H21l-4.5 5.1L21.8 21h-4.4l-3.1-7.4L10 21H2.9L7.6 15 3 3h4.4l2.7 6.6L18.9 3zM8 5h-.9l7 14h.9L8 5z"
                />
              </svg>
            </motion.a>
          </div>
        </div>

        {/* Bottom note */}
        <p className="mt-3 text-[0.65rem] text-center text-slate-500 dark:text-slate-500">
          © {new Date().getFullYear()} Yatin Sharma. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
