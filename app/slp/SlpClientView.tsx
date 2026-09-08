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
  BookOpen,
  Layers,
  Award,
  AlertCircle,
  Clock,
  Building2,
  Copy,
  Check,
  FileCheck
} from "lucide-react";
import TabScroller from "@/app/components/TabScroller";

interface SlpTypeDetail {
  id: string;
  category: string;
  forum: string;
  limitation: string;
  keyGrounds: string[];
  interimReliefs: string[];
  mandatoryDocs: string[];
}

const SLP_TYPES: SlpTypeDetail[] = [
  {
    id: "civil-slp",
    category: "Civil Special Leave Petition (Civil SLP)",
    forum: "Challenging Final Judgments, Decrees, or Interlocutory Orders of High Courts / Tribunals across India.",
    limitation: "90 Days from the date of High Court judgment/order (60 days if High Court certificate of fitness is refused).",
    keyGrounds: [
      "Substantial Question of Law of general public importance affecting commercial, property, or constitutional rights.",
      "Gross misinterpretation or misapplication of statutory provisions by the High Court Division Bench.",
      "Conflicting views between different High Court benches requiring definitive ruling by Supreme Court.",
      "Violation of Principles of Natural Justice or procedural impropriety leading to grave miscarriage of justice."
    ],
    interimReliefs: [
      "Ex-Parte Stay of Operation of Impugned High Court Judgment / Decree.",
      "Stay of Execution Proceedings / Money Recovery Decree.",
      "Status Quo order regarding title, possession, or property alienation.",
      "Injunction restraining arbitrary coercive steps by statutory authorities."
    ],
    mandatoryDocs: [
      "Certified Copy of Impugned Judgment & Order of High Court.",
      "Pleadings, Trial Court Judgments, and Exhibits from Lower Courts.",
      "List of Dates, Synopsis & Specific Questions of Law.",
      "Affidavit of Petitioner verified by Advocate-on-Record (AOR)."
    ]
  },
  {
    id: "criminal-slp",
    category: "Criminal Special Leave Petition (Criminal SLP)",
    forum: "Challenging Orders of Conviction, Acquittal Reversal, Bail Refusal/Cancellation, or FIR Quashing Orders.",
    limitation: "90 Days from date of Conviction/Acquittal judgment (or 60 days in case of refusal of leave to appeal).",
    keyGrounds: [
      "Incarceration violating Article 21 where procedure established by criminal law is breached.",
      "Gross perversity in factual finding or uncorroborated single-witness testimony supporting conviction.",
      "Arbitrary refusal or cancellation of Anticipatory / Regular Bail by High Court contrary to set precedents.",
      "Imposition of sentence completely disproportionate to the statutory offence charged."
    ],
    interimReliefs: [
      "Grant of Interim Bail / Regular Bail pending disposal of SLP.",
      "Suspension of Sentence under Section 389 CrPC / BNSS.",
      "Exemption from Surrendering before Trial Court / Prison Authorities.",
      "Stay of Arrest or Stay of Further Criminal Trial Proceedings."
    ],
    mandatoryDocs: [
      "Certified Copy of High Court Criminal Judgment & Trial Court Order.",
      "Depositions of Prosecution Witnesses (PWs) & Defense Evidence.",
      "Proof of Custody Period / Surrender Certificate / Bail Rejection Order.",
      "Vakalatnama authorizing Supreme Court Advocate-on-Record."
    ]
  }
];

const PROCEDURAL_STEPS = [
  {
    step: "01",
    title: "Ground Analysis & Certified Copy Verification",
    desc: "Thorough review of the impugned High Court judgment by Advocate-on-Record. Calculating limitation period (90 days) & identifying Substantial Questions of Law."
  },
  {
    step: "02",
    title: "AOR Drafting: Synopsis, Grounds & Exemption Prayers",
    desc: "Drafting Synopsis, List of Dates, Questions of Law, Grounds of Appeal, Prayer for Interim Relief/Bail, and verified Affidavit per Supreme Court Rules 2013."
  },
  {
    step: "03",
    title: "Supreme Court E-Filing & Registry Defect Removal",
    desc: "E-filing in Supreme Court Registry, curing scrutiny objections/defects, and securing Diary Number & SLP (Civil/Criminal) Registration Number."
  },
  {
    step: "04",
    title: "Motion Bench Preliminary Hearing (Admission Stage)",
    desc: "Advocate-on-Record & Senior Advocate argue before two/three-judge Supreme Court Motion Bench for issuance of Notice and grant of Interim Stay / Bail."
  },
  {
    step: "05",
    title: "Notice Service & Counter/Rejoinder Pleadings",
    desc: "Issuing formal Notice to Respondents through SC Process; Respondents file Counter-Affidavit; Petitioner files Rejoinder Affidavit to complete pleadings."
  },
  {
    step: "06",
    title: "Grant of Leave & Conversion to Civil/Criminal Appeal",
    desc: "Apex Court grants 'Leave to Appeal', converting SLP into regular Appeal (Civil/Criminal) for final disposal, setting binding precedent under Article 141."
  }
];

const LANDMARK_PRECEDENTS = [
  {
    title: "Pritam Singh v. The State",
    citation: "AIR 1950 SC 169 (1st Milestone SLP Ruling)",
    court: "Supreme Court of India (5-Judge Bench)",
    ratio: "Established that Article 136 grants overriding, plenary, and exceptional power to the Supreme Court. It must be exercised sparingly and only in extraordinary circumstances where substantial and grave injustice has been done."
  },
  {
    title: "Kunhayammed v. State of Kerala",
    citation: "(2006) 6 SCC 359",
    court: "Supreme Court of India (3-Judge Bench)",
    ratio: "Settled the Doctrine of Merger. Held that dismissal of an SLP in limine (at pre-leave stage without reasons) does not merge the lower court judgment, leaving review remedies before High Court open."
  },
  {
    title: "Dhakeswari Cotton Mills Ltd v. CIT",
    citation: "(1955) 1 SCR 941",
    court: "Supreme Court of India",
    ratio: "Affirmed that Supreme Court under Article 136 will interfere with tribunal or tax authority orders if tribunal acts in violation of natural justice, relies on secret evidence, or refuses fair hearing."
  },
  {
    title: "Mathai v. George",
    citation: "(2010) 4 SCC 358",
    court: "Supreme Court of India",
    ratio: "Summarized categories of cases where Article 136 should be entertained: constitutional interpretations, conflicting High Court decisions, manifest miscarriage of justice, and arbitrary sentences."
  },
  {
    title: "Arnesh Kumar v. State of Bihar",
    citation: "(2014) 8 SCC 273",
    court: "Supreme Court of India",
    ratio: "Supreme Court exercised Article 136 jurisdiction in Criminal SLP to issue mandatory guidelines against automatic arrests under Section 498A IPC, upholding personal liberty under Article 21."
  }
];

const FAQS = [
  {
    q: "What happens if an SLP is dismissed in limine (without detailed order)?",
    a: "If an SLP is dismissed 'in limine' (at admission stage without granting leave), the Supreme Court does not express any opinion on the merits of the case. The Doctrine of Merger does not apply, and the petitioner may still pursue eligible review petitions or statutory remedies before the High Court."
  },
  {
    q: "Is it mandatory to engage an Advocate-on-Record (AOR) for filing SLP in the Supreme Court?",
    a: "Yes. Under Order IV of Supreme Court Rules 2013, only an Advocate-on-Record (AOR) registered with the Supreme Court of India is authorized to file pleadings, SLPs, Vakalatnamas, and petitions before the Apex Court."
  },
  {
    q: "What is the limitation period for filing an SLP in the Supreme Court?",
    a: "The limitation period is 90 days from the date of the impugned High Court judgment or order (60 days if High Court certificate of fitness is refused, or 60 days in certain criminal matters). Time spent in obtaining certified copies is excluded. Delay can be condoned by filing a Section 5 Limitation Act application showing sufficient cause."
  },
  {
    q: "Can an SLP be filed against an interim or interlocutory order of a High Court?",
    a: "Yes. Article 136 uses the words 'any judgment, decree, determination, sentence or order'. Thus, SLP can be filed against final as well as interim/interlocutory orders of High Courts if it causes irreparable prejudice or manifest illegality."
  },
  {
    q: "What interim relief can be sought in a Criminal SLP?",
    a: "In a Criminal SLP, petitioners can seek urgent Interim Bail, Suspension of Execution of Sentence, Exemption from Surrendering, or Stay of Arrest/Trial Proceedings pending disposal."
  }
];

export default function SlpClientView() {
  const [activeTab, setActiveTab] = useState<"scope" | "types" | "workflow" | "precedents" | "faqs">("scope");
  const [activeSlpType, setActiveSlpType] = useState<string>("civil-slp");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [precedentSearch, setPrecedentSearch] = useState("");
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const selectedSlp = SLP_TYPES.find((s) => s.id === activeSlpType) || SLP_TYPES[0];

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
          
          {/* Breadcrumb */}
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
              <span className="text-[#c9a84c] font-semibold">Special Leave Petitions (SLP - Art 136)</span>
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
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 bg-[#c9a84c]/10 border border-[#c9a84c]/40 px-3.5 py-1 rounded-full text-[#c9a84c] text-[11px] font-bold tracking-wider uppercase shadow-sm">
                <Scale size={13} />
                <span>ARTICLE 136 • CONSTITUTION OF INDIA</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight uppercase">
                Special Leave Petitions (SLP)
              </h1>

              <p className="text-gray-300 text-base sm:text-lg max-w-3xl leading-relaxed font-light">
                Specialized appellate litigation before the <strong className="text-white font-medium">Supreme Court of India</strong> under Article 136 challenging High Court final judgments, decrees, criminal convictions, bail dismissals, and interlocutory orders.
              </p>

              {/* Quick Stats Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-white/10">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-[#c9a84c]/30 text-center">
                  <div className="text-[#c9a84c] font-bold text-lg font-serif">Article 136</div>
                  <div className="text-gray-300 text-[11px] uppercase tracking-wider font-semibold">Plenary Power</div>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-[#c9a84c]/30 text-center">
                  <div className="text-[#c9a84c] font-bold text-lg font-serif">90 Days</div>
                  <div className="text-gray-300 text-[11px] uppercase tracking-wider font-semibold">Limitation Period</div>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-[#c9a84c]/30 text-center">
                  <div className="text-[#c9a84c] font-bold text-lg font-serif">AOR Practice</div>
                  <div className="text-gray-300 text-[11px] uppercase tracking-wider font-semibold">Apex Court Rules</div>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-[#c9a84c]/30 text-center">
                  <div className="text-[#c9a84c] font-bold text-lg font-serif">2-Stage Hearing</div>
                  <div className="text-gray-300 text-[11px] uppercase tracking-wider font-semibold">Notice & Leave</div>
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
                  Urgent SLP drafting, defect removal & Motion Bench oral representation before the <strong className="text-white">Supreme Court of India</strong>.
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
            onClick={() => setActiveTab("scope")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-[12.5px] font-bold transition-all whitespace-nowrap cursor-pointer ${
              activeTab === "scope"
                ? "bg-[#0d1b3e] text-[#c9a84c] shadow-sm"
                : "text-gray-600 hover:bg-gray-100 hover:text-[#0d1b3e]"
            }`}
          >
            <Scale size={15} />
            <span>Article 136 Scope & Plenary Power</span>
          </button>

          <button
            onClick={() => setActiveTab("types")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-[12.5px] font-bold transition-all whitespace-nowrap cursor-pointer ${
              activeTab === "types"
                ? "bg-[#0d1b3e] text-[#c9a84c] shadow-sm"
                : "text-gray-600 hover:bg-gray-100 hover:text-[#0d1b3e]"
            }`}
          >
            <Layers size={15} />
            <span>Civil vs Criminal SLP</span>
          </button>

          <button
            onClick={() => setActiveTab("workflow")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-[12.5px] font-bold transition-all whitespace-nowrap cursor-pointer ${
              activeTab === "workflow"
                ? "bg-[#0d1b3e] text-[#c9a84c] shadow-sm"
                : "text-gray-600 hover:bg-gray-100 hover:text-[#0d1b3e]"
            }`}
          >
            <Clock size={15} />
            <span>6-Stage SLP Workflow</span>
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
            <span>Apex SLP Precedents</span>
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
            <span>SLP FAQs</span>
          </button>
        </TabScroller>
      </div>

      {/* 3. MAIN SECTION CONTENT */}
      <main className="max-w-[1350px] mx-auto px-4 sm:px-6 py-10">
        
        {/* TAB 1: ARTICLE 136 SCOPE & PLENARY POWER */}
        {activeTab === "scope" && (
          <div className="space-y-10 animate-in fade-in duration-300">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm">
              <div className="flex items-center gap-2 text-[#c9a84c] text-[11px] font-bold uppercase tracking-widest mb-2">
                <Scale size={14} />
                <span>CONSTITUTIONAL SCHEME & APEX POWER</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0d1b3e] mb-4">
                Plenary & Discretionary Power under Article 136
              </h2>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-normal">
                Article 136 of the Constitution of India confers extraordinary, plenary appellate jurisdiction upon the Supreme Court of India. Unlike regular statutory appeals, an SLP does not confer an automatic right of appeal; it vests discretionary power in the Supreme Court to grant "special leave" to appeal against any judgment, decree, determination, sentence, or order in any cause or matter passed by any court or tribunal in India (except military tribunals).
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 pt-6 border-t border-gray-100">
                <div className="bg-amber-50/50 border border-[#c9a84c]/30 rounded-xl p-5">
                  <div className="flex items-center gap-2 text-[#0d1b3e] font-serif font-bold text-base mb-2">
                    <Award size={18} className="text-[#c9a84c]" />
                    <span>Stage 1: Pre-Leave Admission Stage</span>
                  </div>
                  <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                    The Motion Bench hears the AOR / Senior Advocate to determine whether the matter involves a Substantial Question of Law or grave miscarriage of justice. If dismissed *in limine*, the lower court order stands without merger.
                  </p>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                  <div className="flex items-center gap-2 text-[#0d1b3e] font-serif font-bold text-base mb-2">
                    <Gavel size={18} className="text-[#c9a84c]" />
                    <span>Stage 2: Post-Leave Regular Appeal Stage</span>
                  </div>
                  <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                    Once the Supreme Court grants "Leave to Appeal", the SLP is re-numbered as a regular Civil/Criminal Appeal. The Court conducts full appellate review and delivers a binding judgment under Article 141.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: CIVIL VS CRIMINAL SLP */}
        {activeTab === "types" && (
          <div className="space-y-8 animate-in fade-in duration-300">
            <div>
              <div className="flex items-center gap-2 text-[#c9a84c] text-[11px] font-bold uppercase tracking-widest mb-1">
                <Layers size={14} />
                <span>CATEGORIES OF SPECIAL LEAVE PETITIONS</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0d1b3e]">
                Civil SLP vs Criminal SLP
              </h2>
            </div>

            {/* Selector Buttons */}
            <div className="flex gap-4">
              {SLP_TYPES.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setActiveSlpType(s.id)}
                  className={`flex-1 p-4 rounded-xl border text-left transition-all ${
                    activeSlpType === s.id
                      ? "bg-[#0d1b3e] text-white border-[#c9a84c] shadow-md"
                      : "bg-white text-[#0d1b3e] border-gray-200 hover:border-[#c9a84c]"
                  }`}
                >
                  <h3 className="font-serif font-bold text-base">{s.category}</h3>
                  <span className="text-xs text-[#c9a84c] font-semibold mt-1 block">Limitation: {s.limitation}</span>
                </button>
              ))}
            </div>

            {/* Selected SLP Specification Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-md space-y-6">
              <div className="border-b border-gray-100 pb-4">
                <h3 className="font-serif font-bold text-2xl text-[#0d1b3e]">{selectedSlp.category}</h3>
                <p className="text-gray-600 text-xs mt-1 font-medium">{selectedSlp.forum}</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-[#c9a84c] mb-3">Grounds of Appeal</h4>
                  <div className="space-y-2.5">
                    {selectedSlp.keyGrounds.map((g, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-gray-800 font-medium bg-gray-50 p-3 rounded-lg border border-gray-200/60">
                        <CheckCircle2 size={14} className="text-[#c9a84c] shrink-0 mt-0.5" />
                        <span>{g}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-[#c9a84c] mb-3">Interim Reliefs Sought</h4>
                  <div className="space-y-2.5">
                    {selectedSlp.interimReliefs.map((r, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-gray-800 font-medium bg-amber-50/60 p-3 rounded-lg border border-[#c9a84c]/30">
                        <ShieldCheck size={14} className="text-[#c9a84c] shrink-0 mt-0.5" />
                        <span>{r}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-[#c9a84c] mb-3">Mandatory Documents</h4>
                  <div className="space-y-2.5">
                    {selectedSlp.mandatoryDocs.map((d, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-gray-800 font-medium bg-gray-50 p-3 rounded-lg border border-gray-200/60">
                        <FileCheck size={14} className="text-[#0d1b3e] shrink-0 mt-0.5" />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: 6-STAGE WORKFLOW */}
        {activeTab === "workflow" && (
          <div className="space-y-8 animate-in fade-in duration-300">
            <div>
              <div className="flex items-center gap-2 text-[#c9a84c] text-[11px] font-bold uppercase tracking-widest mb-1">
                <Clock size={14} />
                <span>SUPREME COURT LITIGATION PROCEDURE</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0d1b3e]">
                6-Stage SLP Litigation Workflow
              </h2>
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
                    <span>Standard AOR Practice</span>
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
                  <span>SUPREME COURT CONSTITUTIONAL BENCH RULINGS</span>
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0d1b3e]">
                  Landmark Precedents on Article 136 SLP
                </h2>
              </div>

              {/* Search */}
              <div className="relative w-full md:w-80">
                <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  value={precedentSearch}
                  onChange={(e) => setPrecedentSearch(e.target.value)}
                  placeholder="Search SLP judgment..."
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
                <span>FREQUENTLY ASKED QUESTIONS</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0d1b3e]">
                Special Leave Petition (SLP) FAQs
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
              <span>SUPREME COURT OF INDIA ADVOCATE-ON-RECORD PRACTICE</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-4xl font-bold tracking-tight text-white uppercase">
              Need to File or Defend a Special Leave Petition (SLP)?
            </h3>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-light">
              Consult <strong className="text-white">Advocate-on-Record Tushar Garg</strong> for expert SLP drafting, defect clearance, Motion Bench representation, and stay/bail hearings before the Supreme Court of India.
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
