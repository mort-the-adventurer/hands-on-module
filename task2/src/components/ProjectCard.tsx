import React from 'react';

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  demoLink?: string;
}

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 bg-white dark:bg-neutral-900 text-black dark:text-white flex flex-col justify-between">
      <div>
        {project.imageUrl && (
          <img 
            src={project.imageUrl} 
            alt={project.title} 
            className="w-full h-40 object-cover rounded-xl mb-4" 
          />
        )}
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-neutral-600 dark:text-neutral-400 mb-4 text-sm leading-relaxed">
          {project.description}
        </p>
      </div>
      
      <div className="flex flex-wrap gap-2 mt-auto">
        {project.technologies.map((tech, idx) => (
          <span 
            key={idx} 
            className="bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 text-xs px-2.5 py-1 rounded-full font-medium"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};
