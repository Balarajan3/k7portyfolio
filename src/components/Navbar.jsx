
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="relative z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-24">
          <div className="flex-shrink-0 flex items-center">
            <span className="font-bold text-2xl text-slate-900">Kesavan</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            <a href="#about" className="text-slate-600 hover:text-indigo-600 transition-colors duration-200 font-medium text-base">About</a>
            <a href="#services" className="text-slate-600 hover:text-indigo-600 transition-colors duration-200 font-medium text-base">Services</a>
            <a href="#portfolio" className="text-slate-600 hover:text-indigo-600 transition-colors duration-200 font-medium text-base">Portfolio</a>
            <a href="#contact" className="text-slate-600 hover:text-indigo-600 transition-colors duration-200 font-medium text-base">Contact</a>

            <a
              href="#hire"
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-7 py-3 rounded-lg font-medium transition-all shadow-md hover:shadow-lg text-base"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-slate-600 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute w-full bg-white shadow-lg border-t border-slate-100 z-50">
          <div className="px-6 pt-4 pb-8 space-y-4">
            <a href="#about" className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-indigo-600 hover:bg-slate-50">About</a>
            <a href="#services" className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-indigo-600 hover:bg-slate-50">Services</a>
            <a href="#portfolio" className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-indigo-600 hover:bg-slate-50">Portfolio</a>
            <a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-indigo-600 hover:bg-slate-50">Contact</a>
            <a href="#hire" className="block w-full text-center mt-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3.5 rounded-lg font-medium shadow-md">Hire Me</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

