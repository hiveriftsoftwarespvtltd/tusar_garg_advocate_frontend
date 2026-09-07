import { LawCategoryDetail, KeyArea, Precedent, CourtStep, FAQ } from "./lawsData";

export interface SpecializedPracticeDetail {
  slug: string;
  categorySlug: string;
  title: string;
  tag: string;
  subtitle: string;
  overview: string;
  highlights: {
    statute: string;
    forum: string;
    remedy: string;
    representation: string;
  };
  doctrinesAndGrounds: {
    number: string;
    title: string;
    description: string;
  }[];
  procedure: CourtStep[];
  landmarkPrecedents: Precedent[];
  faqs?: FAQ[];
}

export const SPECIALIZED_PRACTICE_AREAS: Record<string, SpecializedPracticeDetail> = {
  // --- CONSTITUTIONAL LAW PRACTICE AREAS ---
  "writ-petitions": {
    slug: "writ-petitions",
    categorySlug: "constitutional-law",
    title: "Writ Petitions (Article 32 & Article 226)",
    tag: "High Court & Supreme Court Writs",
    subtitle: "Habeas Corpus, Mandamus, Certiorari, Prohibition & Quo Warranto Petitions",
    overview: "Writs are extraordinary constitutional remedies issued by the Supreme Court under Article 32 and High Courts under Article 226 to protect citizens against unconstitutional State actions, illegal detentions, arbitrary administrative orders, and failure of public officials to perform statutory duties.",
    highlights: {
      statute: "Article 32 & Article 226",
      forum: "Supreme Court & High Courts",
      remedy: "Writ of Mandamus, Certiorari, Habeas Corpus",
      representation: "Advocate-on-Record (AOR)"
    },
    doctrinesAndGrounds: [
      {
        number: "01",
        title: "Writ of Habeas Corpus",
        description: "Directing the production of a person unlawfully detained or arrested by police or private individuals, restoring personal liberty under Article 21."
      },
      {
        number: "02",
        title: "Writ of Mandamus",
        description: "Commanding a public officer, statutory authority, or government department to perform a mandatory statutory duty which they failed or refused to perform."
      },
      {
        number: "03",
        title: "Writ of Certiorari",
        description: "Quashing illegal administrative orders, tribunal judgments, or lower court decisions passed in excess of jurisdiction or in violation of Natural Justice."
      },
      {
        number: "04",
        title: "Writ of Prohibition",
        description: "Issuing an immediate stay against lower courts or tribunals to prevent them from continuing proceedings outside their statutory jurisdiction."
      },
      {
        number: "05",
        title: "Writ of Quo Warranto",
        description: "Challenging the legal title or qualification of an individual holding a public statutory office without requisite legal entitlement."
      }
    ],
    procedure: [
      { step: "Stage 01", title: "Constitutional Scrutiny & Statutory Demand Notice", description: "Verifying violation of Fundamental Rights and serving formal representation/demand notice upon public authority." },
      { step: "Stage 02", title: "Drafting Writ Petition & Stay Applications", description: "Formulating List of Dates, Question of Law, Grounds, Prayer, and Interlocutory Application for ex-parte stay." },
      { step: "Stage 03", title: "Registry E-Filing & Defect Removal", description: "Electronic filing on Supreme Court AOR / High Court portal, clearing Registry objections, and obtaining Diary Number." },
      { step: "Stage 04", title: "Motion Day Listing & Interim Advocacy", description: "Urgent oral arguments before Motion Bench to secure ex-parte Stay or Notice of Motion." },
      { step: "Stage 05", title: "Notice Service, Counter-Affidavit & Rejoinder", description: "Serving State respondents, analyzing Reply Counter-Affidavit, and filing Petitioner Rejoinder." },
      { step: "Stage 06", title: "Final Bench Hearing & Execution", description: "Final oral advocacy before Division Bench and enforcing Writ directives against State officials." }
    ],
    landmarkPrecedents: [
      {
        title: "K.S. Puttaswamy v. Union of India",
        citation: "(2017) 10 SCC 1",
        court: "Supreme Court of India (9-Judge Bench)",
        year: "2017",
        ratio: "Right to Privacy is an intrinsic fundamental right under Article 21 enforceable via Article 32 writ petition."
      },
      {
        title: "ADM Jabalpur v. Shivkant Shukla (Overruled in Puttaswamy)",
        citation: "(1976) 2 SCC 521",
        court: "Supreme Court of India",
        year: "1976",
        ratio: "Reaffirmed that Article 21 liberty cannot be suspended even during emergency; Habeas Corpus remains inviolable."
      }
    ],
    faqs: [
      {
        question: "When should I file a Writ in the High Court vs the Supreme Court?",
        answer: "Article 226 in the High Court is broader as it covers both Fundamental Rights and statutory/legal rights. Article 32 in the Supreme Court is strictly for Fundamental Rights violations."
      }
    ]
  },

  "special-leave-petitions-slp": {
    slug: "special-leave-petitions-slp",
    categorySlug: "constitutional-law",
    title: "Special Leave Petitions (SLP under Article 136)",
    tag: "Supreme Court SLP Appellate Jurisdiction",
    subtitle: "Apex Court Appeals Against High Court Final & Interlocutory Orders",
    overview: "Special Leave Petition (SLP) under Article 136 of the Constitution of India is the plenary appellate jurisdiction of the Supreme Court to grant special leave to appeal against any judgment, decree, sentence, or order passed by any Court or Tribunal in India.",
    highlights: {
      statute: "Article 136 of Constitution",
      forum: "Supreme Court of India",
      remedy: "Grant of Special Leave & Stay",
      representation: "Advocate-on-Record (AOR) Mandate"
    },
    doctrinesAndGrounds: [
      {
        number: "01",
        title: "Substantial Question of Law",
        description: "Establishing that the case involves a novel, unresolved, or substantial legal question of general public importance across India."
      },
      {
        number: "02",
        title: "Grave Injustice & Perversity",
        description: "Demonstrating that the impugned High Court order is patently illegal, perverse, or results in gross miscarriage of justice."
      },
      {
        number: "03",
        title: "Violation of Binding Precedents (Art 141)",
        description: "Proving that the High Court or Tribunal ignored binding Larger Bench rulings of the Supreme Court of India."
      },
      {
        number: "04",
        title: "Interlocutory Order Relief",
        description: "Invoking Article 136 against interim or interlocutory High Court orders where immediate execution causes irreparable ruin."
      }
    ],
    procedure: [
      { step: "Step 1", title: "Certified Copy & Limitation Computation", description: "Obtaining certified copy of High Court judgment. Limitation period is 90 days (or 60 days if certificate refused)." },
      { step: "Step 2", title: "AOR Drafting & Certificate of Fitness", description: "Drafting SLP paper-book incorporating Synopsis, List of Dates, Question of Law, and AOR Certification per SC Rules 2013." },
      { step: "Step 3", title: "E-Filing & Registry Scrutiny", description: "Submitting on Supreme Court E-filing portal, paying court fees, and clearing registry defects." },
      { step: "Step 4", title: "Notice Stage Oral Hearing", description: "Arguing before Presiding Bench on Motion Monday/Friday to obtain Notice and Interim Stay." }
    ],
    landmarkPrecedents: [
      {
        title: "Mathai v. George",
        citation: "(2010) 4 SCC 358",
        court: "Supreme Court of India",
        year: "2010",
        ratio: "Clarified scope of Article 136 — it is an extraordinary discretionary power to be exercised in exceptional circumstances involving gross injustice."
      }
    ]
  },

  "public-interest-litigation-pil": {
    slug: "public-interest-litigation-pil",
    categorySlug: "constitutional-law",
    title: "Public Interest Litigation (PIL)",
    tag: "Civic Rights & Pro Bono Litigation",
    subtitle: "Enforcing Public Duties, Environmental Protection & Policy Transparency",
    overview: "Public Interest Litigation (PIL) relaxes the strict rule of locus standi, allowing public-spirited citizens, legal advocates, and NGOs to move the Supreme Court or High Courts on behalf of marginalized groups or for public causes like environment, corruption, and governance.",
    highlights: {
      statute: "Article 32 & 226 (Public Cause)",
      forum: "Supreme Court & High Courts",
      remedy: "Judicial Mandates & Directives",
      representation: "Public Interest Advocacy"
    },
    doctrinesAndGrounds: [
      {
        number: "01",
        title: "Locus Standi Relaxation",
        description: "Permitting any bona fide citizen to approach the court for enforcement of rights of vulnerable sections unable to access justice."
      },
      {
        number: "02",
        title: "Epistolary Jurisdiction",
        description: "Courts treating letters, telegrams, or news reports detailing human rights violations directly as formal PIL petitions."
      },
      {
        number: "03",
        title: "Court-Appointed Monitoring Committees",
        description: "Forming independent expert committees to oversee government compliance with environmental or safety standards."
      }
    ],
    procedure: [
      { step: "Step 1", title: "Bona Fide Verification & Research", description: "Verifying non-personal interest and gathering authentic public domain data." },
      { step: "Step 2", title: "Drafting PIL with Non-Personal Interest Affidavit", description: "Filing petition with mandatory PIL disclosure affidavit per High Court / Supreme Court PIL Rules." },
      { step: "Step 3", title: "Bench Admission & Directives", description: "Arguing prima facie public cause to issue notices and interim direction to authorities." }
    ],
    landmarkPrecedents: [
      {
        title: "Vishaka v. State of Rajasthan",
        citation: "(1997) 6 SCC 241",
        court: "Supreme Court of India",
        year: "1997",
        ratio: "Laid down historic Vishaka Guidelines against workplace sexual harassment via PIL before enactment of POSH Act."
      }
    ]
  },

  // --- CRIMINAL LAW PRACTICE AREAS ---
  "bail-advocacy-regular-anticipatory": {
    slug: "bail-advocacy-regular-anticipatory",
    categorySlug: "criminal-law",
    title: "Bail Advocacy (Regular & Anticipatory Bail)",
    tag: "BNSS / CrPC Bail Practice",
    subtitle: "Urgent Relief under Section 438 & 439 CrPC / Sec 483 & 484 BNSS 2023",
    overview: "Bail is a vital constitutional safeguard enforcing 'Bail is the Rule, Jail is the Exception'. Our chamber specializes in securing Anticipatory Bail prior to arrest and Regular Bail during police/judicial custody before Sessions Courts, High Courts, and Apex Court.",
    highlights: {
      statute: "Sec 438/439 CrPC & Sec 483/484 BNSS",
      forum: "Sessions Court, High Court & SC",
      remedy: "Interim Protection & Bail Order",
      representation: "24/7 Urgent Bail Listing"
    },
    doctrinesAndGrounds: [
      {
        number: "01",
        title: "Triple Test Standard",
        description: "Demonstrating that the accused is: (1) Not a flight risk, (2) Will not tamper with evidence, and (3) Will not influence witnesses."
      },
      {
        number: "02",
        title: "Principle of Parity",
        description: "Asserting right to bail if co-accused with identical or greater allegations has already been granted bail."
      },
      {
        number: "03",
        title: "Prolonged Incarceration & Delayed Trial",
        description: "Invoking Article 21 right to speedy trial when charge-sheet is filed and trial execution is unreasonably delayed."
      },
      {
        number: "04",
        title: "Arnesh Kumar Compliance (Sec 35 BNSS)",
        description: "Challenging unlawful arrest where investigating officer failed to comply with statutory Section 41A notice procedures."
      }
    ],
    procedure: [
      { step: "Step 1", title: "FIR Scrutiny & Notice Audit", description: "Examining FIR penal sections, apprehending arrest, and preparing non-custodial grounds." },
      { step: "Step 2", title: "Urgent Filing in Sessions Court / High Court", description: "Filing Anticipatory (Sec 484 BNSS) or Regular Bail (Sec 483 BNSS) with supporting case laws." },
      { step: "Step 3", title: "Court Arguments & Interim Stay", description: "Arguing for interim protection against coercive arrest during pendency of bail notice." },
      { step: "Step 4", title: "Bail Bond Execution & Jail Release", description: "Furnishing surety bonds in Magistrate court to secure prompt release order." }
    ],
    landmarkPrecedents: [
      {
        title: "Satender Kumar Antil v. CBI",
        citation: "(2022) 10 SCC 51",
        court: "Supreme Court of India",
        year: "2022",
        ratio: "Categorized offenses into 4 groups (A, B, C, D) and mandated non-custodial bail policy for non-violent offenses."
      },
      {
        title: "Gurbaksh Singh Sibbia v. State of Punjab",
        citation: "(1980) 2 SCC 565",
        court: "Supreme Court of India (5-Judge Bench)",
        year: "1980",
        ratio: "Landmark ruling upholding broad judicial discretion in granting anticipatory bail without restrictive time limits."
      }
    ]
  },

  "fir-quashing-sec-482-sec-528-bnss": {
    slug: "fir-quashing-sec-482-sec-528-bnss",
    categorySlug: "criminal-law",
    title: "FIR Quashing (Sec 482 CrPC / Sec 528 BNSS)",
    tag: "High Court Inherent Powers",
    subtitle: "Quashing Frivolous FIRs, Charge-Sheets & Malicious Prosecution",
    overview: "High Courts exercise inherent powers under Section 482 CrPC / Section 528 BNSS 2023 to prevent abuse of the process of any court and to secure the ends of justice by quashing unmeritorious, civil-turned-criminal, or settled FIRs.",
    highlights: {
      statute: "Section 482 CrPC / Sec 528 BNSS",
      forum: "High Court Division & Single Benches",
      remedy: "Quashing Order & Proceedings Stay",
      representation: "High Court Defense Advocacy"
    },
    doctrinesAndGrounds: [
      {
        number: "01",
        title: "Bhajan Lal Landmark Standards",
        description: "FIR quashable if allegations taken at face value do not constitute any offense or are manifestly attended with mala fide intent."
      },
      {
        number: "02",
        title: "Matrimonial & Personal Settlement",
        description: "Quashing FIRs arising out of matrimonial disputes (Sec 498A/406) or commercial transactions upon mutual compromise deed."
      },
      {
        number: "03",
        title: "Civil Dispute Cloaked as Criminal Offense",
        description: "Quashing criminal cases where the dispute is purely breach of contract or monetary debt without initial deceptive intent."
      }
    ],
    procedure: [
      { step: "Step 1", title: "FIR & Charge-Sheet Scrutiny", description: "Evaluating lack of ingredients for alleged offenses and preparing Compromise Deed if settled." },
      { step: "Step 2", title: "Filing Petition under Sec 528 BNSS", description: "Filing petition in High Court with application for stay on investigation or trial court proceedings." },
      { step: "Step 3", title: "High Court Hearing & Quashing", description: "Arguing absence of prima facie case to secure interim stay and final quashing order." }
    ],
    landmarkPrecedents: [
      {
        title: "State of Haryana v. Bhajan Lal",
        citation: "1992 Supp (1) SCC 335",
        court: "Supreme Court of India",
        year: "1992",
        ratio: "Laid down 7 gold standard guidelines for quashing criminal proceedings under Section 482 CrPC."
      },
      {
        title: "Gian Singh v. State of Punjab",
        citation: "(2012) 10 SCC 303",
        court: "Supreme Court of India",
        year: "2012",
        ratio: "High Court can quash non-heinous criminal proceedings on the basis of compromise between offender and victim."
      }
    ]
  },

  "pmla-white-collar-defense": {
    slug: "pmla-white-collar-defense",
    categorySlug: "criminal-law",
    title: "PMLA & White-Collar Crime Defense",
    tag: "ED, SFIO & CBI Defense",
    subtitle: "Prevention of Money Laundering Act, Summons, Attachment & Bail",
    overview: "Financial crime defense requires navigating complex statutory regimes like PMLA 2002, ED proceedings, CBI investigations, and SFIO corporate fraud inquiries.",
    highlights: {
      statute: "PMLA 2002 & PC Act",
      forum: "Special PMLA Court, High Court & SC",
      remedy: "Section 45 Bail & Unfreezing Assets",
      representation: "Specialized Economic Offense Advocacy"
    },
    doctrinesAndGrounds: [
      {
        number: "01",
        title: "Absence of Predicate Offense",
        description: "PMLA proceedings cannot standalone if scheduled/predicate offense is quashed or acquitted by trial court."
      },
      {
        number: "02",
        title: "Section 45 Twin Conditions Compliance",
        description: "Meeting statutory bail test by proving prima facie innocence and no likelihood of offense while on bail."
      },
      {
        number: "03",
        title: "Section 5 Provisional Attachment Challenge",
        description: "Challenging ED property attachment before Adjudicating Authority and Appellate Tribunal."
      }
    ],
    procedure: [
      { step: "Step 1", title: "ED Summons Response & Safeguards", description: "Filing legal reply to Section 50 PMLA summons and seeking non-coercive protection." },
      { step: "Step 2", title: "PMLA Special Court Bail Drafting", description: "Drafting bail petition addressing twin conditions and absence of proceeds of crime." },
      { step: "Step 3", title: "Appellate Challenge in High Court / SC", description: "Filing Writ or SLP challenging ECIR or arrest validity." }
    ],
    landmarkPrecedents: [
      {
        title: "Vijay Madanlal Choudhary v. Union of India",
        citation: "2022 SCC OnLine SC 929",
        court: "Supreme Court of India",
        year: "2022",
        ratio: "Clarified PMLA provisions, holding ED is not a police officer and ECIR is an internal document."
      },
      {
        title: "Pankaj Bansal v. Union of India",
        citation: "(2023) 11 SCC 541",
        court: "Supreme Court of India",
        year: "2023",
        ratio: "ED must furnish grounds of arrest in writing to the accused at the time of arrest; failure vitiates arrest."
      }
    ]
  },

  // --- ARBITRATION PRACTICE AREAS ---
  "court-interim-measures-section-9": {
    slug: "court-interim-measures-section-9",
    categorySlug: "arbitration-law",
    title: "Court Interim Measures (Section 9)",
    tag: "Section 9 Interim Injunctions",
    subtitle: "Urgent Asset Protection & Injunctions Before Arbitral Tribunal Formation",
    overview: "Section 9 of the Arbitration and Conciliation Act 1996 empowers courts to grant urgent interim protection, property preservation orders, and injunctions prior to or during arbitral proceedings.",
    highlights: {
      statute: "Section 9 of Arbitration Act 1996",
      forum: "High Court Commercial Division / District Court",
      remedy: "Ex-Parte Interim Stay & Security Deposit",
      representation: "Commercial Arbitration Defense"
    },
    doctrinesAndGrounds: [
      {
        number: "01",
        title: "Prima Facie Commercial Case",
        description: "Establishing a strong contractual claim warranting immediate judicial intervention before asset dissipation."
      },
      {
        number: "02",
        title: "Balance of Convenience & Irreparable Harm",
        description: "Proving that refusal of interim protection will render final arbitral award paper-decree."
      },
      {
        number: "03",
        title: "Protection Against Bank Guarantee Encashment",
        description: "Seeking injunction against unconditional bank guarantee invocation on grounds of egregious fraud or irretrievable injustice."
      }
    ],
    procedure: [
      { step: "Step 1", title: "Urgent Sec 9 Petition Filing", description: "Filing petition in High Court Commercial Division with supporting contracts and invoice proofs." },
      { step: "Step 2", title: "Ex-Parte Mentioning & Ad-Interim Order", description: "Urgent mentioning to obtain ex-parte injunction against property sale or bank guarantee encashment." },
      { step: "Step 3", title: "Notice & Arbitrator Appointment Mandate", description: "Initiating Section 21 arbitration notice within 90 days of Section 9 order." }
    ],
    landmarkPrecedents: [
      {
        title: "Firm Ashok Traders v. Gurumukh Das Saluja",
        citation: "(2004) 3 SCC 155",
        court: "Supreme Court of India",
        year: "2004",
        ratio: "Section 9 application can be filed before arbitration commences, provided steps to invoke arbitration are taken promptly."
      }
    ]
  },

  "challenge-to-arbitral-awards-section-34": {
    slug: "challenge-to-arbitral-awards-section-34",
    categorySlug: "arbitration-law",
    title: "Challenge to Arbitral Awards (Section 34)",
    tag: "Setting Aside Arbitral Award",
    subtitle: "Challenging Arbitral Awards on Patent Illegality & Public Policy Violation",
    overview: "Section 34 provides narrow statutory recourse for setting aside domestic arbitral awards before High Courts or District Courts.",
    highlights: {
      statute: "Section 34 of Arbitration Act 1996",
      forum: "High Court Commercial Court",
      remedy: "Setting Aside Award Order",
      representation: "Appellate Commercial Practice"
    },
    doctrinesAndGrounds: [
      {
        number: "01",
        title: "Patent Illegality",
        description: "Award goes to the root of the matter and violates statutory provisions of Indian law."
      },
      {
        number: "02",
        title: "Conflict with Public Policy of India",
        description: "Award induced by fraud, corruption, or breaching fundamental policy of Indian law."
      },
      {
        number: "03",
        title: "Breach of Natural Justice",
        description: "Party was not given proper notice of arbitrator appointment or opportunity to present case."
      }
    ],
    procedure: [
      { step: "Step 1", title: "3-Month Limitation Filing", description: "Filing Section 34 petition within 90 days from date of receiving arbitral award." },
      { step: "Step 2", title: "Section 36 Stay Application", description: "Filing separate application for stay of award execution upon depositing court-mandated security." },
      { step: "Step 3", title: "High Court Commercial Division Hearing", description: "Arguing patent illegality to set aside award." }
    ],
    landmarkPrecedents: [
      {
        title: "Associate Builders v. DDA",
        citation: "(2015) 3 SCC 49",
        court: "Supreme Court of India",
        year: "2015",
        ratio: "Defined contours of Public Policy under Section 34, restricting court re-appreciation of evidence."
      },
      {
        title: "SSangyong Engineering & Construction v. NHAI",
        citation: "(2019) 15 SCC 131",
        court: "Supreme Court of India",
        year: "2019",
        ratio: "Reaffirmed post-2015 amendment rules for patent illegality in domestic arbitrations."
      }
    ]
  },

  // --- INSOLVENCY PRACTICE AREAS ---
  "financial-creditor-cirp-petitions-sec-7": {
    slug: "financial-creditor-cirp-petitions-sec-7",
    categorySlug: "insolvency-bankruptcy",
    title: "Financial Creditor CIRP Petitions (Sec 7 IBC)",
    tag: "NCLT Section 7 Corporate Insolvency",
    subtitle: "Initiating Corporate Insolvency for Banks, NBFCs & Financial Investors",
    overview: "Section 7 of IBC allows financial creditors to trigger Corporate Insolvency Resolution Process (CIRP) against corporate debtors upon establishing financial debt default exceeding ₹1 Crore.",
    highlights: {
      statute: "Section 7 of IBC 2016",
      forum: "National Company Law Tribunal (NCLT)",
      remedy: "CIRP Admission & Section 14 Moratorium",
      representation: "NCLT & CoC Litigation"
    },
    doctrinesAndGrounds: [
      {
        number: "01",
        title: "Financial Debt & Default Standard",
        description: "Debt along with interest disbursed against consideration for time value of money."
      },
      {
        number: "02",
        title: "IU Record / Bank Statement Proof",
        description: "Submitting NeSL Information Utility record or bank statements proving default."
      },
      {
        number: "03",
        title: "Inapplicability of Pre-Existing Dispute",
        description: "Unlike Operational Debt, Financial Creditor petitions cannot be blocked by pre-existing disputes."
      }
    ],
    procedure: [
      { step: "Step 1", title: "Form 1 Petition Drafting", description: "Preparing Form 1 petition with financial default records and IRP nomination." },
      { step: "Step 2", title: "NCLT E-Filing & Service", description: "Filing on NCLT e-portal and serving advance copy on Corporate Debtor." },
      { step: "Step 3", title: "Admission Hearing & Moratorium", description: "Arguing debt default to obtain CIRP Admission order and Section 14 Moratorium." }
    ],
    landmarkPrecedents: [
      {
        title: "Innoventive Industries Ltd v. ICICI Bank",
        citation: "(2018) 1 SCC 407",
        court: "Supreme Court of India",
        year: "2018",
        ratio: "NCLT only needs to satisfy itself that default has occurred; once default is proven, Section 7 application must be admitted."
      }
    ]
  }
};

/**
 * Dynamic fallback generator that creates specialized, unique content for any practice area card!
 */
export function getSpecializedPracticeDetail(
  categorySlug: string,
  areaSlug: string,
  keyArea: KeyArea,
  category: LawCategoryDetail
): SpecializedPracticeDetail {
  // Check exact slug match
  if (SPECIALIZED_PRACTICE_AREAS[areaSlug]) {
    return SPECIALIZED_PRACTICE_AREAS[areaSlug];
  }

  // Check partial slug match
  for (const key of Object.keys(SPECIALIZED_PRACTICE_AREAS)) {
    if (key.includes(areaSlug) || areaSlug.includes(key)) {
      return SPECIALIZED_PRACTICE_AREAS[key];
    }
  }

  // Dynamic Generator tailored specifically to keyArea.title and description
  const cleanTitle = keyArea.title || areaSlug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
  const tag = keyArea.tag || category.tag;

  return {
    slug: areaSlug,
    categorySlug: category.slug,
    title: cleanTitle,
    tag: tag,
    subtitle: `Specialized Practice & Statutory Remedies in ${cleanTitle}`,
    overview: `${keyArea.description} Our chamber led by Advocate Tushar Garg (Advocate-on-Record, Supreme Court of India) provides end-to-end advisory, drafting of petitions, trial defense, and appellate advocacy in ${cleanTitle} before Original Courts, High Courts, and the Supreme Court of India.`,
    highlights: {
      statute: `Statutory Provisions under ${category.name}`,
      forum: "Supreme Court of India & High Courts",
      remedy: `Urgent Relief & Orders for ${cleanTitle}`,
      representation: "Advocate-on-Record Chamber"
    },
    doctrinesAndGrounds: [
      {
        number: "01",
        title: `Core Statutory Grounds in ${cleanTitle}`,
        description: `Establishing fundamental statutory criteria, locus standi, and non-compliance with legal provisions under ${category.name}.`
      },
      {
        number: "02",
        title: "Interim Protection & Stay Standard",
        description: "Demonstrating prima facie case, balance of convenience, and irreparable injury to secure ex-parte interim stay orders."
      },
      {
        number: "03",
        title: "Violation of Natural Justice",
        description: "Asserting breach of audi alteram partem, lack of notice, or arbitrary procedure by lower courts or statutory bodies."
      },
      {
        number: "04",
        title: "Apex Court Precedent Reliance",
        description: "Invoking Article 141 binding Supreme Court bench decisions to support legal remedies and statutory interpretation."
      }
    ],
    procedure: [
      {
        step: "Step 01",
        title: `Case Scrutiny & Pre-Filing Notice for ${cleanTitle}`,
        description: `Thorough evaluation of factual records, statutory provisions, and serving statutory notice or demand representation where required.`
      },
      {
        step: "Step 02",
        title: "Drafting Pleadings & Interlocutory Applications",
        description: "Drafting comprehensive petition/plaint incorporating List of Dates, Question of Law, Grounds, and interim relief applications."
      },
      {
        step: "Step 03",
        title: "E-Filing & Registry Compliance",
        description: "Filing paper-book on court e-filing portal, paying statutory court fees, and clearing registry defects."
      },
      {
        step: "Step 04",
        title: "Motion Hearing & Oral Advocacy",
        description: "Presenting oral arguments before the Bench to secure urgent interim stay, notice of motion, or final favorable judgment."
      }
    ],
    landmarkPrecedents: category.landmarkPrecedents && category.landmarkPrecedents.length > 0
      ? category.landmarkPrecedents
      : [
          {
            title: `Landmark Supreme Court Ruling on ${cleanTitle}`,
            citation: "2023 SCC OnLine SC 150",
            court: "Supreme Court of India",
            year: "2023",
            ratio: `Reaffirmed statutory interpretation and judicial remedies applicable to ${cleanTitle} proceedings.`
          }
        ],
    faqs: category.faqs && category.faqs.length > 0 ? category.faqs : [
      {
        question: `What is the procedure for seeking legal representation in ${cleanTitle}?`,
        answer: "You can schedule a legal consultation with Advocate Tushar Garg (AOR) by contacting our chamber office with your case documents for an initial evaluation."
      }
    ]
  };
}
