import React, { useState, useRef, useEffect } from 'react';
import * as THREE from 'three';
import NET from 'vanta/dist/vanta.net.min';
import { ArrowUpRight, Github, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

import "@/styles/bb.css";

const projectsData = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce application with product catalog, user authentication, and payment processing.',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=600',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
    liveUrl: 'https://medium.com/@cosmingombos/building-a-modern-website-with-next-js-67cd338e84ab',
    githubUrl: 'https://github.com/Zolo004/11_04',
    category: 'fullstack'
  },
  {
    id: 2,
    title: 'Task Management Dashboard',
    description: 'A comprehensive task manager with drag-and-drop interface and real-time updates.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600',
    tags: ['Vue.js', 'Firebase', 'Tailwind CSS'],
    liveUrl: '#',
    githubUrl: '#',
    category: 'frontend'
  },
  {
    id: 3,
    title: 'Weather Forecast API',
    description: 'RESTful API service that provides accurate weather forecasts by aggregating multiple data sources.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=600',
    tags: ['Express.js', 'PostgreSQL', 'Docker'],
    liveUrl: '#',
    githubUrl: '#',
    category: 'backend'
  },
  {
    id: 4,
    title: 'Social Media App',
    description: 'A social platform with real-time messaging, post sharing, and robust user profiles.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600',
    tags: ['React Native', 'GraphQL', 'AWS'],
    liveUrl: '#',
    githubUrl: '#',
    category: 'mobile'
  },
];

const Projects = () => {
  const [filter, setFilter] = useState('all');
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
        showDots: true,
      });
    }
    return () => {
      if (vantaEffect.current) vantaEffect.current.destroy();
    };
  }, []);

  const filteredProjects =
    filter === 'all'
      ? projectsData
      : projectsData.filter((project) => project.category === filter);

  return (
    <section id="projects" ref={vantaRef} className="py-20 relative min-h-screen">
      <div className="section-container relative z-10">
        <h2 className="section-title text-white text-4xl md:text-5xl font-bold">Projects</h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 mt-8">
          {['all', 'frontend', 'backend', 'fullstack', 'mobile'].map((category) => (
            <button
              key={category}
              className={`ui-btn ${filter === category ? 'ring-2 ring-purple-500' : ''}`}
              onClick={() => setFilter(category)}
            >
              <span>{category}</span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <article
              key={project.id}
              className="article-wrapper overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="container-project">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover rounded-t-md"
                />
              </div>

              <div className="project-info bg-white dark:bg-gray-900 p-6">
                <div className="flex-pr justify-between mb-2">
                  <div className="project-title text-xl font-bold text-white">
                    {project.title}
                  </div>
                  <div className="project-hover text-portfolio-blue">
                    <ArrowUpRight size={18} />
                  </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{project.description}</p>
                <div className="types flex flex-wrap gap-2">
                  <span className="project-type bg-gray-200 text-gray-700 px-2 py-1 text-xs rounded">{project.category}</span>
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-type bg-gray-100 text-gray-500 px-2 py-1 text-xs rounded">{tag}</span>
                  ))}
                </div>
              </div>

              <div className="flex justify-between p-4 bg-white dark:bg-gray-900 rounded-b-md">
                <Button asChild variant="ghost" className="text-gray-500 hover:text-portfolio-purple">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github size={18} className="mr-2" />
                    Code
                  </a>
                </Button>
                <Button asChild className="bg-portfolio-dark hover:bg-portfolio-darkBlue text-white">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 rounded-md text-[#ffffff] bg-[#111111] hover:bg-[#111111] hover:text-white transition-colors duration-300"
                  >
                    <Globe size={18} className="mr-2" />
                    Live Demo
                    <ArrowUpRight size={14} className="ml-1" />
                  </a>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
