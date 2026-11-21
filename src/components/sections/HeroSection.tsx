import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ShieldCheck, 
  Cpu, 
  Terminal, 
  CheckCircle2, 
  ChevronRight, 
  Bot, 
  Lock 
} from 'lucide-react';
import { companyData } from '../../data/companyData';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-8 pb-20 md:pt-16 md:pb-32 overflow-hidden">
      {/* Background radial gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-brand-600/15 via-cyan-500/10 to-indigo-600/15 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 blur-[90px] pointer-events-none" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Subheading, CTAs & Value Props */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 text-xs text-slate-300 shadow-inner">
              <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
              <span className="font-mono text-cyan-300 font-semibold tracking-wide">
                FUTURE FINGER TECHNOLOGIES
              </span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-400">Enterprise Engineering Pod</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Engineering the Future Through{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-brand-400 to-indigo-300">
                Intelligent Technology.
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              {companyData.heroSubheading}
            </p>

            {/* Two Prominent CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                to="/request-quote"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-brand-600 via-cyan-600 to-indigo-600 hover:from-brand-500 hover:via-cyan-500 hover:to-indigo-500 shadow-xl shadow-brand-500/25 hover:shadow-cyan-400/30 hover:scale-[1.02] transition-all duration-300 focus:outline-none"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/products"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-medium text-sm text-slate-200 bg-slate-900/90 border border-slate-700 hover:border-cyan-400/50 hover:text-white hover:bg-slate-800 transition-all duration-300"
              >
                <span>Explore Our Solutions</span>
                <ChevronRight className="w-4 h-4 text-cyan-400" />
              </Link>
            </div>

            {/* Trust Anchors */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0 text-left">
              <div>
                <div className="text-lg sm:text-xl font-bold font-mono text-white">100%</div>
                <div className="text-[11px] text-slate-400">Client IP Ownership</div>
              </div>
              <div>
                <div className="text-lg sm:text-xl font-bold font-mono text-cyan-400">Ring 0</div>
                <div className="text-[11px] text-slate-400">Kernel Cyber Defense</div>
              </div>
              <div>
                <div className="text-lg sm:text-xl font-bold font-mono text-emerald-400">99.9%</div>
                <div className="text-[11px] text-slate-400">Target Uptime SLAs</div>
              </div>
            </div>

          </div>

          {/* Right Column: Original Interactive Abstract Technology Visualizer */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Glow Halo */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-brand-500/10 to-indigo-600/20 rounded-3xl blur-2xl transform scale-95" />

              {/* Main Futuristic Terminal & Security Visualizer Card */}
              <div className="relative bg-slate-900/90 border border-slate-700/80 rounded-2xl shadow-2xl p-6 backdrop-blur-xl overflow-hidden">
                
                {/* Visualizer Header */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400">
                    <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                    <span>fft-engine-sentry // v2.5.6</span>
                  </div>
                </div>

                {/* Central Futuristic Digital Biometric Schematic */}
                <div className="py-6 flex flex-col items-center justify-center relative">
                  <div className="relative w-36 h-36 flex items-center justify-center">
                    {/* Rotating Tech Rings */}
                    <div className="absolute inset-0 rounded-full border border-cyan-500/30 border-dashed animate-spin" style={{ animationDuration: '30s' }} />
                    <div className="absolute inset-2 rounded-full border border-brand-500/20 border-dotted animate-spin" style={{ animationDuration: '20s', animationDirection: 'reverse' }} />
                    <div className="absolute inset-6 rounded-full bg-slate-950/90 border border-slate-800 flex items-center justify-center shadow-inner">
                      {/* Biometric Centerpiece */}
                      <svg 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="1.5" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        className="w-14 h-14 text-cyan-400 animate-pulse"
                      >
                        <path d="M12 2a10 10 0 0 0-6.88 17.26" />
                        <path d="M12 6a6 6 0 0 0-4.24 10.24" />
                        <path d="M12 10a2 2 0 0 0-1.42 3.41" />
                        <path d="M12 14v4" />
                        <path d="M16 10a6 6 0 0 1 2.83 5.17" />
                        <path d="M19.07 4.93A10 10 0 0 1 22 12" />
                        <circle cx="12" cy="12" r="1.5" fill="#00F0FF" />
                      </svg>
                    </div>
                  </div>

                  <span className="mt-3 text-xs font-mono text-cyan-300 font-semibold tracking-wider">
                    SOVEREIGN DEFENSE & AI ENGINE
                  </span>
                  <span className="text-[10px] text-slate-400">Authenticode Signed PE • Kernel Minifilter Sentry</span>
                </div>

                {/* Live Activity Matrix */}
                <div className="space-y-2 pt-2 border-t border-slate-800">
                  <div className="flex items-center justify-between p-2 rounded-lg bg-slate-950/70 border border-slate-800/80 text-xs">
                    <div className="flex items-center gap-2">
                      <Lock className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-slate-300">XShield™ Anti-Ransomware</span>
                    </div>
                    <span className="font-mono text-[10px] text-emerald-400 font-semibold">ARMED (Ring 0)</span>
                  </div>

                  <div className="flex items-center justify-between p-2 rounded-lg bg-slate-950/70 border border-slate-800/80 text-xs">
                    <div className="flex items-center gap-2">
                      <Bot className="w-3.5 h-3.5 text-cyan-400" />
                      <span className="text-slate-300">Deterministic AI Tooling</span>
                    </div>
                    <span className="font-mono text-[10px] text-cyan-400 font-semibold">VERIFIED</span>
                  </div>

                  <div className="flex items-center justify-between p-2 rounded-lg bg-slate-950/70 border border-slate-800/80 text-xs">
                    <div className="flex items-center gap-2">
                      <Cpu className="w-3.5 h-3.5 text-indigo-400" />
                      <span className="text-slate-300">HRLord™ Biometric Daemon</span>
                    </div>
                    <span className="font-mono text-[10px] text-indigo-400 font-semibold">SYNCED</span>
                  </div>
                </div>

              </div>

              {/* Floating Architectural Badge */}
              <div className="absolute -bottom-5 -left-4 p-3 rounded-xl bg-slate-900 border border-slate-700/80 shadow-2xl backdrop-blur-md flex items-center gap-3">
                <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Section 65B Compliant</div>
                  <div className="text-[10px] text-slate-400">Indian Evidence Act Legal Vault</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
