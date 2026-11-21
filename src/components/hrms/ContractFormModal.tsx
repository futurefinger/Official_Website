import React, { useState, useEffect } from 'react';
import { Contract, saveContract } from '../../data/hrmsData';
import { X, Plus, Trash2, FileCheck, DollarSign } from 'lucide-react';

interface ContractFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onContractSaved: (contract: Contract) => void;
  existingContract?: Contract | null;
}

export const ContractFormModal: React.FC<ContractFormModalProps> = ({
  isOpen,
  onClose,
  onContractSaved,
  existingContract
}) => {
  const [title, setTitle] = useState('');
  const [type, setType] = useState<Contract['type']>('Custom IT Services');
  const [clientName, setClientName] = useState('');
  const [clientCompany, setClientCompany] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [contractValue, setContractValue] = useState<number>(50000);
  const [currency, setCurrency] = useState<'INR' | 'USD'>('INR');
  const [paymentTerms, setPaymentTerms] = useState('30% Advance / 40% Milestone Integration / 30% Handover');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [scopeOfWork, setScopeOfWork] = useState('');
  const [deliverables, setDeliverables] = useState<string[]>([
    'Core Architecture & Database Schema Provisioning',
    'Custom UI/UX & Webhook Ingestion Engine',
    'Statutory Compliance & GST Billing Integration'
  ]);
  const [status, setStatus] = useState<Contract['status']>('Active');

  useEffect(() => {
    if (existingContract) {
      setTitle(existingContract.title);
      setType(existingContract.type);
      setClientName(existingContract.clientName);
      setClientCompany(existingContract.clientCompany);
      setClientEmail(existingContract.clientEmail);
      setClientPhone(existingContract.clientPhone);
      setContractValue(existingContract.contractValue);
      setCurrency(existingContract.currency);
      setPaymentTerms(existingContract.paymentTerms);
      setStartDate(existingContract.startDate);
      setEndDate(existingContract.endDate);
      setScopeOfWork(existingContract.scopeOfWork);
      setDeliverables(existingContract.deliverables);
      setStatus(existingContract.status);
    } else {
      // Set default dates
      const now = new Date();
      const nextMonth = new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000);
      setStartDate(now.toISOString().split('T')[0]);
      setEndDate(nextMonth.toISOString().split('T')[0]);
      setTitle('');
      setClientName('');
      setClientCompany('');
      setClientEmail('');
      setClientPhone('');
      setContractValue(75000);
      setScopeOfWork('');
    }
  }, [existingContract, isOpen]);

  if (!isOpen) return null;

  const handleAddDeliverable = () => {
    setDeliverables([...deliverables, 'New milestone deliverable specification']);
  };

  const handleUpdateDeliverable = (idx: number, val: string) => {
    const updated = [...deliverables];
    updated[idx] = val;
    setDeliverables(updated);
  };

  const handleRemoveDeliverable = (idx: number) => {
    setDeliverables(deliverables.filter((_, i) => i !== idx));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const id = existingContract ? existingContract.id : `FFT-CTR-2026-${String(Math.floor(Math.random() * 900) + 100)}`;
    
    const newContract: Contract = {
      id,
      title: title || `${type} Agreement with ${clientCompany}`,
      type,
      clientName,
      clientCompany,
      clientEmail,
      clientPhone,
      contractValue: Number(contractValue),
      currency,
      paymentTerms,
      startDate,
      endDate,
      scopeOfWork,
      deliverables: deliverables.filter(d => d.trim().length > 0),
      status,
      signedByClient: existingContract ? existingContract.signedByClient : false,
      clientSignatureDate: existingContract?.clientSignatureDate,
      clientSignerName: existingContract?.clientSignerName,
      signedByCompany: true,
      companySignatureDate: new Date().toISOString().replace('T', ' ').substring(0, 19) + ' UTC',
      companySignerName: 'Vikram Malhotra (Lead AI Software Architect)',
      gstin: '07AVAPK3756C1ZV',
      sacCode: '998314',
      msmeUdyam: 'UDYAM-DL-06-0044819',
      createdAt: existingContract ? existingContract.createdAt : new Date().toISOString().split('T')[0]
    };

    saveContract(newContract);
    onContractSaved(newContract);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="relative w-full max-w-3xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden text-slate-100">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-950/60 border-b border-slate-800">
          <div>
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <FileCheck className="w-5 h-5 text-cyan-400" />
              {existingContract ? 'Edit Agreement / Contract' : 'Generate New Corporate Contract'}
            </h2>
            <p className="text-xs text-slate-400">
              Future Finger Technologies • MSME Udyam UDYAM-DL-06-0044819 • GSTIN 07AVAPK3756C1ZV
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6 max-h-[80vh] overflow-y-auto">
          
          {/* Contract Core Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2">
              <label className="block text-xs font-semibold text-slate-300 mb-1">Contract / Project Title *</label>
              <input
                type="text"
                required
                placeholder="e.g. Enterprise Logistics ERP & WhatsApp Notification Engine"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-3.5 py-2 rounded-lg bg-slate-950 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Contract Service Category</label>
              <select
                value={type}
                onChange={(e) => setType(e.target.value as Contract['type'])}
                className="w-full px-3.5 py-2 rounded-lg bg-slate-950 border border-slate-700 text-sm text-white focus:outline-none focus:border-cyan-400"
              >
                <option value="Custom IT Services">Custom IT Services (Website / WebApp)</option>
                <option value="HRMS SaaS Enterprise">HRMS SaaS Enterprise License & AMC</option>
                <option value="Mobile App Development">Mobile App Development (Flutter / Android)</option>
                <option value="AI Automation Retainer">AI Automation Retainer & LLM Workflows</option>
                <option value="Software Architecture Audit">Software Architecture & Security Audit Sprint</option>
                <option value="School SaaS CampusOS">School SaaS CampusOS & EdTech Suite</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Agreement Status</label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value as Contract['status'])}
                className="w-full px-3.5 py-2 rounded-lg bg-slate-950 border border-slate-700 text-sm text-white focus:outline-none focus:border-cyan-400"
              >
                <option value="Active">Active (In Progress)</option>
                <option value="Pending Signature">Pending Signature (Awaiting Sign-off)</option>
                <option value="Draft">Draft (Preliminary Stage)</option>
                <option value="Completed">Completed (Fully Delivered)</option>
              </select>
            </div>
          </div>

          {/* Client Details */}
          <div className="border-t border-slate-800 pt-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-3">Client Organization Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Client Company Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Apex Global Logistics LLP"
                  value={clientCompany}
                  onChange={(e) => setClientCompany(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-lg bg-slate-950 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Signatory / Contact Person *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sunil Aggarwal (Director)"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-lg bg-slate-950 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Client Email Address *</label>
                <input
                  type="email"
                  required
                  placeholder="e.g. billing@apexglobal.example.com"
                  value={clientEmail}
                  onChange={(e) => setClientEmail(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-lg bg-slate-950 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Client Contact Phone</label>
                <input
                  type="text"
                  placeholder="e.g. +91 98110 24892"
                  value={clientPhone}
                  onChange={(e) => setClientPhone(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-lg bg-slate-950 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                />
              </div>
            </div>
          </div>

          {/* Financials & Dates */}
          <div className="border-t border-slate-800 pt-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-3">Financial Terms & Milestone Schedule</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Currency</label>
                <select
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value as 'INR' | 'USD')}
                  className="w-full px-3.5 py-2 rounded-lg bg-slate-950 border border-slate-700 text-sm text-white focus:outline-none focus:border-cyan-400"
                >
                  <option value="INR">INR (₹ - Indian Rupee)</option>
                  <option value="USD">USD ($ - US Dollar)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Total Contract Value *</label>
                <input
                  type="number"
                  required
                  min="1000"
                  value={contractValue}
                  onChange={(e) => setContractValue(Number(e.target.value))}
                  className="w-full px-3.5 py-2 rounded-lg bg-slate-950 border border-slate-700 text-sm text-white focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Payment Structure</label>
                <input
                  type="text"
                  value={paymentTerms}
                  onChange={(e) => setPaymentTerms(e.target.value)}
                  placeholder="30% Advance / 40% Milestone / 30% Handover"
                  className="w-full px-3.5 py-2 rounded-lg bg-slate-950 border border-slate-700 text-sm text-white focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Effective Start Date *</label>
                <input
                  type="date"
                  required
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-lg bg-slate-950 border border-slate-700 text-sm text-white focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-xs font-semibold text-slate-300 mb-1">Target Handover / Expiration Date *</label>
                <input
                  type="date"
                  required
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-lg bg-slate-950 border border-slate-700 text-sm text-white focus:outline-none focus:border-cyan-400"
                />
              </div>
            </div>
          </div>

          {/* Scope of Work */}
          <div className="border-t border-slate-800 pt-4">
            <label className="block text-xs font-semibold text-slate-300 mb-1">Detailed Technical Scope of Work</label>
            <textarea
              rows={3}
              value={scopeOfWork}
              onChange={(e) => setScopeOfWork(e.target.value)}
              placeholder="Specify the technical requirements, architecture constraints, API integrations, and SLA guarantees..."
              className="w-full px-3.5 py-2 rounded-lg bg-slate-950 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
            />
          </div>

          {/* Deliverables List */}
          <div className="border-t border-slate-800 pt-4">
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-semibold text-slate-300">Deliverables & Milestone Checklist</label>
              <button
                type="button"
                onClick={handleAddDeliverable}
                className="text-xs text-cyan-400 hover:text-cyan-300 flex items-center gap-1 font-semibold"
              >
                <Plus className="w-3.5 h-3.5" />
                Add Milestone
              </button>
            </div>
            <div className="space-y-2">
              {deliverables.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <input
                    type="text"
                    value={item}
                    onChange={(e) => handleUpdateDeliverable(idx, e.target.value)}
                    className="flex-1 px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-700 text-xs text-white focus:outline-none focus:border-cyan-400"
                  />
                  {deliverables.length > 1 && (
                    <button
                      type="button"
                      onClick={() => handleRemoveDeliverable(idx)}
                      className="p-1.5 text-slate-500 hover:text-rose-400"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Submit Actions */}
          <div className="border-t border-slate-800 pt-4 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg text-xs font-semibold text-slate-400 hover:text-white transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-lg bg-gradient-to-r from-cyan-500 via-brand-600 to-indigo-600 text-slate-950 font-bold text-xs shadow-lg shadow-cyan-500/20 hover:brightness-110 transition-all flex items-center gap-1.5"
            >
              <FileCheck className="w-4 h-4" />
              {existingContract ? 'Save Contract Modifications' : 'Generate & Issue Contract'}
            </button>
          </div>

        </form>

      </div>
    </div>
  );
};
