import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { MnistVaeDemo } from '../components/MnistVaeDemo'; // <-- Import your component

export const Article: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) return <div>Artikel nicht gefunden</div>;

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
      </header>

      {/* Conditionally render the React Component if it is the MNIST VAE */}
      {project.id === "mnist-vae" && (
        <section className="mb-12">
          <MnistVaeDemo />
        </section>
      )}

      {/* Conditionally render the Colab HTML iframe if a path exists */}
      {project.notebookPath && (
        <section className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-800 h-[800px]">
          <iframe 
            src={project.notebookPath} 
            title={project.title}
            className="w-full h-full border-0"
          />
        </section>
      )}
    </article>
  );
};