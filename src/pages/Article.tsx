import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';

export const Article: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  // Scroll to top when loading a new article
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold text-slate-100 mb-4">Artikel nicht gefunden</h2>
        <Link to="/" className="text-blue-600 hover:underline">Zurück zur Startseite</Link>
      </div>
    );
  }

  return (
    <article className="max-w-5xl mx-auto px-6 py-12">
      <Link to="/" className="inline-flex items-center text-blue-500 hover:text-blue-400 mb-8 font-medium">
        ← Zurück zur Übersicht
      </Link>
      
      <header className="mb-10">
        <span className="font-mono text-sm font-bold text-blue-600 uppercase tracking-wider">
          {project.category}
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-100 mt-3 mb-6 leading-tight">
          {project.title}
        </h1>
        <p className="text-lg text-slate-400 leading-relaxed mb-6">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, idx) => (
            <span key={idx} className="font-mono bg-slate-900 text-slate-300 text-xs px-3 py-1.5 rounded-md border border-slate-800">
              {tag}
            </span>
          ))}
        </div>
      </header>

      {/* Embedded Colab Notebook */}
      <section className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-800 h-[800px]">
        <iframe 
          src={project.notebookPath} 
          title={project.title}
          className="w-full h-full border-0"
        />
      </section>
    </article>
  );
};