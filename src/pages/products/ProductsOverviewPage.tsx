import React from 'react';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { SEOHead } from '../../components/common/SEOHead';
import { ProductCard } from '../../components/cards/ProductCard';
import { CTASection } from '../../components/sections/CTASection';
import { productsData } from '../../data/productsData';
import { ShieldCheck, Bot, Cpu, AlertCircle } from 'lucide-react';

export const ProductsOverviewPage: React.FC = () => {
  return (
    <div className="py-12 bg-slate-950">
      <SEOHead
        title="Products & Solutions - Proprietary Software Platforms"
        description="Explore Future Finger Technologies' software suites: XShield™ endpoint security, HRLord™ workforce management, FFT-TRACE-X™ cyber forensics, and Shipzyro™ logistics."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Products' }]} />

        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800 text-xs text-cyan-300 font-mono mb-4">
            PROPRIETARY PLATFORMS & LABS
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Our Products & Solutions Portfolio
          </h1>
          <p className="text-base sm:text-lg text-slate-300 mt-5 leading-relaxed">
            In addition to custom engineering services, Future Finger Technologies designs and maintains specialized sovereign software products built for defense, workforce operations, logistics, and applied intelligence.
          </p>
        </div>

        {/* Verification Status Notice */}
        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 mb-12 flex items-start gap-3 text-xs text-slate-300">
          <AlertCircle className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
          <span>
            <strong className="text-white">Product Transparency Commitment:</strong> We clearly designate release readiness (Live, Beta, Development, Planned) across all proprietary software. Development and Beta products are available for authorized enterprise pilot trials.
          </span>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {productsData.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>

      <CTASection />
    </div>
  );
};
