import React from 'react';
import { Link } from 'react-router-dom';
import type { Project } from '../types/project';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="flex flex-col justify-between rounded-xl border border-slate-800 bg-slate-900 p-6 transition-all hover:border-slate-700 hover:shadow-md">
      <div>
        <span className="font-mono text-xs font-bold tracking-wider text-blue-600 uppercase">
          {project.category}
        </span>
        <h3 className="mt-2 mb-2 text-xl font-bold text-slate-100">{project.title}</h3>
        <p className="mb-4 text-sm leading-relaxed text-slate-400">{project.description}</p>

        <div className="mb-6 flex flex-wrap gap-2">
          {project.tags.map((tag, idx) => (
            <span
              key={idx}
              className="rounded border border-slate-800 bg-slate-950 px-2.5 py-1 font-mono text-xs text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <Link
        to={`/article/${project.id}`}
        className="flex w-full items-center justify-center gap-2 rounded-lg border border-slate-800 bg-slate-950 py-2.5 text-center text-sm font-medium text-slate-100 shadow-sm transition-all hover:bg-blue-600 hover:text-white"
      >
        <span>📓 Artikel & Notebook lesen</span>
      </Link>
    </div>
  );
};
