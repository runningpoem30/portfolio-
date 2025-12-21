
import PortfolioImage from '../../images/portfolioimg.jpg'
import { CometCard } from './ui/comet-card'
import Highlight from './ui/Highlight'
import TwitterLogo from '../../images/Twitter_Verified_Badge.svg'

function Body() {
  return (
    <div className="mt-35 flex items-center justify-between gap-4">
         <div className='lg:mb-95 lg:mt-15'>
           <h1 className='font-instrument font-bold lg:text-8xl'>Hi , I am Arya - </h1>
           <br/>
           <h1 className='font-instrument font-bold lg:text-3xl text-gray-500'>A Full Stack Developer based in Bengaluru , India .</h1>
           <br />
           <br />
           <br />
           <h1 className='font-lilex lg:text-2xl text-black/50'>I build modern web applications using 
           <span className='text-black'> TypeScript</span>, 
           <span className='text-black'> React</span>, 
          <span className='text-black'> Nodejs</span>,
          <span className='text-black'> Express</span>,
           <span className='text-black'>          PostgreSQL</span>
           , and 
<span className='text-black'> Nextjs</span>
           
           </h1>
          <br/>
           <p className='font-lilex lg:text-2xl text-black/50'>
            My focus is on <Highlight children='crafting clean'/>, thoughtful frontends and designing backend systems that are <Highlight children='scalable'/>, reliable, and easy to maintain.
           </p>
        <br/>
           <h1 className='lg:text-2xl text-black/50 font-lilex'>
            I care deeply about performance, architecture, and building products that feel good to use and solid under the hood. I have also won 3 hackathons.
           </h1>
        <br/>
           <h1 className='font-instrument lg:text-2xl text-black'>Always learning , Always Shipping !</h1>
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
          <a
  href="https://x.com/PoemRunning"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-1 text-xs text-white hover:opacity-80"
>
  <span>Arya Pathak</span>

  <img
    src={TwitterLogo}
    alt="X profile"
    className="h-3.5 w-3.5"
  />
</a>

          
          <div className="text-xs text-gray-300 opacity-50">#23EC</div>
        </div>
      </button>
    </CometCard></div>
   
    </div>
  )
}

export default Body
