import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectCard } from './components/ProjectCard';
import { NotebookModal } from './components/NotebookModal';
import { projects } from './data/projects';
import type { Project } from './types/project';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      <Navbar />
      <Hero />

      <main id="projects" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-8 text-slate-100 border-l-4 border-blue-600 pl-3">
          Ausgewählte Analysen & Notebooks
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onOpenNotebook={(p) => setSelectedProject(p)} 
            />
          ))}
        </div>
      </main>

      <NotebookModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </div>
  );
}