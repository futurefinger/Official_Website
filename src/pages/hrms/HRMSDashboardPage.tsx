import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HRMSLayout } from '../../components/hrms/HRMSLayout';
import { 
  Contract, 
  Employee, 
  HRMSUser, 
  getStoredContracts, 
  getStoredEmployees, 
  getCurrentUser, 
  signContract,
  deleteContract
} from '../../data/hrmsData';
import { ContractViewModal } from '../../components/hrms/ContractViewModal';
import { ContractFormModal } from '../../components/hrms/ContractFormModal';
import { 
  FileText, 
  Users, 
  DollarSign, 
  ShieldCheck, 
  Plus, 
  ExternalLink, 
  CheckCircle, 
  Clock, 
  AlertCircle,
  FileCheck,
  TrendingUp,
  Download,
  Building,
  Briefcase,
  ChevronRight
} from 'lucide-react';

export const HRMSDashboardPage: React.FC = () => {
  const [contracts, setContracts] = useState<Contract[]>([]);
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [user, setUser] = useState<HRMSUser | null>(null);

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
    setEmployees(getStoredEmployees());
    setUser(getCurrentUser());
  };

  const handleSignContract = (contractId: string, signerName: string) => {
    signContract(contractId, signerName);
    loadData();
    // Update view modal if open
    const updated = getStoredContracts().find(c => c.id === contractId);
    if (updated) {
      setViewModalContract(updated);
    }
  };

  const handleContractSaved = (savedContract: Contract) => {
    setIsFormModalOpen(false);
    loadData();
  };

  // Metrics calculations
  const activeContracts = contracts.filter(c => c.status === 'Active');
  const pendingContracts = contracts.filter(c => c.status === 'Pending Signature');
  
  const inrContractValue = contracts
    .filter(c => c.currency === 'INR')
    .reduce((sum, c) => sum + c.contractValue, 0);

  const usdContractValue = contracts
    .filter(c => c.currency === 'USD')
    .reduce((sum, c) => sum + c.contractValue, 0);

  const totalMonthlyPayroll = employees.reduce((sum, e) => sum + e.salaryMonthly, 0);

  return (
    <HRMSLayout activeTab="dashboard">
      <div className="space-y-6">
        
        {/* Welcome Header */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-cyan-950/40 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 sm:flex sm:items-center sm:justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 uppercase tracking-wider">
                  Live Enterprise Console
                </span>
                <span className="text-xs text-slate-400">
                  Role: <strong className="text-slate-200">{user?.role || 'SuperAdmin'}</strong>
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Welcome back, {user?.name || 'Administrator'}
              </h1>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
                Real-time contract lifecycle management, MSME compliance verification, and corporate workforce orchestration.
              </p>
            </div>

            <div className="mt-4 sm:mt-0 flex flex-wrap gap-2.5">
              <button
                onClick={() => {
                  setFormModalContract(null);
                  setIsFormModalOpen(true);
                }}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white text-xs font-bold shadow-lg shadow-cyan-500/25 transition-all hover:scale-[1.02]"
              >
                <Plus className="w-4 h-4" />
                <span>Create Contract</span>
              </button>

              <Link
                to="/hrms/contracts"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>All Agreements</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Executive Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Card 1: Contracts Pipeline Value */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-lg backdrop-blur">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-slate-400">Total Contract Value</span>
              <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                <DollarSign className="w-4 h-4" />
              </div>
            </div>
            <div className="mt-3">
              <div className="text-2xl font-black text-white">
                ₹{(inrContractValue / 100000).toFixed(2)}L
              </div>
              <div className="text-[11px] text-cyan-400 font-medium mt-0.5">
                + ${usdContractValue.toLocaleString()} USD International
              </div>
            </div>
            <div className="mt-3 text-[11px] text-slate-400 border-t border-slate-800/80 pt-2 flex items-center justify-between">
              <span>{contracts.length} Total Contracts</span>
              <span className="text-emerald-400 font-semibold">{activeContracts.length} Active</span>
            </div>
          </div>

          {/* Card 2: Signature Pending Defense */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-lg backdrop-blur">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-slate-400">Pending Execution</span>
              <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                <Clock className="w-4 h-4" />
              </div>
            </div>
            <div className="mt-3">
              <div className="text-2xl font-black text-white">
                {pendingContracts.length}
              </div>
              <div className="text-[11px] text-amber-400 font-medium mt-0.5">
                Awaiting Digital E-Signature
              </div>
            </div>
            <div className="mt-3 text-[11px] text-slate-400 border-t border-slate-800/80 pt-2 flex items-center justify-between">
              <span>Escrow Protected (30/40/30)</span>
              <span className="text-slate-300 font-mono">SAC 998314</span>
            </div>
          </div>

          {/* Card 3: Active Workforce Bench */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-lg backdrop-blur">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-slate-400">Workforce & Bench</span>
              <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                <Users className="w-4 h-4" />
              </div>
            </div>
            <div className="mt-3">
              <div className="text-2xl font-black text-white">
                {employees.length} Engineers
              </div>
              <div className="text-[11px] text-blue-400 font-medium mt-0.5">
                100% In-House Dedicated Team
              </div>
            </div>
            <div className="mt-3 text-[11px] text-slate-400 border-t border-slate-800/80 pt-2 flex items-center justify-between">
              <span>Attendance Rate</span>
              <span className="text-emerald-400 font-semibold">96.8% Active</span>
            </div>
          </div>

          {/* Card 4: Monthly Payroll Run */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-lg backdrop-blur">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-slate-400">Monthly Payroll Run</span>
              <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <Briefcase className="w-4 h-4" />
              </div>
            </div>
            <div className="mt-3">
              <div className="text-2xl font-black text-white">
                ₹{(totalMonthlyPayroll / 1000).toLocaleString()}k
              </div>
              <div className="text-[11px] text-emerald-400 font-medium mt-0.5">
                Statutory PF & ESI Synchronized
              </div>
            </div>
            <div className="mt-3 text-[11px] text-slate-400 border-t border-slate-800/80 pt-2 flex items-center justify-between">
              <span>Biometric Adapter</span>
              <span className="text-emerald-400 font-mono">Port 8000 Sync</span>
            </div>
          </div>

        </div>

        {/* Recent Contracts Section */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-slate-800">
            <div>
              <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                <FileCheck className="w-5 h-5 text-cyan-400" />
                <span>Active Commercial & SaaS Contracts</span>
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">
                All agreements backed by Indian MSME Act 2006, SAC 998314 and dual cryptographic timestamps.
              </p>
            </div>
            <Link
              to="/hrms/contracts"
              className="text-xs text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-1 group self-start sm:self-auto"
            >
              <span>View All ({contracts.length})</span>
              <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* Contracts Table */}
          <div className="overflow-x-auto mt-4">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-950/70 text-slate-400 uppercase font-semibold text-[10px] tracking-wider border-b border-slate-800">
                <tr>
                  <th className="py-3 px-4">Contract ID & Client</th>
                  <th className="py-3 px-4">Category</th>
                  <th className="py-3 px-4">Value</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4">Signatures</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 font-sans">
                {contracts.slice(0, 5).map((contract) => {
                  const isBothSigned = contract.signedByClient && contract.signedByCompany;
                  return (
                    <tr key={contract.id} className="hover:bg-slate-800/40 transition-colors">
                      <td className="py-3.5 px-4">
                        <div className="font-bold text-slate-200">{contract.clientCompany}</div>
                        <div className="text-[11px] text-slate-400">{contract.clientName}</div>
                        <div className="text-[10px] font-mono text-cyan-400 mt-0.5">{contract.id}</div>
                      </td>
                      <td className="py-3.5 px-4">
                        <span className="px-2 py-0.5 rounded-full bg-slate-800 border border-slate-700 text-slate-300 font-medium text-[11px]">
                          {contract.type}
                        </span>
                      </td>
                      <td className="py-3.5 px-4">
                        <div className="font-bold text-white">
                          {contract.currency === 'INR' ? `₹${contract.contractValue.toLocaleString()}` : `$${contract.contractValue.toLocaleString()} USD`}
                        </div>
                        <div className="text-[10px] text-slate-400">SAC: {contract.sacCode}</div>
                      </td>
                      <td className="py-3.5 px-4">
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
                      </td>
                      <td className="py-3.5 px-4">
                        <div className="flex items-center gap-1.5">
                          <span className={`w-2 h-2 rounded-full ${contract.signedByCompany ? 'bg-emerald-400' : 'bg-slate-600'}`} title="Company Signed" />
                          <span className="text-[10px] text-slate-300">FFT</span>
                          <span className="text-slate-600">/</span>
                          <span className={`w-2 h-2 rounded-full ${contract.signedByClient ? 'bg-emerald-400' : 'bg-amber-400'}`} title="Client Signed" />
                          <span className="text-[10px] text-slate-300">{contract.signedByClient ? 'Signed' : 'Pending'}</span>
                        </div>
                      </td>
                      <td className="py-3.5 px-4 text-right">
                        <div className="flex items-center justify-end gap-1.5">
                          <button
                            onClick={() => {
                              setViewModalContract(contract);
                              setIsViewModalOpen(true);
                            }}
                            className="px-2.5 py-1 rounded-lg bg-cyan-600/20 hover:bg-cyan-600/30 text-cyan-300 border border-cyan-500/30 font-semibold transition-colors flex items-center gap-1"
                            title="View Legal Agreement & Print PDF"
                          >
                            <span>Inspect & Print</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Bottom Dual Grid: Statutory Proof & Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Statutory Verification Box */}
          <div className="lg:col-span-2 bg-slate-900/80 border border-slate-800 rounded-3xl p-6 shadow-xl">
            <div className="flex items-center gap-2 mb-3">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              <h3 className="text-sm font-bold text-white">
                Sovereign Commercial & Legal Framework
              </h3>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Every contract executed through the Future Finger Technologies HRMS SaaS platform includes sovereign statutory protections:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">
              <div className="p-3 rounded-2xl bg-slate-950/70 border border-slate-800">
                <div className="text-[10px] text-slate-400 uppercase font-semibold">MSME Samadhaan Protection</div>
                <div className="text-xs font-bold text-cyan-300 mt-1 font-mono">UDYAM-DL-06-0044819</div>
                <p className="text-[10px] text-slate-400 mt-1">45-day statutory payment enforcement under Section 15 of MSMED Act 2006.</p>
              </div>
              <div className="p-3 rounded-2xl bg-slate-950/70 border border-slate-800">
                <div className="text-[10px] text-slate-400 uppercase font-semibold">GST Compliance</div>
                <div className="text-xs font-bold text-cyan-300 mt-1 font-mono">07AVAPK3756C1ZV</div>
                <p className="text-[10px] text-slate-400 mt-1">SAC 998314 for Custom IT Software & SaaS Services with 18% dynamic ITC.</p>
              </div>
              <div className="p-3 rounded-2xl bg-slate-950/70 border border-slate-800">
                <div className="text-[10px] text-slate-400 uppercase font-semibold">Dual Digital Stamp</div>
                <div className="text-xs font-bold text-cyan-300 mt-1 font-mono">SHA-256 Validated</div>
                <p className="text-[10px] text-slate-400 mt-1">Permanent cryptographic timestamp stored client-side in localStorage.</p>
              </div>
            </div>
          </div>

          {/* Quick Demo Access Box */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Building className="w-5 h-5 text-cyan-400" />
                <h3 className="text-sm font-bold text-white">Live Role Switching</h3>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Test the HRMS SaaS experience from three distinct enterprise viewpoints without credentials:
              </p>
              <div className="space-y-2 mt-4 text-xs">
                <div className="p-2 rounded-xl bg-slate-950/70 border border-slate-800 flex items-center justify-between">
                  <div>
                    <span className="font-semibold text-white">SuperAdmin:</span>
                    <span className="text-[11px] text-slate-400 ml-1.5">Alok Bansal</span>
                  </div>
                  <span className="text-[9px] bg-cyan-950 text-cyan-300 px-1.5 py-0.5 rounded font-mono">Full Access</span>
                </div>
                <div className="p-2 rounded-xl bg-slate-950/70 border border-slate-800 flex items-center justify-between">
                  <div>
                    <span className="font-semibold text-white">HR Manager:</span>
                    <span className="text-[11px] text-slate-400 ml-1.5">Priya Sharma</span>
                  </div>
                  <span className="text-[9px] bg-blue-950 text-blue-300 px-1.5 py-0.5 rounded font-mono">Operations</span>
                </div>
                <div className="p-2 rounded-xl bg-slate-950/70 border border-slate-800 flex items-center justify-between">
                  <div>
                    <span className="font-semibold text-white">Client Portal:</span>
                    <span className="text-[11px] text-slate-400 ml-1.5">Sanjay Mehta</span>
                  </div>
                  <span className="text-[9px] bg-emerald-950 text-emerald-300 px-1.5 py-0.5 rounded font-mono">Signatory</span>
                </div>
              </div>
            </div>
            
            <Link
              to="/hrms/login"
              className="mt-4 w-full py-2.5 rounded-xl bg-cyan-600/20 hover:bg-cyan-600/30 text-cyan-300 border border-cyan-500/30 text-xs font-bold text-center block transition-colors"
            >
              Open Login & Role Switcher →
            </Link>
          </div>

        </div>

      </div>

      {/* Modals */}
      <ContractViewModal
        contract={viewModalContract}
        isOpen={isViewModalOpen}
        onClose={() => setIsViewModalOpen(false)}
        onSign={handleSignContract}
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
