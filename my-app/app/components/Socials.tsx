"use client";
import { Button } from "../../app/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger} from "../../app/ui/tooltip"
import { TooltipArrow } from "@radix-ui/react-tooltip";
import { IconFileCv } from "@tabler/icons-react"
import {IconBrandTelegram , IconBrandX , IconBrandGithub ,IconBrandDiscordFilled , IconBrandDiscord , IconMail } from "@tabler/icons-react"


function Socials() {
  return (
    <div className="lg:py-8">
          <div className="flex">
      <div className="flex gap-x-5">

{/* this is resume button */}
          <Button
  variant="outline"
  className="px-6 py-7 font-lilex font-light lg:text-xl flex items-center gap-2 [&_svg]:h-8 [&_svg]:w-8 cursor-pointer"
>
  <IconFileCv size={80} /> 
  Resume
         </Button>

{/* 
this is get in touch button */}
          <Button
            variant="outline"
            className="px-6 py-7 font-lilex font-light lg:text-xl flex items-center gap-2 [&_svg]:h-8 [&_svg]:w-8 cursor-pointer"
          >
            <IconBrandTelegram size={80} /> 
            Get in touch !
          </Button>
<div className="w-[0.3px] h-8 bg-gray-400 mt-2" />


<div className="flex gap-2">
{/* this is X button */}
<div>
 <Tooltip>
  <a href="https://x.com/PoemRunning" target="_blank"
  rel="noopener noreferrer">  <TooltipTrigger asChild>
    <Button variant="outline" className="py-6 px-4 rounded-lg border-2 cursor-pointer [&_svg]:h-8 [&_svg]:w-8 ">
      <IconBrandX />
    </Button>
  </TooltipTrigger></a>


  <TooltipContent
    side="top"
    className=" rounded-md dark:bg-gray-500 bg:gray-500 text-white px-3 py-2 text-xl font-lilex dark:border-white hover"
  >
 X(Twitter)

    <TooltipArrow className="fill-gray-700" />
  </TooltipContent>
</Tooltip>
</div>

{/* this is github button */}
<div>
 <Tooltip>
  <a href="https://github.com/runningpoem30"  target="_blank"
  rel="noopener noreferrer"> <TooltipTrigger asChild>
    <Button variant="outline" className="py-6 px-4 rounded-lg border-2 cursor-pointer [&_svg]:h-8 [&_svg]:w-8 ">
      <IconBrandGithub />
    </Button>
  </TooltipTrigger></a>
 

  <TooltipContent
    side="top"
    className="rounded-md dark:bg-gray-500 bg:gray-500 text-white px-3 py-2 text-xl font-lilex dark:border-white hover"
  >
    Github
    <TooltipArrow className="fill-gray-700" />
  </TooltipContent>
</Tooltip>
</div>

{/* this is gmail button */}
<div>
 <Tooltip>
  <a href="mailto:aryaanandpathak30@gmail.com"  target="_blank"
  rel="noopener noreferrer"> <TooltipTrigger asChild>
    <Button variant="outline" className="py-6 px-4 rounded-lg border-2 cursor-pointer [&_svg]:h-8 [&_svg]:w-8 ">
      <IconMail />
    </Button>
  </TooltipTrigger></a>
 

  <TooltipContent
    side="top"
    className="rounded-md dark:bg-gray-500 bg:gray-500 text-white px-3 py-2 text-xl font-lilex dark:border-white hover"
  >
    Email
    <TooltipArrow className="fill-gray-700" />
  </TooltipContent>
</Tooltip>
</div>


{/* this is discord button */}
<div>
 <Tooltip>
  <a href="https://discord.com/users/783415905572880404"
      target="_blank"
      rel="noopener noreferrer"> <TooltipTrigger asChild>
    <Button variant="outline" className="py-6 px-4 rounded-lg border-2 cursor-pointer [&_svg]:h-8 [&_svg]:w-8 ">
      <IconBrandDiscord />
    </Button>
  </TooltipTrigger></a>
 

  <TooltipContent
    side="top"
    className="rounded-md dark:bg-gray-500 bg:gray-500 text-white px-3 py-2 text-xl font-lilex dark:border-white hover"
  >
    Discord
    <TooltipArrow className="fill-gray-700" />
  </TooltipContent>
</Tooltip>
</div>





</div>
   


      </div>

          </div>

    </div>
  )
}

export default Socials
