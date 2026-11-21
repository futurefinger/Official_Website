import React from 'react';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { SEOHead } from '../../components/common/SEOHead';
import { ContactForm } from '../../components/forms/ContactForm';
import { Handshake, Shield, Network, Globe } from 'lucide-react';

export const PartnershipsPage: React.FC = () => {
  return (
    <div className="py-12 bg-slate-950">
      <SEOHead
        title="Partnership Opportunities - Technology & Enterprise Alliances"
        description="Partner with Future Finger Technologies: System integration, technology licensing, security resale, and enterprise joint ventures."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Partnerships' }]} />

        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800 text-xs text-cyan-300 font-mono mb-4">
            STRATEGIC ALLIANCES
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Partnership Opportunities
          </h1>
          <p className="text-base sm:text-lg text-slate-300 mt-5 leading-relaxed">
            We collaborate with enterprise IT consultants, regional systems integrators, and software distributors to deliver sovereign cybersecurity, workforce automation, and custom platforms globally.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
            <Shield className="w-6 h-6 text-cyan-400" />
            <h3 className="font-bold text-white text-base">Security Software Reseller & MSSP</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Distribute XShield™ enterprise endpoint security to corporate clients with co-branded tenant portals and margin sharing.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
            <Network className="w-6 h-6 text-brand-400" />
            <h3 className="font-bold text-white text-base">Systems Integrators</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Integrate HRLord™ biometric hardware daemons and Shipzyro™ logistics APIs into existing ERP implementations.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
            <Globe className="w-6 h-6 text-emerald-400" />
            <h3 className="font-bold text-white text-base">International Joint Ventures</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Partner with our New Delhi engineering pod to deliver dedicated, high-capability offshore software development centers.
            </p>
          </div>
        </div>

        <div className="mb-20">
          <div className="max-w-3xl mb-6">
            <h2 className="text-2xl font-bold text-white">Initiate a Strategic Partnership Discussion</h2>
            <p className="text-xs sm:text-sm text-slate-400">Please provide your organization's background and proposed alliance structure.</p>
          </div>
          <ContactForm defaultSubject="Strategic Partnership Inquiry" />
        </div>

      </div>
    </div>
  );
};
