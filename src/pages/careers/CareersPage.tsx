import React from 'react';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { SEOHead } from '../../components/common/SEOHead';
import { CTASection } from '../../components/sections/CTASection';
import { companyData } from '../../data/companyData';
import { Briefcase, MapPin, Clock, ArrowRight, CheckCircle2, Mail } from 'lucide-react';

export const CareersPage: React.FC = () => {
  return (
    <div className="py-12 bg-slate-950">
      <SEOHead
        title="Careers - Join Our Engineering Pods"
        description="Explore open engineering positions at Future Finger Technologies in Full-Stack, AI Architecture, and Windows Systems Security."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Careers' }]} />

        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800 text-xs text-cyan-300 font-mono mb-4">
            TALENT & CULTURE
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Build Sovereign Technology with Us
          </h1>
          <p className="text-base sm:text-lg text-slate-300 mt-5 leading-relaxed">
            We are looking for thoughtful, disciplined engineers who love solving hard systems problems—from kernel driver interception to large-scale distributed architectures.
          </p>
        </div>

        {/* Culture Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
            <h3 className="font-bold text-white text-base">Engineering-First Leadership</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Decisions are made by technical architects, not layers of bureaucratic management. Clean code and architectural elegance are celebrated.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
            <h3 className="font-bold text-white text-base">Deep Technical Ownership</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Every engineer owns end-to-end features, from schema design and API contracts to automated CI/CD deployment.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
            <h3 className="font-bold text-white text-base">Continuous Learning Support</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Company-sponsored access to GPU research clusters, technical books, security lab sandboxes, and conference allowances.
            </p>
          </div>
        </div>

        {/* Open Positions List */}
        <div className="mb-20 space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-white">Active Open Positions</h2>
            <span className="text-xs font-mono text-cyan-400">{companyData.openPositions.length} Roles Available</span>
          </div>

          {companyData.openPositions.map((job) => (
            <div
              key={job.id}
              className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 space-y-6"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-5">
                <div>
                  <h3 className="text-xl font-bold text-white">{job.title}</h3>
                  <div className="flex flex-wrap items-center gap-3 mt-2 text-xs text-slate-400">
                    <span className="flex items-center gap-1">
                      <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
                      {job.department}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                      {job.location}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-cyan-400" />
                      {job.type} ({job.experienceLevel})
                    </span>
                  </div>
                </div>

                <a
                  href={`mailto:${companyData.contactEmail}?subject=Application for ${encodeURIComponent(job.title)}`}
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-brand-600 hover:bg-brand-500 transition-colors self-start md:self-auto"
                >
                  <span>Apply for Role</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                {job.summary}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 text-xs text-slate-300">
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                  <span className="font-bold text-cyan-300 uppercase tracking-wider block mb-1">
                    Key Responsibilities
                  </span>
                  {job.responsibilities.map((r, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>{r}</span>
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                  <span className="font-bold text-cyan-300 uppercase tracking-wider block mb-1">
                    Technical Requirements
                  </span>
                  {job.requirements.map((req, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{req}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* General Application Callout */}
        <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 text-center max-w-2xl mx-auto space-y-3 mb-16">
          <Mail className="w-8 h-8 text-cyan-400 mx-auto" />
          <h3 className="text-lg font-bold text-white">Don't See Your Exact Specialty?</h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            We are always interested in meeting exceptional C++ systems developers, AI researchers, and full-stack architects. Send your portfolio or GitHub handle to <a href={`mailto:${companyData.contactEmail}`} className="text-cyan-400 underline">{companyData.contactEmail}</a>.
          </p>
        </div>

      </div>

      <CTASection />
    </div>
  );
};
