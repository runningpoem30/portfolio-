import React from 'react'
import Image from "next/image";
import { IconExternalLink } from "@tabler/icons-react"
function HackathonWins() {
  return (
    <div>
      <div  className='font-instrument font-bold lg:text-3xl lg:mt-10 lg:mb-10'>Hackathon Wins</div>

      {/* this is for devday hackathon */}
      <div className='border-1 border-gray-300 dark:border-white/20 lg:h-65 rounded-xl  lg:pt-4 lg:mb-10 lg:pl-10 lg:pt-10  lg:pr-10   '>
        <div className='flex'>
       <div className='border-1 border-gray-300 rounded-xl '>
            <Image 
            src="/images/hackthisfall.svg"
            alt="Hack This Fall"
            width={110}
            height={20}
            />
        </div>
        <div>
            <h1 className='font-lilex lg:text-2xl lg:ml-3 font-bold'>Hackathon Winner</h1>
             <h1 className='font-lilex lg:text-l lg:ml-3 font-bold'><a href='https://luma.com/rvz8bst9?tk=PbGwgj' target='black' rel='noopener noerferrer' className='text-blue-300'>DevDay Hackathon</a> by @apify and @hackthisfall</h1>
        </div>
        </div>
        <p className='font-lilex lg:mt-5'>Built a tool that analyzes GitHub profiles—scraping repos, commits, issues, and languages to generate a yearly “GitHub Wrapped” summary. It highlights top languages, frameworks, activity patterns, and standout repositories, inspired by Spotify Wrapped. Fully automated with Apify, no GitHub API required. I won a keychron k10 lol .
         </p>
         <br></br>
         <p className='font-lilex font-bold'>
            Check it out : <a className='text-blue-700 font-bold text-m'  href='https://apify.com/stylish_panduri/gitwrap' target="_blank" rel="noopener noreferrer" >gitwrap</a>
         </p>
      </div>


      {/* this is for hacktofuture hackathon */}
            <div className='border-1 border-gray-300 dark:border-white/20 lg:h-65 rounded-xl  lg:pt-4 lg:mb-10 lg:pl-10 lg:pt-10  lg:pr-10  '>
        <div className='flex'>
       <div className='border-1 border-gray-300 rounded-xl '>
            <Image 
            src="/images/hacktofuturelogo.svg"
            alt="Hack This Fall"
            width={90}
            height={20}
            />
        </div>
        <div>
            <h1 className='font-lilex lg:text-2xl lg:ml-3 font-bold'>1st Place</h1>
             <h1 className='font-lilex lg:text-l lg:ml-3 font-bold'><a href='https://unstop.com/hackathons/hacktofuture-30-st-joseph-engineering-college-mangaluru-1380851' target='black' rel='noopener noerferrer' className='text-blue-300'>HackToFuture 3.0</a> by @St.Joseph's Engineering College, Mangalore</h1>
        </div>
        </div>
        <p className='font-lilex lg:mt-5'>Built a decentralized platform in 48 hours hackathon that allows patients and doctors to securely upload, store, and instantly access medical records, enabling faster sharing and seamless retrieval when needed.
         </p>
        
      </div>

      {/* this is for isolve hackathon */}
           <div className='border-1 border-gray-300 dark:border-white/20 lg:h-65 rounded-xl  lg:pt-4 lg:mb-10 lg:pl-10 lg:pt-10  lg:pr-10 '>
        <div className='flex'>
       <div className='border-1 border-gray-300 rounded-xl '>
            <Image 
            src="/images/hacktofuturelogo.svg"
            alt="Hack This Fall"
            width={90}
            height={20}
            />
        </div>
        <div>
            <h1 className='font-lilex lg:text-2xl lg:ml-3 font-bold'>2nd Place</h1>
             <h1 className='font-lilex lg:text-l lg:ml-3 font-bold'><a href='https://i-solve-final.vercel.app/' target='black' rel='noopener noerferrer' className='text-blue-300'>iSolve Hackathon</a> by @Nitte Meenakshi Institute of Technology, Bengaluru </h1>
        </div>
        </div>
        <p className='font-lilex lg:mt-5'>Built a smart carpooling platform during a 24-hour hackathon to tackle Bengaluru’s traffic congestion. The system uses route and time-based matching to connect commuters with similar travel patterns, reducing redundant trips and improving ride efficiency.
         </p>
        
      </div>




    </div>
  )
}

export default HackathonWins

