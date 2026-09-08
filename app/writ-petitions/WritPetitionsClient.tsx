"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Scale,
  ShieldCheck,
  FileText,
  Gavel,
  Landmark,
  CheckCircle2,
  HelpCircle,
  Phone,
  ArrowRight,
  ArrowLeft,
  ChevronDown,
  ChevronUp,
  Search,
  ExternalLink,
  BookOpen,
  Layers,
  Award,
  AlertCircle,
  Clock,
  Building2,
  Copy,
  Check
} from "lucide-react";
import TabScroller from "@/app/components/TabScroller";

interface WritDetail {
  id: string;
  name: string;
  latin: string;
  meaning: string;
  purpose: string;
  issuedAgainst: string;
  keyGrounds: string[];
  whoCanApply: string;
  landmarkCase: string;
}

const WRITS_DATA: WritDetail[] = [
  {
    id: "habeas-corpus",
    name: "Writ of Habeas Corpus",
    latin: "Habeas Corpus",
    meaning: "To Have the Body",
    purpose: "Immediate legal remedy against arbitrary arrest, unlawful detention, custodial illegalities, or missing detenu held by State police or private parties.",
    issuedAgainst: "State Authorities (Police, Prison, Executive) AND Private Individuals/Entities.",
    keyGrounds: [
      "Detention without compliance with Section 50/41A CrPC / BNSS statutory mandates.",
      "Failure to produce detenu before nearest Magistrate within 24 hours of arrest.",
      "Illegal preventive detention beyond statutory limits or without valid detention grounds.",
      "Custodial abuse, unlawful physical restraint, or missing person in official custody."
    ],
    whoCanApply: "The detenu themselves, family members, friends, or any public-spirited person (Locus Standi is relaxed).",
    landmarkCase: "K.S. Puttaswamy v. Union of India (2017) & Sunil Batra v. Delhi Administration (1980)"
  },
  {
    id: "mandamus",
    name: "Writ of Mandamus",
    latin: "Mandamus",
    meaning: "We Command",
    purpose: "Commanding a public official, statutory body, municipal authority, or subordinate court to perform a mandatory legal duty they refused or omitted to execute.",
    issuedAgainst: "Public Authorities, Officers, Statutory Bodies, Government Departments, Inferior Courts & Tribunals.",
    keyGrounds: [
      "Refusal or inaction of statutory authority to grant licenses, NOCs, or registrations despite full eligibility.",
      "Failure of government departments to disburse statutory pensions, dues, or land compensation.",
      "Omission of public officials to decide statutory representations within reasonable timeframe.",
      "Arbitrary delay or inaction in taking action mandated by statutory enactments."
    ],
    whoCanApply: "An aggrieved person who possesses a legal right and has demanded performance of a corresponding public duty.",
    landmarkCase: "Gujarat State Financial Corp. v. Lotus Hotels (1983) & SP Gupta v. Union of India (1981)"
  },
  {
    id: "certiorari",
    name: "Writ of Certiorari",
    latin: "Certiorari",
    meaning: "To Be Certified",
    purpose: "Quashing illegal orders, decrees, or adjudications passed by lower courts, tribunals, or quasi-judicial bodies in excess of jurisdiction or violating natural justice.",
    issuedAgainst: "Judicial and Quasi-Judicial Authorities, Inferior Courts, Statutory Tribunals (NCLT, CAT, DRT, NGT).",
    keyGrounds: [
      "Order passed without jurisdiction or in excess of statutory jurisdiction.",
      "Violation of Principles of Natural Justice (Audi Alteram Partem / Rule Against Bias).",
      "Error of law apparent on the face of record (manifest illegality in judicial reasoning).",
      "Adjudication based on zero evidence or complete perversity of factual finding."
    ],
    whoCanApply: "Party aggrieved by the impugned order or decision of the lower court/tribunal.",
    landmarkCase: "L. Chandra Kumar v. Union of India (1997) & Hari Vishnu Kamath v. Syed Ahmad (1955)"
  },
  {
    id: "prohibition",
    name: "Writ of Prohibition",
    latin: "Prohibition",
    meaning: "To Forbid",
    purpose: "Preventive writ issued to lower courts or tribunals to stop them from continuing ongoing proceedings that exceed their jurisdiction or violate legal limits.",
    issuedAgainst: "Inferior Judicial & Quasi-Judicial Courts, Tribunals, and Adjudicating Officers.",
    keyGrounds: [
      "Lower court or tribunal entertaining a matter outside its territorial or pecuniary jurisdiction.",
      "Ongoing proceedings violating fundamental statutory bars or constitutional provisions.",
      "Apparent judicial bias or procedural illegality during active trial/hearing."
    ],
    whoCanApply: "Party facing proceedings before an inferior tribunal lacking jurisdiction.",
    landmarkCase: "East India Commercial Co. v. Collector of Customs (1962)"
  },
  {
    id: "quo-warranto",
    name: "Writ of Quo Warranto",
    latin: "Quo Warranto",
    meaning: "By What Authority?",
    purpose: "Challenging the illegal appointment, occupancy, or usurpation of a public office by an ineligible person lacking statutory qualifications.",
    issuedAgainst: "Persons occupying substantive public offices created by Constitution or Statute.",
    keyGrounds: [
      "Appointment to public office made in violation of mandatory statutory recruitment rules.",
      "Person holding public office lacking prescribed educational, age, or professional qualifications.",
      "Usurpation of public post without valid election or executive order."
    ],
    whoCanApply: "Any citizen of India in public interest (No personal locus standi or injury required).",
    landmarkCase: "University of Mysore v. CD Govinda Rao (1965) & High Court of Gujarat v. Gujarat Kishan Sabha (2002)"
  }
];

const COMPARISON_TABLE = [
  {
    feature: "Primary Forum",
    art32: "Supreme Court of India (Apex Court)",
    art226: "State High Courts (25 High Courts across India)"
  },
  {
    feature: "Nature of Right",
    art32: "Guaranteed Fundamental Right itself under Part III (Basic Structure)",
    art226: "Constitutional & Statutory Discretionary Remedy"
  },
  {
    feature: "Enforcement Scope",
    art32: "Strictly for enforcement of Fundamental Rights (Part III Articles 12-35)",
    art226: "For Fundamental Rights AND 'For Any Other Purpose' (Legal & Statutory Rights)"
  },
  {
    feature: "Territorial Jurisdiction",
    art32: "Pan-India (Entire territory of India against any State authority)",
    art226: "Territorial jurisdiction of High Court or where Cause of Action arises"
  },
  {
    feature: "Discretion to Refuse",
    art32: "Supreme Court CANNOT refuse to entertain if Fundamental Right is violated",
    art226: "High Court MAY refuse if alternative efficacious statutory remedy exists"
  },
  {
    feature: "Suspension during Emergency",
    art32: "Suspended under Article 359 during National Emergency (Except Art 20 & 21)",
    art226: "CANNOT be suspended during National Emergency (Remains fully operational)"
  }
];

const PROCEDURAL_STEPS = [
  {
    step: "01",
    title: "Ground Analysis & Legal Demand Notice",
    desc: "In-depth review of violation of Part III rights or statutory breach. Issuing statutory representation/legal notice to public authority (mandatory for Mandamus)."
  },
  {
    step: "02",
    title: "Drafting Synopsis, Grounds & Verified Affidavit",
    desc: "Drafting List of Dates, Question of Law, precise Grounds, Prayer for Main & Interim Reliefs, accompanied by a verified supporting Affidavit and index documents."
  },
  {
    step: "03",
    title: "Registry E-Filing & Defect Verification",
    desc: "Electronic filing in Supreme Court of India or High Court Registry, curing registry objections, and securing Diary Number & Item Listing."
  },
  {
    step: "04",
    title: "Urgent Motion Hearing & Admission Stage",
    desc: "Oral advocacy before the Motion Bench seeking issuance of Notice to Respondents, Ex-Parte Stay, Interim Protection, or status quo orders."
  },
  {
    step: "05",
    title: "Counter Affidavit & Rejoinder Pleadings",
    desc: "Filing Counter Affidavit by State/Respondent; drafting & filing Rejoinder Affidavit to rebut factual allegations and establish legal merits."
  },
  {
    step: "06",
    title: "Final Hearing & Writ Issuance",
    desc: "Comprehensive final arguments before Constitutional Bench / Division Bench, culminating in final writ order, quashing of illegal order, or state direction."
  }
];

const LANDMARK_PRECEDENTS = [
  {
    title: "Maneka Gandhi v. Union of India",
    citation: "(1978) 1 SCC 248",
    court: "Supreme Court of India",
    ratio: "Expanded the horizon of Article 21. Held that procedure established by law for restricting personal liberty under Article 21 must be fair, just, and reasonable, not arbitrary or fanciful. Established inter-relationship between Articles 14, 19, and 21."
  },
  {
    title: "L. Chandra Kumar v. Union of India",
    citation: "(1997) 3 SCC 261",
    court: "Supreme Court of India (7-Judge Bench)",
    ratio: "Held that the power of Judicial Review under Article 32 (Supreme Court) and Article 226 (High Courts) forms part of the inviolable Basic Structure of the Indian Constitution. Decisions of administrative tribunals remain subject to High Court writ jurisdiction."
  },
  {
    title: "Bandhua Mukti Morcha v. Union of India",
    citation: "(1984) 3 SCC 161",
    court: "Supreme Court of India",
    ratio: "Recognized Epistolary Jurisdiction under Article 32. Supreme Court can treat simple letters, telegrams, or petitions as Writ Petitions in public interest litigation (PIL) to protect vulnerable bonded laborers and enforce fundamental rights."
  },
  {
    title: "State of W.B. v. Committee for Protection of Democratic Rights",
    citation: "(2010) 3 SCC 571",
    court: "Supreme Court of India (5-Judge Constitution Bench)",
    ratio: "Affirmed that High Courts under Article 226 and Supreme Court under Article 32 can direct CBI investigation into offences committed within a state without requiring consent of that State government, to safeguard fundamental rights under Article 21."
  },
  {
    title: "Rameshwar Prasad v. Union of India",
    citation: "(2006) 2 SCC 1",
    court: "Supreme Court of India (5-Judge Bench)",
    ratio: "Established that Presidential Proclamations under Article 356 dissolving State Assemblies are subject to judicial review under Writ Petitions. Arbitrary dissolution passed on subjective executive satisfaction is unconstitutional and liable to be quashed."
  }
];

const FAQS = [
  {
    q: "Can a Writ Petition be filed directly in the Supreme Court under Article 32?",
    a: "Yes. Article 32 grants a guaranteed right to move the Supreme Court directly for the enforcement of Fundamental Rights under Part III. However, the Supreme Court generally expects petitioners to state why they have not first approached the territorial High Court under Article 226, unless the matter involves national importance, inter-state disputes, or gravity."
  },
  {
    q: "What is the difference between a Writ Petition and a Special Leave Petition (SLP)?",
    a: "A Writ Petition (Art 32 & 226) is an original remedy invoked directly to enforce Fundamental/Legal Rights against State action. A Special Leave Petition (SLP) under Article 136 is an appellate remedy before the Supreme Court challenging final or interlocutory orders passed by High Courts or Tribunals across India."
  },
  {
    q: "Can a Writ Petition be filed against a private company or individual?",
    a: "Generally, Writs are issued against 'State' and statutory authorities under Article 12. However, a Writ of Habeas Corpus can be issued against private individuals detaining someone illegally. Moreover, Mandamus or Certiorari can be issued against private bodies if they perform public duties or statutory obligations."
  },
  {
    q: "Is there a fixed limitation period for filing a Writ Petition?",
    a: "Technically, the Limitation Act does not apply strictly to Constitutional Writ Petitions. However, courts enforce the 'Doctrine of Delay and Laches'. Petitions filed with inordinate, unexplained delay without valid justification may be dismissed at the threshold stage."
  },
  {
    q: "Can interim stay or ex-parte protection be granted in Writ Petitions?",
    a: "Yes. Under both Article 32 and Article 226, petitioners can file an application for interim relief (Stay of Impugned Order, Stay of Arrest, Status Quo, or Direction for Medical Production). High Courts and Supreme Court have broad powers to grant interim orders to preserve the subject matter of litigation."
  }
];

export default function WritPetitionsClientView() {
  const [activeTab, setActiveTab] = useState<"writs" | "comparison" | "procedure" | "precedents" | "faqs">("writs");
  const [activeWritId, setActiveWritId] = useState<string>("habeas-corpus");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [precedentSearch, setPrecedentSearch] = useState("");
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const selectedWrit = WRITS_DATA.find((w) => w.id === activeWritId) || WRITS_DATA[0];

  const filteredPrecedents = LANDMARK_PRECEDENTS.filter(
    (p) =>
      p.title.toLowerCase().includes(precedentSearch.toLowerCase()) ||
      p.citation.toLowerCase().includes(precedentSearch.toLowerCase()) ||
      p.ratio.toLowerCase().includes(precedentSearch.toLowerCase())
  );

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(null), 2000);
  };

  return (
    <div className="min-h-screen bg-[#fafafa]">
      
      {/* 1. HERO BANNER */}
      <section className="relative bg-gradient-to-b from-[#071126] via-[#0d1b3e] to-[#071126] text-white py-16 px-4 sm:px-6 overflow-hidden border-b border-[#c9a84c]/20">
        <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-[#c9a84c]_1px,transparent_1px] [background-size:24px_24px]" />

        <div className="max-w-[1350px] mx-auto relative z-10">
          
          {/* Breadcrumb Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <nav className="flex items-center gap-2 text-[12.5px] font-medium text-gray-400 flex-wrap">
              <Link href="/" className="hover:text-[#c9a84c] transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link href="/laws" className="hover:text-[#c9a84c] transition-colors">
                Laws & Practice Areas
              </Link>
              <span>/</span>
              <span className="text-[#c9a84c] font-semibold">Writ Petitions (Art 32 & 226)</span>
            </nav>

            <Link
              href="/laws"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-[#c9a84c] hover:text-[#071126] text-white px-4 py-2 rounded-xl text-xs font-bold transition-all border border-white/20 shadow-md backdrop-blur-md"
            >
              <ArrowLeft size={14} />
              <span>Back to Practice Areas</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Main Content */}
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 bg-[#c9a84c]/10 border border-[#c9a84c]/40 px-3.5 py-1 rounded-full text-[#c9a84c] text-[11px] font-bold tracking-wider uppercase shadow-sm">
                <Scale size={13} />
                <span>ARTICLES 32 & 226 • CONSTITUTION OF INDIA</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight uppercase">
                Constitutional Writ Petitions
              </h1>

              <p className="text-gray-300 text-base sm:text-lg max-w-3xl leading-relaxed font-light">
                Comprehensive legal advocacy before the <strong className="text-white font-medium">Supreme Court of India</strong> under Article 32 and <strong className="text-white font-medium">State High Courts</strong> under Article 226 for enforcement of Fundamental Rights, protection of personal liberty, and judicial review of administrative action.
              </p>

              {/* Statistics Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-white/10">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-[#c9a84c]/30 text-center">
                  <div className="text-[#c9a84c] font-bold text-lg font-serif">5 Writs</div>
                  <div className="text-gray-300 text-[11px] uppercase tracking-wider font-semibold">Prerogative Remedies</div>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-[#c9a84c]/30 text-center">
                  <div className="text-[#c9a84c] font-bold text-lg font-serif">Article 32</div>
                  <div className="text-gray-300 text-[11px] uppercase tracking-wider font-semibold">Apex Court Right</div>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-[#c9a84c]/30 text-center">
                  <div className="text-[#c9a84c] font-bold text-lg font-serif">Article 226</div>
                  <div className="text-gray-300 text-[11px] uppercase tracking-wider font-semibold">High Court Power</div>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-[#c9a84c]/30 text-center">
                  <div className="text-[#c9a84c] font-bold text-lg font-serif">Part III</div>
                  <div className="text-gray-300 text-[11px] uppercase tracking-wider font-semibold">Fundamental Rights</div>
                </div>
              </div>
            </div>

            {/* Right Consultation Card */}
            <div className="lg:col-span-4">
              <div className="bg-gradient-to-b from-[#0d1b3e] to-[#09142e] border border-[#c9a84c]/40 rounded-2xl p-6 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#c9a84c]/10 rounded-full blur-2xl pointer-events-none" />

                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#c9a84c]/20 border border-[#c9a84c] flex items-center justify-center text-[#c9a84c]">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-serif font-bold text-base uppercase">
                      Advocate Tushar Garg
                    </h3>
                    <p className="text-[#c9a84c] text-[11.5px] font-medium">
                      Advocate-on-Record (AOR), Supreme Court
                    </p>
                  </div>
                </div>

                <p className="text-gray-300 text-[12.5px] leading-relaxed mb-5 border-t border-b border-white/10 py-3">
                  Urgent Writ Petition drafting, filing & representation in <strong className="text-white">Supreme Court of India</strong> & <strong className="text-white">Delhi High Court</strong> for immediate legal remedies.
                </p>

                <div className="space-y-3">
                  <a
                    href="tel:+917206810681"
                    className="w-full flex items-center justify-center gap-2 bg-[#c9a84c] hover:bg-[#b5953d] text-[#071126] font-bold py-2.5 px-4 rounded-xl transition-colors text-[13px] uppercase tracking-wider shadow-lg"
                  >
                    <Phone size={15} />
                    <span>Call Chamber Office</span>
                  </a>

                  <Link
                    href="/contact"
                    className="w-full flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-medium py-2.5 px-4 rounded-xl border border-white/20 transition-colors text-[13px]"
                  >
                    <BookOpen size={15} />
                    <span>Legal Awareness</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STICKY INTERACTIVE NAVIGATION TABS */}
      <div className="max-w-[1350px] mx-auto px-4 sm:px-6 py-6 sticky top-20 z-20 bg-white/95 backdrop-blur-md border-b border-gray-200">
        <TabScroller>
          <button
            onClick={() => setActiveTab("writs")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-[12.5px] font-bold transition-all whitespace-nowrap cursor-pointer ${
              activeTab === "writs"
                ? "bg-[#0d1b3e] text-[#c9a84c] shadow-sm"
                : "text-gray-600 hover:bg-gray-100 hover:text-[#0d1b3e]"
            }`}
          >
            <Scale size={15} />
            <span>5 Prerogative Writs</span>
          </button>

          <button
            onClick={() => setActiveTab("comparison")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-[12.5px] font-bold transition-all whitespace-nowrap cursor-pointer ${
              activeTab === "comparison"
                ? "bg-[#0d1b3e] text-[#c9a84c] shadow-sm"
                : "text-gray-600 hover:bg-gray-100 hover:text-[#0d1b3e]"
            }`}
          >
            <Layers size={15} />
            <span>Article 32 vs Article 226</span>
          </button>

          <button
            onClick={() => setActiveTab("procedure")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-[12.5px] font-bold transition-all whitespace-nowrap cursor-pointer ${
              activeTab === "procedure"
                ? "bg-[#0d1b3e] text-[#c9a84c] shadow-sm"
                : "text-gray-600 hover:bg-gray-100 hover:text-[#0d1b3e]"
            }`}
          >
            <Clock size={15} />
            <span>Filing Procedure</span>
          </button>

          <button
            onClick={() => setActiveTab("precedents")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-[12.5px] font-bold transition-all whitespace-nowrap cursor-pointer ${
              activeTab === "precedents"
                ? "bg-[#0d1b3e] text-[#c9a84c] shadow-sm"
                : "text-gray-600 hover:bg-gray-100 hover:text-[#0d1b3e]"
            }`}
          >
            <Gavel size={15} />
            <span>Apex Precedents</span>
          </button>

          <button
            onClick={() => setActiveTab("faqs")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-[12.5px] font-bold transition-all whitespace-nowrap cursor-pointer ${
              activeTab === "faqs"
                ? "bg-[#0d1b3e] text-[#c9a84c] shadow-sm"
                : "text-gray-600 hover:bg-gray-100 hover:text-[#0d1b3e]"
            }`}
          >
            <HelpCircle size={15} />
            <span>FAQs & Answers</span>
          </button>
        </TabScroller>
      </div>

      {/* 3. MAIN SECTION CONTENT */}
      <main className="max-w-[1350px] mx-auto px-4 sm:px-6 py-10">
        
        {/* TAB 1: 5 PREROGATIVE WRITS */}
        {activeTab === "writs" && (
          <div className="space-y-10 animate-in fade-in duration-300">
            <div>
              <div className="flex items-center gap-2 text-[#c9a84c] text-[11px] font-bold uppercase tracking-widest mb-1">
                <Scale size={14} />
                <span>CONSTITUTIONAL REMEDIES MATRIX</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0d1b3e]">
                The Five Prerogative Writs Explained
              </h2>
              <p className="text-gray-600 text-sm mt-1 max-w-3xl">
                Select any writ below to examine its statutory scope, grounds of invocation, eligible applicants, and landmark Supreme Court rulings.
              </p>
            </div>

            {/* Quick Writ Selector Tabs */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {WRITS_DATA.map((w) => (
                <button
                  key={w.id}
                  onClick={() => setActiveWritId(w.id)}
                  className={`p-4 rounded-xl border text-left transition-all flex flex-col justify-between ${
                    activeWritId === w.id
                      ? "bg-[#0d1b3e] text-white border-[#c9a84c] shadow-lg translate-y-[-2px]"
                      : "bg-white text-[#0d1b3e] border-gray-200 hover:border-[#c9a84c] hover:bg-amber-50/30"
                  }`}
                >
                  <div>
                    <span className={`text-[10px] font-mono font-bold uppercase tracking-wider block mb-1 ${activeWritId === w.id ? "text-[#c9a84c]" : "text-gray-500"}`}>
                      {w.latin}
                    </span>
                    <h3 className="font-serif font-bold text-sm leading-snug">
                      {w.name}
                    </h3>
                  </div>
                  <span className={`text-[11px] mt-3 font-semibold ${activeWritId === w.id ? "text-gray-300" : "text-[#c9a84c]"}`}>
                    "{w.meaning}" →
                  </span>
                </button>
              ))}
            </div>

            {/* Selected Writ Full Specification Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-md relative overflow-hidden">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-gray-100 mb-6">
                <div>
                  <div className="inline-flex items-center gap-2 bg-[#0d1b3e] text-[#c9a84c] px-3 py-1 rounded-lg text-xs font-mono font-bold uppercase tracking-wider mb-2">
                    <Scale size={13} />
                    <span>{selectedWrit.latin} ("{selectedWrit.meaning}")</span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0d1b3e]">
                    {selectedWrit.name}
                  </h3>
                </div>

                <div className="bg-amber-50 border border-[#c9a84c]/40 rounded-xl p-3.5 max-w-sm">
                  <div className="text-[#0d1b3e] font-bold text-xs uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <Award size={14} className="text-[#c9a84c]" />
                    <span>Landmark Ruling Reference</span>
                  </div>
                  <div className="text-gray-700 text-xs font-medium">
                    {selectedWrit.landmarkCase}
                  </div>
                </div>
              </div>

              {/* Grid Specifications */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* Purpose & Scope */}
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-[#c9a84c] mb-1">
                      Legal Objective & Purpose
                    </h4>
                    <p className="text-gray-800 text-sm leading-relaxed font-medium">
                      {selectedWrit.purpose}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-[#c9a84c] mb-1">
                      Issued Against (Respondents)
                    </h4>
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-3.5 text-xs font-semibold text-gray-800">
                      {selectedWrit.issuedAgainst}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-[#c9a84c] mb-1">
                      Who Can Apply (Locus Standi)
                    </h4>
                    <p className="text-gray-700 text-xs leading-relaxed font-medium">
                      {selectedWrit.whoCanApply}
                    </p>
                  </div>
                </div>

                {/* Key Legal Grounds */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-[#c9a84c] mb-3">
                    Statutory Grounds For Invocation
                  </h4>
                  <div className="space-y-3">
                    {selectedWrit.keyGrounds.map((g, idx) => (
                      <div key={idx} className="flex items-start gap-3 bg-gray-50/80 border border-gray-200 rounded-xl p-3.5 hover:border-[#c9a84c] transition-colors">
                        <div className="w-5 h-5 rounded-full bg-[#0d1b3e] text-[#c9a84c] flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                          {idx + 1}
                        </div>
                        <p className="text-gray-800 text-xs leading-relaxed font-medium">
                          {g}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}

        {/* TAB 2: ARTICLE 32 vs 226 COMPARISON */}
        {activeTab === "comparison" && (
          <div className="space-y-8 animate-in fade-in duration-300">
            <div>
              <div className="flex items-center gap-2 text-[#c9a84c] text-[11px] font-bold uppercase tracking-widest mb-1">
                <Layers size={14} />
                <span>CONSTITUTIONAL SCHEME ANALYSIS</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0d1b3e]">
                Article 32 vs Article 226: Structural Comparison
              </h2>
              <p className="text-gray-600 text-sm mt-1 max-w-3xl">
                Understanding the jurisdictional distinctions between Supreme Court remedies under Article 32 and High Court remedies under Article 226.
              </p>
            </div>

            {/* Comparison Matrix Table */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#0d1b3e] text-white text-xs font-bold uppercase tracking-wider">
                      <th className="py-4 px-6 border-b border-[#1a2b5a] w-1/4">Key Parameter</th>
                      <th className="py-4 px-6 border-b border-[#1a2b5a] w-3/8 text-[#c9a84c]">Article 32 (Supreme Court)</th>
                      <th className="py-4 px-6 border-b border-[#1a2b5a] w-3/8 text-white">Article 226 (High Courts)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-xs">
                    {COMPARISON_TABLE.map((row, idx) => (
                      <tr key={idx} className="hover:bg-amber-50/40 transition-colors">
                        <td className="py-4 px-6 font-extrabold text-[#0d1b3e] text-sm bg-gray-50/50">
                          {row.feature}
                        </td>
                        <td className="py-4 px-6 text-gray-800 font-semibold leading-relaxed">
                          <span className="inline-block bg-amber-50 text-[#0d1b3e] border border-[#c9a84c]/30 px-2.5 py-1 rounded-md mb-1 font-bold text-[11px]">
                            Apex Forum
                          </span>
                          <br />
                          {row.art32}
                        </td>
                        <td className="py-4 px-6 text-gray-800 font-semibold leading-relaxed">
                          <span className="inline-block bg-gray-100 text-[#0d1b3e] border border-gray-300 px-2.5 py-1 rounded-md mb-1 font-bold text-[11px]">
                            High Court Jurisdiction
                          </span>
                          <br />
                          {row.art226}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: DRAFTING & FILING PROCEDURE */}
        {activeTab === "procedure" && (
          <div className="space-y-8 animate-in fade-in duration-300">
            <div>
              <div className="flex items-center gap-2 text-[#c9a84c] text-[11px] font-bold uppercase tracking-widest mb-1">
                <Clock size={14} />
                <span>CHAMBER LITIGATION WORKFLOW</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0d1b3e]">
                Step-by-Step Writ Filing Procedure
              </h2>
              <p className="text-gray-600 text-sm mt-1 max-w-3xl">
                How Advocate-on-Record Tushar Garg handles Writ litigation before the Supreme Court and High Courts.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PROCEDURAL_STEPS.map((s, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-[#c9a84c] shadow-sm hover:shadow-lg transition-all flex flex-col justify-between group">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-serif font-extrabold text-[#c9a84c] bg-[#0d1b3e] w-10 h-10 rounded-xl flex items-center justify-center border border-[#c9a84c]">
                        {s.step}
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">STAGE {idx + 1}</span>
                    </div>

                    <h3 className="font-serif font-bold text-lg text-[#0d1b3e] mb-2 group-hover:text-[#c9a84c] transition-colors">
                      {s.title}
                    </h3>

                    <p className="text-gray-600 text-xs leading-relaxed font-medium">
                      {s.desc}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between text-[11px] font-bold text-[#0d1b3e] group-hover:text-[#c9a84c]">
                    <span>Standard Chamber Practice</span>
                    <CheckCircle2 size={15} className="text-[#c9a84c]" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: LANDMARK PRECEDENTS */}
        {activeTab === "precedents" && (
          <div className="space-y-8 animate-in fade-in duration-300">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-[#c9a84c] text-[11px] font-bold uppercase tracking-widest mb-1">
                  <Gavel size={14} />
                  <span>CONSTITUTIONAL BENCH RULINGS</span>
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0d1b3e]">
                  Landmark Supreme Court Precedents on Writs
                </h2>
              </div>

              {/* Search Precedent Bar */}
              <div className="relative w-full md:w-80">
                <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  value={precedentSearch}
                  onChange={(e) => setPrecedentSearch(e.target.value)}
                  placeholder="Search ruling or citation..."
                  className="w-full pl-9 pr-4 py-2 bg-white border border-gray-200 rounded-xl text-xs focus:outline-none focus:border-[#c9a84c] text-gray-800"
                />
              </div>
            </div>

            <div className="space-y-4">
              {filteredPrecedents.map((p, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-[#c9a84c] shadow-sm hover:shadow-md transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <h3 className="font-serif font-bold text-lg text-[#0d1b3e]">
                      {p.title}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="bg-[#0d1b3e] text-[#c9a84c] px-3 py-1 rounded-lg text-xs font-mono font-bold border border-[#c9a84c]/30">
                        {p.citation}
                      </span>
                      <button
                        onClick={() => handleCopy(`${p.title} ${p.citation}`)}
                        className="p-1.5 rounded-lg bg-gray-100 hover:bg-[#c9a84c] text-gray-600 hover:text-[#0d1b3e] transition-colors"
                        title="Copy Citation"
                      >
                        {copiedText === `${p.title} ${p.citation}` ? <Check size={14} /> : <Copy size={14} />}
                      </button>
                    </div>
                  </div>

                  <p className="text-gray-700 text-xs sm:text-sm leading-relaxed font-normal bg-gray-50 border border-gray-100 rounded-xl p-4">
                    <strong className="text-[#0d1b3e] font-bold">Legal Ratio Decidendi: </strong>
                    {p.ratio}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 5: FAQS */}
        {activeTab === "faqs" && (
          <div className="space-y-8 animate-in fade-in duration-300 max-w-4xl mx-auto">
            <div>
              <div className="flex items-center gap-2 text-[#c9a84c] text-[11px] font-bold uppercase tracking-widest mb-1">
                <HelpCircle size={14} />
                <span>FREQUENTLY ASKED LEGAL QUESTIONS</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0d1b3e]">
                Writ Jurisdiction FAQs
              </h2>
            </div>

            <div className="space-y-4">
              {FAQS.map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:border-[#c9a84c] transition-colors"
                >
                  <button
                    onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between font-serif font-bold text-base text-[#0d1b3e] bg-gradient-to-r from-white to-gray-50 hover:bg-gray-50 transition-colors"
                  >
                    <span className="flex items-center gap-3">
                      <HelpCircle size={18} className="text-[#c9a84c] shrink-0" />
                      <span>{faq.q}</span>
                    </span>
                    {openFaqIndex === idx ? (
                      <ChevronUp size={18} className="text-[#c9a84c] shrink-0" />
                    ) : (
                      <ChevronDown size={18} className="text-gray-400 shrink-0" />
                    )}
                  </button>

                  {openFaqIndex === idx && (
                    <div className="p-5 text-xs sm:text-sm text-gray-700 leading-relaxed border-t border-gray-100 bg-white font-normal">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 4. BOTTOM CONSULTATION CTA BANNER */}
        <section className="mt-16 bg-gradient-to-r from-[#071126] via-[#0d1b3e] to-[#071126] rounded-3xl p-8 sm:p-12 text-white border border-[#c9a84c]/40 shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl space-y-4 relative z-10">
            <div className="inline-flex items-center gap-2 bg-[#c9a84c]/10 border border-[#c9a84c]/40 px-3.5 py-1 rounded-full text-[#c9a84c] text-[11px] font-bold uppercase tracking-wider">
              <ShieldCheck size={14} />
              <span>SUPREME COURT OF INDIA & HIGH COURT LITIGATION</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-4xl font-bold tracking-tight text-white uppercase">
              Facing Fundamental Right Violation or Arbitrary Executive Action?
            </h3>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-light">
              Consult <strong className="text-white">Advocate-on-Record Tushar Garg</strong> for expert drafting, urgent motion listing, and high-impact oral representation before the Supreme Court of India and State High Courts.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <a
                href="tel:+917206810681"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#c9a84c] hover:bg-[#b5953d] text-[#071126] font-bold py-3.5 px-8 rounded-xl transition-all text-xs uppercase tracking-wider shadow-xl hover:scale-105"
              >
                <Phone size={16} />
                <span>Call Chamber Office</span>
              </a>

              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold py-3.5 px-8 rounded-xl border border-white/20 transition-all text-xs uppercase tracking-wider"
              >
                <span>Legal Awareness</span>
                <ArrowRight size={15} className="text-[#c9a84c]" />
              </Link>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
