import React from 'react';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { SEOHead } from '../../components/common/SEOHead';
import { ProcessSection } from '../../components/sections/ProcessSection';
import { CTASection } from '../../components/sections/CTASection';
import { CheckCircle2, ShieldCheck, Terminal, GitCommit } from 'lucide-react';

export const OurProcessPage: React.FC = () => {
  return (
    <div className="py-12 bg-slate-950">
      <SEOHead
        title="Our Process - Standard Operating Procedures for Software Delivery"
        description="Our structured 6-phase engineering lifecycle: Discovery, Architecture, Agile Sprints, Cyber Hardening, Automated CI/CD, and Telemetry Governance."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Our Process' }]} />

        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800 text-xs text-cyan-300 font-mono mb-4">
            GOVERNANCE & SDLC
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Our Software Engineering Process
          </h1>
          <p className="text-base sm:text-lg text-slate-300 mt-5 leading-relaxed">
            Predictability in software engineering is the result of strict process discipline. We utilize a proven 6-stage lifecycle that eliminates ambiguity and ensures reliable outcomes.
          </p>
        </div>
      </div>

      <ProcessSection />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
            <div className="flex items-center gap-3">
              <GitCommit className="w-6 h-6 text-cyan-400" />
              <h3 className="text-xl font-bold text-white">Sprint Velocity & Transparency</h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              We operate in two-week agile development cycles. At the end of each sprint, your stakeholders receive an interactive demonstrable build, updated sprint release notes, and a recorded architectural walkthrough.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-emerald-400" />
              <h3 className="text-xl font-bold text-white">Pre-Release Security Gate</h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              No code is deployed to production without passing comprehensive vulnerability assessments, OWASP Top 10 scans, dependency audits, and accessibility compliance verification.
            </p>
          </div>
        </div>
      </div>

      <CTASection />
    </div>
  );
};
