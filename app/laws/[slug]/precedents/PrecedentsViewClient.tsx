"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  Search,
  Gavel,
  BookOpen,
  Scale,
  Copy,
  Check,
  ChevronRight,
  ShieldCheck,
  Sparkles,
  Award,
  ExternalLink,
  MessageSquare,
  Phone,
  Calendar,
  Layers,
  Filter
} from "lucide-react";
import { LawCategoryDetail } from "../../data/lawsData";

interface Props {
  detail: LawCategoryDetail;
}

export interface DetailedPrecedentItem {
  title: string;
  citation: string;
  court: string;
  year: string;
  bench: string;
  ratio: string;
  impact?: string;
  tags: string[];
}

// Landmark Supreme Court Precedents Dataset (1950 to Present 2026)
const APEX_CONSTITUTIONAL_PRECEDENTS: DetailedPrecedentItem[] = [
  // 1950s
  {
    title: "A.K. Gopalan v. State of Madras",
    citation: "(1950) SCR 88 / AIR 1950 SC 27",
    court: "Supreme Court of India",
    bench: "6-Judge Constitution Bench",
    year: "1950",
    ratio: "Early interpretation of Article 21. Held that 'procedure established by law' means procedure prescribed by statute, rejecting American due process. Overruled later in Maneka Gandhi (1978).",
    impact: "First major constitutional interpretation of Part III Fundamental Rights post-Constitution enforcement.",
    tags: ["1950s", "Article 21", "Preventive Detention", "Early Era"]
  },
  {
    title: "Romesh Thappar v. State of Madras",
    citation: "(1950) SCR 594 / AIR 1950 SC 124",
    court: "Supreme Court of India",
    bench: "5-Judge Constitution Bench",
    year: "1950",
    ratio: "Declared that Freedom of Speech and Expression under Art 19(1)(a) includes freedom of circulation of newspapers and publications. Ban on entry of journal struck down.",
    impact: "Foundational precedent establishing freedom of the press in India.",
    tags: ["1950s", "Article 19", "Freedom of Speech", "Press Freedom"]
  },
  {
    title: "State of Madras v. Champakam Dorairajan",
    citation: "(1951) SCR 525 / AIR 1951 SC 226",
    court: "Supreme Court of India",
    bench: "7-Judge Constitution Bench",
    year: "1951",
    ratio: "Held that Fundamental Rights (Part III) take precedence over Directive Principles of State Policy (Part IV). Struck down communal quota G.O. in medical colleges.",
    impact: "Led directly to the First Constitutional Amendment Act 1951 inserting Article 15(4).",
    tags: ["1950s", "Article 15", "First Amendment", "Reservations"]
  },
  {
    title: "Shankari Prasad v. Union of India",
    citation: "(1952) SCR 89 / AIR 1951 SC 458",
    court: "Supreme Court of India",
    bench: "5-Judge Constitution Bench",
    year: "1951",
    ratio: "Upheld validity of 1st Constitutional Amendment Act. Held that Parliament's power to amend under Art 368 includes power to amend Fundamental Rights.",
    impact: "Sustained early land reform legislation and First Schedule amendments.",
    tags: ["1950s", "Article 368", "Constitutional Amendment", "Land Reforms"]
  },
  {
    title: "In re Berubari Union",
    citation: "(1960) 3 SCR 250 / AIR 1960 SC 845",
    court: "Supreme Court of India",
    bench: "8-Judge Constitution Bench",
    year: "1960",
    ratio: "Held that Preamble is not a part of the Constitution (overruled in Kesavananda) and Parliament cannot cede Indian territory to foreign state without Constitutional Amendment under Art 368.",
    impact: "Established procedure for territorial treaties and international boundary agreements.",
    tags: ["1960s", "Article 3", "Preamble", "Territorial Cession"]
  },

  // 1960s
  {
    title: "Kedar Nath Singh v. State of Bihar",
    citation: "(1962) Supp 2 SCR 769 / AIR 1962 SC 955",
    court: "Supreme Court of India",
    bench: "5-Judge Constitution Bench",
    year: "1962",
    ratio: "Upheld constitutional validity of Sedition under Section 124A IPC but narrowed its scope strictly to speeches or acts involving incitement to violence or public disorder.",
    impact: "Benchmark ruling protecting strong political dissent from sedition prosecution.",
    tags: ["1960s", "Sedition", "Article 19", "Free Speech"]
  },
  {
    title: "I.C. Golaknath v. State of Punjab",
    citation: "(1967) 2 SCR 762 / AIR 1967 SC 1643",
    court: "Supreme Court of India",
    bench: "11-Judge Constitution Bench",
    year: "1967",
    ratio: "Held by 6:5 majority that Parliament has no power to amend Part III of the Constitution so as to take away or abridge Fundamental Rights. Applied Prospective Overruling.",
    impact: "Triggered 24th and 25th Constitutional Amendments leading to Kesavananda Bharati.",
    tags: ["1960s", "Article 368", "Fundamental Rights", "Prospective Overruling"]
  },

  // 1970s
  {
    title: "Kesavananda Bharati v. State of Kerala",
    citation: "(1973) 4 SCC 225 / AIR 1973 SC 1461",
    court: "Supreme Court of India",
    bench: "13-Judge Full Constitution Bench",
    year: "1973",
    ratio: "Historic 7:6 ruling establishing the BASIC STRUCTURE DOCTRINE. Held that while Parliament can amend any part of Constitution under Art 368, it cannot alter, destroy or abridge the basic features or core framework of the Constitution.",
    impact: "The most landmark judicial precedent in Indian history safeguarding democracy, judicial review, secularism, and fundamental freedoms.",
    tags: ["1970s", "Basic Structure", "Article 368", "13-Judge Bench", "Landmark"]
  },
  {
    title: "E.P. Royappa v. State of Tamil Nadu",
    citation: "(1974) 4 SCC 3 / AIR 1974 SC 555",
    court: "Supreme Court of India",
    bench: "5-Judge Constitution Bench",
    year: "1974",
    ratio: "Formulated the New Doctrine of Equality. Declared that Equality is a dynamic concept and Arbitrariness is antithetical to Article 14.",
    impact: "Transformed Article 14 into a potent weapon against arbitrary executive decisions.",
    tags: ["1970s", "Article 14", "Non-Arbitrariness", "Equality"]
  },
  {
    title: "Indira Nehru Gandhi v. Raj Narain",
    citation: "(1975) Supp SCC 1 / AIR 1975 SC 2299",
    court: "Supreme Court of India",
    bench: "5-Judge Constitution Bench",
    year: "1975",
    ratio: "Applied Basic Structure Doctrine to strike down Article 329A(4) inserted by 39th Amendment. Held that Free and Fair Elections and Judicial Review are basic features.",
    impact: "Reaffirmed supremacy of Constitution over parliamentary election laws during Emergency.",
    tags: ["1970s", "Basic Structure", "Elections", "Judicial Review"]
  },
  {
    title: "Maneka Gandhi v. Union of India",
    citation: "(1978) 1 SCC 248 / AIR 1978 SC 597",
    court: "Supreme Court of India",
    bench: "7-Judge Constitution Bench",
    year: "1978",
    ratio: "Revolutionized Article 21. Held that procedure depriving personal liberty must not be arbitrary, fanciful or oppressive; it must be JUST, FAIR AND REASONABLE (imported procedural due process). Established inter-linkage between Art 14, 19 and 21 (Golden Triangle).",
    impact: "Expanded Article 21 to cover right to dignity, travel abroad, clean environment, and fair trial.",
    tags: ["1970s", "Article 21", "Due Process", "Golden Triangle", "Personal Liberty"]
  },

  // 1980s
  {
    title: "Minerva Mills Ltd. v. Union of India",
    citation: "(1980) 3 SCC 625 / AIR 1980 SC 1789",
    court: "Supreme Court of India",
    bench: "5-Judge Constitution Bench",
    year: "1980",
    ratio: "Struck down clauses (4) & (5) of Art 368 inserted by 42nd Amendment. Reaffirmed that harmony and balance between Fundamental Rights and Directive Principles is a basic feature of the Constitution.",
    impact: "Preserved judicial review over constitutional amendments.",
    tags: ["1980s", "Basic Structure", "Article 368", "Judicial Review"]
  },
  {
    title: "Bachhan Singh v. State of Punjab",
    citation: "(1980) 2 SCC 684 / AIR 1980 SC 898",
    court: "Supreme Court of India",
    bench: "5-Judge Constitution Bench",
    year: "1980",
    ratio: "Upheld constitutional validity of death penalty under IPC 302 / BNS 103, but restricted capital punishment strictly to the 'RAREST OF RARE CASES' with mandatory aggravating vs mitigating circumstance balancing.",
    impact: "Global precedent governing capital sentencing jurisprudence in India.",
    tags: ["1980s", "Death Penalty", "Rarest of Rare", "Article 21"]
  },
  {
    title: "S.P. Gupta v. Union of India (First Judges Case)",
    citation: "(1981) Supp SCC 87 / AIR 1982 SC 149",
    court: "Supreme Court of India",
    bench: "7-Judge Constitution Bench",
    year: "1981",
    ratio: "Relaxed traditional locus standi rule to birth Public Interest Litigation (PIL) in India. Allowed public-spirited citizens to move court on behalf of oppressed classes under Art 32/226.",
    impact: "Pioneered Indian Public Interest Litigation (PIL) movement.",
    tags: ["1980s", "PIL", "Locus Standi", "First Judges Case"]
  },
  {
    title: "Bandhua Mukti Morcha v. Union of India",
    citation: "(1984) 3 SCC 161 / AIR 1984 SC 802",
    court: "Supreme Court of India",
    bench: "3-Judge Bench",
    year: "1984",
    ratio: "Held that epistolary jurisdiction under Article 32 allows letters addressed to court to be treated as Writ Petitions for enforcing fundamental rights of bonded laborers and marginalized citizens.",
    impact: "Established proactive judicial intervention for human rights protection.",
    tags: ["1980s", "Article 32", "Bonded Labour", "Human Rights"]
  },
  {
    title: "M.C. Mehta v. Union of India (Oleum Gas Leak)",
    citation: "(1987) 1 SCC 395 / AIR 1987 SC 1086",
    court: "Supreme Court of India",
    bench: "5-Judge Constitution Bench",
    year: "1987",
    ratio: "Evolved the Doctrine of ABSOLUTE LIABILITY for hazardous and inherently dangerous industries, rejecting exceptions of Rylands v. Fletcher.",
    impact: "Cornerstone precedent in environmental tort litigation and industrial safety.",
    tags: ["1980s", "Absolute Liability", "Environmental Law", "Article 21"]
  },

  // 1990s
  {
    title: "Indra Sawhney v. Union of India (Mandal Case)",
    citation: "(1992) Supp 3 SCC 217 / AIR 1993 SC 477",
    court: "Supreme Court of India",
    bench: "9-Judge Constitution Bench",
    year: "1992",
    ratio: "Upheld 27% OBC reservation in public employment. Enforced 50% ceiling limit on total reservations and excluded 'Creamy Layer' from reservation benefits.",
    impact: "Definitive precedent governing reservation policies and affirmative action limits in India.",
    tags: ["1990s", "Reservation", "Mandal Case", "Article 16", "Creamy Layer"]
  },
  {
    title: "Supreme Court Advocates-on-Record Association v. UOI (Second Judges Case)",
    citation: "(1993) 4 SCC 441 / AIR 1994 SC 268",
    court: "Supreme Court of India",
    bench: "9-Judge Constitution Bench",
    year: "1993",
    ratio: "Overruled S.P. Gupta. Held that 'consultation' with CJI under Art 124(2) means 'concurrence'. Created the COLLEGIUM SYSTEM of judicial appointments.",
    impact: "Established judicial supremacy in appointing Supreme Court and High Court Judges.",
    tags: ["1990s", "Collegium System", "AOR Case", "Judicial Appointments"]
  },
  {
    title: "S.R. Bommai v. Union of India",
    citation: "(1994) 3 SCC 1 / AIR 1994 SC 1918",
    court: "Supreme Court of India",
    bench: "9-Judge Constitution Bench",
    year: "1994",
    ratio: "Declared Secularism and Federalism as basic features. Held that Presidential Proclamation under Article 356 (President's Rule) is subject to strict judicial review and floor test is mandatory.",
    impact: "Curtailed arbitrary dismissal of elected State Governments under Art 356.",
    tags: ["1990s", "Article 356", "Federalism", "Secularism", "President's Rule"]
  },
  {
    title: "L. Chandra Kumar v. Union of India",
    citation: "(1997) 3 SCC 261 / AIR 1997 SC 1125",
    court: "Supreme Court of India",
    bench: "7-Judge Constitution Bench",
    year: "1997",
    ratio: "Declared that power of judicial review of High Courts under Art 226/227 and Supreme Court under Art 32 is a basic feature. Decisions of Administrative Tribunals are subject to High Court Division Bench scrutiny.",
    impact: "Re-established High Courts' supervisory writ jurisdiction over all tribunals.",
    tags: ["1990s", "Article 226", "Tribunals", "Judicial Review", "Basic Structure"]
  },
  {
    title: "Vishaka v. State of Rajasthan",
    citation: "(1997) 6 SCC 241 / AIR 1997 SC 3011",
    court: "Supreme Court of India",
    bench: "3-Judge Bench",
    year: "1997",
    ratio: "Laid down binding VISHAKA GUIDELINES against sexual harassment of women at workplace under Art 14, 19, and 21 in absence of enacted legislation.",
    impact: "Formed the basis for the Sexual Harassment of Women at Workplace (POSH) Act 2013.",
    tags: ["1990s", "POSH", "Workplace Safety", "Women Rights", "Article 21"]
  },

  // 2000s - 2010s
  {
    title: "Arnesh Kumar v. State of Bihar",
    citation: "(2014) 8 SCC 273",
    court: "Supreme Court of India",
    bench: "2-Judge Bench",
    year: "2014",
    ratio: "Mandated compliance with Section 41 & 41A CrPC (Sec 35 BNSS) before arrest in offenses punishable up to 7 years imprisonment. Required Magistrates to check arrest necessity before remanding accused.",
    impact: "Curtailed automatic police arrests in matrimonial (498A IPC / 85 BNS) and commercial cases.",
    tags: ["2010s", "Arrest Safeguards", "Section 41A", "Bail", "BNSS"]
  },
  {
    title: "Shreya Singhal v. Union of India",
    citation: "(2015) 5 SCC 1",
    court: "Supreme Court of India",
    bench: "2-Judge Bench",
    year: "2015",
    ratio: "Struck down Section 66A of Information Technology Act 2000 as unconstitutional for violating freedom of speech under Art 19(1)(a). Held terms 'grossly offensive' vague and chilling.",
    impact: "Historic ruling defending digital free speech on social media and internet.",
    tags: ["2010s", "Section 66A IT Act", "Free Speech", "Article 19"]
  },
  {
    title: "Supreme Court Advocates-on-Record Association v. UOI (NJAC Case)",
    citation: "(2016) 5 SCC 1",
    court: "Supreme Court of India",
    bench: "5-Judge Constitution Bench",
    year: "2015",
    ratio: "Struck down 99th Constitutional Amendment Act and NJAC Act as unconstitutional for violating Independence of Judiciary — a basic feature. Restored Collegium System.",
    impact: "Preserved judicial independence in Supreme Court & High Court judges' appointments.",
    tags: ["2010s", "NJAC", "Collegium System", "AOR Case", "Basic Structure"]
  },
  {
    title: "Shayara Bano v. Union of India",
    citation: "(2017) 9 SCC 1",
    court: "Supreme Court of India",
    bench: "5-Judge Constitution Bench",
    year: "2017",
    ratio: "Declared instant Triple Talaq (Talaq-e-Biddat) unconstitutional by 3:2 majority, holding it manifestly arbitrary under Article 14.",
    impact: "Paved way for the Muslim Women (Protection of Rights on Marriage) Act 2019.",
    tags: ["2010s", "Triple Talaq", "Article 14", "Gender Justice"]
  },
  {
    title: "K.S. Puttaswamy v. Union of India (Privacy Case)",
    citation: "(2017) 10 SCC 1",
    court: "Supreme Court of India",
    bench: "9-Judge Full Constitution Bench",
    year: "2017",
    ratio: "Unanimously declared RIGHT TO PRIVACY as an intrinsic part of Right to Life and Personal Liberty under Article 21 and Part III Fundamental Rights.",
    impact: "Landmark ruling transforming data protection, surveillance laws, personal choice, and digital rights in India.",
    tags: ["2010s", "Right to Privacy", "9-Judge Bench", "Article 21", "Aadhaar"]
  },
  {
    title: "Navtej Singh Johar v. Union of India",
    citation: "(2018) 10 SCC 1",
    court: "Supreme Court of India",
    bench: "5-Judge Constitution Bench",
    year: "2018",
    ratio: "Unanimously read down Section 377 IPC to decriminalize consensual adult samesex relationships under Article 14, 15, 19, and 21.",
    impact: "Historic victory for constitutional morality and LGBTQIA+ rights in India.",
    tags: ["2010s", "Section 377", "Constitutional Morality", "Article 21"]
  },

  // 2020s to Present (2020 - 2026)
  {
    title: "Anuradha Bhasin v. Union of India",
    citation: "(2020) 3 SCC 637",
    court: "Supreme Court of India",
    bench: "3-Judge Bench",
    year: "2020",
    ratio: "Held that freedom of speech and trade over internet is a Fundamental Right under Art 19(1)(a) & 19(1)(g). Indefinite internet suspension orders illegal; subject to proportionality and judicial review.",
    impact: "Framework governing telecom & internet suspension orders in India.",
    tags: ["2020s", "Internet Freedom", "Article 19", "Proportionality"]
  },
  {
    title: "Satender Kumar Antil v. Central Bureau of Investigation",
    citation: "(2022) 10 SCC 51",
    court: "Supreme Court of India",
    bench: "2-Judge Bench",
    year: "2022",
    ratio: "Laid down comprehensive binding guidelines classifying criminal offenses into Category A, B, C, D to streamline bail grants, discourage unnecessary custodial arrests, and enforce 'Bail is Rule, Jail Exception'.",
    impact: "Binding bail precedent followed in all Sessions Courts and High Courts across India.",
    tags: ["2020s", "Bail Guidelines", "CrPC / BNSS", "Criminal Justice"]
  },
  {
    title: "Vijay Madanlal Choudhary v. Union of India",
    citation: "2022 SCC OnLine SC 929",
    court: "Supreme Court of India",
    bench: "3-Judge Bench",
    year: "2022",
    ratio: "Upheld constitutional validity of twin conditions for bail under Section 45 PMLA and clarified ED powers of search, seizure, ECIR, and summons.",
    impact: "Leading precedent governing PMLA money laundering litigation in Supreme Court.",
    tags: ["2020s", "PMLA", "Money Laundering", "Bail Twin Conditions"]
  },
  {
    title: "Union of India v. Mohit Minerals Pvt Ltd",
    citation: "(2022) 10 SCC 700",
    court: "Supreme Court of India",
    bench: "3-Judge Bench",
    year: "2022",
    ratio: "Held that recommendations of GST Council are advisory and not binding on Parliament/State Legislatures. Struck down GST levy on ocean freight on CIF import contracts.",
    impact: "Reaffirmed cooperative federalism in GST taxation architecture.",
    tags: ["2020s", "GST Council", "Federalism", "Taxation Precedent"]
  },
  {
    title: "Shilpa Sailesh v. Varun Sreenivasan",
    citation: "(2023) 6 SCC 349",
    court: "Supreme Court of India",
    bench: "5-Judge Constitution Bench",
    year: "2023",
    ratio: "Held that Supreme Court under Article 142 has power to grant divorce on ground of irretrievable breakdown of marriage without waiting for statutory 6-month cooling period.",
    impact: "Empowered Apex Court to grant instant matrimonial relief in prolonged disputes.",
    tags: ["2020s", "Article 142", "Divorce", "Matrimonial Law"]
  },
  {
    title: "Association for Democratic Reforms (ADR) v. Union of India (Electoral Bonds Case)",
    citation: "(2024) 2 SCC 1",
    court: "Supreme Court of India",
    bench: "5-Judge Constitution Bench",
    year: "2024",
    ratio: "Unanimously struck down Electoral Bond Scheme as unconstitutional. Held that anonymous political donations violate voters' fundamental right to information under Article 19(1)(a).",
    impact: "Monumental ruling restoring electoral transparency and financial accountability.",
    tags: ["2020s", "Electoral Bonds", "Right to Information", "Article 19", "5-Judge Bench"]
  }
];

export default function PrecedentsViewClient({ detail }: Props) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDecade, setSelectedDecade] = useState("all");
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const isConstitutional = detail.slug === "constitutional-law";

  // Build items list
  const allItems: DetailedPrecedentItem[] = useMemo(() => {
    if (isConstitutional) {
      return APEX_CONSTITUTIONAL_PRECEDENTS;
    }

    // Merge detail.landmarkPrecedents with Apex precedents for non-constitutional categories
    const categoryCustom: DetailedPrecedentItem[] = detail.landmarkPrecedents.map((p) => ({
      title: p.title,
      citation: p.citation,
      court: p.court,
      year: p.year,
      bench: "Supreme Court Bench",
      ratio: p.ratio,
      impact: `Binding Apex Court precedent under ${detail.name}.`,
      tags: [detail.name, p.year, "Landmark Ruling"]
    }));

    return [...categoryCustom, ...APEX_CONSTITUTIONAL_PRECEDENTS.slice(0, 15)];
  }, [detail, isConstitutional]);

  // Decade Filter Options
  const decadeOptions = [
    { id: "all", label: "All Precedents (1950–2026)" },
    { id: "2020s", label: "2020s–2026 (Recent SC Benches)" },
    { id: "2010s", label: "2010s (Privacy & Individual Rights)" },
    { id: "1990s", label: "1990s (Collegium & Federalism)" },
    { id: "1980s", label: "1980s (PIL & Environment)" },
    { id: "1970s", label: "1970s (Basic Structure & Due Process)" },
    { id: "1950s_60s", label: "1950s–1960s (Foundational Benches)" },
  ];

  // Filtered List
  const filteredPrecedents = useMemo(() => {
    return allItems.filter((item) => {
      // 1. Search Query Filter
      const q = searchQuery.toLowerCase().trim();
      if (q) {
        const matchesTitle = item.title.toLowerCase().includes(q);
        const matchesCitation = item.citation.toLowerCase().includes(q);
        const matchesCourt = item.court.toLowerCase().includes(q);
        const matchesRatio = item.ratio.toLowerCase().includes(q);
        const matchesYear = item.year.includes(q);
        const matchesTags = item.tags.some((t) => t.toLowerCase().includes(q));

        if (!matchesTitle && !matchesCitation && !matchesCourt && !matchesRatio && !matchesYear && !matchesTags) {
          return false;
        }
      }

      // 2. Decade Filter
      if (selectedDecade === "all") return true;

      const yr = parseInt(item.year, 10);
      if (selectedDecade === "2020s") return yr >= 2020;
      if (selectedDecade === "2010s") return yr >= 2010 && yr <= 2019;
      if (selectedDecade === "1990s") return yr >= 1990 && yr <= 1999;
      if (selectedDecade === "1980s") return yr >= 1980 && yr <= 1989;
      if (selectedDecade === "1970s") return yr >= 1970 && yr <= 1979;
      if (selectedDecade === "1950s_60s") return yr >= 1950 && yr <= 1969;

      return true;
    });
  }, [allItems, searchQuery, selectedDecade]);

  const handleCopy = (p: DetailedPrecedentItem) => {
    const textToCopy = `${p.title}\nCitation: ${p.citation}\nCourt: ${p.court} (${p.year})\nBench: ${p.bench}\n\nLEGAL RATIO:\n"${p.ratio}"\n\nIMPACT:\n${p.impact || 'N/A'}`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedText(p.citation);
    setTimeout(() => setCopiedText(null), 2200);
  };

  return (
    <div className="max-w-[1350px] mx-auto px-4 sm:px-6 py-10">
      {/* SEARCH BAR & ERA FILTER ROW */}
      <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-200 mb-8 sticky top-20 z-20 backdrop-blur-md bg-white/95">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          {/* Search Box */}
          <div className="relative flex-1">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Case Title (e.g. Kesavananda, Puttaswamy), Citation, Bench, Year (1950-2026), or Ratio..."
              className="w-full pl-11 pr-10 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#c9a84c] focus:bg-white transition-all placeholder:text-gray-400 shadow-inner font-medium text-[#0d1b3e]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-gray-400 hover:text-gray-600 bg-gray-200/60 px-2 py-1 rounded-md"
              >
                Clear
              </button>
            )}
          </div>

          {/* Quick Stats Counter */}
          <div className="flex items-center gap-2 shrink-0 bg-[#0d1b3e] text-[#c9a84c] px-4 py-2.5 rounded-xl border border-[#c9a84c]/30 text-xs font-bold shadow-sm">
            <Award size={14} className="text-[#c9a84c]" />
            <span>
              Showing {filteredPrecedents.length} Apex Rulings (1950–2026)
            </span>
          </div>
        </div>

        {/* Decade Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto scrollbar-none pt-4 border-t border-gray-100 mt-4">
          {decadeOptions.map((opt) => (
            <button
              key={opt.id}
              onClick={() => setSelectedDecade(opt.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap border shrink-0 ${
                selectedDecade === opt.id
                  ? "bg-[#0d1b3e] text-[#c9a84c] border-[#c9a84c] shadow-sm"
                  : "bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100 hover:text-[#0d1b3e]"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* PRECEDENTS GRID */}
      {filteredPrecedents.length === 0 ? (
        <div className="bg-white rounded-2xl p-12 text-center border border-gray-200 shadow-sm">
          <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto text-gray-400 mb-3">
            <Gavel size={28} />
          </div>
          <h3 className="font-serif text-xl font-bold text-[#0d1b3e] mb-1">
            No precedent judgments match your query
          </h3>
          <p className="text-gray-500 text-sm max-w-md mx-auto mb-4">
            We couldn't find any precedent matching "{searchQuery}". Try searching for landmark cases like "Kesavananda Bharati", "Puttaswamy", "Maneka Gandhi", "Arnesh Kumar", or "Basic Structure".
          </p>
          <button
            onClick={() => {
              setSearchQuery("");
              setSelectedDecade("all");
            }}
            className="inline-flex items-center gap-2 bg-[#0d1b3e] text-[#c9a84c] px-4 py-2 rounded-xl text-xs font-bold hover:bg-[#142654] transition-colors"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredPrecedents.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-gray-200 hover:border-[#c9a84c] transition-all hover:shadow-xl p-6 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0d1b3e] via-[#c9a84c] to-[#0d1b3e] opacity-80 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* Header Row with Year & Citation */}
                <div className="flex items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="bg-[#0d1b3e] text-[#c9a84c] font-mono font-bold text-[11px] px-3 py-1 rounded-lg uppercase tracking-wider shadow-sm flex items-center gap-1">
                      <Calendar size={12} />
                      {item.year}
                    </span>
                    <span className="bg-[#c9a84c]/10 text-[#0d1b3e] font-bold text-[11px] px-2.5 py-1 rounded-lg border border-[#c9a84c]/30">
                      {item.bench}
                    </span>
                  </div>

                  <button
                    onClick={() => handleCopy(item)}
                    className="text-gray-400 hover:text-[#0d1b3e] transition-colors p-1.5 rounded-lg hover:bg-gray-100 shrink-0"
                    title="Copy Precedent Citation & Ratio"
                  >
                    {copiedText === item.citation ? (
                      <span className="flex items-center gap-1 text-xs text-green-600 font-bold">
                        <Check size={14} /> Copied!
                      </span>
                    ) : (
                      <Copy size={15} />
                    )}
                  </button>
                </div>

                {/* Case Title */}
                <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#0d1b3e] mb-1 group-hover:text-[#c9a84c] transition-colors leading-snug">
                  {item.title}
                </h3>

                {/* Citation */}
                <p className="font-mono text-xs text-[#c9a84c] font-bold mb-4">
                  {item.citation} — {item.court}
                </p>

                {/* Legal Ratio (Ratio Decidendi) Box */}
                <div className="bg-gradient-to-r from-[#0d1b3e]/5 to-gray-50 border-l-4 border-[#c9a84c] p-4 rounded-r-xl mb-4">
                  <span className="text-[10.5px] font-extrabold text-[#0d1b3e] uppercase tracking-widest block mb-1">
                    BINDING LEGAL RATIO (RATIO DECIDENDI)
                  </span>
                  <p className="text-gray-800 text-[13px] leading-relaxed font-normal">
                    "{item.ratio}"
                  </p>
                </div>

                {/* Impact */}
                {item.impact && (
                  <p className="text-gray-600 text-xs leading-relaxed mb-4 border-t border-gray-100 pt-3">
                    <strong className="text-[#0d1b3e]">Constitutional Impact:</strong> {item.impact}
                  </p>
                )}
              </div>

              {/* Bottom Actions Row */}
              <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 text-xs">
                <div className="flex flex-wrap items-center gap-1.5">
                  {item.tags.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-bold text-gray-500 bg-gray-100 px-2 py-0.5 rounded uppercase"
                    >
                      #{t}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/contact?subject=Precedent%20Consultation%20on%20${encodeURIComponent(item.title)}`}
                  className="inline-flex items-center justify-center gap-1.5 bg-[#0d1b3e] hover:bg-[#c9a84c] text-white hover:text-[#071126] font-bold px-3.5 py-2 rounded-xl transition-all shadow-sm shrink-0"
                >
                  <MessageSquare size={13} />
                  <span>Consult Chamber on Citation</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* BOTTOM CTA BANNER */}
      <div className="mt-16 bg-gradient-to-r from-[#071126] via-[#0d1b3e] to-[#071126] text-white rounded-3xl p-8 sm:p-12 border border-[#c9a84c]/40 shadow-2xl relative overflow-hidden text-center sm:text-left">
        <div className="absolute right-0 top-0 w-96 h-96 bg-[#c9a84c]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-[#c9a84c]/20 border border-[#c9a84c]/40 px-3.5 py-1 rounded-full text-[#c9a84c] text-[11px] font-bold tracking-widest uppercase mb-4">
              <ShieldCheck size={14} />
              <span>SUPREME COURT ADVOCATE-ON-RECORD</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-3 text-white">
              Citing landmark precedents before Supreme Court?
            </h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Advocate Tushar Garg (AOR, Supreme Court of India) provides expert legal research, synopsis preparation, and court advocacy relying on 1950–2026 Apex Benches.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full sm:w-auto">
            <a
              href="tel:+919818000000"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#c9a84c] hover:bg-[#b5953d] text-[#071126] font-bold py-3.5 px-6 rounded-xl transition-colors text-sm uppercase tracking-wider shadow-xl"
            >
              <Phone size={16} />
              <span>Call Chamber Office</span>
            </a>

            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/20 text-white font-semibold py-3.5 px-6 rounded-xl border border-white/30 transition-colors text-sm"
            >
              <span>Book Appointment</span>
              <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
