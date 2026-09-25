import React from 'react';
import { Link } from 'react-router-dom';

export const Hero: React.FC = () => {
  return (
    <section className="py-20 bg-slate-950 text-center border-b border-slate-800">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 text-slate-100">
          Data & Software Portfolio
        </h1>
        <p className="text-lg text-slate-400 mb-8 leading-relaxed max-w-2xl mx-auto">
          Willkommen! Hier präsentiere ich datengestützte Analysen, Machine-Learning-Modelle und interaktive Web-Simulationen.
        </p>
        <Link 
          to="/projects" 
          className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-medium px-6 py-3 rounded-lg shadow-sm hover:shadow transition-all"
        >
          Projekte ansehen
        </Link>
      </div>
    </section>
  );
};