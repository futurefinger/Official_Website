import { FAQItem } from '../types';

export const faqData: FAQItem[] = [
  {
    id: 'who-is-future-finger',
    category: 'General',
    question: 'What is Future Finger Technologies and what are your core capabilities?',
    answer: 'Future Finger Technologies is a modern technology company specializing in custom software engineering, AI-powered automation, enterprise web applications, cybersecurity solutions, and scalable digital infrastructure. We partner with ambitious startups, SMEs, and enterprise leaders to design and deliver high-performance, secure digital platforms.'
  },
  {
    id: 'where-are-you-located',
    category: 'General',
    question: 'Where is Future Finger Technologies based and what is your legal jurisdiction?',
    answer: 'Future Finger Technologies is based in India with principal legal jurisdiction in New Delhi, operating in full compliance with the Information Technology Act 2000 and applicable national software export standards. We collaborate with clients domestically and internationally across North America, Europe, and Asia-Pacific.'
  },
  {
    id: 'how-to-start-project',
    category: 'Engagement Model',
    question: 'How do we begin a new software or engineering project with Future Finger Technologies?',
    answer: 'Our engagement begins with a structured Technical Discovery phase. You can submit an initial project inquiry via our "Request a Quote" or "Book a Consultation" page. We arrange an architectural discovery call to analyze your technical requirements, budget parameters, and timeline, followed by a formal Statement of Work (SOW) and milestone roadmap.'
  },
  {
    id: 'intellectual-property-ownership',
    category: 'Engagement Model',
    question: 'Who owns the intellectual property and source code of custom developed solutions?',
    answer: 'The client owns 100% of all intellectual property, source code, data schemas, and proprietary assets produced during the engagement upon milestone completion and commercial settlement. We do not retain vendor lock-in rights on custom commissioned builds.'
  },
  {
    id: 'xshield-anti-ransomware',
    category: 'Products',
    question: 'What makes XShield™ different from traditional consumer antivirus software?',
    answer: 'XShield™ operates at the Windows Kernel Minifilter Driver level (Ring 0) rather than solely in userland. It inspects and intercepts file I/O operations before physical disk write commitment, neutralizing zero-day ransomware encryption attempts in real time without relying exclusively on outdated static signature databases.'
  },
  {
    id: 'hrlord-pilot-status',
    category: 'Products',
    question: 'What is the current release status of HRLord™ and how can our company try it?',
    answer: 'HRLord™ is currently in active Beta deployment (v1.4.0-Beta), serving pilot commercial enterprises across manufacturing and retail. Organizations interested in testing the automated biometric attendance and payroll reconciliation platform can request pilot access through our contact portal.'
  },
  {
    id: 'shipzyro-carrier-integration',
    category: 'Products',
    question: 'Which courier carriers does Shipzyro™ support for automated rate comparison?',
    answer: 'Shipzyro™ connects via unified REST APIs with leading regional and international logistics networks including Bluedart, Delhivery, FedEx, DHL, and India Post Speed Post, dynamically ranking rates based on delivery SLA, historical transit reliability, and cost per kilogram.'
  },
  {
    id: 'cybersecurity-compliance-standards',
    category: 'Security & Compliance',
    question: 'How do you ensure data confidentiality and regulatory compliance?',
    answer: 'We implement defense-in-depth protocols: AES-256 encryption at rest, TLS 1.3 in transit, role-based access control (RBAC), least-privilege IAM policies, and comprehensive audit trails compliant with Section 65B of the Indian Evidence Act and international standards such as ISO 27001 and GDPR.'
  },
  {
    id: 'ai-hallucination-prevention',
    category: 'Services',
    question: 'How does Future Finger Technologies prevent hallucinations in enterprise AI agent systems?',
    answer: 'We engineer deterministic AI architectures combining Retrieval-Augmented Generation (RAG) over verified enterprise knowledge vaults, runtime schema enforcement (Zod/Pydantic validation), strict temperature controls, and programmatic human-in-the-loop review checkpoints.'
  },
  {
    id: 'maintenance-and-support-slas',
    category: 'Services',
    question: 'Do you offer ongoing software maintenance and SLA-backed technical support?',
    answer: 'Yes. We offer tiered ongoing Maintenance & Support agreements covering proactive vulnerability patching, 24/7 uptime monitoring, database defragmentation, dependency updates, and guaranteed response times ranging from 1 hour for critical priority issues to standard business hours.'
  }
];
