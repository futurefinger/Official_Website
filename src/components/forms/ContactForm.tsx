import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2, Mail } from 'lucide-react';
import { companyData } from '../../data/companyData';

interface ContactFormProps {
  defaultSubject?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({ defaultSubject = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    serviceInterest: defaultSubject || 'Custom Software Development',
    message: '',
    honeypot: '', // Spam bot trap
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [submissionReceipt, setSubmissionReceipt] = useState<{ id: string; timestamp: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    if (status !== 'idle') setStatus('idle');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Anti-spam honeypot detection
    if (formData.honeypot) {
      console.warn('Spam submission detected and dropped silently.');
      setStatus('error');
      setErrorMessage('Submission rejected by automated security filters.');
      return;
    }

    // 2. Client-side input validation
    if (!formData.name.trim() || formData.name.length < 2) {
      setStatus('error');
      setErrorMessage('Please provide your full legal name or representative name.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setStatus('error');
      setErrorMessage('Please provide a valid corporate or professional email address.');
      return;
    }

    if (!formData.message.trim() || formData.message.length < 15) {
      setStatus('error');
      setErrorMessage('Please provide detailed project requirements (minimum 15 characters).');
      return;
    }

    setIsSubmitting(true);
    setStatus('idle');

    try {
      const endpoint = import.meta.env.VITE_CONTACT_FORM_ENDPOINT;
      const refId = `FFT-${Math.floor(100000 + Math.random() * 900000)}`;
      const timestamp = new Date().toLocaleString('en-US', { timeZoneName: 'short' });

      if (endpoint) {
        // Send to configured secure external form endpoint
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify({
            ...formData,
            referenceId: refId,
            recipient: companyData.contactEmail,
            source: window.location.href,
          })
        });

        if (!response.ok) {
          throw new Error('Server returned an error status.');
        }
      } else {
        // Transparent static hosting fallback: Prepare secure mailto payload dispatch
        const mailtoSubject = encodeURIComponent(`[Website Inquiry ${refId}] - ${formData.serviceInterest} from ${formData.name}`);
        const mailtoBody = encodeURIComponent(
          `Official Website Inquiry Reference: ${refId}\n` +
          `Timestamp: ${timestamp}\n\n` +
          `Sender Name: ${formData.name}\n` +
          `Email: ${formData.email}\n` +
          `Phone: ${formData.phone || 'N/A'}\n` +
          `Organization: ${formData.organization || 'N/A'}\n` +
          `Service / Topic: ${formData.serviceInterest}\n\n` +
          `Project Requirements:\n${formData.message}\n\n` +
          `Submitted via Future Finger Technologies Official Portal`
        );

        // Open user's default email client safely
        window.open(`mailto:${companyData.contactEmail}?subject=${mailtoSubject}&body=${mailtoBody}`, '_blank');
      }

      setSubmissionReceipt({ id: refId, timestamp });
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        organization: '',
        serviceInterest: 'Custom Software Development',
        message: '',
        honeypot: '',
      });
    } catch (err: unknown) {
      console.error('Contact submission error:', err);
      setStatus('error');
      setErrorMessage('Could not connect to external form dispatch service. You can email us directly at ' + companyData.contactEmail);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-2xl relative overflow-hidden">
      {/* Decorative top border glow */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-500 via-cyan-400 to-indigo-500" />

      {status === 'success' && submissionReceipt ? (
        <div className="py-8 text-center space-y-4 animate-in fade-in duration-300">
          <div className="w-14 h-14 bg-emerald-500/10 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto text-emerald-400">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-white">Inquiry Prepared & Dispatched</h3>
          <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
            Your inquiry reference <span className="font-mono text-cyan-300 font-semibold">{submissionReceipt.id}</span> has been logged and dispatched to our engineering leadership at <span className="text-white font-medium">{companyData.contactEmail}</span>.
          </p>
          <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800 text-xs text-slate-400 inline-block font-mono">
            Dispatched at: {submissionReceipt.timestamp}
          </div>
          <div className="pt-4">
            <button
              onClick={() => setStatus('idle')}
              className="text-xs px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
            >
              Send Another Inquiry
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Honeypot anti-spam trap */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="form_honeypot_field">Leave this empty</label>
            <input
              id="form_honeypot_field"
              type="text"
              name="honeypot"
              tabIndex={-1}
              autoComplete="off"
              value={formData.honeypot}
              onChange={handleChange}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                Full Name <span className="text-cyan-400">*</span>
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. John Doe"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
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
                placeholder="name@company.com"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                Organization / Company
              </label>
              <input
                type="text"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                placeholder="Company or Agency Name"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 or International prefix"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
              Area of Interest / Service
            </label>
            <select
              name="serviceInterest"
              value={formData.serviceInterest}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
            >
              <option value="Custom Software Development">Custom Software Development</option>
              <option value="AI Agent & Automation Solutions">AI Agent & Automation Solutions</option>
              <option value="XShield Endpoint Security Suite">XShield™ Endpoint Security Suite</option>
              <option value="HRLord Biometric & Payroll System">HRLord™ Biometric & Payroll Platform</option>
              <option value="FFT-TRACE-X Cyber Forensics">FFT-TRACE-X™ Cyber Forensics</option>
              <option value="Shipzyro Logistics Solutions">Shipzyro™ Logistics Solutions</option>
              <option value="Website & Web Application Engineering">Website & Web Application Engineering</option>
              <option value="Cloud, DevOps & CI/CD Pipelines">Cloud, DevOps & CI/CD Pipelines</option>
              <option value="Cybersecurity & Vulnerability Audit">Cybersecurity & Vulnerability Audit</option>
              <option value="Strategic Partnership Inquiry">Strategic Partnership Inquiry</option>
              <option value="General Corporate Inquiry">General Corporate Inquiry</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
              Project Description & Requirements <span className="text-cyan-400">*</span>
            </label>
            <textarea
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Provide context regarding your objectives, current technical stack, and anticipated timeline..."
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors resize-y"
            />
          </div>

          {status === 'error' && (
            <div className="flex items-center gap-2 p-3 rounded-xl bg-rose-950/40 border border-rose-800/60 text-xs text-rose-300">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <div className="text-[11px] text-slate-400 flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
              <span>Destination: {companyData.contactEmail}</span>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-xs tracking-wide text-white bg-gradient-to-r from-brand-600 via-cyan-600 to-indigo-600 hover:from-brand-500 hover:via-cyan-500 hover:to-indigo-500 shadow-lg shadow-brand-500/25 transition-all duration-300 disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Processing...</span>
                </>
              ) : (
                <>
                  <span>Transmit Inquiry</span>
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
