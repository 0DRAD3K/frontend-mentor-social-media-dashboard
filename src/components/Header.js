import React from 'react'
import { useState , useEffect } from 'react'
export default function Header() {
  const [darkMode , setDarkMode] = useState(true);
  const handleTheme = () => {
    setDarkMode(!darkMode);
    const body = document.querySelector('body');
    if(darkMode){
      body.classList.add('dark')
    }else{
        body.classList.remove('dark');
      }
    setDarkMode(!darkMode)
  }

  return (
    <>
        <header className='flex items-center justify-between'>
            <section>
                <h1 className='font-bold text-2xl mb-1 text-slate-900 dark:text-white '>Social Media Dashboard</h1>
                <p className='text-slate-700/80 font-bold  dark:text-text '>Total Followers: 23,004</p>
            </section>
            {/* Toggle */}
            <div className="toggle" >
              <label htmlFor="checkbox" className='font-bold text-slate-600 text-sm cursor-pointer  dark:text-text '>Dark Mode</label>
              <input type="checkbox" className="checkbox" id="checkbox" checked={darkMode} onChange={handleTheme}/>
              <label for="checkbox" className="label">
                <div className="ball"></div>
              </label>
            </div>
        </header>
    </>
  )
}
