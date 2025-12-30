"use client";
import React , {useState , useEffect} from 'react'
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




function ThemeToggleTwo() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggleTheme() {
    const html = document.documentElement;
    const dark = html.classList.toggle("dark");

    localStorage.setItem("theme", dark ? "dark" : "light");
    setIsDark(dark);
  }

  return (
    <button onClick={toggleTheme}>
      {isDark ? <IconSun /> : <IconMoon />}
    </button>
  );
}

function Header() {
  return ( 
    <div id='header' className='pt-7 pb-10 lg:pb-1 rounded-10  ' >
        <div className='pb-8 font-instrument '>
<nav className="fixed left-1/2 -translate-x-1/2 backdrop-blur-md  top-0 z-50 flex lg:gap-6 gap-2 lg:text-3xl justify-end dark:bg-black/50 bg-white/50 pb-7 pt-7 border-1 border-gray-100 dark:border-white/10 rounded-xl pl-1 pr-1 lg:pl-4 lg:pr-4 mt-3 items-center">
            <a className='lg:mr-186 mr-28 cursor-pointer' href='#header'>aryapathak</a>
 
            <a href='#projects' className='cursor-pointer scroll-smooth'>projects</a>
            <a href='#blogs' className='cursor-pointer'>blogs</a>
           <a>work</a>
                          <ThemeToggleTwo/>
  
          </nav>
 
        </div>
      
    </div>
  )
}

export default Header
