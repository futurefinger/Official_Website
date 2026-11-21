import React, { useState } from 'react';
import { Contract } from '../../data/hrmsData';
import { 
  X, 
  Printer, 
  CheckCircle, 
  ShieldCheck, 
  Building, 
  Calendar, 
  DollarSign, 
  FileText,
  PenTool
} from 'lucide-react';

interface ContractViewModalProps {
  contract: Contract | null;
  isOpen: boolean;
  onClose: () => void;
  onSign: (contractId: string, signerName: string) => void;
}

export const ContractViewModal: React.FC<ContractViewModalProps> = ({
  contract,
  isOpen,
  onClose,
  onSign
}) => {
  const [signingName, setSigningName] = useState('');
  const [showSignInput, setShowSignInput] = useState(false);

  if (!isOpen || !contract) return null;

  const handleSignSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!signingName.trim()) return;
    onSign(contract.id, signingName.trim());
    setShowSignInput(false);
  };

  const handlePrint = () => {
    window.print();
  };

  const formattedAmount = contract.currency === 'INR' 
    ? `₹${contract.contractValue.toLocaleString('en-IN')}` 
    : `$${contract.contractValue.toLocaleString('en-US')}`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 print:p-0 print:bg-white print:static">
      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden print:border-none print:shadow-none print:bg-white print:text-black">
        
        {/* Modal Header & Controls (Hidden in Print) */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-950/70 border-b border-slate-800 print:hidden">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-cyan-950/60 text-cyan-400 border border-cyan-800/40">
              {contract.id}
            </span>
            <span className={`px-2.5 py-1 rounded-md text-xs font-semibold ${
              contract.status === 'Active' ? 'bg-emerald-950/60 text-emerald-400 border border-emerald-800/40' :
              contract.status === 'Pending Signature' ? 'bg-amber-950/60 text-amber-400 border border-amber-800/40' :
              contract.status === 'Completed' ? 'bg-blue-950/60 text-blue-400 border border-blue-800/40' :
              'bg-slate-800 text-slate-300'
            }`}>
              {contract.status}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {!contract.signedByClient && (
              <button
                onClick={() => setShowSignInput(true)}
                className="px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-cyan-500 to-brand-600 text-slate-950 font-semibold text-xs flex items-center gap-1.5 shadow-md hover:brightness-110 transition-all"
              >
                <PenTool className="w-3.5 h-3.5" />
                Digital e-Sign
              </button>
            )}
            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium flex items-center gap-1.5 transition-colors"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              Download / Print PDF
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Digital Signature Action Panel (Hidden in Print) */}
        {showSignInput && !contract.signedByClient && (
          <div className="bg-cyan-950/40 border-b border-cyan-800/40 px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 print:hidden">
            <div>
              <p className="text-sm font-semibold text-cyan-300">Authorize & Sign This Agreement</p>
              <p className="text-xs text-slate-400">Enter authorized signatory name to apply verified cryptographic timestamp.</p>
            </div>
            <form onSubmit={handleSignSubmit} className="flex items-center gap-2 w-full sm:w-auto">
              <input
                type="text"
                placeholder="Authorized Signatory Name"
                value={signingName}
                onChange={(e) => setSigningName(e.target.value)}
                required
                className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
              />
              <button
                type="submit"
                className="px-3 py-1.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs rounded-lg transition-colors"
              >
                Confirm Signature
              </button>
              <button
                type="button"
                onClick={() => setShowSignInput(false)}
                className="px-2 py-1.5 text-slate-400 hover:text-slate-200 text-xs"
              >
                Cancel
              </button>
            </form>
          </div>
        )}

        {/* Formal Printable Document Body */}
        <div className="p-8 sm:p-12 space-y-8 print:p-0 print:space-y-6 text-slate-200 print:text-black">
          
          {/* Document Header */}
          <div className="border-b-2 border-slate-700 print:border-black pb-6 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <div className="w-8 h-8 rounded-lg bg-cyan-500 flex items-center justify-center font-bold text-slate-950 text-sm">
                  FFT
                </div>
                <h1 className="text-2xl font-bold tracking-tight text-white print:text-black">
                  Future Finger Technologies
                </h1>
              </div>
              <p className="text-xs text-slate-400 print:text-gray-600">
                Technology. Intelligence. Innovation.
              </p>
              <p className="text-xs text-slate-400 print:text-gray-600 mt-1">
                New Delhi, India • Email: futurefingerindia@gmail.com
              </p>
              <div className="flex flex-wrap gap-3 mt-2 text-[11px] text-slate-400 print:text-gray-700">
                <span><strong>MSME Udyam:</strong> {contract.msmeUdyam}</span>
                <span><strong>GSTIN:</strong> {contract.gstin}</span>
                <span><strong>SAC Code:</strong> {contract.sacCode}</span>
              </div>
            </div>

            <div className="text-right sm:text-right w-full sm:w-auto">
              <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400 print:text-black block">
                Master Service Agreement
              </span>
              <p className="text-base font-mono font-bold text-white print:text-black mt-0.5">
                {contract.id}
              </p>
              <p className="text-xs text-slate-400 print:text-gray-600 mt-1">
                Date: {contract.createdAt}
              </p>
            </div>
          </div>

          {/* Agreement Preamble */}
          <div className="text-sm leading-relaxed text-slate-300 print:text-gray-800">
            <p>
              This Master Technology Services and Software Licensing Agreement (the <strong>"Agreement"</strong>) is entered into as of <strong>{contract.startDate}</strong> (the "Effective Date"), by and between:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-4 p-4 rounded-xl bg-slate-950/50 print:bg-gray-100 border border-slate-800 print:border-gray-300">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 print:text-black block mb-1">
                  Service Provider
                </span>
                <p className="font-semibold text-white print:text-black">Future Finger Technologies</p>
                <p className="text-xs text-slate-400 print:text-gray-600">Principal Office: New Delhi, India</p>
                <p className="text-xs text-slate-400 print:text-gray-600">Authorized: Lead AI Systems Architect</p>
                <p className="text-xs text-slate-400 print:text-gray-600">Registration: {contract.msmeUdyam}</p>
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 print:text-black block mb-1">
                  Client Organization
                </span>
                <p className="font-semibold text-white print:text-black">{contract.clientCompany}</p>
                <p className="text-xs text-slate-400 print:text-gray-600">Contact: {contract.clientName}</p>
                <p className="text-xs text-slate-400 print:text-gray-600">Email: {contract.clientEmail}</p>
                <p className="text-xs text-slate-400 print:text-gray-600">Phone: {contract.clientPhone}</p>
              </div>
            </div>
          </div>

          {/* Section 1: Project Scope & Subject Matter */}
          <div className="space-y-3">
            <h2 className="text-sm font-bold uppercase tracking-wider text-cyan-400 print:text-black border-b border-slate-800 print:border-gray-300 pb-1">
              1. Project Title & Scope of Work
            </h2>
            <h3 className="text-base font-semibold text-white print:text-black">{contract.title}</h3>
            <p className="text-xs leading-relaxed text-slate-300 print:text-gray-800">
              {contract.scopeOfWork}
            </p>
          </div>

          {/* Section 2: Milestones & Key Deliverables */}
          <div className="space-y-3">
            <h2 className="text-sm font-bold uppercase tracking-wider text-cyan-400 print:text-black border-b border-slate-800 print:border-gray-300 pb-1">
              2. Core Deliverables & Architecture Schedule
            </h2>
            <ul className="grid grid-cols-1 gap-2 text-xs text-slate-300 print:text-gray-800">
              {contract.deliverables.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-cyan-400 print:text-black font-bold">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 3: Financial Consideration & Payment Schedule */}
          <div className="space-y-3">
            <h2 className="text-sm font-bold uppercase tracking-wider text-cyan-400 print:text-black border-b border-slate-800 print:border-gray-300 pb-1">
              3. Commercial Terms & Payment Escrow
            </h2>
            <div className="p-4 rounded-xl bg-slate-950/60 print:bg-gray-100 border border-slate-800 print:border-gray-300 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <span className="text-xs text-slate-400 print:text-gray-600 block">Total Agreed Contract Consideration</span>
                <span className="text-2xl font-bold text-emerald-400 print:text-black">{formattedAmount}</span>
                <span className="text-xs text-slate-400 print:text-gray-600 block mt-0.5">+ 18% Statutory GST (SAC 998314) applicable for Indian entities</span>
              </div>
              <div className="text-xs text-slate-300 print:text-gray-800 max-w-sm">
                <span className="font-semibold text-white print:text-black block mb-1">Disbursement Structure:</span>
                <p>{contract.paymentTerms}</p>
              </div>
            </div>
          </div>

          {/* Section 4: Legal Terms & IP Sovereignty */}
          <div className="space-y-3 text-xs leading-relaxed text-slate-400 print:text-gray-700">
            <h2 className="text-sm font-bold uppercase tracking-wider text-cyan-400 print:text-black border-b border-slate-800 print:border-gray-300 pb-1">
              4. Terms, Intellectual Property & Sovereign Defense
            </h2>
            <p>
              <strong>4.1 Intellectual Property Transfer:</strong> Upon receipt of 100% final contract consideration, Future Finger Technologies assigns complete, unencumbered intellectual property, source repositories, and deployment assets to the Client Organization.
            </p>
            <p>
              <strong>4.2 Confidentiality & Non-Disclosure:</strong> Both parties agree to protect all technical specifications, customer credentials, databases, and trade secrets under mutual strict non-disclosure obligations.
            </p>
            <p>
              <strong>4.3 90-Day Architecture Warranty:</strong> Future Finger Technologies guarantees prompt zero-cost remediation of software defects or regressions within 90 days following formal delivery verification.
            </p>
            <p>
              <strong>4.4 Governing Law & Jurisdiction:</strong> This Agreement shall be governed and interpreted under the laws of the Republic of India. Courts of New Delhi shall have exclusive jurisdiction.
            </p>
          </div>

          {/* Section 5: Dual Signatures */}
          <div className="border-t-2 border-slate-700 print:border-black pt-6">
            <h2 className="text-sm font-bold uppercase tracking-wider text-cyan-400 print:text-black mb-4">
              5. Authorized Signatures & Seal
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              
              {/* Service Provider Signature */}
              <div className="p-4 rounded-xl border border-slate-800 print:border-gray-300 bg-slate-950/40 print:bg-white space-y-3">
                <span className="text-xs font-semibold text-slate-400 print:text-gray-600 block">FOR FUTURE FINGER TECHNOLOGIES</span>
                <div className="h-16 flex items-center">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-950/40 border border-emerald-800/60 text-emerald-400 text-xs font-mono">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>DIGITALLY SIGNED & SEALED</span>
                  </div>
                </div>
                <div className="border-t border-slate-800 print:border-gray-300 pt-2 text-xs">
                  <p className="font-semibold text-white print:text-black">{contract.companySignerName}</p>
                  <p className="text-slate-400 print:text-gray-600">Timestamp: {contract.companySignatureDate}</p>
                </div>
              </div>

              {/* Client Organization Signature */}
              <div className="p-4 rounded-xl border border-slate-800 print:border-gray-300 bg-slate-950/40 print:bg-white space-y-3">
                <span className="text-xs font-semibold text-slate-400 print:text-gray-600 block">FOR {contract.clientCompany.toUpperCase()}</span>
                <div className="h-16 flex items-center">
                  {contract.signedByClient ? (
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-950/40 border border-emerald-800/60 text-emerald-400 text-xs font-mono">
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                      <span>SIGNED & AUTHORIZED</span>
                    </div>
                  ) : (
                    <div className="text-xs text-amber-400/80 italic">
                      Pending Client Authorized e-Signature
                    </div>
                  )}
                </div>
                <div className="border-t border-slate-800 print:border-gray-300 pt-2 text-xs">
                  <p className="font-semibold text-white print:text-black">
                    {contract.clientSignerName || contract.clientName}
                  </p>
                  <p className="text-slate-400 print:text-gray-600">
                    Timestamp: {contract.clientSignatureDate || 'Awaiting Authorization'}
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
