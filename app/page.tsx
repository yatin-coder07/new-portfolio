"use client"
import AboutMe from "@/components/AboutMe";
import BestProjects from "@/components/BestProjects";
import ContactSection from "@/components/ContactSection";
import ExperienceSection from "@/components/ExperienceSection";

import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import HeroText from "@/components/HeroText";
import ProjectPage from "./project/[id]/page";
import ProjectsPage from "./projects/page";


export default function Home() {
  return (
   <>
   {/*Navbar */}
   {/*Hero */}
   
   
   <div className="dark:bg-black">
    <HeroSection/>
    <AboutMe/>
   </div>
   

   {/*Projects */}
   
    {/*Features */} 
    <div className="dark:bg-black">
      <div className="w-full bg-black text-white py-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-5xl mx-auto text-center">
        
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-semibold leading-tight"
        >
          My Experience & Clients
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-6 text-lg md:text-xl text-white/70 max-w-2xl mx-auto"
        >
          Trusted by clients to deliver scalable, high-performance products 
          that drive real growth and measurable results.
        </motion.p>

      </div>
    </div>
     <ExperienceSection/>
     <div>
      <HeroText/>
     </div>
      <ProjectsPage/>
      <ContactSection/>
      <Footer/>
    </div>
    {/*Footer , contact me*/}
   </>
  );
}
