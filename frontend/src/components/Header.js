import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header className="bg-black text-white dark:bg-white dark:text-black shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        
        {/* Logo + Title */}
        <div className="flex items-center gap-3">
          <img
            src="./Logo/chamiya_logo_circle_white (1).png"
            alt="Mudiyanse Auto Solutions Logo"
            className="h-12 w-12 rounded-full border-2 border-orange-500 shadow-sm hover:scale-105 transition-transform duration-200"
          />
          <h1 className="text-2xl font-bold tracking-wide">
            <span className="text-orange-500">Mudiyanse</span> Auto Solutions
          </h1>
        </div>

        {/* Navigation */}
        <nav className="flex gap-6">
          <Link
            to="/"
            className="text-orange-500 font-semibold hover:text-orange-400 transition-colors duration-200"
          >
            Add Vehicle
          </Link>
          <Link
            to="/vehicles"
            className="text-orange-500 font-semibold hover:text-orange-400 transition-colors duration-200"
          >
            View Vehicles
          </Link>
        </nav>

        {/* Theme Toggle Button */}
        <button
          type="button"
          onClick={toggleTheme}
          className="bg-white text-orange dark:bg-black dark:text-white px-5 py-2 rounded-full font-semibold shadow-md hover:bg-gray-200 dark:hover:bg-gray-800 transition-all duration-200"
        >
          Toggle Theme
        </button>
      </div>
    </header>
  );
}

export default Header;
