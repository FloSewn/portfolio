import React from 'react';
import { ProjectCard } from '../components/ProjectCard';
import { projects } from '../data/projects';

export const Projects: React.FC = () => {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="mb-4 border-l-4 border-blue-600 pl-4 text-4xl font-bold text-slate-100">
        Projekte & Analysen
      </h1>
      <p className="mb-10 text-lg text-slate-400">
        Eine Sammlung meiner interaktiven Jupyter Notebooks, Simulationen und Deep Learning
        Architekturen.
      </p>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </main>
  );
};
