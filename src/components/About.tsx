
import React from 'react';
import { Button } from '@/components/ui/button';
import { FileText } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
          {/* Image Column */}
          <div className="relative opacity-0 animate-fade-in [animation-delay:200ms]">
            <div className="aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-portfolio-blue/10 to-portfolio-purple/10 flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600&h=600" 
                alt="Developer portrait" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -right-5 w-32 h-32 bg-white p-4 shadow-lg rounded-lg flex items-center justify-center">
              <span className="text-2xl font-bold text-portfolio-purple">5+</span>
              <span className="text-sm ml-2 text-gray-600">Years of Experience</span>
            </div>
          </div>
          
          {/* Text Content Column */}
          <div className="flex flex-col opacity-0 animate-fade-in-right [animation-delay:400ms]">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              A passionate Web Developer based in San Francisco, CA
            </h3>
            
            <p className="text-gray-600 mb-4">
              I'm a full stack web developer with a passion for creating interactive and responsive web applications. 
              I have experience working with JavaScript, React, Node.js, Express, HTML, CSS, and more.
            </p>
            
            <p className="text-gray-600 mb-8">
              My background in computer science and three years working with agile teams has given me a strong foundation in 
              web development principles and best practices. I enjoy the constant learning that comes with the ever-evolving tech industry.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div>
                <h4 className="font-semibold text-portfolio-blue mb-2">Education</h4>
                <p className="text-gray-600">B.S. in Computer Science from UC Berkeley</p>
              </div>
              <div>
                <h4 className="font-semibold text-portfolio-blue mb-2">Location</h4>
                <p className="text-gray-600">San Francisco, California</p>
              </div>
              <div>
                <h4 className="font-semibold text-portfolio-blue mb-2">Email</h4>
                <p className="text-gray-600">john.doe@example.com</p>
              </div>
              <div>
                <h4 className="font-semibold text-portfolio-blue mb-2">Employment</h4>
                <p className="text-gray-600">Open to opportunities</p>
              </div>
            </div>
            
            <Button asChild className="self-start flex items-center gap-2 bg-portfolio-blue hover:bg-portfolio-darkBlue">
              <a href="#">
                <FileText size={18} />
                Download CV
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
