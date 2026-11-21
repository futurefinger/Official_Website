import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle2, 
  Code, 
  Cpu, 
  Layers, 
  HelpCircle, 
  PhoneCall, 
  ShieldCheck, 
  Globe 
} from 'lucide-react';
import { SEOHead } from '../../components/common/SEOHead';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { CTASection } from '../../components/sections/CTASection';
import { ContactForm } from '../../components/forms/ContactForm';
import { servicesData } from '../../data/servicesData';

export const ServiceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = servicesData.find(s => s.slug === slug);

  if (!service) {
    // If invalid slug, redirect to website development or not found
    return <Navigate to="/services/website-development" replace />;
  }

  // Schema.org Service Schema
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    provider: {
      '@type': 'Organization',
      name: 'Future Finger Technologies',
      url: 'https://futurefinger.github.io/Official_Website'
    },
    description: service.shortDescription,
    serviceType: service.title,
    areaServed: 'Global'
  };

  return (
    <div className="py-12 bg-slate-950">
      <SEOHead
        title={`${service.title} - Enterprise Engineering Services`}
        description={service.shortDescription}
        schemaData={serviceSchema}
        keywords={[service.title, ...service.technologies, 'Future Finger Technologies']}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: 'Services', path: '/services/website-development' },
            { label: service.title }
          ]}
        />

        {/* Hero Section of Service */}
        <div className="max-w-4xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800 text-xs text-cyan-300 font-mono mb-4">
            SPECIALIZED SERVICE SPECIFICATION
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {service.title}
          </h1>
          <p className="text-lg sm:text-xl text-cyan-400 font-medium mt-3">
            {service.heroTagline}
          </p>
          <p className="text-base sm:text-lg text-slate-300 mt-5 leading-relaxed">
            {service.detailedDescription}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-6">
            <Link
              to={`/request-quote?service=${encodeURIComponent(service.title)}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-xs tracking-wider text-white bg-gradient-to-r from-brand-600 via-cyan-600 to-indigo-600 hover:from-brand-500 hover:via-cyan-500 hover:to-indigo-500 shadow-lg shadow-brand-500/25 transition-all"
            >
              <span>Request Quote for {service.title}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/book-consultation"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-xs text-slate-300 bg-slate-900 border border-slate-800 hover:text-white hover:border-slate-700 transition-colors"
            >
              <PhoneCall className="w-4 h-4 text-cyan-400" />
              <span>Book Technical Discovery</span>
            </Link>
          </div>
        </div>

        {/* Two-Column Core Architecture & Deliverables */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          
          {/* Key Capabilities */}
          <div className="lg:col-span-7 p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-6">
            <div className="flex items-center gap-3">
              <Cpu className="w-6 h-6 text-cyan-400" />
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                Core Architectural Capabilities
              </h2>
            </div>
            <div className="space-y-4">
              {service.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                    {feat}
                  </span>
                </div>
              ))}
            </div>

            {/* Practical Use Cases */}
            <div className="pt-6 border-t border-slate-800">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3">
                Practical Enterprise Use Cases
              </h3>
              <div className="space-y-2">
                {service.useCases.map((uc, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 text-xs sm:text-sm text-slate-300">
                    • {uc}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Deliverables & Technology Stack */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
              <div className="flex items-center gap-3">
                <Layers className="w-6 h-6 text-emerald-400" />
                <h3 className="text-lg font-bold text-white">
                  Formal Deliverables
                </h3>
              </div>
              <ul className="space-y-2.5">
                {service.deliverables.map((del, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                    <span className="text-cyan-400 font-bold">•</span>
                    <span>{del}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack Pills */}
            <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
              <div className="flex items-center gap-3">
                <Code className="w-6 h-6 text-indigo-400" />
                <h3 className="text-lg font-bold text-white">
                  Technologies Utilized
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {service.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-3 py-1 rounded-lg bg-slate-950 border border-slate-800 text-cyan-300 font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Service-Specific FAQs */}
        <div className="p-8 sm:p-10 rounded-2xl bg-slate-900/60 border border-slate-800 mb-20">
          <div className="flex items-center gap-3 mb-6">
            <HelpCircle className="w-6 h-6 text-cyan-400" />
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              {service.title} — Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-4">
            {service.faqs.map((faq, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                <h3 className="text-sm sm:text-base font-semibold text-white mb-2">
                  {faq.question}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Other Services Navigation Grid */}
        <div className="mb-20">
          <h2 className="text-xl font-bold text-white mb-6">
            Explore Related Engineering Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {servicesData
              .filter(s => s.id !== service.id)
              .slice(0, 4)
              .map((s) => (
                <Link
                  key={s.id}
                  to={`/services/${s.slug}`}
                  className="p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 transition-colors group"
                >
                  <div className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors line-clamp-1">
                    {s.title}
                  </div>
                  <p className="text-xs text-slate-400 line-clamp-2 mt-1">
                    {s.shortDescription}
                  </p>
                </Link>
              ))}
          </div>
        </div>

        {/* Embedded Project Inquiry Form */}
        <div className="mb-20">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl font-bold text-white">
              Initiate a Project Scope for {service.title}
            </h2>
            <p className="text-sm text-slate-400 mt-1">
              Submit your project specifications directly to our senior software architects.
            </p>
          </div>
          <ContactForm defaultSubject={service.title} />
        </div>

      </div>

      <CTASection />
    </div>
  );
};
