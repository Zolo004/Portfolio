
import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold text-white">
              <span className="text-portfolio-purple">Dev</span>Portfolio
            </h3>
            <p className="mt-2 text-gray-400 max-w-md">
              Creating digital experiences that make a difference. 
              Always learning, always growing.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
            <p className="text-gray-500 text-sm">
              © {currentYear} John Doe. All rights reserved.
            </p>
          </div>
        </div>
        
        <hr className="border-gray-800 my-8" />
        
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-4 sm:mb-0">
            <a href="#home" className="text-gray-400 hover:text-white text-sm transition-colors">Home</a>
            <a href="#about" className="text-gray-400 hover:text-white text-sm transition-colors">About</a>
            <a href="#projects" className="text-gray-400 hover:text-white text-sm transition-colors">Projects</a>
            <a href="#skills" className="text-gray-400 hover:text-white text-sm transition-colors">Skills</a>
            <a href="#contact" className="text-gray-400 hover:text-white text-sm transition-colors">Contact</a>
          </nav>
          
          <p className="text-gray-500 text-xs">
            Designed & Built with React, Tailwind CSS and ❤️
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
