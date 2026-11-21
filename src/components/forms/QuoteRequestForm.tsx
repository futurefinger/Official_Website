import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2, DollarSign } from 'lucide-react';
import { companyData } from '../../data/companyData';

export const QuoteRequestForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    phone: '',
    projectCategory: 'Custom Software Development',
    budgetRange: '$5,000 - $15,000 / ₹4L - ₹12L',
    targetTimeline: '1 to 3 Months',
    projectScope: '',
    honeypot: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [quoteReference, setQuoteReference] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    if (status !== 'idle') setStatus('idle');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.honeypot) {
      setStatus('error');
      setErrorMessage('Submission blocked by automated spam filter.');
      return;
    }

    if (!formData.name.trim() || !formData.email.trim() || !formData.projectScope.trim()) {
      setStatus('error');
      setErrorMessage('Please fill in all mandatory fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setStatus('error');
      setErrorMessage('Please enter a valid business email.');
      return;
    }

    setIsSubmitting(true);
    setStatus('idle');

    try {
      const quoteId = `QUOTE-${Math.floor(100000 + Math.random() * 900000)}`;
      const timestamp = new Date().toLocaleString();

      const mailtoSubject = encodeURIComponent(`[Project Quote Request ${quoteId}] - ${formData.projectCategory} (${formData.name})`);
      const mailtoBody = encodeURIComponent(
        `Formal Project Estimation Request: ${quoteId}\n` +
        `Timestamp: ${timestamp}\n\n` +
        `Contact Name: ${formData.name}\n` +
        `Corporate Email: ${formData.email}\n` +
        `Company / Entity: ${formData.organization || 'N/A'}\n` +
        `Phone: ${formData.phone || 'N/A'}\n\n` +
        `Project Category: ${formData.projectCategory}\n` +
        `Budget Range: ${formData.budgetRange}\n` +
        `Target Timeline: ${formData.targetTimeline}\n\n` +
        `Project Scope & Technical Needs:\n${formData.projectScope}\n\n` +
        `Submitted via Future Finger Technologies Quote Portal`
      );

      // Open mail client safely
      window.open(`mailto:${companyData.contactEmail}?subject=${mailtoSubject}&body=${mailtoBody}`, '_blank');

      setQuoteReference(quoteId);
      setStatus('success');
    } catch {
      setStatus('error');
      setErrorMessage('Failed to trigger email submission. Please email directly to ' + companyData.contactEmail);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 md:p-10 shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-cyan-400 via-brand-500 to-indigo-600" />

      {status === 'success' && quoteReference ? (
        <div className="py-10 text-center space-y-4 animate-in fade-in">
          <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto text-emerald-400">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h3 className="text-2xl font-bold text-white">Quote Request Staged Successfully</h3>
          <p className="text-sm text-slate-300 max-w-lg mx-auto">
            Your quotation dossier <span className="font-mono text-cyan-300 font-bold">{quoteReference}</span> has been dispatched to our Solutions Architecture Pod at <span className="text-white font-medium">{companyData.contactEmail}</span>.
          </p>
          <p className="text-xs text-slate-400">
            Our principal software architect will review your project parameters and respond with a preliminary estimate within 1 business day.
          </p>
          <div className="pt-4">
            <button
              onClick={() => setStatus('idle')}
              className="text-xs px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
            >
              Submit Another Project Scope
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="hidden" aria-hidden="true">
            <input type="text" name="honeypot" value={formData.honeypot} onChange={handleChange} tabIndex={-1} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                Contact Name <span className="text-cyan-400">*</span>
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                Corporate Email <span className="text-cyan-400">*</span>
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="name@organization.com"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                Company / Organization
              </label>
              <input
                type="text"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                placeholder="Enterprise or Startup Name"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                Direct Phone / WhatsApp
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 or International prefix"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                Project Category
              </label>
              <select
                name="projectCategory"
                value={formData.projectCategory}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-cyan-400"
              >
                <option value="Custom Software Development">Custom Software Development</option>
                <option value="AI Agent & Automation Systems">AI Agent & Automation Systems</option>
                <option value="Web & Mobile Applications">Web & Mobile Applications</option>
                <option value="SaaS Cloud Product Engineering">SaaS Cloud Product Engineering</option>
                <option value="HRLord Workforce Deployment">HRLord™ Workforce Platform</option>
                <option value="XShield Enterprise Security">XShield™ Endpoint Defense</option>
                <option value="Shipzyro Logistics Integration">Shipzyro™ Shipping Platform</option>
                <option value="Cyber Forensics & Trail Analysis">Cyber Forensics & Trail Analysis</option>
                <option value="Enterprise Architecture Modernization">Enterprise Modernization</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                Target Budget Range
              </label>
              <select
                name="budgetRange"
                value={formData.budgetRange}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-cyan-400"
              >
                <option value="Under $5,000 / Under ₹4L">Under $5,000 / Under ₹4L</option>
                <option value="$5,000 - $15,000 / ₹4L - ₹12L">$5,000 - $15,000 / ₹4L - ₹12L</option>
                <option value="$15,000 - $35,000 / ₹12L - ₹30L">$15,000 - $35,000 / ₹12L - ₹30L</option>
                <option value="$35,000 - $75,000 / ₹30L - ₹60L">$35,000 - $75,000 / ₹30L - ₹60L</option>
                <option value="Enterprise ($75,000+ / ₹60L+)">Enterprise ($75,000+ / ₹60L+)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                Target Timeline
              </label>
              <select
                name="targetTimeline"
                value={formData.targetTimeline}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-cyan-400"
              >
                <option value="Immediate (< 1 Month)">Immediate (&lt; 1 Month)</option>
                <option value="1 to 3 Months">1 to 3 Months</option>
                <option value="3 to 6 Months">3 to 6 Months</option>
                <option value="Flexible / Strategic Planning">Flexible / Strategic Planning</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
              Project Scope, Deliverables & Specifications <span className="text-cyan-400">*</span>
            </label>
            <textarea
              name="projectScope"
              required
              rows={5}
              value={formData.projectScope}
              onChange={handleChange}
              placeholder="Outline your functional requirements, target user volumes, existing technology stack, and essential integration points..."
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-cyan-400 resize-y"
            />
          </div>

          {status === 'error' && (
            <div className="flex items-center gap-2 p-3.5 rounded-xl bg-rose-950/40 border border-rose-800 text-xs text-rose-300">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <div className="text-xs text-slate-400 flex items-center gap-2">
              <DollarSign className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>Fixed-Price Milestone & Dedicated Pod Contracts Available</span>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-xs tracking-wider text-white bg-gradient-to-r from-brand-600 via-cyan-600 to-indigo-600 hover:from-brand-500 hover:via-cyan-500 hover:to-indigo-500 shadow-xl shadow-brand-500/25 transition-all duration-300 disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Preparing Dossier...</span>
                </>
              ) : (
                <>
                  <span>Request Architectural Quote</span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
