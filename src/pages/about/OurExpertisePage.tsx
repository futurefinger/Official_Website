import React from 'react';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { SEOHead } from '../../components/common/SEOHead';
import { CTASection } from '../../components/sections/CTASection';
import { Shield, Bot, Layout, Cpu, Database, CloudLightning, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const OurExpertisePage: React.FC = () => {
  const domains = [
    {
      icon: Shield,
      title: 'Systems & Sovereign Cyber Defense',
      description: 'Windows kernel minifilter drivers, memory defense, Authenticode binary signing, and Section 65B forensic audit vaults. Protects endpoints against zero-day ransomware before payload detonation.',
      link: '/services/cybersecurity-solutions'
    },
    {
      icon: Bot,
      title: 'Applied AI & Autonomous Agents',
      description: 'Deterministic tool-calling agents, Retrieval-Augmented Generation (RAG) with hybrid dense-sparse search, and enterprise knowledge extraction without generative hallucinations.',
      link: '/services/ai-agent-development'
    },
    {
      icon: Layout,
      title: 'Mission-Critical Web Applications',
      description: 'High-consequence single page applications (SPAs), reactive dashboards, and client portals built with React, TypeScript, Vite, and distributed edge caching.',
      link: '/services/web-application-development'
    },
    {
      icon: Database,
      title: 'Enterprise ERP, HRMS & Biometrics',
      description: 'Multi-branch workforce operations, TCP/IP hardware socket listeners for biometric scanners (HRLord™), and automated statutory payroll ledgers.',
      link: '/services/crm-hrms-solutions'
    },
    {
      icon: CloudLightning,
      title: 'Cloud Architecture & DevOps Pipelines',
      description: 'Automated CI/CD workflows via GitHub Actions, Infrastructure-as-Code using Terraform, container orchestration (Docker/Kubernetes), and zero-downtime releases.',
      link: '/services/cloud-devops'
    },
    {
      icon: Cpu,
      title: 'Custom API Ecosystems & Integrations',
      description: 'High-throughput RESTful and GraphQL backends, event queues (Redis/BullMQ), and multi-carrier shipping logistics aggregators (Shipzyro™).',
      link: '/services/api-integration'
    }
  ];

  return (
    <div className="py-12 bg-slate-950">
      <SEOHead
        title="Our Expertise - Full-Stack, AI & Cyber Defense Capabilities"
        description="Explore Future Finger Technologies' core domains: systems cybersecurity, deterministic AI agents, enterprise web applications, and DevOps."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Our Expertise' }]} />

        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800 text-xs text-cyan-300 font-mono mb-4">
            SPECIALIZED ENGINEERING DISCIPLINES
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Our Core Technical Expertise
          </h1>
          <p className="text-base sm:text-lg text-slate-300 mt-5 leading-relaxed">
            From low-level operating system drivers to cloud-scale distributed microservices, our multidisciplinary engineering pods deliver mission-critical software solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {domains.map((dom, idx) => {
            const Icon = dom.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 hover:bg-slate-900/90 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500/20 group-hover:text-cyan-300 transition-colors mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-3">
                    {dom.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {dom.description}
                  </p>
                </div>

                <Link
                  to={dom.link}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 group-hover:text-cyan-300 pt-4 border-t border-slate-800"
                >
                  <span>Explore Service Specification</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            );
          })}
        </div>

      </div>

      <CTASection />
    </div>
  );
};
