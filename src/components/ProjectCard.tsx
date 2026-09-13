import React from 'react';
import type { Project } from '../types/project';

interface ProjectCardProps {
  project: Project;
  onOpenNotebook: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenNotebook }) => {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 flex flex-col justify-between hover:border-slate-700 hover:shadow-md transition-all">
      <div>
        <span className="font-mono text-xs font-bold text-blue-600 uppercase tracking-wider">
          {project.category}
        </span>
        <h3 className="text-xl font-bold text-slate-100 mt-2 mb-2">{project.title}</h3>
        <p className="text-slate-400 text-sm mb-4 leading-relaxed">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag, idx) => (
            <span key={idx} className="font-mono bg-slate-950 text-slate-300 text-xs px-2.5 py-1 rounded border border-slate-800">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <button
        onClick={() => onOpenNotebook(project)}
        className="w-full bg-slate-950 hover:bg-blue-600 hover:text-white text-slate-100 font-medium py-2.5 rounded-lg transition-all text-sm border border-slate-800 flex items-center justify-center gap-2 cursor-pointer shadow-sm"
      >
        <span>📓 Notebook öffnen</span>
      </button>
    </div>
  );
};