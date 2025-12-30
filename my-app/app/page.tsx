import Header from "./components/Header";
import Hero from "./components/Hero";
import Socials from "./components/Socials";
import Github from "./components/Github"
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import HackathonWins from "./components/HackathonWins";
import ContactMe from "./components/ContactMe";

export default function Home() {
  return (
     <div className="min-h-screen overflow-x-hidden bg-white dark:bg-black ">
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
   <Header/>
   <Hero/>
   <Socials/>
  <TechStack/>
   <Github/>
   <Projects/>
   <HackathonWins/>
   <ContactMe/>

   </div>
    </div>
  );
}
