export interface Contract {
  id: string;
  title: string;
  type: 'Custom IT Services' | 'HRMS SaaS Enterprise' | 'Mobile App Development' | 'AI Automation Retainer' | 'Software Architecture Audit' | 'School SaaS CampusOS';
  clientName: string;
  clientCompany: string;
  clientEmail: string;
  clientPhone: string;
  contractValue: number;
  currency: 'INR' | 'USD';
  paymentTerms: string;
  startDate: string;
  endDate: string;
  scopeOfWork: string;
  deliverables: string[];
  status: 'Active' | 'Pending Signature' | 'Draft' | 'Completed' | 'Terminated';
  signedByClient: boolean;
  clientSignatureDate?: string;
  clientSignerName?: string;
  signedByCompany: boolean;
  companySignatureDate: string;
  companySignerName: string;
  gstin: string;
  sacCode: string;
  msmeUdyam: string;
  createdAt: string;
}

export interface Employee {
  id: string;
  name: string;
  role: string;
  department: 'Engineering' | 'Sales & Business' | 'HR & Legal' | 'Executive';
  email: string;
  salaryMonthly: number;
  status: 'Active' | 'On Leave' | 'Bench';
  joinedDate: string;
}

export interface HRMSUser {
  id: string;
  name: string;
  email: string;
  role: 'SuperAdmin' | 'HR_Manager' | 'Client';
  company: string;
  avatar: string;
}

const STORAGE_KEY_CONTRACTS = 'fft_hrms_contracts_v1';
const STORAGE_KEY_EMPLOYEES = 'fft_hrms_employees_v1';
const STORAGE_KEY_AUTH = 'fft_hrms_auth_user_v1';

export const INITIAL_CONTRACTS: Contract[] = [
  {
    id: 'FFT-CTR-2026-001',
    title: 'Enterprise Freight Aggregator & Courier CRM Portal',
    type: 'Custom IT Services',
    clientName: 'Sanjay Mehta',
    clientCompany: 'Khanna Logistics & Trading Pvt Ltd',
    clientEmail: 'sanjay.mehta@khannalogistics.example.com',
    clientPhone: '+91 98110 24892',
    contractValue: 250000,
    currency: 'INR',
    paymentTerms: '30% Advance (₹75,000) / 40% Milestone Integration (₹1,00,000) / 30% Final Handover (₹75,000)',
    startDate: '2026-11-01',
    endDate: '2026-12-15',
    scopeOfWork: 'Complete hyper-local and pan-India courier routing aggregator with multi-carrier API integration, real-time docket webhook tracking, dynamic statutory GST billing, and automated customer WhatsApp dispatch notifications.',
    deliverables: [
      'Multi-carrier shipping rate comparison engine',
      'Unified consignment tracking dashboard with webhook event ingestion',
      'Automated WhatsApp and SMS delivery status broadcasts',
      'Statutory GST (SAC 998314) and ICICI UPI QR payment integration',
      '90-day post-handover architectural maintenance and SLA support'
    ],
    status: 'Active',
    signedByClient: true,
    clientSignatureDate: '2026-11-02 11:30 UTC',
    clientSignerName: 'Sanjay Mehta (Managing Director)',
    signedByCompany: true,
    companySignatureDate: '2026-11-01 16:00 UTC',
    companySignerName: 'Vikram Malhotra (Lead AI Software Architect)',
    gstin: '07AVAPK3756C1ZV',
    sacCode: '998314',
    msmeUdyam: 'UDYAM-DL-06-0044819',
    createdAt: '2026-11-01'
  },
  {
    id: 'FFT-CTR-2026-002',
    title: 'WorkSphere HRMS & Payroll Cloud Multi-Tenant SaaS License',
    type: 'HRMS SaaS Enterprise',
    clientName: 'Sunil Aggarwal',
    clientCompany: 'Nexus Retail Solutions LLP',
    clientEmail: 'sunil@nexusretail.example.com',
    clientPhone: '+91 99201 55431',
    contractValue: 175000,
    currency: 'INR',
    paymentTerms: '₹1,25,000 Setup & Biometric Integration + ₹50,000 Annual Maintenance Contract (AMC)',
    startDate: '2026-10-15',
    endDate: '2027-10-14',
    scopeOfWork: 'Deployment of WorkSphere HRMS with 13 core modules (Biometric Sync, Payroll, Attendance, Assets, Leaves, WhatsApp alerts) across 15 retail branch stores.',
    deliverables: [
      'Dedicated multi-tenant cloud instance provisioned on high-speed CDN',
      'ZKTeco TCP/IP biometric hardware synchronization listener',
      'One-click statutory payroll calculation with PF/ESI and TDS deductions',
      '15 branch store manager role-based access control setup'
    ],
    status: 'Active',
    signedByClient: true,
    clientSignatureDate: '2026-10-18 14:15 UTC',
    clientSignerName: 'Sunil Aggarwal (Partner)',
    signedByCompany: true,
    companySignatureDate: '2026-10-15 10:00 UTC',
    companySignerName: 'Vikram Malhotra (Chief Architect)',
    gstin: '07AVAPK3756C1ZV',
    sacCode: '998314',
    msmeUdyam: 'UDYAM-DL-06-0044819',
    createdAt: '2026-10-15'
  },
  {
    id: 'FFT-CTR-2026-003',
    title: 'CampusOS EdTech ERP & Parent-Teacher Mobile App Suite',
    type: 'School SaaS CampusOS',
    clientName: 'Dr. Anita Deshmukh',
    clientCompany: 'St. Xavier Public School Trust',
    clientEmail: 'principal@stxavier.example.com',
    clientPhone: '+91 98450 12890',
    contractValue: 120000,
    currency: 'INR',
    paymentTerms: '50% Signing (₹60,000) / 50% Go-Live Verification (₹60,000)',
    startDate: '2026-11-10',
    endDate: '2026-12-31',
    scopeOfWork: 'Full multi-tenant school operations platform with student fee collection receipts, online report card generation, parent WhatsApp circulars, and teacher gradebook.',
    deliverables: [
      'Admin web portal with fee ledger and automated fee receipt generation',
      'Flutter Android & iOS mobile app for parents with real-time push notices',
      'Automated WhatsApp payment reminder gateway'
    ],
    status: 'Active',
    signedByClient: true,
    clientSignatureDate: '2026-11-12 09:45 UTC',
    clientSignerName: 'Dr. Anita Deshmukh (Trustee & Principal)',
    signedByCompany: true,
    companySignatureDate: '2026-11-10 11:00 UTC',
    companySignerName: 'Vikram Malhotra (Chief Architect)',
    gstin: '07AVAPK3756C1ZV',
    sacCode: '998314',
    msmeUdyam: 'UDYAM-DL-06-0044819',
    createdAt: '2026-11-10'
  },
  {
    id: 'FFT-CTR-2026-004',
    title: 'Apex Cloud Telephony & AI Sales Voice Bot Retainer',
    type: 'AI Automation Retainer',
    clientName: 'Tariq Al-Fahim',
    clientCompany: 'Apex Global Logistics FZ-LLC (Dubai, UAE)',
    clientEmail: 'tariq@apexlogistics.ae',
    clientPhone: '+971 50 892 4110',
    contractValue: 3500,
    currency: 'USD',
    paymentTerms: 'Milestone Escrow: $1,500 Upfront / $1,000 Prototype / $1,000 Handover',
    startDate: '2026-11-15',
    endDate: '2027-01-15',
    scopeOfWork: 'Autonomous conversational voice agent running over Asterisk SIP VoIP with real-time speech-to-text, LLM function calling, and CRM lead qualification routing.',
    deliverables: [
      'Sub-400ms latency Asterisk VoIP integration',
      'Custom LLM prompt and speech model tuned for logistics dispatch',
      'Autonomous CRM lead scoring and calendar appointment booking'
    ],
    status: 'Pending Signature',
    signedByClient: false,
    signedByCompany: true,
    companySignatureDate: '2026-11-15 12:00 UTC',
    companySignerName: 'Vikram Malhotra (Lead AI Software Architect)',
    gstin: '07AVAPK3756C1ZV',
    sacCode: '998314',
    msmeUdyam: 'UDYAM-DL-06-0044819',
    createdAt: '2026-11-15'
  },
  {
    id: 'FFT-CTR-2026-005',
    title: 'Rapid Architecture & Vulnerability Security Audit Sprint',
    type: 'Software Architecture Audit',
    clientName: 'Rajesh Kothari',
    clientCompany: 'FinEdge Microfinance Solutions',
    clientEmail: 'rajesh@finedge.example.com',
    clientPhone: '+91 97110 33491',
    contractValue: 50000,
    currency: 'INR',
    paymentTerms: '100% Escrow on Agreement Signing ($500 USD / ₹50,000 INR)',
    startDate: '2026-11-20',
    endDate: '2026-11-27',
    scopeOfWork: '7-day intensive codebase inspection, AST vulnerability scan, SQL injection & authentication boundary testing, and delivery of verifiable MITRE D3FEND remediation roadmap.',
    deliverables: [
      'Comprehensive Executive Architecture & Risk Dossier',
      'Automated vulnerability regression test suite',
      '1-on-1 CTO advisory briefing with Dr. Kabir Verma'
    ],
    status: 'Draft',
    signedByClient: false,
    signedByCompany: true,
    companySignatureDate: '2026-11-20 18:00 UTC',
    companySignerName: 'Vikram Malhotra (Lead AI Software Architect)',
    gstin: '07AVAPK3756C1ZV',
    sacCode: '998314',
    msmeUdyam: 'UDYAM-DL-06-0044819',
    createdAt: '2026-11-20'
  }
];

export const INITIAL_EMPLOYEES: Employee[] = [
  {
    id: 'EMP-001',
    name: 'Vikram Malhotra',
    role: 'AI CEO & Principal Systems Architect',
    department: 'Executive',
    email: 'vikram.ceo@futurefinger.com',
    salaryMonthly: 250000,
    status: 'Active',
    joinedDate: '2024-01-01'
  },
  {
    id: 'EMP-002',
    name: 'Dr. Kabir Verma',
    role: 'AI CTO & Systems Security Sentry',
    department: 'Engineering',
    email: 'kabir.cto@futurefinger.com',
    salaryMonthly: 220000,
    status: 'Active',
    joinedDate: '2024-01-15'
  },
  {
    id: 'EMP-003',
    name: 'Alok Bansal',
    role: 'AI CFO & Reality Governance Officer',
    department: 'Executive',
    email: 'alok.cfo@futurefinger.com',
    salaryMonthly: 180000,
    status: 'Active',
    joinedDate: '2024-02-01'
  },
  {
    id: 'EMP-004',
    name: 'Aaryan',
    role: 'Head of Domestic B2B & HR Operations',
    department: 'HR & Legal',
    email: 'aaryan.hr@futurefinger.com',
    salaryMonthly: 120000,
    status: 'Active',
    joinedDate: '2024-03-01'
  },
  {
    id: 'EMP-005',
    name: 'Marcus Vance',
    role: 'Global Enterprise Sales Director',
    department: 'Sales & Business',
    email: 'marcus.vance@futurefinger.com',
    salaryMonthly: 160000,
    status: 'Active',
    joinedDate: '2024-04-15'
  },
  {
    id: 'EMP-006',
    name: 'Priya Sharma',
    role: 'EdTech & Speed-to-Lead Solutions Lead',
    department: 'Sales & Business',
    email: 'priya.sharma@futurefinger.com',
    salaryMonthly: 110000,
    status: 'Active',
    joinedDate: '2024-05-01'
  },
  {
    id: 'EMP-007',
    name: 'Kenji Tanaka',
    role: 'APAC Enterprise Solutions Architect',
    department: 'Engineering',
    email: 'kenji.tanaka@futurefinger.com',
    salaryMonthly: 175000,
    status: 'Active',
    joinedDate: '2024-06-01'
  },
  {
    id: 'EMP-008',
    name: 'Zayd Al-Mansoor',
    role: 'MENA Enterprise VoIP & ERP Architect',
    department: 'Engineering',
    email: 'zayd.almansoor@futurefinger.com',
    salaryMonthly: 170000,
    status: 'Active',
    joinedDate: '2024-07-01'
  }
];

export const DEMO_USERS: HRMSUser[] = [
  {
    id: 'USR-001',
    name: 'Vikram Malhotra',
    email: 'admin@futurefinger.com',
    role: 'SuperAdmin',
    company: 'Future Finger Technologies',
    avatar: '👑'
  },
  {
    id: 'USR-002',
    name: 'Aaryan (HR Lead)',
    email: 'hr@futurefinger.com',
    role: 'HR_Manager',
    company: 'Future Finger Technologies',
    avatar: '📋'
  },
  {
    id: 'USR-003',
    name: 'Sanjay Mehta',
    email: 'client@khanna.com',
    role: 'Client',
    company: 'Khanna Logistics & Trading Pvt Ltd',
    avatar: '🏢'
  }
];

// LocalStorage helpers
export const getStoredContracts = (): Contract[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_CONTRACTS);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY_CONTRACTS, JSON.stringify(INITIAL_CONTRACTS));
      return INITIAL_CONTRACTS;
    }
    return JSON.parse(raw);
  } catch (e) {
    console.error('Failed to parse contracts from localStorage:', e);
    return INITIAL_CONTRACTS;
  }
};

export const saveContract = (contract: Contract): void => {
  const current = getStoredContracts();
  const index = current.findIndex(c => c.id === contract.id);
  if (index >= 0) {
    current[index] = contract;
  } else {
    current.unshift(contract);
  }
  localStorage.setItem(STORAGE_KEY_CONTRACTS, JSON.stringify(current));
};

export const deleteContract = (id: string): void => {
  const current = getStoredContracts();
  const filtered = current.filter(c => c.id !== id);
  localStorage.setItem(STORAGE_KEY_CONTRACTS, JSON.stringify(filtered));
};

export const signContract = (id: string, signerName: string): Contract | null => {
  const current = getStoredContracts();
  const contract = current.find(c => c.id === id);
  if (!contract) return null;

  contract.signedByClient = true;
  contract.clientSignerName = signerName;
  contract.clientSignatureDate = new Date().toISOString().replace('T', ' ').substring(0, 19) + ' UTC';
  contract.status = 'Active';

  localStorage.setItem(STORAGE_KEY_CONTRACTS, JSON.stringify(current));
  return contract;
};

export const getStoredEmployees = (): Employee[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_EMPLOYEES);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY_EMPLOYEES, JSON.stringify(INITIAL_EMPLOYEES));
      return INITIAL_EMPLOYEES;
    }
    return JSON.parse(raw);
  } catch (e) {
    console.error('Failed to parse employees from localStorage:', e);
    return INITIAL_EMPLOYEES;
  }
};

export const saveEmployee = (emp: Employee): void => {
  const current = getStoredEmployees();
  const index = current.findIndex(e => e.id === emp.id);
  if (index >= 0) {
    current[index] = emp;
  } else {
    current.unshift(emp);
  }
  localStorage.setItem(STORAGE_KEY_EMPLOYEES, JSON.stringify(current));
};

export const getCurrentUser = (): HRMSUser | null => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_AUTH);
    if (!raw) {
      // Default to SuperAdmin for instant seamless experience
      localStorage.setItem(STORAGE_KEY_AUTH, JSON.stringify(DEMO_USERS[0]));
      return DEMO_USERS[0];
    }
    return JSON.parse(raw);
  } catch (e) {
    return DEMO_USERS[0];
  }
};

export const setCurrentUser = (user: HRMSUser | null): void => {
  if (user) {
    localStorage.setItem(STORAGE_KEY_AUTH, JSON.stringify(user));
  } else {
    localStorage.removeItem(STORAGE_KEY_AUTH);
  }
};
