import React from 'react';

export const About: React.FC = () => {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="mb-8 border-l-4 border-blue-600 pl-4 text-4xl font-bold text-slate-100">
        Über mich
      </h1>

      <div className="space-y-6 rounded-xl border border-slate-800 bg-slate-900 p-8 leading-relaxed text-slate-300 shadow-lg">
        <p>Hi!</p>

        <p>Hi.</p>

        <h2 className="mt-8 mb-4 border-b border-slate-800 pb-2 text-2xl font-semibold text-slate-100">
          Meine Schwerpunkte
        </h2>

        <ul className="space-y-4">
          <li className="flex items-start">
            <span className="mr-3 text-blue-500">▹</span>
            <div>
              <strong className="block text-slate-100">1</strong>
            </div>
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-blue-500">▹</span>
            <div>
              <strong className="block text-slate-100">2</strong>
            </div>
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-blue-500">▹</span>
            <div>
              <strong className="block text-slate-100">3</strong>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
