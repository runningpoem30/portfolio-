
import PortfolioImage from '../../public/images/portfolioimg.jpg'
import { CometCard } from '../../app/ui/comet-card'
import { PointerHighlight } from "../../app/ui/pointer-highlight";
import { IconMapPin } from "@tabler/icons-react";
import Image from 'next/image';
function Body() {
  return (
    <div className="lg:pt-20 flex flex-col items-start dark:text-white mb-10">
      
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6 lg:gap-8 mt-10 lg:mt-0 mb-10">
        <Image
          src={PortfolioImage}
          alt="Arya Pathak"
          className="w-16 h-16 lg:w-20 lg:h-20 rounded-2xl object-cover shadow-sm border border-gray-200 dark:border-gray-800 saturate-0"
        />
        <div>
          <h1 className='font-instrument text-4xl lg:text-5xl mt-2 lg:mt-1 font-bold'>Arya Pathak</h1>
          <div className="flex items-center gap-1 text-gray-500 font-lilex text-sm md:text-base mt-2 font-normal">
            <span>Engineer</span>
            <IconMapPin size={18} className="ml-2 text-gray-400" />
            <span>Bengaluru</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl">
           <h1 className='font-lilex lg:text-2xl text-black/50 dark:text-white/50 leading-relaxed'>I build modern web applications using 
           <span className='text-black dark:text-white'> TypeScript</span>, 
           <span className='text-black dark:text-white'> React</span>, 
          <span className='text-black dark:text-white'> Nodejs</span>,
          <span className='text-black dark:text-white'> Express</span>,
           <span className='text-black dark:text-white'> PostgreSQL</span>
           , and 
<span className='text-black dark:text-white'> Nextjs.</span>
           
           </h1>
          <br/>
           <p className='font-lilex lg:text-2xl text-black/50 dark:text-white/50 leading-relaxed'>
            My focus is on <PointerHighlight
            rectangleClassName="bg-neutral-200 dark:bg-yellow-300 bg-yellow-300 border-neutral-300 dark:border-neutral-600 leading-loose"
            pointerClassName="text-yellow-500 h-3 w-3"
            containerClassName="inline-block mr-1"
          >
            <span className="relative z-10 dark:text-black/50">crafting clean </span>
      </PointerHighlight>, thoughtful frontends and designing backend systems that are <PointerHighlight
            rectangleClassName="bg-neutral-200 dark:bg-yellow-300 bg-yellow-300  border-neutral-300 dark:border-neutral-600 leading-loose"
            pointerClassName="text-yellow-500 h-3 w-3"
            containerClassName="inline-block mr-1 ml-1"
          >
            <span className="relative z-10 dark:text-black/50">scalable</span>
      </PointerHighlight>, reliable, and easy to maintain test.
           </p>
        <br/>
        <br/>
            <h1 className='lg:text-2xl text-black/50 font-lilex'><PointerHighlight
            rectangleClassName="bg-neutral-200 dark:bg-blue-300  bg-blue-300 border-neutral-300 dark:border-neutral-600 leading-loose"
            pointerClassName="text-yellow-500 h-3 w-3"
            containerClassName="inline-block mr-1"
          >
            <span className="relative z-10">Open to work, freelance and collaborations! </span>
      </PointerHighlight></h1>
      <br/>
      
           <h1 className='font-instrument lg:text-2xl text-black dark:text-white'>Always learning, Always Shipping!</h1>
                
         </div>
   
    </div>
  )
}

export default Body



// resume | github | linkedin | X | Email 