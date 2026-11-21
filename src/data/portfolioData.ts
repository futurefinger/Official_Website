import { PortfolioItem } from '../types';

export const portfolioData: PortfolioItem[] = [
  {
    id: 'xshield-endpoint-defense',
    slug: 'xshield-endpoint-defense',
    title: 'XShield™ Kernel-Level Anti-Ransomware & Endpoint Suite',
    category: 'Cybersecurity & Systems Engineering',
    industry: 'Enterprise Security & Defense',
    clientType: 'Future Finger Technologies Sovereign Product (v2.5.6-Enterprise)',
    isIllustrative: false,
    overview: 'Engineered an enterprise-grade Windows endpoint protection platform featuring a kernel minifilter driver that intercepts file I/O operations in real time, stopping unauthorized cryptographic encryption before data destruction occurs.',
    challenge: 'Polymorphic ransomware strains evade userland antivirus software by executing kernel driver exploits and encrypting directories at high velocity, leaving system administrators locked out within seconds.',
    solution: 'Designed a dual-architecture defense system: a signed native Windows Kernel Minifilter Driver Sentry coupled with a lightweight C++ system tray agent operating under the Permanent HUD Discretion Protocol for zero user disruption.',
    architectureHighlights: [
      'Kernel-level I/O filtering before NTFS write commitment',
      'Authenticode cryptographic digital signatures on PE executables',
      'Self-updating silent agent mechanism with background GitHub release verification',
      'Hardware-bound cryptographic telemetry vault compliant with Section 65B of the Indian Evidence Act'
    ],
    technologies: ['C++', 'Windows Kernel Minifilters', 'Win32 API', 'Authenticode', 'PowerShell', 'GitHub Releases'],
    results: [
      '100% interception rate against tested modern ransomware encryption routines',
      'Less than 1% CPU utilization during background real-time surveillance',
      'Zero false-alarm intrusive notification popups during normal workstation operations'
    ]
  },
  {
    id: 'hrlord-biometric-payroll',
    slug: 'hrlord-biometric-payroll',
    title: 'HRLord™ Multi-Branch Biometric Attendance & Payroll Engine',
    category: 'Enterprise Workforce Management',
    industry: 'Manufacturing & Corporate Services',
    clientType: 'Future Finger Technologies Platform Architecture (Beta Pilot)',
    isIllustrative: false,
    overview: 'Engineered a unified workforce operations platform linking network-connected biometric terminals with automated multi-tier payroll calculations, statutory deduction compliance, and employee mobile self-service.',
    challenge: 'Manual attendance log reconciliation across 12 branch locations caused frequent payroll delays, overtime calculation disputes, and hundreds of lost management hours each month.',
    solution: 'Developed an automated daemon listening to biometric terminal event streams over TCP/IP, feeding a centralized PostgreSQL relational ledger with real-time shift mapping and one-click salary dispatch.',
    architectureHighlights: [
      'Multi-threaded TCP/IP biometric terminal socket listener',
      'Configurable rules engine for overtime, night shifts, and compensatory offs',
      'Automated PDF payslip generation and encrypted WhatsApp/Email dispatch',
      'Role-based access matrix ensuring strict salary confidentiality'
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Docker', 'Redis'],
    results: [
      'Cut monthly payroll processing duration from 4 days to 12 minutes',
      'Eliminated proxy attendance and manual punch discrepancies entirely',
      'Streamlined statutory tax deduction exports for effortless filing'
    ]
  },
  {
    id: 'illustrative-high-scale-ecommerce',
    slug: 'illustrative-high-scale-ecommerce',
    title: 'High-Throughput Omnichannel Commerce Architecture',
    category: 'Full-Stack E-commerce & Cloud',
    industry: 'Retail & Consumer Goods',
    clientType: 'Illustrative Enterprise Architecture Blueprint',
    isIllustrative: true,
    overview: 'A reference architecture designed for high-velocity D2C consumer brands processing over 25,000 daily orders, combining headless storefronts with multi-warehouse inventory synchronization.',
    challenge: 'Legacy monolithic e-commerce platforms suffer server crashes during flash-sale spikes, with checkout latency exceeding 8 seconds and inventory desynchronization causing costly backorders.',
    solution: 'Engineered a modern headless architecture utilizing Next.js at the edge, decoupled microservices for cart and checkout, and Redis-backed distributed locks for real-time inventory reservation.',
    architectureHighlights: [
      'Edge-rendered product catalog with sub-300ms Time to First Byte (TTFB)',
      'Distributed inventory locking using Redis Redlock algorithm',
      'Multi-gateway payment failover logic (Stripe, Razorpay, UPI)',
      'Automated integration with Shipzyro™ logistics rate engine'
    ],
    technologies: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'Tailwind CSS', 'AWS ECS', 'Docker'],
    results: [
      'Capable of scaling to 15,000 simultaneous concurrent checkouts without degradation',
      'Reduced checkout abandonment rate by an estimated 28%',
      'Achieved 99.99% system availability during simulated flash traffic peaks'
    ]
  },
  {
    id: 'illustrative-ai-rag-contract-review',
    slug: 'illustrative-ai-rag-contract-review',
    title: 'Enterprise Document Intelligence & RAG Legal Engine',
    category: 'Applied AI & NLP',
    industry: 'Legal, Compliance & Financial Audits',
    clientType: 'Illustrative Enterprise Architecture Blueprint',
    isIllustrative: true,
    overview: 'A private cloud AI system enabling enterprise legal and audit departments to query thousands of complex contracts, covenants, and regulatory circulars with verifiable source citations.',
    challenge: 'Legal counsel spends an average of 4.5 hours manually reviewing 80-page supplier agreements to verify compliance clauses, indemnities, and governing law clauses against company policy.',
    solution: 'Constructed an on-premise RAG pipeline using vector similarity search, hybrid BM25 lexical ranking, deterministic schema enforcement, and multi-model verification to extract critical covenants instantly.',
    architectureHighlights: [
      'Hybrid dense-sparse retrieval combining pgvector and BM25',
      'Deterministic JSON schema validation preventing ungrounded outputs',
      'Zero external data egress; runs completely within private virtual cloud',
      'Multi-agent cross-verification highlighting contradictory clauses'
    ],
    technologies: ['Python', 'FastAPI', 'LangChain', 'pgvector', 'PostgreSQL', 'Docker', 'OpenSearch'],
    results: [
      'Reduces initial contract clause review time from hours to under 4 minutes',
      'Guarantees 100% citation grounding to exact source document paragraph numbers',
      'Provides verifiable audit trails for compliance reporting'
    ]
  }
];
