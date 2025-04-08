
import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-white to-blue-50">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 left-10 w-32 h-32 bg-portfolio-purple/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-portfolio-blue/5 rounded-full blur-xl"></div>
      </div>

      <div className="section-container relative z-10">
        <div className="flex flex-col items-center text-center">
          <p className="text-portfolio-purple font-medium mb-2 animate-fade-in [animation-delay:200ms] opacity-0">
            👋 Hello, I'm
          </p>
          
          <h1 className="text-4xl sm:text-6xl font-bold mb-4 bg-gradient-to-r from-portfolio-blue to-portfolio-purple bg-clip-text text-transparent animate-fade-in [animation-delay:400ms] opacity-0">
            John Doe
          </h1>
          
          <h2 className="text-2xl sm:text-3xl font-medium text-gray-700 mb-6 animate-fade-in [animation-delay:600ms] opacity-0">
            Full Stack Web Developer
          </h2>
          
          <p className="max-w-xl text-gray-600 mb-8 animate-fade-in [animation-delay:800ms] opacity-0">
            I build exceptional and accessible digital experiences for the web.
            Focused on creating clean, user-friendly applications with modern technologies.
          </p>
          
          {/* Social Links */}
          <div className="flex space-x-4 mb-10 animate-fade-in [animation-delay:1000ms] opacity-0">
            <a href="#" className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow text-gray-700 hover:text-portfolio-blue">
              <Github size={24} />
            </a>
            <a href="#" className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow text-gray-700 hover:text-portfolio-blue">
              <Linkedin size={24} />
            </a>
            <a href="#contact" className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow text-gray-700 hover:text-portfolio-blue">
              <Mail size={24} />
            </a>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in [animation-delay:1200ms] opacity-0">
            <Button asChild className="bg-portfolio-blue hover:bg-portfolio-darkBlue text-white px-8 py-6">
              <a href="#projects">View My Work</a>
            </Button>
            <Button asChild variant="outline" className="border-portfolio-purple text-portfolio-purple hover:bg-portfolio-purple/10 px-8 py-6">
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <a href="#about" className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-gray-400 hover:text-portfolio-purple">
          <ArrowDown />
        </a>
      </div>
    </section>
  );
};

export default Hero;
