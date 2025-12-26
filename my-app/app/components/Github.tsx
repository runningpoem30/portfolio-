"use client";
import {GitHubCalendar} from "react-github-calendar";
import { Button } from "../../app/ui/button"
import { Tooltip, TooltipContent, TooltipTrigger} from "../../app/ui/tooltip"
import { IconFileCv } from "@tabler/icons-react"
import {IconBrandTelegram} from "@tabler/icons-react"
import { Activity } from "react";


function Body() {
  return (
  <div className="lg:mt-20">



    {/* github calendar */}
    <div className="font-lilex">
  <GitHubCalendar
        username="runningpoem30"
        blockSize={18}
        blockMargin={6}
        fontSize={16}
       colorScheme="light"

        theme={{
      light: [
  "#e9d5ff",
  "#c084fc",
  "#9333ea",
  "#6b21a8",
  "#3b0764"
],
          dark: ["#1a1a00", "#3d3a00", "#6b5f00", "#a38b00", "#fbc02d"],
        }}
      />


    </div>
      
    </div>
  );
}

export default Body;
