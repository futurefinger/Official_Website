import React from 'react';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { SEOHead } from '../../components/common/SEOHead';
import { companyData } from '../../data/companyData';

export const TermsConditionsPage: React.FC = () => {
  return (
    <div className="py-12 bg-slate-950">
      <SEOHead
        title="Terms & Conditions - Future Finger Technologies"
        description="Legal terms and conditions governing software development services, website usage, and proprietary platform licensing."
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Terms & Conditions' }]} />

        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs text-slate-400 font-mono mb-4">
            LAST REVISED: NOVEMBER 2026 • MARKED FOR LEGAL REVIEW
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Terms & Conditions
          </h1>
          <p className="text-sm text-slate-400 mt-2">
            Contractual framework governing interactions, software discovery, and corporate engineering engagements.
          </p>
        </div>

        <div className="prose prose-invert max-w-none text-xs sm:text-sm text-slate-300 space-y-6 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">1. Acceptance of Terms</h2>
            <p>
              By accessing the website of Future Finger Technologies or initiating project inquiry forms, you agree to be bound by these Terms and Conditions and our Privacy Policy. If you do not agree with any provision, you must discontinue access to this website immediately.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">2. Scope of Services & Statements of Work (SOW)</h2>
            <p>
              Informational materials published on this website do not constitute a binding unilateral contract. All bespoke software engineering, enterprise deployments, and consulting engagements are governed by formal, bilateral Statements of Work (SOW) and Service Level Agreements (SLA) executed between authorized signatories.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">3. Intellectual Property Transfer Standards</h2>
            <p>
              For custom software development engagements, Future Finger Technologies transfers 100% full intellectual property rights, source code, and design assets to the client upon full commercial settlement of agreed milestone deliverables. Pre-existing proprietary libraries (such as XShield™ core drivers) remain under commercial enterprise license terms as specified in individual agreements.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">4. Permitted Use of Website Content</h2>
            <p>
              The text, branding, visual identity, and code of this website are the property of Future Finger Technologies. You may not reproduce, scrape, mirror, or repackage our content, product specifications, or visual branding without prior written authorization.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">5. Governing Law and Exclusive Jurisdiction</h2>
            <p>
              These Terms and any contractual disputes arising from services rendered shall be governed exclusively by the laws of the <strong>Republic of India</strong>. All legal proceedings shall be instituted solely within the competent courts of <strong>New Delhi, India</strong>.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">6. Inquiries Regarding Terms</h2>
            <p>
              For questions regarding these Terms or contractual engagement models, contact our legal desk at <a href={`mailto:${companyData.contactEmail}`} className="text-cyan-400 underline">{companyData.contactEmail}</a>.
            </p>
          </section>
        </div>

      </div>
    </div>
  );
};
