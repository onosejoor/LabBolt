import React, { useState } from 'react';
import { Menu, X, Zap } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-gray-900 bg-opacity-95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center">
                <Zap className="h-8 w-8 text-[#ffd700]" />
                <span className="ml-2 text-2xl font-bold text-white">Lab Bolt</span>
              </div>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-white hover:text-[#ffd700] transition-colors px-3 py-2">Home</a>
              <a href="#services" className="text-white hover:text-[#ffd700] transition-colors px-3 py-2">Services</a>
              <a href="#about" className="text-white hover:text-[#ffd700] transition-colors px-3 py-2">About</a>
              <a href="#contact" className="text-white hover:text-[#ffd700] transition-colors px-3 py-2">Contact</a>
              <button className="bg-[#ffd700] text-gray-900 px-4 py-2 rounded-md font-medium hover:bg-[#ffd900] transition-colors">
                Get Started
              </button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-[#ffd700] transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#home"
              className="text-white hover:text-[#ffd700] block px-3 py-2 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
            <a
              href="#services"
              className="text-white hover:text-[#ffd700] block px-3 py-2 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Services
            </a>
            <a
              href="#about"
              className="text-white hover:text-[#ffd700] block px-3 py-2 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a
              href="#contact"
              className="text-white hover:text-[#ffd700] block px-3 py-2 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
            <button className="w-full text-center bg-[#ffd700] text-gray-900 px-4 py-2 rounded-md font-medium hover:bg-[#ffd900] transition-colors">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;