"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function AboutMe() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 80%", "start 20%"],
  });

  // Animate scale based on scroll
  const scaleLeft = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const scaleRight = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      ref={sectionRef}
      className="w-full min-h-screen overflow-hidden relative font-sans mt-20"
    >
      
      {/* TOP YELLOW (LEFT → RIGHT) */}
      <motion.div
        style={{
          scaleX: scaleLeft,
          transformOrigin: "left",
        }}
        className="absolute top-0 left-0 w-full h-[45%] md:h-[40%] bg-[#e5e34f]"
      />

      {/* BOTTOM GREY (RIGHT → LEFT) */}
      <motion.div
        style={{
          scaleX: scaleRight,
          transformOrigin: "right",
        }}
        className="absolute bottom-0 left-0 w-full h-[55%] md:h-[60%] bg-[#9e9e9e]"
      />

      {/* YOUR EXISTING CONTENT — NO CHANGE */}
      <div className="relative z-10 w-full h-full flex flex-col justify-between px-6 md:px-12 py-6">
        
        {/* NAVBAR */}
        <div className="flex justify-between items-center text-black">
          <div className="flex items-center gap-2 font-semibold">
            <div className="w-6 h-6 bg-black rounded-full" />
            <span>ME</span>
          </div>

          <button className="text-sm underline">BOOK A CALL</button>
        </div>

        {/* MAIN CONTENT */}
        <div className="relative flex-1 flex items-center justify-center">
          
          <h1 className="absolute top-10 right-10 text-[clamp(3rem,10vw,10rem)] font-extrabold text-black">
            WEBSITES
          </h1>

          <h1 className="absolute bottom-40 left-10 text-[clamp(3rem,8vw,8rem)] font-extrabold text-white/80">
            THAT FEEL
          </h1>

          <h1 className="absolute bottom-10 right-10 text-[clamp(3rem,10vw,10rem)] font-extrabold text-white/80">
            PREMIUM
          </h1>

          <div className="absolute top-24 left-10 text-xs text-black">
            CREATIVE <br /> DEVELOPMENT
          </div>

          <div className="absolute top-32 right-10 text-xs text-white max-w-[180px] mt-70">
            A PARTNER YOU CAN TRUST <br />
            LET’S GROW YOUR BUSINESS
          </div>

          {/* IMAGE (UNCHANGED ✅) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative z-20 mt-15"
          >
            <Image
              src="/me.jpeg"
              alt="Me"
              width={420}
              height={520}
              className="object-contain"
            />
          </motion.div>

          {/* CTA */}
         

          {/* INFO CARD */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white px-8 py-6 rounded-lg shadow-xl flex gap-10">
            <div>
              <p className="text-xs text-orange-500 mb-2">
                IMPACT IN NUMBERS
              </p>
              <p className="text-2xl font-bold text-black">20+</p>
              <p className="text-xs text-gray-500">
                Projects Delivered
              </p>
            </div>

            <div>
              <p className="text-2xl font-bold text-black">2+</p>
              <p className="text-xs text-gray-500">
                Years Experience
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}