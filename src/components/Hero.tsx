
import PortfolioImage from '../../images/portfolioimg.jpg'
import { CometCard } from './ui/comet-card'
import Highlight from './ui/Highlight'
import TwitterLogo from '../../images/Twitter_Verified_Badge.svg'
import { PointerHighlight } from "@/components/ui/pointer-highlight";

function Body() {
  return (
    <div className="mt-35 flex items-center justify-between gap-4 dark:text-white">
         <div className='lg:mb-95 lg:mt-15'>
           <h1 className='font-instrument  lg:text-8xl'>Hi , I am Arya - </h1>
           <br/>
           <h1 className='font-instrument font-bold lg:text-3xl text-gray-500'>A Full Stack Developer based in Bengaluru , India .</h1>
           <br />
           <br />
           <br />
           <h1 className='font-lilex lg:text-2xl text-black/50 dark:text-white/50'>I build modern web applications using 
           <span className='text-black dark:text-white'> TypeScript</span>, 
           <span className='text-black dark:text-white'> React</span>, 
          <span className='text-black dark:text-white'> Nodejs</span>,
          <span className='text-black dark:text-white'> Express</span>,
           <span className='text-black dark:text-white'>          PostgreSQL</span>
           , and 
<span className='text-black'> Nextjs .</span>
           
           </h1>
          <br/>
           <p className='font-lilex lg:text-2xl text-black/50 dark:text-white/50'>
            My focus is on <PointerHighlight
            rectangleClassName="bg-neutral-200 dark:bg-yellow-300 bg-yellow-300 border-neutral-300 dark:border-neutral-600 leading-loose"
            pointerClassName="text-yellow-500 h-3 w-3"
            containerClassName="inline-block mr-1"
          >
            <span className="relative z-10 dark:text-black/50">crafting clean </span>
      </PointerHighlight>, thoughtful frontends and designing backend systems that are ,<PointerHighlight
            rectangleClassName="bg-neutral-200 dark:bg-yellow-300 bg-yellow-300  border-neutral-300 dark:border-neutral-600 leading-loose"
            pointerClassName="text-yellow-500 h-3 w-3"
            containerClassName="inline-block mr-1"
          >
            <span className="relative z-10 dark:text-black/50">scalable </span>
      </PointerHighlight> reliable, and easy to maintain.
           </p>
        <br/>
           <h1 className='lg:text-2xl text-black/50 font-lilex dark:text-white/50'>
            I care deeply about <PointerHighlight
            rectangleClassName="bg-neutral-200 dark:bg-yellow-300  bg-yellow-300 border-neutral-300 dark:border-neutral-600 leading-loose"
            pointerClassName="text-yellow-500 h-3 w-3"
            containerClassName="inline-block mr-1"
          >
            <span className="relative z-10 dark:text-black/50">performance</span>
      </PointerHighlight>, architecture, and building products that feel good to use and solid under the hood. I have also won 3 hackathons.
           </h1>
        <br/>
            <h1 className='lg:text-2xl text-black/50 font-lilex'><PointerHighlight
            rectangleClassName="bg-neutral-200 dark:bg-blue-300  bg-blue-300 border-neutral-300 dark:border-neutral-600 leading-loose"
            pointerClassName="text-yellow-500 h-3 w-3"
            containerClassName="inline-block mr-1"
          >
            <span className="relative z-10">Open to work , freelance and collaborations ! </span>
      </PointerHighlight></h1>
      <br/>
      
           <h1 className='font-instrument lg:text-2xl text-black dark:text-white'>Always learning , Always Shipping !</h1>
                
         </div>
         


    <div className='max-w-fit lg:ml-9 lg:mb-60'>
        <CometCard rotateDepth={5} >
      <button
        type="button"
        className="my-5 flex lg:w-110 cursor-pointer flex-col items-stretch rounded-[16px] border-0 bg-[#1F2121] p-2 saturate-0 md:my-20 md:p-4"
        style={{
          transformStyle: "preserve-3d",
          transform: "none",
          opacity: 1,
        }}
      >
        <div className="mx-2 flex-1">
          <div className="relative mt-2 aspect-[3/4] ">
            <img
              loading="lazy"
              className="absolute inset-0 h-full w-full rounded-[16px]  object-cover "
              alt="Invite background"
              src={PortfolioImage}
              style={{
                boxShadow: "rgba(0, 0, 0, 0.05) 0px 5px 6px 0px",
                opacity: 1,
              }}
            />
          </div>
        </div>
        <div className="mt-2 flex flex-shrink-0 items-center justify-between p-4 font-mono text-white">
          <div className="text-xs">Arya Pathak</div>  
          <div className="text-xs text-gray-300 opacity-50">#23EC</div>
        </div>
      </button>
    </CometCard></div>
   
    </div>
  )
}

export default Body
