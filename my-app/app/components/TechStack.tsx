import React from 'react'
import Marquee from "react-fast-marquee";
import { Button } from '../ui/button';
import { Icon12Hours, Icon24Hours } from '@tabler/icons-react';
import Image from "next/image";

function TechBadge({ src, name }: { src: string; name: string }) {
  return (
    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-900/80 border border-neutral-700 backdrop-blur">
      <Image
        src={src}
        alt={name}
        width={20}
        height={20}
      />
      <span className="text-sm text-white font-medium">{name}</span>
    </div>
  );
}


function TechStack() {
  return (
    <div>  
        <div className='mb-8'>
            <h1 className='font-instrument font-bold text-3xl mt-10' >Tools and Technology</h1>
        </div>

<Marquee speed={70} pauseOnHover={true} className='flex gap-4 mb-5'>
                <div className='flex gap-4'>
    {/* nodejs button */}
        <Button
  variant="outline"
  className="lg:px-6 lg:py-7 font-lilex font-light lg:text-xl flex items-center gap-2 [&_svg]:h-8 [&_svg]:w-8"
>
 <Image
    src="/Techicons/nodejs/nodejs-original.svg"
    alt="Node.js"
    width={32}
    height={32}
  />
  Nodejs
         </Button>

    {/* react button */}
        <Button
  variant="outline"
  className="lg:px-6 lg:py-7 font-lilex font-light lg:text-xl flex items-center gap-2 [&_svg]:h-8 [&_svg]:w-8"
>
 <Image
    src="/Techicons/react/react-original.svg"
    alt="Node.js"
    width={32}
    height={32}
  />
  React
         </Button>

    {/* typescript button */}
          <Button
  variant="outline"
  className="lg:px-6 lg:py-7 font-lilex font-light lg:text-xl flex items-center gap-2 [&_svg]:h-8 [&_svg]:w-8"
>
 <Image
    src="/Techicons/typescript/typescript-original.svg"
    alt="Node.js"
    width={32}
    height={32}
  />
  Typescript
         </Button>

    {/* this is nextjs button */}
          <Button
  variant="outline"
  className="lg:px-6 lg:py-7 font-lilex font-light lg:text-xl flex items-center gap-2 [&_svg]:h-8 [&_svg]:w-8"
>
 <Image
    src="/Techicons/nextjs/nextjs-original.svg"
    alt="Node.js"
    width={32}
    height={32}
  />
    Nextjs
         </Button>

    {/* this is docker button */}
    <Button
  variant="outline"
  className="lg:px-6 lg:py-7 font-lilex font-light lg:text-xl flex items-center gap-2 [&_svg]:h-8 [&_svg]:w-8"
>
 <Image
    src="/Techicons/docker/docker-original.svg"
    alt="Node.js"
    width={32}
    height={32}
  />
    Docker
    </Button>

     {/* this is tailwind css */}
        <Button
  variant="outline"
  className="lg:px-6 lg:py-7 font-lilex font-light lg:text-xl flex items-center gap-2 [&_svg]:h-8 [&_svg]:w-8"
>
 <Image
    src="/Techicons/tailwindcss/tailwindcss-original.svg"
    alt="Node.js"
    width={32}
    height={32}
  />
   Tailwind Css
         </Button>


    {/* this is html button */}
        <Button
  variant="outline"
  className="lg:px-6 lg:py-7 font-lilex font-light lg:text-xl flex items-center gap-2 [&_svg]:h-8 [&_svg]:w-8"
>
 <Image
    src="/Techicons/html5/html5-original.svg"
    alt="Node.js"
    width={32}
    height={32}
  />
  HTML
         </Button>
        
    {/* this is css button */}
     <Button
  variant="outline"
  className="lg:px-6 lg:py-7 font-lilex font-light lg:text-xl flex items-center gap-2 [&_svg]:h-8 [&_svg]:w-8"
>
 <Image
    src="/Techicons/css3/css3-original.svg"
    alt="Node.js"
    width={32}
    height={32}
  />
  CSS
    </Button>

    {/* this is javascript button */}
    <Button
  variant="outline"
  className="lg:px-6 lg:py-7 font-lilex font-light lg:text-xl flex items-center gap-2 [&_svg]:h-8 [&_svg]:w-8"
>
 <Image
    src="/Techicons/javascript/javascript-original.svg"
    alt="Node.js"
    width={32}
    height={32}
  />
  Javascript
    </Button>

    {/* this is graphql button */}
     <Button
  variant="outline"
  className="lg:px-6 lg:py-7 font-lilex font-light lg:text-xl flex items-center gap-2 [&_svg]:h-8 [&_svg]:w-8"
>
 <Image
    src="/Techicons/graphql/graphql-plain.svg"
    alt="Node.js"
    width={32}
    height={32}
  />
  Graphql
    </Button>
 </div>
 </Marquee>


    <Marquee speed={70} pauseOnHover={true} direction={'right'}className='flex gap-4'>
        <div className='flex gap-4'>
        {/* this is bun button  */}
          <Button
  variant="outline"
  className="lg:px-6 lg:py-7  font-lilex font-light lg:text-xl flex items-center gap-2 [&_svg]:h-8 [&_svg]:w-8"
>
 <Image
    src="/Techicons/bun/bun-original.svg"
    alt="Node.js"
    width={32}
    height={32}
  />
  Bun
    </Button>

    {/* this is express button */}
    <Button
  variant="outline"
  className="lg:px-6 lg:py-7 font-lilex font-light lg:text-xl flex items-center gap-2 [&_svg]:h-8 [&_svg]:w-8"
>

    <span className='text-1xl'>ex</span>
   Express
    </Button>

    {/* this is postgress button */}
             <Button
  variant="outline"
  className="lg:px-6 lg:py-7 font-lilex font-light lg:text-xl flex items-center gap-2 [&_svg]:h-8 [&_svg]:w-8"
>
 <Image
    src="/Techicons/postgresql/postgresql-original.svg"
    alt="Node.js"
    width={32}
    height={32}
  />
   Postgress 
    </Button>

     {/* this is sql button */}
    <Button
  variant="outline"
  className="lg:px-6 lg:py-7 font-lilex font-light lg:text-xl flex items-center gap-2 [&_svg]:h-8 [&_svg]:w-8"
>
 <Image
    src="/Techicons/mysql/mysql-original.svg"
    alt="Node.js"
    width={32}
    height={32}
  />
   MySql
    </Button>

     {/* this is a github button */}
    <Button
  variant="outline"
  className="lg:px-6 lg:py-7 font-lilex font-light lg:text-xl flex items-center gap-2 [&_svg]:h-8 [&_svg]:w-8"
>
 <Image
    src="/Techicons/github/github-original.svg"
    alt="Node.js"
    width={32}
    height={32}
  />
   Github
    </Button>

{/* this is a git button */}
     <Button
  variant="outline"
  className="lg:px-6 lg:py-7 font-lilex font-light lg:text-xl flex items-center gap-2 [&_svg]:h-8 [&_svg]:w-8"
>
 <Image
    src="/Techicons/git/git-original.svg"
    alt="Node.js"
    width={32}
    height={32}
  />
   Github
    </Button>

    
    {/* this is a postman button */}
    <Button
  variant="outline"
  className="lg:px-6 lg:py-7 font-lilex font-light lg:text-xl flex items-center gap-2 [&_svg]:h-8 [&_svg]:w-8"
>
 <Image
    src="/Techicons/postman/postman-original.svg"
    alt="Node.js"
    width={32}
    height={32}
  />
   Postman
    </Button>


    {/* this is a mongodb button */}
    <Button
  variant="outline"
  className="lg:px-6 lg:py-7 font-lilex font-light lg:text-xl flex items-center gap-2 [&_svg]:h-8 [&_svg]:w-8"
>
 <Image
    src="/Techicons/mongodb/mongodb-original.svg"
    alt="Node.js"
    width={32}
    height={32}
  />
   Mongodb
    </Button>


    {/* this is a nginx button */}
    <Button
  variant="outline"
  className="lg:px-6 lg:py-7 font-lilex font-light lg:text-xl flex items-center gap-2 [&_svg]:h-8 [&_svg]:w-8"
>
 <Image
    src="/Techicons/nginx/nginx-original.svg"
    alt="Node.js"
    width={32}
    height={32}
  />
   Ngnix
    </Button>


    {/* this is homebrew button */}
    <Button
  variant="outline"
  className="lg:px-6 lg:py-7 font-lilex font-light lg:text-xl flex items-center gap-2 [&_svg]:h-8 [&_svg]:w-8"
>
 <Image
    src="/Techicons/homebrew/homebrew-original.svg"
    alt="Node.js"
    width={32}
    height={32}
  />
   Homebrew
    </Button>
        </div>
    </Marquee>

   





    </div>
  )
}

export default TechStack
