import React from 'react';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { SEOHead } from '../../components/common/SEOHead';
import { CTASection } from '../../components/sections/CTASection';
import { companyData } from '../../data/companyData';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const OurApproachPage: React.FC = () => {
  return (
    <div className="py-12 bg-slate-950">
      <SEOHead
        title="Our Approach - Engineering Methodology & Software Lifecycle"
        description="Explore Future Finger Technologies' 6-stage software engineering lifecycle, from deep architectural discovery to SLA-backed production governance."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'About Us', path: '/about' }, { label: 'Our Approach' }]} />

        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800 text-xs text-cyan-300 font-mono mb-4">
            METHODOLOGY & GOVERNANCE
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Our Engineering Approach
          </h1>
          <p className="text-base sm:text-lg text-slate-300 mt-5 leading-relaxed">
            We reject ad-hoc, uncontrolled coding in favor of a disciplined, architecture-first software lifecycle designed to guarantee predictability, security, and long-term maintainability.
          </p>
        </div>

        {/* Deep Dive into 6 Phases */}
        <div className="space-y-8 mb-20">
          {companyData.approachSteps.map((step, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 grid grid-cols-1 md:grid-cols-12 gap-6 items-start"
            >
              <div className="md:col-span-3">
                <div className="text-4xl font-black font-mono text-cyan-400 mb-1">
                  {step.step}
                </div>
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  Typical Duration: {step.duration}
                </div>
              </div>

              <div className="md:col-span-9 space-y-3">
                <h3 className="text-xl font-bold text-white">
                  {step.phase}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {step.summary}
                </p>
                <div className="pt-2 text-xs text-cyan-400 font-medium flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Formal Gate Review & Milestone Sign-Off Required Prior to Next Phase</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quality Principles */}
        <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 mb-20 space-y-6">
          <h2 className="text-2xl font-bold text-white">Non-Negotiable Quality Standards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-300">
            <div className="space-y-2">
              <strong className="text-white block font-semibold">1. Zero Regression CI/CD Gates:</strong>
              <p className="text-xs text-slate-400">All code merged to main must pass automated TypeScript compilation, ESLint audits, unit tests, and vulnerability checks.</p>
            </div>
            <div className="space-y-2">
              <strong className="text-white block font-semibold">2. Cryptographic Integrity:</strong>
              <p className="text-xs text-slate-400">All distributed binaries and releases are Authenticode cryptographically signed and checksummed with SHA-256 hashes.</p>
            </div>
            <div className="space-y-2">
              <strong className="text-white block font-semibold">3. Transparent Sprint Backlogs:</strong>
              <p className="text-xs text-slate-400">Clients receive bi-weekly demonstrable software increments, maintaining continuous visibility over velocity and deliverables.</p>
            </div>
            <div className="space-y-2">
              <strong className="text-white block font-semibold">4. Complete Source Code Handoff:</strong>
              <p className="text-xs text-slate-400">Full source code, Git revision history, architecture documentation, and deployment playbooks are provided at completion.</p>
            </div>
          </div>
        </div>

      </div>

      <CTASection />
    </div>
  );
};
