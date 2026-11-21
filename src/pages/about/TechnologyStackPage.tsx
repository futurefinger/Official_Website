import React from 'react';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { SEOHead } from '../../components/common/SEOHead';
import { TechStackSection } from '../../components/sections/TechStackSection';
import { CTASection } from '../../components/sections/CTASection';
import { companyData } from '../../data/companyData';

export const TechnologyStackPage: React.FC = () => {
  return (
    <div className="py-12 bg-slate-950">
      <SEOHead
        title="Our Technology Stack - Modern Engineering Standards"
        description="Comprehensive overview of Future Finger Technologies' software stack: React, TypeScript, Node.js, Python, PostgreSQL, Docker, and Windows Kernel Minifilters."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'About Us', path: '/about' }, { label: 'Technology Stack' }]} />

        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800 text-xs text-cyan-300 font-mono mb-4">
            ENGINEERING STACK & TOOLS
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Our Enterprise Technology Stack
          </h1>
          <p className="text-base sm:text-lg text-slate-300 mt-5 leading-relaxed">
            We evaluate and adopt technologies based on performance, type safety, ecosystem maturity, and security auditability. We never adopt trends that jeopardize long-term stability.
          </p>
        </div>
      </div>

      <TechStackSection />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
          <h2 className="text-2xl font-bold text-white">Stack Selection Principles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm text-slate-300">
            <div>
              <strong className="text-white block font-semibold mb-1">Type-Safety by Default</strong>
              <p className="text-slate-400">TypeScript and strict static types ensure that schema violations and edge-case exceptions are caught at build-time rather than in production.</p>
            </div>
            <div>
              <strong className="text-white block font-semibold mb-1">Open Cloud Standards</strong>
              <p className="text-slate-400">Docker containers, PostgreSQL relational storage, and OpenAPI specifications allow our software to be deployed across any cloud or air-gapped server.</p>
            </div>
            <div>
              <strong className="text-white block font-semibold mb-1">Defensive Reliability</strong>
              <p className="text-slate-400">Authenticode signatures and kernel minifilters establish verifiable hardware-bound security across endpoint systems.</p>
            </div>
          </div>
        </div>
      </div>

      <CTASection />
    </div>
  );
};
