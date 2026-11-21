import React from 'react';
import { Target, Compass, Sparkles, Shield, Cpu, KeyRound } from 'lucide-react';
import { SEOHead } from '../../components/common/SEOHead';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { CTASection } from '../../components/sections/CTASection';
import { companyData } from '../../data/companyData';

export const VisionMissionPage: React.FC = () => {
  return (
    <div className="py-12 bg-slate-950">
      <SEOHead
        title="Vision & Mission - Future Finger Technologies"
        description="Our strategic vision and engineering mission: building sovereign, secure, and intelligent technology platforms for global enterprises."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'About Us', path: '/about' }, { label: 'Vision & Mission' }]} />

        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800 text-xs text-cyan-300 font-mono mb-4">
            STRATEGIC DIRECTION
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Our Vision & Mission
          </h1>
          <p className="text-base sm:text-lg text-slate-300 mt-5 leading-relaxed">
            Defining the next horizon of intelligent software, proactive cybersecurity, and enterprise autonomy.
          </p>
        </div>

        {/* Vision & Mission Two-Column Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          
          {/* Vision Card */}
          <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="w-14 h-14 rounded-2xl bg-cyan-950/80 border border-cyan-800 flex items-center justify-center text-cyan-400 mb-6">
              <Compass className="w-7 h-7" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
            <p className="text-base text-slate-200 leading-relaxed font-medium">
              "{companyData.vision}"
            </p>
            <p className="text-xs sm:text-sm text-slate-400 mt-4 leading-relaxed">
              We envision a global technology ecosystem where businesses are liberated from fragile third-party dependencies, possessing complete architectural control over their software and data security.
            </p>
          </div>

          {/* Mission Card */}
          <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="w-14 h-14 rounded-2xl bg-brand-950/80 border border-brand-800 flex items-center justify-center text-brand-400 mb-6">
              <Target className="w-7 h-7" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-base text-slate-200 leading-relaxed font-medium">
              "{companyData.mission}"
            </p>
            <p className="text-xs sm:text-sm text-slate-400 mt-4 leading-relaxed">
              Every system we engineer must pass three non-negotiable hurdles: mathematical reliability, measurable business impact, and rigorous defensive resilience against intrusion.
            </p>
          </div>

        </div>

        {/* Pillars of Strategic Execution */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-white mb-8">Pillars of Strategic Execution</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800">
              <Shield className="w-6 h-6 text-cyan-400 mb-3" />
              <h3 className="font-bold text-white text-base mb-2">Defense-First Development</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Security is embedded into the build phase, from Authenticode signing to kernel sentries.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800">
              <Cpu className="w-6 h-6 text-brand-400 mb-3" />
              <h3 className="font-bold text-white text-base mb-2">Deterministic Automation</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Eliminating operational drag through deterministic autonomous agents and bi-directional APIs.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800">
              <KeyRound className="w-6 h-6 text-emerald-400 mb-3" />
              <h3 className="font-bold text-white text-base mb-2">Uncompromised IP Transfer</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                100% intellectual property ownership transferred to our clients without ongoing vendor lock-in.
              </p>
            </div>
          </div>
        </div>

      </div>

      <CTASection />
    </div>
  );
};
