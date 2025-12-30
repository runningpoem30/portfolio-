"use client";
import React from 'react'
import {IconSun ,  IconMoon} from "@tabler/icons-react";


function ThemeToggle() {
  const toggleDark = () => {
    const html = document.documentElement;
    html.classList.toggle("dark");

    localStorage.theme = html.classList.contains("dark")
      ? "dark"
      : "light";
  };

  return <button onClick={toggleDark}>toggle</button>;
}

function Header() {
  return ( 
    <div id='header' className='pt-7 pb-10 lg:pb-1 rounded-10 ' >
        <div className='pb-8 font-instrument '>
<nav className="fixed  backdrop-blur-md  top-0 z-50 flex lg:gap-6 gap-2 lg:text-3xl justify-end dark:bg-black/50 bg-white/50 pb-7 pt-7 border-1 border-gray-100 rounded-xl pl-1 pr-1">
            <a className='lg:mr-186 mr-28 cursor-pointer' href='#header'>aryapathak</a>
            <a href='#projects' className='cursor-pointer scroll-smooth'>projects</a>
            <a>blogs</a>
           <a>work</a>
      <ThemeToggle/>
          </nav>
 
        </div>
      
    </div>
  )
}

export default Header
