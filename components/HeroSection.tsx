"use client";


import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";

export default function HeroSection(): JSX.Element {
  return (
    <AuroraBackground>
      <section className="w-full min-h-screen flex items-center justify-center px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="max-w-7xl w-full text-center "
        >
          {/* BIG HEADING */}
          <h1
            className="
              text-5xl md:text-7xl lg:text-[90px] 
              font-extrabold leading-[1.05] tracking-tight
              
              bg-clip-text text-transparent
              bg-gradient-to-b from-black/80 via-black/40 to-white/10
              
              dark:from-white/90 dark:via-white/50 dark:to-white/20
              
             
            "
          >
            Engineering web experiences that feel Premium
            
          </h1>

          {/* SUBTEXT */}
          <p
            className="
              mt-8 max-w-2xl mx-auto
              text-lg md:text-xl
              text-black/60 dark:text-white/50
              leading-relaxed
            "
          >
            I design and build modern web platforms powered by AI —
            crafted to perform, convert, and grow with your business.
          </p>
        </motion.div>
      </section>
    </AuroraBackground>
  );
}