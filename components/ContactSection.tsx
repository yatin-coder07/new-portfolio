"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MessageCircleIcon } from "lucide-react";

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  
const socialLinks = [
  {
    name: "GitHub",
    link: "https://github.com/yatin-coder07",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-black">
        <path d="M12 .5C5.648.5.5 5.648.5 12c0 5.086 3.292 
        9.395 7.868 10.915.576.107.787-.247.787-.555 
        0-.274-.01-1.002-.015-1.967-3.199.695-3.874-1.542-3.874-1.542
        -.524-1.33-1.28-1.684-1.28-1.684-1.046-.716.079-.701.079-.701
        1.158.082 1.768 1.188 1.768 1.188 1.028 1.762 
        2.697 1.253 3.354.958.104-.744.402-1.253.73-1.54
        -2.553-.29-5.236-1.277-5.236-5.682 
        0-1.255.45-2.282 1.187-3.087-.119-.29-.515-1.458.112-3.04 
        0 0 .968-.31 3.172 1.18a10.95 10.95 0 0 1 2.888-.389
        c.98.005 1.97.132 2.893.389 2.203-1.49 
        3.17-1.18 3.17-1.18.628 1.582.232 2.75.114 
        3.04.739.805 1.186 1.832 1.186 3.087 
        0 4.417-2.688 5.389-5.252 5.674.414.355.783 
        1.057.783 2.133 0 1.54-.014 2.78-.014 
        3.158 0 .31.21.668.793.554C20.213 
        21.39 23.5 17.083 23.5 12 23.5 5.648 
        18.352.5 12 .5Z" />
      </svg>
    ),
  },
  {
    name: "WhatsApp",
    link: "https://wa.me/917973650983",
    icon: <MessageCircleIcon className="w-5 h-5" />,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/yatin-sharma-12a34428b/",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-black">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 
        0-2.136 1.448-2.136 2.943v5.663H9.352V9h3.414v1.561h.047c.476-.9 
        1.637-1.852 3.37-1.852 3.603 0 4.269 
        2.372 4.269 5.455v6.288zM5.337 7.433a2.062 
        2.062 0 11.001-4.124 2.062 2.062 0 
        01-.001 4.124zM7.114 20.452H3.558V9h3.556v11.452z" />
      </svg>
    ),
  },
  {
    name: "Twitter",
    link: "https://twitter.com/your-handle",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-black">
        <path d="M18.9 3H21l-4.5 5.1L21.8 
        21h-4.4l-3.1-7.4L10 21H2.9L7.6 
        15 3 3h4.4l2.7 6.6L18.9 3z" />
      </svg>
    ),
  },
];


  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error();

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      ref={ref}
      className="w-full h-screen flex items-center justify-center
                 bg-gradient-to-br from-orange-600 via-red-600 to-orange-800"
    >
      <div className="w-full max-w-7xl px-6 grid md:grid-cols-2 gap-12">

        {/* LEFT SIDE (FORM) */}
        <div className="flex flex-col justify-center text-black">
          <h2 className="text-4xl md:text-8xl font-extrabold mb-6">
            Let’s work together
          </h2>

          <p className="mb-8 text-black/80 max-w-md text-lg">
            Got an idea, product, or role? Drop your details and I’ll reach out.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5 max-w-md border-2 p-3 border-black rounded-lg">

            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              required
              className="w-full bg-transparent border-b border-black/40
                         focus:border-black outline-none py-2 placeholder-black/50"
            />

            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your email"
              required
              className="w-full bg-transparent border-b border-black/40
                         focus:border-black outline-none py-2 placeholder-black/50"
            />

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me about your project"
              rows={4}
              required
              className="w-full bg-transparent border-b border-black/40
                         focus:border-black outline-none py-2 placeholder-black/50 resize-none"
            />

            <button
              type="submit"
              className="mt-4 px-6 py-2 bg-black text-white rounded-full w-105
                         hover:scale-105 transition"
            >
              {status === "loading" ? "Sending..." : "Send Email"}
            </button>

            {status === "success" && (
              <p className="text-black/80 text-sm">
                Message sent 🚀
              </p>
            )}
          </form>
        </div>
 
        {/* RIGHT SIDE (SOCIAL LINKS) */}

        <motion.div
  initial={{ x: 300, opacity: 0 }}
  animate={isInView ? { x: 0, opacity: 1 } : {}}
  transition={{ duration: 1.2, ease: "easeOut" }}
  className="flex flex-col justify-center items-start gap-6 text-black text-2xl font-semibold"
>
  {socialLinks.map((item, i) => (
    <motion.a
      key={item.name}
      href={item.link}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, x: 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: 0.4 + i * 0.15 }}
      className="flex items-center gap-3 hover:translate-x-2 transition"
    >
      {item.icon}
      {item.name}
    </motion.a>
  ))}
</motion.div>
        
      </div>
    </section>
  );
}


