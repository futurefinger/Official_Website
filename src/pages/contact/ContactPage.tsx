import React from 'react';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { SEOHead } from '../../components/common/SEOHead';
import { ContactForm } from '../../components/forms/ContactForm';
import { companyData } from '../../data/companyData';
import { Mail, MapPin, Github, PhoneCall, ShieldCheck, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ContactPage: React.FC = () => {
  return (
    <div className="py-12 bg-slate-950">
      <SEOHead
        title="Contact Us - Corporate Inquiries & Project Discovery"
        description="Connect with Future Finger Technologies. Principal jurisdiction in New Delhi, India. Inquire for custom software, cybersecurity, or AI automation."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Contact Us' }]} />

        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800 text-xs text-cyan-300 font-mono mb-4">
            GLOBAL ENGAGEMENT DESK
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Contact Future Finger Technologies
          </h1>
          <p className="text-base sm:text-lg text-slate-300 mt-5 leading-relaxed">
            Whether you need a full enterprise software build, a sovereign cybersecurity deployment, or a pilot evaluation of our platforms, our senior solutions architects are ready to assist.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          {/* Left Column: Direct Coordinates & Quick Actions */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-6">
              <h2 className="text-xl font-bold text-white">Direct Coordinates</h2>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">Official Corporate Email</div>
                    <a href={`mailto:${companyData.contactEmail}`} className="text-cyan-400 hover:underline">
                      {companyData.contactEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">Corporate Jurisdiction</div>
                    <div className="text-slate-300">{companyData.jurisdiction}</div>
                    <div className="text-slate-400 text-[11px] mt-0.5">Republic of India</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Github className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">Engineering Repositories</div>
                    <a href={companyData.githubOrg} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
                      github.com/futurefinger
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">Operational Hours</div>
                    <div className="text-slate-300">Monday — Friday: 09:30 - 18:30 IST</div>
                    <div className="text-slate-400 text-[11px] mt-0.5">Emergency SLA response 24/7 for active contract clients</div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 space-y-2">
                <Link
                  to="/request-quote"
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 transition-colors"
                >
                  <span>Need an itemized quotation? Request a Quote</span>
                </Link>
                <Link
                  to="/book-consultation"
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-medium text-slate-300 bg-slate-950 border border-slate-800 hover:text-white"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Book Architecture Discovery Call</span>
                </Link>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 text-xs text-slate-400 space-y-2">
              <div className="flex items-center gap-2 font-semibold text-white">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>NDA & Privacy Assurance</span>
              </div>
              <p className="leading-relaxed">
                All inquiries and prospective architecture documents are treated under strict confidentiality. We provide mutual NDAs prior to in-depth technical discovery sessions upon request.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>

      </div>
    </div>
  );
};
