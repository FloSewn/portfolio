import React from 'react';

export const Navbar: React.FC = () => {
  return (
    <nav className="bg-slate-900 border-b border-slate-800 sticky top-0 z-10 backdrop-blur-md bg-opacity-80">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
          Data & Analytics Portfolio
        </span>
        <div className="space-x-6 text-sm text-slate-300">
          <a href="#about" className="hover:text-white transition-colors">Über mich</a>
          <a href="#projects" className="hover:text-white transition-colors">Projekte</a>
        </div>
      </div>
    </nav>
  );
};