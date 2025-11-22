"use client";

import { useState, useRef, useEffect, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";

type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

const SUGGESTED_QUESTIONS = [
  "Tell me about your AI receipt scanner.",
  "What tech stack do you use most?",
  "How do you integrate AI into web apps?",
];

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome-1",
      role: "assistant",
      content:
        "Hey, I’m Yatin’s AI assistant 👋 Ask me about his projects, tech stack, or how he integrates AI into web apps.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isSending, setIsSending] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // auto-scroll on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isSending) return;

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      role: "user",
      content: input.trim(),
    };

    // Add user message to UI immediately
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsSending(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userMessage.content }),
      });

      if (!res.ok) {
        console.error("Chat API error", await res.text());
        const fallback: ChatMessage = {
          id: `assistant-${Date.now()}`,
          role: "assistant",
          content:
            "Hmm, something went wrong talking to my AI backend. Please try again in a moment.",
        };
        setMessages((prev) => [...prev, fallback]);
        return;
      }

      const data = await res.json();

      const assistantMessage: ChatMessage = {
        id: `assistant-${Date.now()}`,
        role: "assistant",
        content: data.reply ?? "I couldn’t generate a response, sorry.",
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Network error:", error);
      const errMessage: ChatMessage = {
        id: `assistant-${Date.now()}`,
        role: "assistant",
        content:
          "I ran into a network error while trying to reply. Please check your internet connection or try again.",
      };
      setMessages((prev) => [...prev, errMessage]);
    } finally {
      setIsSending(false);
    }
  };

  const handleSuggestionClick = (text: string) => {
    setInput(text);
    setTimeout(() => {
      const fakeEvent = { preventDefault() {} } as unknown as FormEvent;
      handleSubmit(fakeEvent);
    }, 50);
  };

  return (
    <>
      {/* Floating toggle button with robot + text */}
      <motion.button
        onClick={() => setIsOpen((prev) => !prev)}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2
                   h-12 px-3 md:px-4 rounded-full md:rounded-3xl
                   bg-gradient-to-r from-indigo-500 via-purple-500 to-sky-500
                   text-white
                   shadow-[0_18px_60px_rgba(15,23,42,0.7)]
                   border border-white/20
                   hover:scale-105 active:scale-95
                   transition-transform"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.95, y: 0 }}
        aria-label="Open chat"
      >
        {!isOpen ? (
          <>
            {/* Cute robot face icon */}
            <span className="flex h-8 w-8 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-md border border-white/40">
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  d="M11 4V3a1 1 0 0 1 2 0v1a5 5 0 0 1 4.9 4.002L18.5 8H19a2 2 0 0 1 2 2v6.5a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 16.5V10a2 2 0 0 1 2-2h.1A5 5 0 0 1 11 4Zm-4 5a3 3 0 1 0 0 6h10a3 3 0 0 0 0-6H7Zm1.75 2a1 1 0 1 1 0 2h-.01a1 1 0 1 1 .01-2Zm6.5 0a1 1 0 1 1 0 2h-.01a1 1 0 1 1 .01-2Z"
                />
              </svg>
            </span>
            {/* Text label – now visible on all screens */}
            <span className="text-[0.78rem] font-semibold tracking-tight">
              Chat with my AI assistant
            </span>
          </>
        ) : (
          // Close "X" icon when open
          <svg
            viewBox="0 0 24 24"
            className="w-5 h-5"
            aria-hidden="true"
          >
            <path
              fill="currentColor"
              d="M6.707 5.293 12 10.586l5.293-5.293 1.414 1.414L13.414 12l5.293 5.293-1.414 1.414L12 13.414l-5.293 5.293-1.414-1.414L10.586 12 5.293 6.707l1.414-1.414Z"
            />
          </svg>
        )}
      </motion.button>

      {/* Chat panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="chat-panel"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.18 }}
            className="fixed bottom-20 right-4 md:right-6 z-40 w-[92vw] max-w-sm"
          >
            <div
              className="rounded-3xl bg-white/90 dark:bg-slate-950/95
                         border border-white/40 dark:border-white/10
                         backdrop-blur-2xl shadow-[0_18px_60px_rgba(15,23,42,0.65)]
                         flex flex-col max-h-[70vh]"
            >
              {/* Header */}
              <div className="px-4 py-3 border-b border-white/40 dark:border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-2xl bg-indigo-600 text-white text-xs font-bold">
                    AI
                  </span>
                  <div className="flex flex-col">
                    <span className="text-xs font-semibold text-slate-900 dark:text-white">
                      Chat with my portfolio
                    </span>
                    <span className="text-[0.65rem] text-slate-500 dark:text-slate-400">
                      Ask about my projects, stack, or AI workflows.
                    </span>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="px-3 py-3 md:px-4 md:py-3 overflow-y-auto flex-1 space-y-2 text-sm custom-chat-scroll">
                {messages.map((m) => (
                  <div
                    key={m.id}
                    className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-2xl px-3 py-2 ${
                        m.role === "user"
                          ? "bg-indigo-600 text-white"
                          : "bg-slate-100/90 dark:bg-slate-900/80 text-slate-800 dark:text-slate-100 border border-white/30 dark:border-white/10"
                      }`}
                    >
                      {m.content}
                    </div>
                  </div>
                ))}

                {isSending && (
                  <div className="flex justify-start">
                    <div className="inline-flex items-center gap-1.5 rounded-2xl px-3 py-2 bg-slate-100/90 dark:bg-slate-900/80 border border-white/30 dark:border-white/10">
                      <span className="h-1.5 w-1.5 rounded-full bg-slate-400 animate-bounce" />
                      <span className="h-1.5 w-1.5 rounded-full bg-slate-400 animate-bounce [animation-delay:0.1s]" />
                      <span className="h-1.5 w-1.5 rounded-full bg-slate-400 animate-bounce [animation-delay:0.2s]" />
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Suggestions */}
              <div className="px-3 pb-2 md:px-4 md:pb-2">
                <div className="flex flex-wrap gap-2">
                  {SUGGESTED_QUESTIONS.map((q) => (
                    <button
                      key={q}
                      type="button"
                      onClick={() => handleSuggestionClick(q)}
                      className="text-[0.7rem] md:text-xs px-3 py-1.5 rounded-full
                                 bg-slate-900/5 dark:bg-white/5
                                 text-slate-700 dark:text-slate-200
                                 border border-slate-200/70 dark:border-slate-700
                                 hover:bg-slate-900/10 dark:hover:bg-white/10
                                 transition"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>

              {/* Input */}
              <form onSubmit={handleSubmit} className="px-3 pb-3 md:px-4 md:pb-4">
                <div
                  className="flex items-center gap-2 rounded-2xl px-3 py-2
                             bg-slate-100/90 dark:bg-slate-900/90
                             border border-slate-200/70 dark:border-slate-700"
                >
                  <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask me about my projects..."
                    className="flex-1 bg-transparent outline-none text-xs md:text-sm
                               text-slate-800 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500"
                  />
                  <button
                    type="submit"
                    disabled={!input.trim() || isSending}
                    className="inline-flex items-center justify-center h-7 w-7 rounded-full
                               bg-indigo-600 text-white text-[0.65rem]
                               disabled:opacity-40 disabled:cursor-not-allowed
                               hover:scale-105 active:scale-95 transition-transform"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="w-3.5 h-3.5"
                      aria-hidden="true"
                    >
                      <path
                        fill="currentColor"
                        d="M3.4 20.6 4.8 14l9.2-2-9.2-2L3.4 3.4 21 12 3.4 20.6Z"
                      />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
