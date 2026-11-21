import React from 'react';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { SEOHead } from '../../components/common/SEOHead';
import { companyData } from '../../data/companyData';
import { ShieldCheck, AlertCircle } from 'lucide-react';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="py-12 bg-slate-950">
      <SEOHead
        title="Privacy Policy - Future Finger Technologies"
        description="Privacy policy and data protection standards of Future Finger Technologies under the Information Technology Act 2000."
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />

        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs text-slate-400 font-mono mb-4">
            LAST REVISED: NOVEMBER 2026 • MARKED FOR LEGAL REVIEW
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Privacy Policy
          </h1>
          <p className="text-sm text-slate-400 mt-2">
            Governing the collection, processing, and protection of corporate and personal data by Future Finger Technologies.
          </p>
        </div>

        {/* Legal Disclaimer Alert */}
        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 mb-8 flex items-start gap-3 text-xs text-slate-400">
          <AlertCircle className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
          <span>
            <strong>Legal Notice:</strong> This privacy document is formulated for the business operations of Future Finger Technologies under Indian jurisdiction (New Delhi). It outlines our strict non-monetization of client data and enterprise data security protocols.
          </span>
        </div>

        <div className="prose prose-invert max-w-none text-xs sm:text-sm text-slate-300 space-y-6 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">1. Scope and Controller Information</h2>
            <p>
              Future Finger Technologies ("Company", "we", "us", or "our") acts as the data controller for information collected through this corporate website and associated service discovery portals. Principal legal and dispute jurisdiction resides in <strong>New Delhi, Republic of India</strong>, in compliance with the Information Technology Act 2000 (and amendments) and applicable Digital Personal Data Protection standards.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">2. Categories of Information Processed</h2>
            <p>We process information only to the extent necessary to provide technical consultation, execute software engineering agreements, and ensure software platform security:</p>
            <ul className="list-disc pl-5 space-y-1 text-slate-400">
              <li><strong>Inquiry & Project Data:</strong> Name, work email address, company name, telephone number, budget parameters, and technical scope submissions.</li>
              <li><strong>Telemetry & Security Data (XShield™):</strong> For verified enterprise endpoint deployments, strictly anonymized cryptographic hardware hashes, driver sentry logs, and threat behavioral telemetry are archived to verify payload neutralization and satisfy Section 65B legal evidentiary preservation. No private personal documents are inspected.</li>
              <li><strong>Technical Diagnostics:</strong> Browser type, anonymized IP addresses, and routing metadata necessary to prevent distributed denial-of-service (DDoS) and automated form abuse.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">3. Zero Data Monetization Commitment</h2>
            <p>
              Future Finger Technologies does not sell, rent, lease, or monetize client data, email addresses, or proprietary technical documentation to third-party advertisers, data brokers, or external AI model training consortiums. All data remains exclusively within secured, isolated environments.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">4. Data Retention & Cryptographic Security</h2>
            <p>
              We enforce industry-standard security controls including TLS 1.3 encryption in transit, AES-256 encryption at rest, and least-privilege administrative access policies. Business inquiry records are retained only for the duration required to service your project or fulfill statutory accounting obligations.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">5. Exercise of Data Subject Rights</h2>
            <p>
              You have the right to request access to, rectification of, or erasure of your professional contact details from our inquiry registry. Such requests may be submitted directly to our Data Privacy Desk at <a href={`mailto:${companyData.contactEmail}`} className="text-cyan-400 underline">{companyData.contactEmail}</a>.
            </p>
          </section>
        </div>

      </div>
    </div>
  );
};
