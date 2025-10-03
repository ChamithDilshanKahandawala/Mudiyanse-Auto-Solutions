import React from 'react'

function Footer() {
  return (
    <footer className="bg-black text-white dark:bg-white dark:text-black shadow-inner mt-10">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Copyright */}
        <span className="text-sm text-gray-400 dark:text-gray-600 text-center md:text-left">
          &copy; {new Date().getFullYear()} 
          <span className="text-orange font-semibold"> Mudiyanse Auto Solutions</span>. 
          All Rights Reserved.
        </span>

        {/* Quick Links */}
        <div className="flex gap-6 text-sm">
          <a href="#about" className="hover:text-orange transition">About</a>
          <a href="#vehicles" className="hover:text-orange transition">Vehicles</a>
          <a href="#contact" className="hover:text-orange transition">Contact</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
