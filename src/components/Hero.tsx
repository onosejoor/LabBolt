import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Innovate with <span className="text-[#ffd700]">Lab Bolt</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Accelerate your research and development with our cutting-edge laboratory solutions. 
            Experience precision, efficiency, and innovation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-[#ffd700] text-gray-900 px-8 py-3 rounded-md font-medium hover:bg-[#ffd900] transition-colors flex items-center justify-center">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="border-2 border-[#ffd700] text-[#ffd700] px-8 py-3 rounded-md font-medium hover:bg-[#ffd700] hover:text-gray-900 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;