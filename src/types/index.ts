export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  heroTagline: string;
  detailedDescription: string;
  icon: string;
  features: string[];
  deliverables: string[];
  technologies: string[];
  useCases: string[];
  faqs: { question: string; answer: string }[];
}

export type ProductStatus = 'Live' | 'Beta' | 'Development' | 'Planned';

export interface ProductItem {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  category: string;
  status: ProductStatus;
  version?: string;
  description: string;
  problemSolved: string;
  keyFeatures: string[];
  targetAudience: string[];
  technicalOverview: string[];
  businessBenefits: string[];
  downloadUrl?: string;
  repositoryUrl?: string;
  ctaText: string;
  ctaLink: string;
}

export interface IndustryItem {
  id: string;
  slug: string;
  name: string;
  icon: string;
  description: string;
  challenges: string[];
  solutions: string[];
  impactMetrics: string[];
}

export interface PortfolioItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  industry: string;
  clientType: string;
  isIllustrative: boolean; // Genuine or clearly labeled illustrative scenario
  overview: string;
  challenge: string;
  solution: string;
  architectureHighlights: string[];
  technologies: string[];
  results: string[];
}

export interface BlogPostItem {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: 'AI & Automation' | 'Cybersecurity' | 'Enterprise Tech' | 'Cloud & Architecture';
  readTime: string;
  publishDate: string;
  author: string;
  authorRole: string;
  content: string[];
  keyTakeaways: string[];
  tags: string[];
}

export interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experienceLevel: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Services' | 'Products' | 'Security & Compliance' | 'Engagement Model';
}
