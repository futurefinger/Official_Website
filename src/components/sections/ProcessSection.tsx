import React from 'react';
import { companyData } from '../../data/companyData';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ProcessSection: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900/50 border-y border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-950/80 border border-brand-800 text-xs text-brand-300 font-mono mb-3">
            STRUCTURED EXECUTION ROADMAP
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Our 6-Phase Engineering Lifecycle
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-3">
            A disciplined, transparent development protocol designed to mitigate technical debt and guarantee predictable on-time deployments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {companyData.approachSteps.map((step, idx) => (
            <div
              key={idx}
              className="relative p-6 rounded-2xl bg-slate-900 border border-slate-800/80 hover:border-cyan-500/40 hover:bg-slate-900/95 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl font-black font-mono text-cyan-400/40 group-hover:text-cyan-400 transition-colors">
                  {step.step}
                </span>
                <span className="text-[10px] font-mono font-medium text-slate-400 px-2 py-0.5 rounded bg-slate-800 border border-slate-700">
                  {step.duration}
                </span>
              </div>

              <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                {step.phase}
              </h3>

              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                {step.summary}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/process"
            className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 hover:text-cyan-300 hover:underline"
          >
            <span>Read Complete Software Development Standard Operating Procedures</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
};
