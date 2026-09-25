import { Button } from "./ui/button";
import { Tooltip, TooltipContent, TooltipTrigger} from "./ui/tooltip"
import { IconFileCv } from "@tabler/icons-react"
import {IconBrandTelegram} from "@tabler/icons-react"

function Socials() {
  return (
    <div>
          <div className="flex">
      <div className="flex gap-x-5">
<a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
          <Button
  variant="outline"
  className="px-6 py-7 font-lilex font-light lg:text-xl flex items-center gap-2 [&_svg]:h-8 [&_svg]:w-8"
>
  <IconFileCv size={80} /> 
  Resume
</Button>
</a>
<Button
  variant="outline"
  className="px-6 py-7 font-lilex font-light lg:text-xl flex items-center gap-2 [&_svg]:h-8 [&_svg]:w-8"
>
  <IconBrandTelegram size={80} /> 
  Get in touch !
</Button>

      </div>

          </div>

          <div>
             {/* <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Hover</Button>
      </TooltipTrigger>
        <TooltipContent>
         <p>Add to library</p>
       </TooltipContent>
     </Tooltip> */}
          </div>
    </div>
  )
}

export default Socials
