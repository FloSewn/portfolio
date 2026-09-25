import React from 'react';
import { ProjectCard } from '../components/ProjectCard';
import { projects } from '../data/projects';

export const Projects: React.FC = () => {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-4 text-slate-100 border-l-4 border-blue-600 pl-4">
        Projekte & Analysen
      </h1>
      <p className="text-slate-400 mb-10 text-lg">
        Eine Sammlung meiner interaktiven Jupyter Notebooks, Simulationen und Deep Learning Architekturen.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </main>
  );
};