import React from 'react';
import { Link } from 'react-router-dom';

export const Hero: React.FC = () => {
  return (
    <section className="border-b border-slate-800 bg-slate-950 py-20 text-center">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-slate-100 sm:text-5xl">
          Data & Software Portfolio
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-slate-400">
          Willkommen! Hier präsentiere ich datengestützte Analysen, Machine-Learning-Modelle und
          interaktive Web-Simulationen.
        </p>
        <Link
          to="/projects"
          className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-medium text-white shadow-sm transition-all hover:bg-blue-500 hover:shadow"
        >
          Projekte ansehen
        </Link>
      </div>
    </section>
  );
};
