
import React, { useState } from 'react';
import { ArrowUpRight, Github, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const projectsData = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce application with product catalog, user authentication, and payment processing.',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=600',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
    liveUrl: '#',
    githubUrl: '#',
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
  
  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === filter);
  
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="section-container">
        <h2 className="section-title">My Projects</h2>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {['all', 'frontend', 'backend', 'fullstack', 'mobile'].map((category) => (
            <Button
              key={category}
              onClick={() => setFilter(category)}
              variant={filter === category ? "default" : "outline"}
              className={`
                ${filter === category ? 'bg-portfolio-blue text-white' : 'text-gray-600 hover:text-portfolio-blue'}
                capitalize
              `}
            >
              {category}
            </Button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.id} 
              className="overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <CardHeader>
                <CardTitle className="flex justify-between items-center">
                  {project.title}
                  <Badge className="bg-portfolio-purple hover:bg-portfolio-lightPurple">
                    {project.category}
                  </Badge>
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs border-portfolio-blue text-portfolio-blue">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button asChild variant="ghost" className="text-gray-500 hover:text-portfolio-purple">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github size={18} className="mr-2" />
                    Code
                  </a>
                </Button>
                <Button asChild className="bg-portfolio-blue hover:bg-portfolio-darkBlue">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                    <Globe size={18} className="mr-2" />
                    Live Demo
                    <ArrowUpRight size={14} className="ml-1" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
