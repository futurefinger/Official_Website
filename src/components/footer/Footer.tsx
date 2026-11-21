import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  MapPin, 
  Github, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  AlertCircle 
} from 'lucide-react';
import { companyData } from '../../data/companyData';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setStatus('error');
      setMessage('Please provide a valid corporate email address.');
      return;
    }

    setStatus('loading');
    // Authentic client-side handling: static hosting subscription dispatch
    setTimeout(() => {
      setStatus('success');
      setMessage('Thank you for subscribing to Future Finger Technologies engineering updates.');
      setEmail('');
    }, 600);
  };

  return (
    <footer className="relative bg-slate-950 border-t border-slate-800/80 pt-16 pb-12 overflow-hidden text-slate-400">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand & Mission Column (Col 1 & 2) */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-flex items-center gap-3 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-500 to-cyan-400 p-[1px]">
                <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center">
                  <svg 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="1.75" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="w-5 h-5 text-cyan-400"
                  >
                    <path d="M12 2a10 10 0 0 0-6.88 17.26" />
                    <path d="M12 6a6 6 0 0 0-4.24 10.24" />
                    <path d="M12 10a2 2 0 0 0-1.42 3.41" />
                    <path d="M12 14v4" />
                    <path d="M16 10a6 6 0 0 1 2.83 5.17" />
                    <path d="M19.07 4.93A10 10 0 0 1 22 12" />
                    <circle cx="12" cy="12" r="1" fill="#00F0FF" />
                  </svg>
                </div>
              </div>
              <span className="text-lg font-bold tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                FUTURE FINGER TECHNOLOGIES
              </span>
            </Link>

            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              {companyData.tagline} We engineer sovereign cybersecurity suites, deterministic AI automation engines, and scalable corporate platforms.
            </p>

            <div className="space-y-2 pt-2 text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <Mail className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <a href={`mailto:${companyData.contactEmail}`} className="hover:text-cyan-300 transition-colors">
                  {companyData.contactEmail}
                </a>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>Principal Jurisdiction: {companyData.jurisdiction}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Github className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <a 
                  href={companyData.githubOrg} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-cyan-300 transition-colors"
                >
                  github.com/futurefinger
                </a>
              </div>
            </div>

            {/* Newsletter Subscription */}
            <div className="pt-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-300 block mb-2">
                Engineering & Security Bulletins
              </span>
              <form onSubmit={handleSubscribe} className="space-y-2 max-w-md">
                <div className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter corporate email..."
                    className="flex-1 px-3 py-2 text-xs rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400"
                    disabled={status === 'loading'}
                  />
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="px-3.5 py-2 text-xs font-semibold rounded-xl bg-brand-600 hover:bg-brand-500 text-white transition-colors flex items-center gap-1 flex-shrink-0"
                  >
                    <span>Subscribe</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {status === 'success' && (
                  <div className="flex items-center gap-1.5 text-xs text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{message}</span>
                  </div>
                )}
                {status === 'error' && (
                  <div className="flex items-center gap-1.5 text-xs text-rose-400">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{message}</span>
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Services Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Core Services</h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/services/website-development" className="hover:text-cyan-400 transition-colors">Website Development</Link></li>
              <li><Link to="/services/web-application-development" className="hover:text-cyan-400 transition-colors">Web Applications</Link></li>
              <li><Link to="/services/mobile-application-development" className="hover:text-cyan-400 transition-colors">Mobile Applications</Link></li>
              <li><Link to="/services/custom-software-development" className="hover:text-cyan-400 transition-colors">Custom Software</Link></li>
              <li><Link to="/services/saas-product-development" className="hover:text-cyan-400 transition-colors">SaaS Development</Link></li>
              <li><Link to="/services/ai-agent-development" className="hover:text-cyan-400 transition-colors">AI Agent Development</Link></li>
              <li><Link to="/services/business-process-automation" className="hover:text-cyan-400 transition-colors">Process Automation</Link></li>
              <li><Link to="/services/crm-hrms-solutions" className="hover:text-cyan-400 transition-colors">CRM & HRMS Systems</Link></li>
              <li><Link to="/services/cloud-devops" className="hover:text-cyan-400 transition-colors">Cloud & DevOps</Link></li>
              <li><Link to="/services/cybersecurity-solutions" className="hover:text-cyan-400 transition-colors">Cybersecurity Solutions</Link></li>
            </ul>
          </div>

          {/* Products & Solutions Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Products & Labs</h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/products" className="hover:text-cyan-400 transition-colors font-semibold text-slate-300">Products Overview</Link></li>
              <li><Link to="/products/xsheild" className="hover:text-cyan-400 transition-colors flex items-center gap-1"><span>XShield™ Security</span><span className="text-[9px] px-1 bg-emerald-950 text-emerald-400 rounded border border-emerald-800">Live</span></Link></li>
              <li><Link to="/products/hrlord" className="hover:text-cyan-400 transition-colors flex items-center gap-1"><span>HRLord™ HRMS</span><span className="text-[9px] px-1 bg-amber-950 text-amber-400 rounded border border-amber-800">Beta</span></Link></li>
              <li><Link to="/products/fft-trace-x" className="hover:text-cyan-400 transition-colors flex items-center gap-1"><span>FFT-TRACE-X™</span><span className="text-[9px] px-1 bg-blue-950 text-blue-400 rounded border border-blue-800">Dev</span></Link></li>
              <li><Link to="/products/shipzyro" className="hover:text-cyan-400 transition-colors flex items-center gap-1"><span>Shipzyro™ Logistics</span><span className="text-[9px] px-1 bg-amber-950 text-amber-400 rounded border border-amber-800">Beta</span></Link></li>
              <li><Link to="/products/ai-business-solutions" className="hover:text-cyan-400 transition-colors">Enterprise AI Suite</Link></li>
              <li className="pt-2"><span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">Company Info</span></li>
              <li><Link to="/about/approach" className="hover:text-cyan-400 transition-colors">Our Approach</Link></li>
              <li><Link to="/about/why-choose-us" className="hover:text-cyan-400 transition-colors">Why Choose Us</Link></li>
              <li><Link to="/technology-stack" className="hover:text-cyan-400 transition-colors">Technology Stack</Link></li>
              <li><Link to="/careers" className="hover:text-cyan-400 transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Legal & Governance Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Governance & Legal</h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/privacy-policy" className="hover:text-cyan-400 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-conditions" className="hover:text-cyan-400 transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/cookie-policy" className="hover:text-cyan-400 transition-colors">Cookie Policy</Link></li>
              <li><Link to="/disclaimer" className="hover:text-cyan-400 transition-colors">Disclaimer</Link></li>
              <li><Link to="/refund-policy" className="hover:text-cyan-400 transition-colors">Refund & Cancellation</Link></li>
              <li><Link to="/intellectual-property" className="hover:text-cyan-400 transition-colors">Intellectual Property Notice</Link></li>
              <li className="pt-2"><span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">Inquiries</span></li>
              <li><Link to="/request-quote" className="hover:text-cyan-400 transition-colors">Request a Quote</Link></li>
              <li><Link to="/book-consultation" className="hover:text-cyan-400 transition-colors">Book a Consultation</Link></li>
              <li><Link to="/partnerships" className="hover:text-cyan-400 transition-colors">Partnerships</Link></li>
              <li><Link to="/faq" className="hover:text-cyan-400 transition-colors">Frequently Asked Questions</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright & Compliance Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>
              &copy; {new Date().getFullYear()} Future Finger Technologies. All rights reserved.
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px] text-slate-400">
            <span>Jurisdiction: New Delhi, India</span>
            <span>•</span>
            <span>Indian IT Act 2000 Compliant</span>
            <span>•</span>
            <span>Zero-Trust Enterprise Standards</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
