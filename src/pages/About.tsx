import React from 'react';

export const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8 text-slate-100 border-l-4 border-blue-600 pl-4">
        Über mich
      </h1>
      
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 text-slate-300 leading-relaxed space-y-6 shadow-lg">
        <p>
          Hi! Ich bin ein Data & Software Engineer mit einem starken Fokus auf 
          <strong className="text-blue-400 font-medium"> Physics-Informed Machine Learning, Dynamische Systeme und Latent World Models</strong>.
        </p>
        
        <p>
          Mein Ziel ist es, als Brückenbauer zwischen dem klassischen Engineering (Verfahrens- und Automatisierungstechnik) 
          und modernen Deep-Learning-Architekturen zu agieren. Ich entwickle KI-Systeme, die physikalische Zusammenhänge 
          nicht nur aus Daten extrapolieren, sondern die Systemdynamik aktiv verstehen und vorhersagen können.
        </p>

        <h2 className="text-2xl font-semibold text-slate-100 mt-8 mb-4 border-b border-slate-800 pb-2">
          Meine Schwerpunkte
        </h2>
        
        <ul className="space-y-4">
          <li className="flex items-start">
            <span className="text-blue-500 mr-3">▹</span>
            <div>
              <strong className="text-slate-100 block">Generative KI & World Models</strong>
              Nutzung von Variational Autoencodern (VAEs) und MDN-RNNs zur Kompression komplexer Umgebungen in latente Zustandsräume.
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-blue-500 mr-3">▹</span>
            <div>
              <strong className="text-slate-100 block">Model Predictive Control (MPC)</strong>
              Prädiktive, autonome Regelung von Multi-Agenten-Systemen und Prozessdynamiken direkt im "Traum" des neuronalen Netzes.
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-blue-500 mr-3">▹</span>
            <div>
              <strong className="text-slate-100 block">Edge AI Deployment</strong>
              Überführung von PyTorch-Architekturen in das ONNX-Format für echtzeitfähige, client-seitige Inferenz via <code className="bg-slate-950 border border-slate-800 px-1.5 py-0.5 rounded text-sm text-blue-300">onnxruntime-web</code>.
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};