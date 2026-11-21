import React from 'react';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { SEOHead } from '../../components/common/SEOHead';
import { ConsultationForm } from '../../components/forms/ConsultationForm';
import { Video, Calendar, Clock, CheckCircle2 } from 'lucide-react';

export const BookConsultationPage: React.FC = () => {
  return (
    <div className="py-12 bg-slate-950">
      <SEOHead
        title="Book an Architecture Consultation - 30-Min Technical Discovery"
        description="Schedule a complimentary 30-minute architectural consultation call with our solutions engineering team."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Contact', path: '/contact' }, { label: 'Book a Consultation' }]} />

        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800 text-xs text-cyan-300 font-mono mb-4">
            COMPLIMENTARY TECHNICAL DISCOVERY
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Book an Architectural Consultation
          </h1>
          <p className="text-base sm:text-lg text-slate-300 mt-5 leading-relaxed">
            Schedule a focused 30-minute video session with our senior solutions architect. Discuss system trade-offs, technology selection, cybersecurity postures, or migration strategies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
              <h2 className="text-xl font-bold text-white">What We Cover in 30 Minutes</h2>
              <div className="space-y-3 text-xs sm:text-sm text-slate-300">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>Technical feasibility and architectural trade-offs</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>AI Agent determinism vs. generative hallucination risks</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>Endpoint ransomware resilience & Windows kernel sentry evaluation</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>Budget estimation and milestone timeline feasibility</span>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 text-xs text-slate-400">
              <strong className="text-white block mb-1">Direct Engineering Dialogue:</strong>
              You will speak directly with a software architect or systems engineer, not a high-pressure sales representative.
            </div>
          </div>

          <div className="lg:col-span-7">
            <ConsultationForm />
          </div>
        </div>

      </div>
    </div>
  );
};
