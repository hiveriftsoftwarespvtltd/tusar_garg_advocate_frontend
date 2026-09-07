export interface JudicialServiceStage {
  step: string;
  title: string;
  duration: string;
  marks: string;
  description: string;
  highlights: string[];
}

export interface JudicialServiceSubject {
  name: string;
  category: string;
  weightage: string;
  keyTopics: string[];
  recommendedActs: string[];
}

export interface JudicialStateExamInfo {
  state: string;
  examName: string;
  conductingBody: string;
  selectionPattern: string;
  keyFeatures: string;
}

export interface JudicialServiceFAQ {
  q: string;
  a: string;
}

export interface JudicialServiceDetail {
  slug: string;
  aliases: string[];
  title: string;
  shortTitle: string;
  tagline: string;
  badge: string;
  desc: string;
  iconName: string;
  overview: string[];
  stats: {
    label: string;
    value: string;
    sublabel: string;
  }[];
  eligibility: {
    education: string;
    ageLimit: string;
    experience: string;
    citizenship: string;
    keyConditions: string[];
  };
  stages: JudicialServiceStage[];
  subjects: JudicialServiceSubject[];
  stateExams?: JudicialStateExamInfo[];
  strategyGuide: {
    phase: string;
    title: string;
    focus: string;
    recommendations: string[];
  }[];
  careerHierarchy?: {
    rank: string;
    designation: string;
    court: string;
    powers: string;
  }[];
  faqs: JudicialServiceFAQ[];
}

export const judicialServicesData: JudicialServiceDetail[] = [
  // 1. CIVIL JUDGE / JUDICIAL SERVICES
  {
    slug: "civil-judge",
    aliases: ["civil-judge-services", "judicial-services", "pcs-j"],
    title: "Civil Judge / Judicial Services",
    shortTitle: "Civil Judge (Jr. Div.)",
    tagline: "Provincial Civil Services - Judicial (PCS-J) Entry-Level Officer Exam",
    badge: "ENTRY LEVEL JUDICIAL CADRE",
    iconName: "Landmark",
    desc: "Comprehensive roadmap for entry-level Judicial Magistrate (First Class) and Civil Judge (Junior Division) competitive examinations conducted by State Public Service Commissions and High Courts across India.",
    overview: [
      "The Civil Judge (Junior Division) examination, widely recognized as PCS-J (Provincial Civil Services - Judicial), is the prestigious gateway for law graduates to enter the judicial magistracy and adjudicate civil suits and criminal matters at the foundational tier of India's justice delivery system.",
      "Governed under Articles 234 and 235 of the Constitution of India, recruitment is conducted annually or bi-annually by State High Courts in conjunction with State Public Service Commissions (e.g., Delhi High Court for DJS, UPPSC for UP PCS-J, BPSC for Bihar Judicial Services).",
      "Selected judicial officers wield substantial jurisdictional authority, including criminal trial powers up to 3 years imprisonment and fine under Section 29 CrPC / Section 23 BNSS, along with plenary original civil jurisdiction as designated by respective State Civil Courts Acts."
    ],
    stats: [
      { label: "Hierarchy Level", value: "Class-I Gazetted", sublabel: "Subordinate Magistracy" },
      { label: "Eligible Age Bracket", value: "21 – 35 Years", sublabel: "State rules apply" },
      { label: "Selection Stages", value: "3 Tier", sublabel: "Prelims • Mains • Interview" },
      { label: "Promotion Horizon", value: "High Court", sublabel: "Merit-cum-seniority elevation" }
    ],
    eligibility: {
      education: "Degree in Law (LL.B 3-Year or 5-Year integrated) from an institution recognized by the Bar Council of India (BCI).",
      ageLimit: "Typically 21 to 35 years as of the eligibility cut-off date (relaxation up to 38-40 years for SC/ST/OBC/PwD candidates across various states).",
      experience: "Fresh law graduates are eligible in most states without prior litigation experience, subject to prospective state-specific Bar Council consultation rules.",
      citizenship: "Citizen of India.",
      keyConditions: [
        "Enrolment or eligibility for enrolment as an Advocate with a State Bar Council under the Advocates Act, 1961.",
        "Sound physical and mental health, good moral character, and no pending criminal convictions involving moral turpitude.",
        "Proficiency in the official state language (e.g., Hindi for UP/MP/Rajasthan/Bihar, Punjabi for Punjab, Gujarati for Gujarat)."
      ]
    },
    stages: [
      {
        step: "Stage I",
        title: "Preliminary Examination (Objective Screening)",
        duration: "2 to 2.5 Hours",
        marks: "150 – 500 Marks (State Specific)",
        description: "Multiple choice question (MCQ) based screening test assessing Bare Act memory, legal reasoning, constitutional provisions, and general legal awareness.",
        highlights: [
          "Screening test only; marks not counted in final merit list calculation.",
          "Negative marking applies in major states (e.g., Delhi DJS: 0.25, Haryana: 0.20, UP: 0.33).",
          "Cut-off qualifies candidates for Mains written examination in a 1:10 to 1:15 ratio of total vacancies."
        ]
      },
      {
        step: "Stage II",
        title: "Mains Written Examination (Subjective Descriptive)",
        duration: "3 to 4 Days (Multiple Sessions)",
        marks: "800 – 1000 Marks",
        description: "Comprehensive subjective written exam evaluating analytical depth, statutory interpretation, practical case problem-solving, and judgment writing.",
        highlights: [
          "Covers Civil Law I, Civil Law II, Criminal Law, Procedural Laws, Judgment Writing & Language/Translation.",
          "Requires strict answer structuring, statutory citations, and application of Supreme Court ratios.",
          "Marks scored in Mains directly determine final merit ranking alongside the interview."
        ]
      },
      {
        step: "Stage III",
        title: "Viva-Voce / Personal Interview",
        duration: "20 to 35 Minutes",
        marks: "100 – 200 Marks",
        description: "Personality test conducted by a board consisting of sitting High Court Judges, senior judicial officers, and legal academicians to evaluate judicial temperament.",
        highlights: [
          "Tests composure, rapid legal problem solving, impartiality, integrity, and command over legal principles.",
          "Certain states mandate minimum qualifying marks (e.g., 35% in Delhi, 50% in Haryana) to be eligible for appointment."
        ]
      }
    ],
    subjects: [
      {
        name: "Procedural & Substantive Criminal Law",
        category: "Criminal Law",
        weightage: "High Priority (25% - 30%)",
        keyTopics: [
          "Bharatiya Nyaya Sanhita (BNS) / IPC 1860 (General exceptions, offences against body & property)",
          "Bharatiya Nagarik Suraksha Sanhita (BNSS) / CrPC 1973 (Cognizance, Bail, Investigation, Trials, Sec 125 Maintenance)",
          "Bharatiya Sakshya Adhiniyam (BSA) / Evidence Act 1872 (Relevancy, Confessions, Dying declarations, Burden of proof)",
          "Special Acts: POCSO Act, NI Act (Section 138), NDPS, Arms Act"
        ],
        recommendedActs: ["BNS 2023", "BNSS 2023", "BSA 2023", "POCSO Act 2012", "NI Act 1881"]
      },
      {
        name: "Civil Law & Commercial Statutes",
        category: "Civil Law",
        weightage: "High Priority (30% - 35%)",
        keyTopics: [
          "Code of Civil Procedure, 1908 (Pleadings, Res Judicata, Orders 1, 6, 7, 8, 21, 39, Injunctions, Appeals)",
          "Indian Contract Act, 1872 (Formation, Void agreements, Breach, Indemnity & Guarantee)",
          "Specific Relief Act, 1963 (Specific performance, Declaratory decrees, Injunctions)",
          "Transfer of Property Act, 1882 (Mortgage, Sale, Lease, Gift, Actionable claims)",
          "Limitation Act, 1963 (Condonation of delay, Computation of periods)"
        ],
        recommendedActs: ["CPC 1908", "Contract Act 1872", "Specific Relief Act 1963", "Transfer of Property Act 1882"]
      },
      {
        name: "Constitutional & Personal Laws",
        category: "Constitutional & Personal",
        weightage: "Medium Priority (20% - 25%)",
        keyTopics: [
          "Constitution of India (Part III Fundamental Rights, Writs under Art 32 & 226, Subordinate Judiciary Arts 233-237)",
          "Hindu Law (Marriage, Succession, Adoption, Maintenance, Coparcenary rights post-2005 amendment)",
          "Muslim Law (Marriage, Dower, Talaq/Divorce, Hiba/Gift, Waqf, Inheritance)"
        ],
        recommendedActs: ["Constitution of India", "Hindu Marriage Act 1955", "Hindu Succession Act 1956", "Dissolution of Muslim Marriages Act"]
      },
      {
        name: "Judgment Writing & Language Skills",
        category: "Practical Application",
        weightage: "Critical Filter (15% - 20%)",
        keyTopics: [
          "Civil Judgment Writing (Marshalling facts, framing issues, reasoning on each issue, relief clause)",
          "Criminal Judgment Writing (Appreciation of oral & medical evidence, framing charges, operative sentence)",
          "Translation: English to Hindi/Regional Language and vice-versa",
          "Legal Essay Writing & Précis drafting"
        ],
        recommendedActs: ["High Court Rules & Orders", "Criminal Trial Guidelines", "Civil Courts Practice Manual"]
      }
    ],
    stateExams: [
      {
        state: "Delhi (DJS)",
        examName: "Delhi Judicial Service Examination",
        conductingBody: "High Court of Delhi",
        selectionPattern: "Prelims (200 MCQs, Negative Marking) -> Mains (850 Marks) -> Interview (150 Marks)",
        keyFeatures: "Known for complex analytical practical problems, high focus on commercial laws, and rigorous interview qualifying cutoff (minimum 35% general)."
      },
      {
        state: "Uttar Pradesh (UP PCS-J)",
        examName: "Uttar Pradesh Judicial Service Exam",
        conductingBody: "UPPSC & Allahabad High Court",
        selectionPattern: "Prelims (450 Marks) -> Mains (1000 Marks) -> Interview (100 Marks)",
        keyFeatures: "Heavy emphasis on General Knowledge (History, Polity, Current Affairs), extensive UP local revenue and municipal laws."
      },
      {
        state: "Haryana (HCS-J)",
        examName: "Haryana Civil Service (Judicial Branch)",
        conductingBody: "High Court of Punjab & Haryana / HPSC",
        selectionPattern: "Prelims (500 Marks, 125 MCQs) -> Mains (900 Marks) -> Viva-Voce (200 Marks)",
        keyFeatures: "Strict 50% qualifying rule in interview, exhaustive civil and criminal subjective problem papers."
      },
      {
        state: "Rajasthan (RJS)",
        examName: "Rajasthan Judicial Service Examination",
        conductingBody: "Rajasthan High Court",
        selectionPattern: "Prelims (100 Marks, No Negative Marking) -> Mains (300 Marks) -> Interview (35 Marks)",
        keyFeatures: "Balanced 70% Law + 30% Hindi & English grammar in Prelims; highly competitive Bare Act accuracy."
      },
      {
        state: "Madhya Pradesh (MPCJ)",
        examName: "MP Civil Judge Junior Division",
        conductingBody: "High Court of Madhya Pradesh",
        selectionPattern: "Prelims (150 Marks) -> Mains (400 Marks) -> Interview (50 Marks)",
        keyFeatures: "Direct Bare Act memory testing, local accommodation control act, and dedicated judgment writing paper."
      }
    ],
    careerHierarchy: [
      {
        rank: "Entry Level",
        designation: "Civil Judge (Jr. Div.) / Judicial Magistrate 2nd Class",
        court: "Court of Civil Judge / JMIC",
        powers: "Original civil suits up to specified pecuniary limits; criminal trials up to 1-3 years sentence."
      },
      {
        rank: "Promotion Stage 1",
        designation: "Judicial Magistrate 1st Class / Metropolitan Magistrate",
        court: "Metropolitan / District Sub-division",
        powers: "Criminal trials up to 3 years imprisonment, fine up to ₹10,000 (CrPC) / updated under BNSS."
      },
      {
        rank: "Promotion Stage 2",
        designation: "Senior Civil Judge / Chief Judicial Magistrate (CJM / ACMM)",
        court: "District Headquarters",
        powers: "Unlimited civil jurisdiction (in many states); criminal sentences up to 7 years imprisonment."
      },
      {
        rank: "Cadre Promotion",
        designation: "Additional District & Sessions Judge (ADJ)",
        court: "District & Sessions Court",
        powers: "Plenary jurisdiction; trial of murder, rape, sessions cases; any sentence authorized by law."
      },
      {
        rank: "Apex Subordinate",
        designation: "Principal District & Sessions Judge",
        court: "Principal Court of the District",
        powers: "Administrative control of all judicial officers in the district; civil and sessions appeals."
      },
      {
        rank: "Constitutional Elevation",
        designation: "Judge, High Court of the State",
        court: "High Court (Constitutional Court)",
        powers: "Appointed under Article 217 of the Constitution; constitutional writs, appellate jurisdiction."
      }
    ],
    strategyGuide: [
      {
        phase: "Phase 1: Bare Act Mastery",
        title: "Section-by-Section Command",
        focus: "Direct memory, index retention, definitions, exceptions, and procedural timelines.",
        recommendations: [
          "Read Bare Acts directly without relying immediately on secondary guidebooks.",
          "Prepare one-line indices for major procedural codes (CPC, CrPC/BNSS, Evidence/BSA).",
          "Solve 100 MCQs daily with reverse-checking into statutory footnotes."
        ]
      },
      {
        phase: "Phase 2: Mains Answer Writing",
        title: "Analytical Problem Solving & Structuring",
        focus: "Issue identification, statutory provisions, case law ratio, application to facts, conclusion.",
        recommendations: [
          "Write at least 2 long-form answers every day within a strict 15-minute timer per question.",
          "Master the standard judgment writing template: Title, charge/issue, marshalling of evidence, operative order.",
          "Incorporate authoritative Supreme Court constitutional bench rulings."
        ]
      },
      {
        phase: "Phase 3: Viva-Voce & Mock Simulation",
        title: "Judicial Demeanor & Composure",
        focus: "Current legal controversies, situational ethics, and calm neutrality.",
        recommendations: [
          "Participate in full-bench mock interviews to overcome hesitation and refine body language.",
          "Keep abreast of current Supreme Court landmark judgments over the past 12-18 months."
        ]
      }
    ],
    faqs: [
      {
        q: "What is the educational qualification required for Civil Judge (Junior Division)?",
        a: "Candidates must possess a Bachelor's Degree in Law (3-year LL.B or 5-year Integrated B.A. LL.B/B.B.A. LL.B) from an institution recognized by the Bar Council of India (BCI). In most states, fresh law graduates can appear immediately upon graduation."
      },
      {
        q: "Is 3-year prior practice at the Bar mandatory for PCS-J?",
        a: "Currently, in most states including Delhi, UP, Rajasthan, and Haryana, fresh law graduates remain eligible. While certain rules were proposed regarding prior Bar practice, the Supreme Court of India has maintained access for young law graduates, subject to ongoing policy reviews."
      },
      {
        q: "What are the new criminal laws (BNS, BNSS, BSA) and will they be asked in judicial exams?",
        a: "Yes. From July 1, 2024, the Bharatiya Nyaya Sanhita (BNS), Bharatiya Nagarik Suraksha Sanhita (BNSS), and Bharatiya Sakshya Adhiniyam (BSA) replaced the IPC, CrPC, and Evidence Act. High Courts have begun incorporating the new statutory provisions into the updated examination syllabi."
      },
      {
        q: "Can a candidate appear for multiple state judiciary exams?",
        a: "Yes, candidates can appear for exams in multiple states provided they satisfy the eligibility, age limits, and local language proficiency requirements (e.g., qualifying Hindi or regional language tests where mandatory)."
      },
      {
        q: "How does the promotion hierarchy work from Civil Judge to High Court Judge?",
        a: "Civil Judges (Jr. Div.) are promoted to Senior Civil Judge / CJM, then to Additional District Judge (Higher Judicial Service), and then Principal District Judge. Under Article 217(2)(a), District Judges with distinguished judicial records are eligible for elevation to the High Court Bench."
      },
      {
        q: "What is the role of judgment writing in qualifying the Mains exam?",
        a: "Judgment writing often carries 50 to 100 marks in the Mains examination. Scoring high requires mastering the art of issue framing, appreciation of witness testimonies, evidentiary admissibility, and precise drafting of the operative decree or sentence."
      }
    ]
  },

  // 2. DISTRICT JUDGE / HIGHER JUDICIAL SERVICE (HJS)
  {
    slug: "higher-judicial-services",
    aliases: ["district-judge", "hjs", "district-judge-hjs"],
    title: "District Judge / Higher Judicial Service",
    shortTitle: "Higher Judicial Service (HJS)",
    tagline: "Direct Bar Recruitment to the Senior Judiciary under Article 233 of the Constitution",
    badge: "SENIOR JUDICIAL CADRE • DIRECT RECRUITMENT",
    iconName: "Scale",
    desc: "Complete guide for experienced practicing advocates seeking direct appointment as Additional District & Sessions Judges through the prestigious Higher Judicial Services (HJS) examinations across India.",
    overview: [
      "The Higher Judicial Service (HJS) represents the senior echelon of the subordinate judiciary in India. Governed under Article 233 of the Constitution of India, High Courts recruit practicing advocates directly from the Bar into the cadre of District & Sessions Judges.",
      "Direct recruitment candidates enter directly at the rank of Additional District & Sessions Judge (ADJ), bypassing the junior magistracy tiers. They exercise original jurisdiction over serious criminal offences (including life imprisonment and capital punishment) and major civil suits of unlimited pecuniary value.",
      "Because appointees start in the senior judicial cadre, Higher Judicial Service officers have a significantly higher statistical probability and shorter timeline for elevation as Judges of the High Court under Article 217 of the Constitution."
    ],
    stats: [
      { label: "Constitutional Mandate", value: "Article 233", sublabel: "Appointment of District Judges" },
      { label: "Mandatory Practice", value: "7 Years Active Bar", sublabel: "Continuous litigation proof" },
      { label: "Age Window", value: "35 – 45 Years", sublabel: "State rules apply" },
      { label: "Elevation Pipeline", value: "High Court Bench", sublabel: "Direct constitutional trajectory" }
    ],
    eligibility: {
      education: "Degree in Law (LL.B) recognized by the Bar Council of India.",
      ageLimit: "Must have attained 35 years and not exceeded 45 years of age on the prescribed cut-off date (relaxations available for reserved categories).",
      experience: "Minimum 7 continuous years of active practice as an Advocate at the Bar on the date of application.",
      citizenship: "Citizen of India.",
      keyConditions: [
        "Must not be in the service of the Union or of a State at the time of application.",
        "Submission of certified copies of orders, judgments, or appearance records demonstrating active litigation experience (e.g., Delhi requires proof of specified contested appearances per year).",
        "Minimum gross income/tax return criteria specified by certain High Courts (e.g., DHJS requires certified ITRs over preceding financial years).",
        "Impeccable professional standing and clean disciplinary record with the State Bar Council."
      ]
    },
    stages: [
      {
        step: "Stage I",
        title: "Preliminary Screening Examination",
        duration: "2 Hours",
        marks: "150 – 200 Marks",
        description: "Objective MCQ paper with strict negative marking covering substantive laws, procedural jurisprudence, commercial laws, and recent constitutional judgments.",
        highlights: [
          "Shortlists candidates for the written mains test in a ratio of 1:10 or 1:15.",
          "Tests practical litigation scenarios, Commercial Courts Act, arbitration, and statutory amendments.",
          "Negative marking of 25% applies in prominent exams like Delhi Higher Judicial Service (DHJS)."
        ]
      },
      {
        step: "Stage II",
        title: "Mains Written Examination",
        duration: "3 Days (Multiple Papers)",
        marks: "600 – 750 Marks",
        description: "Exhaustive subjective descriptive examination testing deep courtroom drafting, evidentiary appreciation, complex commercial disputes, and judgment writing.",
        highlights: [
          "Includes General Legal Knowledge, Civil Law I & II, Criminal Law, and Procedural Law.",
          "Extensive weightage on framing charges, settlement of issues, and drafting reasoned judgments.",
          "Minimum 45% aggregate (and 40% in each paper) typically mandated to qualify for Viva-Voce."
        ]
      },
      {
        step: "Stage III",
        title: "Viva-Voce / Personality Test",
        duration: "30 to 45 Minutes",
        marks: "150 – 250 Marks",
        description: "In-depth interview conducted by a collegiate bench of senior High Court Judges.",
        highlights: [
          "Examines candidate's judicial temperament, trial demeanor, integrity, and analytical poise.",
          "Delhi DHJS and UP HJS mandate securing minimum qualifying marks in Viva-Voce to be eligible for appointment."
        ]
      }
    ],
    subjects: [
      {
        name: "Commercial & Advanced Civil Jurisprudence",
        category: "Civil & Commercial",
        weightage: "High Priority (35%)",
        keyTopics: [
          "Commercial Courts Act, 2015 (Specified value, Pre-institution mediation, Case management)",
          "Arbitration & Conciliation Act, 1996 (Sections 9, 11, 34, 37, Domestic & International arbitration)",
          "Insolvency & Bankruptcy Code, 2016 (Corporate insolvency resolution, Moratorium)",
          "Code of Civil Procedure, 1908 (Complex execution proceedings, representative suits, res judicata)",
          "Specific Relief Act, 1963 & Indian Contract Act, 1872"
        ],
        recommendedActs: ["Commercial Courts Act", "Arbitration Act 1996", "IBC 2016", "CPC 1908"]
      },
      {
        name: "Sessions Trials & Special Criminal Statutes",
        category: "Criminal Law",
        weightage: "High Priority (35%)",
        keyTopics: [
          "Sessions Trial Procedure under CrPC 1973 / BNSS 2023 (Discharge, Framing of charge, Section 313 examination)",
          "Bharatiya Nyaya Sanhita (BNS) / IPC 1860 (Homicide, Culpable homicide, Offences against state, Conspiracy)",
          "Prevention of Corruption Act, 1988 (Demand & acceptance, Sanction for prosecution)",
          "POCSO Act 2012, NDPS Act 1985, and Prevention of Money Laundering Act (PMLA) 2002",
          "Bharatiya Sakshya Adhiniyam (BSA) / Evidence Act 1872 (Circumstantial evidence, Electronic records, Expert evidence)"
        ],
        recommendedActs: ["BNS 2023", "BNSS 2023", "BSA 2023", "PC Act 1988", "NDPS Act 1985", "POCSO Act 2012"]
      },
      {
        name: "Constitutional & Administrative Jurisprudence",
        category: "Public Law",
        weightage: "Medium Priority (15%)",
        keyTopics: [
          "Constitutional provisions on Subordinate Courts (Articles 233 to 237)",
          "Principles of Natural Justice, Judicial Review, and Administrative Discretion",
          "Writ Jurisprudence (Articles 32 and 226) and Supreme Court Precedents"
        ],
        recommendedActs: ["Constitution of India", "Administrative Law Doctrines", "Landmark Supreme Court Rulings"]
      },
      {
        name: "Sessions & Civil Judgment Writing",
        category: "Practical Drafting",
        weightage: "Decisive Scoring (15%)",
        keyTopics: [
          "Civil Appellate and Original Judgment Writing with structured findings on each issue",
          "Criminal Sessions Judgment Writing: Weighing prosecution vs defence evidence, reasoning on guilt or acquittal, sentencing hearing",
          "Drafting formal charges in complex multi-accused conspiracies"
        ],
        recommendedActs: ["High Court Sessions Trial Manual", "Supreme Court Sentencing Guidelines"]
      }
    ],
    stateExams: [
      {
        state: "Delhi (DHJS)",
        examName: "Delhi Higher Judicial Service Examination",
        conductingBody: "High Court of Delhi",
        selectionPattern: "Prelims (150 Marks) -> Mains (750 Marks) -> Viva-Voce (250 Marks)",
        keyFeatures: "Arguably the most competitive HJS examination in India. Strong emphasis on Commercial Courts Act, Arbitration, ITR criteria, and strict viva-voce cutoff."
      },
      {
        state: "Uttar Pradesh (UP HJS)",
        examName: "UP Higher Judicial Service Direct Recruitment",
        conductingBody: "High Court of Judicature at Allahabad",
        selectionPattern: "Prelims -> Mains Written Exam (5 Papers, 1000 Marks) -> Interview",
        keyFeatures: "Large number of vacancies across UP district courts. Exhaustive syllabus covering local land revenue, urban building tenancy laws, and extensive criminal law."
      },
      {
        state: "Haryana / Punjab (HJS)",
        examName: "Superior Judicial Service",
        conductingBody: "High Court of Punjab & Haryana",
        selectionPattern: "Written Exam (Criminal, Civil, General Law & Language) -> Viva-Voce",
        keyFeatures: "High focus on procedural precision, local rent acts, and strict bar practice verification."
      }
    ],
    careerHierarchy: [
      {
        rank: "Direct Cadre Entry",
        designation: "Additional District & Sessions Judge (ADJ)",
        court: "District & Sessions Court",
        powers: "Unlimited civil pecuniary jurisdiction; full sessions trial powers including life sentence and capital punishment (subject to confirmation)."
      },
      {
        rank: "Specialized Bench",
        designation: "Special Judge (CBI / PMLA / Commercial Court / POCSO)",
        court: "Designated Special Court",
        powers: "Exclusive trial of high-profile financial corruption, economic offences, and statutory crimes."
      },
      {
        rank: "Principal Post",
        designation: "Principal District & Sessions Judge",
        court: "Head of the Judicial District",
        powers: "Complete judicial, administrative, and financial headship of all subordinate courts in the district."
      },
      {
        rank: "Constitutional Elevation",
        designation: "Judge, High Court of the State",
        court: "High Court Bench",
        powers: "Elevated directly under Article 217 of the Constitution; exercises constitutional writ and appellate jurisdiction."
      }
    ],
    strategyGuide: [
      {
        phase: "Phase 1: Balancing Practice & Study",
        title: "Litigation Synergy",
        focus: "Translating daily courtroom experience into analytical exam writing.",
        recommendations: [
          "Leverage actual drafting experience (plaints, written statements, bail petitions) to develop swift framing skills.",
          "Keep organized certified copies of your daily orders and judgments for application verification.",
          "Dedicate early morning and late night blocks exclusively to Bare Act revision."
        ]
      },
      {
        phase: "Phase 2: Commercial & Special Statutes",
        title: "Mastering Modern Economic Law",
        focus: "Arbitration Act, Commercial Courts Act, IBC, and PMLA.",
        recommendations: [
          "High Courts now heavily test commercial dispute scenarios; master Section 34 arbitration grounds.",
          "Understand the interplay between Section 9 arbitration interim reliefs and Order 39 CPC."
        ]
      },
      {
        phase: "Phase 3: Sessions Judgment Writing",
        title: "Precision in Sentencing & Acquittal",
        focus: "Marshalling circumstantial evidence, chain of events, and Section 313 examination.",
        recommendations: [
          "Practice writing complete Sessions Judgments based on supplied mock testimonies within 2 hours.",
          "Master sentencing jurisprudence: mitigating vs aggravating circumstances (Bachan Singh & Machhi Singh doctrines)."
        ]
      }
    ],
    faqs: [
      {
        q: "What is the primary difference between PCS-J and HJS?",
        a: "PCS-J is an entry-level exam for fresh law graduates or junior advocates for appointment as Civil Judge (Junior Division) / JMIC. HJS is for senior advocates with at least 7 continuous years of active Bar practice, appointing them directly as Additional District & Sessions Judges."
      },
      {
        q: "What proof is required to establish 7 years of continuous Bar practice?",
        a: "Candidates must submit a Certificate of Practice issued by the Bar Council or High Court/District Bar Association, along with certified copies of order sheets, vakalatnamas, and judgments showing their active personal appearances over the 7-year period."
      },
      {
        q: "Are Government Advocates or Law Officers eligible for HJS direct recruitment?",
        a: "Under the landmark Supreme Court judgment in Dheeraj Mor v. Hon'ble High Court of Delhi (2020), judicial officers already in subordinate service cannot compete under Article 233 direct bar quota. Practicing advocates appointed as panel counsel or public prosecutors who maintain active litigation practice can apply subject to state-specific rules."
      },
      {
        q: "What is the age limit for Higher Judicial Services?",
        a: "The standard age criterion is minimum 35 years and maximum 45 years on the designated cut-off date. Certain states grant age relaxations for SC, ST, OBC, and PwD candidates as per their statutory service rules."
      },
      {
        q: "Can an HJS recruit be elevated to the High Court?",
        a: "Yes. In fact, officers who join through direct HJS recruitment at an early age (around 35-38 years) have the highest likelihood of elevation to the High Court bench under the service quota, often going on to serve as Chief Justices of High Courts or Supreme Court Judges."
      },
      {
        q: "What is the role of the Commercial Courts Act in modern HJS exams?",
        a: "The Commercial Courts Act, 2015 is now a compulsory topic in prestigious exams like Delhi DHJS. Questions frequently test pre-institution mediation, summary judgment (Order XIII-A), case management hearings, and jurisdiction thresholds."
      }
    ]
  },

  // 3. PRELIMINARY SYLLABUS
  {
    slug: "preliminary-syllabus",
    aliases: ["prelims-syllabus", "preliminary-exam", "prelims"],
    title: "Preliminary Syllabus & Exam Pattern",
    shortTitle: "Prelims Syllabus",
    tagline: "Comprehensive Objective Screening Exam Blueprints, Subject-Wise Weightage & Strategy",
    badge: "STAGE I SCREENING • OBJECTIVE BLUEPRINT",
    iconName: "ClipboardList",
    desc: "Exhaustive subject-wise breakdown of the Judicial Services Preliminary Screening Examination, covering Core Bare Acts, New Criminal Laws, Local Statutes, General Knowledge weightage, and negative marking patterns across all High Courts.",
    overview: [
      "The Preliminary Examination serves as the critical first-stage elimination filter in judicial service recruitment. Conducted in an objective Multiple Choice Question (MCQ) format, it tests the candidate's speed, photographic Bare Act memory, and ability to identify statutory nuances under timed conditions.",
      "While marks scored in the Prelims do not contribute to the final merit ranking, clearing the competitive cut-off is mandatory to gain entry into the decisive Mains written examination.",
      "With the implementation of the New Criminal Laws (BNS, BNSS, BSA) alongside traditional civil procedural codes, modern Prelims papers increasingly blend direct section-based queries with short fact-based analytical application questions."
    ],
    stats: [
      { label: "Question Format", value: "Objective MCQs", sublabel: "Single choice best answer" },
      { label: "Negative Marking", value: "0.20 to 0.33", sublabel: "Varies by state High Court" },
      { label: "Screening Cutoff", value: "Top 10x - 15x", sublabel: "Vacancies to Mains ratio" },
      { label: "Time Per Question", value: "45 – 60 Secs", sublabel: "High-speed precision" }
    ],
    eligibility: {
      education: "LL.B Degree (3-Year or 5-Year) from a BCI recognized college or university.",
      ageLimit: "21 to 35 years for Civil Judge (Jr. Div.) and 35 to 45 years for Higher Judicial Service (HJS).",
      experience: "No prior experience required for Civil Judge; 7 years Bar practice required for HJS.",
      citizenship: "Citizen of India.",
      keyConditions: [
        "Enrolment with State Bar Council.",
        "Accurate adherence to examination instructions and negative marking rules.",
        "Proficiency in Bare Act navigation and rapid elimination techniques."
      ]
    },
    stages: [
      {
        step: "Core Pillar 1",
        title: "Major Substantive Codes",
        duration: "Comprehensive",
        marks: "40% - 45% Weightage",
        description: "Direct section numbers, statutory definitions, exceptions, illustrations, and punishment quantum.",
        highlights: [
          "Bharatiya Nyaya Sanhita (BNS) 2023 / IPC 1860 (Offences, mental element, general exceptions).",
          "Indian Contract Act, 1872 (Offer, acceptance, consideration, breach, quasi-contracts).",
          "Transfer of Property Act, 1882 (Sections 3, 5, 52 lis pendens, 53 fraudulent transfer, 54 sale, 58 mortgage)."
        ]
      },
      {
        step: "Core Pillar 2",
        title: "Procedural & Evidence Law",
        duration: "High Precision",
        marks: "35% - 40% Weightage",
        description: "In-depth procedural steps, jurisdictional thresholds, statutory limitation periods, and evidentiary admissibility rules.",
        highlights: [
          "Code of Civil Procedure, 1908 (Section 9 to 115; Orders 1, 2, 5, 6, 7, 8, 9, 21, 38, 39, 41).",
          "BNSS 2023 / CrPC 1973 (Cognizance, Arrest, Search & Seizure, Bail, Maintenance, Trial stages).",
          "BSA 2023 / Evidence Act 1872 (Relevancy, Admissions, Confessions, Presumptions, Burden of Proof)."
        ]
      },
      {
        step: "Core Pillar 3",
        title: "Constitutional, Local & Special Statutes",
        duration: "Variable",
        marks: "20% - 25% Weightage",
        description: "State-specific rent control acts, land revenue codes, Specific Relief Act, Limitation Act, and General Knowledge.",
        highlights: [
          "Constitution of India (Articles 12 to 51A, 136, 141, 226, 227, 233-237, 300A).",
          "Specific Relief Act, 1963 (Sections 5 to 42) & Limitation Act, 1963 (Sections 3 to 14 and Schedule).",
          "State Local Acts (e.g., Delhi Rent Control, UP Revenue Code, MP Accommodation Control)."
        ]
      }
    ],
    subjects: [
      {
        name: "Code of Civil Procedure, 1908 (CPC)",
        category: "Civil Procedural",
        weightage: "Extremely High (25-35 Questions)",
        keyTopics: [
          "Jurisdiction of Civil Courts & Res Judicata (Sections 9, 10, 11)",
          "Place of Suing & Inherent Powers (Sections 15-20, 151)",
          "Execution of Decrees (Section 47, 51, Order 21)",
          "Pleadings, Plaint & Written Statement (Orders 6, 7, 8)",
          "Appearance, Ex-Parte Decrees & Setting Aside (Order 9)",
          "Temporary Injunctions & Interlocutory Orders (Order 39 Rules 1-5)"
        ],
        recommendedActs: ["CPC 1908 (Complete Bare Act with Orders & Rules)"]
      },
      {
        name: "Criminal Procedure & Evidence (BNSS & BSA)",
        category: "Criminal Procedural",
        weightage: "Extremely High (30-40 Questions)",
        keyTopics: [
          "Cognizance of Offences & Powers of Magistrates (BNSS Sec 210-220 / CrPC Sec 190-199)",
          "Arrest Procedures & Rights of Arrestee (BNSS Sec 35-40 / CrPC Sec 41-41D)",
          "Bail Jurisprudence (Bailable vs Non-Bailable, Anticipatory Bail, Default Bail)",
          "Trial of Warrant Cases, Summons Cases & Summary Trials",
          "Relevancy of Facts, Dying Declarations & Confessions (BSA Sec 20-30 / IEA Sec 24-32)",
          "Electronic Evidence & Certificates (BSA Sec 63 / IEA Sec 65B)"
        ],
        recommendedActs: ["BNSS 2023", "BSA 2023", "CrPC 1973", "Evidence Act 1872"]
      },
      {
        name: "Substantive Criminal Law (BNS / IPC)",
        category: "Substantive Criminal",
        weightage: "High (20-25 Questions)",
        keyTopics: [
          "General Explanations, Definitions & General Exceptions (Private Defence, Insanity, Intoxication)",
          "Offences Affecting Human Life (Murder, Culpable Homicide, Grievous Hurt, Kidnapping)",
          "Offences Against Property (Theft, Extortion, Robbery, Dacoity, Criminal Breach of Trust, Cheating)",
          "New Provisions: Organized Crime, Terrorism, Snatching, Mob Lynching in BNS 2023"
        ],
        recommendedActs: ["Bharatiya Nyaya Sanhita, 2023", "Indian Penal Code, 1860"]
      },
      {
        name: "Constitution of India",
        category: "Constitutional Law",
        weightage: "High (15-25 Questions)",
        keyTopics: [
          "Preamble & Citizenship (Articles 1-11)",
          "Fundamental Rights & Doctrines: Severability, Eclipse, Waiver (Articles 12-35)",
          "Directive Principles of State Policy & Fundamental Duties (Articles 36-51A)",
          "Union & State Judiciary (Articles 124-147, 214-237)",
          "Emergency Provisions & Constitutional Amendments (Articles 352-360, 368)"
        ],
        recommendedActs: ["Constitution of India (Bare Act with up-to-date amendments)"]
      },
      {
        name: "Commercial & Property Statutes",
        category: "Civil Substantive",
        weightage: "Moderate to High (20-30 Questions)",
        keyTopics: [
          "Contract Act 1872 (Valid contract, consideration, breach, damages)",
          "Specific Relief Act 1963 (Specific performance of contracts, injunctions)",
          "Transfer of Property Act 1882 (Transferable property, mortgage, lease, exchange)",
          "Limitation Act 1963 (Condonation under Sec 5, legal disability Sec 6, periods for suits)"
        ],
        recommendedActs: ["Indian Contract Act", "Specific Relief Act", "Transfer of Property Act", "Limitation Act"]
      }
    ],
    stateExams: [
      {
        state: "Delhi (DJS Prelims)",
        examName: "DJS Preliminary Examination",
        conductingBody: "High Court of Delhi",
        selectionPattern: "200 Questions • 200 Marks • 0.25 Negative Marking",
        keyFeatures: "Heavily problem-based; includes Legal General Knowledge, Arbitration Act, Commercial Courts Act, POCSO, and POSH Act."
      },
      {
        state: "Uttar Pradesh (UP PCS-J Prelims)",
        examName: "UPPSC Judicial Services Prelims",
        conductingBody: "UPPSC",
        selectionPattern: "Paper 1 (GK - 150 Marks) + Paper 2 (Law - 300 Marks) • 0.33 Negative Marking",
        keyFeatures: "Unique general knowledge paper covering ancient/medieval history, geography, economy, environment, and international organizations."
      },
      {
        state: "Haryana (HCS-J Prelims)",
        examName: "Haryana Judicial Branch Prelims",
        conductingBody: "High Court of Punjab & Haryana / HPSC",
        selectionPattern: "125 Questions • 500 Marks • 0.20 Negative Marking (4 Marks per question)",
        keyFeatures: "High cutoffs; requires extreme accuracy across standard civil and criminal procedural codes."
      },
      {
        state: "Rajasthan (RJS Prelims)",
        examName: "RJS Preliminary Examination",
        conductingBody: "Rajasthan High Court",
        selectionPattern: "100 Questions • 100 Marks • No Negative Marking",
        keyFeatures: "70% Law + 15% Hindi Grammar + 15% English Grammar. Direct Bare Act language questions."
      }
    ],
    strategyGuide: [
      {
        phase: "Step 1: Bare Act Index Mapping",
        title: "Memorize Section Numbers & Chapters",
        focus: "Know exactly which section covers which topic and its corresponding chapter.",
        recommendations: [
          "Maintain an index chart for all 15+ Bare Acts on your study desk.",
          "Memorize the exact punishment quantum, bailable/non-bailable nature, and cognizable classifications.",
          "Identify words like 'shall' vs 'may' which frequently trip up candidates in MCQs."
        ]
      },
      {
        phase: "Step 2: Reverse MCQ Solving",
        title: "Daily 100+ Question Testing",
        focus: "Solving MCQs first, identifying weak areas, and reading Bare Acts to find the correct statutory phrase.",
        recommendations: [
          "Never read an MCQ explanation without opening the actual Bare Act provision.",
          "Mark confusing questions with sticky tabs and review them every Sunday.",
          "Maintain an error log book to note repeated traps and factual mistakes."
        ]
      },
      {
        phase: "Step 3: Timed Mock Simulations",
        title: "Mastering Negative Marking & Speed",
        focus: "Solving 200 questions within 120 minutes with high accuracy.",
        recommendations: [
          "Apply the 3-round elimination method: Round 1 for 100% sure questions, Round 2 for 50-50 options, Round 3 strictly avoid blind guesses.",
          "Practice filling actual OMR bubbles to avoid bubbling mismatch errors in the real exam."
        ]
      }
    ],
    faqs: [
      {
        q: "What is the best technique to clear the Judicial Services Preliminary Exam?",
        a: "Mastery over Bare Acts is 90% of the battle. Read every section, definition, illustration, and proviso multiple times. Solve past 10-15 years MCQs from all states to recognize recurring statutory questions."
      },
      {
        q: "How should I prepare for negative marking in judicial prelims?",
        a: "Follow the 3-pass strategy. In the first pass, solve only questions you are 100% certain of. In the second pass, attempt questions where you can eliminate 2 out of 4 options. Strictly avoid blind guesswork in the third pass."
      },
      {
        q: "Are illustrations given in Bare Acts asked in Prelims?",
        a: "Yes! High Courts frequently lift illustrations directly from the Indian Contract Act, IPC/BNS, Evidence Act/BSA, and Transfer of Property Act as verbatim multiple choice questions."
      },
      {
        q: "How many months of preparation are required for Prelims?",
        a: "A focused 6 to 9 months of disciplined Bare Act reading, combined with daily 100+ MCQ practice, is generally sufficient for covering the preliminary syllabus thoroughly."
      },
      {
        q: "Is General Knowledge required for all state judiciary prelims?",
        a: "No. General Knowledge is a major paper in UP PCS-J, Bihar Judicial Services, and MP (General Studies portion). However, states like Delhi, Haryana, and Rajasthan focus almost exclusively on Law and Language."
      },
      {
        q: "How to handle questions on the New Criminal Laws (BNS, BNSS, BSA)?",
        a: "Prepare comparative correlation charts comparing old IPC/CrPC/Evidence sections with the new BNS/BNSS/BSA sections. Pay close attention to newly introduced offences (snatching, organized crime, terrorism) and updated procedural timelines."
      }
    ]
  },

  // 4. MAINS SYLLABUS
  {
    slug: "mains-syllabus",
    aliases: ["mains-exam", "mains-pattern", "mains"],
    title: "Mains Syllabus & Answer Writing",
    shortTitle: "Mains Syllabus",
    tagline: "In-Depth Subjective Papers, Problem Solving, Judgment Writing & Charge Framing",
    badge: "STAGE II MERIT MAKER • DESCRIPTIVE BLUEPRINT",
    iconName: "BookOpen",
    desc: "Complete guide to the Judicial Services Mains Examination syllabus, answer structuring techniques, civil and criminal judgment writing formats, issue settlement, and language translation papers.",
    overview: [
      "The Mains Written Examination is the decisive battleground that determines an aspirant's judicial destiny. Unlike the screening Prelims, marks scored in the Mains subjective papers constitute 80% to 85% of the total selection weightage.",
      "Conducted over 3 to 4 days in intensive 3-hour sessions, Mains evaluates an aspirant's analytical depth, clarity of expression, statutory interpretation, and judicial problem-solving capability.",
      "Success in Mains requires more than memorizing law; it demands mastering the art of judicial drafting, appreciating evidentiary contradictions, structuring logical arguments, and rendering reasoned legal verdicts."
    ],
    stats: [
      { label: "Exam Format", value: "Descriptive Papers", sublabel: "Subjective handwritten" },
      { label: "Merit Weightage", value: "80% - 85%", sublabel: "Decisive selection marks" },
      { label: "Paper Duration", value: "3 Hours / Paper", sublabel: "5 to 6 papers across 3 days" },
      { label: "Crucial Section", value: "Judgment Writing", sublabel: "50 - 100 Marks per exam" }
    ],
    eligibility: {
      education: "LL.B Degree holder who has qualified the respective State Judicial Services Preliminary Screening Examination.",
      ageLimit: "21 to 35 years (PCS-J) / 35 to 45 years (HJS) as prescribed in notification.",
      experience: "Fresh law graduates (PCS-J) / 7 years Bar practice (HJS).",
      citizenship: "Citizen of India.",
      keyConditions: [
        "Securing minimum qualifying marks in each individual Mains paper (typically 33% to 40%) as mandated by High Court rules.",
        "Attaining overall aggregate cut-off (typically 45% to 50%) to receive the Viva-Voce interview call."
      ]
    },
    stages: [
      {
        step: "Paper I",
        title: "Civil Law - I",
        duration: "3 Hours",
        marks: "200 Marks",
        description: "Covers core civil and commercial substantive laws, contract disputes, specific reliefs, and state-specific rent statutes.",
        highlights: [
          "Code of Civil Procedure, 1908 (Pleadings, Res Judicata, Execution, Interim Orders).",
          "Indian Contract Act, 1872 & Sale of Goods Act, 1930.",
          "Indian Partnership Act, 1932 & Specific Relief Act, 1963.",
          "Delhi Rent Control Act / State Urban Tenancy Laws."
        ]
      },
      {
        step: "Paper II",
        title: "Civil Law - II",
        duration: "3 Hours",
        marks: "200 Marks",
        description: "Focuses on personal laws, property transactions, testamentary succession, tortious liabilities, and limitation.",
        highlights: [
          "Hindu Law (Marriage, Succession, Coparcenary, Adoption, Minority & Guardianship).",
          "Muslim Personal Law (Marriage, Dower, Talaq, Gifts, Wills, Inheritance).",
          "Transfer of Property Act, 1882 & Indian Succession Act, 1925.",
          "Law of Torts & Indian Limitation Act, 1963."
        ]
      },
      {
        step: "Paper III",
        title: "Criminal Law & Procedure",
        duration: "3 Hours",
        marks: "200 Marks",
        description: "In-depth substantive and procedural criminal justice papers, including evidentiary admissibility and special statutes.",
        highlights: [
          "Bharatiya Nyaya Sanhita (BNS) / Indian Penal Code (IPC).",
          "Bharatiya Nagarik Suraksha Sanhita (BNSS) / Code of Criminal Procedure (CrPC).",
          "Bharatiya Sakshya Adhiniyam (BSA) / Indian Evidence Act.",
          "Protection of Children from Sexual Offences (POCSO) & Negotiable Instruments Act (Sec 138)."
        ]
      },
      {
        step: "Paper IV & V",
        title: "Judgment Writing & Language / Translation",
        duration: "3 Hours Each",
        marks: "150 – 250 Marks",
        description: "Drafting judicial orders, framing issues/charges, English essay, precis writing, and vernacular translation.",
        highlights: [
          "Civil Judgment Writing: Marshalling evidence, issue-wise findings, operative decree.",
          "Criminal Judgment Writing: Weighing prosecution witnesses, Section 313 examination, verdict of conviction/acquittal.",
          "Translation: English to Hindi/Regional Language and Hindi/Regional Language to English."
        ]
      }
    ],
    subjects: [
      {
        name: "Civil Judgment Writing & Issue Framing",
        category: "Drafting & Practical",
        weightage: "Extremely Critical (50-100 Marks)",
        keyTopics: [
          "Framing of Issues in Civil Suits (Order 14 CPC): Distinguishing issues of law from issues of fact",
          "Marshalling and Appreciation of Oral & Documentary Evidence",
          "Writing a Reasoned Finding on Each Issue with Precedential Citations",
          "Drafting the Relief and Operative Decree portion (Costs, Interest, Injunction terms)"
        ],
        recommendedActs: ["CPC Order 14 & 20", "High Court Civil Judgment Writing Manuals"]
      },
      {
        name: "Criminal Judgment Writing & Charge Framing",
        category: "Drafting & Practical",
        weightage: "Extremely Critical (50-100 Marks)",
        keyTopics: [
          "Drafting Formal Charges (BNSS Sec 234-247 / CrPC Sec 211-224)",
          "Appreciation of Prosecution vs Defence Witness Statements",
          "Handling Inconsistencies, Hostile Witnesses & Expert Medical Opinions",
          "Operative Verdict: Acquittal with reasons or Conviction with Separate Sentencing Hearing"
        ],
        recommendedActs: ["BNSS Chapter XVII / CrPC Chapter XVII", "Criminal Trial Guidelines"]
      },
      {
        name: "Analytical Answer Writing in Substantive Law",
        category: "Theoretical & Problem Solving",
        weightage: "Core Marks Driver (300+ Marks)",
        keyTopics: [
          "5-Step Ideal Answer Framework: Issue -> Statutory Provision -> Landmark Supreme Court Ratio -> Analysis -> Conclusion",
          "Handling Complex Hypothetical Fact Patterns",
          "Balancing Bare Act language with conceptual jurisprudence"
        ],
        recommendedActs: ["All Core Bare Acts with Leading Supreme Court Judgments"]
      },
      {
        name: "Language, Translation & Legal Essays",
        category: "Language & Expression",
        weightage: "Mandatory Qualifying / Scoring (100-200 Marks)",
        keyTopics: [
          "Legal Translation from English to Vernacular and vice-versa",
          "Legal Essay Writing on Contemporary Socio-Legal Controversies",
          "Précis Writing and Vocabulary from Legal Maxims"
        ],
        recommendedActs: ["Standard Legal Terminology Dictionaries", "Vernacular Legal Glossary"]
      }
    ],
    stateExams: [
      {
        state: "Delhi (DJS Mains)",
        examName: "Delhi Judicial Service Mains",
        conductingBody: "High Court of Delhi",
        selectionPattern: "4 Papers • 850 Marks (Civil I: 200, Civil II: 200, Criminal: 200, GK & Language: 250)",
        keyFeatures: "Almost 100% problem-oriented questions. Bare Acts are not provided; tests deep analytical legal drafting under intense time constraints."
      },
      {
        state: "Uttar Pradesh (UP PCS-J Mains)",
        examName: "UPPSC Judicial Services Mains",
        conductingBody: "UPPSC",
        selectionPattern: "6 Papers • 1000 Marks (GK: 200, English: 100, Hindi: 100, Law I: 200, Law II: 200, Law III: 200)",
        keyFeatures: "Includes 200-mark General Knowledge paper and dedicated local land revenue statutes alongside substantive law."
      },
      {
        state: "Haryana (HCS-J Mains)",
        examName: "Haryana Judicial Branch Mains",
        conductingBody: "High Court of Punjab & Haryana / HPSC",
        selectionPattern: "5 Papers • 900 Marks (Civil I: 200, Civil II: 200, Criminal: 200, English: 200, Hindi: 100)",
        keyFeatures: "Known for rigorous evaluation in Civil Law papers and extensive judgment writing questions."
      }
    ],
    strategyGuide: [
      {
        phase: "Step 1: Master the 5-Point Answer Framework",
        title: "Structure Every Subjective Response",
        focus: "Never write unstructured paragraphs; use the judicial answering framework.",
        recommendations: [
          "Heading 1: Core Legal Controversy & Identification of Applicable Law.",
          "Heading 2: Statutory Provisions & Bare Act Language.",
          "Heading 3: Ratio Decidendi of Landmark Supreme Court Judgments.",
          "Heading 4: Application of Law to the Factual Matrix.",
          "Heading 5: Final Judicial Finding / Conclusion."
        ]
      },
      {
        phase: "Step 2: Speed Writing & Time Budgeting",
        title: "15-Minute Rule per 20-Mark Question",
        focus: "Completing 100% of the paper is the #1 secret of toppers.",
        recommendations: [
          "Allocate exactly 1.8 minutes per mark (e.g., 18 minutes for a 10-mark question, 25 minutes for judgment writing).",
          "Practice daily with a stopwatch; an unattempted question is an automatic zero.",
          "Use neat subheadings, bullet points, and underline case citations for visual readability."
        ]
      },
      {
        phase: "Step 3: Judgment Writing Mastery",
        title: "Daily Practice of Issue & Charge Framing",
        focus: "Securing 40+ out of 50 in judgment writing papers.",
        recommendations: [
          "Memorize the standard opening preamble for criminal and civil judgments.",
          "Practice framing precise issues using the formula: 'Whether the plaintiff proves that...?'",
          "Ensure the operative order has clear execution terms, date of compliance, and costs."
        ]
      }
    ],
    faqs: [
      {
        q: "How important is judgment writing in the Judicial Services Mains exam?",
        a: "Judgment writing is often the single most differentiating paper. While most candidates write similar theoretical answers, those who format judgments with proper preambles, issue framing, evidentiary appreciation, and clear operative orders gain a 20-30 mark lead."
      },
      {
        q: "Do I need to cite exact case names and AIR/SCC citations in Mains?",
        a: "Citing the exact case name and the underlying legal principle (ratio decidendi) is highly rewarded. If you don't remember the exact volume or page number, write 'as held by the Hon'ble Supreme Court in [Case Name]' rather than guessing incorrect numbers."
      },
      {
        q: "What is the passing criteria in Mains written exams?",
        a: "Most High Courts require candidates to secure a minimum of 33% to 40% in each individual paper and an overall aggregate of 45% to 50% across all papers to qualify for the interview round."
      },
      {
        q: "How many pages should I write for a 10-mark or 20-mark question?",
        a: "Quality always trumps quantity. For a 10-mark question, 2 to 2.5 well-structured pages (approx. 250-300 words) focusing on relevant provisions, precedents, and analysis are ideal. For a 20-mark problem, 4 to 5 pages are standard."
      },
      {
        q: "How should I prepare for language and translation papers?",
        a: "Read editorial sections of vernacular and English newspapers daily. Practice translating 2 legal paragraphs every day to build fluency in legal vocabulary (e.g., 'plaintiff' = वादी, 'decree' = डिक्री, 'acquittal' = दोषमुक्ति, 'bail' = ज़मानत)."
      },
      {
        q: "How to prepare for the transition to BNS, BNSS, and BSA in Mains?",
        a: "Learn the comparative table of corresponding old vs new sections. High Courts allow candidates to cite new provisions while referencing previous leading jurisprudence (e.g., 'Section 103 BNS corresponding to Section 302 IPC')."
      }
    ]
  },

  // 5. INTERVIEW GUIDANCE
  {
    slug: "interview-guidance",
    aliases: ["interview", "viva-voce", "personality-test"],
    title: "Interview Guidance & Viva-Voce",
    shortTitle: "Interview Guidance",
    tagline: "Personality Test, Judicial Demeanor, Bench Simulation & Current Legal Affairs",
    badge: "STAGE III FINAL HURDLE • VIVA-VOCE MASTERCLASS",
    iconName: "Users",
    desc: "Comprehensive masterclass for the Judicial Services Viva-Voce / Personal Interview. Learn how to exhibit judicial temperament, tackle unexpected legal hypotheticals, navigate controversial constitutional questions, and pass minimum qualifying cutoffs.",
    overview: [
      "The Viva-Voce (Personality Test) is the ultimate defining stage of the judicial selection process. Conducted by a panel of sitting High Court Judges, senior judicial administrators, and distinguished jurists, it evaluates whether the candidate possesses the judicial temperament required to preside over a court of law.",
      "The board does not merely test theoretical memory—which has already been examined in the Mains—but assesses emotional composure under stress, impartiality, clarity of spoken thought, intellectual integrity, and rapid legal reasoning.",
      "In several premier states including Delhi (DJS/DHJS), Haryana, and UP, scoring minimum qualifying marks in the Viva-Voce (e.g., 35% to 50%) is mandatory. Failing to secure the viva-voce cutoff results in disqualification regardless of top scores in Mains."
    ],
    stats: [
      { label: "Panel Composition", value: "High Court Judges", sublabel: "Sitting judges & jurists" },
      { label: "Session Duration", value: "20 – 40 Mins", sublabel: "Comprehensive interview" },
      { label: "Qualifying Threshold", value: "35% - 50% Cutoff", sublabel: "Mandatory in Delhi & Haryana" },
      { label: "Core Evaluation", value: "Temperament & Poise", sublabel: "Integrity, reasoning, neutrality" }
    ],
    eligibility: {
      education: "Candidate must have cleared both the Preliminary and Mains Written Examinations of the respective Judicial Service.",
      ageLimit: "Within prescribed notification age bracket on cut-off date.",
      experience: "Submission of original educational certificates, Bar council enrolment, and character verification documents.",
      citizenship: "Citizen of India.",
      keyConditions: [
        "Presentation of impeccable background, academic records, and clean police/character verification.",
        "Formal court attire (Black advocate coat, white shirt, black tie/bands, dark trousers/saree/suit as per prescribed dress code)."
      ]
    },
    stages: [
      {
        step: "Dimension 1",
        title: "Judicial Demeanor & Emotional Composure",
        duration: "Observed Throughout",
        marks: "30% Weightage",
        description: "Assessing candidate's body language, eye contact, respectful tone, ability to stay calm under grilling, and neutral expression.",
        highlights: [
          "Calm reaction when challenged by the panel on a controversial opinion.",
          "Polite and confident posture without signs of arrogance or excessive nervousness.",
          "Attentive listening before responding; avoiding interrupting the Judges."
        ]
      },
      {
        step: "Dimension 2",
        title: "Practical Legal Reasoning & Hypotheticals",
        duration: "Core Interaction",
        marks: "40% Weightage",
        description: "Testing candidate's ability to adjudicate real-world trial courtroom scenarios presented on the spot.",
        highlights: [
          "Bail dilemmas: Balancing personal liberty vs societal interest in heinous crimes.",
          "Procedural crises: What will you do if an advocate creates a ruckus or refuses to argue?",
          "Evidentiary contradictions: Handling hostile witnesses and circumstantial evidence chains."
        ]
      },
      {
        step: "Dimension 3",
        title: "Constitutional Awareness & Current Affairs",
        duration: "Evaluative Discussion",
        marks: "30% Weightage",
        description: "Evaluating awareness of recent Supreme Court constitutional bench verdicts, legal controversies, and local socio-legal issues.",
        highlights: [
          "Landmark rulings of the Supreme Court over the preceding 12 months.",
          "Constitutional values: Basic structure doctrine, separation of powers, judicial independence.",
          "Familiarity with home state laws, local geography, and personal bio-data."
        ]
      }
    ],
    subjects: [
      {
        name: "Hypothetical Courtroom & Trial Dilemmas",
        category: "Practical Application",
        weightage: "High Probability (30%-40%)",
        keyTopics: [
          "Scenario: Accused seeks bail in an offence punishable with life; public protests demand arrest. How will you decide?",
          "Scenario: An FIR is delayed by 7 days in a sexual assault case. How will this delay affect your appreciation of evidence?",
          "Scenario: Counsel for defendant repeatedly seeks adjournments under Order 17 CPC. What coercive steps will you take?",
          "Scenario: Confession made to police officer vs extra-judicial confession to a doctor."
        ],
        recommendedActs: ["CrPC/BNSS Bail Provisions", "Evidence/BSA Confession Laws", "CPC Order 17"]
      },
      {
        name: "Landmark & Recent Supreme Court Rulings",
        category: "Constitutional & Precedential",
        weightage: "High Probability (30%)",
        keyTopics: [
          "Right to Privacy & Digital Evidence jurisprudence",
          "Arbitration Section 11 & Section 34 recent Supreme Court rulings",
          "Bail Guidelines (Satender Kumar Antil v. CBI, Arnesh Kumar v. State of Bihar)",
          "Sentencing jurisprudence: Bachan Singh, Manoj & Ors, Machhi Singh"
        ],
        recommendedActs: ["Recent Supreme Court Law Reports (SCC / SCR / LiveLaw / Bar & Bench)"]
      },
      {
        name: "Personal Bio-Data & Home State Law",
        category: "Personal & Demographic",
        weightage: "Foundational (20%)",
        keyTopics: [
          "Why do you want to join the Judiciary instead of continuing active Bar practice or corporate law?",
          "Detailed questions on your law school, favorite legal subjects, and dissertation topics",
          "Socio-legal challenges unique to your home state or district",
          "Local state rent, land revenue, and tenancy laws"
        ],
        recommendedActs: ["Candidate's Detailed Application Form (DAF)", "State Local Statutes"]
      },
      {
        name: "Judicial Ethics & Integrity Scenarios",
        category: "Ethics & Demeanor",
        weightage: "Qualifying Filter (10%-20%)",
        keyTopics: [
          "Restatement of Values of Judicial Life (1997 Supreme Court Charter)",
          "Recusal from a case: When must a judge recuse and when is recusal unjustified?",
          "Conflict of interest: If a close relative or former colleague appears before your bench",
          "Social media usage guidelines for judicial officers"
        ],
        recommendedActs: ["Bangalore Principles of Judicial Conduct", "Supreme Court Code of Judicial Ethics"]
      }
    ],
    stateExams: [
      {
        state: "Delhi (DJS & DHJS Viva-Voce)",
        examName: "Delhi Judicial Service Interview",
        conductingBody: "High Court of Delhi",
        selectionPattern: "150 Marks (DJS) / 250 Marks (DHJS) • Mandatory 35% to 40% Qualifying Cut-Off",
        keyFeatures: "Intensive 30-40 minute questioning by a bench of sitting Delhi High Court Judges. Focus on problem solving, quick procedural thinking, and ethical dilemmas."
      },
      {
        state: "Haryana (HCS-J Viva-Voce)",
        examName: "Haryana Judicial Branch Interview",
        conductingBody: "High Court of Punjab & Haryana / HPSC",
        selectionPattern: "200 Marks • Mandatory 50% Minimum Qualifying Rule (100 Marks)",
        keyFeatures: "Strict qualifying cutoff; candidates who do not achieve 50% are automatically disqualified regardless of high Mains written marks."
      },
      {
        state: "Uttar Pradesh (UP PCS-J Interview)",
        examName: "UPPSC Judicial Services Interview",
        conductingBody: "UPPSC & Allahabad High Court Judges",
        selectionPattern: "100 Marks • Interview added to Mains total",
        keyFeatures: "Mix of legal questions, UP local governance, constitutional jurisprudence, and general awareness."
      }
    ],
    strategyGuide: [
      {
        phase: "Step 1: Master Your Bio-Data (DAF)",
        title: "Every Word on Your Resume is Fair Game",
        focus: "Prepare answers for every subject, college project, and work experience mentioned.",
        recommendations: [
          "Prepare a convincing, dignified 90-second response to: 'Introduce yourself and your journey into law.'",
          "Never give generic answers like 'I want to serve society'; focus on judicial temperament, dispute resolution, and constitutional fidelity.",
          "Be prepared to explain any gaps in education or career transition with complete honesty."
        ]
      },
      {
        phase: "Step 2: How to Say 'I Do Not Know'",
        title: "Dignified Intellectual Honesty",
        focus: "Never bluff or guess statutes before High Court Judges.",
        recommendations: [
          "If you do not know a specific section, politely state: 'I am unable to recall the exact provision at this moment, Hon'ble Sir/Ma'am.'",
          "The panel values intellectual honesty far above false overconfidence.",
          "If asked for an opinion on a controversial topic, state both sides before offering a balanced, constitutional conclusion."
        ]
      },
      {
        phase: "Step 3: Mock Interview Simulations",
        title: "Full-Dress Bench Practice",
        focus: "Desensitizing performance anxiety under intense judicial scrutiny.",
        recommendations: [
          "Participate in at least 3 to 5 full mock interviews with retired judges and senior advocates.",
          "Record and review your video to eliminate filler words ('umm', 'basically', 'like') and eye contact shifting.",
          "Maintain formal attire: Black coat, spotless white shirt, formal tie or advocate band."
        ]
      }
    ],
    faqs: [
      {
        q: "What is the dress code for the Judicial Services Interview?",
        a: "Male candidates should wear a formal black advocate coat, white full-sleeved shirt, black tie or advocate band (if enrolled), dark trousers, and polished black formal shoes. Female candidates should wear a white formal suit or saree with a black blazer/coat."
      },
      {
        q: "Can I choose Hindi as my interview language?",
        a: "In states like UP, MP, Rajasthan, and Bihar, candidates can choose Hindi or English. In states like Delhi and Punjab & Haryana, the interview is conducted predominantly in English, though polite bilingual communication is accepted when discussing local concepts."
      },
      {
        q: "What should I do if the interview panel disagrees with my answer?",
        a: "Never argue aggressively with the Judges. Maintain respectful poise and say: 'I appreciate your perspective, My Lord; I was looking at it from [statutory angle], but I respectfully stand corrected.' Exhibiting humility is a hallmark of judicial demeanor."
      },
      {
        q: "Why do some states have a minimum qualifying cutoff in the Interview?",
        a: "High Courts mandate minimum interview marks (e.g., 35% in Delhi, 50% in Haryana) to ensure that only candidates with genuine judicial temperament, poise, and ethical integrity are appointed, preventing candidates with high bookish memory from being selected if they lack basic judicial demeanor."
      },
      {
        q: "How many months of current affairs should I prepare for Viva-Voce?",
        a: "Focus thoroughly on Supreme Court constitutional bench judgments, legal controversies, and legislative amendments from the preceding 12 months. Track major cases on LiveLaw, Bar & Bench, and official Supreme Court reports."
      },
      {
        q: "How should I answer 'Why do you want to become a Judge'?",
        a: "Highlight your passion for impartial dispute resolution, upholding the Rule of Law, writing reasoned judgments, and contributing to justice delivery. Avoid theatrical or overly emotional responses."
      }
    ]
  },

  // 6. PREVIOUS PAPERS
  {
    slug: "previous-papers",
    aliases: ["previous-year-papers", "pyqs", "question-papers"],
    title: "Previous Papers & Question Analysis",
    shortTitle: "Previous Papers (PYQs)",
    tagline: "Comprehensive Repository of Prelims & Mains Solved Papers Across State Judiciaries",
    badge: "EXAM INTELLIGENCE • SOLVED PYQ REPOSITORY",
    iconName: "FileText",
    desc: "Archive and trend analysis of Judicial Services Previous Year Question Papers (PYQs) for Preliminary and Mains exams across Delhi, UP, Haryana, Rajasthan, MP, and Higher Judicial Services.",
    overview: [
      "Analyzing Previous Years Question Papers (PYQs) is the single highest return-on-investment strategy in judicial service exam preparation. It demystifies the examination board's mindset, reveals recurring legal themes, and provides the ultimate benchmark for self-evaluation.",
      "A systematic study of past 10 to 15 years' papers reveals that more than 60% of questions in Prelims and 50% of conceptual themes in Mains revolve around consistent core statutory sections and recurring trial problems.",
      "This section provides an organized breakdown of past examination patterns, changing question trends from 2015 to 2025, and high-yield topic matrices across major High Court jurisdictions in India."
    ],
    stats: [
      { label: "Paper Coverage", value: "Past 10-15 Years", sublabel: "Prelims & Mains papers" },
      { label: "State Coverage", value: "All Major States", sublabel: "Delhi, UP, Haryana, MP, RJ" },
      { label: "Repeat Question Ratio", value: "60% Core Themes", sublabel: "High predictive value" },
      { label: "Model Solutions", value: "Structured Framework", sublabel: "Mains answer structures" }
    ],
    eligibility: {
      education: "Open resource for all judicial service aspirants, law students, and practicing advocates.",
      ageLimit: "Applicable for both PCS-J (21-35 years) and HJS (35-45 years) exam preparations.",
      experience: "Useful at every phase: beginner orientation, intermediate testing, and final revision.",
      citizenship: "Applicable across all Indian High Court jurisdictions.",
      keyConditions: [
        "Consistent timed practice using authentic previous year papers under strict invigilation conditions.",
        "Cross-referencing old questions with the new criminal laws (BNS, BNSS, BSA) for contemporary relevance."
      ]
    },
    stages: [
      {
        step: "Phase 1",
        title: "Diagnostic Baseline Assessment",
        duration: "Initial 2 Weeks",
        marks: "Baseline Scoring",
        description: "Attempting 2-3 recent Prelims and Mains papers without preparation to identify personal strengths and blind spots.",
        highlights: [
          "Reveals exact knowledge gaps between college syllabus and judicial examination standards.",
          "Highlights weaknesses in time management and Bare Act recall.",
          "Establishes a realistic score baseline to track monthly progress."
        ]
      },
      {
        step: "Phase 2",
        title: "Topic-Wise PYQ Integration",
        duration: "Core Study Phase",
        marks: "Subject Mastery",
        description: "Solving all previous year questions on a specific chapter (e.g., Section 11 CPC or Section 300 IPC) immediately after studying that topic.",
        highlights: [
          "Anchors theoretical reading to actual examination question framing patterns.",
          "Uncovers repeated illustrations, provisos, and subtle traps used by examiners.",
          "Eliminates the fear of facing unfamiliar questions in the exam hall."
        ]
      },
      {
        step: "Phase 3",
        title: "Full-Length Timed Exam Simulations",
        duration: "Final 6 Weeks",
        marks: "Exam Readiness",
        description: "Writing full 3-hour Mains papers and 2-hour Prelims papers on official blank answer booklets under strict timers.",
        highlights: [
          "Builds physical stamina required to write 6 subjective papers over 3 consecutive days.",
          "Calculates exact words-per-minute handwriting speed to prevent leaving questions unanswered.",
          "Tests mental endurance and focus during high-pressure testing sessions."
        ]
      }
    ],
    subjects: [
      {
        name: "Delhi Judicial Service (DJS) Paper Trends",
        category: "State PYQ Analysis",
        weightage: "Analytical & Problem Centric",
        keyTopics: [
          "Prelims: Shift toward multi-statute scenario questions (Arbitration + CPC + Commercial Courts Act)",
          "Mains Civil I & II: Long factual problems requiring extraction of undisclosed causes of action",
          "Mains Criminal: Appreciation of conflicting witness testimonies and circumstantial evidence",
          "Recent Years: 2024, 2023, 2022, 2019, 2018, 2017 papers analysis"
        ],
        recommendedActs: ["DJS Past 10 Years Question Bank with Model Answers"]
      },
      {
        name: "Uttar Pradesh (UP PCS-J) Paper Trends",
        category: "State PYQ Analysis",
        weightage: "Substantive & Local Law Centric",
        keyTopics: [
          "Prelims: Direct section numbers, landmark historical dates, and General Studies paper",
          "Mains Law Papers: Balanced mix of direct theory questions and problem-based scenarios",
          "Local Laws Paper: UP Revenue Code, 2006, Urban Buildings Act, Municipalities Act",
          "Recent Years: 2023, 2018, 2016, 2015, 2013 papers analysis"
        ],
        recommendedActs: ["UP PCS-J Solved Papers & Local Law Manual"]
      },
      {
        name: "Haryana Judicial Service (HCS-J) Paper Trends",
        category: "State PYQ Analysis",
        weightage: "Procedural & High Accuracy",
        keyTopics: [
          "Prelims: Detailed Bare Act questions; strict penalty for wrong answers (0.20 negative marking)",
          "Mains: Exhaustive civil procedure questions, Haryana Urban Rent Control Act, and Hindi essay",
          "Recent Years: 2024, 2021, 2019, 2017, 2015 papers analysis"
        ],
        recommendedActs: ["Haryana Judicial Service Previous Papers Repository"]
      },
      {
        name: "Rajasthan Judicial Service (RJS) Paper Trends",
        category: "State PYQ Analysis",
        weightage: "Bare Act Speed & Language",
        keyTopics: [
          "Prelims: Rapid Bare Act recall; 70 Law + 30 Hindi & English Grammar questions (No negative marking)",
          "Mains: Direct law questions, framing of issues/charges, and translation exercises",
          "Recent Years: 2024, 2021, 2019, 2017, 2016 papers analysis"
        ],
        recommendedActs: ["RJS Previous 10 Years Question Compendium"]
      },
      {
        name: "Higher Judicial Service (HJS) Paper Trends",
        category: "Senior Judiciary PYQs",
        weightage: "Trial & Appellate Mastery",
        keyTopics: [
          "DHJS & UPHJS: Sessions trial judgment writing, Commercial Courts Act, Arbitration Section 34",
          "PMLA, NDPS, POCSO, and Corruption Act case problems",
          "Appellate civil jurisprudence and execution of high-value decrees"
        ],
        recommendedActs: ["Higher Judicial Service Solved Question Papers (2015-2024)"]
      }
    ],
    stateExams: [
      {
        state: "Delhi (DJS & DHJS)",
        examName: "DJS / DHJS Question Archive",
        conductingBody: "High Court of Delhi",
        selectionPattern: "Full Archive: 2012 – 2024 Prelims & Mains Papers with Official Answer Keys",
        keyFeatures: "Highest standard of legal analytical testing in India. Excellent practice for any judicial aspirant across the country."
      },
      {
        state: "Uttar Pradesh (UP PCS-J)",
        examName: "UPPSC Judicial Papers Archive",
        conductingBody: "UPPSC",
        selectionPattern: "Full Archive: 2013 – 2023 Prelims & Mains Papers",
        keyFeatures: "Essential for mastering comprehensive legal GK, historical landmark cases, and local state land laws."
      },
      {
        state: "Haryana (HCS-J)",
        examName: "Haryana Judicial Papers Archive",
        conductingBody: "High Court of Punjab & Haryana",
        selectionPattern: "Full Archive: 2014 – 2024 Prelims & Mains Papers",
        keyFeatures: "Benchmark for intricate procedural law questions and standard judgment writing exercises."
      }
    ],
    strategyGuide: [
      {
        phase: "Step 1: Reverse Question Mapping",
        title: "Annotate Your Bare Act with Exam Years",
        focus: "Mark every section in your Bare Act with years it was asked (e.g., 'DJS 2023, UP 2018').",
        recommendations: [
          "Write small pencil notes next to Bare Act sections indicating which states have tested that provision.",
          "Identify 'hotspot chapters' (e.g., Order 21 CPC, Sections 300 IPC/BNS, Sections 27 Evidence/BSA).",
          "Review hotspot chapters three times more frequently than non-tested chapters."
        ]
      },
      {
        phase: "Step 2: Compare Model Answers",
        title: "Deconstruct Toppers' Mains Copies",
        focus: "Study how rank 1 scorers structure answers within space and time constraints.",
        recommendations: [
          "Analyze the ratio of statutory citation to factual analysis in top-scoring answer copies.",
          "Observe the visual layout: clear headings, numbered lists, highlighted case laws, and diagrammatic flows.",
          "Identify common mistakes in low-scoring answers (rambling introductions, missing conclusions)."
        ]
      },
      {
        phase: "Step 3: Adapt Old Papers to New Criminal Laws",
        title: "BNS / BNSS / BSA Modernization",
        focus: "Solving past IPC/CrPC/Evidence questions by citing the new 2023 criminal codes.",
        recommendations: [
          "When solving a 2018 question on murder (Sec 302 IPC), write the answer quoting Section 103 BNS 2023.",
          "When solving a bail question on Section 437 CrPC, practice using Section 480 BNSS 2023.",
          "This dual-citation practice gives you a formidable competitive edge in upcoming examinations."
        ]
      }
    ],
    faqs: [
      {
        q: "How many years of previous papers should I solve for the judiciary?",
        a: "Aspirants should solve at least the past 10 to 12 years of question papers for their target state, and at least the past 5 years of neighboring state papers (e.g., if preparing for UP, also solve Delhi, Haryana, MP, and Rajasthan papers)."
      },
      {
        q: "Do questions actually repeat in judicial service exams?",
        a: "While verbatim questions may not repeat in problem-oriented states like Delhi, the underlying legal principles, statutory illustrations, and landmark cases repeat in 60% to 70% of questions across all states."
      },
      {
        q: "How should I handle old criminal law questions now that BNS, BNSS, and BSA are in force?",
        a: "Solve old questions by applying the corresponding provisions of BNS, BNSS, and BSA. Note the historical continuity: the substantive principles of culpable homicide, theft, arrest, and confessions remain fundamentally similar while section numbering and procedural timelines have updated."
      },
      {
        q: "Should I solve PYQs before or after completing the syllabus?",
        a: "Both! Solve 1-2 papers initially as a diagnostic test. Then solve chapter-wise PYQs concurrently while reading each subject. Finally, solve full-length timed papers after completing the syllabus."
      },
      {
        q: "Where can I find authentic model answers for Mains PYQs?",
        a: "Authentic model answers can be compiled by referencing standard commentaries (Mulla on CPC, Ratanlal & Dhirajlal on Crimes and Evidence) and studying certified answer scripts of successful candidates released under RTI."
      },
      {
        q: "How do PYQs help in judgment writing preparation?",
        a: "Past Mains papers provide real problem statements and witness depositions used in actual exams. Practicing these problems gives you direct familiarity with the level of factual complexity set by High Court examiners."
      }
    ]
  }
];

export function getJudicialServiceBySlug(slug: string): JudicialServiceDetail | undefined {
  const normalized = slug.toLowerCase().trim();
  return judicialServicesData.find(
    (s) => s.slug === normalized || s.aliases.includes(normalized)
  );
}

export function getAllJudicialServices(): JudicialServiceDetail[] {
  return judicialServicesData;
}
