import React from 'react';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { SEOHead } from '../../components/common/SEOHead';
import { QuoteRequestForm } from '../../components/forms/QuoteRequestForm';
import { DollarSign, Clock, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const RequestQuotePage: React.FC = () => {
  return (
    <div className="py-12 bg-slate-950">
      <SEOHead
        title="Request a Quote - Fixed Scope & Dedicated Pod Estimates"
        description="Submit your enterprise software or AI automation requirements to receive an itemized, transparent project estimate."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Contact', path: '/contact' }, { label: 'Request a Quote' }]} />

        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800 text-xs text-cyan-300 font-mono mb-4">
            TRANSPARENT PROJECT ESTIMATION
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Request an Architectural Quotation
          </h1>
          <p className="text-base sm:text-lg text-slate-300 mt-5 leading-relaxed">
            Provide the parameters of your project below. Our principal software architect will review your technical scope, recommend optimal technologies, and furnish a structured milestone estimate within 24 hours.
          </p>
        </div>

        {/* Estimation Process Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
            <span className="text-xs font-mono font-bold text-cyan-400 uppercase">Phase 1</span>
            <div className="text-sm font-bold text-white">Feasibility Assessment</div>
            <p className="text-xs text-slate-400">Detailed technical discovery of schemas, APIs, and attack surfaces.</p>
          </div>
          <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
            <span className="text-xs font-mono font-bold text-brand-400 uppercase">Phase 2</span>
            <div className="text-sm font-bold text-white">Milestone Roadmap</div>
            <p className="text-xs text-slate-400">Fixed-scope sprints with demonstrable deliverables every two weeks.</p>
          </div>
          <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
            <span className="text-xs font-mono font-bold text-emerald-400 uppercase">Phase 3</span>
            <div className="text-sm font-bold text-white">Guaranteed IP Transfer</div>
            <p className="text-xs text-slate-400">100% full source code and asset ownership transferred upon completion.</p>
          </div>
        </div>

        <div className="mb-20">
          <QuoteRequestForm />
        </div>

      </div>
    </div>
  );
};
