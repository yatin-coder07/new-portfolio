"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const content = [
  { word: "I", image: null },
  { word: "DON’T", image: null },
  { word: "BUILD", image: null },
  { word: "GENERIC", image: "generic.jpg" },

  { word: "AI", image: "ai.jpg" },
  { word: "PRODUCTS,", image: null },

  { word: "I", image: null },
  { word: "ENGINEER", image: "engineer.jpg" },
  { word: "SYSTEMS", image: null },

  { word: "THAT", image: null },
  { word: "SCALE", image: "scale.jpg" },

  { word: "WITH", image: null },
  { word: "PRECISION", image: "precision.jpg" },

  { word: "AND", image: null },
  { word: "PURPOSE.", image: null },

  { word: "FROM", image: null },
  { word: "IDEA", image: "idea.jpg" },

  { word: "TO", image: null },
  { word: "PRODUCTION", image: "production.jpg" },

  { word: "I", image: null },
  { word: "CRAFT", image: null },
  { word: "EXPERIENCES", image: "experience.jpg" },
];

export default function HeroScrollText() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 100%", "end 20%"],
  });

  return (
    <section
      ref={ref}
      className="h-[200vh] w-screen bg-white flex items-center justify-center px-6 md:px-16"
    >
      <div className="max-w-7xl flex flex-wrap gap-x-4 gap-y-6 text-[clamp(40px,8vw,140px)] font-bold leading-[1.05]">
        {content.map((item, i) => {
          const start = i * 0.045;
          const end = start + 0.03;

          // TEXT ANIMATION (UNCHANGED)
          const bgPosition = useTransform(
            scrollYProgress,
            [start, end],
            ["100% 0%", "0% 0%"]
          );

          const y = useTransform(scrollYProgress, [start, end], [30, 0]);

          // 🚪 DOOR ANIMATION (NEW)
          const progress = useTransform(
            scrollYProgress,
            [start, end],
            [0, 1]
          );

          const leftX = useTransform(progress, [0, 1], ["0%", "-50%"]);
          const rightX = useTransform(progress, [0, 1], ["0%", "50%"]);

          const opacity = useTransform(progress, [0, 0.2], [0, 1]);

          return (
            <span key={i} className="relative inline-block">
              
              {/* TEXT (UNCHANGED) */}
              <motion.span
                style={{
                  y,
                  backgroundImage:
                    "linear-gradient(to right, #000 50%, #d1d5db 50%)",
                  backgroundSize: "200% 100%",
                  backgroundPosition: bgPosition,
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                {item.word}
              </motion.span>

              {/* 🚪 IMAGE DOOR (FIXED VERSION) */}
              {item.image && (
                <motion.div
                  style={{ opacity }}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex overflow-hidden rounded-xl"
                >
                  {/* LEFT HALF */}
                  <motion.div
                    style={{ x: leftX }}
                    className="overflow-hidden"
                  >
                    <img
                      src={`/${item.image}`}
                      className="h-24 md:h-32 lg:h-40 object-cover"
                    />
                  </motion.div>

                  {/* RIGHT HALF */}
                  <motion.div
                    style={{ x: rightX }}
                    className="overflow-hidden"
                  >
                    <img
                      src={`/${item.image}`}
                      className="h-24 md:h-32 lg:h-40 object-cover"
                    />
                  </motion.div>
                </motion.div>
              )}
            </span>
          );
        })}
      </div>
    </section>
  );
}