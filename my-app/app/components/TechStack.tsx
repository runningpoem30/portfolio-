import React from 'react'
import Marquee from "react-fast-marquee";
import { Button } from '../ui/button';
import { Icon12Hours, Icon24Hours } from '@tabler/icons-react';
import Image from "next/image";

function TechBadge({ src, name }: { src: string; name: string }) {
  return (
    <div className="flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-black hover:bg-gray-50 dark:hover:bg-neutral-900 transition-colors">
      {src === "ex" ? (
        <span className="text-xl font-bold dark:text-white leading-none">ex</span>
      ) : (
        <Image src={src} alt={name} width={18} height={18} className="w-4 h-4 md:w-5 md:h-5" />
      )}
      <span className="text-xs md:text-sm font-lilex text-gray-700 dark:text-gray-300">{name}</span>
    </div>
  );
}

function TechStack() {
  const techList = [
    { name: "Nodejs", src: "/Techicons/nodejs/nodejs-original.svg" },
    { name: "React", src: "/Techicons/react/react-original.svg" },
    { name: "Typescript", src: "/Techicons/typescript/typescript-original.svg" },
    { name: "Nextjs", src: "/Techicons/nextjs/nextjs-original.svg" },
    { name: "Docker", src: "/Techicons/docker/docker-original.svg" },
    { name: "Tailwind CSS", src: "/Techicons/tailwindcss/tailwindcss-original.svg" },
    { name: "HTML", src: "/Techicons/html5/html5-original.svg" },
    { name: "CSS", src: "/Techicons/css3/css3-original.svg" },
    { name: "Javascript", src: "/Techicons/javascript/javascript-original.svg" },
    { name: "GraphQL", src: "/Techicons/graphql/graphql-plain.svg" },
    { name: "Bun", src: "/Techicons/bun/bun-original.svg" },
    { name: "Express", src: "ex" },
    { name: "PostgreSQL", src: "/Techicons/postgresql/postgresql-original.svg" },
    { name: "MySQL", src: "/Techicons/mysql/mysql-original.svg" },
    { name: "Github", src: "/Techicons/github/github-original.svg" },
    { name: "Git", src: "/Techicons/git/git-original.svg" },
    { name: "Postman", src: "/Techicons/postman/postman-original.svg" },
    { name: "MongoDB", src: "/Techicons/mongodb/mongodb-original.svg" },
    { name: "Nginx", src: "/Techicons/nginx/nginx-original.svg" },
    { name: "Homebrew", src: "/Techicons/homebrew/homebrew-original.svg" },
    { name: "AWS", src: "/Techicons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  ];

  return (
    <div>  
        <div className='mb-8'>
            <h1 className='font-instrument font-bold text-3xl mt-10' >Tools and Technology</h1>
        </div>

        <div className="flex flex-wrap gap-3 md:gap-4 mb-10">
          {techList.map((tech) => (
            <TechBadge key={tech.name} name={tech.name} src={tech.src} />
          ))}
        </div>
    </div>
  )
}

export default TechStack
