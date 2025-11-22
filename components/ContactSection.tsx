"use client";

import { MessageCircleIcon } from "lucide-react";
import React, { useState } from "react";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        throw new Error("Failed to send message");
      }

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again in a bit.");
    }
  };

  return (
    <section
      id="contact"
      className="w-full bg-white dark:bg-black transition-colors duration-500"
    >
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        <div className="mb-8 space-y-2">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">
            Let’s Get in touch
          </h2>
          <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 ">
            Tell me about your idea, project, or role. I’ll get back to you via
            email.
          </p>
        </div>

        {/* Glassy card */}
        <div className="rounded-3xl p-[1px] bg-gradient-to-br from-indigo-500/60 via-purple-500/40 to-sky-500/40">
          <div className="rounded-3xl bg-white/85 dark:bg-slate-950/90 border border-white/60 dark:border-white/10 backdrop-blur-2xl px-5 py-6 md:px-7 md:py-8 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Name */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="name"
                    className="text-xs font-medium text-slate-700 dark:text-slate-300"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    autoComplete="name"
                    required
                    className="w-full rounded-2xl border border-slate-200/70 dark:border-slate-700
                               bg-white/70 dark:bg-slate-900/70
                               px-3 py-2 text-sm text-slate-900 dark:text-slate-100
                               outline-none focus:ring-2 focus:ring-indigo-500/60 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="email"
                    className="text-xs font-medium text-slate-700 dark:text-slate-300"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    autoComplete="email"
                    required
                    className="w-full rounded-2xl border border-slate-200/70 dark:border-slate-700
                               bg-white/70 dark:bg-slate-900/70
                               px-3 py-2 text-sm text-slate-900 dark:text-slate-100
                               outline-none focus:ring-2 focus:ring-indigo-500/60 focus:border-transparent"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label
                  htmlFor="message"
                  className="text-xs font-medium text-slate-700 dark:text-slate-300"
                >
                  Project details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  required
                  className="w-full rounded-2xl border border-slate-200/70 dark:border-slate-700
                             bg-white/70 dark:bg-slate-900/70
                             px-3 py-2 text-sm text-slate-900 dark:text-slate-100
                             outline-none resize-none
                             focus:ring-2 focus:ring-indigo-500/60 focus:border-transparent"
                  placeholder="Tell me about what you want to build, timelines, etc."
                />
              </div>

              {/* Status + Button */}
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="inline-flex items-center justify-center px-5 py-2.5 rounded-2xl text-sm font-semibold
                             bg-indigo-600 text-white shadow-md
                             hover:bg-indigo-500 hover:shadow-indigo-500/40
                             disabled:opacity-60 disabled:cursor-not-allowed
                             transform transition-all duration-200
                             hover:-translate-y-0.5 hover:scale-[1.02] active:translate-y-0 active:scale-100"
                >
                  {status === "loading" ? "Sending..." : "Send message"}
                </button>

                {status === "success" && (
                  <p className="text-xs text-emerald-500">
                    Message sent! I’ll get back to you soon.
                  </p>
                )}
                {status === "error" && (
                  <p className="text-xs text-rose-500">{errorMessage}</p>
                )}
              </div>
            </form>

            {/* Optional: direct email link */}
            <p className="mt-4 text-[0.90rem] text-slate-500 dark:text-slate-400">
              Or email me directly at{" "}
              <a
                href="mailto:yatins113@gmail.com"
                className="font-medium text-indigo-600 dark:text-indigo-400 underline-offset-2 hover:underline"
              >
                yatins113@gmail.com
              </a>
            </p>
              <p className="mt-4 text-[0.90rem] text-slate-500 dark:text-slate-400">
             Or drop a message on my  <span className="dark:text-indigo-400 font-semibold">
              <a
  href="https://wa.me/917973650983"
  target="_blank"
  rel="noopener noreferrer"
>
  Whatsapp <MessageCircleIcon className="inline-block w-4 h-4 mb-0.5 mr-1" /> 
</a>
             </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
