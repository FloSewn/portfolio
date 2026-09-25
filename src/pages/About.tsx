import React from 'react';

export const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8 text-slate-100 border-l-4 border-blue-600 pl-4">
        Über mich
      </h1>
      
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 text-slate-300 leading-relaxed space-y-6 shadow-lg">
        <p>
          Hi! 
        </p>
        
        <p>
          Hi.
        </p>

        <h2 className="text-2xl font-semibold text-slate-100 mt-8 mb-4 border-b border-slate-800 pb-2">
          Meine Schwerpunkte
        </h2>
        
        <ul className="space-y-4">
          <li className="flex items-start">
            <span className="text-blue-500 mr-3">▹</span>
            <div>
              <strong className="text-slate-100 block">1</strong>
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-blue-500 mr-3">▹</span>
            <div>
              <strong className="text-slate-100 block">2</strong>
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-blue-500 mr-3">▹</span>
            <div>
              <strong className="text-slate-100 block">3</strong>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};