import { Landmark, MapPin, Scale, Shield, Gavel, Users, Briefcase, FileText, BookOpen, Clock, Handshake, FileSearch, Building2, HelpCircle } from "lucide-react";

const commonPracticeAreas = [
  { icon: Gavel, title: "Civil Matters", description: "Property disputes, recovery suits, injunctions." },
  { icon: Scale, title: "Criminal Matters", description: "Bail applications, criminal trials, cross-examinations." },
  { icon: Users, title: "Family Disputes", description: "Divorce, mutual consent, child custody." },
  { icon: Briefcase, title: "Commercial Suits", description: "Breach of contract, commercial disputes." },
  { icon: Handshake, title: "Arbitration", description: "Arbitration petitions, enforcement." },
  { icon: FileSearch, title: "Consumer Cases", description: "Deficiency in service, unfair trade practices." },
  { icon: FileText, title: "Negotiable Instruments", description: "Cheque bounce cases under Section 138." },
  { icon: BookOpen, title: "Succession & Probate", description: "Wills, succession certificates." }
];

const commonResources = [
  { icon: Landmark, title: "Court Procedures", description: "Guide to filing and hearings.", link: "#", linkText: "Learn More" },
  { icon: BookOpen, title: "Important Acts", description: "Key laws applicable.", link: "#", linkText: "Explore" },
  { icon: FileText, title: "Case Status", description: "Check your case status.", link: "#", linkText: "Check Now" },
  { icon: Shield, title: "Rules & Guidelines", description: "Access rules and notifications.", link: "#", linkText: "View All" }
];

const commonJudges = [
  { title: "Hon'ble District Judge", subtitle: "Head of District Judiciary" },
  { title: "Principal Judge", subtitle: "Family Courts" },
  { title: "Chief Metropolitan Magistrate", subtitle: "Criminal Jurisdiction" }
];

const commonServices = [
  { icon: Handshake, title: "Mediation Center", description: "Alternative dispute resolution services for amicable settlements." },
  { icon: Shield, title: "Legal Aid Services", description: "Free legal services for marginalized and eligible citizens." },
  { icon: FileSearch, title: "E-Sewa Kendra", description: "Digital assistance for e-filing, case status, and online services." }
];

const commonTimings = [
  { day: "Monday - Friday", time: "10:00 AM - 05:00 PM", highlight: true },
  { day: "Lunch Break", time: "01:30 PM - 02:00 PM" },
  { day: "Filing Counters", time: "10:00 AM - 03:30 PM" },
  { day: "Saturday - Sunday", time: "Closed (Except special sittings)" }
];

const commonNotices = [
  { date: "15 Oct 2026", title: "Notification regarding mandatory e-Filing in all Civil Courts.", link: "#" },
  { date: "02 Oct 2026", title: "Circular for Lok Adalat scheduled for next month.", link: "#" },
  { date: "28 Sep 2026", title: "Revised roster and sitting arrangements for Judicial Officers.", link: "#" }
];

const commonFaqs = [
  { question: "How can I check my case status online?", answer: "You can check your case status online through the official eCourts Services portal or mobile app by entering your CNR number, case number, or party name." },
  { question: "What are the timings for filing a new case?", answer: "The filing counters are generally open from 10:00 AM to 3:30 PM on all working days. However, e-filing can be done 24x7." },
  { question: "Is legal aid available at the court complex?", answer: "Yes, free legal aid services are available for eligible persons (including women, children, SC/ST, and low-income individuals) at the District Legal Services Authority (DLSA) office within the court complex." }
];

const baseData = {
  practiceAreas: commonPracticeAreas,
  resources: commonResources,
  judges: commonJudges,
  services: commonServices,
  timings: commonTimings,
  notices: commonNotices,
  faqs: commonFaqs,
};

export const courtsData: Record<string, any> = {
  "tis-hazari": {
    ...baseData,
    breadcrumbs: [{ label: "Home", href: "/" }, { label: "Courts", href: "/courts" }, { label: "Delhi Courts", href: "/courts/delhi" }, { label: "Tis Hazari Court" }],
    hero: { title: "TIS HAZARI COURT", description: "Dedicated legal representation before the Tis Hazari Court Complex.", backgroundImage: "/home/featured_court.jpg" },
    stats: [
      { icon: Landmark, value: "Principal", label: "District Court" },
      { icon: MapPin, value: "Central & West", label: "Delhi Jurisdiction" },
      { icon: Scale, value: "Civil & Criminal", label: "Trial Courts" },
      { icon: Users, value: "Family Courts", label: "Central District" }
    ],
    about: {
      title: "ABOUT TIS HAZARI COURT", image: "/home/featured_court.jpg",
      paragraphs: ["Tis Hazari Courts Complex is the principal District Court building in Delhi. Established in 1958, it is one of the largest court complexes in Asia.", "The court handles a massive volume of cases across various domains, including civil disputes, criminal trials, family matters, and specialized commercial litigations."]
    },
    benchesSection: { title: "KEY DIVISIONS", benches: [{ icon: Scale, title: "District & Sessions Courts", description: "Handles severe criminal trials and major civil suits arising from the Central and West districts of Delhi." }, { icon: Users, title: "Family Courts", description: "Specialized courts dealing with matrimonial disputes, divorce, child custody." }] },
    consultation: { title: "BOOK FREE CONSULTATION", subtitle: "", description: "Get expert legal advice for your matter before the Tis Hazari Court." }
  },

  "karkardooma": {
    ...baseData,
    breadcrumbs: [{ label: "Home", href: "/" }, { label: "Courts", href: "/courts" }, { label: "Delhi Courts", href: "/courts/delhi" }, { label: "Karkardooma Court" }],
    hero: { title: "KARKARDOOMA COURT", description: "Dedicated legal representation before the Karkardooma Court Complex.", backgroundImage: "/home/featured_court.jpg" },
    stats: [
      { icon: Landmark, value: "District", label: "Court Complex" },
      { icon: MapPin, value: "East & NE", label: "Delhi Jurisdiction" },
      { icon: Scale, value: "Civil & Criminal", label: "Trial Courts" },
      { icon: Users, value: "Family Courts", label: "East District" }
    ],
    about: {
      title: "ABOUT KARKARDOOMA COURT", image: "/home/featured_court.jpg",
      paragraphs: ["The Karkardooma Courts Complex, inaugurated in 1993, is an important judicial complex in East Delhi.", "It houses District and Sessions Courts, Family Courts, and various specialized tribunals for East, North-East, and Shahdara districts."]
    },
    benchesSection: { title: "KEY DIVISIONS", benches: [{ icon: Scale, title: "District Courts (East, NE, Shahdara)", description: "Handling local civil and criminal jurisdictions." }, { icon: Users, title: "Family Courts", description: "Dedicated courts for matrimonial and family disputes." }] },
    consultation: { title: "BOOK FREE CONSULTATION", subtitle: "", description: "Get expert legal advice for your matter before the Karkardooma Court." }
  },
  
  "patiala-house": {
    ...baseData,
    breadcrumbs: [{ label: "Home", href: "/" }, { label: "Courts", href: "/courts" }, { label: "Delhi Courts", href: "/courts/delhi" }, { label: "Patiala House Court" }],
    hero: { title: "PATIALA HOUSE COURT", description: "Dedicated legal representation before the Patiala House Court Complex.", backgroundImage: "/home/featured_court.jpg" },
    stats: [
      { icon: Landmark, value: "District", label: "Court Complex" },
      { icon: MapPin, value: "New Delhi", label: "Jurisdiction" },
      { icon: Scale, value: "Special", label: "CBI Courts" },
      { icon: Users, value: "Civil & Criminal", label: "Matters" }
    ],
    about: {
      title: "ABOUT PATIALA HOUSE COURT", image: "/home/featured_court.jpg",
      paragraphs: ["Located near India Gate, Patiala House Courts complex is housed in the erstwhile palace of the Maharaja of Patiala.", "It holds jurisdiction over the New Delhi district and hosts designated CBI courts and specialized tribunals."]
    },
    benchesSection: { title: "KEY DIVISIONS", benches: [{ icon: Shield, title: "Special CBI Courts", description: "Handling high-profile corruption and CBI investigation matters." }, { icon: Scale, title: "District & Sessions Courts", description: "General civil and criminal matters for New Delhi district." }] },
    consultation: { title: "BOOK FREE CONSULTATION", subtitle: "", description: "Get expert legal advice for your matter before the Patiala House Court." }
  },

  "rohini": {
    ...baseData,
    breadcrumbs: [{ label: "Home", href: "/" }, { label: "Courts", href: "/courts" }, { label: "Delhi Courts", href: "/courts/delhi" }, { label: "Rohini Court" }],
    hero: { title: "ROHINI COURT", description: "Dedicated legal representation before the Rohini Court Complex.", backgroundImage: "/home/featured_court.jpg" },
    stats: [
      { icon: Landmark, value: "District", label: "Court Complex" },
      { icon: MapPin, value: "North & NW", label: "Delhi Jurisdiction" },
      { icon: Scale, value: "Civil & Criminal", label: "Trial Courts" },
      { icon: Users, value: "Family Courts", label: "North-West District" }
    ],
    about: {
      title: "ABOUT ROHINI COURT", image: "/home/featured_court.jpg",
      paragraphs: ["The Rohini Courts Complex is a major judicial center serving the North and North-West districts of Delhi.", "It is equipped with modern facilities and handles a vast number of cases across all legal domains."]
    },
    benchesSection: { title: "KEY DIVISIONS", benches: [{ icon: Scale, title: "District & Sessions Courts", description: "Criminal trials and civil suits for North and NW districts." }, { icon: Users, title: "Family Courts", description: "Dedicated courts for matrimonial and family disputes." }] },
    consultation: { title: "BOOK FREE CONSULTATION", subtitle: "", description: "Get expert legal advice for your matter before the Rohini Court." }
  },

  "dwarka": {
    ...baseData,
    breadcrumbs: [{ label: "Home", href: "/" }, { label: "Courts", href: "/courts" }, { label: "Delhi Courts", href: "/courts/delhi" }, { label: "Dwarka Court" }],
    hero: { title: "DWARKA COURT", description: "Dedicated legal representation before the Dwarka Court Complex.", backgroundImage: "/home/featured_court.jpg" },
    stats: [
      { icon: Landmark, value: "District", label: "Court Complex" },
      { icon: MapPin, value: "South-West", label: "Delhi Jurisdiction" },
      { icon: Scale, value: "Civil & Criminal", label: "Trial Courts" },
      { icon: Users, value: "Family Courts", label: "SW District" }
    ],
    about: {
      title: "ABOUT DWARKA COURT", image: "/home/featured_court.jpg",
      paragraphs: ["The Dwarka District Courts Complex serves the South-West district of Delhi. It is known for its modern architecture and infrastructure.", "The court handles cases related to civil, criminal, and family law for the densely populated South-West region."]
    },
    benchesSection: { title: "KEY DIVISIONS", benches: [{ icon: Scale, title: "District & Sessions Courts", description: "Criminal trials and civil suits for South-West district." }, { icon: Users, title: "Family Courts", description: "Dedicated courts for matrimonial and family disputes." }] },
    consultation: { title: "BOOK FREE CONSULTATION", subtitle: "", description: "Get expert legal advice for your matter before the Dwarka Court." }
  },

  "saket": {
    ...baseData,
    breadcrumbs: [{ label: "Home", href: "/" }, { label: "Courts", href: "/courts" }, { label: "Delhi Courts", href: "/courts/delhi" }, { label: "Saket Court" }],
    hero: { title: "SAKET COURT", description: "Dedicated legal representation before the Saket Court Complex.", backgroundImage: "/home/featured_court.jpg" },
    stats: [
      { icon: Landmark, value: "District", label: "Court Complex" },
      { icon: MapPin, value: "South & SE", label: "Delhi Jurisdiction" },
      { icon: Scale, value: "Civil & Criminal", label: "Trial Courts" },
      { icon: Users, value: "Family Courts", label: "South District" }
    ],
    about: {
      title: "ABOUT SAKET COURT", image: "/home/featured_court.jpg",
      paragraphs: ["The Saket Courts Complex is the primary judicial center for the South and South-East districts of Delhi.", "It is a highly active court complex handling a wide array of civil litigation, criminal trials, and family disputes."]
    },
    benchesSection: { title: "KEY DIVISIONS", benches: [{ icon: Scale, title: "District & Sessions Courts", description: "Criminal trials and civil suits for South and SE districts." }, { icon: Users, title: "Family Courts", description: "Dedicated courts for matrimonial and family disputes." }] },
    consultation: { title: "BOOK FREE CONSULTATION", subtitle: "", description: "Get expert legal advice for your matter before the Saket Court." }
  },

  "rouse-avenue": {
    ...baseData,
    breadcrumbs: [{ label: "Home", href: "/" }, { label: "Courts", href: "/courts" }, { label: "Delhi Courts", href: "/courts/delhi" }, { label: "Rouse Avenue Court" }],
    hero: { title: "ROUSE AVENUE COURT", description: "Dedicated legal representation before the Rouse Avenue Court Complex.", backgroundImage: "/home/featured_court.jpg" },
    stats: [
      { icon: Landmark, value: "Special", label: "Court Complex" },
      { icon: Shield, value: "CBI & ED", label: "Jurisdiction" },
      { icon: Scale, value: "Labor & Industrial", label: "Tribunals" },
      { icon: Building2, value: "Specialized", label: "Matters" }
    ],
    about: {
      title: "ABOUT ROUSE AVENUE COURT", image: "/home/featured_court.jpg",
      paragraphs: ["The Rouse Avenue Court Complex is a specialized judicial center in Central Delhi, established specifically to handle special cases.", "It primarily houses Special Courts dealing with CBI and ED cases (Prevention of Corruption Act and PMLA), as well as Labor Courts and Industrial Tribunals."]
    },
    benchesSection: { title: "KEY DIVISIONS", benches: [{ icon: Shield, title: "Special CBI/ED Courts", description: "Handling high-profile corruption and money laundering cases." }, { icon: Scale, title: "Labor Courts & Tribunals", description: "Handling industrial disputes and labor matters." }] },
    consultation: { title: "BOOK FREE CONSULTATION", subtitle: "", description: "Get expert legal advice for your matter before the Rouse Avenue Court." }
  },

  "supreme-court": {
    ...baseData,
    breadcrumbs: [{ label: "Home", href: "/" }, { label: "Courts", href: "/courts" }, { label: "Supreme Court of India" }],
    hero: { title: "SUPREME COURT OF INDIA", description: "Strategic and result-oriented legal representation in the Supreme Court of India.", backgroundImage: "/home/featured_court.jpg" },
    stats: [
      { icon: Building2, value: "Apex", label: "Court of India" },
      { icon: MapPin, value: "New Delhi", label: "Location" },
      { icon: Scale, value: "Appellate & Original", label: "Jurisdiction" },
      { icon: Shield, value: "Constitutional", label: "Matters" }
    ],
    about: {
      title: "ABOUT THE SUPREME COURT", image: "/home/featured_court.jpg",
      paragraphs: ["The Supreme Court of India is the supreme judicial body of the government of India and the highest court of India under the constitution.", "As an Advocate-on-Record (AoR), Mr. Tushar Garg is exclusively entitled to file cases in the Supreme Court, offering unparalleled expertise."]
    },
    benchesSection: { title: "KEY JURISDICTIONS", benches: [{ icon: Scale, title: "Appellate Jurisdiction", description: "Hearing appeals against judgments of High Courts." }, { icon: Shield, title: "Original Jurisdiction", description: "Disputes between Governments or States." }] },
    judges: [
      { title: "Hon'ble Chief Justice of India", subtitle: "Head of the Supreme Court" },
      { title: "Hon'ble Supreme Court Judges", subtitle: "Maximum 34 Judges" }
    ],
    practiceAreas: [
      { icon: Gavel, title: "Special Leave Petitions", description: "Filing and arguing SLPs under Article 136." },
      { icon: Scale, title: "Writ Petitions", description: "Enforcement of Fundamental Rights under Article 32." },
      { icon: Users, title: "Public Interest Litigation", description: "Representing matters of broad public concern." },
      { icon: Briefcase, title: "Review Petitions", description: "Seeking review of judgments or orders." }
    ],
    consultation: { title: "BOOK FREE CONSULTATION", subtitle: "", description: "Get expert legal advice for your matter before the Supreme Court." }
  }
};
