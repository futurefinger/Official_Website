import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { MainLayout } from './components/layouts/MainLayout';

// Home
import { HomePage } from './pages/home/HomePage';

// About pages
import { AboutUsPage } from './pages/about/AboutUsPage';
import { OurCompanyPage } from './pages/about/OurCompanyPage';
import { VisionMissionPage } from './pages/about/VisionMissionPage';
import { OurApproachPage } from './pages/about/OurApproachPage';
import { WhyChooseUsPage } from './pages/about/WhyChooseUsPage';
import { OurExpertisePage } from './pages/about/OurExpertisePage';
import { TechnologyStackPage } from './pages/about/TechnologyStackPage';
import { OurProcessPage } from './pages/about/OurProcessPage';

// Services & Products
import { ServiceDetailPage } from './pages/services/ServiceDetailPage';
import { ProductsOverviewPage } from './pages/products/ProductsOverviewPage';
import { ProductDetailPage } from './pages/products/ProductDetailPage';

// Business pages
import { IndustriesPage } from './pages/industries/IndustriesPage';
import { PortfolioPage } from './pages/portfolio/PortfolioPage';
import { CaseStudiesPage } from './pages/portfolio/CaseStudiesPage';
import { TechnologyInnovationPage } from './pages/portfolio/TechnologyInnovationPage';
import { BlogIndexPage } from './pages/blog/BlogIndexPage';
import { BlogPostPage } from './pages/blog/BlogPostPage';
import { CareersPage } from './pages/careers/CareersPage';
import { FAQPage } from './pages/faq/FAQPage';

// Inquiries & Contact
import { ContactPage } from './pages/contact/ContactPage';
import { RequestQuotePage } from './pages/contact/RequestQuotePage';
import { BookConsultationPage } from './pages/contact/BookConsultationPage';
import { PartnershipsPage } from './pages/contact/PartnershipsPage';

// Legal
import { PrivacyPolicyPage } from './pages/legal/PrivacyPolicyPage';
import { TermsConditionsPage } from './pages/legal/TermsConditionsPage';
import { CookiePolicyPage } from './pages/legal/CookiePolicyPage';
import { DisclaimerPage } from './pages/legal/DisclaimerPage';
import { RefundPolicyPage } from './pages/legal/RefundPolicyPage';
import { IntellectualPropertyPage } from './pages/legal/IntellectualPropertyPage';

// HRMS SaaS Portal & Contract Lifecycle
import { HRMSDashboardPage } from './pages/hrms/HRMSDashboardPage';
import { HRMSContractsPage } from './pages/hrms/HRMSContractsPage';
import { HRMSEmployeesPage } from './pages/hrms/HRMSEmployeesPage';
import { HRMSLoginPage } from './pages/hrms/HRMSLoginPage';

// 404
import { NotFoundPage } from './pages/common/NotFoundPage';

export const App: React.FC = () => {
  // Respect Vite base path (e.g. /Official_Website/)
  const rawBase = import.meta.env.BASE_URL || '/';
  const basename = rawBase.replace(/\/$/, '') || undefined;

  return (
    <BrowserRouter basename={basename}>
      <MainLayout>
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/about/company" element={<OurCompanyPage />} />
          <Route path="/about/vision-mission" element={<VisionMissionPage />} />
          <Route path="/about/approach" element={<OurApproachPage />} />
          <Route path="/about/why-choose-us" element={<WhyChooseUsPage />} />
          <Route path="/expertise" element={<OurExpertisePage />} />
          <Route path="/technology-stack" element={<TechnologyStackPage />} />
          <Route path="/process" element={<OurProcessPage />} />
          
          {/* 17 Individual Service Pages */}
          <Route path="/services" element={<Navigate to="/services/website-development" replace />} />
          <Route path="/services/:slug" element={<ServiceDetailPage />} />

          {/* Products & Solutions */}
          <Route path="/products" element={<ProductsOverviewPage />} />
          <Route path="/products/:slug" element={<ProductDetailPage />} />

          {/* Business & Information Pages */}
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/technology-innovation" element={<TechnologyInnovationPage />} />
          <Route path="/blog" element={<BlogIndexPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/faq" element={<FAQPage />} />

          {/* Inquiries */}
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/request-quote" element={<RequestQuotePage />} />
          <Route path="/book-consultation" element={<BookConsultationPage />} />
          <Route path="/partnerships" element={<PartnershipsPage />} />

          {/* Legal Pages */}
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-conditions" element={<TermsConditionsPage />} />
          <Route path="/cookie-policy" element={<CookiePolicyPage />} />
          <Route path="/disclaimer" element={<DisclaimerPage />} />
          <Route path="/refund-policy" element={<RefundPolicyPage />} />
          <Route path="/intellectual-property" element={<IntellectualPropertyPage />} />

          {/* HRMS SaaS Portal & Contract Lifecycle Management */}
          <Route path="/hrms" element={<HRMSDashboardPage />} />
          <Route path="/hrms/contracts" element={<HRMSContractsPage />} />
          <Route path="/hrms/employees" element={<HRMSEmployeesPage />} />
          <Route path="/hrms/login" element={<HRMSLoginPage />} />

          {/* 404 Fallback */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
};

export default App;
