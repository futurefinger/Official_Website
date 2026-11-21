import { ProductItem } from '../types';

export const productsData: ProductItem[] = [
  {
    id: 'xsheild',
    slug: 'xsheild',
    name: 'XShield™ Endpoint Security',
    tagline: 'Enterprise-Grade Anti-Ransomware & Sovereign Cyber Defense Suite',
    category: 'Cybersecurity & Endpoint Protection',
    status: 'Live',
    version: 'v2.5.6-Enterprise',
    description: 'XShield™ is an enterprise-grade endpoint security and sovereign cyber defense suite engineered by Future Finger Technologies to detect, quarantine, and neutralize zero-day ransomware, unauthorized kernel driver injections, and behavioral memory anomalies before payload detonation.',
    problemSolved: 'Modern polymorphic ransomware encrypts enterprise files within seconds, bypassing traditional signature-based antivirus scanners. XShield™ intercepts file operations at the Windows kernel minifilter level, stopping encryption in real time.',
    keyFeatures: [
      'Windows Kernel Minifilter Driver Sentry: Real-time driver-level protection against unauthorized file encryption',
      'Permanent HUD Discretion Protocol: Operates silently inside the Windows System Tray without disruptive popups',
      'Automated Startup Version Check & Background Auto-Download: Silent staged updates keeping endpoints resilient',
      'Authenticode Cryptographic Signing: Embedded digital signatures on all PE binaries ensuring software integrity',
      'Digital EULA & Legal Audit Vault: Hardware-bound telemetry securely logged in compliance with Indian IT Act 2000 Section 65B',
      'Zero-Overhead Ambient Defense: Autonomous low-CPU background architecture with zero marketing interference'
    ],
    targetAudience: [
      'Corporate Windows workstations and server clusters',
      'Financial institutions and audit firms handling sensitive transactional files',
      'Government agencies and defense contractors requiring sovereign endpoint verification'
    ],
    technicalOverview: [
      'Architecture: Native Windows Kernel Minifilter Driver + C++ / Win32 Userland Agent',
      'Binary Signature: Authenticode Cryptographically Signed PE Executables',
      'Telemetry Delivery: Hardware-bound encrypted telemetry vault with automated dispatch',
      'Supported OS: Windows 10, Windows 11, Windows Server 2019/2022'
    ],
    businessBenefits: [
      'Near-instant prevention of enterprise ransomware lockouts and data extortion',
      'Uninterrupted employee productivity through silent tray HUD operation',
      'Legally verifiable forensic logs compliant with evidentiary regulatory standards',
      'Zero monthly recurring per-seat bloat for enterprise licensed fleets'
    ],
    downloadUrl: 'https://raw.githubusercontent.com/futurefinger/XsheildPublic/main/release/XSHEILD_Setup.exe',
    repositoryUrl: 'https://github.com/futurefinger/XsheildPublic',
    ctaText: 'Download XShield™ v2.5.6',
    ctaLink: '/products/xsheild'
  },
  {
    id: 'hrlord',
    slug: 'hrlord',
    name: 'HRLord™ Workforce Platform',
    tagline: 'Next-Generation Human Capital Management & Biometric Automation',
    category: 'Human Resource Management Systems (HRMS)',
    status: 'Beta',
    version: 'v1.4.0-Beta',
    description: 'HRLord™ is an intelligent human capital management and workforce operations platform engineered to unify biometric attendance, automated salary calculations, statutory compliance, performance tracking, and employee self-service into one streamlined interface.',
    problemSolved: 'SMEs and growing enterprises waste hundreds of hours manually reconciling biometric terminal punch logs, leave applications, overtime calculations, and tax deductions in error-prone spreadsheets.',
    keyFeatures: [
      'Universal Biometric Terminal Connector: Direct TCP/IP listening adapters for ZKTeco and Essl attendance terminals',
      'One-Click Automated Payroll Engine: Automatic computation of gross, net pay, PF, ESI, TDS, and overtime bonuses',
      'Smart Leave & Shift Management: Visual shift calendar, shift swap approvals, and automated compensatory off calculations',
      'Employee Self-Service (ESS) Mobile Portal: Instant leave requests, digital payslip downloads, and tax proof submissions',
      'Role-Based Organizational Hierarchy: Granular access control for department heads, HR managers, and corporate leadership',
      'Audit-Ready Statutory Reports: Pre-formatted exports for PF returns, ESI contributions, and tax ledger filings'
    ],
    targetAudience: [
      'Manufacturing facilities and factories with shift-based staff',
      'Multi-branch retail chains and corporate offices',
      'Technology startups and professional service firms'
    ],
    technicalOverview: [
      'Frontend: React, TypeScript, Tailwind CSS with responsive mobile-first UI',
      'Backend: Node.js / Express microservices with PostgreSQL relational ledger',
      'Hardware Adapter: Multi-threaded background socket listeners for biometric hardware',
      'Security: AES-256 encrypted payroll archives, JWT role-gated API endpoints'
    ],
    businessBenefits: [
      'Reduces monthly payroll processing cycle from days to under 15 minutes',
      'Eliminates buddy punching and manual attendance manipulation completely',
      'Empowers employees with instant transparent access to their payroll history',
      'Maintains 100% compliance with regional statutory labor regulations'
    ],
    ctaText: 'Request HRLord™ Pilot Access',
    ctaLink: '/contact?product=HRLord'
  },
  {
    id: 'fft-trace-x',
    slug: 'fft-trace-x',
    name: 'FFT-TRACE-X™ Forensic Suite',
    tagline: 'Specialized Cyber Investigation & Financial Trail Correlation Engine',
    category: 'Forensics & Cyber Investigation Tooling',
    status: 'Development',
    version: 'v0.9.2-Specialized',
    description: 'FFT-TRACE-X™ is an advanced digital forensic analysis and financial trail correlation framework designed to assist forensic auditors and cyber defense investigators in reconstructing multi-hop transaction trails, digital footprints, and network communication timelines.',
    problemSolved: 'Cyber forensic investigators face fragmented data logs across banking APIs, crypto ledgers, server access logs, and network packets, making manual correlation of illicit fund transfers and cyber intrusion timelines extremely arduous.',
    keyFeatures: [
      'Multi-Hop Financial Graph Reconstruction: Visual node mapping of accounts, transaction routes, and intermediate mules',
      'Digital Footprint Timeline Correlation: Synchronizes server access logs, IP hops, and metadata timestamps',
      'Cryptographic Evidence Vault: Hashes and timestamps all ingested artifacts (SHA-256) to ensure legal chain of custody',
      'Automated Anomaly & Layering Detection: Flags rapid-fire structuring, shell account hops, and geographic anomalies',
      'Legally Formatted Audit Output: Generates forensic dossier summaries prepared for legal proceedings and audit boards'
    ],
    targetAudience: [
      'Corporate forensic accounting and anti-fraud units',
      'Cybersecurity incident response and intelligence teams',
      'Authorized regulatory audit agencies and legal defense consultants'
    ],
    technicalOverview: [
      'Engine: Python / Rust analytical backend with NetworkX graph traversal algorithms',
      'Storage: Graph database integration (Neo4j / Memgraph) + TimescaleDB for chronological events',
      'Security Architecture: Air-gapped deployment capability with strict cryptographic audit logs',
      'Access Protocol: Multi-signature access gating requiring dual-investigator authorization'
    ],
    businessBenefits: [
      'Compresses complex multi-week transaction tracing into hours of automated graph correlation',
      'Produces court-admissible forensic artifacts with uncompromised chain of custody',
      'Identifies money laundering layering techniques that evade traditional rule-based filters'
    ],
    ctaText: 'Inquire for Enterprise Forensic Briefing',
    ctaLink: '/contact?product=FFT-TRACE-X'
  },
  {
    id: 'shipzyro',
    slug: 'shipzyro',
    name: 'Shipzyro™ Logistics Suite',
    tagline: 'Intelligent Multi-Carrier Shipping, Rate Optimization & Order Dispatch',
    category: 'Logistics & Supply Chain Technology',
    status: 'Beta',
    version: 'v1.2.0-Commercial Pilot',
    description: 'Shipzyro™ is a high-velocity shipping and logistics aggregation platform engineered to connect e-commerce merchants and enterprise warehouses with regional and global shipping carriers, optimizing dispatch costs, label generation, and real-time tracking telemetry.',
    problemSolved: 'E-commerce and wholesale distributors lose substantial profit margins to suboptimal carrier pricing, manual tracking inquiries, and slow, fragmented label generation across separate courier portals.',
    keyFeatures: [
      'Dynamic Carrier Rate Engine: Compares rates and SLA delivery times across major couriers in real time',
      'Automated Bulk Label & Manifest Generation: Batch printing of shipping labels, barcode manifests, and tax invoices',
      'Unified Real-Time Milestone Tracking: Normalized status updates pushed to customers via SMS, WhatsApp, and email',
      'Non-Delivery Report (NDR) Automated Management: Automated customer re-attempt scheduling to reduce RTO returns',
      'Warehouse Dispatch Hub: Barcode-scan verification to eliminate order packing mismatches before parcel handover'
    ],
    targetAudience: [
      'Direct-to-Consumer (D2C) brands shipping hundreds of daily parcels',
      'Multi-channel e-commerce merchants (Shopify, WooCommerce, Custom Storefronts)',
      'Regional logistics distributors and 3PL fulfillment warehouses'
    ],
    technicalOverview: [
      'Architecture: Cloud-native event-driven microservices running on Docker containers',
      'Integrations: Direct REST API adapters for national and international courier networks',
      'Throughput: Capable of generating over 10,000 shipping labels per hour per merchant',
      'Telemetry: Webhook event normalization engine processing over 200 event types'
    ],
    businessBenefits: [
      'Cuts shipping fulfillment costs by up to 18% via algorithmic carrier selection',
      'Reduces Return-to-Origin (RTO) rates by up to 24% through automated NDR follow-ups',
      'Eliminates manual courier portal logins through one central dispatch screen'
    ],
    ctaText: 'Join the Shipzyro™ Merchant Beta',
    ctaLink: '/contact?product=Shipzyro'
  },
  {
    id: 'ai-business-solutions',
    slug: 'ai-business-solutions',
    name: 'Enterprise AI Suite',
    tagline: 'Deterministic Domain-Specific AI Agents, Document Intelligence & RAG Engines',
    category: 'Applied Artificial Intelligence',
    status: 'Live',
    version: 'Enterprise Suite 2026',
    description: 'A modular suite of enterprise AI solutions integrating proprietary RAG knowledge retrieval, intelligent OCR invoice processing, autonomous customer triage agents, and real-time operational decision models.',
    problemSolved: 'Enterprises struggle to operationalize generative AI safely due to hallucinations, unpredictable outputs, and data leakage concerns. Our suite enforces deterministic schemas and on-premise privacy boundaries.',
    keyFeatures: [
      'Enterprise Knowledge RAG Engine: Verifiable document interrogation over internal PDF/DOCX repositories',
      'Multi-Model Semantic Routing: Dynamically routes prompts to the optimal model based on latency, cost, and complexity',
      'Strict Output Guardrails: Guarantees 100% valid JSON/TypeScript schema conformity for all AI-generated outputs',
      'Private Cloud & Air-Gapped Deployment: Zero data transmission to third-party public AI training pools',
      'Real-Time Telemetry & Token Optimization: Transparent audit logging of all inference calls and latency metrics'
    ],
    targetAudience: [
      'Legal firms and corporate compliance teams reviewing high-volume documentation',
      'Healthcare and diagnostic centers requiring automated record categorization',
      'Financial services organizations automating client onboarding underwriting'
    ],
    technicalOverview: [
      'Frameworks: LangChain, LlamaIndex, vLLM, TensorRT-LLM',
      'Vector Stores: pgvector, Qdrant with HNSW indexing and hybrid BM25 search',
      'Supported Base Models: Mistral, Llama-3, DeepSeek, Google Gemini Enterprise API'
    ],
    businessBenefits: [
      'Accelerates document synthesis and legal contract audit times by 80%',
      'Eliminates external model privacy risks through completely isolated VPC instances',
      'Integrates seamlessly with existing SQL databases and REST APIs'
    ],
    ctaText: 'Schedule an AI Architecture Workshop',
    ctaLink: '/book-consultation'
  },
  {
    id: 'custom-enterprise-solutions',
    slug: 'custom-enterprise-solutions',
    name: 'Bespoke Enterprise Systems',
    tagline: 'Mission-Critical Engineering Tailored to Your Exact Architecture & Governance',
    category: 'Enterprise Engineering',
    status: 'Live',
    version: 'Production Bespoke',
    description: 'Comprehensive software engineering and architectural modernization for enterprises with unique regulatory constraints, high-throughput demands, and complex legacy ecosystems.',
    problemSolved: 'Off-the-shelf commercial software cannot support proprietary manufacturing workflows, complex trading logic, or strict air-gapped national security requirements.',
    keyFeatures: [
      'Turnkey end-to-end software development with complete intellectual property transfer',
      'Zero-downtime legacy database migration and modern microservice decoupling',
      'Dedicated senior engineering pods with direct architectural leadership access',
      'Continuous automated testing pipelines guaranteeing zero regression bugs',
      'Rigorous cybersecurity hardening compliant with enterprise governance standards'
    ],
    targetAudience: [
      'Enterprises with legacy systems requiring modern cloud migrations',
      'Organizations operating in regulated defense, health, or financial sectors',
      'Fast-growing ventures requiring scalable foundational architectures'
    ],
    technicalOverview: [
      'Languages: TypeScript, Go, Python, C# / .NET, Rust',
      'Databases: PostgreSQL, Redis, TimescaleDB, ClickHouse',
      'Cloud: AWS, Google Cloud, Azure, or Private Bare-Metal Kubernetes'
    ],
    businessBenefits: [
      '100% intellectual property ownership with zero ongoing vendor licensing royalties',
      'Software designed specifically for your competitive advantage and workflows',
      'Long-term maintainability backed by clean documentation and transparent architecture'
    ],
    ctaText: 'Initiate Enterprise Discovery',
    ctaLink: '/request-quote'
  }
];
