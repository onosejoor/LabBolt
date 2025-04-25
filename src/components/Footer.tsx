import React from 'react';
import { Zap } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <Zap className="h-8 w-8 text-[#ffd700]" />
              <span className="ml-2 text-2xl font-bold text-white">Lab Bolt</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Empowering scientific discovery through innovative laboratory solutions.
              Your trusted partner in research and development.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-[#ffd700] transition-colors">Home</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-[#ffd700] transition-colors">Services</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-[#ffd700] transition-colors">About</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-[#ffd700] transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-[#ffd700] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#ffd700] transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#ffd700] transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Lab Bolt. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;