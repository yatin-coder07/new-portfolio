"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { SmokeBackground } from "./spooky-smoke-animation";

import { useEffect ,useState} from "react";



const projects = [
  {
    type: "video",
    media: "/sardi.mp4",
    title: "Sardi Ecommerce",
    description:
      "Sardi approached us with a vision but no scalable system to support growth. We engineered a full production-grade ecommerce platform with a frictionless shopping flow and premium UI. Within weeks of launch, customer engagement surged, conversions improved significantly, and the brand started generating consistent daily orders. What was once an idea became a revenue-generating machine.",
    stats: [
      { label: "Conversion", value: "+42%" },
      { label: "Orders", value: "3x" },
      { label: "Load Time", value: "-60%" },
    ],
    bg: "#FF6A00",
    text: "black",
  },
  {
    type: "image",
    media: "/experience3.png",
    title: "Admin System",
    description:
      "The client was struggling with manual operations, wasting hours every day managing products and orders. We built a secure, intuitive admin system that centralized everything into one powerful dashboard. Tasks that previously took hours were reduced to minutes, giving the team full control, clarity, and efficiency. The result — smoother operations, fewer errors, and a team that could finally focus on growth instead of firefighting.",
    stats: [
      { label: "Time Saved", value: "5h/day" },
      { label: "Efficiency", value: "+70%" },
      { label: "Errors", value: "-90%" },
    ],
    bg: "#5A0000",
    text: "white",
  },
  {
    type: "image",
    media: "/experience2.png",
    title: "Scalable Systems",
    description:
      "Before working with us, the client’s system couldn’t handle growth reliably. We rebuilt their infrastructure with scalability and performance at its core. As traffic increased, the platform stayed fast, stable, and responsive. Month after month, sales continued to rise without technical bottlenecks. The client gained confidence knowing their system could support long-term growth without breaking under pressure.",
    stats: [
      { label: "Revenue", value: "+120%" },
      { label: "Growth", value: "Consistent" },
      { label: "Uptime", value: "99.9%" },
    ],
    bg: "#1E90FF",
    text: "white",
  },
];

function RollingStat({ value, label }: { value: string; label: string }) {
  const [active, setActive] = useState(false);

  const numeric = parseFloat(value.replace(/[^0-9.]/g, "")) || 0;

  const spring = useSpring(0, {
    stiffness: 70,
    damping: 20,
  });

  useEffect(() => {
    if (active) {
      spring.set(numeric);
    }
  }, [active, numeric]);

  const display = useTransform(spring, (latest) => {
    if (value.includes("%")) return `${latest.toFixed(0)}%`;
    if (value.includes("x")) return `${latest.toFixed(1)}x`;
    if (value.includes("h")) return `${latest.toFixed(0)}h`;
    return latest.toFixed(0);
  });

  return (
    <motion.div
      onViewportEnter={() => setActive(true)}
      viewport={{ once: false, amount: 0.6 }}
      className="text-right mb-10"
    >
      <motion.p className="text-3xl md:text-4xl lg:text-6xl font-bold">
        {display}
      </motion.p>
      <p className="text-sm opacity-70">{label}</p>
    </motion.div>
  );
}
export default function ExperienceSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `-${(projects.length - 1) * 100}%`]
  );

  return (
    <section ref={sectionRef} className="relative w-full h-[400vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div style={{ x }} className="flex h-screen">

          {projects.map((project, index) => (
           <div
  key={index}
  className="w-screen h-screen shrink-0 relative flex flex-col justify-between px-6 md:px-12 lg:px-20 py-12"
  style={{ backgroundColor: project.bg }}
>
  {/* 🔥 BACKGROUND */}
  <div className="absolute inset-0 opacity-40">
    <SmokeBackground smokeColor={project.bg} />
  </div>

  {/* 🧠 CONTENT */}
  <div className="relative z-10 flex flex-col h-full justify-between">

    {/* 🔝 BIG HEADING (FULL WIDTH) */}
   <motion.h2
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, ease: "easeOut" }}
  viewport={{ once: false, amount: 0.4 }}
  className={`text-3xl md:text-5xl lg:text-8xl font-bold leading-tight w-full ${
    project.text === "white" ? "text-white" : "text-black"
  }`}
>
  {project.title}
</motion.h2>


    {/* 🎯 MIDDLE SECTION */}
    <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10 flex-1">

      {/* 🖼️ LEFT MEDIA (CENTERED FEEL) */}
      <div className="w-full md:w-[45%] flex items-center justify-center">
        {project.type === "video" ? (
          <video
            src={project.media}
            autoPlay
            muted
            loop
            playsInline
            className="rounded-2xl shadow-2xl max-h-[60vh] object-contain lg:mt-30"
          />
        ) : (
          <img
            src={project.media}
            className="rounded-2xl lg:mt-20 shadow-2xl max-h-[60vh] object-contain"
          />
        )}
      </div>

      {/* 📝 RIGHT TEXT */}
      <div
        className={`w-full md:w-[45%] ${
          project.text === "white" ? "text-white" : "text-black"
        }`}
      >
        <motion.p
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, delay: 0.15 }}
  viewport={{ once: false, amount: 0.4 }}
  className="mt-6 text-base md:text-lg opacity-80 leading-relaxed"
>
  {project.description}
</motion.p>
      </div>
    </div>

    {/* 🎰 BOTTOM RIGHT STATS */}
    <div className="flex justify-end">
      <div className="flex gap-10">
        {project.stats.map((stat, i) => (
          <RollingStat key={i} value={stat.value} label={stat.label} />
        ))}
      </div>
    </div>
  </div>
</div>))}

        </motion.div>
      </div>
    </section>
  );
}