import React from 'react';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { SEOHead } from '../../components/common/SEOHead';
import { CTASection } from '../../components/sections/CTASection';
import { Sparkles, Shield, Bot, Cpu, Network, Terminal, CheckCircle2 } from 'lucide-react';

export const TechnologyInnovationPage: React.FC = () => {
  return (
    <div className="py-12 bg-slate-950">
      <SEOHead
        title="Technology & Innovation - Applied R&D Labs"
        description="Applied R&D roadmap at Future Finger Technologies: Kernel sentry drivers, deterministic AI orchestration, and cryptographic forensic verification."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Technology & Innovation' }]} />

        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800 text-xs text-cyan-300 font-mono mb-4">
            APPLIED R&D INITIATIVES
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Technology & Innovation Labs
          </h1>
          <p className="text-base sm:text-lg text-slate-300 mt-5 leading-relaxed">
            Where research meets production code. Our internal R&D pod explores high-consequence frontiers in systems engineering, low-level kernel drivers, and autonomous agent coordination.
          </p>
        </div>

        {/* 3 Research Focus Areas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
            <Shield className="w-8 h-8 text-cyan-400" />
            <h2 className="text-xl font-bold text-white">Ring 0 Kernel Sentry Research</h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Advancing file system minifilter drivers to detect memory injection, BYOVD attacks, and anomalous disk entropy at sub-millisecond thresholds.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
            <Bot className="w-8 h-8 text-brand-400" />
            <h2 className="text-xl font-bold text-white">Deterministic Multi-Agent Swarms</h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Developing mathematically constrained autonomous agents that operate in shared memory boards, eliminating hallucinated function calls and token bloat.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
            <Cpu className="w-8 h-8 text-emerald-400" />
            <h2 className="text-xl font-bold text-white">Cryptographic Forensics & Chain-of-Custody</h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Hardware-bound cryptographic telemetry logging compliant with Section 65B of the Indian Evidence Act, ensuring court-admissible digital artifacts.
            </p>
          </div>
        </div>

        {/* 2026-2027 Innovation Roadmap */}
        <div className="p-8 sm:p-10 rounded-2xl bg-slate-900/60 border border-slate-800 mb-20 space-y-6">
          <h2 className="text-2xl font-bold text-white">
            2026 — 2027 R&D Roadmap Milestones
          </h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-950 border border-slate-800">
              <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-mono font-bold text-cyan-300 uppercase">Q4 2026 — Completed</span>
                <h3 className="text-sm font-semibold text-white mt-0.5">XShield™ Enterprise v2.5.6 Release</h3>
                <p className="text-xs text-slate-400 mt-1">Full Windows Kernel Minifilter Driver Sentry deployed with Authenticode signing and silent tray HUD protocol.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-950 border border-slate-800">
              <CheckCircle2 className="w-5 h-5 text-brand-400 flex-shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-mono font-bold text-brand-300 uppercase">Q1 2027 — In Progress</span>
                <h3 className="text-sm font-semibold text-white mt-0.5">FFT-TRACE-X™ Multi-Hop Ledger Graph Correlation</h3>
                <p className="text-xs text-slate-400 mt-1">Asynchronous financial trail graph analysis for fraud tracking and forensic regulatory filings.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-950 border border-slate-800">
              <CheckCircle2 className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-mono font-bold text-indigo-300 uppercase">Q2 2027 — Planned</span>
                <h3 className="text-sm font-semibold text-white mt-0.5">Universal Biometric Hardware Cloud Gateway (HRLord™ v2)</h3>
                <p className="text-xs text-slate-400 mt-1">Plug-and-play edge IoT box connecting any analog biometric terminal directly to encrypted cloud ledgers.</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      <CTASection />
    </div>
  );
};
