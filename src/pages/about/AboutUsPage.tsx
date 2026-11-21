import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Cpu, Code2, Users, ArrowRight, CheckCircle2 } from 'lucide-react';
import { SEOHead } from '../../components/common/SEOHead';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { CTASection } from '../../components/sections/CTASection';
import { companyData } from '../../data/companyData';

export const AboutUsPage: React.FC = () => {
  return (
    <div className="py-12 bg-slate-950">
      <SEOHead
        title="About Us - Corporate Overview & Engineering Philosophy"
        description="Learn about Future Finger Technologies, our sovereign cyber defense architecture, deterministic AI agents, and custom enterprise software capabilities."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'About Us' }]} />

        {/* Hero Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800 text-xs text-cyan-300 font-mono mb-4">
            CORPORATE IDENTITY & PHILOSOPHY
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Building Intelligent Technology for a Smarter, Sovereign Future.
          </h1>
          <p className="text-base sm:text-lg text-slate-300 mt-5 leading-relaxed">
            Future Finger Technologies is a modern technology company driven by deep software engineering, proactive cyber defense, and deterministic artificial intelligence automation.
          </p>
        </div>

        {/* Core Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
            <div className="w-12 h-12 rounded-xl bg-cyan-950 border border-cyan-800 flex items-center justify-center text-cyan-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Sovereign Cyber Defense</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              We do not rely on surface-level scripts. We architect kernel minifilter drivers and tamper-evident audit vaults compliant with Section 65B of the Indian Evidence Act.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
            <div className="w-12 h-12 rounded-xl bg-brand-950 border border-brand-800 flex items-center justify-center text-brand-400">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Deterministic AI Agents</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Eliminating generative hallucinations through schema-enforced tool execution, multi-agent coordination, and private RAG vector pipelines.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
            <div className="w-12 h-12 rounded-xl bg-indigo-950 border border-indigo-800 flex items-center justify-center text-indigo-400">
              <Code2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">100% Client IP Sovereignty</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Upon project settlement, our partners receive total, unencumbered ownership of all source code, models, schemas, and deployment assets.
            </p>
          </div>
        </div>

        {/* Company Navigation Links */}
        <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 mb-20">
          <h2 className="text-xl font-bold text-white mb-6">Explore Our Corporate Pillars</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link to="/about/company" className="p-4 rounded-xl bg-slate-950 border border-slate-800 hover:border-cyan-500/40 transition-colors group">
              <div className="font-semibold text-sm text-white group-hover:text-cyan-300">Our Company</div>
              <div className="text-xs text-slate-400 mt-1">Foundation & Legal Identity</div>
            </Link>
            <Link to="/about/vision-mission" className="p-4 rounded-xl bg-slate-950 border border-slate-800 hover:border-cyan-500/40 transition-colors group">
              <div className="font-semibold text-sm text-white group-hover:text-cyan-300">Vision & Mission</div>
              <div className="text-xs text-slate-400 mt-1">Strategic Roadmap</div>
            </Link>
            <Link to="/about/approach" className="p-4 rounded-xl bg-slate-950 border border-slate-800 hover:border-cyan-500/40 transition-colors group">
              <div className="font-semibold text-sm text-white group-hover:text-cyan-300">Our Approach</div>
              <div className="text-xs text-slate-400 mt-1">6-Stage Lifecycle</div>
            </Link>
            <Link to="/about/why-choose-us" className="p-4 rounded-xl bg-slate-950 border border-slate-800 hover:border-cyan-500/40 transition-colors group">
              <div className="font-semibold text-sm text-white group-hover:text-cyan-300">Why Choose Us</div>
              <div className="text-xs text-slate-400 mt-1">Authentic Technical Rigor</div>
            </Link>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="mb-20">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-8">
            Our Guiding Corporate Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {companyData.coreValues.map((val, idx) => (
              <div key={idx} className="p-6 rounded-xl bg-slate-900 border border-slate-800/80">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                  <h3 className="font-bold text-white text-base">{val.title}</h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pl-7">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>

      <CTASection />
    </div>
  );
};
