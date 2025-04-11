
import React from 'react';
import { Button } from '@/components/ui/button';
import { FileText } from 'lucide-react';
import "@/styles/aa.css";
import "@/ani/cube.css"

const About = () => {
  return (
    <section id="about" className="py-20 bg-[#09090F]">

      <div className="section-container">
      <h2 className="section-title text-white text-4xl md:text-5xl font-bold">About Me</h2>

        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
       
        <div className="relative opacity-0 animate-fade-in [animation-delay:200ms]">
  <div className="cube-container">
    <div className="cube">
      <div className="face front">
        <img 
          src="src/photo/Screenshot_20241114_110328_Instagram (1).jpg" 
          alt="Front Image" 
          className="w-full h-full object-cover rounded" 
        />
      </div>

      <div className="face back">
        <img 
          src="src/photo/received_27330686426515629.jpeg" 
          alt="Back" 
          className="w-full h-full object-cover rounded" 
        />
      </div>

      <div className="face right">
        {/* Removed duplicate 'right' and added unique text */}
        <span>i like ice cream</span>
      </div>

      <div className="face left">
        <span>Basketball</span>
      </div>

      <div className="face top">
        <span>22 years old</span>
      </div>

      <div className="face bottom">
        <img 
          src="src/photo/Screenshot_20241114_110257_Gallery.jpg" 
          alt="Bottom" 
          className="w-full h-full object-cover rounded" 
        />
      </div>
    </div>
  </div>
</div>


          
          {/* Text Content Column */}
          <div className="flex flex-col opacity-0 animate-fade-in-right [animation-delay:400ms]">
            <h3 className="text-3xl font-bold mb-4 text-gray-200">
             Web Developer based in Ulaanbaator, MNG
            </h3>
            
            <p className="text-gray-300 mb-4">
              I'm a full stack web developer with a passion for creating interactive and responsive web applications. 
              I have experience working with JavaScript, React, Node.js, Express, HTML, CSS, and more.
            </p>
            
            <p className="text-gray-300 mb-8">
              My background in computer science and three years working with agile teams has given me a strong foundation in 
              web development principles and best practices. I enjoy the constant learning that comes with the ever-evolving tech industry.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div>
                <h4 className="font-semibold text-portfolio-blue mb-2">Education</h4>
                <p className="text-gray-300">Indra cyber institute</p>
              </div>
              <div>
                <h4 className="font-semibold text-portfolio-blue mb-2">Location</h4>
                <p className="text-gray-300">Mongolian Ulaanbaatar</p>
              </div>
              <div>
                <h4 className="font-semibold text-portfolio-blue mb-2">Email</h4>
                <p className="text-gray-300">Zolo@gmail.com</p>
              </div>
              <div>
                <h4 className="font-semibold text-portfolio-blue mb-2">Employment</h4>
                <p className="text-gray-300">Open to opportunities</p>
              </div>
            </div>
            
            
<a href="#" className="ui-btn self-start flex items-center gap-2">
  <FileText size={18} />
  <span>Download CV</span>
</a>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
