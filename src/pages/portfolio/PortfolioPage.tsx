import React, { useState } from 'react';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { SEOHead } from '../../components/common/SEOHead';
import { PortfolioCard } from '../../components/cards/PortfolioCard';
import { CTASection } from '../../components/sections/CTASection';
import { portfolioData } from '../../data/portfolioData';
import { Layers, ShieldCheck, CheckCircle2, AlertCircle } from 'lucide-react';

export const PortfolioPage: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Verified' | 'Illustrative'>('All');

  const filteredItems = portfolioData.filter((item) => {
    if (filter === 'Verified') return !item.isIllustrative;
    if (filter === 'Illustrative') return item.isIllustrative;
    return true;
  });

  return (
    <div className="py-12 bg-slate-950">
      <SEOHead
        title="Portfolio & Case Studies - Future Finger Technologies"
        description="Explore verified implementations and illustrative solution architectures engineered by Future Finger Technologies."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Portfolio' }]} />

        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800 text-xs text-cyan-300 font-mono mb-4">
            ENGINEERING EXCELLENCE
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Our Portfolio & Engineering Blueprints
          </h1>
          <p className="text-base sm:text-lg text-slate-300 mt-5 leading-relaxed">
            A transparent showcase of sovereign software platforms, kernel-level defenses, and enterprise reference architectures built by our engineering teams.
          </p>
        </div>

        {/* Authenticity Notice */}
        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 mb-8 flex items-start gap-3 text-xs text-slate-300">
          <AlertCircle className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
          <span>
            <strong className="text-white">Authenticity Standard:</strong> In compliance with corporate transparency and non-disclosure standards, we clearly label projects as either <strong>Verified Implementations</strong> (our genuine platforms) or <strong>Illustrative Architectures</strong> (reference designs demonstrating technical feasibility without inventing fake clients).
          </span>
        </div>

        {/* Filter Buttons */}
        <div className="flex gap-2 mb-10">
          {['All', 'Verified', 'Illustrative'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat as any)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                filter === cat
                  ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                  : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              {cat === 'All' ? 'All Implementations' : cat === 'Verified' ? 'Verified Platforms' : 'Illustrative Architectures'}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {filteredItems.map((item) => (
            <PortfolioCard key={item.id} item={item} />
          ))}
        </div>

      </div>

      <CTASection />
    </div>
  );
};
