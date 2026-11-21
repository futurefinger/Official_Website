import React from 'react';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { SEOHead } from '../../components/common/SEOHead';
import { CTASection } from '../../components/sections/CTASection';
import { industriesData } from '../../data/industriesData';
import { Building2, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const IndustriesPage: React.FC = () => {
  return (
    <div className="py-12 bg-slate-950">
      <SEOHead
        title="Industries We Serve - Specialized Enterprise Solutions"
        description="Tailored technology architectures for Healthcare, FinTech, E-commerce, Logistics, Smart Manufacturing, and Cybersecurity Defense."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Industries We Serve' }]} />

        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800 text-xs text-cyan-300 font-mono mb-4">
            SECTOR-SPECIFIC ARCHITECTURES
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Industries We Serve
          </h1>
          <p className="text-base sm:text-lg text-slate-300 mt-5 leading-relaxed">
            Every vertical carries unique regulatory frameworks, performance demands, and compliance obligations. We build sector-tailored digital ecosystems engineered to exceed industry benchmarks.
          </p>
        </div>

        {/* Detailed Industries Breakdown */}
        <div className="space-y-12 mb-20">
          {industriesData.map((ind) => (
            <div
              key={ind.id}
              id={ind.slug}
              className="p-8 md:p-10 rounded-2xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 space-y-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-cyan-400">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">{ind.name}</h2>
                    <span className="text-xs text-cyan-400 font-mono">{ind.impactMetrics[0]}</span>
                  </div>
                </div>

                <Link
                  to={`/request-quote?industry=${encodeURIComponent(ind.name)}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-brand-600 hover:bg-brand-500 transition-colors self-start sm:self-auto"
                >
                  <span>Inquire for {ind.name}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                {ind.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                <div className="p-5 rounded-xl bg-slate-950/70 border border-slate-800/80 space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-rose-400 block mb-2">
                    Industry-Specific Bottlenecks
                  </span>
                  {ind.challenges.map((c, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <span className="text-rose-500 font-bold">•</span>
                      <span>{c}</span>
                    </div>
                  ))}
                </div>

                <div className="p-5 rounded-xl bg-slate-950/70 border border-slate-800/80 space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block mb-2">
                    Future Finger Architectural Solutions
                  </span>
                  {ind.solutions.map((s, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      <CTASection />
    </div>
  );
};
