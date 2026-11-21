import React from 'react';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { SEOHead } from '../../components/common/SEOHead';
import { companyData } from '../../data/companyData';
import { KeyRound, ShieldCheck } from 'lucide-react';

export const IntellectualPropertyPage: React.FC = () => {
  return (
    <div className="py-12 bg-slate-950">
      <SEOHead
        title="Intellectual Property Notice - Future Finger Technologies"
        description="Comprehensive notice on trademark rights, copyright, and our 100% client intellectual property transfer policy."
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Intellectual Property Notice' }]} />

        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs text-slate-400 font-mono mb-4">
            LAST REVISED: NOVEMBER 2026 • MARKED FOR LEGAL REVIEW
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Intellectual Property Notice
          </h1>
          <p className="text-sm text-slate-400 mt-2">
            Disclosing our ownership standards, trademark rights, and 100% client IP transfer guarantee.
          </p>
        </div>

        <div className="prose prose-invert max-w-none text-xs sm:text-sm text-slate-300 space-y-6 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">1. Client Intellectual Property Guarantee</h2>
            <p>
              Unlike legacy IT vendors that retain proprietary hooks to enforce vendor lock-in, Future Finger Technologies guarantees that <strong>100% of all custom software, bespoke source code, database architectures, user interface designs, and trained machine learning pipelines</strong> developed specifically for a client become the exclusive intellectual property of the client upon final milestone settlement.
            </p>
            <p>
              Clients receive unencumbered rights to patent, copyright, license, modify, or commercially distribute their custom software without royalty obligations to Future Finger Technologies.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">2. Proprietary Trademarks & Product Names</h2>
            <p>
              The names <strong>"Future Finger Technologies"</strong>, <strong>"XShield™"</strong>, <strong>"HRLord™"</strong>, <strong>"FFT-TRACE-X™"</strong>, <strong>"Shipzyro™"</strong>, along with their respective logomarks, glyphs, and brand taglines ("Building Intelligent Technology for a Smarter Future"), are the intellectual property and common law trademarks of Future Finger Technologies. No unauthorized use or trademark registration may be filed by third parties.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">3. Open-Source Component Governance</h2>
            <p>
              We utilize and contribute to open-source software (OSS). All third-party libraries integrated into client solutions (such as React, Vite, Linux kernel modules, PostgreSQL, and PyTorch) are governed by their respective permissive licenses (MIT, Apache 2.0, BSD). We strictly avoid viral copyleft licenses (such as GPLv3) in proprietary client deliverables unless explicitly requested by the client.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">4. Infringement Inquiries & Licensing Desk</h2>
            <p>
              For IP transfer documentation, software licensing inquiries, or copyright notices, contact our Legal & IP Desk at <a href={`mailto:${companyData.contactEmail}`} className="text-cyan-400 underline">{companyData.contactEmail}</a>.
            </p>
          </section>
        </div>

      </div>
    </div>
  );
};
