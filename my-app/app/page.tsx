import Header from "./components/Header";
import Hero from "./components/Hero";
import Socials from "./components/Socials";
import Github from "./components/Github"
import TechStack from "./components/TechStack";

export default function Home() {
  return (
     <div className="min-h-screen bg-white dark:bg-black">
        <div className='max-w-7xl mx-auto '>
   <Header/>
   <Hero/>
   <Socials/>
      <TechStack/>
   <Github/>

   </div>
    </div>
  );
}
