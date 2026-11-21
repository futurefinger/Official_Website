import React from 'react';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { SEOHead } from '../../components/common/SEOHead';
import { companyData } from '../../data/companyData';
import { AlertTriangle } from 'lucide-react';

export const DisclaimerPage: React.FC = () => {
  return (
    <div className="py-12 bg-slate-950">
      <SEOHead
        title="Disclaimer - Future Finger Technologies"
        description="Legal disclaimer regarding software warranties, technical representations, and illustrative case study disclosures."
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Disclaimer' }]} />

        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs text-slate-400 font-mono mb-4">
            LAST REVISED: NOVEMBER 2026 • MARKED FOR LEGAL REVIEW
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Corporate Disclaimer
          </h1>
          <p className="text-sm text-slate-400 mt-2">
            Disclosures concerning technical representations, illustrative solution architectures, and limitation of liability.
          </p>
        </div>

        <div className="prose prose-invert max-w-none text-xs sm:text-sm text-slate-300 space-y-6 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">1. Authenticity & Illustrative Solutions Disclosure</h2>
            <p>
              Future Finger Technologies is committed to radical authenticity. We do not invent client partnerships, publish fabricated customer statistics, or display unverified certificates. Where client confidentiality agreements prevent the disclosure of proprietary client names, case studies are explicitly marked as <strong>"Illustrative Architectures"</strong> to demonstrate technical feasibility without misleading the public.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">2. No Guarantee of Specific Search Engine Rankings</h2>
            <p>
              While our SEO engineering strictly implements technical schema markup, Core Web Vitals optimization, and semantic HTML to maximize crawl efficiency, we do not make guarantees of specific numeric rankings on Google or any search engine. Search engine algorithms operate autonomously and are subject to continuous algorithmic updates.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">3. Cybersecurity Software Warranties (XShield™)</h2>
            <p>
              Our cybersecurity software platforms—including XShield™—are engineered to the highest sovereign security standards utilizing Windows Kernel Minifilter Driver Sentries and behavioral heuristics. However, no software can guarantee 100% immunity against all theoretically possible zero-day vulnerabilities, novel side-channel attacks, or physical hardware tampering. Security relies upon defense-in-depth, regular updates, and disciplined administrative practices.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">4. Limitation of Liability</h2>
            <p>
              Under no circumstances shall Future Finger Technologies or its officers be liable for indirect, incidental, punitive, or consequential damages resulting from the use or inability to use materials on this website, except as expressly provided in formal bilateral service contracts.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">5. Questions & Legal Inquiries</h2>
            <p>
              For legal clarification regarding these disclosures, reach out to <a href={`mailto:${companyData.contactEmail}`} className="text-cyan-400 underline">{companyData.contactEmail}</a>.
            </p>
          </section>
        </div>

      </div>
    </div>
  );
};
