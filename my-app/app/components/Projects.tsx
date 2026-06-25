import React from "react";

type Project = {
  name: string;
  liveUrl?: string;
  liveLabel?: string;
  githubUrl: string;
  points: [string, string];
};

const projects: Project[] = [
  {
    name: "ForgeCI",
    liveUrl: "https://forgeci.goarya.dev/",
    liveLabel: "Live Demo",
    githubUrl: "https://github.com/runningpoem30/forgeCI",
    points: [
      "Production-grade, horizontally scalable CI/CD platform that runs isolated Docker pipeline workloads with real-time log streaming and feedback loops.",
      "Event-driven architecture using Kafka for job dispatch, Redis for worker registry, PostgreSQL for metadata, and WebSockets for live build output.",
    ],
  },
  {
    name: "Zylar",
    liveUrl: "https://www.zylar.site/",
    liveLabel: "Live Demo",
    githubUrl: "https://github.com/runningpoem30/videoTranscoding",
    points: [
      "Built a video transcoding pipeline from scratch that converts raw uploads into HLS streams with adaptive bitrate (ABR) for smooth playback.",
      "Serves streams via CloudFront CDN links ready for in-app use, with a full auth backend, transcoding server, and client frontend.",
    ],
  },
  {
    name: "Polyp",
    liveUrl: "https://www.npmjs.com/package/polyp-ai",
    liveLabel: "npm",
    githubUrl: "https://github.com/runningpoem30/polyp",
    points: [
      "Terminal-native ReAct AI agent that answers complex org questions by querying knowledge bases, issue trackers, and codebases in real time.",
      "Powered entirely by Coral — translates natural language into SQL over virtual tables (GitHub, Notion, Linear) with zero per-integration API setup.",
    ],
  },
  {
    name: "Helix",
    githubUrl: "https://github.com/runningpoem30/helix",
    points: [
      "High-performance distributed in-memory cache engine — a TCP-native, Netty-driven server with segmented concurrent storage and TTL expiration.",
      "Pluggable LRU/LFU/FIFO eviction policies, hit-ratio metrics, consistent-hash cluster routing, and multi-node Docker deployment.",
    ],
  },
  {
    name: "tscompiler",
    githubUrl: "https://github.com/runningpoem30/tscompiler",
    points: [
      "Implemented a tiny compiler in TypeScript covering the full pipeline from source text to executable output.",
      "Demonstrates lexer, parser, and code generation fundamentals in a minimal, readable codebase.",
    ],
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="border-1 border-gray-300 dark:border-white/20 rounded-xl lg:mb-10 lg:pl-10 lg:pt-7 lg:pr-10 pl-7 pr-7 pt-5 pb-7 mb-10">
      <div>
        <h2 className="font-lilex lg:text-2xl font-bold">{project.name}</h2>
        <p className="font-lilex font-bold mt-1">
          {project.liveUrl && (
            <>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300 hover:underline"
              >
                {project.liveLabel ?? "Live Demo"}
              </a>
              <span className="text-gray-500 dark:text-gray-400 mx-2">|</span>
            </>
          )}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-300 hover:underline"
          >
            GitHub
          </a>
        </p>
      </div>

      <ul className="list-disc pl-5 font-lilex lg:mt-5 space-y-2 mt-3">
        {project.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </div>
  );
}

function Projects() {
  return (
    <div id="projects">
      <div className="font-instrument font-bold text-3xl lg:mt-10 mt-10 mb-10">
        Featured Projects
      </div>

      {projects.map((project) => (
        <ProjectCard key={project.name} project={project} />
      ))}
    </div>
  );
}

export default Projects;
