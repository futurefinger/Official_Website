import React from 'react';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { SEOHead } from '../../components/common/SEOHead';
import { companyData } from '../../data/companyData';

export const RefundPolicyPage: React.FC = () => {
  return (
    <div className="py-12 bg-slate-950">
      <SEOHead
        title="Refund & Cancellation Policy - Future Finger Technologies"
        description="Policy governing project milestone billing, scope cancellations, and commercial settlements."
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Refund & Cancellation Policy' }]} />

        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs text-slate-400 font-mono mb-4">
            LAST REVISED: NOVEMBER 2026 • MARKED FOR LEGAL REVIEW
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Refund & Cancellation Policy
          </h1>
          <p className="text-sm text-slate-400 mt-2">
            Clear, transparent terms governing milestone billing, project adjustments, and commercial settlements.
          </p>
        </div>

        <div className="prose prose-invert max-w-none text-xs sm:text-sm text-slate-300 space-y-6 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">1. Milestone-Based Billing Structure</h2>
            <p>
              Future Finger Technologies structures custom software development engagements around defined technical milestones (e.g. Discovery & Architecture Sign-Off, Core Backend Development, Frontend Integration, Final QA & Deployment). Invoices are linked directly to approved deliverables defined in the signed Statement of Work (SOW).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">2. Pre-Discovery Cancellations</h2>
            <p>
              If a client requests cancellation prior to the commencement of active engineering or architecture discovery sprints, deposits are refundable subject to a deduction for administrative onboarding and technical scoping hours already logged.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">3. In-Progress Milestone Adjustments</h2>
            <p>
              Once a sprint milestone has commenced and code or architecture artifacts have been drafted, work completed up to the date of formal written cancellation notice is billed pro-rata. Any advance funds paid for future unstarted milestones are promptly remitted back to the client within 14 business days.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">4. Commercial Software Licenses (XShield™)</h2>
            <p>
              Enterprise software licenses and pilot deployments are subject to the specific evaluation terms outlined in their commercial order forms. We provide a 30-day proof-of-concept testing period for enterprise fleet deployments prior to long-term licensing commitment.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">5. Dispute Resolution & Settlement</h2>
            <p>
              We aim to resolve all billing inquiries through direct architectural consultation. For inquiries, reach our commercial billing desk at <a href={`mailto:${companyData.contactEmail}`} className="text-cyan-400 underline">{companyData.contactEmail}</a>.
            </p>
          </section>
        </div>

      </div>
    </div>
  );
};
