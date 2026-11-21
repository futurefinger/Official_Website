import React, { useState } from 'react';
import { Calendar, Clock, CheckCircle2, AlertCircle, Loader2, Video } from 'lucide-react';
import { companyData } from '../../data/companyData';

export const ConsultationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    consultationTopic: 'Enterprise Software Architecture',
    preferredDate: '',
    preferredTime: '14:00 - 15:00 IST',
    meetingPlatform: 'Google Meet',
    agenda: '',
    honeypot: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [bookingRef, setBookingRef] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    if (status !== 'idle') setStatus('idle');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.honeypot) {
      setStatus('error');
      setErrorMessage('Submission rejected by anti-spam filter.');
      return;
    }

    if (!formData.name.trim() || !formData.email.trim() || !formData.agenda.trim()) {
      setStatus('error');
      setErrorMessage('Please fill in your name, email, and meeting objectives.');
      return;
    }

    setIsSubmitting(true);
    setStatus('idle');

    try {
      const refId = `CONSULT-${Math.floor(100000 + Math.random() * 900000)}`;
      const mailtoSubject = encodeURIComponent(`[Consultation Booking ${refId}] - ${formData.consultationTopic} (${formData.name})`);
      const mailtoBody = encodeURIComponent(
        `Consultation Booking Request: ${refId}\n\n` +
        `Client Name: ${formData.name}\n` +
        `Corporate Email: ${formData.email}\n` +
        `Organization: ${formData.organization || 'N/A'}\n` +
        `Topic: ${formData.consultationTopic}\n` +
        `Preferred Date: ${formData.preferredDate || 'Flexible'}\n` +
        `Preferred Slot: ${formData.preferredTime}\n` +
        `Platform: ${formData.meetingPlatform}\n\n` +
        `Discussion Agenda & Technical Questions:\n${formData.agenda}\n\n` +
        `Booked via Future Finger Technologies Official Portal`
      );

      window.open(`mailto:${companyData.contactEmail}?subject=${mailtoSubject}&body=${mailtoBody}`, '_blank');
      setBookingRef(refId);
      setStatus('success');
    } catch {
      setStatus('error');
      setErrorMessage('Could not initialize calendar booking. Please email directly to ' + companyData.contactEmail);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-500 via-cyan-400 to-indigo-500" />

      {status === 'success' && bookingRef ? (
        <div className="py-8 text-center space-y-4 animate-in fade-in">
          <div className="w-14 h-14 bg-emerald-500/10 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto text-emerald-400">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-white">Consultation Request Staged</h3>
          <p className="text-sm text-slate-300 max-w-md mx-auto">
            Your consultation request <span className="font-mono text-cyan-300 font-bold">{bookingRef}</span> has been staged for transmission to <span className="text-white font-medium">{companyData.contactEmail}</span>.
          </p>
          <p className="text-xs text-slate-400">
            We will confirm calendar coordinates and dispatch a calendar invitation within 24 hours.
          </p>
          <div className="pt-2">
            <button
              onClick={() => setStatus('idle')}
              className="text-xs px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200"
            >
              Book Another Session
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="hidden" aria-hidden="true">
            <input type="text" name="honeypot" value={formData.honeypot} onChange={handleChange} tabIndex={-1} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                Your Name <span className="text-cyan-400">*</span>
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-cyan-400"
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
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-cyan-400"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                Organization
              </label>
              <input
                type="text"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                placeholder="Organization or Venture Name"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-cyan-400"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                Consultation Topic
              </label>
              <select
                name="consultationTopic"
                value={formData.consultationTopic}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-cyan-400"
              >
                <option value="Enterprise Software Architecture">Enterprise Software Architecture</option>
                <option value="AI Agents & RAG Integration">AI Agents & RAG Integration</option>
                <option value="XShield Enterprise Deployment">XShield™ Endpoint Defense Briefing</option>
                <option value="HRLord Biometric Attendance System">HRLord™ Workforce Pilot</option>
                <option value="Cyber Forensics & Threat Assessment">Cyber Forensics & Threat Assessment</option>
                <option value="Cloud Migration & DevOps Modernization">Cloud Migration & DevOps Modernization</option>
                <option value="General Strategic Discovery">General Strategic Discovery</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                Preferred Date
              </label>
              <input
                type="date"
                name="preferredDate"
                value={formData.preferredDate}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-cyan-400"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                Preferred Time Slot
              </label>
              <select
                name="preferredTime"
                value={formData.preferredTime}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-cyan-400"
              >
                <option value="11:00 - 12:00 IST">11:00 - 12:00 IST</option>
                <option value="14:00 - 15:00 IST">14:00 - 15:00 IST (Recommended)</option>
                <option value="16:00 - 17:00 IST">16:00 - 17:00 IST</option>
                <option value="19:00 - 20:00 IST (US/EU Friendly)">19:00 - 20:00 IST (US/EU Friendly)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                Platform
              </label>
              <select
                name="meetingPlatform"
                value={formData.meetingPlatform}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-cyan-400"
              >
                <option value="Google Meet">Google Meet</option>
                <option value="Zoom">Zoom</option>
                <option value="Microsoft Teams">Microsoft Teams</option>
                <option value="Phone Call">Direct Phone Call</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
              Technical Agenda & Core Inquiries <span className="text-cyan-400">*</span>
            </label>
            <textarea
              name="agenda"
              required
              rows={4}
              value={formData.agenda}
              onChange={handleChange}
              placeholder="What specific questions or architectural challenges would you like our solutions architects to prepare for?"
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-cyan-400 resize-y"
            />
          </div>

          {status === 'error' && (
            <div className="flex items-center gap-2 p-3 rounded-xl bg-rose-950/40 border border-rose-800 text-xs text-rose-300">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <div className="text-xs text-slate-400 flex items-center gap-2">
              <Video className="w-4 h-4 text-cyan-400" />
              <span>30-Minute Complimentary Technical Discovery Call</span>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-xs tracking-wider text-white bg-gradient-to-r from-brand-600 via-cyan-600 to-indigo-600 hover:from-brand-500 hover:via-cyan-500 hover:to-indigo-500 shadow-lg shadow-brand-500/25 transition-all duration-300 disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Staging Meeting...</span>
                </>
              ) : (
                <>
                  <Calendar className="w-4 h-4" />
                  <span>Schedule Consultation</span>
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
