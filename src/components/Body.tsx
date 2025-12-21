import {GitHubCalendar} from "react-github-calendar";
import { Tooltip } from "react-tooltip";

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
      <Tooltip
        id="react-tooltip"
        className="rounded-lg bg-black px-3 py-2 text-sm text-white shadow-lg"
      />
    </div>
      
    </div>
  );
}

export default Body;
