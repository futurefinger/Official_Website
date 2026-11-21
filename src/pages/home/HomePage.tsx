import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ShieldCheck, 
  Bot, 
  Cpu, 
  Sparkles, 
  CheckCircle2, 
  ChevronRight, 
  Layers, 
  Building2, 
  Code2 
} from 'lucide-react';
import { SEOHead } from '../../components/common/SEOHead';
import { HeroSection } from '../../components/sections/HeroSection';
import { StatsBanner } from '../../components/sections/StatsBanner';
import { TechStackSection } from '../../components/sections/TechStackSection';
import { ProcessSection } from '../../components/sections/ProcessSection';
import { FAQAccordion } from '../../components/sections/FAQAccordion';
import { CTASection } from '../../components/sections/CTASection';
import { ServiceCard } from '../../components/cards/ServiceCard';
import { ProductCard } from '../../components/cards/ProductCard';
import { PortfolioCard } from '../../components/cards/PortfolioCard';
import { servicesData } from '../../data/servicesData';
import { productsData } from '../../data/productsData';
import { industriesData } from '../../data/industriesData';
import { portfolioData } from '../../data/portfolioData';
import { companyData } from '../../data/companyData';

export const HomePage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Official Corporate Website"
        description="Future Finger Technologies delivers enterprise software development, AI automation, sovereign cybersecurity suites (XShield™), and workforce platforms."
      />

      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Stats & Trust Banner */}
      <StatsBanner />

      {/* 3. Introduction to Future Finger Technologies */}
      <section className="py-20 bg-slate-950 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800 text-xs text-cyan-300 font-mono">
                SOVEREIGN ENGINEERING CULTURE
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Architecting High-Consequence Systems with Zero Compromise
              </h2>
              <p className="text-slate-300 text-base leading-relaxed">
                At Future Finger Technologies, we believe enterprise software must be fast, deterministically validated, and completely owned by the client. We specialize in deep technical engineering—from kernel-level cybersecurity drivers to enterprise-grade AI agent orchestration.
              </p>
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-300">
                    <strong className="text-white">Strict Type Safety & Architecture:</strong> Built on TypeScript, modern cloud microservices, and audited database schemas.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-300">
                    <strong className="text-white">Sovereign Defense in Ring 0:</strong> Intercepting zero-day ransomware at the Windows kernel minifilter boundary.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-300">
                    <strong className="text-white">Deterministic Enterprise AI:</strong> Grounded RAG with runtime schema validation eliminating hallucinations.
                  </span>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 group"
                >
                  <span>Learn More About Our Company & Mission</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
                  <ShieldCheck className="w-8 h-8 text-cyan-400" />
                  <h3 className="text-base font-bold text-white">Sovereign Security</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Air-gapped and kernel defense platforms compliant with Section 65B of the Indian Evidence Act.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
                  <Bot className="w-8 h-8 text-indigo-400" />
                  <h3 className="text-base font-bold text-white">Autonomous Agents</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Multi-step tool calling and enterprise workflow automation engines.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
                  <Layers className="w-8 h-8 text-brand-400" />
                  <h3 className="text-base font-bold text-white">Custom ERP & HRMS</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    HRLord™ biometric hardware synchronization and automated payroll ledgers.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
                  <Cpu className="w-8 h-8 text-emerald-400" />
                  <h3 className="text-base font-bold text-white">Cloud Resilience</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    High-availability Kubernetes and Docker microservices with zero-downtime releases.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Core Services Overview (Featured 6 Services) */}
      <section className="py-20 bg-slate-900/40 border-t border-slate-800/80 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800 text-xs text-cyan-300 font-mono mb-3">
                17 SPECIALIZED ENGINEERING DOMAINS
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Core Software Engineering Services
              </h2>
            </div>
            <Link
              to="/services/website-development"
              className="mt-4 md:mt-0 inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300"
            >
              <span>Explore All 17 Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.slice(0, 6).map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. Featured Proprietary Products & Solutions */}
      <section className="py-20 bg-slate-950 border-t border-slate-800/80 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-800 text-xs text-emerald-300 font-mono mb-3">
                AUTHENTIC PRODUCT SUITES
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Proprietary Enterprise Products
              </h2>
            </div>
            <Link
              to="/products"
              className="mt-4 md:mt-0 inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300"
            >
              <span>View Product Portfolio</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {productsData.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* 6. Industries We Serve */}
      <section className="py-20 bg-slate-900/40 border-t border-slate-800/80 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800 text-xs text-cyan-300 font-mono mb-3">
              DOMAIN EXPERTISE
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Industries We Serve
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-3">
              Solving sector-specific challenges with tailored regulatory alignment and high-throughput reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industriesData.map((ind) => (
              <div
                key={ind.id}
                className="p-6 rounded-2xl bg-slate-900 border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500/20 group-hover:text-cyan-300 transition-colors">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {ind.name}
                  </h3>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  {ind.description}
                </p>
                <div className="text-[11px] text-cyan-400 font-mono font-medium">
                  {ind.impactMetrics[0]}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/industries"
              className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 hover:text-cyan-300"
            >
              <span>Explore In-Depth Industry Case Studies</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Technology Stack Section */}
      <TechStackSection />

      {/* 8. Development Process Section */}
      <ProcessSection />

      {/* 9. Featured Projects / Portfolio */}
      <section className="py-20 bg-slate-950 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800 text-xs text-cyan-300 font-mono mb-3">
                DEMONSTRABLE PROOF OF WORK
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Featured Engineering Implementations
              </h2>
            </div>
            <Link
              to="/portfolio"
              className="mt-4 md:mt-0 inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300"
            >
              <span>Explore Complete Portfolio</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {portfolioData.slice(0, 2).map((item) => (
              <PortfolioCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* 10. Frequently Asked Questions */}
      <section className="py-20 bg-slate-900/40 border-t border-slate-800/80 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800 text-xs text-cyan-300 font-mono mb-3">
              CLEAR & DIRECT ANSWERS
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-3">
              Everything you need to know regarding our engagement model, intellectual property ownership, and technical SLAs.
            </p>
          </div>

          <FAQAccordion limit={6} />

          <div className="mt-8 text-center">
            <Link
              to="/faq"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300"
            >
              <span>View All Frequently Asked Questions</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 11. Final Conversion CTA Section */}
      <CTASection />
    </>
  );
};
