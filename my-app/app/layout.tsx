import "./globals.css";
import { Instrument_Serif, Inter , Lilex } from "next/font/google";
import { TooltipProvider } from "./ui/tooltip";
import type { ReactNode } from "react";

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

export default function RootLayout({ children } : {children : ReactNode}) {
  return (
    <html lang="en" className="scroll-smooth" >
      <body className="min-h-screen bg-white dark:bg-black">
     <TooltipProvider delayDuration={0}>         {children} </TooltipProvider>

      </body>
    </html>
  );
}
