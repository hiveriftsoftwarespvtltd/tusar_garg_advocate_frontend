export interface BareActSection {
  number: string;
  title: string;
  summary: string;
}

export interface BareAct {
  title: string;
  year: string;
  description: string;
  sections: BareActSection[];
}

export interface Precedent {
  title: string;
  citation: string;
  court: string;
  year: string;
  ratio: string;
  link?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface KeyArea {
  title: string;
  description: string;
  tag: string;
}

export interface CourtStep {
  step: string;
  title: string;
  description: string;
}

export interface LawCategoryDetail {
  slug: string;
  name: string;
  tag: string;
  image: string;
  subtitle: string;
  overview: string;
  stats: {
    actsCount: string;
    sectionsCount: string;
    precedentsCount: string;
    successRate: string;
  };
  keyAreas: KeyArea[];
  bareActs: BareAct[];
  landmarkPrecedents: Precedent[];
  courtProcedure: CourtStep[];
  advocateRole: {
    title: string;
    points: string[];
  };
  faqs: FAQ[];
}

export const LAWS_CATEGORY_DATA: Record<string, LawCategoryDetail> = {
  "constitutional-law": {
    slug: "constitutional-law",
    name: "Constitutional Law & Writ Jurisdiction",
    tag: "Apex Court & Writs",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=1200&q=80",
    subtitle: "Specialized Advocacy before Supreme Court of India & High Courts for Writs, Fundamental Rights & Legislative Validity",
    overview: "Constitutional law forms the bedrock of the Indian legal ecosystem. It governs the relationship between the State and citizens, enforcing Part III Fundamental Rights and upholding the Rule of Law. Practice before the Supreme Court of India under Article 32 and High Courts under Article 226 requires precise drafting of Writ Petitions (Habeas Corpus, Mandamus, Prohibition, Certiorari, and Quo Warranto), Special Leave Petitions (SLPs) under Article 136, and Constitutional Challenges against ultra vires statutes or executive notifications.",
    stats: {
      actsCount: "18+ Acts",
      sectionsCount: "395+ Articles",
      precedentsCount: "1,200+ Rulings",
      successRate: "High Apex Bench Rate"
    },
    keyAreas: [
      {
        title: "Writ Petitions (Art 32 & 226)",
        description: "Enforcement of Fundamental Rights against State action, arbitrary executive orders, or unlawful detentions.",
        tag: "Writs Jurisdiction"
      },
      {
        title: "Special Leave Petitions (SLP)",
        description: "Appellate litigation before Supreme Court under Article 136 challenging High Court final & interlocutory orders.",
        tag: "Supreme Court SLP"
      },
      {
        title: "Constitutional Validity Challenges",
        description: "Impuing central and state legislative enactments for violating basic structure or fundamental rights.",
        tag: "Judicial Review"
      },
      {
        title: "Public Interest Litigation (PIL)",
        description: "Pro bono & civic interest litigation for enforcement of public rights, environmental protection & policy mandates.",
        tag: "PIL Advocacy"
      }
    ],
    bareActs: [
      {
        title: "The Constitution of India",
        year: "1950",
        description: "The supreme law of India establishing national political principles, procedures, powers, rights, and duties of government institutions.",
        sections: [
          { number: "Article 14", title: "Equality Before Law", summary: "Guarantees equality before law and equal protection of laws to all persons within India." },
          { number: "Article 19", title: "Protection of Certain Rights", summary: "Guarantees freedom of speech, assembly, association, movement, residence, and profession." },
          { number: "Article 21", title: "Protection of Life & Personal Liberty", summary: "No person shall be deprived of life or personal liberty except according to procedure established by law." },
          { number: "Article 32", title: "Remedies for Enforcement of Rights", summary: "Right to move Supreme Court by appropriate proceedings for enforcement of Fundamental Rights." },
          { number: "Article 136", title: "Special Leave to Appeal", summary: "Discretionary power of Supreme Court to grant special leave to appeal from any judgment or order." },
          { number: "Article 226", title: "Power of High Courts to Issue Writs", summary: "High Courts empowered to issue writs for enforcement of rights and any other purpose." }
        ]
      },
      {
        title: "Supreme Court Rules",
        year: "2013",
        description: "Statutory framework governing practice, procedure, filing timelines, and registry compliance before the Apex Court.",
        sections: [
          { number: "Order XV", title: "Petitions for Special Leave", summary: "Procedure and essential requirements for filing Special Leave Petitions under Art 136." },
          { number: "Order XXXVIII", title: "Writ Petitions under Article 32", summary: "Detailed guidelines for drafting, serving, and listing Article 32 Petitions." }
        ]
      }
    ],
    landmarkPrecedents: [
      {
        title: "Kesavananda Bharati v. State of Kerala",
        citation: "(1973) 4 SCC 225",
        court: "Supreme Court of India (13-Judge Bench)",
        year: "1973",
        ratio: "Established the Basic Structure Doctrine — Parliament cannot alter or destroy the fundamental framework of the Constitution through amendments."
      },
      {
        title: "Maneka Gandhi v. Union of India",
        citation: "(1978) 1 SCC 248",
        court: "Supreme Court of India (7-Judge Bench)",
        year: "1978",
        ratio: "Procedure under Article 21 must be fair, just, and reasonable, not arbitrary, fanciful, or oppressive."
      },
      {
        title: "K.S. Puttaswamy v. Union of India",
        citation: "(2017) 10 SCC 1",
        court: "Supreme Court of India (9-Judge Bench)",
        year: "2017",
        ratio: "Declared the Right to Privacy as a intrinsic part of Right to Life and Personal Liberty guaranteed under Article 21."
      }
    ],
    courtProcedure: [
      { step: "Step 1", title: "Grounding & Case Assessment", description: "In-depth review of administrative orders, constitutional grounds, and fundamental right infringement." },
      { step: "Step 2", title: "Drafting & Registry Filing", description: "Drafting immaculate petition with Synopsis, List of Dates, Question of Law, and filing in Supreme Court / High Court Registry." },
      { step: "Step 3", title: "Registry Defect Removal", description: "Clearing procedural registry defects within statutory timelines for quick listing." },
      { step: "Step 4", title: "Motion Hearing & Stay Arguments", description: "Arguing prima facie case before Bench for immediate interim stay, status quo, or issuance of notice." }
    ],
    advocateRole: {
      title: "Why Choose Advocate Tushar Garg for Constitutional Litigation?",
      points: [
        "Advocate-on-Record (AOR) designation ensuring direct filing eligibility before Supreme Court of India.",
        "Proven track record in securing urgent stay orders and interim relief against executive actions.",
        "Deep expertise in complex writ drafting, SLPs, Review Petitions, and Curative Petitions.",
        "Comprehensive registry handling from filing to final argument listing."
      ]
    },
    faqs: [
      {
        question: "What is the primary difference between Article 32 and Article 226 Writ Petitions?",
        answer: "Article 32 can be invoked directly in the Supreme Court strictly for the violation of Fundamental Rights (Part III). Article 226 is invoked in the High Court for both Fundamental Rights and any statutory or legal right violation, making its scope broader geographically and substantively."
      },
      {
        question: "When can a Special Leave Petition (SLP) be filed under Article 136?",
        answer: "An SLP can be filed against any judgment, decree, determination, sentence, or order in any cause or matter passed by any Court or Tribunal in India (except Armed Forces Tribunals). It requires establishing a substantial question of law of general public importance or grave injustice."
      },
      {
        question: "What is the limitation period for filing an SLP in the Supreme Court?",
        answer: "As per Supreme Court Rules, an SLP against a High Court order must be filed within 90 days from the date of judgment/order, or 60 days if High Court refuses a certificate of fitness for appeal."
      }
    ]
  },

  "criminal-law": {
    slug: "criminal-law",
    name: "Criminal Law & Trial Defense",
    tag: "Bail & IPC / BNSS",
    image: "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?auto=format&fit=crop&w=1200&q=80",
    subtitle: "Anticipatory & Regular Bail, FIR Quashing, Trial Defense, PMLA & Financial Crime Litigation",
    overview: "Criminal jurisprudence in India has witnessed a monumental transition with the implementation of the Bharatiya Nyaya Sanhita (BNS) 2023, Bharatiya Nagarik Suraksha Sanhita (BNSS) 2023, and Bharatiya Sakshya Adhiniyam (BSA) 2023. Our criminal practice offers rigorous defense across Trial Courts, High Courts, and the Supreme Court, handling regular and anticipatory bail, quashing of FIRs under Sec 482 CrPC / Sec 528 BNSS, PMLA money laundering proceedings, CBI trials, and white-collar fraud.",
    stats: {
      actsCount: "35+ Criminal Acts",
      sectionsCount: "1,248+ Sections",
      precedentsCount: "2,500+ Precedents",
      successRate: "Exceptional Bail Track Record"
    },
    keyAreas: [
      {
        title: "Bail Advocacy (Regular & Anticipatory)",
        description: "Urgent filing and representation for Anticipatory Bail (Sec 438 CrPC / BNSS) and Regular Bail (Sec 439 CrPC / BNSS).",
        tag: "Bail Applications"
      },
      {
        title: "FIR Quashing (Sec 482 / Sec 528 BNSS)",
        description: "Quashing frivolous or malicious FIRs, charge-sheets, and criminal proceedings in High Courts.",
        tag: "FIR Quashing"
      },
      {
        title: "PMLA & White-Collar Defense",
        description: "Specialized defense under Prevention of Money Laundering Act (PMLA 2002), ED summons, and asset attachment.",
        tag: "Financial Crimes"
      },
      {
        title: "Criminal Appeals & Revisions",
        description: "Appellate defense against conviction, sentence suspension applications, and criminal SLPs in Apex Court.",
        tag: "Appellate Defense"
      }
    ],
    bareActs: [
      {
        title: "Bharatiya Nyaya Sanhita (BNS) / IPC",
        year: "2023 / 1860",
        description: "Substantive penal code defining criminal offenses, penalties, and defenses in India.",
        sections: [
          { number: "Section 103 BNS (Sec 302 IPC)", title: "Punishment for Murder", summary: "Defines punishment for murder including death penalty or imprisonment for life." },
          { number: "Section 318 BNS (Sec 420 IPC)", title: "Cheating & Dishonestly Inducing Property", summary: "Penalizes cheating and dishonestly inducing delivery of property." },
          { number: "Section 69 BNS", title: "Sexual Intercourse by Deceitful Means", summary: "Penalizes deceitful promises to marry or false identity to obtain consent." }
        ]
      },
      {
        title: "Bharatiya Nagarik Suraksha Sanhita (BNSS) / CrPC",
        year: "2023 / 1973",
        description: "Procedural framework governing investigation, arrest, bail, trial procedure, and criminal appeals.",
        sections: [
          { number: "Section 482 CrPC / Sec 528 BNSS", title: "Inherent Powers of High Court", summary: "Saves inherent power of High Court to make orders necessary to prevent abuse of process of court." },
          { number: "Section 438 CrPC / Sec 484 BNSS", title: "Direction for Grant of Anticipatory Bail", summary: "Power of High Court or Sessions Court to grant bail to person apprehending arrest." },
          { number: "Section 439 CrPC / Sec 483 BNSS", title: "Special Powers of High Court regarding Bail", summary: "Empowers High Court & Sessions Court to release accused on regular bail." }
        ]
      }
    ],
    landmarkPrecedents: [
      {
        title: "Satender Kumar Antil v. Central Bureau of Investigation",
        citation: "(2022) 10 SCC 51",
        court: "Supreme Court of India",
        year: "2022",
        ratio: "Laid down comprehensive binding guidelines classifying offenses into Category A, B, C, D to streamline bail grants and curtail unnecessary arrests."
      },
      {
        title: "Arnesh Kumar v. State of Bihar",
        citation: "(2014) 8 SCC 273",
        court: "Supreme Court of India",
        year: "2014",
        ratio: "Mandated compliance with Section 41 & 41A CrPC before arrest in offenses punishable with up to 7 years imprisonment."
      },
      {
        title: "Vijay Madanlal Choudhary v. Union of India",
        citation: "2022 SCC OnLine SC 929",
        court: "Supreme Court of India",
        year: "2022",
        ratio: "Upheld validity of twin conditions under Section 45 PMLA and clarified ED powers of search, seizure, and summons."
      }
    ],
    courtProcedure: [
      { step: "Step 1", title: "Urgent FIR Analysis & Apprehension Check", description: "Reviewing FIR contents, sections invoked, arrest threat, and gathering non-custodial evidence." },
      { step: "Step 2", title: "Drafting Urgent Bail Petition", description: "Preparing anticipatory/regular bail petition with strong factual matrix and legal precedents." },
      { step: "Step 3", title: "Court Presentation & Bench Hearing", description: "Arguing before Sessions Judge / High Court for interim protection from arrest or regular bail." },
      { step: "Step 4", title: "Bail Bond Compliance & Release", description: "Furnishing bail bonds, surety verification in trial court, and securing release order." }
    ],
    advocateRole: {
      title: "Criminal Defense Expertise of Advocate Tushar Garg",
      points: [
        "Proactive 24/7 legal response for arrest apprehension and emergency anticipatory bail filings.",
        "Mastery over forensic evidence cross-examination, electronic evidence under BSA Sec 63, and charge-sheet scrutiny.",
        "Proven success in securing FIR quashing under Sec 482 CrPC / Sec 528 BNSS before High Courts.",
        "Aggressive defense in high-stakes PMLA, CBI, Economic Offences Wing (EOW), and SFIO cases."
      ]
    },
    faqs: [
      {
        question: "How quickly can Anticipatory Bail be obtained when an FIR is registered?",
        answer: "Upon reviewing the FIR or notice under Section 35 BNSS (Sec 41A CrPC), an Anticipatory Bail petition can be drafted and filed within 24 to 48 hours in the Sessions Court or High Court, seeking urgent interim protection against arrest."
      },
      {
        question: "What are the grounds on which a High Court quashes an FIR under Sec 482 CrPC / Sec 528 BNSS?",
        answer: "An FIR can be quashed if: (1) allegations even if taken at face value do not disclose a cognizable offense, (2) the complaint is manifestly attended with mala fide motives, (3) parties have amicably settled a personal/matrimonial dispute, or (4) legal bar exists against prosecution."
      },
      {
        question: "Can bail be granted in PMLA Money Laundering cases?",
        answer: "Yes, while Section 45 PMLA imposes strict twin conditions (court satisfied accused is not guilty and unlikely to commit offense while on bail), courts grant bail where detention is prolonged, trial is delayed, or prima facie case is absent."
      }
    ]
  },

  "civil-law": {
    slug: "civil-law",
    name: "Civil Law & Injunction Suits",
    tag: "CPC & Civil Suits",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80",
    subtitle: "Civil Suits, Injunctions, Specific Performance, Execution Proceedings & Civil Appeals",
    overview: "Civil law governs rights, property, obligations, contracts, and monetary recovery between private individuals, businesses, and government bodies. Built around the Code of Civil Procedure (CPC) 1908, Indian Contract Act 1872, and Specific Relief Act 1963, civil litigation demands precise pleadings, interim protection under Order 39, robust evidence submission, and strategic appellate litigation before High Courts and the Supreme Court.",
    stats: {
      actsCount: "28+ Civil Enactments",
      sectionsCount: "1,987+ Sections",
      precedentsCount: "3,100+ Rulings",
      successRate: "High Decree Execution Rate"
    },
    keyAreas: [
      {
        title: "Suits for Injunction & Possession",
        description: "Seeking temporary & permanent injunctions (Order 39 CPC) to protect property title and possession.",
        tag: "Injunction Suits"
      },
      {
        title: "Specific Performance of Contracts",
        description: "Enforcing contractual obligations, property agreements to sell, and damages for breach.",
        tag: "Contract Performance"
      },
      {
        title: "Execution Proceedings (Order 21)",
        description: "Enforcing civil decrees, attachment of judgment debtor assets, and recovery of decreed amounts.",
        tag: "Decree Execution"
      },
      {
        title: "First & Second Civil Appeals",
        description: "Appellate advocacy under Sec 96 & Sec 100 CPC before High Courts on substantial questions of law.",
        tag: "Civil Appeals"
      }
    ],
    bareActs: [
      {
        title: "Code of Civil Procedure (CPC)",
        year: "1908",
        description: "The primary procedural statute regulating civil court proceedings, jurisdiction, pleadings, and decree enforcement.",
        sections: [
          { number: "Section 9", title: "Courts to try all Civil Suits", summary: "Courts have jurisdiction to try all suits of a civil nature excepting suits of which taking is barred." },
          { number: "Order 39 Rules 1 & 2", title: "Temporary Injunctions", summary: "Procedure for granting temporary injunctions to preserve suit property during pendency." },
          { number: "Section 100", title: "Second Appeal", summary: "Appeal to High Court from any decree passed in appeal by subordinate court on substantial question of law." }
        ]
      },
      {
        title: "Indian Contract Act",
        year: "1872",
        description: "Statute governing creation, execution, enforceability, breach, and remedies for commercial contracts.",
        sections: [
          { number: "Section 10", title: "What Agreements are Contracts", summary: "All agreements are contracts if made by free consent of parties competent to contract for lawful consideration." },
          { number: "Section 73", title: "Compensation for Breach of Contract", summary: "Party suffering breach is entitled to compensation for loss or damage caused thereby." }
        ]
      }
    ],
    landmarkPrecedents: [
      {
        title: "Dalpat Kumar v. Prahlad Singh",
        citation: "(1992) 1 SCC 719",
        court: "Supreme Court of India",
        year: "1992",
        ratio: "Reiterated the three mandatory conditions for temporary injunction: prima facie case, balance of convenience, and irreparable loss."
      },
      {
        title: "Morgan Stanley Mutual Fund v. Kartick Das",
        citation: "(1994) 4 SCC 225",
        court: "Supreme Court of India",
        year: "1994",
        ratio: "Settled principles governing ex-parte ad-interim injunctions, emphasizing notice to opposing party except in extreme urgency."
      }
    ],
    courtProcedure: [
      { step: "Step 1", title: "Legal Notice & Cause of Action", description: "Issuing formal statutory legal notice detailing breach, remedies sought, and compliance period." },
      { step: "Step 2", title: "Plaint Drafting & Filing", description: "Drafting comprehensive Plaint with valuation, court fees, interim application, and document file." },
      { step: "Step 3", title: "Summons & Written Statement", description: "Serving defendant, contesting Written Statement, and framing of court issues." },
      { step: "Step 4", title: "Trial Evidence & Arguments", description: "Examining witnesses, cross-examination, final oral arguments, and securing decree." }
    ],
    advocateRole: {
      title: "Civil Litigation Strengths",
      points: [
        "Meticulous drafting of plaints, written statements, and Order 39 interim injunction applications.",
        "Strong focus on securing quick ad-interim protection to prevent property alienation or third-party rights creation.",
        "Robust execution strategy under Order 21 CPC for prompt recovery of decreed funds.",
        "Experienced representation in High Court Second Appeals (Sec 100 CPC) and Civil SLPs."
      ]
    },
    faqs: [
      {
        question: "What are the three pillars for obtaining a temporary civil injunction?",
        answer: "The court must be satisfied of three elements: (1) Prima Facie Case (a strong triable issue), (2) Balance of Convenience in favor of applicant, and (3) Irreparable Loss/Injury that cannot be compensated in monetary terms."
      },
      {
        question: "What is the limitation period for filing a suit for specific performance of contract?",
        answer: "Under Article 54 of the Limitation Act 1963, the limitation period is 3 years from the date fixed for performance, or if no date is fixed, from when plaintiff has notice that performance is refused."
      },
      {
        question: "What happens if a judgment debtor fails to pay after a civil decree is passed?",
        answer: "The decree holder files an Execution Petition under Order 21 CPC. The court can order attachment and sale of debtor's properties, bank account freeze, or civil imprisonment."
      }
    ]
  },

  "corporate-law": {
    slug: "corporate-law",
    name: "Corporate Law & NCLT Disputes",
    tag: "Companies Act & NCLT",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    subtitle: "Oppression & Mismanagement, NCLT/NCLAT Litigation, Board Disputes & Corporate Restructuring",
    overview: "Corporate law handles legal relations, governance, structural changes, and internal disputes within corporate entities. Regulated by the Companies Act 2013, SEBI Regulations, and Competition Act, corporate practice centers on litigation before National Company Law Tribunal (NCLT) and NCLAT for shareholder oppression (Sec 241/242), merger approvals, director disqualification, and commercial contract enforcement.",
    stats: {
      actsCount: "52+ Corporate Enactments",
      sectionsCount: "2,105+ Sections",
      precedentsCount: "1,800+ NCLT Rulings",
      successRate: "High NCLT Success Rate"
    },
    keyAreas: [
      {
        title: "Oppression & Mismanagement (Sec 241/242)",
        description: "Protecting minority shareholders against oppressive majority actions, financial siphonage, or board takeover.",
        tag: "Shareholder Disputes"
      },
      {
        title: "NCLT & NCLAT Litigation",
        description: "Representing companies, founders, investors, and creditors in original petitions and appellate challenges.",
        tag: "NCLT Bench"
      },
      {
        title: "Corporate Restructuring & Mergers",
        description: "Sanctioning Schemes of Arrangement, Mergers, Amalgamations, and Reduction of Capital.",
        tag: "M&A Schemes"
      },
      {
        title: "Directors' Liabilities & SEBI Enforcement",
        description: "Defending directors against disqualification, SEBI adjudication, insider trading allegations, and SAT appeals.",
        tag: "SEBI & SAT Appeals"
      }
    ],
    bareActs: [
      {
        title: "Companies Act",
        year: "2013",
        description: "Primary statute governing incorporation, responsibilities of companies, directors, capital structure, and dissolution.",
        sections: [
          { number: "Section 241", title: "Application for Oppression & Mismanagement", summary: "Shareholders empowered to apply to Tribunal if company affairs are conducted in a manner prejudicial to public interest or company." },
          { number: "Section 242", title: "Powers of Tribunal", summary: "Tribunal may pass orders regulating company affairs, removing directors, or ordering buyout of shares." },
          { number: "Section 421", title: "Appeal to NCLAT", summary: "Any person aggrieved by NCLT order may file appeal to National Company Law Appellate Tribunal within 45 days." }
        ]
      }
    ],
    landmarkPrecedents: [
      {
        title: "Tata Consultancy Services v. Cyrus Investments Pvt Ltd",
        citation: "(2021) 9 SCC 449",
        court: "Supreme Court of India",
        year: "2021",
        ratio: "Clarified scope of Section 241/242, holding that mere lack of confidence between majority & minority shareholders does not constitute oppression unless prejudicial to company interest."
      }
    ],
    courtProcedure: [
      { step: "Step 1", title: "Shareholding & Board Record Audit", description: "Analyzing articles of association (AOA), shareholders agreement (SHA), financial statements, and board resolutions." },
      { step: "Step 2", title: "Drafting NCLT Petition", description: "Preparing comprehensive petition under Sec 241/242 with interim applications for injunction against board meetings." },
      { step: "Step 3", title: "NCLT Mentioning & Interim Relief", description: "Urgent mentioning before President/Bench to obtain interim protection against share dilution or director removal." },
      { step: "Step 4", title: "Final Arguments & NCLAT Appeal", description: "Arguing full petition and filing appeal before NCLAT in New Delhi if required." }
    ],
    advocateRole: {
      title: "Corporate Litigation Services",
      points: [
        "Strategic counsel in high-stakes joint venture and shareholder dispute litigation.",
        "Daily practice before NCLT New Delhi Benches and NCLAT Principal Bench.",
        "Specialized advice on Director Identification Number (DIN) reactivation and MCA compliance.",
        "Cross-border transaction dispute resolution and commercial contract enforcement."
      ]
    },
    faqs: [
      {
        question: "What minimum shareholding is required to file an Oppression & Mismanagement petition under Section 244?",
        answer: "Members holding not less than 10% of issued share capital of company, or not less than 1/10th of total number of members, can file a petition under Section 241. The Tribunal can waive this requirement in exceptional cases."
      },
      {
        question: "What is the time limit for filing an appeal before NCLAT against an NCLT order?",
        answer: "Under Section 421(3) of Companies Act 2013, an appeal must be filed within 45 days from the date copy of order is made available. An extension of up to 45 days can be granted for sufficient cause."
      }
    ]
  },

  "tax-law": {
    slug: "tax-law",
    name: "Tax Law, Income Tax & GST",
    tag: "GST & Income Tax",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80",
    subtitle: "Direct & Indirect Tax Appeals, Income Tax Reopening, GST Demands & High Court Appeals",
    overview: "Taxation law encompasses direct taxes (Income Tax, Corporate Tax, International Taxation) and indirect taxes (GST, Customs, Excise). Legal advocacy involves challenging reassessment notices (Sec 148 IT Act), audit demand orders, Input Tax Credit (ITC) denials, search & seizure actions, and representing clients before ITAT, GST Appellate Authorities, CESTAT, High Courts (Sec 260A), and Supreme Court.",
    stats: {
      actsCount: "25+ Tax Acts",
      sectionsCount: "1,056+ Sections",
      precedentsCount: "2,100+ Tax Rulings",
      successRate: "High ITAT Relief Rate"
    },
    keyAreas: [
      {
        title: "Income Tax Reopening & Appeals (Sec 148 / ITAT)",
        description: "Challenging reassessment notices under Sec 148 and prosecuting appeals before ITAT & High Courts.",
        tag: "Income Tax"
      },
      {
        title: "GST Demand Notices & ITC Claims",
        description: "Defending Show Cause Notices (Sec 73/74 CGST), Input Tax Credit blockages, and GST tribunal appeals.",
        tag: "GST Litigation"
      },
      {
        title: "Search, Seizure & Attachment Defense",
        description: "Seeking relief against provisional attachment of bank accounts, search warrants, and penalty orders.",
        tag: "Provisional Relief"
      },
      {
        title: "High Court Tax Appeals (Sec 260A)",
        description: "Formulating substantial questions of law for tax appeals before High Courts & Apex Court.",
        tag: "HC Tax Appeals"
      }
    ],
    bareActs: [
      {
        title: "Income Tax Act",
        year: "1961",
        description: "Statute regulating direct tax levying, assessment, reassessment, deductions, penalties, and appeals.",
        sections: [
          { number: "Section 148", title: "Issue of Notice where Income Escaped Assessment", summary: "Mandates procedure and reasons to believe before assessing officer reopens past tax assessments." },
          { number: "Section 260A", title: "Appeal to High Court", summary: "An appeal lies to High Court from every order of Appellate Tribunal if High Court is satisfied case involves substantial question of law." }
        ]
      },
      {
        title: "Central Goods & Services Tax (CGST) Act",
        year: "2017",
        description: "Unified indirect tax statute governing supply of goods and services across India.",
        sections: [
          { number: "Section 73 & 74", title: "Determination of Tax Not Paid or Short Paid", summary: "Statutory mechanism to issue Show Cause Notice for tax demands with or without fraud intent." },
          { number: "Section 107", title: "Appeals to Appellate Authority", summary: "First appeal framework against any decision or order passed by an adjudicating authority." }
        ]
      }
    ],
    landmarkPrecedents: [
      {
        title: "Union of India v. Mohit Minerals Pvt Ltd",
        citation: "(2022) 10 SCC 700",
        court: "Supreme Court of India",
        year: "2022",
        ratio: "Held that recommendations of GST Council are not binding on Parliament/States, and struck down GST on ocean freight on CIF imports."
      }
    ],
    courtProcedure: [
      { step: "Step 1", title: "Notice & Demand Scrutiny", description: "Reviewing statutory tax notices, reasons recorded for reopening, and jurisdictional errors." },
      { step: "Step 2", title: "Reply & Objections Filing", description: "Drafting detailed legal objection reply supported by accounting ledgers and judicial precedents." },
      { step: "Step 3", title: "Tribunal Appeal (ITAT / CESTAT)", description: "Filing appeal along with Stay Application against tax demand enforcement." },
      { step: "Step 4", title: "High Court Substantial Question Hearing", description: "Arguing Section 260A appeal before High Court Tax Division Bench." }
    ],
    advocateRole: {
      title: "Tax Practice Capabilities",
      points: [
        "Experienced handling of complex Section 148 reassessment writ challenges before High Courts.",
        "Representation before Income Tax Appellate Tribunal (ITAT) Delhi Benches.",
        "Comprehensive GST dispute representation from Show Cause Notice stage to High Court Writs.",
        "Protection against bank account attachments under GST Section 83."
      ]
    },
    faqs: [
      {
        question: "When can an Income Tax assessment be reopened under Section 148?",
        answer: "Post 2021 amendment, Section 148 notice requires prior inquiry under Section 148A, establishing that Assessing Officer has information suggesting income chargeable to tax has escaped assessment."
      },
      {
        question: "What is the pre-deposit required for filing a GST Appeal under Section 107?",
        answer: "For filing first appeal under Sec 107 CGST, appellant must pay full admitted tax amount plus 10% of remaining disputed tax amount (subject to a maximum cap of ₹25 Crore)."
      }
    ]
  },

  "property-law": {
    slug: "property-law",
    name: "Property Law & Real Estate",
    tag: "Land & Title Suits",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
    subtitle: "Property Title Verification, Partition Suits, RERA Disputes, Adverse Possession & Land Acquisition",
    overview: "Property law governs immoveable property rights, land transfer, title verification, partition, mortgage, lease, and land acquisition compensation. Guided by the Transfer of Property Act 1882, RERA Act 2016, and Land Acquisition Act 2013, our practice assists homebuyers, landowners, and commercial developers in high-value title disputes and appellate litigation.",
    stats: {
      actsCount: "22+ Land Acts",
      sectionsCount: "845+ Sections",
      precedentsCount: "1,500+ Property Precedents",
      successRate: "High Title Resolution Rate"
    },
    keyAreas: [
      {
        title: "Title Verification & Partition Suits",
        description: "Filing suit for partition, declaration of title, revenue record mutation, and ancestral land division.",
        tag: "Partition Suits"
      },
      {
        title: "RERA Homebuyer Litigation",
        description: "Seeking full refund with interest or possession delay compensation under RERA Section 18.",
        tag: "RERA Protection"
      },
      {
        title: "Land Acquisition Fair Compensation",
        description: "Challenging land acquisition awards and claiming enhanced compensation under RFCTLARR Act 2013.",
        tag: "Land Acquisition"
      },
      {
        title: "Adverse Possession & Eviction Suits",
        description: "Defending ownership against encroachment or asserting adverse possession rights under Limitation Act.",
        tag: "Possession Suits"
      }
    ],
    bareActs: [
      {
        title: "Transfer of Property Act",
        year: "1882",
        description: "Statute governing transfer of immoveable property by sale, mortgage, lease, exchange, and gift.",
        sections: [
          { number: "Section 54", title: "Sale Defined", summary: "Sale is a transfer of ownership in exchange for a price paid or promised." },
          { number: "Section 105", title: "Lease Defined", summary: "Lease of immoveable property is a transfer of a right to enjoy such property for a given time." }
        ]
      },
      {
        title: "Real Estate (Regulation and Development) Act (RERA)",
        year: "2016",
        description: "Statute protecting homebuyer interests, ensuring timely delivery, and regulating real estate sector.",
        sections: [
          { number: "Section 18", title: "Return of Amount & Compensation", summary: "If promoter fails to complete or give possession, buyer is entitled to full refund with interest or delay interest." }
        ]
      }
    ],
    landmarkPrecedents: [
      {
        title: "Ravinder Kaur Grewal v. Manjit Kaur",
        citation: "(2019) 8 SCC 729",
        court: "Supreme Court of India",
        year: "2019",
        ratio: "Held that a person who has perfected title by adverse possession can file a suit as plaintiff for declaration of title and injunction."
      }
    ],
    courtProcedure: [
      { step: "Step 1", title: "Revenue Search & Title Chain Due Diligence", description: "Inspecting 30-year revenue records (Khasra/Khatauni/Registry) to verify unencumbered title." },
      { step: "Step 2", title: "Pre-Litigation Notice / RERA Complaint", description: "Issuing formal statutory notice or filing RERA complaint online." },
      { step: "Step 3", title: "Civil Suit for Declaration & Injunction", description: "Filing suit before Civil Judge / District Court along with Order 39 application." },
      { step: "Step 4", title: "Local Commissioner Site Inspection", description: "Securing court-appointed LC to demarcate boundaries and record site possession." }
    ],
    advocateRole: {
      title: "Property & Real Estate Practice",
      points: [
        "In-depth experience in Delhi-NCR property title searches, DDA, HUDA, and revenue land disputes.",
        "Aggressive representation for homebuyers before RERA Authority and REAT Appellate Tribunals.",
        "Successful track record in obtaining high court stay orders against illegal municipal demolitions.",
        "Representation in Land Acquisition reference petitions for enhanced market compensation."
      ]
    },
    faqs: [
      {
        question: "Can a homebuyer approach both RERA and NCLT against a defaulting builder?",
        answer: "Yes, Supreme Court in Pioneer Urban Land case held that homebuyers have concurrent remedies under RERA, Consumer Protection Act, and IBC (as financial creditors)."
      },
      {
        question: "How long does a person need to occupy land to claim title by Adverse Possession?",
        answer: "Under Article 65 of Limitation Act 1963, continuous, uninterrupted, peaceful, and open possession adverse to the true owner for 12 years (30 years for government land) is required."
      }
    ]
  },

  "family-law": {
    slug: "family-law",
    name: "Family Law & Matrimonial Disputes",
    tag: "Hindu & Muslim Law",
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1200&q=80",
    subtitle: "Divorce Proceedings, Child Custody, Maintenance (Sec 125), Domestic Violence & Succession",
    overview: "Family law manages personal and legal relationships including marriage, divorce, child custody, alimony, domestic violence, and succession across Hindu, Muslim, Christian, and civil personal laws. Our practice delivers compassionate yet resolute legal defense in Family Courts, High Courts, and the Supreme Court.",
    stats: {
      actsCount: "15+ Personal Law Acts",
      sectionsCount: "532+ Sections",
      precedentsCount: "1,900+ Matrimonial Cases",
      successRate: "Empathetic Settlement Focus"
    },
    keyAreas: [
      {
        title: "Divorce Petitions (Mutual & Contested)",
        description: "Filing mutual consent divorce (Sec 13B HMA) or contested divorce on grounds of cruelty, desertion, or adultery.",
        tag: "Divorce Proceedings"
      },
      {
        title: "Maintenance & Alimony Claims",
        description: "Securing interim maintenance under Sec 125 CrPC / BNSS, Sec 24 HMA, and permanent alimony guidelines.",
        tag: "Alimony & Maintenance"
      },
      {
        title: "Domestic Violence Act (DV Act 2005)",
        description: "Seeking residence orders, protection orders, and monetary relief under Protection of Women from DV Act.",
        tag: "DV Act Relief"
      },
      {
        title: "Child Custody & Guardianship",
        description: "Fighting for child custody, visitation schedules, and guardianship rights in Guardians and Wards Act petitions.",
        tag: "Child Custody"
      }
    ],
    bareActs: [
      {
        title: "Hindu Marriage Act",
        year: "1955",
        description: "Statute governing conditions of valid Hindu marriage, restitution of conjugal rights, judicial separation, and divorce.",
        sections: [
          { number: "Section 13", title: "Divorce", summary: "Lists statutory grounds for contested divorce including cruelty, desertion, conversion, unsound mind." },
          { number: "Section 13B", title: "Divorce by Mutual Consent", summary: "Allows joint petition for divorce after living separately for 1 year and mutually agreeing to dissolve marriage." },
          { number: "Section 24", title: "Maintenance pendente lite", summary: "Empowers court to order respondent to pay applicant expenses of proceeding and monthly maintenance during suit." }
        ]
      }
    ],
    landmarkPrecedents: [
      {
        title: "Rajnesh v. Neha",
        citation: "(2021) 2 SCC 324",
        court: "Supreme Court of India",
        year: "2021",
        ratio: "Laid down mandatory comprehensive guidelines and standardized Assets & Liabilities Affidavit format for determining maintenance in all family proceedings."
      },
      {
        title: "Vineeta Sharma v. Rakesh Sharma",
        citation: "(2020) 9 SCC 1",
        court: "Supreme Court of India",
        year: "2020",
        ratio: "Held that daughters have equal coparcenary rights in Hindu Undivided Family (HUF) property by birth, regardless of whether father was alive on 2005 amendment date."
      }
    ],
    courtProcedure: [
      { step: "Step 1", title: "Counseling & Dispute Mediation", description: "Exploring mandatory court mediation center settlement or pre-litigation mutual resolution." },
      { step: "Step 2", title: "Petition Drafting & Assets Affidavit", description: "Drafting petition along with mandated Assets & Liabilities Affidavit under Rajnesh v. Neha." },
      { step: "Step 3", title: "Interim Maintenance Hearing", description: "Arguing interim maintenance application before Family Court Judge." },
      { step: "Step 4", title: "Evidence & Final Decree", description: "Conducting trial, cross-examination, and obtaining final divorce or custody decree." }
    ],
    advocateRole: {
      title: "Family Law Practice",
      points: [
        "Balanced representation prioritizing amicable settlement through mediation while safeguarding client rights.",
        "Expertise in securing urgent interim maintenance orders for wives and minor children.",
        "Handling complex cross-border international child custody and NRI divorce disputes.",
        "Enforcing daughter coparcenary partition rights under Hindu Succession Act."
      ]
    },
    faqs: [
      {
        question: "Can the 6-month statutory cooling-off period for Mutual Consent Divorce be waived?",
        answer: "Yes, Supreme Court in Amardeep Singh case held that the 6-month period under Section 13B(2) HMA is directory and can be waived by court if all conciliation efforts failed and long separation exists."
      },
      {
        question: "How is maintenance calculated by courts?",
        answer: "Courts evaluate husband's income, status, dependent liabilities, wife's education/earning capacity, and standard of living enjoyed during marriage, following Rajnesh v. Neha affidavit disclosures."
      }
    ]
  },

  "labour-law": {
    slug: "labour-law",
    name: "Labour Law & CAT Service Matters",
    tag: "Industrial & CAT",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1200&q=80",
    subtitle: "Central Administrative Tribunal (CAT), Service Writs, Illegal Termination & Employment Compliance",
    overview: "Labour and service jurisprudence regulates relations between employers, employees, trade unions, and central/state government authorities. Our service law practice centers on representing civil servants, central government employees, and PSU staff before Central Administrative Tribunal (CAT) Benches, High Courts, and Supreme Court.",
    stats: {
      actsCount: "29+ Labour Codes",
      sectionsCount: "1,126+ Sections",
      precedentsCount: "1,400+ CAT Decisions",
      successRate: "High Service Reinstatement Rate"
    },
    keyAreas: [
      {
        title: "CAT Original Applications (OA)",
        description: "Filing OAs before Central Administrative Tribunal for government recruitment, seniority, promotion & pension.",
        tag: "CAT Litigation"
      },
      {
        title: "Wrongful Termination & Misconduct Defense",
        description: "Challenging illegal termination, departmental inquiries, suspension orders, and penalty charges.",
        tag: "Service Defense"
      },
      {
        title: "High Court Service Writ Petitions",
        description: "Appealing CAT orders before High Court Division Bench under Article 226/227 writ jurisdiction.",
        tag: "Service Writs"
      },
      {
        title: "EPFO, ESIC & Gratuity Litigation",
        description: "Representing companies and workmen in statutory compliance, provident fund damages, and gratuity claims.",
        tag: "PF & Gratuity"
      }
    ],
    bareActs: [
      {
        title: "Administrative Tribunals Act",
        year: "1985",
        description: "Act providing for adjudication of disputes regarding recruitment and conditions of service of government servants.",
        sections: [
          { number: "Section 19", title: "Applications to Tribunals", summary: "Person aggrieved by service order may make application to Tribunal for redressal of grievance." }
        ]
      },
      {
        title: "Industrial Disputes Act",
        year: "1947",
        description: "Statute providing mechanism for investigation and settlement of industrial disputes.",
        sections: [
          { number: "Section 2A", title: "Dismissal of Individual Workman", summary: "Dismissal or termination of individual workman deemed to be an industrial dispute." }
        ]
      }
    ],
    landmarkPrecedents: [
      {
        title: "State of Karnataka v. Umadevi",
        citation: "(2006) 4 SCC 1",
        court: "Supreme Court of India (5-Judge Bench)",
        year: "2006",
        ratio: "Settled principles against regularisation of back-door or temporary appointments in public employment without open competition."
      }
    ],
    courtProcedure: [
      { step: "Step 1", title: "Departmental Representation", description: "Filing statutory departmental appeal or representation against administrative order." },
      { step: "Step 2", title: "Drafting CAT Original Application", description: "Preparing OA with complete service record, impugned orders, and grounds of natural justice violation." },
      { step: "Step 3", title: "CAT Bench Hearing & Stay", description: "Arguing OA before CAT Bench for interim stay on transfer, suspension, or penalty." },
      { step: "Step 4", title: "High Court Writ Challenge", description: "Filing LPA / Writ Petition in High Court if CAT decision requires challenge." }
    ],
    advocateRole: {
      title: "Service & Labour Law Strengths",
      points: [
        "Daily appearance before CAT Principal Bench New Delhi in central government employee disputes.",
        "Deep familiarity with CCS (CCA) Rules, departmental inquiry procedures, and natural justice principles.",
        "Successful track record in securing stay orders against arbitrary government employee transfers.",
        "Counsel for corporate employers on compliance under new 4 Labour Codes."
      ]
    },
    faqs: [
      {
        question: "Who can file an Original Application before Central Administrative Tribunal (CAT)?",
        answer: "Any person appointed to any civil service of the Union or all-India service or holding any civil post under the Union can file an OA before CAT after exhausting internal departmental remedies."
      },
      {
        question: "What is the time limit for filing an application before CAT under Section 21?",
        answer: "An application must be filed within 1 year from date on which final administrative order was passed, or 6 months after filing departmental appeal if no order was passed."
      }
    ]
  },

  "arbitration-law": {
    slug: "arbitration-law",
    name: "Arbitration & Commercial ADR",
    tag: "ADR & Conciliation",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    subtitle: "Commercial Arbitration, Section 9 Interim Relief, Sec 11 Arbitrator Appointment & Sec 34 Challenges",
    overview: "Arbitration offers an expedited, confidential mechanism to resolve commercial disputes outside traditional courtroom delays. Governed by the Arbitration and Conciliation Act 1996, arbitration practice encompasses court applications for interim relief (Sec 9), appointment of arbitrators (Sec 11), tribunal interim measures (Sec 17), and setting aside awards under Section 34.",
    stats: {
      actsCount: "14+ Arbitration Rules",
      sectionsCount: "356+ Sections",
      precedentsCount: "1,600+ Arbitral Precedents",
      successRate: "High Award Enforcement Rate"
    },
    keyAreas: [
      {
        title: "Court Interim Measures (Section 9)",
        description: "Securing emergency court injunctions, asset freezing, and preservation of property before or during arbitration.",
        tag: "Sec 9 Interim Injunction"
      },
      {
        title: "Appointment of Arbitrators (Section 11)",
        description: "Filing petitions in High Court / Supreme Court for appointment of independent arbitrator when parties deadlock.",
        tag: "Sec 11 Appointment"
      },
      {
        title: "Challenge to Arbitral Awards (Section 34)",
        description: "Challenging arbitral awards on grounds of patent illegality, breach of public policy, or lack of notice.",
        tag: "Sec 34 Challenge"
      },
      {
        title: "Enforcement of Domestic & Foreign Awards",
        description: "Executing domestic awards under Sec 36 and enforcing foreign arbitral awards under Part II (New York Convention).",
        tag: "Award Enforcement"
      }
    ],
    bareActs: [
      {
        title: "Arbitration and Conciliation Act",
        year: "1996",
        description: "Consolidated statute governing domestic arbitration, international commercial arbitration, and conciliation enforcement.",
        sections: [
          { number: "Section 9", title: "Interim Measures by Court", summary: "Party may apply to Court before, during, or after arbitral proceedings for preservation or interim injunction." },
          { number: "Section 11", title: "Appointment of Arbitrators", summary: "High Court or Supreme Court empowered to appoint arbitrator upon failure of agreed appointment procedure." },
          { number: "Section 34", title: "Application for Setting Aside Arbitral Award", summary: "Recourse against arbitral award may be made only by application for setting aside on narrow statutory grounds." }
        ]
      }
    ],
    landmarkPrecedents: [
      {
        title: "Perkins Eastman Architects DPC v. HSCC (India) Ltd",
        citation: "(2020) 20 SCC 760",
        court: "Supreme Court of India",
        year: "2020",
        ratio: "Held that a person who has an interest in the outcome of dispute cannot unilaterally appoint a sole arbitrator."
      },
      {
        title: "Bharat Aluminium Co. (BALCO) v. Kaiser Aluminium Technical Services",
        citation: "(2012) 9 SCC 552",
        court: "Supreme Court of India (5-Judge Bench)",
        year: "2012",
        ratio: "Adopted territoriality principle, holding Indian courts cannot exercise supervisory jurisdiction over foreign-seated arbitrations."
      }
    ],
    courtProcedure: [
      { step: "Step 1", title: "Invocation Notice under Section 21", description: "Issuing formal notice invoking arbitration clause and proposing sole arbitrator." },
      { step: "Step 2", title: "Section 9 Urgent Court Application", description: "Filing Sec 9 petition in High Court Commercial Division for urgent protection." },
      { step: "Step 3", title: "Section 11 High Court Appointment", description: "Filing Sec 11 petition if opponent fails to concur on arbitrator within 30 days." },
      { step: "Step 4", title: "Tribunal Claims & Award Execution", description: "Filing Statement of Claim before Sole Arbitrator / Tribunal and enforcing final award." }
    ],
    advocateRole: {
      title: "Arbitration Practice Strengths",
      points: [
        "Proven expertise in securing immediate ex-parte Section 9 interim orders from Delhi High Court.",
        "Representation in high-value infrastructure, construction, corporate, and commercial arbitrations.",
        "Successful prosecution of Sec 34 challenge petitions against patently illegal arbitral awards.",
        "Fast-track enforcement of awards as civil decrees."
      ]
    },
    faqs: [
      {
        question: "Can a company unilaterally nominate its own officer as sole arbitrator?",
        answer: "No, Supreme Court in Perkins Eastman case held that unilateral appointment by an interested party is illegal and void ab initio under Section 12(5) read with VIIth Schedule."
      },
      {
        question: "What is the statutory deadline for completing domestic arbitration under Section 29A?",
        answer: "An arbitral award must be passed within 12 months from completion of pleadings. Parties can extend by consent for 6 months, beyond which High Court extension is mandatory."
      }
    ]
  },

  "insolvency-bankruptcy": {
    slug: "insolvency-bankruptcy",
    name: "Insolvency & Bankruptcy (IBC)",
    tag: "IBC 2016",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80",
    subtitle: "Corporate Insolvency Resolution (CIRP), Sec 7 & 9 Petitions, NCLAT & Moratorium Defense",
    overview: "The Insolvency and Bankruptcy Code (IBC) 2016 provides a time-bound statutory framework for resolving corporate insolvency, protecting creditor value, and reorganizing distressed companies. Our practice represents Financial Creditors, Operational Creditors, Resolution Applicants, and Corporate Debtors before NCLT, NCLAT, and Supreme Court.",
    stats: {
      actsCount: "10+ Insolvency Rules",
      sectionsCount: "387+ Sections",
      precedentsCount: "1,700+ IBC Precedents",
      successRate: "High Debt Resolution Rate"
    },
    keyAreas: [
      {
        title: "Financial Creditor CIRP Petitions (Sec 7)",
        description: "Initiating Corporate Insolvency Resolution Process on behalf of Banks, NBFCs & financial investors.",
        tag: "Sec 7 Insolvency"
      },
      {
        title: "Operational Creditor Claims (Sec 9)",
        description: "Issuing Section 8 Demand Notice and filing Sec 9 petitions for unpaid trade vendors & suppliers.",
        tag: "Sec 9 Operational Debt"
      },
      {
        title: "Moratorium Protection & Resolution Plans",
        description: "Enforcing Section 14 asset moratorium and challenging/approving Resolution Plans before NCLT.",
        tag: "Moratorium & Resolution"
      },
      {
        title: "NCLAT & Supreme Court Insolvency Appeals",
        description: "Appellate defense challenging admission orders, liquidations, and Committee of Creditors decisions.",
        tag: "Insolvency Appeals"
      }
    ],
    bareActs: [
      {
        title: "Insolvency and Bankruptcy Code (IBC)",
        year: "2016",
        description: "Consolidated statute governing insolvency, liquidation, and bankruptcy of corporate entities and individuals.",
        sections: [
          { number: "Section 7", title: "Initiation of CIRP by Financial Creditor", summary: "Financial creditor may file application for initiating CIRP against corporate debtor when default occurs." },
          { number: "Section 9", title: "Initiation of CIRP by Operational Creditor", summary: "Operational creditor may file application after expiry of 10 days from delivery of Section 8 demand notice." },
          { number: "Section 14", title: "Moratorium", summary: "Tribunal shall declare moratorium prohibiting institution of suits, transfer of assets, or enforcement of security interest." }
        ]
      }
    ],
    landmarkPrecedents: [
      {
        title: "Swiss Ribbons Pvt Ltd v. Union of India",
        citation: "(2019) 4 SCC 1",
        court: "Supreme Court of India",
        year: "2019",
        ratio: "Upheld the constitutional validity of IBC in its entirety, highlighting that IBC is a beneficial resolution code, not a mere recovery statute."
      },
      {
        title: "Committee of Creditors of Essar Steel v. Satish Kumar Gupta",
        citation: "(2020) 8 SCC 531",
        court: "Supreme Court of India",
        year: "2020",
        ratio: "Reaffirmed commercial wisdom of Committee of Creditors (CoC) in approving resolution plans and distributing funds."
      }
    ],
    courtProcedure: [
      { step: "Step 1", title: "Default & Statutory Demand Notice", description: "Issuing statutory Section 8 Demand Notice specifying invoice details and 10-day payment cure period." },
      { step: "Step 2", title: "Drafting NCLT CIRP Application", description: "Drafting Form 1 / Form 5 petition with bank record proof of default." },
      { step: "Step 3", title: "NCLT Admission & IRP Appointment", description: "Arguing default before NCLT Bench to secure admission and declaration of Section 14 Moratorium." },
      { step: "Step 4", title: "Claim Submission & CoC Representation", description: "Filing Form B / Form C claims before Interim Resolution Professional (IRP)." }
    ],
    advocateRole: {
      title: "IBC & Debt Recovery Expertise",
      points: [
        "Active advocacy before NCLT New Delhi Benches (I to VI) and NCLAT Appellate Tribunal.",
        "Successful recovery of trade debts for operational creditors prior to NCLT admission.",
        "Counsel for corporate debtors in establishing genuine pre-existing disputes to defeat Sec 9 petitions.",
        "Representation in DRT & DRAT under SARFAESI Act for bank recovery actions."
      ]
    },
    faqs: [
      {
        question: "What is the threshold default amount required to initiate IBC proceedings?",
        answer: "Post Ministry of Corporate Affairs notification, the minimum default threshold for initiating CIRP under Sections 7, 9, or 10 is ₹1 Crore."
      },
      {
        question: "Can an Operational Creditor petition be dismissed if pre-existing dispute exists?",
        answer: "Yes, under Section 9(5)(ii)(d) IBC, if corporate debtor produces evidence of a genuine pre-existing dispute prior to receipt of Section 8 notice, NCLT must reject the application."
      }
    ]
  },

  "consumer-law": {
    slug: "consumer-law",
    name: "Consumer Protection & NCDRC",
    tag: "Consumer Protection",
    image: "https://images.unsplash.com/photo-1556742049-0a670f4a4591?auto=format&fit=crop&w=1200&q=80",
    subtitle: "Consumer Disputes, Medical Negligence, Builder Deficiencies & NCDRC Appeals",
    overview: "Consumer Protection Act 2019 safeguards consumer rights against defective goods, deficient services, medical malpractice, misleading advertisements, and e-commerce fraud. Practice spans District Consumer Commissions, State Commissions (SDRC), and National Consumer Disputes Redressal Commission (NCDRC) in New Delhi.",
    stats: {
      actsCount: "8+ Consumer Rules",
      sectionsCount: "263+ Sections",
      precedentsCount: "1,300+ Consumer Precedents",
      successRate: "High Compensation Award Rate"
    },
    keyAreas: [
      {
        title: "NCDRC Original Complaints & Appeals",
        description: "Representing consumers and builder victims in NCDRC New Delhi (Pecuniary jurisdiction above ₹2 Crore).",
        tag: "NCDRC Bench"
      },
      {
        title: "Medical Negligence Compensation",
        description: "Filing high-value compensation claims against hospitals & doctors for surgical negligence and malpractice.",
        tag: "Medical Negligence"
      },
      {
        title: "Real Estate Service Deficiency",
        description: "Claiming interest refund and possession delay compensation against real estate developers.",
        tag: "Builder Deficiency"
      },
      {
        title: "Product Liability & E-Commerce Fraud",
        description: "Holding manufacturers, sellers, and e-commerce portals liable under new Product Liability provisions.",
        tag: "Product Liability"
      }
    ],
    bareActs: [
      {
        title: "Consumer Protection Act",
        year: "2019",
        description: "Statute protecting consumer rights, establishing Central Consumer Protection Authority (CCPA), and three-tier dispute redresal.",
        sections: [
          { number: "Section 34", title: "District Commission Jurisdiction", summary: "Jurisdiction to entertain complaints where value of goods or services paid does not exceed ₹50 Lakh." },
          { number: "Section 47", title: "State Commission Jurisdiction", summary: "Jurisdiction to entertain complaints where value paid exceeds ₹50 Lakh but does not exceed ₹2 Crore." },
          { number: "Section 58", title: "National Commission (NCDRC) Jurisdiction", summary: "Jurisdiction to entertain complaints where value paid exceeds ₹2 Crore." }
        ]
      }
    ],
    landmarkPrecedents: [
      {
        title: "Spring Meadows Hospital v. Harjot Ahluwalia",
        citation: "(1998) 4 SCC 39",
        court: "Supreme Court of India",
        year: "1998",
        ratio: "Settled hospital liability for medical negligence of doctors and nurses, awarding compensation to both patient and parents for mental agony."
      }
    ],
    courtProcedure: [
      { step: "Step 1", title: "Deficiency Notice & Record Compilation", description: "Sending statutory legal notice demanding rectification or refund within 15 days." },
      { step: "Step 2", title: "Consumer Complaint Filing", description: "Filing complaint with supporting bills, expert medical reports, or builder agreements." },
      { step: "Step 3", title: "Commission Hearing & Evidence", description: "Arguing admission, filing evidence affidavits, and contesting written version." },
      { step: "Step 4", title: "Final Order & Execution (Sec 71/72)", description: "Securing compensation award and filing execution petition if unpaid." }
    ],
    advocateRole: {
      title: "Consumer Law Strengths",
      points: [
        "Regular appearance before NCDRC Principal Bench at Upadhyay Block, Complex, New Delhi.",
        "Successful prosecution of class action consumer complaints for groups of homebuyers.",
        "Specialized handling of medical negligence cases requiring forensic expert testimony.",
        "Enforcement of consumer commission orders through Section 71/72 execution proceedings."
      ]
    },
    faqs: [
      {
        question: "What are the new pecuniary jurisdiction limits under Consumer Protection Act 2019?",
        answer: "District Commission entertains claims up to ₹50 Lakh; State Commission from ₹50 Lakh to ₹2 Crore; National Commission (NCDRC) above ₹2 Crore (based on value paid for goods/services)."
      },
      {
        question: "What is the limitation period for filing a consumer complaint?",
        answer: "Under Section 69 CPA 2019, a complaint must be filed within 2 years from the date on which cause of action arose."
      }
    ]
  },

  "environment-law": {
    slug: "environment-law",
    name: "Environment Law & NGT Benches",
    tag: "NGT & Forest Acts",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
    subtitle: "National Green Tribunal (NGT), Environmental Clearances, Pollution Claims & Forest Writs",
    overview: "Environmental jurisprudence ensures sustainable development, enforcement of the Precautionary Principle, and Polluter Pays Doctrine. Practice before the National Green Tribunal (NGT) Principal Bench New Delhi involves challenging Environmental Clearances (EC), industrial pollution orders, forest encroachments, and CRZ violations.",
    stats: {
      actsCount: "12+ Environmental Acts",
      sectionsCount: "421+ Sections",
      precedentsCount: "1,100+ NGT Rulings",
      successRate: "High Environmental Compliance"
    },
    keyAreas: [
      {
        title: "NGT Original Applications (Sec 14 & 15)",
        description: "Filing OAs before NGT for environmental damage restoration, compensation, and illegal industrial discharge.",
        tag: "NGT Litigation"
      },
      {
        title: "Environmental Clearance (EC) Appeals",
        description: "Challenging or defending Environmental Clearances granted by MoEFCC / SEIAA under EIA 2006 Notification.",
        tag: "EIA Clearances"
      },
      {
        title: "Pollution Control Board Orders Defense",
        description: "Defending industries against closure directions and environmental compensation levies by CPCB / SPCB.",
        tag: "CPCB / SPCB Defense"
      },
      {
        title: "Forest & Coastal Zone Protection",
        description: "Litigating Forest Conservation Act violations, tree felling permissions, and CRZ clearance challenges.",
        tag: "CRZ & Forest Rules"
      }
    ],
    bareActs: [
      {
        title: "National Green Tribunal Act",
        year: "2010",
        description: "Specialized tribunal act for effective and expeditious disposal of cases relating to environmental protection.",
        sections: [
          { number: "Section 14", title: "Tribunal Jurisdiction over Civil Cases", summary: "Tribunal has jurisdiction over all civil cases where substantial question relating to environment is involved." },
          { number: "Section 15", title: "Relief, Compensation & Restitution", summary: "Tribunal may order relief & compensation to victims of pollution and ordering restitution of environment." },
          { number: "Section 16", title: "Appellate Jurisdiction", summary: "Person aggrieved by EC grant or SPCB direction may file appeal to NGT within 30 days." }
        ]
      }
    ],
    landmarkPrecedents: [
      {
        title: "M.C. Mehta v. Union of India (Oleum Gas Leak)",
        citation: "(1987) 1 SCC 395",
        court: "Supreme Court of India",
        year: "1987",
        ratio: "Evolved the Principle of Absolute Liability for hazardous and inherently dangerous industrial activities."
      },
      {
        title: "Vellore Citizens Welfare Forum v. Union of India",
        citation: "(1996) 5 SCC 647",
        court: "Supreme Court of India",
        year: "1996",
        ratio: "Incorporated Precautionary Principle and Polluter Pays Principle into environmental law of India."
      }
    ],
    courtProcedure: [
      { step: "Step 1", title: "Environmental Audit & Inspection", description: "Gathering satellite imagery, PCB inspection reports, and EIA study documents." },
      { step: "Step 2", title: "Drafting NGT Application / Appeal", description: "Preparing petition under Sec 14/15/16 with supporting scientific expert evidence." },
      { step: "Step 3", title: "NGT Mentioning & Expert Committee", description: "Arguing before NGT Bench; Tribunal often constitutes Joint Committees for ground inspection." },
      { step: "Step 4", title: "Final Hearing & Restitution Order", description: "Securing stay, environment compensation order, or dismissal of frivolous objections." }
    ],
    advocateRole: {
      title: "NGT & Environmental Law Strengths",
      points: [
        "Regular representation before NGT Principal Bench at Faridkot House, Copernicus Marg, New Delhi.",
        "Defense of industrial units against arbitrary CPCB/SPCB environmental compensation penalties.",
        "Challenging flawed Environmental Impact Assessment (EIA) reports before NGT Appellate Bench.",
        "Direct Supreme Court appeals under Section 22 of NGT Act."
      ]
    },
    faqs: [
      {
        question: "What is the limitation period for filing an appeal before NGT against an Environmental Clearance?",
        answer: "Under Section 16 NGT Act, an appeal must be filed within 30 days from date EC order is communicated. NGT can condone delay up to a maximum of 60 additional days."
      },
      {
        question: "Can an order passed by NGT be directly challenged in the Supreme Court?",
        answer: "Yes, under Section 22 NGT Act 2010, any person aggrieved by any award, decision or order of NGT may file an appeal to the Supreme Court within 90 days."
      }
    ]
  }
};

/**
 * Fallback generator for dynamically created backend categories
 */
export function getCategoryDetail(slug: string, backendCat?: any): LawCategoryDetail {
  const normalizedSlug = slug.toLowerCase().replace("-and-", "-").trim();
  
  let baseDetail = LAWS_CATEGORY_DATA[normalizedSlug];

  if (!baseDetail) {
    for (const key of Object.keys(LAWS_CATEGORY_DATA)) {
      if (key.includes(normalizedSlug) || normalizedSlug.includes(key)) {
        baseDetail = LAWS_CATEGORY_DATA[key];
        break;
      }
    }
  }

  const categoryName = typeof backendCat === 'string' ? backendCat : backendCat?.name;
  const categoryTitle = categoryName || slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  if (!baseDetail) {
    baseDetail = {
      slug: normalizedSlug,
      name: `${categoryTitle}`,
      tag: backendCat?.tag || "Legal Practice Area",
      image: backendCat?.image || "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=1200&q=80",
      subtitle: backendCat?.subtitle || `Dedicated Legal Practice & Precedents in ${categoryTitle} before High Courts & Supreme Court of India`,
      overview: backendCat?.overview || backendCat?.desc || `${categoryTitle} encompasses statutory rights, regulatory compliance, legal disputes, and appellate practice. Advocate Tushar Garg (Advocate-on-Record, Supreme Court of India) provides end-to-end advisory, drafting, trial defense, and appellate advocacy under ${categoryTitle}.`,
      stats: {
        actsCount: backendCat?.acts || "10+ Enactments",
        sectionsCount: backendCat?.sections || "500+ Sections",
        precedentsCount: "800+ Rulings",
        successRate: "High Client Success"
      },
      keyAreas: Array.isArray(backendCat?.keyAreas) && backendCat.keyAreas.length > 0 ? backendCat.keyAreas : [
        {
          title: `${categoryTitle} Statutory Advisory`,
          description: `Comprehensive advice on statutory compliance, rights, and regulatory mandates under ${categoryTitle}.`,
          tag: "Legal Advisory"
        },
        {
          title: "Litigation & Dispute Defense",
          description: `Drafting plaints, petitions, and contesting disputes before original courts and tribunals.`,
          tag: "Court Litigation"
        },
        {
          title: "Interim Protection & Injunctions",
          description: "Securing urgent stay orders and interim relief to preserve client rights.",
          tag: "Interim Relief"
        },
        {
          title: "Appellate & Supreme Court Practice",
          description: "Appellate advocacy before High Courts and Supreme Court of India.",
          tag: "Appellate Practice"
        }
      ],
      bareActs: Array.isArray(backendCat?.bareActs) && backendCat.bareActs.length > 0 ? backendCat.bareActs : [
        {
          title: `Primary Statute on ${categoryTitle}`,
          year: "2023",
          description: `Main bare act governing rights, duties, procedures, and offenses under ${categoryTitle}.`,
          sections: [
            { number: "Section 1", title: "Short Title & Commencement", summary: "Defines territorial applicability and operational scope of the Act." },
            { number: "Section 10", title: "Statutory Enforcement", summary: "Outlines powers of authorities and courts for statutory enforcement." }
          ]
        }
      ],
      landmarkPrecedents: Array.isArray(backendCat?.landmarkPrecedents) && backendCat.landmarkPrecedents.length > 0 ? backendCat.landmarkPrecedents : [
        {
          title: `Landmark Judgment on ${categoryTitle}`,
          citation: "2022 SCC OnLine SC 100",
          court: "Supreme Court of India",
          year: "2022",
          ratio: `Established key legal principles and statutory interpretation for ${categoryTitle} in India.`
        }
      ],
      courtProcedure: Array.isArray(backendCat?.courtProcedure) && backendCat.courtProcedure.length > 0 ? backendCat.courtProcedure : [
        { step: "Step 1", title: "Legal Review & Strategy", description: "Evaluating facts, statutory provisions, and formulating effective litigation strategy." },
        { step: "Step 2", title: "Pleading Drafting", description: "Drafting immaculate legal notices, petitions, or replies with relevant precedents." },
        { step: "Step 3", title: "Court Appearance", description: "Arguing before the presiding Judge or Tribunal for urgent interim relief." },
        { step: "Step 4", title: "Trial & Decree", description: "Conducting trial, presenting evidence, and securing favorable judgment." }
      ],
      advocateRole: {
        title: `Advocate Tushar Garg's Practice in ${categoryTitle}`,
        points: [
          "Advocate-on-Record (AOR) designation for direct Supreme Court of India litigation.",
          "Deep expertise in drafting high-stakes petitions and urgent stay applications.",
          "Rigorous trial and appellate advocacy across High Courts and specialized Tribunals.",
          "Client-centric approach ensuring transparent communication at every stage."
        ]
      },
      faqs: Array.isArray(backendCat?.faqs) && backendCat.faqs.length > 0 ? backendCat.faqs : [
        {
          question: `How can I consult Advocate Tushar Garg for a ${categoryTitle} case?`,
          answer: "You can schedule a consultation directly through the website or contact our chamber office via phone or WhatsApp to discuss your matter."
        },
        {
          question: `What documents are required for a ${categoryTitle} case?`,
          answer: "Please bring all relevant notices, contracts, court orders, communications, and identity documents for an initial legal evaluation."
        }
      ]
    };
  }

  // Merge Admin custom data if provided in backendCat object
  if (backendCat && typeof backendCat === 'object') {
    return {
      ...baseDetail,
      name: backendCat.name || baseDetail.name,
      tag: backendCat.tag || baseDetail.tag,
      image: backendCat.image || baseDetail.image,
      subtitle: backendCat.subtitle || baseDetail.subtitle,
      overview: backendCat.overview || backendCat.desc || baseDetail.overview,
      stats: {
        ...baseDetail.stats,
        actsCount: backendCat.acts || baseDetail.stats.actsCount,
        sectionsCount: backendCat.sections || baseDetail.stats.sectionsCount,
      },
      keyAreas: Array.isArray(backendCat.keyAreas) && backendCat.keyAreas.length > 0 ? backendCat.keyAreas : baseDetail.keyAreas,
      bareActs: Array.isArray(backendCat.bareActs) && backendCat.bareActs.length > 0 ? backendCat.bareActs : baseDetail.bareActs,
      landmarkPrecedents: Array.isArray(backendCat.landmarkPrecedents) && backendCat.landmarkPrecedents.length > 0 ? backendCat.landmarkPrecedents : baseDetail.landmarkPrecedents,
      courtProcedure: Array.isArray(backendCat.courtProcedure) && backendCat.courtProcedure.length > 0 ? backendCat.courtProcedure : baseDetail.courtProcedure,
      faqs: Array.isArray(backendCat.faqs) && backendCat.faqs.length > 0 ? backendCat.faqs : baseDetail.faqs,
    };
  }

  return baseDetail;
}
