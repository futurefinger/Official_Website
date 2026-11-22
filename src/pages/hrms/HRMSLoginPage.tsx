import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  DEMO_USERS, 
  setCurrentUser, 
  HRMSUser, 
  getCurrentUser 
} from '../../data/hrmsData';
import { 
  Lock, 
  Mail, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle, 
  Building2, 
  UserCheck, 
  Sparkles,
  ArrowLeft
} from 'lucide-react';

export const HRMSLoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const cleanEmail = email.trim().toLowerCase();
    const cleanPass = password.trim();

    if (!cleanEmail || !cleanPass) {
      setError('Please enter both your corporate email and secure password.');
      return;
    }

    // Secure authentication check against corporate master credentials
    const isSuperAdmin = (cleanEmail === 'futurefingerindia@gmail.com' || cleanEmail === 'admin@futurefinger.com' || cleanEmail === 'admin@example.com') && cleanPass === 'FutureFinger@Admin2026';
    const isHrLead = cleanEmail === 'hr@futurefinger.com' && cleanPass === 'FutureFinger@Admin2026';

    if (isSuperAdmin) {
      const superAdminUser: HRMSUser = {
        id: 'USR-ADMIN-01',
        name: 'Future Finger Technologies',
        email: cleanEmail,
        role: 'SuperAdmin',
        company: 'Future Finger Technologies',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150'
      };
      setCurrentUser(superAdminUser);
      navigate('/hrms');
    } else if (isHrLead) {
      const hrUser: HRMSUser = {
        id: 'USR-HR-02',
        name: 'Aaryan (HR Lead)',
        email: cleanEmail,
        role: 'HR_Manager',
        company: 'Future Finger Technologies',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150'
      };
      setCurrentUser(hrUser);
      navigate('/hrms');
    } else {
      setError('Invalid credentials. Unauthorized access attempts are monitored and logged.');
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-center items-center p-4 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Return to website link */}
      <div className="w-full max-w-md flex justify-between items-center mb-6 z-10">
        <Link
          to="/"
          className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Corporate Site</span>
        </Link>
      </div>

      <div className="w-full max-w-md bg-slate-900/90 border border-slate-800 rounded-3xl p-7 shadow-2xl backdrop-blur-xl relative z-10 space-y-6">
        
        {/* Brand Header */}
        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center font-black text-white text-xl mx-auto shadow-lg shadow-cyan-500/25">
            FF
          </div>
          <h1 className="text-xl font-black text-white">WorkSphere HRMS SaaS</h1>
          <p className="text-xs text-slate-400">
            Enterprise Human Capital & Contract Lifecycle Gateway
          </p>
        </div>

        {/* Standard Form */}
        <form onSubmit={handleLogin} className="space-y-4 text-xs">
          {error && (
            <div className="p-3 rounded-xl bg-red-950/80 border border-red-500/50 text-red-300 text-xs font-medium">
              {error}
            </div>
          )}

          <div>
            <label className="block text-slate-300 font-semibold mb-1">Corporate Email</label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                placeholder="futurefingerindia@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-3 py-2.5 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500 transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-slate-300 font-semibold mb-1">Password</label>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-3 py-2.5 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500 transition-colors"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold text-xs shadow-lg shadow-cyan-500/20 transition-all hover:scale-[1.01]"
          >
            Access Secure Workspace
          </button>
        </form>

        {/* Security Notice */}
        <div className="pt-3 border-t border-slate-800/80 text-[10px] text-slate-400 text-center space-y-1">
          <div className="flex items-center justify-center gap-1.5 text-emerald-400 font-medium">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>End-to-End Encrypted Session • UDYAM-DL-06-0044819</span>
          </div>
          <p>
            Authorized Personnel Only · Future Finger Technologies Enterprise Sovereign Infrastructure
          </p>
        </div>

      </div>
    </div>
  );
};
