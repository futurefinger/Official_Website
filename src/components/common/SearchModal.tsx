import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, ArrowRight, FileText, Layers, Shield, Sparkles } from 'lucide-react';
import { servicesData } from '../../data/servicesData';
import { productsData } from '../../data/productsData';
import { industriesData } from '../../data/industriesData';
import { blogData } from '../../data/blogData';

interface SearchResultItem {
  title: string;
  category: 'Page' | 'Service' | 'Product' | 'Industry' | 'Article';
  path: string;
  snippet: string;
}

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResultItem[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  // Master index of searchable pages and content
  const searchIndex: SearchResultItem[] = [
    // Core pages
    { title: 'Home', category: 'Page', path: '/', snippet: 'Engineering the Future Through Intelligent Technology. Official Homepage.' },
    { title: 'About Us', category: 'Page', path: '/about', snippet: 'Who we are, executive leadership, engineering pods, and corporate background.' },
    { title: 'Our Company', category: 'Page', path: '/about/company', snippet: 'Company foundation, sovereign technology principles, and operational identity.' },
    { title: 'Our Vision & Mission', category: 'Page', path: '/about/vision-mission', snippet: 'Strategic mission to empower global enterprises with intelligent, sovereign software.' },
    { title: 'Our Approach', category: 'Page', path: '/about/approach', snippet: '6-stage software engineering lifecycle from discovery to SLA maintenance.' },
    { title: 'Why Choose Us', category: 'Page', path: '/about/why-choose-us', snippet: 'Architectural integrity, sovereign cyber defense, and 100% IP ownership.' },
    { title: 'Our Expertise', category: 'Page', path: '/expertise', snippet: 'Deep technical capabilities across AI, full-stack systems, and cybersecurity.' },
    { title: 'Technology Stack', category: 'Page', path: '/technology-stack', snippet: 'Comprehensive overview of frontend, backend, AI, database, and cloud stacks.' },
    { title: 'Our Process', category: 'Page', path: '/process', snippet: 'Rigorous development workflows, agile sprints, and automated QA gates.' },
    { title: 'Industries We Serve', category: 'Page', path: '/industries', snippet: 'Fintech, Healthcare, E-commerce, Logistics, Manufacturing, and Cyber Defense.' },
    { title: 'Case Studies', category: 'Page', path: '/case-studies', snippet: 'Verified implementations and illustrative enterprise architectures.' },
    { title: 'Portfolio', category: 'Page', path: '/portfolio', snippet: 'Showcase of flagship platforms, enterprise software, and engineering solutions.' },
    { title: 'Technology & Innovation', category: 'Page', path: '/technology-innovation', snippet: 'R&D roadmap, deterministic AI agents, and kernel minifilter defense.' },
    { title: 'Blog / Engineering Insights', category: 'Page', path: '/blog', snippet: 'Technical deep-dives on cybersecurity, AI agents, and modern cloud architecture.' },
    { title: 'Careers', category: 'Page', path: '/careers', snippet: 'Open engineering positions in Full-Stack, AI Architecture, and Systems Security.' },
    { title: 'Frequently Asked Questions', category: 'Page', path: '/faq', snippet: 'Answers regarding services, products, pricing, security, and engagement models.' },
    { title: 'Contact Us', category: 'Page', path: '/contact', snippet: 'Direct corporate email, project discovery, and office jurisdiction details.' },
    { title: 'Request a Quote', category: 'Page', path: '/request-quote', snippet: 'Detailed project estimation and scope consultation form.' },
    { title: 'Book a Consultation', category: 'Page', path: '/book-consultation', snippet: 'Schedule a 1-on-1 technical discovery call with our solutions architects.' },
    { title: 'Partnership Opportunities', category: 'Page', path: '/partnerships', snippet: 'Technology vendor alliances, system integration, and commercial resale.' },
    { title: 'Privacy Policy', category: 'Page', path: '/privacy-policy', snippet: 'Data protection standards aligned with Indian IT Act and international privacy laws.' },
    { title: 'Terms & Conditions', category: 'Page', path: '/terms-conditions', snippet: 'Legal terms governing software licensing, discovery, and service engagements.' },
    { title: 'Cookie Policy', category: 'Page', path: '/cookie-policy', snippet: 'Technical storage, telemetry preferences, and privacy controls.' },
    { title: 'Disclaimer', category: 'Page', path: '/disclaimer', snippet: 'Corporate warranties, illustrative solution disclosures, and limitation of liability.' },
    { title: 'Refund & Cancellation Policy', category: 'Page', path: '/refund-policy', snippet: 'Milestone-based billing terms and project cancellation frameworks.' },
    { title: 'Intellectual Property Notice', category: 'Page', path: '/intellectual-property', snippet: 'Ownership terms, trademark rights, and client IP transfer standards.' },

    // Services
    ...servicesData.map(service => ({
      title: service.title,
      category: 'Service' as const,
      path: `/services/${service.slug}`,
      snippet: service.shortDescription
    })),

    // Products
    ...productsData.map(prod => ({
      title: prod.name,
      category: 'Product' as const,
      path: `/products/${prod.slug}`,
      snippet: prod.tagline
    })),

    // Industries
    ...industriesData.map(ind => ({
      title: ind.name,
      category: 'Industry' as const,
      path: `/industries#${ind.slug}`,
      snippet: ind.description
    })),

    // Blog
    ...blogData.map(post => ({
      title: post.title,
      category: 'Article' as const,
      path: `/blog/${post.slug}`,
      snippet: post.excerpt
    }))
  ];

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setQuery('');
      setResults([]);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // Open triggered by parent state
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const q = query.toLowerCase();
    const filtered = searchIndex.filter(item => 
      item.title.toLowerCase().includes(q) || 
      item.snippet.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q)
    ).slice(0, 8);

    setResults(filtered);
  }, [query]);

  const handleSelect = (path: string) => {
    onClose();
    navigate(path);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 md:pt-24 px-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-800 bg-slate-900/90">
          <Search className="w-5 h-5 text-brand-400 mr-3 flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search services, products, technologies, legal..."
            className="w-full bg-transparent text-white placeholder-slate-400 text-base md:text-lg focus:outline-none"
          />
          {query && (
            <button 
              onClick={() => setQuery('')}
              className="text-slate-400 hover:text-white p-1 mr-1"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2 py-1 text-xs text-slate-400 bg-slate-800 rounded border border-slate-700 hover:text-white"
          >
            ESC
          </button>
        </div>

        {/* Results Area */}
        <div className="max-h-[60vh] overflow-y-auto p-3">
          {query.trim() === '' ? (
            <div className="py-8 text-center text-slate-400">
              <Sparkles className="w-8 h-8 text-brand-400/50 mx-auto mb-2 animate-pulse" />
              <p className="text-sm">Type keywords to search across all services, products, and pages.</p>
              <div className="flex flex-wrap justify-center gap-2 mt-4">
                {['XShield', 'HRLord', 'AI Agent', 'Web Development', 'Cybersecurity', 'Careers'].map(tag => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="text-xs px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 hover:bg-brand-900/40 hover:text-brand-300 border border-slate-700/60"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          ) : results.length === 0 ? (
            <div className="py-10 text-center text-slate-400">
              <p className="text-sm">No matches found for "{query}".</p>
              <p className="text-xs text-slate-500 mt-1">Try searching for terms like "HRMS", "Security", "DevOps", or "Quote".</p>
            </div>
          ) : (
            <div className="space-y-1.5">
              {results.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => handleSelect(item.path)}
                  className="flex items-start justify-between p-3 rounded-xl hover:bg-slate-800/80 cursor-pointer border border-transparent hover:border-slate-700 transition-all group"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-slate-800 text-brand-400 group-hover:bg-brand-500/20 group-hover:text-brand-300 transition-colors">
                      {item.category === 'Service' && <Layers className="w-4 h-4" />}
                      {item.category === 'Product' && <Shield className="w-4 h-4" />}
                      {item.category === 'Article' && <FileText className="w-4 h-4" />}
                      {(item.category === 'Page' || item.category === 'Industry') && <Search className="w-4 h-4" />}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-slate-100 group-hover:text-brand-300 transition-colors">
                          {item.title}
                        </span>
                        <span className="text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">
                          {item.category}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 line-clamp-1 mt-0.5">
                        {item.snippet}
                      </p>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-brand-400 group-hover:translate-x-1 transition-all mt-1" />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="px-4 py-2 bg-slate-950/60 border-t border-slate-800/80 text-[11px] text-slate-400 flex items-center justify-between">
          <span>Future Finger Technologies Search</span>
          <span>Navigation Quick Access</span>
        </div>
      </div>
    </div>
  );
};
