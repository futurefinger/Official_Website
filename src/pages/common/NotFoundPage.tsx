import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search, ShieldAlert } from 'lucide-react';
import { SEOHead } from '../../components/common/SEOHead';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="py-20 md:py-32 bg-slate-950 text-center">
      <SEOHead
        title="404 - Page Not Found"
        description="The requested page could not be located on the official corporate website of Future Finger Technologies."
      />

      <div className="max-w-xl mx-auto px-4">
        <div className="w-16 h-16 rounded-2xl bg-cyan-950/80 border border-cyan-800 text-cyan-400 flex items-center justify-center mx-auto mb-6 shadow-xl shadow-cyan-500/10">
          <ShieldAlert className="w-8 h-8" />
        </div>

        <span className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase block mb-2">
          HTTP ERROR 404
        </span>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
          Route Not Found
        </h1>

        <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8">
          The requested system route does not exist or has been relocated to another endpoint. Use the navigation links below to return to verified sectors.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-xs tracking-wider text-white bg-gradient-to-r from-brand-600 via-cyan-600 to-indigo-600 hover:from-brand-500 hover:via-cyan-500 hover:to-indigo-500 shadow-lg shadow-brand-500/25 transition-all"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            to="/services/website-development"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-xs text-slate-300 bg-slate-900 border border-slate-800 hover:text-white hover:border-slate-700 transition-colors"
          >
            <Search className="w-4 h-4 text-cyan-400" />
            <span>Browse Services</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
