import React from 'react';
import type { Project } from '../types/project';

interface NotebookModalProps {
  project: Project | null;
  onClose: () => void;
}

export const NotebookModal: React.FC<NotebookModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-100/60 p-4 backdrop-blur-sm">
      <div className="flex h-[85vh] w-full max-w-5xl flex-col overflow-hidden rounded-xl border border-slate-800 bg-slate-900 shadow-2xl">
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-slate-800 bg-slate-900 px-6 py-4">
          <div>
            <h3 className="text-lg font-bold text-slate-100">{project.title}</h3>
            <p className="text-xs text-slate-400">Jupyter Notebook Vorschau</p>
          </div>
          <button
            onClick={onClose}
            className="cursor-pointer rounded-lg px-3 py-1 text-xl font-bold text-slate-400 hover:bg-slate-800 hover:text-slate-100"
          >
            ✕
          </button>
        </div>

        {/* Notebook Content via iframe */}
        <div className="flex-1 bg-white">
          <iframe
            src={project.notebookPath}
            title={project.title}
            className="h-full w-full border-0"
          />
        </div>
      </div>
    </div>
  );
};
