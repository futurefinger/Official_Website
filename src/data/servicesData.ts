import { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 'website-development',
    slug: 'website-development',
    title: 'Website Development',
    heroTagline: 'High-Performance, Accessible, and Brand-Defining Web Experiences',
    shortDescription: 'Enterprise-grade corporate websites, high-conversion landing systems, and dynamic web portals built with modern frameworks and strict accessibility standards.',
    detailedDescription: 'We design and engineer bespoke web platforms engineered for speed, search visibility, brand prestige, and seamless cross-device fidelity. Our development philosophy balances aesthetic refinement with rigorous technical performance, ensuring high Core Web Vitals, accessible semantic HTML, and scalable content architecture.',
    icon: 'Globe',
    features: [
      'Custom responsive architecture optimized for all viewport breakpoints',
      'Jamstack, SSR, and SSG setups for sub-second load times',
      'Full WCAG 2.1 AA accessibility compliance and keyboard navigability',
      'Headless CMS integration (Strapi, Sanity, Contentful)',
      'Built-in Technical SEO, Schema.org structured data, and Open Graph standards',
      'Automated CI/CD deployment pipelines with zero-downtime releases'
    ],
    deliverables: [
      'Production-ready web application source code with TypeScript',
      'Comprehensive UI style guide and modular component library',
      'Lighthouse audit reports demonstrating 90+ across all categories',
      'Interactive CMS administrator training and technical documentation'
    ],
    technologies: ['React', 'Next.js', 'Vite', 'TypeScript', 'Tailwind CSS', 'HTML5/Semantic', 'Node.js'],
    useCases: [
      'Corporate flagship websites for technology enterprises',
      'B2B SaaS product landing engines and documentation hubs',
      'Investor relations and institutional stakeholder portals'
    ],
    faqs: [
      {
        question: 'How do you ensure rapid load speeds on mobile networks?',
        answer: 'We employ responsive modern image formats (AVIF/WebP), tree-shaken JavaScript bundles, aggressive CSS purging, route-based code splitting, and edge caching via CDN.'
      },
      {
        question: 'Can you migrate our existing legacy site without losing search rankings?',
        answer: 'Yes. We perform comprehensive URL mapping, 301 redirect management, metadata continuity, and structured schema alignment to preserve and enhance organic rankings.'
      }
    ]
  },
  {
    id: 'web-application-development',
    slug: 'web-application-development',
    title: 'Web Application Development',
    heroTagline: 'Scalable, Secure, and Reactive Cloud-Native Web Applications',
    shortDescription: 'Mission-critical web applications featuring real-time state management, resilient backend APIs, and intuitive user interfaces designed for heavy enterprise workflows.',
    detailedDescription: 'Future Finger Technologies engineers complex single-page applications (SPAs) and progressive web apps (PWAs) engineered to handle mission-critical corporate operations. From multi-tenant SaaS dashboards to data-intensive internal tooling, we deliver scalable architectures with robust cybersecurity safeguards.',
    icon: 'Layout',
    features: [
      'Reactive state management and optimistic UI updates',
      'Role-based access control (RBAC) and fine-grained authorization policies',
      'Real-time bi-directional data synchronization via WebSockets and SSE',
      'High-throughput RESTful and GraphQL API backends',
      'Strict input sanitization, CSRF mitigation, and XSS defense layers',
      'Containerized deployments with Docker and Kubernetes orchestration'
    ],
    deliverables: [
      'Full-stack application codebase with automated test coverage',
      'OpenAPI/Swagger documented endpoints and SDK contracts',
      'Database migration schemas and disaster recovery runbooks',
      'Continuous deployment scripts and telemetry instrumentation'
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'Python', 'FastAPI', 'PostgreSQL', 'Redis', 'Docker'],
    useCases: [
      'Enterprise workflow management systems',
      'Real-time financial analytics and data reporting suites',
      'Customer self-service portals with deep backend integrations'
    ],
    faqs: [
      {
        question: 'What protocols are implemented for session management and authentication?',
        answer: 'We deploy secure HTTP-only JWTs, OAuth 2.0 / OIDC integrations, Multi-Factor Authentication (MFA), and automated session expiry.'
      },
      {
        question: 'How do you architect for horizontal scalability?',
        answer: 'We design stateless application tiers, decoupled background worker queues (BullMQ/Celery), and horizontally scalable read-replica databases.'
      }
    ]
  },
  {
    id: 'mobile-application-development',
    slug: 'mobile-application-development',
    title: 'Mobile Application Development',
    heroTagline: 'Native and Cross-Platform Mobile Solutions for iOS & Android',
    shortDescription: 'Feature-rich mobile applications built with React Native and native Android/iOS runtimes, combining high frame rates, offline resilience, and secure device integrations.',
    detailedDescription: 'We deliver intuitive mobile experiences that bridge hardware capabilities with cloud intelligence. Whether developing standalone consumer products or mobile companions for enterprise suites, our mobile engineers deliver fluid touch interactions, biometric security, and rock-solid background synchronization.',
    icon: 'Smartphone',
    features: [
      'Single codebase cross-platform engineering with near-native performance',
      'Hardware integration: Biometrics, GPS tracking, Camera, BLE, and Push Notifications',
      'Offline-first architecture with SQLite/WatermelonDB local caching',
      'Enterprise Mobile Device Management (MDM) compatibility',
      'App Store and Google Play compliance, submission, and release handling',
      'Native crash reporting, session replay, and APM performance monitoring'
    ],
    deliverables: [
      'Signed production binaries (.apk, .aab, .ipa)',
      'Complete React Native / Native source repositories',
      'Store listing assets, privacy manifests, and App Store Review documentation',
      'OTA (Over-The-Air) update pipeline setup via EAS/CodePush'
    ],
    technologies: ['React Native', 'Kotlin', 'Swift', 'TypeScript', 'Expo', 'Firebase', 'SQLite', 'Fastlane'],
    useCases: [
      'Field workforce tracking and field operation dispatch apps',
      'Enterprise employee self-service mobile clients',
      'Customer loyalty and secure e-commerce mobile applications'
    ],
    faqs: [
      {
        question: 'Do you build native or cross-platform apps?',
        answer: 'We select based on project requirements. React Native is ideal for rapid, cost-effective cross-platform delivery; native Kotlin/Swift is deployed for specialized hardware/kernel access.'
      },
      {
        question: 'How is data secured locally on lost or compromised devices?',
        answer: 'We utilize OS-level hardware security keystores (Android Keystore / iOS Keychain) and AES-256 encrypted SQLite databases.'
      }
    ]
  },
  {
    id: 'custom-software-development',
    slug: 'custom-software-development',
    title: 'Custom Software Development',
    heroTagline: 'Tailor-Engineered Software Systems Aligned with Specific Business Logic',
    shortDescription: 'Purpose-built software platforms designed to eliminate operational bottlenecks, automate niche workflows, and solve domain-specific business challenges.',
    detailedDescription: 'Off-the-shelf software often forces businesses to compromise on core processes. Future Finger Technologies builds bespoke software tailored to your operational models, legacy constraints, and strategic roadmap, giving your enterprise an unassailable competitive advantage.',
    icon: 'Code',
    features: [
      'Domain-driven architectural design tailored to proprietary workflows',
      'Seamless modernization and bridge-building for legacy databases',
      'Microservices and modular monolith architectures for maintainability',
      'Comprehensive automated unit, integration, and regression test suites',
      'Air-gapped and on-premises deployment capabilities for sensitive environments',
      'Complete intellectual property ownership transferred to client'
    ],
    deliverables: [
      'Full intellectual property and proprietary source code',
      'System architecture diagrams and entity-relationship models',
      'Developer handoff manuals, API schemas, and deployment playbooks',
      'SLA-backed post-launch warranty and maintenance documentation'
    ],
    technologies: ['C# / .NET Core', 'Python', 'Node.js', 'Go', 'PostgreSQL', 'SQL Server', 'React', 'Docker'],
    useCases: [
      'Specialized manufacturing and supply chain execution software',
      'Proprietary trading and algorithmic ledger reconciliation tools',
      'Custom compliance, audit tracking, and reporting pipelines'
    ],
    faqs: [
      {
        question: 'Who owns the intellectual property of custom developed software?',
        answer: 'The client retains 100% intellectual property ownership upon completion and settlement, including all source code, models, and assets.'
      },
      {
        question: 'How do you handle scope evolution during custom builds?',
        answer: 'We operate agile sprints with bi-weekly milestone demonstrations, transparent sprint backlogs, and structured change management protocols.'
      }
    ]
  },
  {
    id: 'saas-product-development',
    slug: 'saas-product-development',
    title: 'SaaS Product Development',
    heroTagline: 'End-to-End Multi-Tenant Cloud Software from Inception to Scale',
    shortDescription: 'High-availability SaaS products engineered with multi-tenant data isolation, automated billing, self-service provisioning, and high-tier compliance.',
    detailedDescription: 'Building a successful software-as-a-service product requires more than features—it requires tenant isolation, automated subscription management, usage metering, high-velocity onboarding, and bulletproof security. We guide founders and enterprises through the entire SaaS lifecycle.',
    icon: 'CloudLightning',
    features: [
      'Multi-tenant architecture with tenant-level schema or row-level security (RLS)',
      'Automated subscription billing, tiered licensing, and Stripe/Razorpay webhooks',
      'Self-service organization onboarding and team invitation flows',
      'Role-based permissions, audit logging, and single sign-on (SAML/Okta)',
      'Feature flagging, canary deployments, and user analytics telemetry',
      'API-first design enabling client developers to build on top of your platform'
    ],
    deliverables: [
      'Multi-tenant SaaS cloud platform code and infrastructure-as-code (Terraform)',
      'Billing, subscription, and invoicing integration documentation',
      'Tenant management administrative panel',
      'Customer-facing developer API portal and interactive documentation'
    ],
    technologies: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'Redis', 'AWS/GCP', 'Stripe', 'Docker'],
    useCases: [
      'B2B workforce productivity and collaboration platforms',
      'Industry-specific compliance and documentation SaaS',
      'Automated marketing and multi-channel campaign analytics engines'
    ],
    faqs: [
      {
        question: 'How do you ensure data confidentiality between tenants?',
        answer: 'We enforce strict isolation at the database layer using PostgreSQL Row-Level Security (RLS) or dedicated tenant schemas with automated connection pooling safeguards.'
      },
      {
        question: 'Can the SaaS platform support enterprise custom integrations?',
        answer: 'Yes. We build webhook delivery systems and authenticated public REST APIs with rate limiting and API key management.'
      }
    ]
  },
  {
    id: 'ai-machine-learning',
    slug: 'ai-machine-learning',
    title: 'AI & Machine Learning Solutions',
    heroTagline: 'Predictive Intelligence, Deep Learning, and Actionable Data Science',
    shortDescription: 'Custom machine learning models, predictive analytics, natural language processing (NLP), and computer vision pipelines trained for practical enterprise utility.',
    detailedDescription: 'We translate artificial intelligence research into concrete business outcomes. From predictive forecasting that optimizes inventory to computer vision models that automate document verification, our data scientists build robust ML systems engineered for real-world production environments.',
    icon: 'Cpu',
    features: [
      'Custom supervised and unsupervised machine learning models',
      'Natural Language Processing (NLP) for unstructured text extraction and classification',
      'Computer Vision models for OCR, defect detection, and document verification',
      'MLOps pipelines for automated model retraining, drift monitoring, and evaluation',
      'On-device and edge inference optimization using TensorRT and ONNX',
      'Ethical AI frameworks with verifiable bias audits and explainability'
    ],
    deliverables: [
      'Trained model weights with benchmark accuracy and confusion matrices',
      'High-throughput microservice inference APIs (FastAPI/Triton)',
      'Data preparation scripts, feature stores, and training notebooks',
      'Model performance monitoring dashboard and drift alerting setup'
    ],
    technologies: ['Python', 'PyTorch', 'TensorFlow', 'Scikit-Learn', 'FastAPI', 'ONNX', 'Pandas', 'OpenCV'],
    useCases: [
      'Automated fraud detection and anomaly scoring in transactional data',
      'Predictive maintenance schedules for industrial machinery',
      'Intelligent document parsing and tabular extraction from unstructured invoices'
    ],
    faqs: [
      {
        question: 'Do we need a massive dataset before beginning an AI project?',
        answer: 'Not necessarily. We assess your existing data assets and often utilize transfer learning, synthetic data augmentation, or foundational models to deliver high accuracy with limited labeled samples.'
      },
      {
        question: 'How is data privacy preserved during model training?',
        answer: 'All models are trained inside your private virtual cloud infrastructure; customer data is never exposed to public training sets.'
      }
    ]
  },
  {
    id: 'ai-agent-development',
    slug: 'ai-agent-development',
    title: 'AI Agent Development',
    heroTagline: 'Autonomous AI Agents, Multi-Step Orchestration, and RAG Architecture',
    shortDescription: 'Next-generation autonomous AI agents equipped with tool calling, Retrieval-Augmented Generation (RAG), and multi-agent coordination to execute complex corporate workflows.',
    detailedDescription: 'Move beyond simple chatbots. Future Finger Technologies builds autonomous, deterministic AI agents capable of reasoning, executing complex multi-step tasks, interrogating enterprise databases, utilizing APIs, and generating structured deliverables while adhering to strict governance boundaries.',
    icon: 'Bot',
    features: [
      'Multi-agent orchestration architectures (swarm and hierarchical coordinator models)',
      'Deterministic tool use and function-calling integration with internal APIs',
      'Retrieval-Augmented Generation (RAG) over private corporate knowledge bases',
      'Strict guardrails, schema enforcement (Zod/Pydantic), and hallucination filters',
      'Persistent memory, conversation state management, and semantic caching',
      'Human-in-the-loop escalation protocols for high-stakes decision points'
    ],
    deliverables: [
      'Custom AI Agent core backend with modular tool integration framework',
      'Vector database configuration (Pinecone, pgvector, Qdrant) with indexing pipelines',
      'Evaluation test harness with benchmark prompt suites',
      'Administrative oversight dashboard for conversation inspection and token auditing'
    ],
    technologies: ['LangChain', 'LlamaIndex', 'Python', 'FastAPI', 'pgvector', 'OpenAI/Gemini APIs', 'Redis', 'Docker'],
    useCases: [
      'Autonomous customer support tier-1/tier-2 resolution agents',
      'Internal technical documentation query and code synthesis assistants',
      'Automated legal contract and regulatory compliance comparative review'
    ],
    faqs: [
      {
        question: 'How do you prevent AI hallucinations in enterprise settings?',
        answer: 'We enforce strict grounding via RAG with citation mandates, deterministic output schemas, temperature controls, and secondary verification subagents.'
      },
      {
        question: 'Can the agents interact directly with our existing internal ERP/CRM?',
        answer: 'Yes. We expose secure, authenticated REST or GraphQL tool functions that the agent invokes dynamically based on structured parameters.'
      }
    ]
  },
  {
    id: 'business-process-automation',
    slug: 'business-process-automation',
    title: 'Business Process Automation',
    heroTagline: 'End-to-End Workflow Modernization, RPA, and Frictionless Integrations',
    shortDescription: 'Intelligent automation systems that eliminate manual data entry, streamline cross-platform handoffs, and accelerate business operational cycles.',
    detailedDescription: 'Repetitive manual tasks drain operational margins and introduce human error. We analyze your core business operational pipelines and build resilient automation workflows connecting legacy systems, spreadsheets, cloud apps, and communication channels into a unified, reliable engine.',
    icon: 'Cpu',
    features: [
      'Cross-system workflow synchronization eliminating duplicate data entry',
      'Automated email parsing, document dispatch, and invoice reconciliation',
      'Custom robotic process automation (RPA) for systems without modern APIs',
      'Real-time alerts, Slack/Teams notifications, and escalation triggers',
      'Fault-tolerant retry mechanisms and dead-letter queues to prevent silent drops',
      'Comprehensive audit trails logging every automated transaction step'
    ],
    deliverables: [
      'Automated workflow pipelines and background daemon scripts',
      'Centralized monitoring dashboard displaying execution status and failure logs',
      'System integration connectors and secure credential store configuration',
      'Operational standard operating procedures (SOPs) and runbooks'
    ],
    technologies: ['Python', 'Node.js', 'n8n', 'Apache Airflow', 'PostgreSQL', 'Redis', 'Docker', 'Webhooks'],
    useCases: [
      'Multi-vendor supplier inventory and price synchronization',
      'Automated onboarding workflows for new customer accounts',
      'Regulatory compliance reporting data aggregation and report generation'
    ],
    faqs: [
      {
        question: 'What happens if a third-party service is temporarily unavailable?',
        answer: 'Our automation pipelines incorporate exponential backoff retries, persistent message queues, and automated alerting to ensure zero data loss during vendor downtime.'
      },
      {
        question: 'Can you automate systems that do not have public APIs?',
        answer: 'Yes. We engineer headless browser automations, database-level triggers, or secure SFTP drop-folder listeners to interface with legacy platforms.'
      }
    ]
  },
  {
    id: 'crm-hrms-solutions',
    slug: 'crm-hrms-solutions',
    title: 'CRM & HRMS Solutions',
    heroTagline: 'Custom Workforce Management and Customer Relationship Platforms',
    shortDescription: 'Tailored CRM and Human Resource Management Systems designed to maximize team productivity, employee lifecycle tracking, and client relationship retention.',
    detailedDescription: 'Generic CRMs and HR portals are often burdened with bloated features while lacking the exact workflows your business requires. Future Finger Technologies builds bespoke workforce and customer relationship systems—including our proprietary HRLord platform architecture—tailored to modern organizational requirements.',
    icon: 'Users',
    features: [
      'Comprehensive employee lifecycle management: onboarding, appraisal, and offboarding',
      'Automated attendance tracking, shift scheduling, and biometric device integration',
      'Payroll calculations, tax deduction logic, and automated payslip generation',
      'Lead pipeline tracking, deal stages, and customer interaction timelines',
      'Granular permission matrices for department heads, managers, and staff',
      'Interactive executive dashboards highlighting team KPIs and sales velocity'
    ],
    deliverables: [
      'Fully deployed CRM/HRMS portal with organizational data pre-seeded',
      'Mobile responsive employee self-service portal',
      'Integration bridges for payroll accounting software and biometric terminals',
      'Role-based user training manuals and administrator guide'
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'TypeScript', 'Tailwind CSS', 'Docker', 'Redis'],
    useCases: [
      'Multi-branch retail and services workforce attendance and payroll',
      'High-velocity sales organizations requiring customized pipeline automation',
      'Distributed remote teams needing unified leave tracking and milestone recognition'
    ],
    faqs: [
      {
        question: 'Can the HRMS integrate with our existing biometric attendance hardware?',
        answer: 'Yes. We build hardware listening services and API adapters that communicate directly with common ZKTeco, Essl, and IP-based biometric devices.'
      },
      {
        question: 'Is employee salary and confidential data encrypted at rest?',
        answer: 'Yes. Sensitive fields (salaries, banking details, personal identification) are encrypted using field-level AES-256 encryption in addition to transparent database encryption.'
      }
    ]
  },
  {
    id: 'erp-systems',
    slug: 'erp-systems',
    title: 'ERP & Business Management Systems',
    heroTagline: 'Integrated Enterprise Resource Planning for Holistic Operations',
    shortDescription: 'Modular, cloud-ready ERP systems uniting inventory, procurement, accounting, supply chain, and human resources into a single source of operational truth.',
    detailedDescription: 'Fragmented business software causes operational blind spots and reconciliation delays. We engineer modular ERP architectures that link inventory levels, purchase orders, general ledgers, sales channels, and fulfillment centers into an unified, synchronized ecosystem.',
    icon: 'Layers',
    features: [
      'Real-time multi-warehouse inventory tracking and stock valuation',
      'Automated purchase order workflows with multi-tier approval hierarchies',
      'Double-entry accounting ledger with automated journal entries and balance sheets',
      'Supply chain visibility, vendor rating metrics, and dispatch tracking',
      'Bespoke reporting engine for financial compliance and board summaries',
      'Modular microservice architecture allowing gradual component rollout'
    ],
    deliverables: [
      'Comprehensive ERP platform with role-based access for all departments',
      'Database migration scripts from legacy spreadsheets or older systems',
      'API gateway and message broker for high-volume transactions',
      'Staff onboarding modules and enterprise SLA support agreement'
    ],
    technologies: ['React', 'TypeScript', '.NET Core / Python', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes'],
    useCases: [
      'Manufacturing firms managing raw material procurement and production stages',
      'Wholesale distributors handling high-volume SKUs across multiple depots',
      'Multi-entity enterprise conglomerates requiring consolidated financial reporting'
    ],
    faqs: [
      {
        question: 'How do you mitigate disruption during ERP deployment?',
        answer: 'We employ a phased transition strategy, running parallel audits and dry-run reconciliations before cutover to guarantee uninterrupted business continuity.'
      },
      {
        question: 'Can the ERP handle multi-currency and international taxation?',
        answer: 'Yes. We build native multi-currency support with dynamic exchange rate feeds and configurable GST, VAT, and regional tax rules.'
      }
    ]
  },
  {
    id: 'ecommerce-development',
    slug: 'ecommerce-development',
    title: 'E-commerce Development',
    heroTagline: 'High-Converting, Resilient, and Omnichannel Digital Storefronts',
    shortDescription: 'Scalable e-commerce platforms featuring custom checkout experiences, inventory synchronization, lightning-fast product search, and secure payment processing.',
    detailedDescription: 'In modern e-commerce, fractions of a second determine conversion rates. We design and construct resilient commerce platforms engineered for high transactional volume, mobile shoppers, multi-gateway resilience, and seamless integration with warehouse management systems.',
    icon: 'ShoppingBag',
    features: [
      'Headless commerce architecture with blazing fast frontends',
      'Optimized single-page checkout funnels with abandoned cart recovery',
      'Multi-currency and multi-gateway integrations (Stripe, Razorpay, PayPal, UPI)',
      'Instant faceted search and intelligent filtering powered by Meilisearch/Elastic',
      'Automated inventory deduction and low-stock backorder controls',
      'Customer loyalty accounts, tiered discounts, and coupon engine'
    ],
    deliverables: [
      'Production storefront and administrative order management portal',
      'Payment gateway compliance documentation and PCI-DSS compliance verification',
      'Shipping carrier integration (Shiprocket, FedEx, Bluedart, DHL)',
      'Google Analytics 4 Enhanced Ecommerce event tracking setup'
    ],
    technologies: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'Stripe', 'Razorpay', 'Tailwind CSS', 'Redis'],
    useCases: [
      'Direct-to-Consumer (D2C) lifestyle and consumer brand storefronts',
      'B2B wholesale portals with bulk pricing tiers and invoice credit terms',
      'Digital product marketplaces with instant downloadable delivery'
    ],
    faqs: [
      {
        question: 'How do you ensure stability during high-traffic promotional sales?',
        answer: 'We utilize edge caching for catalog pages, decoupled checkout microservices, and auto-scaling container clusters that expand instantly with incoming traffic spikes.'
      },
      {
        question: 'Can we manage physical store stock and online inventory together?',
        answer: 'Yes. We construct bidirectional POS inventory sync adapters that adjust availability in real time across physical and online channels.'
      }
    ]
  },
  {
    id: 'api-integration',
    slug: 'api-integration',
    title: 'API Development & Integration',
    heroTagline: 'Secure, High-Throughput Microservice APIs and Ecosystem Connectors',
    shortDescription: 'Robust RESTful, GraphQL, and gRPC APIs built for low latency, secure external partner integration, and bulletproof microservice communication.',
    detailedDescription: 'Modern software is defined by how effectively it communicates. We engineer resilient API backends with comprehensive documentation, strict schema validation, rate limiting, and zero-trust authentication to power your mobile apps, partner integrations, and internal systems.',
    icon: 'Network',
    features: [
      'RESTful, GraphQL, and gRPC architectures designed for sub-millisecond overhead',
      'Interactive OpenAPI 3.0 (Swagger) and Postman collection documentation',
      'API gateway management with rate limiting, throttling, and IP whitelisting',
      'Zero-trust security models with mTLS, HMAC signature verification, and OAuth2',
      'Webhook notification infrastructure with guaranteed delivery and retry logic',
      'Comprehensive telemetry logging every request, payload, and response latency'
    ],
    deliverables: [
      'Microservice API codebases with automated contract testing',
      'Public or private interactive documentation portal',
      'Mock server setups for third-party developer sandboxes',
      'Grafana/Prometheus dashboard for API health and request metrics'
    ],
    technologies: ['Node.js', 'FastAPI', 'Go', 'Express', 'GraphQL', 'Redis', 'Docker', 'Kong'],
    useCases: [
      'Fintech partner APIs for loan calculation and identity verification',
      'Third-party logistics shipping calculation and label generation webhooks',
      'Centralized data layer bridging multiple internal corporate microservices'
    ],
    faqs: [
      {
        question: 'How do you safeguard APIs from denial-of-service (DDoS) and brute force attacks?',
        answer: 'We deploy multi-tier protection including Cloudflare edge firewalls, token bucket rate limiting, anomaly detection, and strict payload size limits.'
      },
      {
        question: 'Do you provide client SDKs for integrating partners?',
        answer: 'Yes. We generate typed TypeScript, Python, and Java client libraries directly from verified OpenAPI specifications.'
      }
    ]
  },
  {
    id: 'ui-ux-design',
    slug: 'ui-ux-design',
    title: 'UI/UX Design',
    heroTagline: 'User-Centric Product Design, Design Systems, and Intuitive Interfaces',
    shortDescription: 'Research-backed user experience design, elegant user interfaces, wireframes, prototypes, and reusable design systems that turn complex workflows into delightful simplicity.',
    detailedDescription: 'Great software starts with deep human empathy. Our design studio combines rigorous user research, wireframing, interactive prototyping, and design system governance to create digital experiences that reduce cognitive fatigue and elevate user satisfaction.',
    icon: 'Palette',
    features: [
      'User journey mapping, persona development, and workflow information architecture',
      'Interactive Figma prototypes enabling rapid stakeholder validation',
      'Atomic design systems with documented design tokens and component states',
      'Strict WCAG 2.1 AA accessibility contrast and touch target compliance',
      'Micro-interactions and subtle animations that reinforce user actions',
      'Developer-ready specifications with tokens, assets, and responsive guidelines'
    ],
    deliverables: [
      'Complete Figma design files with nested auto-layout components',
      'Clickable prototype for user testing and executive reviews',
      'Design token repository (colors, typography, spacing, shadows)',
      'Exported production SVG icons and optimized graphic assets'
    ],
    technologies: ['Figma', 'FigJam', 'Tokens Studio', 'Adobe Creative Suite', 'Tailwind Design Specs'],
    useCases: [
      'Complex enterprise data dashboard UX redesign',
      'Mobile banking and investment app interface prototyping',
      'SaaS onboarding flow redesign to increase 14-day conversion rates'
    ],
    faqs: [
      {
        question: 'How do you ensure designs translate accurately into code?',
        answer: 'Our designers write code-compliant specifications and collaborate directly with our frontend developers, utilizing shared design tokens and component libraries.'
      },
      {
        question: 'Do you conduct usability testing during the design phase?',
        answer: 'Yes. We run interactive prototype testing sessions with target users to identify friction points before a single line of production code is written.'
      }
    ]
  },
  {
    id: 'seo-digital-marketing',
    slug: 'seo-digital-marketing',
    title: 'SEO & Digital Marketing',
    heroTagline: 'Technical Search Engine Optimization, Authority Building, and Organic Reach',
    shortDescription: 'Data-driven search engine optimization, semantic structured data implementation, Core Web Vitals optimization, and content strategy designed for durable organic rankings.',
    detailedDescription: 'Visibility is meaningless without qualified intent. Our technical SEO specialists engineer your digital presence to meet Google’s rigorous technical search standards, ensuring your enterprise ranks for high-intent keywords, captures organic traffic, and converts visitors into qualified inbound leads.',
    icon: 'Search',
    features: [
      'Comprehensive Technical SEO audits, crawl budget optimization, and indexation controls',
      'Schema.org structured data (Organization, SoftwareApplication, Service, FAQ, Breadcrumbs)',
      'Core Web Vitals performance tuning (LCP, INP, CLS)',
      'Strategic keyword mapping and high-authority topical cluster architecture',
      'Clean URL hierarchy, canonicalization strategy, and XML sitemaps',
      'Google Search Console and Analytics 4 custom conversion funnel tracking'
    ],
    deliverables: [
      'Technical SEO audit report and remediation implementation',
      'Verified Schema.org JSON-LD snippets embedded in all production templates',
      'Target keyword opportunity matrix and content cluster roadmap',
      'Automated ranking and organic visibility reporting dashboard'
    ],
    technologies: ['Google Search Console', 'Google Analytics 4', 'Schema.org JSON-LD', 'Ahrefs', 'Screaming Frog', 'Lighthouse'],
    useCases: [
      'B2B software companies seeking organic enterprise lead generation',
      'New product launches requiring immediate indexing and SERP presence',
      'Domain migration and website redesign SEO preservation'
    ],
    faqs: [
      {
        question: 'How long does it take to see organic search ranking improvements?',
        answer: 'Technical fixes (indexing errors, structured data, speed) often yield improvements within 2 to 6 weeks. Competitive topical authority rankings typically mature over 3 to 6 months.'
      },
      {
        question: 'Do you make promises regarding guaranteed #1 rankings on Google?',
        answer: 'No reputable agency can guarantee specific algorithmic positions. We focus on strict technical compliance, authentic authority, and measurable organic traffic growth.'
      }
    ]
  },
  {
    id: 'cloud-devops',
    slug: 'cloud-devops',
    title: 'Cloud & DevOps Solutions',
    heroTagline: 'Automated CI/CD Pipelines, Infrastructure as Code, and Cloud Resilience',
    shortDescription: 'Modern cloud infrastructure architecture, automated GitHub Actions pipelines, container orchestration, and 24/7 observability for high-uptime platforms.',
    detailedDescription: 'Reliable software requires an indestructible operational backbone. We design, provision, and maintain cloud infrastructure that deploys automatically, scales smoothly under unexpected load, and recovers resiliently from failures without customer disruption.',
    icon: 'Server',
    features: [
      'Automated CI/CD deployment pipelines using GitHub Actions and GitLab CI',
      'Infrastructure as Code (IaC) using Terraform for repeatable, auditable environments',
      'Containerization with Docker and Kubernetes orchestration',
      'Automated zero-downtime blue/green and canary deployments',
      'Comprehensive monitoring, logging, and APM alerting (Prometheus, Grafana, Datadog)',
      'Cloud security hardening, IAM least-privilege policies, and VPC network isolation'
    ],
    deliverables: [
      'Version-controlled CI/CD workflow YAMLs with automated test gates',
      'Terraform infrastructure templates for multi-environment staging and prod',
      'Disaster recovery playbooks with automated backup verification',
      '24/7 cloud health dashboard with PagerDuty / Slack escalation routes'
    ],
    technologies: ['AWS', 'Google Cloud', 'GitHub Actions', 'Docker', 'Kubernetes', 'Terraform', 'Prometheus', 'Grafana', 'Nginx'],
    useCases: [
      'High-growth SaaS startups automating release velocity from weeks to minutes',
      'Enterprise cloud migrations from legacy on-premises data centers to AWS/GCP',
      'Implementation of SOC 2 and ISO 27001 cloud security infrastructure controls'
    ],
    faqs: [
      {
        question: 'Can you help lower our monthly cloud infrastructure bills?',
        answer: 'Yes. Our cloud architects conduct FinOps audits, identifying idle resources, optimizing instance sizing, and leveraging spot/reserved commitments to cut costs by 20% to 45%.'
      },
      {
        question: 'How do you handle zero-downtime deployments?',
        answer: 'We utilize containerized rolling updates or blue/green environments with health check gates to ensure new releases take traffic only after passing readiness probes.'
      }
    ]
  },
  {
    id: 'software-maintenance',
    slug: 'software-maintenance',
    title: 'Software Maintenance & Support',
    heroTagline: 'Proactive System Maintenance, Security Patching, and SLA-Backed Uptime',
    shortDescription: 'Continuous monitoring, routine security updates, performance optimization, and dedicated bug-fix support to keep your software running flawlessly.',
    detailedDescription: 'Software is an evolving asset that degrades if left unattended. Future Finger Technologies provides proactive maintenance agreements that protect your code from bit rot, resolve third-party dependency vulnerabilities, and ensure prompt incident resolution under guaranteed SLAs.',
    icon: 'Wrench',
    features: [
      'Proactive dependency and framework security vulnerability patching',
      '24/7 uptime monitoring and automated incident alerting',
      'Database health monitoring, index defragmentation, and backup verification',
      'Bug triage, root-cause diagnosis, and rapid remediation sprints',
      'Performance profiling to eliminate gradual memory leaks and slow queries',
      'Clear, transparent monthly maintenance reports and system health scorecards'
    ],
    deliverables: [
      'Formal Service Level Agreement (SLA) with defined response and resolution windows',
      'Dedicated support portal for ticketing and incident tracking',
      'Monthly security vulnerability audit and dependency update logs',
      'Quarterly architectural review and strategic optimization roadmap'
    ],
    technologies: ['GitHub', 'Sentry', 'Datadog', 'Uptime Kuma', 'Docker', 'Node.js', 'Python', 'PostgreSQL'],
    useCases: [
      'Mission-critical enterprise software requiring 99.9% uptime guarantees',
      'Legacy applications needing ongoing security maintenance without full rebuilds',
      'Post-launch warranty and continuous feature iteration for funded startups'
    ],
    faqs: [
      {
        question: 'What response times are covered in your maintenance SLAs?',
        answer: 'We offer tiered SLAs ranging from 1-hour response times for critical severity incidents (P1) to next-business-day response for non-urgent feature requests.'
      },
      {
        question: 'Can you support an application built by another development agency?',
        answer: 'Yes. We conduct an initial codebase audit and technical discovery to document architecture and resolve technical debt before assuming support ownership.'
      }
    ]
  },
  {
    id: 'cybersecurity-solutions',
    slug: 'cybersecurity-solutions',
    title: 'Cybersecurity & Digital Security',
    heroTagline: 'Endpoint Defense, Threat Mitigation, and Proactive Cyber Resilience',
    shortDescription: 'Comprehensive cyber defense architectures, endpoint protection, vulnerability assessments, and digital forensics engineered to protect enterprise assets.',
    detailedDescription: 'In an era of sophisticated ransomware and state-sponsored cyber threats, defense-in-depth is non-negotiable. Building upon our foundational cybersecurity engineering—exemplified by our flagship XShield™ enterprise endpoint platform—we harden networks, codebases, and endpoints against adversarial intrusion.',
    icon: 'ShieldCheck',
    features: [
      'Endpoint detection, kernel-level sentry drivers, and anti-ransomware defenses',
      'Application security audits, static code analysis (SAST), and dynamic testing (DAST)',
      'Zero-trust network architecture and multi-factor authentication enforcement',
      'Digital forensics, event telemetry correlation, and incident response playbooks',
      'Cryptographic verification, Authenticode binary signing, and tamper detection',
      'Compliance alignment with ISO 27001, Indian IT Act 2000, and GDPR principles'
    ],
    deliverables: [
      'Comprehensive vulnerability assessment and penetration testing (VAPT) reports',
      'Hardened endpoint security configuration and driver deployment manuals',
      'Incident response and breach containment protocol documentation',
      'Cryptographic checksum registries and digital signature validation guides'
    ],
    technologies: ['XShield™ Core', 'Wireshark', 'Suricata', 'OpenVAS', 'SonarQube', 'Windows Kernel Minifilters', 'OpenSSL', 'YARA'],
    useCases: [
      'Enterprises protecting proprietary endpoints from targeted ransomware strains',
      'Financial services organizations requiring certified code security audits',
      'Law enforcement and corporate security teams conducting digital trace audits'
    ],
    faqs: [
      {
        question: 'How does your endpoint protection differ from generic antivirus software?',
        answer: 'Traditional antivirus relies on static signature matching. Our approach (as engineered in XShield™) utilizes real-time behavioral heuristics, kernel minifilter drivers, and memory anomaly detection to neutralize zero-day threats before payload execution.'
      },
      {
        question: 'Do you offer forensic investigation for compromised systems?',
        answer: 'Yes. Our specialized cyber forensics division utilizes forensic disk images, memory dumps, and trail analysis (powered by our FFT-TRACE-X tooling) to trace attack vectors and compile legally sound audit vaults.'
      }
    ]
  }
];
