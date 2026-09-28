import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { MnistVaeDemo } from '../components/MnistVaeDemo'; // <-- Import your component
import { projects } from '../data/projects';

export const Article: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) return <div>Artikel nicht gefunden</div>;

  return (
    <article className="mx-auto max-w-5xl px-6 py-12">
      <Link
        to="/"
        className="mb-8 inline-flex items-center font-medium text-blue-500 hover:text-blue-400"
      >
        ← Zurück zur Übersicht
      </Link>

      <header className="mb-10">
        <span className="font-mono text-sm font-bold tracking-wider text-blue-600 uppercase">
          {project.category}
        </span>
        <h1 className="mt-3 mb-6 text-4xl leading-tight font-extrabold text-slate-100 md:text-5xl">
          {project.title}
        </h1>
        <p className="mb-6 text-lg leading-relaxed text-slate-400">{project.description}</p>
      </header>

      {/* Conditionally render the React Component if it is the MNIST VAE */}
      {project.id === 'mnist-vae' && (
        <section className="mb-12">
          <MnistVaeDemo />
        </section>
      )}

      {/* Conditionally render the Colab HTML iframe if a path exists */}
      {project.notebookPath && (
        <section className="overflow-hidden rounded-xl border border-slate-800 bg-white shadow-lg">
          {/* Wrapper für Mobile Scaling oder feste Desktop-Höhe */}
          <div className="h-200 w-full md:w-full">
            <iframe
              src={project.notebookPath}
              title={project.title}
              className="h-full w-full origin-top-left border-0 md:scale-100"
              style={
                {
                  // Optionaler Trick: Auf kleineren Bildschirmen das Iframe etwas breiter rechnen und runterskalieren,
                  // damit der Inhalt kompakter wirkt (oder einfach so lassen)
                }
              }
            />
          </div>
        </section>
      )}
    </article>
  );
};
