import React from 'react';
import type { Project } from '../types/project';

interface NotebookModalProps {
  project: Project | null;
  onClose: () => void;
}

export const NotebookModal: React.FC<NotebookModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-100/60 backdrop-blur-sm p-4">
      <div className="bg-slate-900 border border-slate-800 rounded-xl w-full max-w-5xl h-[85vh] flex flex-col overflow-hidden shadow-2xl">
        
        {/* Modal Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-slate-800 bg-slate-900">
          <div>
            <h3 className="text-lg font-bold text-slate-100">{project.title}</h3>
            <p className="text-xs text-slate-400">Jupyter Notebook Vorschau</p>
          </div>
          <button 
            onClick={onClose}
            className="text-slate-400 hover:text-slate-100 text-xl font-bold px-3 py-1 rounded-lg hover:bg-slate-800 cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Notebook Content via iframe */}
        <div className="flex-1 bg-white">
          <iframe 
            src={project.notebookPath} 
            title={project.title}
            className="w-full h-full border-0"
          />
        </div>
      </div>
    </div>
  );
};