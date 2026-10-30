export interface LegalDraftItem {
  id: string;
  title: string;
  category: "Notices" | "Petitions" | "Affidavits" | "Agreements" | "Power of Attorney";
  subtitle: string;
  governingLaw: string;
  courtForum: string;
  stampDuty: string;
  description: string;
  keyClauses: string[];
  templateText: string;
  tips: string[];
}

export interface LegalFaqItem {
  id: string;
  question: string;
  answer: string;
  category: "Supreme Court & AOR" | "Criminal Law & Bail" | "Civil & Property" | "Commercial & Arbitration" | "Litigant Rights";
  precedentRef?: string;
  statutoryRef: string;
}

export interface GlossaryTerm {
  term: string;
  category: "Constitutional" | "Criminal" | "Civil" | "Commercial" | "Procedural";
  phonetic?: string;
  definition: string;
  statutoryOrigin: string;
  courtApplication: string;
  landmarkCase: string;
}

export interface LegalMaximItem {
  maxim: string;
  literalMeaning: string;
  jurisprudenceScope: string;
  category: "Criminal Jurisprudence" | "Natural Justice" | "Civil & Torts" | "Administrative & Procedural";
  applicationInCourts: string;
  landmarkPrecedents: { caseName: string; ratio: string }[];
  statutoryEquivalent: string;
}

export interface CourtProcedureGuide {
  id: string;
  title: string;
  forum: string;
  category: "Constitutional" | "Criminal" | "Civil" | "Commercial" | "Registry";
  timeline: string;
  statutorySection: string;
  summary: string;
  steps: { stepNumber: number; title: string; description: string; checklist: string[] }[];
  essentialDocuments: string[];
  pitfallsToAvoid: string[];
}

// 1. LEGAL DRAFTS
export const legalDraftsData: LegalDraftItem[] = [
  {
    id: "draft-notice-138",
    title: "Statutory Demand Notice under Section 138 of Negotiable Instruments Act",
    category: "Notices",
    subtitle: "Formal legal demand for cheque dishonour within 30 days of bank return memo",
    governingLaw: "Section 138, 141 & 142 of Negotiable Instruments Act, 1881",
    courtForum: "Pre-litigation Notice (Prerequisite for Magistrate Court complaint)",
    stampDuty: "No court stamp required; sent via Registered Post AD / Speed Post",
    description: "Statutory legal notice required to be dispatched within 30 days of receiving the cheque return memo from the bank for 'funds insufficient' or other dishonour reasons, demanding payment within 15 days.",
    keyClauses: [
      "Recital of legally enforceable debt or liability",
      "Particulars of Cheque (Cheque No., Date, Drawee Bank, Amount)",
      "Bank Return Memo details and reason for dishonour",
      "Strict 15-day statutory demand for liquidating the cheque amount",
      "Caveat of criminal prosecution under Section 138 NI Act with 2-year imprisonment penalty"
    ],
    templateText: `REGISTERED A.D. / SPEED POST

LEGAL NOTICE UNDER SECTION 138 OF THE NEGOTIABLE INSTRUMENTS ACT, 1881

To,
[Drawer Name]
[Drawer Full Address]
[City, State, Pincode]

Under instructions from and on behalf of my client [Complainant Name], residing at [Complainant Address], I hereby serve upon you this Statutory Legal Notice:

1. That you, the Noticee, approached my Client on [Date] for a business transaction / loan towards discharge of your legally enforceable debt and liability amounting to Rs. [Amount in Figures]/- (Rupees [Amount in Words] only).

2. That in discharge of the aforesaid debt/liability, you issued Cheque bearing No. [Cheque Number] dated [Cheque Date] drawn on [Bank Name, Branch] in favour of my Client.

3. That my Client presented the said Cheque for encashment through their banker [Client Bank], but to the shock of my Client, the Cheque was returned unpaid by your bank with the Return Memo dated [Memo Date] endorsing the reason "FUNDS INSUFFICIENT" / "EXCEEDS ARRANGEMENT".

4. That you dishonestly and intentionally issued the said cheque knowing fully well that there were insufficient funds in your account, thereby committing an offence punishable under Section 138 of the Negotiable Instruments Act, 1881.

5. I, therefore, call upon you through this Notice to make the payment of the cheque amount of Rs. [Amount]/- to my Client within 15 (fifteen) days from the receipt of this notice, failing which my Client shall be constrained to institute criminal complaint proceedings under Section 138 of the Negotiable Instruments Act, 1881 against you in the competent Court of Metropolitan Magistrate / Judicial Magistrate, at your sole risk, costs, and consequences.

Dated: [Notice Date]
Place: [City]

[Advocate Name]
Advocate, Supreme Court / High Court
[Enrolment No.]
[Chamber Address & Contact]`,
    tips: [
      "Must be dispatched strictly within 30 calendar days from the date of the bank return memo.",
      "Retain speed post tracking receipt and download delivery confirmation as legal evidence under Section 27 General Clauses Act.",
      "The 15-day grace period begins on the day of delivery; cause of action arises on the 16th day."
    ]
  },
  {
    id: "draft-bail-439",
    title: "Regular Bail Application under Section 439 CrPC / Section 483 BNSS",
    category: "Petitions",
    subtitle: "High Court & Sessions Court application for release of accused in judicial custody",
    governingLaw: "Section 439 Code of Criminal Procedure, 1973 / Section 483 Bharatiya Nagarik Suraksha Sanhita, 2023",
    courtForum: "Court of Sessions / Hon'ble High Court",
    stampDuty: "Court Fee Stamp as prescribed by State Court Fees Act (typically ₹5 to ₹50) + Welfare Stamp",
    description: "Comprehensive bail application filed before the Sessions Court or High Court invoking extraordinary jurisdiction for release of an undertrial prisoner languishing in judicial custody.",
    keyClauses: [
      "FIR particulars, Police Station, and Sections invoked",
      "Period of judicial custody and completion of interrogation",
      "False implication and absence of flight risk / tampering evidence",
      "Undertaking to cooperate with trial and abide by all bail conditions",
      "Grounds of parity if co-accused have been granted bail"
    ],
    templateText: `IN THE COURT OF SESSIONS JUDGE AT [DISTRICT / CITY]
BAIL APPLICATION NO. ______ OF 202__

IN THE MATTER OF:
State (NCT of Delhi / Government of [State]) ... Prosecution
VERSUS
[Accused Name], S/o [Father Name]
R/o [Address], presently lodged in Central Jail, [Jail Name] ... Applicant / Accused

APPLICATION UNDER SECTION 439 OF Cr.P.C., 1973 (SECTION 483 BNSS, 2023) FOR GRANT OF REGULAR BAIL TO THE APPLICANT IN FIR NO. [FIR Number] DATED [FIR Date], U/S [Statutory Sections] REGISTERED AT P.S. [Police Station Name].

MOST RESPECTFULLY SHOWETH:

1. That the Applicant has been falsely implicated in the above-captioned FIR and was arrested on [Date of Arrest] and has been languishing in continuous judicial custody since [Date].

2. That the investigation qua the Applicant is complete, custodial interrogation is no longer required, and recovery has already been effected.

3. That the Applicant has no prior criminal antecedents, is a respectable citizen with deep roots in society, and there is no apprehension of fleeing from justice or tampering with prosecution witnesses.

4. That the Hon'ble Supreme Court in 'Satender Kumar Antil v. CBI' and 'Arnesh Kumar v. State of Bihar' has repeatedly held that bail is the rule and jail is the exception.

5. That the Applicant is ready and willing to furnish solvent surety and undertakes to abide by all terms and conditions imposed by this Hon'ble Court.

PRAYER:
Wherefore, it is most respectfully prayed that this Hon'ble Court may be pleased to:
(a) Grant regular bail to the Applicant in FIR No. [FIR No.] P.S. [Police Station Name];
(b) Pass any other order deemed fit in the interest of justice.

APPLICANT
THROUGH COUNSEL
[Advocate Name & Chamber]`,
    tips: [
      "Always attach certified copy of the FIR, arrest memo, and rejection order of the Magistrate.",
      "Check whether chargesheet has been filed; if filed, highlight that trial will take substantial time.",
      "Highlight parity if co-accused with similar role has already been released on bail."
    ]
  },
  {
    id: "draft-anticipatory-bail",
    title: "Anticipatory Bail Application under Section 438 CrPC / Section 482 BNSS",
    category: "Petitions",
    subtitle: "Pre-arrest protective bail application before Sessions Court or High Court",
    governingLaw: "Section 438 CrPC / Section 482 BNSS",
    courtForum: "Court of Sessions / High Court",
    stampDuty: "Court Fee Stamp + Advocate Welfare Stamp",
    description: "Application seeking direction for release on bail in the event of arrest where the applicant apprehends arrest on false or frivolous accusations of non-bailable offences.",
    keyClauses: [
      "Reason to believe applicant may be arrested on accusation of non-bailable offence",
      "Vindictive motive and malafides of complainant",
      "Undertaking under Section 438(2) to make oneself available for police interrogation",
      "Prohibition against inducement, threat, or promise to any witness"
    ],
    templateText: `IN THE HON'BLE HIGH COURT OF [STATE] AT [BENCH]
CRIMINAL MISCELLANEOUS NO. ______ OF 202__

IN THE MATTER OF:
[Applicant Name] ... Applicant
VERSUS
State (Govt. of [State]) ... Respondent

APPLICATION UNDER SECTION 438 Cr.P.C. (SECTION 482 BNSS) SEEKING ANTICIPATORY BAIL IN FIR NO. [FIR No.] / COMPLAINT PENDING AT P.S. [Police Station].

MOST RESPECTFULLY SHOWETH:
[Plead facts showing apprehension of arrest, clean antecedents, and willingness to join probe]

PRAYER:
Direct that in the event of arrest, the Applicant be admitted to bail...`,
    tips: [
      "Aver specifically that no prior application for anticipatory bail has been filed before any other court.",
      "Emphasize willingness to join police investigation as and when directed."
    ]
  },
  {
    id: "draft-legal-notice-recovery",
    title: "Legal Notice for Recovery of Outstanding Money / Commercial Debt",
    category: "Notices",
    subtitle: "Formal notice demanding settlement of unpaid invoices or contractual dues",
    governingLaw: "Indian Contract Act, 1872 & Commercial Courts Act, 2015",
    courtForum: "Pre-litigation Notice (Pre-institution mediation prerequisite)",
    stampDuty: "Nil",
    description: "Comprehensive demand notice drafted on advocate letterhead detailing invoice schedules, principal amount, contractual interest, and litigation warning.",
    keyClauses: [
      "Summary of purchase orders, supply invoices, and delivery challans",
      "Statement of ledger accounts and acknowledged outstanding balance",
      "Contractual interest rate (typically 18% to 24% p.a.)",
      "15-day deadline before filing Summary Suit under Order 37 CPC or Commercial Suit"
    ],
    templateText: `REGISTERED POST A.D. & EMAIL

To: [Debtor Company / Individual]
Address: [Full Address]

SUBJECT: LEGAL NOTICE FOR RECOVERY OF RS. [Amount] ALONG WITH INTEREST @ 18% P.A.

Sir/Madam,
Under instructions from our Client [Creditor Name], we state as follows:
1. That our Client supplied goods / services against Invoices...
2. That a total principal amount of Rs. [Amount] remains unpaid despite repeated reminders...
3. You are hereby called upon to pay the said sum within 15 days...`,
    tips: [
      "Enclose ledger statement and copies of unpaid invoices with proof of delivery.",
      "Send notice via email as well as speed post to verify receipt under Indian Evidence Act / BSA."
    ]
  },
  {
    id: "draft-affidavit-evidence",
    title: "Evidence by way of Affidavit under Order 18 Rule 4 CPC",
    category: "Affidavits",
    subtitle: "Examination-in-chief affidavit submitted by plaintiff or defendant in civil suit",
    governingLaw: "Order 18 Rule 4 Code of Civil Procedure, 1908",
    courtForum: "Civil Judge / District Court / High Court Original Side",
    stampDuty: "Non-judicial Stamp Paper (₹10 / ₹50 as per State Stamp Act) + Attestation by Oath Commissioner",
    description: "Formal sworn statement of the witness replacing oral examination-in-chief in civil proceedings, tendering exhibits and proving disputed documents.",
    keyClauses: [
      "Deponent's age, parentage, and residential verification",
      "Affirmation that deponent is conversant with suit facts",
      "Paragraph-by-paragraph proof of transactions and exhibited documents",
      "Verification clause stating what is true to personal knowledge vs legal advice"
    ],
    templateText: `IN THE COURT OF DISTRICT JUDGE AT [DISTRICT]
CIVIL SUIT NO. _____ OF 202__

IN THE MATTER OF:
[Plaintiff Name] ... Plaintiff
VERSUS
[Defendant Name] ... Defendant

EVIDENCE BY WAY OF AFFIDAVIT OF [WITNESS NAME] PW-1 / DW-1

I, [Witness Name], aged [Age] years, S/o [Father Name], R/o [Address], do hereby solemnly affirm and declare on oath as under:

1. That I am the Plaintiff / Authorized Representative and fully conversant with the facts of the present case.
2. That the contents of the Plaint may be read as part and parcel of this affidavit.
3. That the Agreement dated [Date] is exhibited herewith as EXHIBIT PW-1/1 (OSR).
4. That the Legal Notice dated [Date] is exhibited as EXHIBIT PW-1/2...

VERIFICATION:
Verified at [City] on this [Day] day of [Month, Year], that the contents of paragraphs 1 to 6 are true and correct to my personal knowledge and nothing material has been concealed therefrom.

DEPONENT`,
    tips: [
      "Bring original documents for comparison (OSR: Original Seen and Returned) when tendering the affidavit in court.",
      "Ensure verification clearly segregates personal knowledge from information derived from official records."
    ]
  },
  {
    id: "draft-general-power-attorney",
    title: "General Power of Attorney (GPA) for Court & Administrative Representation",
    category: "Power of Attorney",
    subtitle: "Authorizing trusted representative to sign pleadings, engage counsel, and manage properties",
    governingLaw: "Powers of Attorney Act, 1882 & Indian Stamp Act, 1899",
    courtForum: "Sub-Registrar Office (Registered GPA) or Notarized for litigation",
    stampDuty: "Stamp duty as per State Stamp Schedule (Registration mandatory if dealing with immovable property)",
    description: "Comprehensive GPA enabling an attorney-in-fact to represent the principal before courts, government authorities, municipal corporations, and legal tribunals.",
    keyClauses: [
      "Appointment and irrevocable / revocable status",
      "Authority to sign plaints, written statements, affidavits, and engage advocates",
      "Authority to receive money, give receipts, and represent before tribunals",
      "Indemnity and ratification clause"
    ],
    templateText: `GENERAL POWER OF ATTORNEY

KNOW ALL MEN BY THESE PRESENTS that I, [Principal Name], S/o [Father Name], R/o [Address], do hereby nominate, constitute and appoint [Attorney Name], S/o [Father Name], R/o [Address], as my true and lawful Attorney...`,
    tips: [
      "If the GPA authorizes sale or transfer of immovable property, registration before the Sub-Registrar is mandatory under Section 17 of the Registration Act, 1908.",
      "For NRI principals, the GPA must be executed before the Indian Consulate and adjudicated with stamp duty in India within 3 months of arrival."
    ]
  }
];

// 2. LEGAL FAQS
export const legalFaqsData: LegalFaqItem[] = [
  {
    id: "faq-1",
    category: "Supreme Court & AOR",
    question: "What is the role of an Advocate-on-Record (AOR) in the Supreme Court of India?",
    answer: "An Advocate-on-Record (AOR) is exclusively entitled under Order IV of the Supreme Court Rules 2013 and Article 145 of the Constitution to file petitions, Vakalatnamas, and pleadings on behalf of parties in the Supreme Court. While any senior advocate or enrolled lawyer may argue oral matters, only an AOR can formally institute a proceeding.",
    statutoryRef: "Order IV, Supreme Court Rules 2013; Article 145 Constitution of India",
    precedentRef: "Balraj Singh Malik v. Supreme Court of India (2012)"
  },
  {
    id: "faq-2",
    category: "Supreme Court & AOR",
    question: "What is a Special Leave Petition (SLP) under Article 136 of the Constitution?",
    answer: "A Special Leave Petition (SLP) is an extraordinary constitutional remedy enabling an aggrieved party to appeal to the Supreme Court against any judgment, decree, sentence, or order passed by any court or tribunal in India. It is a discretionary jurisdiction granted only when substantial questions of law of general public importance or grave miscarriages of justice arise.",
    statutoryRef: "Article 136 of the Constitution of India",
    precedentRef: "Pritam Singh v. State (1950) SCR 453; Kunhayammed v. State of Kerala (2000)"
  },
  {
    id: "faq-3",
    category: "Supreme Court & AOR",
    question: "What is a Caveat Petition and why is it filed in the Supreme Court?",
    answer: "A Caveat Petition is a protective filing under Order XVIII of the Supreme Court Rules (and Section 148A CPC). It notifies the court registry that the caveator must be given prior written notice and hearing before any ex-parte interim stay or adverse order is passed in an anticipated appeal or SLP by the opposing party.",
    statutoryRef: "Section 148A CPC & Order XVIII Supreme Court Rules 2013",
    precedentRef: "Deepak Khosla v. Union of India (2011)"
  },
  {
    id: "faq-4",
    category: "Criminal Law & Bail",
    question: "What is the difference between Anticipatory Bail and Regular Bail?",
    answer: "Anticipatory Bail (under Section 438 CrPC / 482 BNSS) is applied for before actual police arrest when a person has reason to believe they may be arrested on false or vindictive accusations. Regular Bail (under Section 437/439 CrPC / 480/483 BNSS) is applied for after the person has already been arrested and is in police or judicial custody.",
    statutoryRef: "Sections 438, 439 CrPC / Sections 482, 483 BNSS 2023",
    precedentRef: "Gurbaksh Singh Sibbia v. State of Punjab (1980); Sushila Aggarwal v. State (NCT of Delhi) (2020)"
  },
  {
    id: "faq-5",
    category: "Criminal Law & Bail",
    question: "Can police arrest without warrant in all criminal matters?",
    answer: "No. Under the Code of Criminal Procedure and BNSS, police can only arrest without warrant in Cognizable offences. In Non-Cognizable offences, police cannot investigate or arrest without obtaining prior permission or warrant from the Judicial Magistrate. Furthermore, under Section 41A CrPC / 35 BNSS, for offences punishable with up to 7 years imprisonment, issuance of notice of appearance is the default mandate rather than routine arrest.",
    statutoryRef: "Section 41 & 41A CrPC / Section 35 BNSS 2023",
    precedentRef: "Arnesh Kumar v. State of Bihar (2014) 8 SCC 273; Satender Kumar Antil v. CBI (2022)"
  },
  {
    id: "faq-6",
    category: "Civil & Property",
    question: "What are the three essential conditions for obtaining a Temporary Injunction under Order 39 CPC?",
    answer: "To obtain a temporary injunction under Order 39 Rules 1 & 2 of CPC, the applicant must establish: (1) Prima Facie Case in their favour; (2) Balance of Convenience tilting in their favor; and (3) Irreparable Injury that cannot be adequately compensated by monetary damages if the injunction is denied.",
    statutoryRef: "Order 39 Rules 1 & 2, Code of Civil Procedure, 1908",
    precedentRef: "Dalpat Kumar v. Prahlad Singh (1992) 1 SCC 719"
  },
  {
    id: "faq-7",
    category: "Commercial & Arbitration",
    question: "When can an Arbitral Award be challenged under Section 34 of the Arbitration Act?",
    answer: "An arbitral award can only be set aside on narrow grounds under Section 34 of the Arbitration and Conciliation Act, 1996: incapacity of a party, invalid arbitration agreement, lack of notice or inability to present case, award beyond terms of submission, patent illegality appearing on the face of the award, or conflict with public policy of India. The court cannot sit as an appellate body to reappreciate factual evidence.",
    statutoryRef: "Section 34, Arbitration & Conciliation Act, 1996",
    precedentRef: "Associate Builders v. DDA (2015); Ssangyong Engineering v. NHAI (2019)"
  },
  {
    id: "faq-8",
    category: "Litigant Rights",
    question: "What is Free Legal Aid and who is entitled to it in India?",
    answer: "Under Article 39A of the Constitution and Section 12 of the Legal Services Authorities Act, 1987, free legal aid (including advocate representation and court fee exemption) is guaranteed to: women, children, members of SC/ST, victims of human trafficking or disaster, disabled persons, persons in custody, and individuals whose annual income does not exceed statutory thresholds (typically ₹1 to ₹3 Lakhs depending on state).",
    statutoryRef: "Article 39A Constitution of India & Section 12 Legal Services Authorities Act, 1987",
    precedentRef: "Hussainara Khatoon v. Home Secretary, State of Bihar (1979)"
  }
];

// 3. GLOSSARY
export const glossaryData: GlossaryTerm[] = [
  {
    term: "Amicus Curiae",
    category: "Procedural",
    phonetic: "/əˈmiːkəs ˈkjʊəriaɪ/",
    definition: "Literally 'Friend of the Court'. An impartial senior advocate or legal expert appointed by the court to assist on complex questions of law or public interest, rather than representing either party.",
    statutoryOrigin: "Supreme Court Rules & High Court Inherent Powers",
    courtApplication: "Appointed in PILs, environmental matters, and capital punishment confirmation hearings.",
    landmarkCase: "In Re: Distribution of Essential Supplies and Services During Pandemic (2021)"
  },
  {
    term: "Caveat",
    category: "Civil",
    phonetic: "/ˈkæviæt/",
    definition: "A formal notice lodged by an interested party requesting the court not to take any action or grant ex-parte relief against them without prior notice and hearing.",
    statutoryOrigin: "Section 148A of Code of Civil Procedure, 1908",
    courtApplication: "Filed immediately by the winning party after obtaining a favorable decree to prevent stay orders in appeal.",
    landmarkCase: "Nirmal Chand v. Girindra Narayan (AIR 1978 Cal 492)"
  },
  {
    term: "Cognizable Offence",
    category: "Criminal",
    phonetic: "/ˈkɒɡnɪzəbl/",
    definition: "A serious crime in which a police officer has statutory authority to register an FIR, initiate investigation, and arrest the accused without a judicial warrant.",
    statutoryOrigin: "Section 2(c) CrPC 1973 / Section 2(g) BNSS 2023",
    courtApplication: "Includes murder, rape, robbery, dowry death, kidnapping, and dacoity.",
    landmarkCase: "Lalita Kumari v. Govt. of UP (2014) 2 SCC 1 (Mandatory FIR registration)"
  },
  {
    term: "Curative Petition",
    category: "Constitutional",
    phonetic: "/ˈkjʊərətɪv/",
    definition: "The final and ultimate judicial remedy in the Supreme Court, permissible only after the dismissal of a Review Petition, to cure gross miscarriage of justice or patent bias.",
    statutoryOrigin: "Evolved under Article 142 & Inherent Constitutional Powers",
    courtApplication: "Must be certified by a Senior Advocate establishing breach of natural justice.",
    landmarkCase: "Rupa Ashok Hurra v. Ashok Hurra (2002) 4 SCC 388"
  },
  {
    term: "Habeas Corpus",
    category: "Constitutional",
    phonetic: "/ˌheɪbiəs ˈkɔːrpəs/",
    definition: "A prerogative writ literally meaning 'You shall have the body'. Issued by Supreme Court (Art 32) or High Court (Art 226) directing the state to produce a detained person and justify the legality of detention.",
    statutoryOrigin: "Article 32 & 226 of the Constitution of India",
    courtApplication: "Used to safeguard personal liberty against illegal police custody or unlawful preventative detention.",
    landmarkCase: "ADM Jabalpur v. Shivkant Shukla (Overruled by KS Puttaswamy in 2017)"
  },
  {
    term: "Res Judicata",
    category: "Civil",
    phonetic: "/reɪz ˌdʒuːdɪˈkɑːtə/",
    definition: "A doctrine providing that a matter once finally adjudicated on merits by a competent court cannot be relitigated between the same parties or their successors on the same cause of action.",
    statutoryOrigin: "Section 11 of Code of Civil Procedure, 1908",
    courtApplication: "Bar against vexatious and multiple suits over the same disputed property or contractual right.",
    landmarkCase: "Satyadhyan Ghosal v. Deorajin Debi (AIR 1960 SC 941)"
  },
  {
    term: "Sub Judice",
    category: "Procedural",
    phonetic: "/sʌb ˈdʒuːdɪsiː/",
    definition: "Under judicial consideration. A rule prohibiting public debate or media trials that might prejudice ongoing proceedings before a court of law.",
    statutoryOrigin: "Contempt of Courts Act, 1971",
    courtApplication: "Restrains media houses and public officials from publishing biased conclusions during active trials.",
    landmarkCase: "Naresh Shridhar Mirajkar v. State of Maharashtra (1966)"
  },
  {
    term: "Zero FIR",
    category: "Criminal",
    phonetic: "/ˈzɪərəʊ/",
    definition: "An FIR that can be registered by any police station irrespective of jurisdictional territorial limits where the crime was committed, followed by transfer to the competent police station.",
    statutoryOrigin: "Justice Verma Committee recommendations & BNSS statutory mandate",
    courtApplication: "Crucial in emergency sexual assault or violent crimes occurring during travel across district lines.",
    landmarkCase: "Kirti Vashisht v. State (NCT of Delhi) 2019"
  }
];

// 4. LEGAL MAXIMS
export const legalMaximsData: LegalMaximItem[] = [
  {
    maxim: "Actus Non Facit Reum Nisi Mens Sit Rea",
    literalMeaning: "An act does not make a person guilty unless the mind is also guilty.",
    jurisprudenceScope: "Foundational pillar of substantive criminal jurisprudence distinguishing intentional crimes from accidental harm.",
    category: "Criminal Jurisprudence",
    applicationInCourts: "Mandatory requirement of proving Mens Rea (guilty mind) along with Actus Reus (prohibited conduct) for establishing criminal liability under IPC/BNS.",
    landmarkPrecedents: [
      { caseName: "R. v. Prince (1875) L.R. 2 C.C.R. 154", ratio: "Established strict liability boundaries and criminal intent principles." },
      { caseName: "State of Maharashtra v. Mayer Hans George (1965) 1 SCR 123", ratio: "Unless a statute expressly excludes Mens Rea, it is presumed to be an essential ingredient of crime." }
    ],
    statutoryEquivalent: "Sections 80 to 106 IPC / General Exceptions Chapter in BNS 2023"
  },
  {
    maxim: "Audi Alteram Partem",
    literalMeaning: "Hear the other side (No person shall be condemned unheard).",
    jurisprudenceScope: "Core pillar of Natural Justice requiring fair hearing, adequate notice, and disclosure of adverse material before passing orders.",
    category: "Natural Justice",
    applicationInCourts: "Applies universally across High Courts, subordinate courts, administrative tribunals, domestic inquiries, and statutory authorities.",
    landmarkPrecedents: [
      { caseName: "Maneka Gandhi v. Union of India (1978) 1 SCC 248", ratio: "Procedure depriving personal liberty must be just, fair, and reasonable, embracing natural justice." },
      { caseName: "State of Orissa v. Dr. Binapani Dei (1967) 2 SCR 625", ratio: "Administrative orders having civil consequences must comply with fair hearing rules." }
    ],
    statutoryEquivalent: "Article 14 & 21 Constitution of India"
  },
  {
    maxim: "Nemo Judex In Causa Sua",
    literalMeaning: "No person shall be a judge in their own cause (Rule against bias).",
    jurisprudenceScope: "Prohibits any judge, arbitrator, or adjudicator from having pecuniary, personal, or subject-matter bias in a dispute.",
    category: "Natural Justice",
    applicationInCourts: "Ground for recusal of judges and setting aside of arbitral awards or administrative orders where bias is established.",
    landmarkPrecedents: [
      { caseName: "A.K. Kraipak v. Union of India (1969) 2 SCC 262", ratio: "Even reasonable likelihood of bias invalidates administrative selection proceedings." },
      { caseName: "Ranjit Thakur v. Union of India (1987) 4 SCC 611", ratio: "Justice must not only be done, but manifestly and undoubtedly be seen to be done." }
    ],
    statutoryEquivalent: "Section 12 & Fifth Schedule Arbitration Act 1996; Principles of Judicial Conduct"
  },
  {
    maxim: "Ubi Jus Ibi Remedium",
    literalMeaning: "Where there is a right, there is a remedy.",
    jurisprudenceScope: "Foundational tenet of civil and constitutional law ensuring that every legal right breach is actionable before a court.",
    category: "Civil & Torts",
    applicationInCourts: "Justifies the exercise of constitutional writ jurisdiction under Articles 32 and 226 and inherent powers under Section 151 CPC.",
    landmarkPrecedents: [
      { caseName: "Ashby v. White (1703) 92 ER 126", ratio: "Malicious refusal to register vote was actionable even without monetary loss." },
      { caseName: "Bhim Singh v. State of J&K (1985) 4 SCC 677", ratio: "Monetary compensation awarded for illegal detention violating fundamental right to attend assembly." }
    ],
    statutoryEquivalent: "Section 9 Code of Civil Procedure, 1908 & Article 32/226 Constitution"
  },
  {
    maxim: "Ignorantia Juris Non Excusat",
    literalMeaning: "Ignorance of the law excuses no one.",
    jurisprudenceScope: "Every citizen and resident within the territory of India is presumed to know the law of the land.",
    category: "Criminal Jurisprudence",
    applicationInCourts: "Prevents offenders from pleading that they were unaware that their conduct constituted a statutory offence.",
    landmarkPrecedents: [
      { caseName: "Motilal Padampat Sugar Mills v. State of UP (1979) 2 SCC 409", ratio: "There is no presumption that every citizen knows the entirety of law, but ignorance cannot be pleaded as justification." }
    ],
    statutoryEquivalent: "Section 76 & 79 IPC / Corresponding BNS 2023 Provisions"
  },
  {
    maxim: "Res Ipsa Loquitur",
    literalMeaning: "The thing speaks for itself.",
    jurisprudenceScope: "Evidentiary doctrine in the law of torts and negligence where the mere occurrence of an accident implies negligence.",
    category: "Civil & Torts",
    applicationInCourts: "Shifts the burden of proof to the defendant to show absence of negligence (e.g., medical negligence or building collapses).",
    landmarkPrecedents: [
      { caseName: "Municipal Corporation of Delhi v. Subhagwanti (1966) 3 SCR 649", ratio: "Collapse of 80-year-old clock tower in Chandni Chowk applied Res Ipsa Loquitur against MCD." }
    ],
    statutoryEquivalent: "Section 106 Indian Evidence Act, 1872 / Section 109 BSA 2023"
  }
];

// 5. COURT PROCEDURES
export const courtProceduresData: CourtProcedureGuide[] = [
  {
    id: "proc-slp-supreme-court",
    title: "How to File a Special Leave Petition (SLP) in the Supreme Court",
    forum: "Supreme Court of India, New Delhi",
    category: "Constitutional",
    timeline: "90 days from High Court final judgment (60 days if certificate refused)",
    statutorySection: "Article 136 of the Constitution & Order XXI Supreme Court Rules, 2013",
    summary: "Comprehensive step-by-step roadmap for drafting, indexing, e-filing, curing registry defects, and listing an SLP before the Supreme Court Bench.",
    steps: [
      {
        stepNumber: 1,
        title: "Obtaining Certified Copy & Limitation Verification",
        description: "Obtain certified copy of the impugned High Court judgment immediately. Verify limitation period of 90 days under Article 133 of the Limitation Act, 1963.",
        checklist: ["Certified copy of High Court Order", "True typed copies of vernacular annexures", "Calculation of limitation timeline"]
      },
      {
        stepNumber: 2,
        title: "Drafting by Advocate-on-Record (AOR)",
        description: "Preparation of Synopsis & List of Dates, Questions of Law, Grounds of Special Leave, and Prayer clause strictly adhering to Order XXI format.",
        checklist: ["Chronological List of Dates", "Substantial Questions of Law framed", "Declaration under Order XXI that no other SLP filed"]
      },
      {
        stepNumber: 3,
        title: "Compilation of Paper Book & Affidavits",
        description: "Binding the official Paper Book containing Petition, Impugned Order, Trial Court orders, supporting annexures, and sworn affidavit of petitioner.",
        checklist: ["Affidavit in support verified by Oath Commissioner", "Vakalatnama signed in favour of registered AOR", "Court Fee Stamps attached"]
      },
      {
        stepNumber: 4,
        title: "E-Filing on SCI Portal & Defect Curation",
        description: "Upload digitally signed PDF on the Supreme Court e-Filing portal. Monitor Scrutiny defects issued by Registry and cure them within 28 days.",
        checklist: ["E-filing confirmation receipt generated", "Diary Number assigned", "Re-filing within prescribed 28-day window if defective"]
      },
      {
        stepNumber: 5,
        title: "Registration & Listing for Admission Hearing",
        description: "Once verified, an SLP (C) or SLP (Crl) number is allocated and the matter is listed before a designated Supreme Court Division Bench on Monday or Friday (Miscellaneous Days).",
        checklist: ["Advance service of copy to Standing Counsel / Caveator", "Mentioning before Chief Justice Bench if urgent stay needed"]
      }
    ],
    essentialDocuments: [
      "Certified Copy of High Court Impugned Judgment",
      "Vakalatnama in favour of Advocate-on-Record (AOR)",
      "Trial Court / First Appellate Court pleadings and orders",
      "Certified English translations of all regional language annexures",
      "Application for Exemption from filing certified copy (if pending)",
      "Application for Stay / Interim Relief"
    ],
    pitfallsToAvoid: [
      "Filing beyond 90 days without a comprehensive Application for Condonation of Delay stating sufficient cause day-by-day.",
      "Failing to serve advance copy to the Caveator who has already lodged a caveat under Order XVIII.",
      "Raising new factual disputes for the first time without prior foundation in High Court pleadings."
    ]
  },
  {
    id: "proc-bail-guide",
    title: "Step-by-Step Bail Application Procedure (Sessions Court & High Court)",
    forum: "Court of Sessions / High Court Bench",
    category: "Criminal",
    timeline: "Hearing typically scheduled within 3 to 7 working days of filing",
    statutorySection: "Section 437, 438, 439 CrPC / Section 480, 482, 483 BNSS 2023",
    summary: "Operational manual for securing regular bail, anticipatory bail, or interim protection, including police case diary calls and bail bond submission.",
    steps: [
      {
        stepNumber: 1,
        title: "Procuring FIR & Court Rejection Orders",
        description: "Obtain copy of FIR and certified copy of the Magistrate's bail rejection order before approaching the Sessions Court or High Court.",
        checklist: ["FIR Copy", "Arrest memo and remand papers", "Rejection order of lower court"]
      },
      {
        stepNumber: 2,
        title: "Drafting Bail Application & Grounds",
        description: "Draft comprehensive grounds establishing false implication, completion of custodial interrogation, absence of flight risk, and willingness to cooperate.",
        checklist: ["Grounds of parity with co-accused", "Medical or family urgency grounds", "Clean antecedents certificate"]
      },
      {
        stepNumber: 3,
        title: "Advance Service & Registry Filing",
        description: "Serve copy of bail application upon the Public Prosecutor / Standing Counsel for the State and file with court registry.",
        checklist: ["Advance notice served on State / IO", "Court fee stamp attached", "Advocate Vakalatnama signed"]
      },
      {
        stepNumber: 4,
        title: "Arguments on Bail & Production of Case Diary",
        description: "Arguments before the Judge while the Investigating Officer (IO) produces the Case Diary (CD) and Status Report.",
        checklist: ["Rebutting allegations in status report", "Offering substantial local surety"]
      },
      {
        stepNumber: 5,
        title: "Furnishing Bail Bonds & Release Warrant (Robkar)",
        description: "Upon grant of bail, submit Bail Bonds and Surety Bonds before the duty Magistrate to issue the release warrant (Robkar) to the Jail Superintendent.",
        checklist: ["Original title documents / RC of surety vehicle", "Aadhaar / ID verification of surety", "Release warrant transmitted to Jail"]
      }
    ],
    essentialDocuments: [
      "Certified Copy of FIR and lower court bail order",
      "Vakalatnama signed by accused in jail (attested by Jail Superintendent)",
      "Proof of residence, identity, and employment of accused",
      "Surety solvent documents (Property papers, ITR, or FDR)",
      "Medical records (if seeking bail on medical grounds)"
    ],
    pitfallsToAvoid: [
      "Suppression of criminal antecedents; always disclose any pending FIRs to avoid cancellation of bail for fraud.",
      "Delay in submitting bail bonds after order is passed, prolonging detention."
    ]
  },
  {
    id: "proc-cheque-bounce-138",
    title: "How to File a Section 138 Cheque Dishonour Case (Complete Lifecycle)",
    forum: "Court of Metropolitan Magistrate / Judicial Magistrate First Class",
    category: "Commercial",
    timeline: "Strict statutory window: 30 days for notice + 15 days cure + 30 days for complaint",
    statutorySection: "Sections 138, 141, 142 & 143A of Negotiable Instruments Act, 1881",
    summary: "Step-by-step prosecution guide from bank memo dishonour to filing complaint and claiming 20% interim compensation under Section 143A.",
    steps: [
      {
        stepNumber: 1,
        title: "Receiving Cheque Return Memo",
        description: "Bank issues memo stating 'Funds Insufficient'. Note exact date; 30-day clock begins immediately.",
        checklist: ["Original Cheque", "Bank Return Memo with official seal"]
      },
      {
        stepNumber: 2,
        title: "Dispatching Statutory 15-Day Demand Notice",
        description: "Advocate issues legal demand notice within 30 days via Registered Post AD / Speed Post.",
        checklist: ["Speed post receipts", "Online tracking report showing delivery date"]
      },
      {
        stepNumber: 3,
        title: "Waiting for Statutory 15-Day Cure Period",
        description: "The drawer has 15 days from delivery to pay. Cause of action arises on the 16th day.",
        checklist: ["Monitoring bank account for incoming funds"]
      },
      {
        stepNumber: 4,
        title: "Filing Criminal Complaint in Competent Court",
        description: "File complaint within 30 days of cause of action under Section 142(2) before the Magistrate where complainant bank branch is located.",
        checklist: ["Complaint petition with pre-summoning evidence affidavit", "Application under Sec 143A for 20% interim compensation"]
      },
      {
        stepNumber: 5,
        title: "Pre-Summoning Evidence & Issuance of Summons",
        description: "Court examines complainant affidavit, takes cognizance, and issues summons to the accused.",
        checklist: ["Complainant examination under Sec 200 CrPC", "Issuance of summons / bailable warrants"]
      }
    ],
    essentialDocuments: [
      "Original Dishonoured Cheque",
      "Original Bank Return Memo",
      "Copy of Statutory Legal Demand Notice",
      "Postal Receipts & Delivery Confirmation Track Report",
      "Invoices, Ledger Account, or Agreement proving underlying debt/liability"
    ],
    pitfallsToAvoid: [
      "Missing the strict 30-day deadline to send legal notice after bank return memo.",
      "Filing the complaint prematurely before the completion of 15 days from notice delivery."
    ]
  }
];
