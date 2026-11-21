import React from 'react';
import { ShieldCheck, MapPin, Mail, Github, FileText, CheckCircle2 } from 'lucide-react';
import { SEOHead } from '../../components/common/SEOHead';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { CTASection } from '../../components/sections/CTASection';
import { companyData } from '../../data/companyData';

export const OurCompanyPage: React.FC = () => {
  return (
    <div className="py-12 bg-slate-950">
      <SEOHead
        title="Our Company - Corporate Profile & Sovereign Technology Identity"
        description="Corporate identity, principal legal jurisdiction, verified contacts, and operational foundation of Future Finger Technologies."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'About Us', path: '/about' }, { label: 'Our Company' }]} />

        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800 text-xs text-cyan-300 font-mono mb-4">
            CORPORATE PROFILE
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Our Company & Foundation
          </h1>
          <p className="text-base sm:text-lg text-slate-300 mt-5 leading-relaxed">
            Future Finger Technologies is an engineering-first technology solutions provider based in New Delhi, India. We architect custom software, develop sovereign cybersecurity products, and automate complex workflows for ambitious enterprises.
          </p>
        </div>

        {/* Corporate Profile Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-7 p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-6">
            <h2 className="text-2xl font-bold text-white">Sovereign Technology Architecture</h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              We were founded to challenge the status quo of bloated, non-performant agency software. Too often, enterprises are locked into recurring proprietary licenses or left with fragile codebases that cannot withstand scale or adversarial cyber threats.
            </p>
            <p className="text-sm text-slate-300 leading-relaxed">
              Our engineering philosophy centers on **Sovereignty**: our clients maintain full unencumbered ownership of their source code, run on open modern standards (TypeScript, Linux, PostgreSQL, Docker), and benefit from cybersecurity hardened at the kernel layer (exemplified by our XShield™ security platform).
            </p>

            <div className="space-y-3 pt-4 border-t border-slate-800">
              <div className="flex items-center gap-3 text-sm text-slate-200">
                <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                <span>Zero fabricated metrics, fake certifications, or unverified claims.</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-200">
                <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                <span>Transparent fixed-price milestone and dedicated engineering pod agreements.</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-200">
                <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                <span>Indian IT Act 2000 Section 65B legal evidentiary compliance.</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 p-8 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-6">
            <h3 className="text-lg font-bold text-white">Verified Corporate Details</h3>
            
            <div className="space-y-4 text-xs sm:text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">Principal Jurisdiction</div>
                  <div className="text-slate-400">{companyData.jurisdiction}</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">Corporate Inquiry Email</div>
                  <a href={`mailto:${companyData.contactEmail}`} className="text-cyan-400 hover:underline">
                    {companyData.contactEmail}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Github className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">Official GitHub Presence</div>
                  <a href={companyData.githubOrg} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
                    github.com/futurefinger
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FileText className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">Statutory Regulatory Compliance</div>
                  <div className="text-slate-400">Information Technology Act 2000 & Export Standards</div>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-400">
              <span className="font-semibold text-white block mb-1">Authenticity Policy:</span>
              Future Finger Technologies publishes only verified business information. All legal agreements are subjected to jurisdiction in New Delhi, India.
            </div>
          </div>
        </div>

      </div>

      <CTASection />
    </div>
  );
};
