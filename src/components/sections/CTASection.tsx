import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail, PhoneCall } from 'lucide-react';
import { companyData } from '../../data/companyData';

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
}

export const CTASection: React.FC<CTASectionProps> = ({
  title = "Ready to Engineer Your Enterprise's Next-Generation Platform?",
  subtitle = "Discuss your architectural requirements with our solutions engineering pod. Receive an honest feasibility analysis, milestone timeline, and fixed-scope quotation.",
  primaryButtonText = "Discuss Your Project",
  primaryButtonLink = "/request-quote",
  secondaryButtonText = "Book a Consultation",
  secondaryButtonLink = "/book-consultation",
}) => {
  return (
    <section className="py-20 bg-slate-950 relative overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-900/30 via-slate-950 to-cyan-900/20 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="p-8 sm:p-12 md:p-16 rounded-3xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800 shadow-2xl backdrop-blur-xl">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800 text-xs text-cyan-300 font-mono mb-6">
            ENTERPRISE ENGAGEMENT DESK
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight max-w-3xl mx-auto">
            {title}
          </h2>

          <p className="text-sm sm:text-base text-slate-300 mt-4 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Link
              to={primaryButtonLink}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-brand-600 via-cyan-600 to-indigo-600 hover:from-brand-500 hover:via-cyan-500 hover:to-indigo-500 shadow-xl shadow-brand-500/25 transition-all duration-300 hover:scale-[1.02]"
            >
              <span>{primaryButtonText}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to={secondaryButtonLink}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-medium text-sm text-slate-200 bg-slate-900 border border-slate-700 hover:text-white hover:border-slate-500 transition-colors"
            >
              <PhoneCall className="w-4 h-4 text-cyan-400" />
              <span>{secondaryButtonText}</span>
            </Link>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-800/80 flex items-center justify-center gap-2 text-xs text-slate-400">
            <Mail className="w-3.5 h-3.5 text-cyan-400" />
            <span>Direct architectural dispatch:</span>
            <a href={`mailto:${companyData.contactEmail}`} className="text-cyan-400 hover:underline">
              {companyData.contactEmail}
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
