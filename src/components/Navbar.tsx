import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar: React.FC = () => {
  return (
    <nav className="bg-slate-900 border-b border-slate-800 sticky top-0 z-10 backdrop-blur-md bg-opacity-80">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="font-bold text-xl tracking-tight bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
          Portfolio .
        </Link>
        <div className="space-x-6 text-sm text-slate-300">
          <Link to="/about" className="hover:text-white transition-colors">Über mich</Link>
          <Link to="/projects" className="hover:text-white transition-colors">Projekte & Notebooks</Link>
        </div>
      </div>
    </nav>
  );
};