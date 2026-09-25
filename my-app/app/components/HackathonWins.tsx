import React from 'react'

function HackathonWins() {
  return (
    <div className="py-10 text-left font-lilex text-black dark:text-white lg:mt-10">
      <div className="font-instrument font-bold text-3xl mb-10">Hackathon Wins</div>

      <div className="flex flex-col gap-8">
        
        {/* DevDay Hackathon */}
        <div className="flex flex-col gap-2 mb-8">
          <div className="flex justify-between items-start md:items-center flex-col md:flex-row">
            <h3 className="text-xl font-bold font-instrument">
              Hackathon Winner <span className="text-gray-500 font-normal">· DevDay Hackathon</span>
            </h3>
            <span className="text-gray-500 text-sm mt-1 md:mt-0 font-lilex font-bold">
               by @apify and @hackthisfall
            </span>
          </div>
          <ul className="list-disc ml-5 mt-2 text-gray-700 dark:text-gray-300 space-y-1 font-lilex">
            <li>
              Built a tool that analyzes GitHub profiles by scraping repositories, commits, issues, and languages to generate a yearly "GitHub Wrapped" summary.
            </li>
            <li>
              Visualizes top languages, frameworks, activity patterns, and standout repositories in a Spotify-Wrapped style, fully automated using Apify with no GitHub API required.
            </li>
            <li>
              Check it out: <a className='text-blue-500 hover:underline' href='https://apify.com/stylish_panduri/gitwrap' target="_blank" rel="noopener noreferrer">gitwrap</a>
            </li>
          </ul>
        </div>

        {/* HackToFuture */}
        <div className="flex flex-col gap-2 mb-8">
          <div className="flex justify-between items-start md:items-center flex-col md:flex-row">
            <h3 className="text-xl font-bold font-instrument">
              1st Place <span className="text-gray-500 font-normal">· HackToFuture 3.0</span>
            </h3>
            <span className="text-gray-500 text-sm mt-1 md:mt-0 font-lilex font-bold">
               by @St.Joseph's Engineering College, Mangalore
            </span>
          </div>
          <ul className="list-disc ml-5 mt-2 text-gray-700 dark:text-gray-300 space-y-1 font-lilex">
            <li>
              Built a decentralized medical records platform during a 48-hour hackathon to enable secure upload and storage of patient data.
            </li>
            <li>
              Designed instant access and retrieval for doctors and patients, allowing faster record sharing while maintaining data integrity and privacy.
            </li>
          </ul>
        </div>

        {/* iSolve */}
        <div className="flex flex-col gap-2 mb-8">
          <div className="flex justify-between items-start md:items-center flex-col md:flex-row">
            <h3 className="text-xl font-bold font-instrument">
              2nd Place <span className="text-gray-500 font-normal">· iSolve Hackathon</span>
            </h3>
            <span className="text-gray-500 text-sm mt-1 md:mt-0 font-lilex font-bold">
               by @Nitte Meenakshi Institute of Technology, Bengaluru
            </span>
          </div>
          <ul className="list-disc ml-5 mt-2 text-gray-700 dark:text-gray-300 space-y-1 font-lilex">
            <li>
              Built a smart carpooling platform during a 24-hour hackathon to address Bengaluru's traffic congestion by enabling efficient ride-sharing.
            </li>
            <li>
              Implemented route- and time-based matching algorithms to connect commuters with similar travel patterns, reducing redundant trips and improving overall ride efficiency.
            </li>
          </ul>
        </div>

      </div>
    </div>
  )
}

export default HackathonWins
