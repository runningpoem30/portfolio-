import "./globals.css";
import { Instrument_Serif, Inter , Lilex } from "next/font/google";
import { TooltipProvider } from "./ui/tooltip";
import type { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/next"

// 2. Initialize the fonts
const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument", // This maps to your CSS variable
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
const lilex = Lilex({
  subsets: ["latin"],
  variable: "--font-lilex",
});

export const metadata = {
  title: "Arya Pathak (Arya Anand Pathak) | Software Engineer",
  description: "Portfolio of Arya Pathak (Arya Anand Pathak), a Software Engineer from Bengaluru building modern web applications with TypeScript, React, Node.js, and Next.js.",
  keywords: ["Arya Pathak", "Arya Anand Pathak", "Software Engineer", "Web Developer", "Frontend Developer", "Full Stack Developer", "Bengaluru", "React", "Next.js"],
  authors: [{ name: "Arya Pathak" }],
  creator: "Arya Pathak",
  openGraph: {
    type: "website",
    locale: "en_IN",
    title: "Arya Pathak | Software Engineer",
    description: "Portfolio of Arya Pathak (Arya Anand Pathak)",
    siteName: "Arya Pathak",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arya Pathak | Software Engineer",
    description: "Portfolio of Arya Pathak (Arya Anand Pathak)",
  },
};

export default function RootLayout({ children } : {children : ReactNode}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {(process.env.NODE_ENV === "development" || process.env.VERCEL_ENV === "preview") && (
          // eslint-disable-next-line @next/next/no-sync-scripts
          <script
            data-recording-token="SsDrR1VHJWDH73tXaNjSfZ0jyTv5x96l81ImBK0j"
            data-is-production-environment="false"
            src="https://snippet.meticulous.ai/v1/meticulous.js"
          />
        )}
      </head>
      <body className="min-h-screen bg-white dark:bg-black">
        <Analytics/>
        <TooltipProvider delayDuration={0}>         
          {children} 
        </TooltipProvider>
      </body>
    </html>
  );
}