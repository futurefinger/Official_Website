import React, { useState, useEffect } from 'react';
import { HRMSLayout } from '../../components/hrms/HRMSLayout';
import { 
  Contract, 
  getStoredContracts, 
  deleteContract, 
  signContract 
} from '../../data/hrmsData';
import { ContractViewModal } from '../../components/hrms/ContractViewModal';
import { ContractFormModal } from '../../components/hrms/ContractFormModal';
import { 
  FileText, 
  Plus, 
  Search, 
  Filter, 
  CheckCircle, 
  Clock, 
  Printer, 
  Edit3, 
  Trash2, 
  PenTool, 
  Download,
  Building,
  DollarSign,
  AlertTriangle
} from 'lucide-react';

export const HRMSContractsPage: React.FC = () => {
  const [contracts, setContracts] = useState<Contract[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'All' | Contract['status']>('All');
  const [typeFilter, setTypeFilter] = useState<string>('All');

  // Modals state
  const [viewModalContract, setViewModalContract] = useState<Contract | null>(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [formModalContract, setFormModalContract] = useState<Contract | null>(null);
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    setContracts(getStoredContracts());
  };

  const handleSign = (contractId: string, signerName: string) => {
    signContract(contractId, signerName);
    loadData();
    const updated = getStoredContracts().find(c => c.id === contractId);
    if (updated) {
      setViewModalContract(updated);
    }
  };

  const handleDelete = (id: string, title: string) => {
    if (window.confirm(`Are you sure you want to delete contract "${title}" (${id})?`)) {
      deleteContract(id);
      loadData();
    }
  };

  const handleContractSaved = (savedContract: Contract) => {
    setIsFormModalOpen(false);
    loadData();
  };

  // Filtered contracts
  const filteredContracts = contracts.filter((c) => {
    const matchesSearch = 
      c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.clientCompany.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.clientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.id.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus = statusFilter === 'All' || c.status === statusFilter;
    const matchesType = typeFilter === 'All' || c.type === typeFilter;

    return matchesSearch && matchesStatus && matchesType;
  });

  const statuses: Array<'All' | Contract['status']> = ['All', 'Active', 'Pending Signature', 'Draft', 'Completed'];

  return (
    <HRMSLayout activeTab="contracts">
      <div className="space-y-6">
        
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-slate-900/80 border border-slate-800 rounded-3xl p-6 shadow-xl">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="p-1.5 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                <FileText className="w-4 h-4" />
              </span>
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
                Contract Lifecycle Management
              </span>
            </div>
            <h1 className="text-2xl font-black text-white">
              Enterprise Contracts & SaaS Agreements
            </h1>
            <p className="text-xs text-slate-400 mt-1 max-w-2xl">
              Create, review, digitally sign, and export formal contracts. Pre-configured with statutory GSTIN 07AVAPK3756C1ZV, SAC 998314, and MSME UDYAM protections.
            </p>
          </div>

          <button
            onClick={() => {
              setFormModalContract(null);
              setIsFormModalOpen(true);
            }}
            className="flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white text-xs font-bold shadow-lg shadow-cyan-500/25 transition-all hover:scale-[1.02] self-start md:self-auto shrink-0"
          >
            <Plus className="w-4 h-4" />
            <span>Generate New Contract</span>
          </button>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 shadow-lg space-y-3">
          <div className="flex flex-col sm:flex-row gap-3">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by contract ID, client company, client name, or title..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-950/80 border border-slate-800 rounded-xl pl-10 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
              />
            </div>

            {/* Service Type Dropdown */}
            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              className="bg-slate-950/80 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-300 focus:outline-none focus:border-cyan-500 transition-colors shrink-0"
            >
              <option value="All">All Service Categories</option>
              <option value="Custom IT Services">Custom IT Services</option>
              <option value="HRMS SaaS Enterprise">HRMS SaaS Enterprise</option>
              <option value="Mobile App Development">Mobile App Development</option>
              <option value="AI Automation Retainer">AI Automation Retainer</option>
              <option value="Software Architecture Audit">Software Architecture Audit</option>
              <option value="School SaaS CampusOS">School SaaS CampusOS</option>
            </select>
          </div>

          {/* Status Tabs */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800/80">
            {statuses.map((status) => {
              const count = status === 'All' 
                ? contracts.length 
                : contracts.filter(c => c.status === status).length;
              const isSelected = statusFilter === status;

              return (
                <button
                  key={status}
                  onClick={() => setStatusFilter(status)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                    isSelected
                      ? 'bg-cyan-600/30 text-cyan-300 border border-cyan-500/50 shadow-sm'
                      : 'bg-slate-950/60 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800'
                  }`}
                >
                  <span>{status}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                    isSelected ? 'bg-cyan-500/30 text-cyan-200' : 'bg-slate-800 text-slate-500'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Contracts Grid / Cards */}
        {filteredContracts.length === 0 ? (
          <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-12 text-center">
            <AlertTriangle className="w-10 h-10 text-amber-400 mx-auto mb-3" />
            <h3 className="text-base font-bold text-white">No contracts match your criteria</h3>
            <p className="text-xs text-slate-400 mt-1 max-w-md mx-auto">
              Try adjusting your search query or reset the filter tabs to view all available enterprise agreements.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setStatusFilter('All');
                setTypeFilter('All');
              }}
              className="mt-4 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-400 text-xs font-semibold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4">
            {filteredContracts.map((contract) => {
              const isBothSigned = contract.signedByClient && contract.signedByCompany;

              return (
                <div
                  key={contract.id}
                  className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-lg hover:border-slate-700 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
                >
                  {/* Left Info */}
                  <div className="space-y-2 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-mono text-xs font-bold text-cyan-400 bg-cyan-950/60 border border-cyan-800/60 px-2 py-0.5 rounded-md">
                        {contract.id}
                      </span>
                      <span className="text-[11px] px-2 py-0.5 rounded-md bg-slate-800 border border-slate-700 text-slate-300 font-medium">
                        {contract.type}
                      </span>
                      <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                        contract.status === 'Active'
                          ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                          : contract.status === 'Pending Signature'
                          ? 'bg-amber-500/10 text-amber-400 border border-amber-500/30'
                          : 'bg-slate-800 text-slate-300 border border-slate-700'
                      }`}>
                        {contract.status === 'Active' && <CheckCircle className="w-2.5 h-2.5" />}
                        {contract.status === 'Pending Signature' && <Clock className="w-2.5 h-2.5" />}
                        {contract.status}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-base font-bold text-white hover:text-cyan-400 transition-colors cursor-pointer"
                        onClick={() => {
                          setViewModalContract(contract);
                          setIsViewModalOpen(true);
                        }}
                      >
                        {contract.title}
                      </h3>
                      <div className="text-xs text-slate-300 flex flex-wrap items-center gap-x-3 gap-y-1 mt-0.5">
                        <span className="font-semibold text-slate-200">{contract.clientCompany}</span>
                        <span className="text-slate-500">•</span>
                        <span>Contact: {contract.clientName}</span>
                        <span className="text-slate-500">•</span>
                        <span>{contract.clientEmail}</span>
                      </div>
                    </div>

                    <div className="text-[11px] text-slate-400 line-clamp-1 max-w-3xl">
                      {contract.scopeOfWork}
                    </div>

                    {/* Timeline & Signatures Status */}
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-slate-400 pt-1">
                      <div>
                        Timeline: <span className="text-slate-300 font-medium">{contract.startDate} to {contract.endDate}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-slate-500">•</span>
                        <span>Company:</span>
                        <span className="text-emerald-400 font-medium font-mono">Signed</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-slate-500">•</span>
                        <span>Client:</span>
                        {contract.signedByClient ? (
                          <span className="text-emerald-400 font-medium font-mono">Signed ({contract.clientSignerName})</span>
                        ) : (
                          <span className="text-amber-400 font-medium font-mono">Pending Client Execution</span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Right Value & Actions */}
                  <div className="flex flex-col sm:flex-row md:flex-col items-start md:items-end justify-between md:justify-center gap-3 pt-3 md:pt-0 border-t md:border-t-0 border-slate-800 shrink-0">
                    <div className="text-left md:text-right">
                      <div className="text-lg font-black text-white">
                        {contract.currency === 'INR' ? `₹${contract.contractValue.toLocaleString()}` : `$${contract.contractValue.toLocaleString()} USD`}
                      </div>
                      <div className="text-[10px] text-slate-400 font-mono">
                        GST: {contract.gstin}
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => {
                          setViewModalContract(contract);
                          setIsViewModalOpen(true);
                        }}
                        className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-cyan-600/20 hover:bg-cyan-600/30 text-cyan-300 border border-cyan-500/30 text-xs font-semibold transition-colors"
                        title="View Full Legal Agreement & Print PDF"
                      >
                        <Printer className="w-3.5 h-3.5" />
                        <span>Inspect & Print</span>
                      </button>

                      <button
                        onClick={() => {
                          setFormModalContract(contract);
                          setIsFormModalOpen(true);
                        }}
                        className="p-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors"
                        title="Edit Contract Details"
                      >
                        <Edit3 className="w-3.5 h-3.5" />
                      </button>

                      <button
                        onClick={() => handleDelete(contract.id, contract.title)}
                        className="p-1.5 rounded-xl bg-slate-800 hover:bg-red-950/60 text-slate-400 hover:text-red-400 border border-slate-700 transition-colors"
                        title="Delete Contract"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        )}

      </div>

      {/* Modals */}
      <ContractViewModal
        contract={viewModalContract}
        isOpen={isViewModalOpen}
        onClose={() => setIsViewModalOpen(false)}
        onSign={handleSign}
      />

      <ContractFormModal
        isOpen={isFormModalOpen}
        existingContract={formModalContract}
        onClose={() => setIsFormModalOpen(false)}
        onContractSaved={handleContractSaved}
      />
    </HRMSLayout>
  );
};
