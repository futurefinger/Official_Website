import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  FileText, 
  Users, 
  LogIn, 
  LogOut, 
  ArrowLeft, 
  Plus, 
  ShieldCheck, 
  Building2, 
  Clock, 
  Menu, 
  X,
  UserCheck
} from 'lucide-react';
import { getCurrentUser, setCurrentUser, HRMSUser, getStoredContracts } from '../../data/hrmsData';
import { ContractFormModal } from './ContractFormModal';

interface HRMSLayoutProps {
  children: React.ReactNode;
  activeTab: 'dashboard' | 'contracts' | 'employees' | 'login';
}

export const HRMSLayout: React.FC<HRMSLayoutProps> = ({ children, activeTab }) => {
  const [currentUser, setUserState] = useState<HRMSUser | null>(null);
  const [currentTime, setCurrentTime] = useState<string>('');
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [isContractModalOpen, setIsContractModalOpen] = useState(false);
  const [contractCount, setContractCount] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const user = getCurrentUser();
    if (!user && activeTab !== 'login') {
      navigate('/hrms/login');
      return;
    }
    setUserState(user);

    const contracts = getStoredContracts();
    setContractCount(contracts.length);

    const updateClock = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleDateString('en-IN', {
          weekday: 'short',
          day: '2-digit',
          month: 'short',
          year: 'numeric'
        }) + ' ' +
        now.toLocaleTimeString('en-IN', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true
        }) + ' IST'
      );
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, [location.pathname]);

  const handleLogout = () => {
    setCurrentUser(null);
    setUserState(null);
    navigate('/hrms/login');
  };

  const navItems = [
    {
      id: 'dashboard',
      label: 'HRMS Dashboard',
      to: '/hrms',
      icon: LayoutDashboard,
      badge: 'Live'
    },
    {
      id: 'contracts',
      label: 'Contracts & Lifecycle',
      to: '/hrms/contracts',
      icon: FileText,
      badge: `${contractCount}`
    },
    {
      id: 'employees',
      label: 'Employee Directory',
      to: '/hrms/employees',
      icon: Users,
      badge: '8 Active'
    },
    {
      id: 'login',
      label: 'Switch Role / Login',
      to: '/hrms/login',
      icon: LogIn,
      badge: currentUser?.role || 'Guest'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      {/* Top Banner & Quick Controls */}
      <header className="sticky top-0 z-30 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Left Brand & Mobile Trigger */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
                className="md:hidden p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white"
                aria-label="Toggle Navigation"
              >
                {mobileSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>

              <Link to="/hrms" className="flex items-center gap-2.5 group">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center font-bold text-white shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
                  FF
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-extrabold text-sm sm:text-base tracking-wide text-white group-hover:text-cyan-400 transition-colors">
                      WorkSphere HRMS
                    </span>
                    <span className="text-[10px] bg-cyan-950 text-cyan-300 border border-cyan-800/80 px-1.5 py-0.5 rounded font-mono font-semibold">
                      v2.6 Enterprise
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-400 hidden sm:block">
                    Future Finger Technologies Sovereign Cloud
                  </div>
                </div>
              </Link>
            </div>

            {/* Center Live Clock */}
            <div className="hidden lg:flex items-center gap-2 text-xs text-slate-400 bg-slate-950/60 px-3 py-1.5 rounded-full border border-slate-800">
              <Clock className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span className="font-mono">{currentTime || 'Loading IST...'}</span>
            </div>

            {/* Right Quick Actions */}
            <div className="flex items-center gap-2 sm:gap-3">
              <button
                onClick={() => setIsContractModalOpen(true)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white text-xs font-semibold shadow-md shadow-cyan-500/20 transition-all hover:scale-[1.02]"
              >
                <Plus className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Generate Contract</span>
                <span className="sm:hidden">New</span>
              </button>

              {currentUser ? (
                <div className="flex items-center gap-2">
                  <div className="hidden sm:flex items-center gap-2 px-2.5 py-1 rounded-lg bg-slate-800/80 border border-slate-700/60 text-xs">
                    <div className="w-6 h-6 rounded-full bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-300 font-bold text-[10px]">
                      {currentUser.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-medium text-slate-200 leading-tight text-[11px]">{currentUser.name}</div>
                      <div className="text-[9px] text-cyan-400 font-mono leading-tight">{currentUser.role}</div>
                    </div>
                  </div>
                  <button
                    onClick={handleLogout}
                    title="Sign Out / Switch Account"
                    className="p-2 rounded-lg bg-slate-800 hover:bg-red-950/60 text-slate-400 hover:text-red-400 border border-slate-700/60 transition-colors"
                  >
                    <LogOut className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <Link
                  to="/hrms/login"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-cyan-400 text-xs font-medium border border-slate-700 transition-colors"
                >
                  <LogIn className="w-3.5 h-3.5" />
                  <span>Sign In</span>
                </Link>
              )}

              <Link
                to="/"
                className="hidden xl:flex items-center gap-1 text-xs text-slate-400 hover:text-white px-2 py-1.5 rounded-lg hover:bg-slate-800/50 transition-colors ml-1"
                title="Return to Future Finger Technologies Main Portal"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Main Site</span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Workspace Frame */}
      <div className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 flex gap-6">
        
        {/* Desktop Sidebar */}
        <aside className="hidden md:flex flex-col w-64 shrink-0 gap-6">
          <div className="bg-slate-900/80 border border-slate-800/90 rounded-2xl p-4 shadow-xl backdrop-blur">
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-3 mb-2">
              HRMS Workspace
            </div>
            <nav className="space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <Link
                    key={item.id}
                    to={item.to}
                    className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                      isActive
                        ? 'bg-gradient-to-r from-cyan-600/30 to-blue-600/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800/60 border border-transparent'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <Icon className={`w-4 h-4 ${isActive ? 'text-cyan-400' : 'text-slate-400'}`} />
                      <span>{item.label}</span>
                    </div>
                    {item.badge && (
                      <span className={`text-[10px] px-2 py-0.5 rounded-full font-mono font-medium ${
                        isActive 
                          ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' 
                          : 'bg-slate-800 text-slate-400 border border-slate-700/60'
                      }`}>
                        {item.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </nav>

            <div className="border-t border-slate-800/80 my-4" />

            {/* Quick Status Box */}
            <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 text-[11px] space-y-2">
              <div className="flex items-center gap-1.5 text-cyan-400 font-semibold">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Enterprise Compliance</span>
              </div>
              <div className="text-slate-400 text-[10px] leading-relaxed">
                Govt Reg: <span className="text-slate-200 font-mono">UDYAM-DL-06-0044819</span><br />
                GSTIN: <span className="text-slate-200 font-mono">07AVAPK3756C1ZV</span><br />
                SAC Code: <span className="text-slate-200 font-mono">998314</span>
              </div>
            </div>

            <div className="mt-4 pt-2">
              <Link
                to="/"
                className="flex items-center justify-center gap-1.5 w-full py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-medium transition-colors"
              >
                <Building2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>Visit Corporate Site</span>
              </Link>
            </div>
          </div>
        </aside>

        {/* Mobile Navigation Drawer */}
        {mobileSidebarOpen && (
          <div className="fixed inset-0 z-40 bg-slate-950/90 backdrop-blur-sm md:hidden flex">
            <div className="w-72 bg-slate-900 border-r border-slate-800 h-full p-5 flex flex-col justify-between animate-in slide-in-from-left duration-200">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-cyan-500 flex items-center justify-center font-bold text-white text-sm">
                      FF
                    </div>
                    <div>
                      <div className="font-bold text-sm text-white">WorkSphere HRMS</div>
                      <div className="text-[10px] text-cyan-400">Future Finger Technologies</div>
                    </div>
                  </div>
                  <button
                    onClick={() => setMobileSidebarOpen(false)}
                    className="p-1 rounded-lg text-slate-400 hover:text-white"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <nav className="space-y-1.5">
                  {navItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeTab === item.id;
                    return (
                      <Link
                        key={item.id}
                        to={item.to}
                        onClick={() => setMobileSidebarOpen(false)}
                        className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold ${
                          isActive
                            ? 'bg-cyan-600/30 text-cyan-300 border border-cyan-500/40'
                            : 'text-slate-300 hover:bg-slate-800'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <Icon className="w-4 h-4 text-cyan-400" />
                          <span>{item.label}</span>
                        </div>
                        {item.badge && (
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 font-mono">
                            {item.badge}
                          </span>
                        )}
                      </Link>
                    );
                  })}
                </nav>
              </div>

              <div className="pt-4 border-t border-slate-800 space-y-2">
                <Link
                  to="/"
                  onClick={() => setMobileSidebarOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-slate-800 text-white text-xs font-semibold"
                >
                  <ArrowLeft className="w-4 h-4 text-cyan-400" />
                  <span>Back to Main Website</span>
                </Link>
              </div>
            </div>
            <div className="flex-1" onClick={() => setMobileSidebarOpen(false)} />
          </div>
        )}

        {/* Content Body */}
        <main className="flex-1 min-w-0">
          {children}
        </main>
      </div>

      {/* Contract Generation Modal (Global across layout) */}
      <ContractFormModal
        isOpen={isContractModalOpen}
        onClose={() => setIsContractModalOpen(false)}
        onContractSaved={(newContract) => {
          setIsContractModalOpen(false);
          // Navigate to contracts or reload view
          navigate('/hrms/contracts');
        }}
      />

      {/* Compact HRMS Footer */}
      <footer className="border-t border-slate-900 bg-slate-950/80 py-4 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:flex sm:justify-between sm:items-center text-xs text-slate-500">
          <div>
            © 2026 Future Finger Technologies Private Limited. All Rights Reserved.
          </div>
          <div className="flex items-center justify-center gap-4 mt-2 sm:mt-0 font-mono text-[11px]">
            <span>UDYAM-DL-06-0044819</span>
            <span>•</span>
            <span>GSTIN: 07AVAPK3756C1ZV</span>
            <span>•</span>
            <span>SAC: 998314</span>
          </div>
        </div>
      </footer>
    </div>
  );
};
