import React from 'react';

const Work = () => {
  return (
    <div className="py-10 text-left font-lilex text-black dark:text-white lg:mt-10" id="work">
      <h2 className="font-instrument font-bold text-3xl mb-10">Work Experience</h2>
      
      <div className="flex flex-col gap-8">
        
        {/* Stealth Startup */}
        <div className="flex flex-col gap-2 mb-8">
          <div className="flex justify-between items-start md:items-center flex-col md:flex-row">
            <h3 className="text-xl font-bold font-instrument">
              Backend Engineer Intern <span className="text-gray-500 font-normal">· Stealth Startup</span>
            </h3>
            <span className="text-gray-500 text-sm mt-1 md:mt-0">September 2026 — Present</span>
          </div>
          <div className="text-gray-500 text-sm">Remote, Internship</div>
          <ul className="list-disc ml-5 mt-2 text-gray-700 dark:text-gray-300 space-y-1">
            <li>Designing and implementing scalable backend architectures and API services.</li>
            <li>Optimizing database queries and integrating cloud infrastructure for improved performance.</li>
            <li>Building robust microservices for core product features.</li>
          </ul>
        </div>

        {/* Marvedge */}
        <div className="flex flex-col gap-2 mb-8">
          <div className="flex justify-between items-start md:items-center flex-col md:flex-row">
            <h3 className="text-xl font-bold font-instrument">
              Full Stack and Backend Developer <span className="text-gray-500 font-normal">· Marvedge</span>
            </h3>
            <span className="text-gray-500 text-sm mt-1 md:mt-0">February 2026 — May 2026</span>
          </div>
          <div className="text-gray-500 text-sm">Remote, Contract</div>
          <ul className="list-disc ml-5 mt-2 text-gray-700 dark:text-gray-300 space-y-1">
            <li>Handled entire backend code services and deployment for a video SaaS demo platform.</li>
            <li>Wrote clean, efficient APIs and integrated complex functionality to support the platform's core requirements.</li>
            <li>Contributed to significant architectural improvements and feature rollouts.</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Work;
