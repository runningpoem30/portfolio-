"use client";
import React from 'react'

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
    <div>
        <div className='pt-8 font-instrument dark:text-white'>
          <nav className="flex gap-6 lg:text-3xl justify-end">
            <a>projects</a>
            <a>blogs</a>
           <a>work</a>
      <ThemeToggle/>
          </nav>
 
        </div>
      
    </div>
  )
}

export default Header
