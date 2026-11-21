import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle2, 
  Shield, 
  Download, 
  ExternalLink, 
  AlertCircle, 
  Cpu, 
  Layers, 
  FileText, 
  Lock 
} from 'lucide-react';
import { SEOHead } from '../../components/common/SEOHead';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { CTASection } from '../../components/sections/CTASection';
import { ContactForm } from '../../components/forms/ContactForm';
import { productsData } from '../../data/productsData';

export const ProductDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = productsData.find(p => p.slug === slug);

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  // Schema.org SoftwareApplication schema
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: product.name,
    operatingSystem: product.id === 'xsheild' ? 'Windows 10, Windows 11, Windows Server' : 'Cloud / Linux / Cross-Platform',
    applicationCategory: product.category,
    description: product.description,
    author: {
      '@type': 'Organization',
      name: 'Future Finger Technologies'
    }
  };

  return (
    <div className="py-12 bg-slate-950">
      <SEOHead
        title={`${product.name} - ${product.tagline}`}
        description={product.description}
        schemaData={productSchema}
        keywords={[product.name, product.category, 'Future Finger Technologies Software']}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: 'Products', path: '/products' },
            { label: product.name }
          ]}
        />

        {/* Product Hero Header */}
        <div className="max-w-4xl mb-16">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-xs px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800 text-cyan-300 font-mono">
              {product.category}
            </span>
            <span
              className={`text-xs px-3 py-0.5 rounded-full font-mono font-medium border ${
                product.status === 'Live'
                  ? 'bg-emerald-950 text-emerald-400 border-emerald-800'
                  : product.status === 'Beta'
                  ? 'bg-amber-950 text-amber-400 border-amber-800'
                  : 'bg-blue-950 text-blue-400 border-blue-800'
              }`}
            >
              Status: {product.status} ({product.version || 'Enterprise'})
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {product.name}
          </h1>
          <p className="text-lg sm:text-xl text-cyan-400 font-medium mt-3">
            {product.tagline}
          </p>
          <p className="text-base sm:text-lg text-slate-300 mt-5 leading-relaxed">
            {product.description}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-6">
            {product.downloadUrl && (
              <a
                href={product.downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-xs tracking-wider text-white bg-emerald-600 hover:bg-emerald-500 shadow-lg shadow-emerald-600/25 transition-all"
              >
                <Download className="w-4 h-4" />
                <span>{product.ctaText}</span>
              </a>
            )}

            {product.repositoryUrl && (
              <a
                href={product.repositoryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-xs text-slate-300 bg-slate-900 border border-slate-800 hover:text-white hover:border-slate-700 transition-colors"
              >
                <ExternalLink className="w-4 h-4 text-cyan-400" />
                <span>View GitHub Mirror</span>
              </a>
            )}

            <Link
              to={`/contact?product=${encodeURIComponent(product.name)}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-xs tracking-wider text-white bg-brand-600 hover:bg-brand-500 shadow-md transition-all"
            >
              <span>Request Enterprise Briefing</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Problem Addressed & Business Impact */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-400 block">
              The Critical Challenge
            </span>
            <h2 className="text-xl font-bold text-white">The Problem It Solves</h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              {product.problemSolved}
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block">
              Enterprise Value
            </span>
            <h2 className="text-xl font-bold text-white">Direct Business Benefits</h2>
            <div className="space-y-2">
              {product.businessBenefits.map((b, i) => (
                <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>{b}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Key Features & Intended Users */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          
          <div className="lg:col-span-7 p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-6">
            <h2 className="text-2xl font-bold text-white">Main Architectural Features</h2>
            <div className="space-y-4">
              {product.keyFeatures.map((feat, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                    {feat}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
              <h3 className="text-lg font-bold text-white">Intended Users & Fleets</h3>
              <ul className="space-y-2.5">
                {product.targetAudience.map((aud, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                    <span className="text-cyan-400 font-bold">•</span>
                    <span>{aud}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
              <h3 className="text-lg font-bold text-white">Verified Technical Overview</h3>
              <ul className="space-y-2">
                {product.technicalOverview.map((tech, i) => (
                  <li key={i} className="text-xs text-slate-300 p-2.5 rounded-lg bg-slate-950 font-mono">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Specialized XShield Highlight if on XShield */}
        {product.id === 'xsheild' && (
          <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border border-slate-800 mb-20 space-y-6">
            <div className="flex items-center gap-3">
              <Shield className="w-8 h-8 text-emerald-400" />
              <div>
                <h3 className="text-xl font-bold text-white">XShield™ Sovereign Release Verification</h3>
                <span className="text-xs text-slate-400">Authenticode Signed PE • Target OS: Windows 10 | 11 | Server</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              XShield™ is cryptographically signed and hashes are published for independent verification. All installations operate under the Permanent HUD Discretion Protocol (Silent Tray Operation), preventing user distraction while actively securing endpoints at the Windows Kernel Minifilter Driver layer.
            </p>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-cyan-300 break-all">
              Production SHA-256 Checksum: a01be96052f54097883ebc1aff17881700ab94b6d111226cba114776db585a67
            </div>
          </div>
        )}

        {/* Product Inquiry Form */}
        <div className="mb-20">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl font-bold text-white">
              Inquire or Request Demonstration for {product.name}
            </h2>
            <p className="text-sm text-slate-400 mt-1">
              Connect with our product engineers to test or deploy this platform.
            </p>
          </div>
          <ContactForm defaultSubject={product.name} />
        </div>

      </div>

      <CTASection />
    </div>
  );
};
