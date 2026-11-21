import React from 'react';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { SEOHead } from '../../components/common/SEOHead';
import { companyData } from '../../data/companyData';

export const CookiePolicyPage: React.FC = () => {
  return (
    <div className="py-12 bg-slate-950">
      <SEOHead
        title="Cookie Policy - Future Finger Technologies"
        description="Cookie and local storage policy of Future Finger Technologies corporate website."
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Cookie Policy' }]} />

        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs text-slate-400 font-mono mb-4">
            LAST REVISED: NOVEMBER 2026 • MARKED FOR LEGAL REVIEW
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Cookie Policy
          </h1>
          <p className="text-sm text-slate-400 mt-2">
            Details of cookie usage, local cache storage, and telemetry settings on this website.
          </p>
        </div>

        <div className="prose prose-invert max-w-none text-xs sm:text-sm text-slate-300 space-y-6 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">1. Minimalist Cookie Architecture</h2>
            <p>
              Future Finger Technologies adheres to a privacy-first engineering philosophy. We do not use intrusive third-party cross-site advertising cookies, behavioral tracking pixels, or fingerprinting scripts on our official corporate website.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">2. Essential Technical Storage</h2>
            <p>We utilize strictly necessary browser storage mechanisms for essential website functionality:</p>
            <ul className="list-disc pl-5 space-y-1 text-slate-400">
              <li><strong>UI Session State:</strong> Remembering search modal status, theme preferences, and form input preservation during multi-step navigation.</li>
              <li><strong>Security Tokens & Anti-Abuse:</strong> Protecting inquiry forms against automated robotic spam and cross-site request forgery.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">3. Managing Preferences in Your Browser</h2>
            <p>
              You can configure your browser to reject cookies or clear local storage cache at any time through your browser's security settings. Because our cookies are strictly operational, disabling them will not prevent you from browsing our service specifications or reading our engineering insights.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">4. Inquiries</h2>
            <p>
              For questions regarding our storage practices, email <a href={`mailto:${companyData.contactEmail}`} className="text-cyan-400 underline">{companyData.contactEmail}</a>.
            </p>
          </section>
        </div>

      </div>
    </div>
  );
};
