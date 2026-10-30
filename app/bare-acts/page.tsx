"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { 
  Book, 
  Download, 
  Search, 
  FileText, 
  Scale, 
  Building2, 
  ExternalLink, 
  Layers, 
  CheckCircle2, 
  Flame,
  ArrowRight,
  ShieldCheck,
  Calendar,
  RotateCcw,
  Sparkles
} from "lucide-react";

interface BareAct {
  id: string;
  title: string;
  hindiTitle?: string;
  actNumber: string;
  year: number;
  category: "Constitutional" | "Criminal" | "Civil & Procedural" | "Corporate & Commercial" | "Special Acts";
  ministry: string;
  sectionsCount: string;
  description: string;
  pdfUrl: string;
  pdfSize: string;
  lawLink?: string;
  isNewLaw?: boolean;
}

const BARE_ACTS_DATA: BareAct[] = [
  // New Criminal Laws (2023)
  {
    id: "bns-2023",
    title: "Bharatiya Nyaya Sanhita, 2023 (BNS)",
    hindiTitle: "भारतीय न्याय संहिता, २०२३",
    actNumber: "Act No. 45 of 2023",
    year: 2023,
    category: "Criminal",
    ministry: "Ministry of Home Affairs & Ministry of Law and Justice",
    sectionsCount: "358 Sections",
    description: "Replaced the Indian Penal Code, 1860 (IPC). Defines substantive criminal offenses, punishments, community service, terrorism, and organized crime under contemporary Indian criminal jurisprudence.",
    pdfUrl: "https://www.mha.gov.in/sites/default/files/250883_english_01042024.pdf",
    pdfSize: "2.4 MB",
    lawLink: "/laws/criminal-law",
    isNewLaw: true,
  },
  {
    id: "bnss-2023",
    title: "Bharatiya Nagarik Suraksha Sanhita, 2023 (BNSS)",
    hindiTitle: "भारतीय नागरिक सुरक्षा संहिता, २०२३",
    actNumber: "Act No. 46 of 2023",
    year: 2023,
    category: "Criminal",
    ministry: "Ministry of Home Affairs & Ministry of Law and Justice",
    sectionsCount: "531 Sections",
    description: "Replaced the Code of Criminal Procedure, 1973 (CrPC). Governs criminal investigations, zero FIR, mandatory audio-video recording, preliminary inquiries, and bail provisions.",
    pdfUrl: "https://www.mha.gov.in/sites/default/files/250882_english_01042024.pdf",
    pdfSize: "3.1 MB",
    lawLink: "/laws/criminal-law",
    isNewLaw: true,
  },
  {
    id: "bsa-2023",
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA)",
    hindiTitle: "भारतीय साक्ष्य अधिनियम, २०२३",
    actNumber: "Act No. 47 of 2023",
    year: 2023,
    category: "Criminal",
    ministry: "Ministry of Home Affairs & Ministry of Law and Justice",
    sectionsCount: "170 Sections",
    description: "Replaced the Indian Evidence Act, 1872. Governs admissibility of electronic/digital records as primary evidence, electronic summons, certificates, and witness examinations.",
    pdfUrl: "https://www.mha.gov.in/sites/default/files/250884_english_01042024.pdf",
    pdfSize: "1.2 MB",
    lawLink: "/laws/criminal-law",
    isNewLaw: true,
  },

  // Constitutional Law
  {
    id: "constitution-of-india",
    title: "Constitution of India (Full Text & Amendments)",
    hindiTitle: "भारत का संविधान",
    actNumber: "Adopted 26 Nov 1949",
    year: 1950,
    category: "Constitutional",
    ministry: "Ministry of Law and Justice (Legislative Department)",
    sectionsCount: "395 Articles • 12 Schedules",
    description: "The supreme law of India establishing the constitutional framework, Fundamental Rights (Part III), Directive Principles, powers of Supreme Court (Art. 32, 136) and High Courts (Art. 226).",
    pdfUrl: "https://cdnbbsr.s3waas.gov.in/s380537a945c7fafbce8bd823a331ac6e8/uploads/2024/07/20240716890312078.pdf",
    pdfSize: "4.8 MB",
    lawLink: "/laws/constitutional-law",
  },

  // Procedural & Civil Codes
  {
    id: "cpc-1908",
    title: "Code of Civil Procedure, 1908 (CPC)",
    actNumber: "Act No. 5 of 1908",
    year: 1908,
    category: "Civil & Procedural",
    ministry: "Ministry of Law and Justice",
    sectionsCount: "158 Sections • 51 Orders",
    description: "Exhaustive procedural code governing civil court jurisdiction, institution of suits, pleadings, summons, temporary injunctions (Order 39), appeals, review, and decree executions.",
    pdfUrl: "https://www.indiacode.nic.in/bitstream/123456789/2191/1/A1908-05.pdf",
    pdfSize: "1.9 MB",
    lawLink: "/laws/civil-law",
  },
  {
    id: "contract-act-1872",
    title: "Indian Contract Act, 1872",
    actNumber: "Act No. 9 of 1872",
    year: 1872,
    category: "Civil & Procedural",
    ministry: "Ministry of Law and Justice",
    sectionsCount: "238 Sections",
    description: "Substantive principles of contract formation, offer and acceptance, valid consideration, void agreements, breach of contract, indemnity, guarantee, bailment, and agency.",
    pdfUrl: "https://www.indiacode.nic.in/bitstream/123456789/2187/1/A1872-09.pdf",
    pdfSize: "1.1 MB",
    lawLink: "/laws/civil-law",
  },
  {
    id: "specific-relief-act-1963",
    title: "Specific Relief Act, 1963",
    actNumber: "Act No. 47 of 1963",
    year: 1963,
    category: "Civil & Procedural",
    ministry: "Ministry of Law and Justice",
    sectionsCount: "44 Sections",
    description: "Statutory provisions for recovery of property possession, specific performance of contracts (as amended in 2018), rectification, recession, and permanent/perpetual injunctions.",
    pdfUrl: "https://www.indiacode.nic.in/bitstream/123456789/1583/1/A1963-47.pdf",
    pdfSize: "0.8 MB",
    lawLink: "/laws/civil-law",
  },
  {
    id: "transfer-of-property-1882",
    title: "Transfer of Property Act, 1882 (TPA)",
    actNumber: "Act No. 4 of 1882",
    year: 1882,
    category: "Civil & Procedural",
    ministry: "Ministry of Law and Justice",
    sectionsCount: "137 Sections",
    description: "Governs legal transfer of immovable property by act of parties including sale, mortgage, lease, exchange, and gift.",
    pdfUrl: "https://www.indiacode.nic.in/bitstream/123456789/2338/1/A1882-04.pdf",
    pdfSize: "1.4 MB",
    lawLink: "/laws/civil-law",
  },
  {
    id: "limitation-act-1963",
    title: "Limitation Act, 1963",
    actNumber: "Act No. 36 of 1963",
    year: 1963,
    category: "Civil & Procedural",
    ministry: "Ministry of Law and Justice",
    sectionsCount: "32 Sections • Schedule of Limitation",
    description: "Prescribes time limits for filing suits, appeals, and applications, condonation of delay under Section 5, and computation of legal periods.",
    pdfUrl: "https://www.indiacode.nic.in/bitstream/123456789/1566/1/A1963-36.pdf",
    pdfSize: "0.6 MB",
    lawLink: "/laws/civil-law",
  },

  // Corporate, IBC & Commercial
  {
    id: "ibc-2016",
    title: "Insolvency and Bankruptcy Code, 2016 (IBC)",
    actNumber: "Act No. 31 of 2016",
    year: 2016,
    category: "Corporate & Commercial",
    ministry: "Ministry of Corporate Affairs / IBBI",
    sectionsCount: "255 Sections • 12 Schedules",
    description: "Consolidated corporate insolvency framework. Governs Section 7, 9, and 10 CIRP applications before NCLT, moratorium under Sec 14, resolution plans, liquidation, and NCLAT appellate remedies.",
    pdfUrl: "https://www.ibbi.gov.in/uploads/legalframwork/2023-08-18-181822-105p2-a0b22a01217e945c7fbbf7fe3f5ef11e.pdf",
    pdfSize: "2.1 MB",
    lawLink: "/laws/corporate-law",
  },
  {
    id: "companies-act-2013",
    title: "Companies Act, 2013",
    actNumber: "Act No. 18 of 2013",
    year: 2013,
    category: "Corporate & Commercial",
    ministry: "Ministry of Corporate Affairs",
    sectionsCount: "470 Sections • 7 Schedules",
    description: "Comprehensive corporate legislation regulating incorporation, corporate governance, directors' duties, merger & amalgamations, and prevention of oppression & mismanagement (Sec 241-242).",
    pdfUrl: "https://www.mca.gov.in/Ministry/pdf/CompaniesAct2013.pdf",
    pdfSize: "3.5 MB",
    lawLink: "/laws/corporate-law",
  },
  {
    id: "arbitration-act-1996",
    title: "Arbitration and Conciliation Act, 1996 (Amended 2021)",
    actNumber: "Act No. 26 of 1996",
    year: 1996,
    category: "Corporate & Commercial",
    ministry: "Ministry of Law and Justice",
    sectionsCount: "86 Sections • 8 Schedules",
    description: "Framework for domestic and international commercial arbitrations. Key provisions include Sec 9 (interim relief), Sec 11 (appointment of arbitrators), and Sec 34 (setting aside arbitral awards).",
    pdfUrl: "https://www.indiacode.nic.in/bitstream/123456789/1978/1/A1996-26.pdf",
    pdfSize: "1.3 MB",
    lawLink: "/laws/commercial-adr",
  },
  {
    id: "ni-act-1881",
    title: "Negotiable Instruments Act, 1881 (NI Act)",
    actNumber: "Act No. 26 of 1881",
    year: 1881,
    category: "Corporate & Commercial",
    ministry: "Ministry of Finance & Law",
    sectionsCount: "148 Sections",
    description: "Statutory framework for promissory notes, bills of exchange, and Section 138 criminal complaints for dishonour/cheque bounce, statutory demand notices, and interim compensation (Sec 143A).",
    pdfUrl: "https://www.indiacode.nic.in/bitstream/123456789/2237/1/A1881-26.pdf",
    pdfSize: "0.9 MB",
    lawLink: "/laws/commercial-adr",
  },
  {
    id: "consumer-protection-act-2019",
    title: "Consumer Protection Act, 2019",
    actNumber: "Act No. 35 of 2019",
    year: 2019,
    category: "Corporate & Commercial",
    ministry: "Ministry of Consumer Affairs, Food & Public Distribution",
    sectionsCount: "107 Sections",
    description: "Replaced the 1986 Act. Introduced CCPA regulator, e-commerce liability, product liability actions, mediation forums, and enhanced pecuniary jurisdiction across District, State, and NCDRC benches.",
    pdfUrl: "https://consumeraffairs.nic.in/sites/default/files/CP%20Act%202019.pdf",
    pdfSize: "1.5 MB",
    lawLink: "/laws/consumer-law",
  },

  // Special Statutes & Environmental Law
  {
    id: "ngt-act-2010",
    title: "National Green Tribunal Act, 2010 (NGT Act)",
    actNumber: "Act No. 19 of 2010",
    year: 2010,
    category: "Special Acts",
    ministry: "Ministry of Environment, Forest and Climate Change",
    sectionsCount: "38 Sections",
    description: "Establishes National Green Tribunal (NGT) for speedy disposal of civil cases relating to environmental protection, conservation of forests, and enforcement of legal environmental rights.",
    pdfUrl: "https://greentribunal.gov.in/sites/default/files/act_rules/NGT-act.pdf",
    pdfSize: "0.8 MB",
    lawLink: "/laws/environment-law",
  },
  {
    id: "it-act-2000",
    title: "Information Technology Act, 2000 (IT Act)",
    actNumber: "Act No. 21 of 2000",
    year: 2000,
    category: "Special Acts",
    ministry: "Ministry of Electronics and Information Technology (MeitY)",
    sectionsCount: "94 Sections",
    description: "Primary law in India dealing with cybercrime, electronic commerce, digital signatures, intermediary liability guidelines under Section 79, and data privacy safeguards.",
    pdfUrl: "https://www.indiacode.nic.in/bitstream/123456789/13116/1/it_act_2000_updated.pdf",
    pdfSize: "1.7 MB",
  },
  {
    id: "posh-act-2013",
    title: "Sexual Harassment of Women at Workplace (POSH) Act, 2013",
    actNumber: "Act No. 14 of 2013",
    year: 2013,
    category: "Special Acts",
    ministry: "Ministry of Women and Child Development",
    sectionsCount: "30 Sections",
    description: "Mandates Internal Complaints Committees (ICC) across public and private organizations, inquiry proceedings, conciliation, and workplace protection for female employees.",
    pdfUrl: "https://www.indiacode.nic.in/bitstream/123456789/2104/1/A2013-14.pdf",
    pdfSize: "0.5 MB",
  },
  {
    id: "dv-act-2005",
    title: "Protection of Women from Domestic Violence Act, 2005",
    actNumber: "Act No. 43 of 2005",
    year: 2005,
    category: "Special Acts",
    ministry: "Ministry of Women and Child Development",
    sectionsCount: "37 Sections",
    description: "Protective civil legislation providing immediate relief including protection orders (Sec 18), residence orders (Sec 19), monetary relief (Sec 20), and custody orders.",
    pdfUrl: "https://www.indiacode.nic.in/bitstream/123456789/2021/1/A2005-43.pdf",
    pdfSize: "0.6 MB",
  },
  {
    id: "advocates-act-1961",
    title: "Advocates Act, 1961",
    actNumber: "Act No. 25 of 1961",
    year: 1961,
    category: "Special Acts",
    ministry: "Ministry of Law and Justice / Bar Council of India",
    sectionsCount: "60 Sections",
    description: "Governs legal practitioners in India, establishment of State Bar Councils & Bar Council of India (BCI), right to practice, qualifications, and disciplinary committee mechanisms.",
    pdfUrl: "https://www.indiacode.nic.in/bitstream/123456789/1631/1/A1961-25.pdf",
    pdfSize: "0.7 MB",
  },
  {
    id: "supreme-court-rules-2013",
    title: "Supreme Court Rules, 2013 (AOR Practice Rules)",
    actNumber: "G.S.R. 368(E)",
    year: 2014,
    category: "Special Acts",
    ministry: "Supreme Court of India",
    sectionsCount: "Order I to XLVIII",
    description: "Procedural framework governing practice before the Supreme Court of India, Advocate-on-Record (AOR) examination guidelines, filing of SLPs, Writs, caveats, and chamber appeals.",
    pdfUrl: "https://main.sci.gov.in/pdf/SupremeCourtRules2013_English.pdf",
    pdfSize: "3.2 MB",
    lawLink: "/aor",
  },
  {
    id: "rti-act-2005",
    title: "Right to Information Act, 2005 (RTI)",
    actNumber: "Act No. 22 of 2005",
    year: 2005,
    category: "Special Acts",
    ministry: "Department of Personnel and Training (DoPT)",
    sectionsCount: "31 Sections",
    description: "Guarantees Indian citizens the legal right to secure information under control of public authorities, promoting transparency and accountability.",
    pdfUrl: "https://rti.gov.in/web-content/RTI_Act_2005.pdf",
    pdfSize: "0.7 MB",
  },
  {
    id: "motor-vehicles-act-1988",
    title: "Motor Vehicles Act, 1988 (Amended 2019)",
    actNumber: "Act No. 59 of 1988",
    year: 1988,
    category: "Special Acts",
    ministry: "Ministry of Road Transport and Highways",
    sectionsCount: "217 Sections",
    description: "Statutory laws governing motor licensing, traffic regulation, compulsory third-party insurance, and Motor Accident Claims Tribunal (MACT) compensation calculations.",
    pdfUrl: "https://www.indiacode.nic.in/bitstream/123456789/1798/1/A1988-59.pdf",
    pdfSize: "1.6 MB",
  }
];

export default function BareActsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "New Criminal Laws (2023)",
    "Constitutional",
    "Criminal",
    "Civil & Procedural",
    "Corporate & Commercial",
    "Special Acts"
  ];

  const filteredActs = useMemo(() => {
    return BARE_ACTS_DATA.filter((act) => {
      // Category filter
      let matchesCat = true;
      if (selectedCategory === "New Criminal Laws (2023)") {
        matchesCat = !!act.isNewLaw;
      } else if (selectedCategory !== "All") {
        matchesCat = act.category === selectedCategory;
      }

      // Search query filter
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        act.title.toLowerCase().includes(q) ||
        act.hindiTitle?.toLowerCase().includes(q) ||
        act.actNumber.toLowerCase().includes(q) ||
        act.year.toString().includes(q) ||
        act.description.toLowerCase().includes(q) ||
        act.category.toLowerCase().includes(q) ||
        act.sectionsCount.toLowerCase().includes(q);

      return matchesCat && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* 1. Hero Banner */}
      <section className="relative bg-[#071126] text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-[#c9a84c]/20">
        {/* Subtle Law Pattern Background */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-20 pointer-events-none"
          style={{ backgroundImage: "url('/law/law_banner.png')" }}
        />
        {/* Radial ambient glow & gradient overlay */}
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#071126] via-[#071126]/90 to-[#0a1738]/85 pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#c9a84c]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 left-10 w-80 h-80 bg-[#1e3a8a]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1500px] mx-auto relative z-10">
          {/* Breadcrumb */}
          <div className="flex flex-wrap items-center gap-2 text-[11px] sm:text-xs font-medium text-gray-300 mb-6">
            <Link href="/" className="hover:text-[#c9a84c] transition-colors">Home</Link>
            <span className="text-gray-500">›</span>
            <Link href="/resources" className="hover:text-[#c9a84c] transition-colors">Tools & Resources</Link>
            <span className="text-gray-500">›</span>
            <span className="text-[#c9a84c] font-semibold">Bare Acts & Statutory Codes</span>
          </div>

          {/* Main 2-Column Hero Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Column (7 cols): Heading, Intro, Badges */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 bg-[#c9a84c]/15 border border-[#c9a84c]/40 px-3.5 py-1.5 rounded-full text-[#c9a84c] text-[11px] font-bold tracking-wider uppercase shadow-sm">
                <Scale size={14} className="text-[#c9a84c]" />
                <span>OFFICIAL CENTRAL ACTS & STATUTORY REPOSITORY</span>
              </div>

              <div>
                <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-bold tracking-tight text-white leading-[1.18]">
                  Indian Bare Acts Library
                  <span className="block text-[#c9a84c] text-2xl sm:text-3xl md:text-4xl font-serif font-normal mt-1">
                    & Official Gazette PDF Downloads
                  </span>
                </h1>
                <div className="w-20 h-[3px] bg-[#c9a84c] rounded-full my-4" />
              </div>

              <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed font-light max-w-2xl">
                Comprehensive, verified gazette editions of India&apos;s primary legislation. Includes full official texts for the <strong className="text-white font-medium">2023 Criminal Law Reforms (BNS, BNSS, BSA)</strong>, Constitutional provisions, civil procedures, and corporate acts — formatted for advocates, judicial scholars, and litigants.
              </p>

              {/* Trust Value Badges */}
              <div className="flex flex-wrap gap-2.5 pt-2">
                <div className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg text-xs text-gray-200 backdrop-blur-xs">
                  <CheckCircle2 size={13} className="text-[#c9a84c]" />
                  <span>Authenticated Ministry Gazette Copies</span>
                </div>
                <div className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg text-xs text-gray-200 backdrop-blur-xs">
                  <CheckCircle2 size={13} className="text-[#c9a84c]" />
                  <span>2024 Reformed Criminal Codes</span>
                </div>
                <div className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg text-xs text-gray-200 backdrop-blur-xs">
                  <CheckCircle2 size={13} className="text-[#c9a84c]" />
                  <span>1-Click Direct Free PDF Access</span>
                </div>
              </div>
            </div>

            {/* Right Column (5 cols): Spotlight Showcase Card for New Criminal Laws 2023 */}
            <div className="lg:col-span-5">
              <div className="relative bg-gradient-to-b from-[#0e1d42]/95 via-[#0b1735]/95 to-[#071126]/95 border border-[#c9a84c]/35 rounded-2xl p-5 sm:p-6 shadow-2xl backdrop-blur-md overflow-hidden">
                {/* Decorative glow in card corner */}
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#c9a84c]/20 rounded-full blur-2xl pointer-events-none" />

                {/* Card Header */}
                <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-4 mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#c9a84c]/20 border border-[#c9a84c]/40 flex items-center justify-center text-[#c9a84c]">
                      <Flame size={18} />
                    </div>
                    <div>
                      <h2 className="text-xs font-bold uppercase tracking-widest text-[#c9a84c]">
                        Landmark Reform
                      </h2>
                      <p className="text-sm font-semibold text-white">
                        New Criminal Laws 2023
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-[#c9a84c]/20 text-[#c9a84c] border border-[#c9a84c]/30">
                    In Force: 1 July 2024
                  </span>
                </div>

                {/* 3 Quick Download Rows */}
                <div className="space-y-2.5">
                  {/* Item 1: BNS */}
                  <div className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#c9a84c]/40 rounded-xl p-3 transition-all flex items-center justify-between gap-3 group">
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="text-xs font-bold text-white group-hover:text-[#c9a84c] transition-colors truncate">
                          Bharatiya Nyaya Sanhita (BNS)
                        </span>
                        <span className="text-[10px] font-semibold text-[#c9a84c] bg-[#c9a84c]/10 px-1.5 py-0.2 rounded shrink-0">
                          358 Secs
                        </span>
                      </div>
                      <p className="text-[11px] text-gray-400 truncate">
                        Replaces Indian Penal Code, 1860 (IPC)
                      </p>
                    </div>
                    <a
                      href="https://www.mha.gov.in/sites/default/files/250883_english_01042024.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 inline-flex items-center gap-1.5 bg-[#c9a84c] hover:bg-[#b3933b] text-[#0d1b3e] text-[11px] font-bold px-2.5 py-1.5 rounded-lg transition-all shadow-sm"
                      title="Download BNS Gazette PDF"
                    >
                      <Download size={12} />
                      <span>PDF</span>
                    </a>
                  </div>

                  {/* Item 2: BNSS */}
                  <div className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#c9a84c]/40 rounded-xl p-3 transition-all flex items-center justify-between gap-3 group">
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="text-xs font-bold text-white group-hover:text-[#c9a84c] transition-colors truncate">
                          Bharatiya Nagarik Suraksha Sanhita (BNSS)
                        </span>
                        <span className="text-[10px] font-semibold text-[#c9a84c] bg-[#c9a84c]/10 px-1.5 py-0.2 rounded shrink-0">
                          531 Secs
                        </span>
                      </div>
                      <p className="text-[11px] text-gray-400 truncate">
                        Replaces Code of Criminal Procedure, 1973 (CrPC)
                      </p>
                    </div>
                    <a
                      href="https://www.mha.gov.in/sites/default/files/250882_english_01042024.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 inline-flex items-center gap-1.5 bg-[#c9a84c] hover:bg-[#b3933b] text-[#0d1b3e] text-[11px] font-bold px-2.5 py-1.5 rounded-lg transition-all shadow-sm"
                      title="Download BNSS Gazette PDF"
                    >
                      <Download size={12} />
                      <span>PDF</span>
                    </a>
                  </div>

                  {/* Item 3: BSA */}
                  <div className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#c9a84c]/40 rounded-xl p-3 transition-all flex items-center justify-between gap-3 group">
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="text-xs font-bold text-white group-hover:text-[#c9a84c] transition-colors truncate">
                          Bharatiya Sakshya Adhiniyam (BSA)
                        </span>
                        <span className="text-[10px] font-semibold text-[#c9a84c] bg-[#c9a84c]/10 px-1.5 py-0.2 rounded shrink-0">
                          170 Secs
                        </span>
                      </div>
                      <p className="text-[11px] text-gray-400 truncate">
                        Replaces Indian Evidence Act, 1872 (IEA)
                      </p>
                    </div>
                    <a
                      href="https://www.mha.gov.in/sites/default/files/250884_english_01042024.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 inline-flex items-center gap-1.5 bg-[#c9a84c] hover:bg-[#b3933b] text-[#0d1b3e] text-[11px] font-bold px-2.5 py-1.5 rounded-lg transition-all shadow-sm"
                      title="Download BSA Gazette PDF"
                    >
                      <Download size={12} />
                      <span>PDF</span>
                    </a>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="mt-3.5 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-gray-400">
                  <span className="flex items-center gap-1 text-[11px] text-gray-300">
                    <ShieldCheck size={13} className="text-[#c9a84c]" />
                    Official Gazette of India Publications
                  </span>
                  <span className="text-[#c9a84c] text-[10px] font-medium">Free Access</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats Grid Banner */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-white/10">
            <div className="bg-white/5 border border-white/10 rounded-xl p-3.5 sm:p-4 backdrop-blur-xs">
              <div className="flex items-center gap-2 mb-1">
                <Book size={15} className="text-[#c9a84c]" />
                <span className="text-[10px] sm:text-[11px] font-bold text-gray-400 uppercase tracking-wider">Total Acts</span>
              </div>
              <span className="text-xl sm:text-2xl font-bold text-white block">{BARE_ACTS_DATA.length}+ Acts</span>
              <span className="text-[11px] text-gray-400 font-light">Central & Statutory Codes</span>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-3.5 sm:p-4 backdrop-blur-xs">
              <div className="flex items-center gap-2 mb-1">
                <Flame size={15} className="text-[#c9a84c]" />
                <span className="text-[10px] sm:text-[11px] font-bold text-gray-400 uppercase tracking-wider">New Laws 2023</span>
              </div>
              <span className="text-xl sm:text-2xl font-bold text-[#c9a84c] block">BNS • BNSS • BSA</span>
              <span className="text-[11px] text-gray-400 font-light">Complete Reform Codes</span>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-3.5 sm:p-4 backdrop-blur-xs">
              <div className="flex items-center gap-2 mb-1">
                <FileText size={15} className="text-[#c9a84c]" />
                <span className="text-[10px] sm:text-[11px] font-bold text-gray-400 uppercase tracking-wider">Format</span>
              </div>
              <span className="text-xl sm:text-2xl font-bold text-white block">Official PDFs</span>
              <span className="text-[11px] text-gray-400 font-light">Gazette Authenticated</span>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-3.5 sm:p-4 backdrop-blur-xs">
              <div className="flex items-center gap-2 mb-1">
                <Download size={15} className="text-[#c9a84c]" />
                <span className="text-[10px] sm:text-[11px] font-bold text-gray-400 uppercase tracking-wider">Direct Access</span>
              </div>
              <span className="text-xl sm:text-2xl font-bold text-[#c9a84c] block">100% Free</span>
              <span className="text-[11px] text-gray-400 font-light">Instant One-Click Download</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Interactive Search & Filter Controls */}
      <section className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-5 sm:p-6 space-y-4">
          <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search Bare Acts by name, act number, section, or subject..."
                className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-[#0d1b3e] placeholder-gray-400 outline-hidden focus:border-[#0d1b3e] focus:bg-white transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-gray-700 bg-gray-200 hover:bg-gray-300 rounded-full w-5 h-5 flex items-center justify-center cursor-pointer"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Results Counter */}
            <div className="flex items-center justify-between md:justify-end gap-3 text-xs text-gray-500 font-semibold px-2">
              <span>Showing {filteredActs.length} of {BARE_ACTS_DATA.length} Acts</span>
              {(searchQuery || selectedCategory !== "All") && (
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("All");
                  }}
                  className="text-[#c9a84c] hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <RotateCcw size={12} />
                  <span>Reset Filters</span>
                </button>
              )}
            </div>
          </div>

          {/* Category Filter Chips */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 no-scrollbar">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                    isSelected
                      ? "bg-[#0d1b3e] text-white shadow-sm"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-[#0d1b3e]"
                  }`}
                >
                  {cat === "New Criminal Laws (2023)" && <Flame size={13} className="text-[#c9a84c]" />}
                  <span>{cat}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Bare Acts Directory Grid */}
      <main className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {filteredActs.length === 0 ? (
          <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center space-y-3 shadow-xs">
            <Book size={36} className="mx-auto text-gray-300" />
            <h3 className="text-lg font-bold text-[#0d1b3e]">No Bare Acts Found</h3>
            <p className="text-sm text-gray-500">
              No acts match your search "{searchQuery}". Try searching with a different keyword or reset filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="mt-2 bg-[#0d1b3e] text-white px-5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-[#1a2b5e] cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredActs.map((act) => (
              <div
                key={act.id}
                className={`bg-white border rounded-2xl p-6 flex flex-col justify-between shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative ${
                  act.isNewLaw
                    ? "border-[#c9a84c] ring-1 ring-[#c9a84c]/20"
                    : "border-gray-200 hover:border-[#c9a84c]/50"
                }`}
              >
                {/* Top Section */}
                <div>
                  {/* Category & Tag Row */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-[#0d1b3e]/5 text-[#0d1b3e] border border-gray-200">
                      {act.category}
                    </span>

                    {act.isNewLaw ? (
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold text-amber-800 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-md">
                        <Flame size={12} className="text-[#c9a84c]" />
                        <span>NEW LAW 2023</span>
                      </span>
                    ) : (
                      <span className="text-[11px] font-bold text-[#c9a84c]">
                        Year {act.year}
                      </span>
                    )}
                  </div>

                  {/* Act Title */}
                  <h3 className="font-serif text-[17px] font-bold text-[#0d1b3e] leading-snug mb-1">
                    {act.title}
                  </h3>

                  {act.hindiTitle && (
                    <p className="text-[12px] font-medium text-gray-500 mb-2">
                      {act.hindiTitle}
                    </p>
                  )}

                  {/* Act Number & Ministry Meta */}
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-gray-500 mb-3 pt-1 border-t border-gray-100">
                    <span className="font-semibold text-gray-700">{act.actNumber}</span>
                    <span>•</span>
                    <span className="text-[#c9a84c] font-bold">{act.sectionsCount}</span>
                  </div>

                  {/* Summary / Description */}
                  <p className="text-gray-600 text-[12.5px] leading-relaxed mb-4 line-clamp-3">
                    {act.description}
                  </p>
                </div>

                {/* Footer Action Buttons */}
                <div className="pt-4 border-t border-gray-100 space-y-2">
                  <div className="flex items-center justify-between text-[11px] text-gray-400 mb-2">
                    <span className="flex items-center gap-1 font-medium">
                      <FileText size={12} />
                      <span>Official Gazette PDF</span>
                    </span>
                    <span className="font-mono text-[10.5px]">{act.pdfSize}</span>
                  </div>

                  {/* Direct PDF Download Button */}
                  <a
                    href={act.pdfUrl}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#0d1b3e] hover:bg-[#c9a84c] text-white hover:text-[#0d1b3e] font-bold text-xs uppercase tracking-wider py-2.5 px-4 rounded-xl transition-all duration-300 shadow-xs group/btn cursor-pointer"
                  >
                    <Download size={15} className="group-hover/btn:-translate-y-0.5 transition-transform" />
                    <span>Download Official PDF</span>
                  </a>

                  {/* Optional View Online / Practice Area Link */}
                  {act.lawLink && (
                    <Link
                      href={act.lawLink}
                      className="w-full inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-[#0d1b3e] hover:text-[#c9a84c] py-1.5 transition-colors"
                    >
                      <span>Explore Practice Area & Key Sections</span>
                      <ArrowRight size={13} />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* 4. Bottom Information & Advisory Banner */}
      <section className="bg-white border-t border-gray-200 py-12 px-4 sm:px-6">
        <div className="max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-5 bg-gray-50 rounded-xl border border-gray-200 flex items-start gap-3.5">
            <div className="p-2.5 bg-[#0d1b3e] text-[#c9a84c] rounded-lg flex-shrink-0">
              <ShieldCheck size={20} />
            </div>
            <div>
              <h4 className="font-bold text-[#0d1b3e] text-sm mb-1">Authentic Gazette Copies</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                All Bare Act PDFs provided are authentic statutory copies sourced directly from IndiaCode, eGazette, and respective central ministries.
              </p>
            </div>
          </div>

          <div className="p-5 bg-gray-50 rounded-xl border border-gray-200 flex items-start gap-3.5">
            <div className="p-2.5 bg-[#0d1b3e] text-[#c9a84c] rounded-lg flex-shrink-0">
              <Flame size={20} />
            </div>
            <div>
              <h4 className="font-bold text-[#0d1b3e] text-sm mb-1">New Criminal Laws 2023</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Includes complete official texts of Bharatiya Nyaya Sanhita (BNS), BNSS, and BSA in full effect across India from 1 July 2024.
              </p>
            </div>
          </div>

          <div className="p-5 bg-gray-50 rounded-xl border border-gray-200 flex items-start gap-3.5">
            <div className="p-2.5 bg-[#0d1b3e] text-[#c9a84c] rounded-lg flex-shrink-0">
              <Scale size={20} />
            </div>
            <div>
              <h4 className="font-bold text-[#0d1b3e] text-sm mb-1">Appellate Advocacy</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                For constitutional interpretations, Special Leave Petitions, or statutory legal representation, contact Advocate Tushar Garg, AOR Supreme Court.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
