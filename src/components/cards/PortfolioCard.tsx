import React from 'react';
import { ArrowRight, CheckCircle2, Shield, Layers } from 'lucide-react';
import { PortfolioItem } from '../../types';

interface PortfolioCardProps {
  item: PortfolioItem;
}

export const PortfolioCard: React.FC<PortfolioCardProps> = ({ item }) => {
  return (
    <div className="group flex flex-col justify-between p-6 md:p-8 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/40 hover:bg-slate-900/90 shadow-xl transition-all duration-300">
      <div>
        {/* Category & Type Header */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-[10px] uppercase font-mono tracking-wider text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/60">
            {item.category}
          </span>

          <span
            className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
              item.isIllustrative
                ? 'bg-slate-800 text-slate-300 border-slate-700'
                : 'bg-emerald-950 text-emerald-400 border-emerald-800'
            }`}
          >
            {item.isIllustrative ? 'Illustrative Architecture' : 'Verified Implementation'}
          </span>
        </div>

        <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
          {item.title}
        </h3>

        <div className="text-xs text-slate-400 font-medium mb-3 flex items-center gap-1.5">
          <Layers className="w-3.5 h-3.5 text-slate-500" />
          <span>{item.clientType}</span>
        </div>

        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
          {item.overview}
        </p>

        {/* Challenge / Solution Highlights */}
        <div className="space-y-3 mb-5 p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-rose-400 block mb-0.5">
              The Engineering Challenge
            </span>
            <p className="text-xs text-slate-300 line-clamp-2">{item.challenge}</p>
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 block mb-0.5">
              Architectural Solution
            </span>
            <p className="text-xs text-slate-300 line-clamp-2">{item.solution}</p>
          </div>
        </div>

        {/* Results */}
        <div className="space-y-1.5 mb-6">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
            Key Outcomes & Benchmark Metrics
          </span>
          {item.results.map((res, i) => (
            <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5" />
              <span>{res}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-wrap gap-1">
          {item.technologies.slice(0, 3).map((tech, i) => (
            <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-400 font-mono">
              {tech}
            </span>
          ))}
        </div>

        <span className="text-xs font-semibold text-cyan-400 group-hover:text-cyan-300 flex items-center gap-1">
          <span>Technical Dossier</span>
          <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
        </span>
      </div>
    </div>
  );
};
