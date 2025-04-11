
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
          src="https://scontent.fuln5-1.fna.fbcdn.net/v/t1.15752-9/488579114_1953681058723650_1663883666896735980_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=9f807c&_nc_ohc=ABZDxyiiHioQ7kNvwHGmhR6&_nc_oc=AdluRu-Kitc7Y5QSoa8J5pUo5nBZNgq-hfj1l90FoiNJgeK3nyUIN-2LXPsYPHoTUxg&_nc_zt=23&_nc_ht=scontent.fuln5-1.fna&oh=03_Q7cD2AFwo742-Z_hGUV7_TQciXAHPgZClRGQjJLOBdVhMsu9LQ&oe=68203117" 

          alt="Front Image" 
          className="w-full h-full object-cover rounded" 
        />
      </div>

      <div className="face back">
        <img 
          src="https://scontent.fuln5-1.fna.fbcdn.net/v/t1.15752-9/487982364_668887572455703_861098510272904804_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=9f807c&_nc_ohc=oBIpp3QkTKAQ7kNvwEFQvpd&_nc_oc=Adkc3A4l1nvU5LrtDlypKbmsQtR5Y3ykmTaf1Jt2y6RT-i8AsYqqpOsJJf1aKV1VpAI&_nc_zt=23&_nc_ht=scontent.fuln5-1.fna&oh=03_Q7cD2AFhJwu6-5CJdiLa5ZiqtDQZg7c2dj2-fJ9UdxQZWpysqw&oe=682031C9" 
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
          src="https://scontent.fuln5-1.fna.fbcdn.net/v/t1.15752-9/482147929_2481651648847613_6052779809301187478_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=9f807c&_nc_ohc=2WLYRPPJ9zQQ7kNvwFyitrB&_nc_oc=AdlQCb1qweYJe7OfGs6Yeky3Mw9X3hzBzpBuAuLomyeXuD_FjDs7hNSgMk9KO2V17fw&_nc_zt=23&_nc_ht=scontent.fuln5-1.fna&oh=03_Q7cD2AEFAgD0RUrcc008m4T6K_xDMHGRVmfkfYp7V5eBCBtBgQ&oe=682037F2" 
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
