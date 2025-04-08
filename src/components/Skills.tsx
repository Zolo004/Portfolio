
import React from 'react';
import { Code2, Database, Layout, Server, Settings } from 'lucide-react';

const skillsCategories = [
  {
    name: 'Frontend',
    icon: <Layout className="h-8 w-8 text-portfolio-blue" />,
    skills: [
      { name: 'HTML5', level: 90 },
      { name: 'CSS3/SASS', level: 85 },
      { name: 'JavaScript', level: 90 },
      { name: 'TypeScript', level: 80 },
      { name: 'React.js', level: 85 },
      { name: 'Next.js', level: 75 },
      { name: 'Tailwind CSS', level: 90 },
    ]
  },
  {
    name: 'Backend',
    icon: <Server className="h-8 w-8 text-portfolio-purple" />,
    skills: [
      { name: 'Node.js', level: 80 },
      { name: 'Express.js', level: 85 },
      { name: 'Python', level: 75 },
      { name: 'Django', level: 70 },
      { name: 'RESTful APIs', level: 85 },
      { name: 'GraphQL', level: 75 },
    ]
  },
  {
    name: 'Database',
    icon: <Database className="h-8 w-8 text-portfolio-blue" />,
    skills: [
      { name: 'MongoDB', level: 85 },
      { name: 'PostgreSQL', level: 80 },
      { name: 'MySQL', level: 75 },
      { name: 'Firebase', level: 80 },
    ]
  },
  {
    name: 'Tools & Others',
    icon: <Settings className="h-8 w-8 text-portfolio-purple" />,
    skills: [
      { name: 'Git', level: 90 },
      { name: 'Docker', level: 75 },
      { name: 'CI/CD', level: 70 },
      { name: 'Jest', level: 80 },
      { name: 'AWS', level: 65 },
      { name: 'Figma', level: 75 },
    ]
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="section-container">
        <h2 className="section-title">My Skills</h2>
        
        <div className="flex items-center justify-center mb-12 opacity-0 animate-fade-in [animation-delay:200ms]">
          <div className="p-4 bg-gradient-to-r from-portfolio-blue to-portfolio-purple rounded-full">
            <Code2 className="h-10 w-10 text-white" />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {skillsCategories.map((category, categoryIndex) => (
            <div 
              key={category.name} 
              className="bg-white rounded-lg p-6 shadow-md border border-gray-100 opacity-0 animate-fade-in"
              style={{ animationDelay: `${categoryIndex * 200 + 400}ms` }}
            >
              <div className="flex items-center mb-6">
                <div className="mr-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold">{category.name}</h3>
              </div>
              
              <div className="space-y-5">
                {category.skills.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-portfolio-blue to-portfolio-purple"
                        style={{ 
                          width: `${skill.level}%`,
                          transition: 'width 1s ease-in-out',
                          transitionDelay: `${index * 100}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
