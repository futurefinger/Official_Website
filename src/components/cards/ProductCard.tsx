import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Bot, CheckCircle2, Download, ExternalLink } from 'lucide-react';
import { ProductItem } from '../../types';

interface ProductCardProps {
  product: ProductItem;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const isXShield = product.id === 'xsheild';

  return (
    <div className="group relative flex flex-col justify-between p-6 md:p-8 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/40 hover:bg-slate-900/95 shadow-xl hover:shadow-cyan-500/10 transition-all duration-300">
      <div>
        {/* Header Status & Category */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500/20 group-hover:text-cyan-300 transition-colors">
              {isXShield ? <Shield className="w-5 h-5" /> : <Bot className="w-5 h-5" />}
            </div>
            <div>
              <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400 block">
                {product.category}
              </span>
              <span className="text-xs text-slate-400 font-mono">
                {product.version || 'Enterprise'}
              </span>
            </div>
          </div>

          <span
            className={`text-xs px-2.5 py-0.5 rounded-full font-mono font-medium border ${
              product.status === 'Live'
                ? 'bg-emerald-950/80 text-emerald-400 border-emerald-800/80'
                : product.status === 'Beta'
                ? 'bg-amber-950/80 text-amber-400 border-amber-800/80'
                : 'bg-blue-950/80 text-blue-400 border-blue-800/80'
            }`}
          >
            ● {product.status}
          </span>
        </div>

        {/* Product Name & Tagline */}
        <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
          {product.name}
        </h3>
        <p className="text-xs sm:text-sm font-medium text-cyan-400/90 mb-3">
          {product.tagline}
        </p>

        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
          {product.description}
        </p>

        {/* Key Features Bullet List */}
        <div className="space-y-2 mb-6">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
            Core Architectural Capabilities
          </span>
          {product.keyFeatures.slice(0, 3).map((feat, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5" />
              <span className="line-clamp-2">{feat}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Action Footer */}
      <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
        <Link
          to={`/products/${product.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 group-hover:text-cyan-300 transition-colors"
        >
          <span>View Architecture Dossier</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>

        {product.downloadUrl && (
          <a
            href={product.downloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-emerald-600/90 hover:bg-emerald-500 text-white transition-colors"
          >
            <Download className="w-3 h-3" />
            <span>Download</span>
          </a>
        )}

        {product.repositoryUrl && !product.downloadUrl && (
          <a
            href={product.repositoryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-slate-200"
          >
            <ExternalLink className="w-3 h-3" />
            <span>Repository</span>
          </a>
        )}
      </div>
    </div>
  );
};
