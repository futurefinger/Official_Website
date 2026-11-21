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

  const handleCustomLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError('Please provide an email address');
      return;
    }

    // Match existing or create temporary user
    const matched = DEMO_USERS.find(u => u.email.toLowerCase() === email.toLowerCase());
    if (matched) {
      setCurrentUser(matched);
      navigate('/hrms');
    } else {
      // Create guest session
      const newUser: HRMSUser = {
        id: `USR-${Date.now().toString().slice(-4)}`,
        name: email.split('@')[0],
        email: email,
        role: 'HR_Manager',
        company: 'Future Finger Technologies',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150'
      };
      setCurrentUser(newUser);
      navigate('/hrms');
    }
  };

  const handleQuickLogin = (user: HRMSUser) => {
    setCurrentUser(user);
    navigate('/hrms');
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
        <Link
          to="/hrms"
          className="text-xs text-cyan-400 hover:text-cyan-300 font-semibold"
        >
          Direct Dashboard →
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

        {/* 1-Click Role Switcher Demo Cards */}
        <div className="space-y-2">
          <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
            1-Click Instant Demo Authentication
          </div>
          
          <div className="grid grid-cols-1 gap-2">
            {DEMO_USERS.map((u) => (
              <button
                key={u.id}
                type="button"
                onClick={() => handleQuickLogin(u)}
                className="flex items-center justify-between p-3 rounded-2xl bg-slate-950/70 hover:bg-slate-800/80 border border-slate-800 hover:border-cyan-500/40 text-left transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-cyan-400 font-bold text-xs group-hover:scale-105 transition-transform">
                    {u.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-white text-xs group-hover:text-cyan-300 transition-colors">
                      {u.name}
                    </div>
                    <div className="text-[10px] text-slate-400">{u.email}</div>
                  </div>
                </div>

                <div className="text-right">
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full font-semibold ${
                    u.role === 'SuperAdmin' 
                      ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30'
                      : u.role === 'HR_Manager'
                      ? 'bg-blue-500/10 text-blue-400 border border-blue-500/30'
                      : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                  }`}>
                    {u.role}
                  </span>
                  <div className="text-[9px] text-cyan-400 font-medium mt-0.5 flex items-center justify-end gap-1">
                    <span>Login</span>
                    <ArrowRight className="w-2.5 h-2.5" />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex-1 h-px bg-slate-800" />
          <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">or login with credentials</span>
          <div className="flex-1 h-px bg-slate-800" />
        </div>

        {/* Standard Form */}
        <form onSubmit={handleCustomLogin} className="space-y-3.5 text-xs">
          {error && (
            <div className="p-2.5 rounded-xl bg-red-950/50 border border-red-500/40 text-red-300 text-xs">
              {error}
            </div>
          )}

          <div>
            <label className="block text-slate-300 font-semibold mb-1">Corporate Email</label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                placeholder="name@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-3 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-slate-300 font-semibold mb-1">Password</label>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                placeholder="••••••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-3 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-2.5 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold text-xs shadow-lg shadow-cyan-500/20 transition-all hover:scale-[1.01]"
          >
            Access Secure Workspace
          </button>
        </form>

        {/* Statutory Compliance Footer */}
        <div className="pt-3 border-t border-slate-800/80 text-[10px] text-slate-400 text-center space-y-1">
          <div className="flex items-center justify-center gap-1.5 text-emerald-400 font-medium">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Encrypted Session • UDYAM-DL-06-0044819</span>
          </div>
          <p>
            Future Finger Technologies Sovereign Cloud Infrastructure
          </p>
        </div>

      </div>
    </div>
  );
};
