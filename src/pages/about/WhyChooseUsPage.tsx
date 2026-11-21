import React from 'react';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { SEOHead } from '../../components/common/SEOHead';
import { CTASection } from '../../components/sections/CTASection';
import { ShieldCheck, Cpu, KeyRound, Award, CheckCircle2, XCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export const WhyChooseUsPage: React.FC = () => {
  const comparisonItems = [
    {
      factor: 'Intellectual Property Rights',
      futureFinger: '100% full IP and source code transfer upon completion',
      others: 'Recurring vendor lock-in, proprietary licensing royalties, or withheld code'
    },
    {
      factor: 'Cybersecurity Architecture',
      futureFinger: 'Kernel Minifilter sentries (Ring 0), Authenticode signing & audit vaults',
      others: 'Generic off-the-shelf antivirus scripts or zero driver protection'
    },
    {
      factor: 'AI & Automation Engineering',
      futureFinger: 'Deterministic schema enforcement, private RAG & zero-hallucination guardrails',
      others: 'Unvalidated prompts, high error rates, and public model data leaks'
    },
    {
      factor: 'Code Quality & Type Safety',
      futureFinger: 'Strict TypeScript across all tiers, modular components & CI/CD test gates',
      others: 'Unchecked JavaScript, bloated monolithic templates, and hidden technical debt'
    },
    {
      factor: 'Claims & Authenticity',
      futureFinger: 'Verified deliverables, authentic case studies, zero fake statistics or awards',
      others: 'Fabricated partner logos, inflated employee counts, and fake testimonials'
    },
    {
      factor: 'Post-Deployment Governance',
      futureFinger: 'SLA-backed uptime guarantees, proactive security patching & monitoring',
      others: 'Abandoned post-launch support or unmanaged hourly billing traps'
    }
  ];

  return (
    <div className="py-12 bg-slate-950">
      <SEOHead
        title="Why Choose Future Finger Technologies - Authentic Technical Distinction"
        description="Discover why leading enterprises choose Future Finger Technologies: uncompromised IP transfer, sovereign cyber defense, and deterministic AI systems."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'About Us', path: '/about' }, { label: 'Why Choose Us' }]} />

        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800 text-xs text-cyan-300 font-mono mb-4">
            COMPETITIVE DISTINCTION
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Why Future Finger Technologies
          </h1>
          <p className="text-base sm:text-lg text-slate-300 mt-5 leading-relaxed">
            In an industry saturated with superficial templates and exaggerated marketing claims, Future Finger Technologies stands apart through rigorous software engineering, verifiable security architectures, and genuine client partnerships.
          </p>
        </div>

        {/* Detailed Comparison Table */}
        <div className="mb-20 overflow-x-auto">
          <h2 className="text-2xl font-bold text-white mb-6">
            The Architectural Difference
          </h2>
          <div className="min-w-[640px] rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden shadow-2xl">
            <div className="grid grid-cols-12 bg-slate-950/80 p-4 border-b border-slate-800 text-xs font-bold uppercase tracking-wider text-slate-400">
              <div className="col-span-4">Evaluation Criteria</div>
              <div className="col-span-4 text-cyan-400">Future Finger Technologies</div>
              <div className="col-span-4 text-slate-400">Typical Agency / Legacy Vendors</div>
            </div>

            <div className="divide-y divide-slate-800/80">
              {comparisonItems.map((item, idx) => (
                <div key={idx} className="grid grid-cols-12 p-4 text-xs sm:text-sm items-center hover:bg-slate-800/40 transition-colors">
                  <div className="col-span-4 font-semibold text-white pr-4">
                    {item.factor}
                  </div>
                  <div className="col-span-4 text-slate-200 pr-4 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>{item.futureFinger}</span>
                  </div>
                  <div className="col-span-4 text-slate-400 flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-rose-500/70 flex-shrink-0 mt-0.5" />
                    <span>{item.others}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      <CTASection />
    </div>
  );
};
