import { Project, ProjectCard } from '../components/ProjectCard';

export const ProjectsPage = () => {
  // Array data proyek bertipe interface Project[]
  const projectsData: Project[] = [
    {
      id: 1,
      title: "Interactive Landing Page",
      description: "My very first landing page featuring interactive dark and light mode toggle switch with Sanrio gifs.",
      technologies: ["HTML", "CSS", "JavaScript"],
    },
    {
      id: 2,
      title: "Portfolio SPA (This Site)",
      description: "Migrated static portfolio into a full single-page-application built with React, TypeScript, and TailwindCSS.",
      technologies: ["React", "TypeScript", "TailwindCSS", "React Router"],
    },
    {
      id: 3,
      title: "Student Database Console",
      description: "A secure terminal-based application utilizing OOP concepts to manage records.",
      technologies: ["C++", "File Handling"],
    }
  ];

  return (
    <div className="py-12 px-6 max-w-6xl mx-auto">
      <h1 className="text-4xl font-extrabold mb-4">My Projects</h1>
      <p className="text-neutral-600 dark:text-neutral-400 mb-8">
        Here are some projects I have worked on and things I planned to implement as I progress on my development roadmap.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};
