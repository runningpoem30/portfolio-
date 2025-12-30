import React from 'react'
import Image from "next/image";
import { IconExternalLink } from "@tabler/icons-react"
function HackathonWins() {
  return (
    <div>
      <div  className='font-instrument font-bold text-3xl lg:mt-10 mt-10 mb-10 '>Hackathon Wins</div>

      {/* this is for devday hackathon */}
      <div className='border-1 border-gray-300 dark:border-white/20 lg:h-70 rounded-xl lg:mb-10 lg:pl-10 lg:pt-7  lg:pr-10  pl-7 pr-7 pt-5 pb-7 mb-10 '>
        <div className='flex lg:flex-row gap-x-6 lg:gap-x-1'>
       {/* <div className='border-1 border-gray-300 rounded-xl '>
            <Image 
            src="/images/hackthisfall.svg"
            alt="Hack This Fall"
            width={110}
            height={20}
            />
        </div> */}
        <div>
            <h1 className='font-lilex lg:text-2xl lg:ml-3 font-bold'>Hackathon Winner</h1>
             <h1 className='font-lilex lg:text-l lg:ml-3 font-bold'><a href='https://luma.com/rvz8bst9?tk=PbGwgj' target='black' rel='noopener noerferrer' className='text-blue-300'>DevDay Hackathon</a> by @apify and @hackthisfall</h1>
        </div>
        </div>
       <ul className="list-disc pl-5 font-lilex lg:mt-5 space-y-2 mt-3">
  <li>
    Built a tool that analyzes GitHub profiles by scraping repositories, commits, issues, and languages to generate a yearly “GitHub Wrapped” summary.
  </li>
  <li>
    Visualizes top languages, frameworks, activity patterns, and standout repositories in a Spotify-Wrapped style, fully automated using Apify with no GitHub API required.
  </li>
</ul>

         <br></br>
         <p className='font-lilex font-bold'>
            Check it out : <a className='text-blue-700 font-bold text-m'  href='https://apify.com/stylish_panduri/gitwrap' target="_blank" rel="noopener noreferrer" >gitwrap</a>
         </p>
      </div>


      {/* this is for hacktofuture hackathon */}
            <div className='border-1 border-gray-300 dark:border-white/20 lg:h-65 rounded-xl lg:mb-10 lg:pl-10 lg:pt-7  lg:pr-10 mb-10 pl-7 pr-7 pt-5 pb-7 '>
        <div className='flex lg:flex-row gap-x-6 lg:gap-x-1'>
       {/* <div className='border-1 border-gray-300 rounded-xl '>
            <Image 
            src="/images/hacktofuturelogo.svg"
            alt="Hack This Fall"
            width={90}
            height={20}
            />
        </div> */}
        <div>
            <h1 className='font-lilex lg:text-2xl lg:ml-3 font-bold'>1st Place</h1>
             <h1 className='font-lilex lg:text-l lg:ml-3 font-bold'><a href='https://unstop.com/hackathons/hacktofuture-30-st-joseph-engineering-college-mangaluru-1380851' target='black' rel='noopener noerferrer' className='text-blue-300'>HackToFuture 3.0</a> by @St.Joseph's Engineering College, Mangalore</h1>
        </div>
        </div>
        <ul className="list-disc pl-5 font-lilex lg:mt-5 space-y-2 mt-3">
  <li>
    Built a decentralized medical records platform during a 48-hour hackathon to enable secure upload and storage of patient data.
  </li>
  <li>
    Designed instant access and retrieval for doctors and patients, allowing faster record sharing while maintaining data integrity and privacy.
  </li>
</ul>

        
      </div>

      {/* this is for isolve hackathon */}
           <div className='border-1 border-gray-300 dark:border-white/20 lg:h-65 rounded-xl  lg:mb-10 lg:pl-10 lg:pt-7  lg:pr-10 pl-7 pr-7 pt-5 pb-7'>
        <div className='flex lg:flex-row gap-x-6 lg:gap-x-1'>
       {/* <div className='border-1 border-gray-300 rounded-xl '>
            <Image 
            src="/images/isolveLogo.svg"
            alt="Hack This Fall"
            width={90}
            height={20}
            />
        </div> */}
        <div>
            <h1 className='font-lilex lg:text-2xl lg:ml-3 font-bold'>2nd Place</h1>
             <h1 className='font-lilex lg:text-l lg:ml-3 font-bold'><a href='https://i-solve-final.vercel.app/' target='black' rel='noopener noerferrer' className='text-blue-300'>iSolve Hackathon</a> by @Nitte Meenakshi Institute of Technology, Bengaluru </h1>
        </div>
        </div>
       <ul className="list-disc pl-5 font-lilex lg:mt-5 space-y-2 mt-3">
  <li>
    Built a smart carpooling platform during a 24-hour hackathon to address Bengaluru’s traffic congestion by enabling efficient ride-sharing.
  </li>
  <li>
    Implemented route- and time-based matching algorithms to connect commuters with similar travel patterns, reducing redundant trips and improving overall ride efficiency.
  </li>
</ul>
        
      </div>




    </div>
  )
}

export default HackathonWins

