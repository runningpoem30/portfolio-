import Header from "./components/Header";
import Hero from "./components/Hero";
import Socials from "./components/Socials";
import Github from "./components/Github"
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Work from "./components/Work";
import HackathonWins from "./components/HackathonWins";
import ContactMe from "./components/ContactMe";
import Blogs from "./components/Blogs";
import Footer from "./components/Footer";
export default function Home() {
  return (
     <div className="min-h-screen overflow-x-hidden bg-white dark:bg-black ">


        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>

         <Header/>
   <Hero/>
   <Socials/>
  <TechStack/>
   <Github/>
   <Work/>
   <Projects/>
   <HackathonWins/>
   <Blogs/>
   <ContactMe/>
   <Footer/>


   </div>
    </div>
  );
}
