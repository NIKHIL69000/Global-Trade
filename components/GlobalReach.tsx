import React from 'react';
import { Stat } from '../types';

const stats: Stat[] = [
  { id: 'st1', label: 'Countries Served', value: '35', suffix: '+' },
  { id: 'st2', label: 'Annual Shipments', value: '500', suffix: '+' },
  { id: 'st3', label: 'Global Partners', value: '120', suffix: '' },
  { id: 'st4', label: 'Years Experience', value: '15', suffix: '+' },
];

const GlobalReach: React.FC = () => {
  return (
    <section id="global" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background World Map Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none">
          {/* Abstract pattern representation */}
           <path d="M0 0 H100 V100 H0 Z" fill="url(#grid-pattern)" />
           <defs>
             <pattern id="grid-pattern" width="10" height="10" patternUnits="userSpaceOnUse">
               <circle cx="1" cy="1" r="0.5" className="text-white" />
             </pattern>
           </defs>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          <div className="w-full lg:w-1/2">
            <h4 className="text-emerald-400 font-bold tracking-wider uppercase mb-2">Global Reach</h4>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Connecting Continents</h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              We have established a robust network spanning across Asia, Europe, the Americas, and Africa. Our strategic partnerships with major shipping lines and local distributors ensure that your cargo reaches its destination safely and on time.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              <div className="border-l-4 border-emerald-500 pl-4">
                <h5 className="font-bold text-white text-lg">Key Import Markets</h5>
                <p className="text-slate-400 text-sm mt-1">Brazil, USA, Ecuador, China</p>
              </div>
              <div className="border-l-4 border-emerald-500 pl-4">
                <h5 className="font-bold text-white text-lg">Key Export Markets</h5>
                <p className="text-slate-400 text-sm mt-1">UK, UAE, Singapore, Japan</p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div key={stat.id} className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-emerald-500 transition-colors">
                <div className="text-4xl md:text-5xl font-bold text-emerald-400 mb-2 font-mono">
                  {stat.value}<span className="text-2xl text-emerald-600">{stat.suffix}</span>
                </div>
                <div className="text-slate-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalReach;
