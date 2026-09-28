import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar: React.FC = () => {
  return (
    <nav className="bg-opacity-80 sticky top-0 z-10 border-b border-slate-800 bg-slate-900 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-xl font-bold tracking-tight text-transparent"
        >
          Portfolio .
        </Link>
        <div className="space-x-6 text-sm text-slate-300">
          <Link to="/about" className="transition-colors hover:text-white">
            Über mich
          </Link>
          <Link to="/projects" className="transition-colors hover:text-white">
            Projekte & Notebooks
          </Link>
        </div>
      </div>
    </nav>
  );
};
