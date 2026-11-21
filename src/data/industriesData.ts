import { IndustryItem } from '../types';

export const industriesData: IndustryItem[] = [
  {
    id: 'healthcare-biotech',
    slug: 'healthcare-biotech',
    name: 'Healthcare & Life Sciences',
    icon: 'Activity',
    description: 'Secure, HIPAA/GDPR-aligned patient management systems, laboratory informatics, and medical AI diagnostic tools built with rigorous data protection.',
    challenges: [
      'Fragmented Electronic Health Record (EHR) data silos and lack of interoperability',
      'Strict statutory data privacy regulations (HIPAA, DISHA, GDPR)',
      'Need for sub-second image processing in diagnostic medical imaging'
    ],
    solutions: [
      'HL7 / FHIR-compliant API middleware unifying clinical data sources',
      'End-to-end encrypted telehealth and remote patient monitoring portals',
      'Edge AI inferencing for real-time pathology and diagnostic support'
    ],
    impactMetrics: [
      'Eliminated manual record transcription delays by 65%',
      'Achieved 100% compliance with digital health privacy benchmarks',
      'Sub-500ms retrieval times for longitudinal medical histories'
    ]
  },
  {
    id: 'fintech-banking',
    slug: 'fintech-banking',
    name: 'FinTech, Banking & Financial Services',
    icon: 'TrendingUp',
    description: 'High-frequency transaction processing, algorithmic fraud detection, loan origination engines, and compliant digital banking interfaces.',
    challenges: [
      'High transaction volume requiring low latency and zero tolerance for data loss',
      'Sophisticated money laundering and multi-account identity fraud',
      'Complex regulatory reporting (RBI, SEBI, PCI-DSS, SOC 2)'
    ],
    solutions: [
      'Distributed ledger reconciliation pipelines with microsecond event queues',
      'Real-time behavioral fraud detection powered by machine learning sentinels',
      'Automated KYC/AML verification workflows with optical document extraction'
    ],
    impactMetrics: [
      'Processed over 10,000 transactions per second under peak stress testing',
      'Reduced false-positive fraud flags by 42% via context-aware AI models',
      'Accelerated customer onboarding KYC turnaround from 48 hours to under 3 minutes'
    ]
  },
  {
    id: 'ecommerce-retail',
    slug: 'ecommerce-retail',
    name: 'E-commerce, Retail & Consumer Brands',
    icon: 'ShoppingBag',
    description: 'Omnichannel commerce platforms, dynamic pricing engines, automated order fulfillment hubs, and personalized shopping recommendation systems.',
    challenges: [
      'Extreme traffic spikes during flash sales causing checkout degradation',
      'Inventory mismatches between physical warehouses and online channels',
      'High cart abandonment rates due to checkout friction and shipping delays'
    ],
    solutions: [
      'Serverless auto-scaling checkout pipelines resilient to 10x traffic surges',
      'Unified multi-warehouse inventory synchronization via real-time webhooks',
      'Integrated rate shopping across regional carriers using Shipzyro™ engine'
    ],
    impactMetrics: [
      'Decreased checkout completion time by 35% on mobile devices',
      'Maintained 99.99% uptime during peak holiday promotional events',
      'Reduced carrier shipping costs by 18% through dynamic carrier routing'
    ]
  },
  {
    id: 'logistics-supply-chain',
    slug: 'logistics-supply-chain',
    name: 'Logistics, Freight & Supply Chain',
    icon: 'Truck',
    description: 'Fleet tracking, automated dispatch routing, multi-carrier aggregation, and warehouse inventory management systems.',
    challenges: [
      'Lack of real-time visibility across multimodal transportation hubs',
      'High rate of non-delivery reports (NDR) and costly return-to-origin (RTO) trips',
      'Paper-based bill of lading and manifest verification delays'
    ],
    solutions: [
      'IoT and mobile GPS real-time fleet telemetry and geofencing systems',
      'Automated customer communication workflows to verify delivery availability',
      'Digital manifest generation and automated barcode verification stations'
    ],
    impactMetrics: [
      'Decreased parcel RTO return rates by up to 24%',
      'Saved over 4,000 operational hours annually through automated dispatching',
      'Real-time driver location updates delivered with sub-second latency'
    ]
  },
  {
    id: 'manufacturing-industrial',
    slug: 'manufacturing-industrial',
    name: 'Manufacturing & Industrial IoT',
    icon: 'Factory',
    description: 'Smart factory automation, predictive equipment maintenance, shop floor attendance tracking, and production line telemetry.',
    challenges: [
      'Unplanned machine breakdowns causing costly production halts',
      'Legacy industrial machinery without modern networking capabilities',
      'Complex multi-shift workforce scheduling and manual attendance tracking'
    ],
    solutions: [
      'Vibration and thermal sensor telemetry feeds processed via anomaly detection',
      'Edge gateway integration converting legacy serial data into modern MQTT feeds',
      'HRLord™ biometric terminal synchronization for 24/7 multi-shift operations'
    ],
    impactMetrics: [
      'Reduced unplanned machine downtime by 28% via predictive alerts',
      'Automated payroll reconciliation for over 1,500 factory workers',
      'Real-time production yield metrics visible on executive mobile dashboards'
    ]
  },
  {
    id: 'cybersecurity-defense',
    slug: 'cybersecurity-defense',
    name: 'Cybersecurity, Defense & Forensics',
    icon: 'Shield',
    description: 'Sovereign endpoint protection, incident response tooling, digital evidence collection, and automated vulnerability management.',
    challenges: [
      'Ransomware strains utilizing kernel-level exploits and stealth encryption',
      'Strict legal standards for digital evidence admissibility in court',
      'Severe shortage of skilled cyber forensic analysts to review raw logs'
    ],
    solutions: [
      'XShield™ kernel minifilter driver halting unauthorized encryption routines',
      'FFT-TRACE-X™ automated multi-hop transaction and timeline correlation',
      'Tamper-evident cryptographic audit vaults preserving Section 65B integrity'
    ],
    impactMetrics: [
      'Neutralized 100% of simulated zero-day ransomware encryption payloads',
      'Compressed multi-week forensic transaction tracing into single-day audits',
      'Deployed zero-overhead silent sentry protecting critical endpoints'
    ]
  }
];
