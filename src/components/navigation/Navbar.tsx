import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  ChevronDown, 
  Menu, 
  X, 
  Search, 
  Shield, 
  Bot, 
  Cpu, 
  Code, 
  ArrowRight,
  Sparkles,
  PhoneCall
} from 'lucide-react';
import { servicesData } from '../../data/servicesData';
import { productsData } from '../../data/productsData';
import { SearchModal } from '../common/SearchModal';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [companyDropdownOpen, setCompanyDropdownOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setProductsDropdownOpen(false);
    setCompanyDropdownOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-slate-950/85 backdrop-blur-xl border-b border-slate-800/80 shadow-2xl py-3' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link 
              to="/" 
              className="flex items-center gap-3 group focus:outline-none"
              aria-label="Future Finger Technologies Home"
            >
              {/* Distinctive Futuristic Brand Emblem */}
              <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 via-indigo-600 to-cyan-400 p-[1.5px] shadow-lg shadow-brand-500/20 group-hover:shadow-brand-400/40 transition-all duration-300">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-transparent to-brand-500/10" />
                  {/* Digital Biometric / Futuristic Fingerprint SVG Glyph */}
                  <svg 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="1.75" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform duration-300"
                  >
                    <path d="M12 2a10 10 0 0 0-6.88 17.26" />
                    <path d="M12 6a6 6 0 0 0-4.24 10.24" />
                    <path d="M12 10a2 2 0 0 0-1.42 3.41" />
                    <path d="M12 14v4" />
                    <path d="M16 10a6 6 0 0 1 2.83 5.17" />
                    <path d="M19.07 4.93A10 10 0 0 1 22 12" />
                    <circle cx="12" cy="12" r="1" fill="#00F0FF" />
                  </svg>
                </div>
              </div>

              {/* Wordmark */}
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-base sm:text-lg font-bold tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                    FUTURE FINGER
                  </span>
                  <span className="text-xs px-1.5 py-0.2 font-mono font-semibold text-cyan-400 bg-cyan-950/60 border border-cyan-800/60 rounded">
                    TECH
                  </span>
                </div>
                <span className="text-[10px] font-medium tracking-wider text-slate-400 uppercase -mt-0.5">
                  Technologies
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-medium text-slate-300">
              <Link 
                to="/" 
                className={`px-3 py-2 rounded-lg transition-colors hover:text-white hover:bg-slate-800/50 ${
                  location.pathname === '/' ? 'text-cyan-400 bg-slate-900/60' : ''
                }`}
              >
                Home
              </Link>

              {/* Company Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setCompanyDropdownOpen(true)}
                onMouseLeave={() => setCompanyDropdownOpen(false)}
              >
                <button
                  type="button"
                  className={`flex items-center gap-1 px-3 py-2 rounded-lg transition-colors hover:text-white hover:bg-slate-800/50 ${
                    location.pathname.startsWith('/about') || location.pathname === '/expertise' || location.pathname === '/technology-stack' || location.pathname === '/process' ? 'text-cyan-400' : ''
                  }`}
                  aria-expanded={companyDropdownOpen}
                >
                  <span>Company</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${companyDropdownOpen ? 'rotate-180 text-cyan-400' : ''}`} />
                </button>

                {companyDropdownOpen && (
                  <div className="absolute top-full left-0 w-64 pt-2 animate-in fade-in slide-in-from-top-1 duration-150">
                    <div className="bg-slate-900/95 backdrop-blur-xl border border-slate-800 rounded-xl shadow-2xl p-2 space-y-1">
                      <Link to="/about" className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/80 transition-colors">
                        <Sparkles className="w-4 h-4 text-cyan-400" />
                        <div>
                          <div className="font-medium text-xs text-white">About Us</div>
                          <div className="text-[11px] text-slate-400">Corporate background & culture</div>
                        </div>
                      </Link>
                      <Link to="/about/company" className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/80 transition-colors">
                        <Shield className="w-4 h-4 text-brand-400" />
                        <div>
                          <div className="font-medium text-xs text-white">Our Company</div>
                          <div className="text-[11px] text-slate-400">Sovereign identity & structure</div>
                        </div>
                      </Link>
                      <Link to="/about/vision-mission" className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/80 transition-colors">
                        <Cpu className="w-4 h-4 text-indigo-400" />
                        <div>
                          <div className="font-medium text-xs text-white">Vision & Mission</div>
                          <div className="text-[11px] text-slate-400">Long-term strategic roadmap</div>
                        </div>
                      </Link>
                      <Link to="/about/approach" className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/80 transition-colors">
                        <Code className="w-4 h-4 text-emerald-400" />
                        <div>
                          <div className="font-medium text-xs text-white">Our Approach</div>
                          <div className="text-[11px] text-slate-400">Architecture-first engineering</div>
                        </div>
                      </Link>
                      <Link to="/about/why-choose-us" className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/80 transition-colors">
                        <Shield className="w-4 h-4 text-cyan-400" />
                        <div>
                          <div className="font-medium text-xs text-white">Why Choose Us</div>
                          <div className="text-[11px] text-slate-400">Authentic technical rigor & IP transfer</div>
                        </div>
                      </Link>
                      <div className="border-t border-slate-800/80 my-1" />
                      <Link to="/expertise" className="block px-3 py-1.5 text-xs text-slate-300 hover:text-cyan-300 hover:bg-slate-800/60 rounded">
                        Our Expertise
                      </Link>
                      <Link to="/technology-stack" className="block px-3 py-1.5 text-xs text-slate-300 hover:text-cyan-300 hover:bg-slate-800/60 rounded">
                        Technology Stack
                      </Link>
                      <Link to="/process" className="block px-3 py-1.5 text-xs text-slate-300 hover:text-cyan-300 hover:bg-slate-800/60 rounded">
                        Our Process
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Services Dropdown (Megamenu Grid) */}
              <div 
                className="relative"
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
              >
                <button
                  type="button"
                  className={`flex items-center gap-1 px-3 py-2 rounded-lg transition-colors hover:text-white hover:bg-slate-800/50 ${
                    location.pathname.startsWith('/services') ? 'text-cyan-400' : ''
                  }`}
                  aria-expanded={servicesDropdownOpen}
                >
                  <span>Services</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180 text-cyan-400' : ''}`} />
                </button>

                {servicesDropdownOpen && (
                  <div className="absolute top-full -left-20 xl:-left-40 w-[680px] pt-2 animate-in fade-in slide-in-from-top-1 duration-150">
                    <div className="bg-slate-900/95 backdrop-blur-xl border border-slate-800 rounded-2xl shadow-2xl p-4">
                      <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
                        <div>
                          <span className="text-xs font-semibold text-white uppercase tracking-wider">
                            Specialized Engineering Services
                          </span>
                          <p className="text-[11px] text-slate-400">17 Individual Production-Ready Capabilities</p>
                        </div>
                        <Link 
                          to="/contact" 
                          className="text-xs text-cyan-400 hover:text-cyan-300 flex items-center gap-1 font-medium"
                        >
                          Request Custom Scope <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>

                      <div className="grid grid-cols-2 gap-2 max-h-[420px] overflow-y-auto pr-1">
                        {servicesData.map((svc) => (
                          <Link
                            key={svc.id}
                            to={`/services/${svc.slug}`}
                            className="group/item flex items-start gap-2.5 p-2 rounded-xl hover:bg-slate-800/80 transition-colors border border-transparent hover:border-slate-700/50"
                          >
                            <div className="p-1.5 rounded-lg bg-slate-800 text-cyan-400 group-hover/item:bg-cyan-500/20 group-hover/item:text-cyan-300 transition-colors">
                              <Code className="w-3.5 h-3.5" />
                            </div>
                            <div>
                              <div className="text-xs font-semibold text-slate-200 group-hover/item:text-cyan-300 transition-colors">
                                {svc.title}
                              </div>
                              <div className="text-[10px] text-slate-400 line-clamp-1">
                                {svc.shortDescription}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Products Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setProductsDropdownOpen(true)}
                onMouseLeave={() => setProductsDropdownOpen(false)}
              >
                <button
                  type="button"
                  className={`flex items-center gap-1 px-3 py-2 rounded-lg transition-colors hover:text-white hover:bg-slate-800/50 ${
                    location.pathname.startsWith('/products') ? 'text-cyan-400' : ''
                  }`}
                  aria-expanded={productsDropdownOpen}
                >
                  <span>Products</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${productsDropdownOpen ? 'rotate-180 text-cyan-400' : ''}`} />
                </button>

                {productsDropdownOpen && (
                  <div className="absolute top-full -left-10 w-96 pt-2 animate-in fade-in slide-in-from-top-1 duration-150">
                    <div className="bg-slate-900/95 backdrop-blur-xl border border-slate-800 rounded-2xl shadow-2xl p-3 space-y-1.5">
                      <div className="flex items-center justify-between px-2 py-1 border-b border-slate-800 mb-2">
                        <span className="text-xs font-semibold text-white uppercase tracking-wider">
                          Proprietary Software Suites
                        </span>
                        <Link to="/products" className="text-xs text-cyan-400 hover:text-cyan-300">
                          View All
                        </Link>
                      </div>

                      {productsData.map((prod) => (
                        <Link
                          key={prod.id}
                          to={`/products/${prod.slug}`}
                          className="flex items-start justify-between p-2.5 rounded-xl hover:bg-slate-800/80 transition-colors group"
                        >
                          <div className="flex items-start gap-2.5">
                            <div className="p-2 rounded-lg bg-slate-800 text-cyan-400 group-hover:bg-cyan-500/20 group-hover:text-cyan-300 transition-colors">
                              {prod.id === 'xsheild' ? <Shield className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                            </div>
                            <div>
                              <div className="flex items-center gap-1.5">
                                <span className="text-xs font-semibold text-slate-100 group-hover:text-cyan-300 transition-colors">
                                  {prod.name}
                                </span>
                                <span className={`text-[9px] px-1.5 py-0.2 rounded font-mono font-medium ${
                                  prod.status === 'Live' ? 'bg-emerald-950 text-emerald-400 border border-emerald-800' :
                                  prod.status === 'Beta' ? 'bg-amber-950 text-amber-400 border border-amber-800' :
                                  'bg-blue-950 text-blue-400 border border-blue-800'
                                }`}>
                                  {prod.status}
                                </span>
                              </div>
                              <div className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">
                                {prod.tagline}
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link 
                to="/industries" 
                className={`px-3 py-2 rounded-lg transition-colors hover:text-white hover:bg-slate-800/50 ${
                  location.pathname === '/industries' ? 'text-cyan-400' : ''
                }`}
              >
                Industries
              </Link>

              <Link 
                to="/portfolio" 
                className={`px-3 py-2 rounded-lg transition-colors hover:text-white hover:bg-slate-800/50 ${
                  location.pathname === '/portfolio' || location.pathname === '/case-studies' ? 'text-cyan-400' : ''
                }`}
              >
                Portfolio
              </Link>

              <Link 
                to="/blog" 
                className={`px-3 py-2 rounded-lg transition-colors hover:text-white hover:bg-slate-800/50 ${
                  location.pathname.startsWith('/blog') ? 'text-cyan-400' : ''
                }`}
              >
                Insights
              </Link>

              <Link 
                to="/contact" 
                className={`px-3 py-2 rounded-lg transition-colors hover:text-white hover:bg-slate-800/50 ${
                  location.pathname === '/contact' ? 'text-cyan-400' : ''
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* Header Right Actions */}
            <div className="hidden lg:flex items-center gap-3">
              {/* HRMS SaaS Live Portal CTA */}
              <Link
                to="/hrms"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-950/70 border border-emerald-500/40 text-emerald-300 text-xs font-semibold hover:bg-emerald-900/70 hover:text-emerald-200 transition-all shadow-sm group"
                title="WorkSphere HRMS SaaS & Contract Lifecycle Management"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>HRMS Portal</span>
              </Link>

              {/* Search Modal Trigger */}
              <button
                onClick={() => setSearchModalOpen(true)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
                title="Search (Ctrl + K)"
              >
                <Search className="w-3.5 h-3.5 text-cyan-400" />
                <span>Search</span>
                <kbd className="text-[10px] bg-slate-800 text-slate-400 px-1 py-0.5 rounded border border-slate-700">
                  Ctrl K
                </kbd>
              </button>

              {/* Consultation / Quote CTA */}
              <Link
                to="/request-quote"
                className="relative inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold tracking-wide text-white transition-all duration-300 rounded-xl bg-gradient-to-r from-brand-600 via-cyan-600 to-indigo-600 hover:from-brand-500 hover:via-cyan-500 hover:to-indigo-500 shadow-md shadow-brand-600/20 hover:shadow-cyan-500/30 hover:scale-[1.02] focus:outline-none"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Mobile Actions: HRMS Badge + Search + Hamburger Button */}
            <div className="flex lg:hidden items-center gap-1.5 sm:gap-2">
              <Link
                to="/hrms"
                className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 text-xs font-semibold hover:bg-emerald-900/80 shadow-sm"
                title="Launch HRMS SaaS Portal"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>HRMS</span>
              </Link>

              <button
                onClick={() => setSearchModalOpen(true)}
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300"
                aria-label="Open search"
              >
                <Search className="w-4 h-4 text-cyan-400" />
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white focus:outline-none"
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-cyan-400" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 lg:hidden bg-slate-950/95 backdrop-blur-2xl pt-20 pb-8 px-6 overflow-y-auto animate-in fade-in duration-200">
          <div className="space-y-4">
            <Link
              to="/"
              className="block text-base font-medium text-slate-200 hover:text-cyan-400 py-2 border-b border-slate-800"
            >
              Home
            </Link>

            {/* Mobile Company Section */}
            <div className="py-2 border-b border-slate-800">
              <div className="text-xs uppercase tracking-wider text-cyan-400 font-semibold mb-2">Company</div>
              <div className="grid grid-cols-2 gap-2 text-sm text-slate-300">
                <Link to="/about" className="py-1 hover:text-cyan-300">About Us</Link>
                <Link to="/about/company" className="py-1 hover:text-cyan-300">Our Company</Link>
                <Link to="/about/vision-mission" className="py-1 hover:text-cyan-300">Vision & Mission</Link>
                <Link to="/about/approach" className="py-1 hover:text-cyan-300">Our Approach</Link>
                <Link to="/about/why-choose-us" className="py-1 hover:text-cyan-300">Why Choose Us</Link>
                <Link to="/expertise" className="py-1 hover:text-cyan-300">Our Expertise</Link>
                <Link to="/technology-stack" className="py-1 hover:text-cyan-300">Tech Stack</Link>
                <Link to="/process" className="py-1 hover:text-cyan-300">Our Process</Link>
              </div>
            </div>

            {/* Mobile Services Section */}
            <div className="py-2 border-b border-slate-800">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs uppercase tracking-wider text-cyan-400 font-semibold">Services (17)</span>
                <span className="text-[11px] text-slate-400">All Individual Pages</span>
              </div>
              <div className="grid grid-cols-1 gap-1.5 text-xs text-slate-300 max-h-48 overflow-y-auto pr-1">
                {servicesData.map(s => (
                  <Link key={s.id} to={`/services/${s.slug}`} className="py-1 hover:text-cyan-300 flex items-center justify-between">
                    <span>{s.title}</span>
                    <ArrowRight className="w-3 h-3 text-slate-500" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile Products Section */}
            <div className="py-2 border-b border-slate-800">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs uppercase tracking-wider text-cyan-400 font-semibold">Products</span>
                <Link to="/products" className="text-[11px] text-cyan-300">View Overview</Link>
              </div>
              <div className="space-y-2 text-xs">
                {productsData.map(p => (
                  <Link key={p.id} to={`/products/${p.slug}`} className="flex items-center justify-between p-2 rounded-lg bg-slate-900 border border-slate-800">
                    <span className="font-medium text-slate-200">{p.name}</span>
                    <span className="text-[10px] text-cyan-400 font-mono">{p.status}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile Remaining Links */}
            <div className="grid grid-cols-2 gap-2 text-sm text-slate-300 py-2 border-b border-slate-800">
              <Link to="/industries" className="py-1 hover:text-cyan-300">Industries</Link>
              <Link to="/portfolio" className="py-1 hover:text-cyan-300">Portfolio</Link>
              <Link to="/case-studies" className="py-1 hover:text-cyan-300">Case Studies</Link>
              <Link to="/blog" className="py-1 hover:text-cyan-300">Blog / Insights</Link>
              <Link to="/careers" className="py-1 hover:text-cyan-300">Careers</Link>
              <Link to="/faq" className="py-1 hover:text-cyan-300">FAQ</Link>
              <Link to="/contact" className="py-1 hover:text-cyan-300">Contact Us</Link>
              <Link to="/partnerships" className="py-1 hover:text-cyan-300">Partnerships</Link>
            </div>

            {/* CTAs */}
            <div className="pt-4 space-y-2.5">
              <Link
                to="/hrms"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-center text-xs font-bold text-emerald-300 bg-emerald-950/80 border border-emerald-500/40 shadow-sm"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Launch Live HRMS SaaS Portal</span>
              </Link>
              <Link
                to="/request-quote"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-center text-sm font-semibold text-white bg-gradient-to-r from-brand-600 via-cyan-600 to-indigo-600 shadow-lg shadow-brand-500/20"
              >
                <span>Request a Project Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/book-consultation"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-center text-sm font-medium text-slate-300 bg-slate-900 border border-slate-800 hover:text-white"
              >
                <PhoneCall className="w-4 h-4 text-cyan-400" />
                <span>Book Architecture Consultation</span>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Global Search Modal */}
      <SearchModal 
        isOpen={searchModalOpen} 
        onClose={() => setSearchModalOpen(false)} 
      />
    </>
  );
};
