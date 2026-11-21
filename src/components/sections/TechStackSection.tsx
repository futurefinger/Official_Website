import React, { useState } from 'react';
import { companyData } from '../../data/companyData';
import { Code, Server, Cpu, Database, Cloud, Shield } from 'lucide-react';

export const TechStackSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'frontend' | 'backend' | 'ai' | 'database' | 'devops' | 'security'>('all');

  const categories = [
    { key: 'all', label: 'All Technologies', icon: Code },
    { key: 'frontend', label: 'Frontend & Mobile', icon: Code },
    { key: 'backend', label: 'Backend Microservices', icon: Server },
    { key: 'ai', label: 'AI & Data Science', icon: Cpu },
    { key: 'database', label: 'Databases & Ledgers', icon: Database },
    { key: 'devops', label: 'Cloud & CI/CD', icon: Cloud },
    { key: 'security', label: 'Kernel & Cryptography', icon: Shield },
  ];

  const getFilteredItems = () => {
    const { frontend, backend, aiAndData, databaseAndCache, devopsAndCloud, securityAndSystems } = companyData.techStack;
    switch (activeTab) {
      case 'frontend': return frontend;
      case 'backend': return backend;
      case 'ai': return aiAndData;
      case 'database': return databaseAndCache;
      case 'devops': return devopsAndCloud;
      case 'security': return securityAndSystems;
      default:
        return [
          ...frontend.slice(0, 3),
          ...backend.slice(0, 3),
          ...aiAndData.slice(0, 3),
          ...databaseAndCache.slice(0, 2),
          ...devopsAndCloud.slice(0, 3),
          ...securityAndSystems.slice(0, 2)
        ];
    }
  };

  return (
    <section className="py-20 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/80 text-xs text-cyan-400 font-mono mb-3">
            ARCHITECTURAL EXCELLENCE
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Our Enterprise Technology Stack
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-3">
            We build exclusively with production-proven, type-safe, and scalable software frameworks.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeTab === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setActiveTab(cat.key as any)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  isActive
                    ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                    : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800 hover:border-slate-700'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Stack Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {getFilteredItems().map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 hover:bg-slate-900/90 transition-all duration-200 group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-sm text-white group-hover:text-cyan-300 transition-colors">
                  {item.name}
                </span>
                <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-800/60">
                  Verified
                </span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
