import React from 'react'

function Header() {
  return (
    <header className="bg-black text-white dark:bg-white dark:text-black shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        
        {/* Logo + Title */}
        <div className="flex items-center gap-3">
          <img
            src="./Logo/chamiya_logo_circle_white (1).png"
            alt="Logo"
            className="h-12 w-12 rounded-full border-2 border-orange shadow-sm hover:scale-105 transition-transform"
          />
          <span className="text-2xl font-bold tracking-wide">
            <span className="text-orange">Mudiyanse</span> Auto Solutions
          </span>
        </div>

        {/* Theme Toggle Button */}
        <button
          type="button"
          onClick={() => document.documentElement.classList.toggle('dark')}
          className="bg-white text-orange dark:bg-black dark:text-white dark:hover:bg-gray-800 px-5 py-2 rounded-full font-semibold shadow-md hover:bg-gray-200 hover:text-orange transition-all duration-200"
        >
          Toggle Theme
        </button>
      </div>
    </header>
  )
}

export default Header
