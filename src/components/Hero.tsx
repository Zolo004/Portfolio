import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import NET from "vanta/dist/vanta.net.min";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import "@/styles/uiverse-button.css";

const Hero = () => {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);

  useEffect(() => {
    if (!vantaEffect.current) {
      vantaEffect.current = NET({
        el: vantaRef.current,
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0x338bb1,
        backgroundColor: 0x09090f,
        points: 10,
        maxDistance: 20,
        spacing: 15,
        showDots: true
      });
    }
    return () => {
      if (vantaEffect.current) vantaEffect.current.destroy();
    };
  }, []);

  return (
    <section
      id="home"
      ref={vantaRef}
      className="relative min-h-screen flex items-center"
    >
      <div className="section-container relative z-10">
        <div className="flex flex-col items-center text-center">
          <p className="text-portfolio-purple font-medium mb-2 animate-fade-in [animation-delay:200ms] opacity-0">
            👋 Hello, I'm
          </p>

          <h1 className="text-4xl sm:text-6xl font-bold mb-4 bg-gradient-to-r from-portfolio-blue to-portfolio-purple bg-clip-text text-transparent animate-fade-in [animation-delay:400ms] opacity-0">
            Zolo
          </h1>

          <h2 className="text-2xl sm:text-3xl font-medium text-gray-200 mb-6 animate-fade-in [animation-delay:600ms] opacity-0">
            Full Stack Web Developer
          </h2>

          <p className="max-w-xl text-gray-300 mb-8 animate-fade-in [animation-delay:800ms] opacity-0">
            I build exceptional and accessible digital experiences for the web.
            Focused on creating clean, user-friendly applications with modern
            technologies.
          </p>

          {/* Social Links */}
          <div className="flex space-x-4 mb-10 animate-fade-in [animation-delay:1000ms] opacity-0">
            <a
              href="#"
              className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow text-gray-700 hover:text-portfolio-blue"
            >
              <Github size={24} />
            </a>
            <a
              href="#"
              className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow text-gray-700 hover:text-portfolio-blue"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="#contact"
              className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow text-gray-700 hover:text-portfolio-blue"
            >
              <Mail size={24} />
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in [animation-delay:1200ms] opacity-0">
            <a href="#projects" className="ui-btn">
              <span>View My Work</span>
            </a>
            <a href="#contact" className="ui-btn">
              <span>Contact Me</span>
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <a
          href="#about"
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-gray-400 hover:text-portfolio-purple"
        >
          <ArrowDown />
        </a>
      </div>
    </section>
  );
};

export default Hero;
