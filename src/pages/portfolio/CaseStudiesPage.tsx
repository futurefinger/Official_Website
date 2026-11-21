import React from 'react';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { SEOHead } from '../../components/common/SEOHead';
import { PortfolioCard } from '../../components/cards/PortfolioCard';
import { CTASection } from '../../components/sections/CTASection';
import { portfolioData } from '../../data/portfolioData';

export const CaseStudiesPage: React.FC = () => {
  return (
    <div className="py-12 bg-slate-950">
      <SEOHead
        title="Case Studies - Enterprise Software & Security Implementations"
        description="Detailed technical case studies highlighting problem statements, system architectures, and benchmark metrics."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Portfolio', path: '/portfolio' }, { label: 'Case Studies' }]} />

        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800 text-xs text-cyan-300 font-mono mb-4">
            TECHNICAL CASE STUDIES
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Case Studies & Solutions Architecture
          </h1>
          <p className="text-base sm:text-lg text-slate-300 mt-5 leading-relaxed">
            In-depth breakdowns of real-world bottlenecks solved through our sovereign engineering practices.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {portfolioData.map((item) => (
            <PortfolioCard key={item.id} item={item} />
          ))}
        </div>

      </div>

      <CTASection />
    </div>
  );
};
