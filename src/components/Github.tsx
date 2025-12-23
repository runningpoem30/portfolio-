import {GitHubCalendar} from "react-github-calendar";
import { Button } from "./ui/button";
import { Tooltip, TooltipContent, TooltipTrigger} from "./ui/tooltip"
import { IconFileCv } from "@tabler/icons-react"
import {IconBrandTelegram} from "@tabler/icons-react"
import { Camera } from 'lucide-react';

function Body() {
  return (
  <div>
    <div className="flex">
      <div className="flex gap-x-5">
          <Button
  variant="outline"
  className="px-6 py-7 font-lilex font-light lg:text-xl flex items-center gap-2 [&_svg]:h-8 [&_svg]:w-8"
>
  <IconFileCv size={80} /> 
  Resume
</Button>
<Button
  variant="outline"
  className="px-6 py-7 font-lilex font-light lg:text-xl flex items-center gap-2 [&_svg]:h-8 [&_svg]:w-8"
>
  <IconBrandTelegram size={80} /> 
  Get in touch !
</Button>

      </div>

    </div>


    {/* github calendar */}
    <div>
 <GitHubCalendar
        username="runningpoem30"
        blockSize={18}
        blockMargin={6}
        fontSize={16}
        theme={{
          light: ["#fff8e1", "#ffecb3", "#ffd54f", "#ffca28", "#fbc02d"],
          dark: ["#1a1a00", "#3d3a00", "#6b5f00", "#a38b00", "#fbc02d"],
        }}
      />

      {/* REQUIRED for hover */}

    </div>
      
    </div>
  );
}

export default Body;
