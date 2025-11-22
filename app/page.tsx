import AboutMe from "@/components/AboutMe";
import BestProjects from "@/components/BestProjects";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";


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
      <BestProjects/>
      <ContactSection/>
      <Footer/>
    </div>
    {/*Footer , contact me*/}
   </>
  );
}
