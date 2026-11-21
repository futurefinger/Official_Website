import React from 'react';
import { ShieldCheck, Cpu, KeyRound, Award } from 'lucide-react';

export const StatsBanner: React.FC = () => {
  const stats = [
    {
      icon: KeyRound,
      value: '100%',
      label: 'Intellectual Property Ownership',
      detail: 'Full source code & asset transfer with zero vendor lock-in'
    },
    {
      icon: ShieldCheck,
      value: 'Ring 0',
      label: 'Sovereign Kernel Defense',
      detail: 'XShield™ Windows minifilter real-time I/O sentry'
    },
    {
      icon: Cpu,
      value: 'Deterministic',
      label: 'Schema-Validated AI Agents',
      detail: 'Zero-hallucination RAG with verifiable audit trails'
    },
    {
      icon: Award,
      value: '99.9%',
      label: 'Production SLA Resilience',
      detail: 'Targeted uptime with automated CI/CD rollback protection'
    }
  ];

  return (
    <section className="py-12 border-y border-slate-800/80 bg-slate-950/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-slate-900/40 border border-slate-800/60">
                <div className="p-3 rounded-xl bg-slate-800 text-cyan-400 border border-slate-700/60 flex-shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-2xl font-black font-mono text-white tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs font-semibold text-slate-200 mt-0.5">
                    {stat.label}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1 leading-snug">
                    {stat.detail}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
