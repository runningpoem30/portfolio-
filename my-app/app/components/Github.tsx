"use client";
import {GitHubCalendar} from "react-github-calendar";
import { Button } from "../../app/ui/button"
import { Tooltip, TooltipContent, TooltipTrigger} from "../../app/ui/tooltip"
import { IconFileCv } from "@tabler/icons-react"
import {IconBrandTelegram} from "@tabler/icons-react"


function Body() {
  return (
  <div>



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
