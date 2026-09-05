"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  Search,
  BookOpen,
  Scale,
  FileText,
  Copy,
  Check,
  ArrowLeft,
  ChevronRight,
  ShieldCheck,
  Sparkles,
  Layers,
  Filter,
  ExternalLink,
  MessageSquare,
  Gavel,
  Phone,
  CheckCircle2
} from "lucide-react";
import { LawCategoryDetail } from "../../data/lawsData";

interface Props {
  detail: LawCategoryDetail;
}

export interface DetailedArticleItem {
  number: string;
  title: string;
  part: string;
  summary: string;
  remedy?: string;
  cases?: string[];
  tags: string[];
}

// 395+ Key Articles Dataset for Constitutional Law
const CONSTITUTIONAL_ARTICLES: DetailedArticleItem[] = [
  // Part I: The Union & Its Territory
  {
    number: "Article 1",
    title: "Name and Territory of the Union",
    part: "Part I: The Union & Its Territory",
    summary: "Declares that India, that is Bharat, shall be a Union of States. Specifies the territories of the States and Union Territories as set out in the First Schedule.",
    remedy: "Constitutional litigation regarding state boundary demarcations and territorial integrity.",
    cases: ["In re Berubari Union (1960)", "State of West Bengal v. Union of India (1963)"],
    tags: ["Union", "Territory", "Bharat", "Part I"]
  },
  {
    number: "Article 3",
    title: "Formation of New States and Alteration of Areas, Boundaries or Names of Existing States",
    part: "Part I: The Union & Its Territory",
    summary: "Empowers Parliament by law to form a new State, increase or diminish the area of any State, or alter the boundaries or name of any State after Presidential reference.",
    remedy: "Judicial review of reorganisation statutes under Article 3.",
    cases: ["Babulal Parate v. State of Bombay (1960)", "S.R. Bommai v. Union of India (1994)"],
    tags: ["State Reorganisation", "Parliament Power", "Part I"]
  },

  // Part II: Citizenship
  {
    number: "Article 5",
    title: "Citizenship at the Commencement of the Constitution",
    part: "Part II: Citizenship",
    summary: "Grants Indian citizenship at the commencement of the Constitution to every person who has a domicile in India and was born in India or whose parents were born in India.",
    remedy: "Writ Petitions challenging citizenship revocation or illegal deportation orders.",
    cases: ["Central Bank of India v. Ram Narain (1955)", "Pradeep Jain v. Union of India (1984)"],
    tags: ["Citizenship", "Domicile", "Part II"]
  },
  {
    number: "Article 11",
    title: "Parliament to Regulate the Right of Citizenship by Law",
    part: "Part II: Citizenship",
    summary: "Affirms Parliament's exclusive constitutional authority to make provisions with respect to the acquisition and termination of citizenship and all other matters relating thereto.",
    remedy: "Constitutional challenges to citizenship amendment laws (e.g. CAA 2019).",
    cases: ["Sarbananda Sonowal v. Union of India (2005)"],
    tags: ["Parliament Authority", "Citizenship Act", "Part II"]
  },

  // Part III: Fundamental Rights (Articles 12 to 35)
  {
    number: "Article 12",
    title: "Definition of 'The State' for Fundamental Rights Enforcement",
    part: "Part III: Fundamental Rights",
    summary: "Defines 'The State' to include Government & Parliament of India, Government & Legislatures of States, local authorities, and instrumental/agent entities of government for Art 32/226 writs.",
    remedy: "Writ maintainability challenge against public sector undertakings, statutory boards, and government instrumentalities.",
    cases: ["Ajay Hasia v. Khalid Mujib (1981)", "RD Shetty v. International Airport Authority (1979)", "Pradeep Kumar Biswas v. Indian Institute of Chemical Biology (2002)"],
    tags: ["State Definition", "Writs Maintainability", "Part III", "Fundamental Rights"]
  },
  {
    number: "Article 13",
    title: "Laws Inconsistent with or in Derogation of Fundamental Rights to be Void",
    part: "Part III: Fundamental Rights",
    summary: "Establishes Judicial Review. All pre-constitution or post-constitution laws inconsistent with Fundamental Rights are void to the extent of inconsistency (Doctrines of Eclipse & Severability).",
    remedy: "Challenging ultra vires statutory provisions, rules, and executive notifications.",
    cases: ["Bhikaji Narain Dhakras v. State of MP (1955)", "State of Bombay v. F.N. Balsara (1951)", "A.K. Gopalan v. State of Madras (1950)"],
    tags: ["Judicial Review", "Ultra Vires", "Severability", "Part III", "Fundamental Rights"]
  },
  {
    number: "Article 14",
    title: "Equality Before Law and Equal Protection of the Laws",
    part: "Part III: Fundamental Rights",
    summary: "Guarantees that the State shall not deny to any person equality before the law or the equal protection of the laws. Prohibits arbitrary state action and mandates reasonable classification.",
    remedy: "Writ Petitions against arbitrary government tenders, discriminatory policy decisions, and unguided executive discretion.",
    cases: ["E.P. Royappa v. State of Tamil Nadu (1974)", "Maneka Gandhi v. Union of India (1978)", "Shayara Bano v. Union of India (2017)"],
    tags: ["Equality", "Non-Arbitrariness", "Rule of Law", "Part III", "Fundamental Rights"]
  },
  {
    number: "Article 15",
    title: "Prohibition of Discrimination on Grounds of Religion, Race, Caste, Sex or Place of Birth",
    part: "Part III: Fundamental Rights",
    summary: "Prohibits state discrimination against any citizen solely on listed grounds while permitting special affirmative provisions for women, children, socially & educationally backward classes, and EWS.",
    remedy: "Challenging discriminatory admission rules, employment quotas, or social exclusion policies.",
    cases: ["State of Madras v. Champakam Dorairajan (1951)", "Indra Sawhney v. Union of India (1992)", "Janhit Abhiyan v. Union of India (2022)"],
    tags: ["Non-Discrimination", "Affirmative Action", "EWS", "Part III", "Fundamental Rights"]
  },
  {
    number: "Article 16",
    title: "Equality of Opportunity in Matters of Public Employment",
    part: "Part III: Fundamental Rights",
    summary: "Guarantees equal opportunity for all citizens in matters relating to employment or appointment to any office under the State. Regulates reservation in public employment.",
    remedy: "Writ petitions regarding government recruitment disputes, promotion quotas, and arbitrary selection processes.",
    cases: ["Indra Sawhney v. Union of India (Mandal Case 1992)", "M. Nagaraj v. Union of India (2006)", "Jarnail Singh v. Lachhmi Narain Gupta (2018)"],
    tags: ["Public Employment", "Reservation", "Part III", "Fundamental Rights"]
  },
  {
    number: "Article 17",
    title: "Abolition of Untouchability",
    part: "Part III: Fundamental Rights",
    summary: "Abolishes 'Untouchability' and forbids its practice in any form. Declares enforcement of any disability arising out of Untouchability an offense punishable in accordance with law.",
    remedy: "Prosecution under Protection of Civil Rights Act 1955 & SC/ST Prevention of Atrocities Act 1989.",
    cases: ["State of Karnataka v. Appa Balu Ingale (1993)", "People's Union for Democratic Rights v. Union of India (1982)"],
    tags: ["Social Justice", "Civil Rights", "Part III", "Fundamental Rights"]
  },
  {
    number: "Article 19",
    title: "Protection of Certain Rights Regarding Freedom of Speech, etc.",
    part: "Part III: Fundamental Rights",
    summary: "Guarantees 6 basic freedoms to citizens: (a) speech & expression, (b) peaceful assembly, (c) forming associations, (d) free movement, (e) residence, and (g) practicing any profession/business, subject to reasonable restrictions under Art 19(2)-(6).",
    remedy: "Writ challenges against internet shutdowns, press censorship, unlawful assembly bans, or business license revocations.",
    cases: ["Romesh Thappar v. State of Madras (1950)", "Shreya Singhal v. Union of India (2015)", "Anuradha Bhasin v. Union of India (2020)"],
    tags: ["Freedom of Speech", "Free Expression", "Assembly", "Part III", "Fundamental Rights"]
  },
  {
    number: "Article 20",
    title: "Protection in Respect of Conviction for Offences",
    part: "Part III: Fundamental Rights",
    summary: "Provides 3 fundamental criminal safeguards: (1) Ex-post facto criminal law prohibition [Art 20(1)], (2) Double Jeopardy protection [Art 20(2)], and (3) Protection against self-incrimination [Art 20(3)].",
    remedy: "Quashing of illegal criminal proceedings, retroactive penalty relief, and protection against forced narco-analysis or confession.",
    cases: ["Selvi v. State of Karnataka (2010)", "Maqbool Hussain v. State of Bombay (1953)", "Kedar Nath v. State of West Bengal (1953)"],
    tags: ["Criminal Protection", "Double Jeopardy", "Self-Incrimination", "Part III", "Fundamental Rights"]
  },
  {
    number: "Article 21",
    title: "Protection of Life and Personal Liberty",
    part: "Part III: Fundamental Rights",
    summary: "Declares that no person shall be deprived of his life or personal liberty except according to procedure established by law. Expansively interpreted to include Right to Privacy, Dignity, Clean Environment, Speedy Trial, and Legal Aid.",
    remedy: "Writ of Habeas Corpus, emergency bail applications, compensation for custodial violence, and enforcement of fundamental rights.",
    cases: ["Maneka Gandhi v. Union of India (1978)", "K.S. Puttaswamy v. Union of India (2017)", "Francis Coralie Mullin v. UT of Delhi (1981)", "Olga Tellis v. Bombay Municipal Corp (1985)"],
    tags: ["Right to Life", "Personal Liberty", "Privacy", "Habeas Corpus", "Part III", "Fundamental Rights"]
  },
  {
    number: "Article 21A",
    title: "Right to Education",
    part: "Part III: Fundamental Rights",
    summary: "Inserted by 86th Amendment Act 2002. Mandates the State to provide free and compulsory education to all children of the age of 6 to 14 years in such manner as the State may determine.",
    remedy: "Enforcement of 25% EWS quota in private schools under RTE Act 2009.",
    cases: ["Society for Unaided Private Schools of Rajasthan v. Union of India (2012)", "Pramati Educational & Cultural Trust v. Union of India (2014)"],
    tags: ["Right to Education", "RTE", "Part III", "Fundamental Rights"]
  },
  {
    number: "Article 22",
    title: "Protection Against Arrest and Detention in Certain Cases",
    part: "Part III: Fundamental Rights",
    summary: "Guarantees rights of arrested persons: right to be informed of grounds of arrest, right to consult advocate of choice, mandatory production before Magistrate within 24 hours, and preventive detention safeguards.",
    remedy: "Immediate Habeas Corpus Writ against illegal detention or violation of 24-hour Magistrate production mandate.",
    cases: ["D.K. Basu v. State of West Bengal (1997)", "Arnesh Kumar v. State of Bihar (2014)", "A.K. Roy v. Union of India (1982)"],
    tags: ["Arrest Safeguards", "Magistrate Production", "Preventive Detention", "Part III", "Fundamental Rights"]
  },
  {
    number: "Article 25",
    title: "Freedom of Conscience and Free Profession, Practice and Propagation of Religion",
    part: "Part III: Fundamental Rights",
    summary: "Guarantees freedom of conscience and the right freely to profess, practise and propagate religion, subject to public order, morality, health, and State reform laws.",
    remedy: "Writ petitions against state interference in essential religious practices.",
    cases: ["Bijoe Emmanuel v. State of Kerala (1986)", "Indian Young Lawyers Association (Sabarimala) v. State of Kerala (2018)", "Commissioner, Hindu Religious Endowments v. Sri Lakshmindra Thirtha Swamiar (Shirur Mutt 1954)"],
    tags: ["Religious Freedom", "Conscience", "Part III", "Fundamental Rights"]
  },
  {
    number: "Article 32",
    title: "Remedies for Enforcement of Fundamental Rights (Constitutional Writs)",
    part: "Part III: Fundamental Rights",
    summary: "Guarantees the right to move the Supreme Court by appropriate proceedings for enforcement of Part III Rights. Empowered Supreme Court to issue Writs of Habeas Corpus, Mandamus, Prohibition, Quo Warranto & Certiorari. Called the 'Heart and Soul' of the Constitution by Dr. B.R. Ambedkar.",
    remedy: "Direct Supreme Court Writ Petitions for immediate judicial relief against state action violating fundamental rights.",
    cases: ["Romesh Thappar v. State of Madras (1950)", "Bandhua Mukti Morcha v. Union of India (1984)", "L. Chandra Kumar v. Union of India (1997)"],
    tags: ["Article 32", "Supreme Court Writs", "Writs", "Habeas Corpus", "Mandamus", "Certiorari", "Part III"]
  },

  // Part IV: Directive Principles of State Policy (Articles 36 to 51)
  {
    number: "Article 39A",
    title: "Equal Justice and Free Legal Aid",
    part: "Part IV: Directive Principles of State Policy",
    summary: "Directs State to secure that the operation of the legal system promotes justice on a basis of equal opportunity, and provide free legal aid to ensure opportunities for securing justice are not denied by reason of economic disabilities.",
    remedy: "NALSA statutory legal aid applications and court-appointed defense counsel mandates.",
    cases: ["Hussainara Khatoon v. Home Secretary, State of Bihar (1979)", "Khatri v. State of Bihar (1981)"],
    tags: ["Free Legal Aid", "Equal Justice", "NALSA", "Part IV"]
  },
  {
    number: "Article 44",
    title: "Uniform Civil Code for Citizens",
    part: "Part IV: Directive Principles of State Policy",
    summary: "Directs State to endeavor to secure for the citizens a Uniform Civil Code (UCC) throughout the territory of India.",
    remedy: "Constitutional discourse and statutory reform litigation.",
    cases: ["Sarla Mudgal v. Union of India (1995)", "ABC v. State (NCT of Delhi) (2015)"],
    tags: ["Uniform Civil Code", "UCC", "Personal Laws", "Part IV"]
  },

  // Part IVA: Fundamental Duties
  {
    number: "Article 51A",
    title: "Fundamental Duties of Indian Citizens",
    part: "Part IVA: Fundamental Duties",
    summary: "Inserted by 42nd Amendment Act 1976. Enumerates 11 fundamental duties of every Indian citizen including abiding by Constitution, respecting National Flag, safeguarding public property, and protecting the environment.",
    remedy: "Judicial reliance for interpreting statutory duties and civic obligations.",
    cases: ["AIIMS Students' Union v. AIIMS (2002)", "M.C. Mehta v. Union of India (1987)"],
    tags: ["Fundamental Duties", "Civic Duties", "Part IVA"]
  },

  // Part V: The Union Executive & Supreme Court (Articles 52 to 151)
  {
    number: "Article 72",
    title: "Power of President to Grant Pardons, Reprieves, Respites or Remissions of Sentence",
    part: "Part V: Union Executive & Supreme Court",
    summary: "Empowers the President to grant pardons, reprieves, respites, or remissions of punishment or to suspend, remit, or commute the sentence of any person convicted of an offense in death sentence cases.",
    remedy: "Judicial review of delay or arbitrariness in deciding mercy petitions.",
    cases: ["Maru Ram v. Union of India (1980)", "Kehar Singh v. Union of India (1989)", "Shatrughan Chauhan v. Union of India (2014)"],
    tags: ["Pardon Power", "Mercy Petition", "Death Sentence", "Part V"]
  },
  {
    number: "Article 123",
    title: "Power of President to Promulgate Ordinances During Recess of Parliament",
    part: "Part V: Union Executive & Supreme Court",
    summary: "Empowers President to issue Ordinances having same force as Act of Parliament when both Houses are not in session and immediate action is required. Ordinance must be laid before Parliament upon reassembly.",
    remedy: "Challenging repromulgation of ordinances as fraud on the Constitution.",
    cases: ["D.C. Wadhwa v. State of Bihar (1987)", "Krishna Kumar Singh v. State of Bihar (2017)"],
    tags: ["Ordinance Power", "Executive Lawmaking", "Part V"]
  },
  {
    number: "Article 124",
    title: "Establishment and Constitution of Supreme Court of India",
    part: "Part V: Union Executive & Supreme Court",
    summary: "Establishes Supreme Court of India consisting of Chief Justice of India and Justices appointed by President. Outlines qualifications, tenure, and removal procedure (impeachment) for SC Judges.",
    remedy: "Litigation regarding judicial independence and Collegium system appointments.",
    cases: ["Supreme Court Advocates-on-Record Association v. Union of India (First Judges 1981, Second Judges 1993, NJAC Case 2015)"],
    tags: ["Supreme Court", "Judicial Appointments", "Collegium", "Part V"]
  },
  {
    number: "Article 129",
    title: "Supreme Court to be a Court of Record",
    part: "Part V: Union Executive & Supreme Court",
    summary: "Declares Supreme Court shall be a Court of Record and shall have all the powers of such a court including the power to punish for contempt of itself.",
    remedy: "Initiating or defending Contempt of Court proceedings before Apex Court.",
    cases: ["In re Prashant Bhushan (2020)", "Supreme Court Bar Association v. Union of India (1998)"],
    tags: ["Court of Record", "Contempt of Court", "Supreme Court", "Part V"]
  },
  {
    number: "Article 136",
    title: "Special Leave to Appeal (SLP) by the Supreme Court",
    part: "Part V: Union Executive & Supreme Court",
    summary: "Grants extraordinary discretionary appellate power to Supreme Court to grant special leave to appeal from any judgment, decree, determination, sentence or order in any cause or matter passed by any Court or Tribunal in India.",
    remedy: "Filing Special Leave Petitions (SLPs) before Supreme Court against High Court orders or Tribunal decisions.",
    cases: ["Pritam Singh v. State (1950)", "Tirupati Balaji Developers v. State of Bihar (2004)", "Mathai v. George (2010)"],
    tags: ["Article 136", "SLP", "Special Leave Petition", "Supreme Court", "Part V"]
  },
  {
    number: "Article 141",
    title: "Law Declared by Supreme Court to be Binding on All Courts (Stare Decisis)",
    part: "Part V: Union Executive & Supreme Court",
    summary: "Mandates that the law declared by the Supreme Court shall be binding on all courts within the territory of India, establishing the doctrine of judicial precedent and binding ratio decidendi.",
    remedy: "Citing binding Apex Court precedents in all High Courts, District Courts, and Tribunals.",
    cases: ["Bengal Immunity Co. v. State of Bihar (1955)", "Union of India v. Raghubir Singh (1989)"],
    tags: ["Binding Precedent", "Stare Decisis", "Supreme Court Law", "Part V"]
  },
  {
    number: "Article 142",
    title: "Enforcement of Decrees and Orders of Supreme Court (Doing Complete Justice)",
    part: "Part V: Union Executive & Supreme Court",
    summary: "Empowers Supreme Court to pass such decree or make such order as is necessary for doing complete justice in any cause or matter pending before it, enforceable throughout India.",
    remedy: "Invoking Article 142 jurisdiction for extraordinary relief, quashing non-compoundable disputes settled amicably, or structural reform directions.",
    cases: ["Union Carbide Corp v. Union of India (Bhopal Gas 1991)", "Supreme Court Bar Association v. UOI (1998)", "Shilpa Sailesh v. Varun Sreenivasan (2023)"],
    tags: ["Article 142", "Complete Justice", "Supreme Court Powers", "Part V"]
  },
  {
    number: "Article 143",
    title: "Power of President to Consult Supreme Court (Advisory Jurisdiction)",
    part: "Part V: Union Executive & Supreme Court",
    summary: "Authorizes President to refer to Supreme Court for opinion any question of law or fact of public importance which has arisen or is likely to arise.",
    remedy: "Presidential References heard by Constitution Bench.",
    cases: ["In re Delhi Laws Act (1951)", "In re Special Courts Bill (1978)", "In re Ram Janmabhoomi (1994)", "In re 2G Spectrum Reference (2012)"],
    tags: ["Advisory Jurisdiction", "Presidential Reference", "Supreme Court", "Part V"]
  },

  // Part VI: High Courts in the States (Articles 214 to 237)
  {
    number: "Article 214 & 215",
    title: "High Courts for States & High Courts as Courts of Record",
    part: "Part VI: High Courts in States",
    summary: "Establishes High Court for each State as superior Court of Record with inherent power to punish for contempt of itself and subordinate courts.",
    remedy: "Contempt proceedings and supervisory jurisdiction before High Court Benches.",
    cases: ["M.V. Elisabeth v. Harwan Investment & Trading Co (1993)"],
    tags: ["High Court", "Court of Record", "Contempt", "Part VI"]
  },
  {
    number: "Article 226",
    title: "Power of High Courts to Issue Writs",
    part: "Part VI: High Courts in States",
    summary: "Empowers High Courts to issue to any person or authority, including Government, directions, orders or writs (Habeas Corpus, Mandamus, Prohibition, Quo Warranto, Certiorari) for enforcement of Fundamental Rights and for ANY OTHER legal purpose.",
    remedy: "Writ Petitions before High Courts for administrative injustice, illegal property seizure, statutory violations, or tender disputes.",
    cases: ["State of UP v. Mohammad Nooh (1958)", "L. Chandra Kumar v. Union of India (1997)", "Whirlpool Corporation v. Registrar of Trade Marks (1998)"],
    tags: ["Article 226", "High Court Writs", "Writs", "Habeas Corpus", "Mandamus", "Certiorari", "Part VI"]
  },
  {
    number: "Article 227",
    title: "Power of Superintendence Over All Courts & Tribunals by High Court",
    part: "Part VI: High Courts in States",
    summary: "Grants High Court administrative and judicial superintendence over all courts and tribunals throughout the territories in relation to which it exercises jurisdiction.",
    remedy: "Filing Petition under Article 227 to correct jurisdictional errors, excess of jurisdiction, or refusal to exercise jurisdiction by lower courts/tribunals.",
    cases: ["Waryam Singh v. Amarnath (1954)", "Shalini Shyam Shetty v. Rajendra Shankar Patil (2010)", "Radhey Shyam v. Chhabi Nath (2015)"],
    tags: ["Article 227", "Superintendence", "Tribunal Appeals", "High Court", "Part VI"]
  },

  // Part XII: Finance, Property, Contracts & Suits
  {
    number: "Article 300A",
    title: "Persons Not to be Deprived of Property Save by Authority of Law",
    part: "Part XII: Finance & Property",
    summary: "Inserted by 44th Constitutional Amendment Act 1978. Converts Right to Property from a Fundamental Right into a Constitutional & Human Right. Property cannot be taken by state except under statutory authority with fair compensation.",
    remedy: "Writ petitions against illegal land acquisition, municipal demolition without notice, or uncompensated property taking.",
    cases: ["K.T. Plantation Pvt Ltd v. State of Karnataka (2011)", "Vidya Devi v. State of Himachal Pradesh (2020)", "Sukh Dutt Ratra v. State of HP (2022)"],
    tags: ["Right to Property", "Article 300A", "Land Acquisition", "Part XII"]
  },

  // Part XIV: Services Under the Union & States
  {
    number: "Article 311",
    title: "Dismissal, Removal or Reduction in Rank of Civil Servants",
    part: "Part XIV: Services Under Union & States",
    summary: "Provides constitutional protection to government civil servants: no dismissal by authority subordinate to appointing authority, and mandatory inquiry giving reasonable opportunity of being heard (Natural Justice).",
    remedy: "Service Petitions before Central Administrative Tribunal (CAT), State Administrative Tribunals, and High Court Writs.",
    cases: ["Parshotam Lal Dhingra v. Union of India (1958)", "Union of India v. Tulsiram Patel (1985)"],
    tags: ["Civil Services", "Service Protection", "Natural Justice", "CAT", "Part XIV"]
  },

  // Part XVIII: Emergency Provisions (Articles 352 to 360)
  {
    number: "Article 352",
    title: "Proclamation of National Emergency",
    part: "Part XVIII: Emergency Provisions",
    summary: "Empowers President to proclaim National Emergency if security of India or any part is threatened by War, External Aggression, or Armed Rebellion.",
    remedy: "Judicial review of satisfaction of President and bona fides of Proclamation.",
    cases: ["Minerva Mills v. Union of India (1980)", "ADM Jabalpur v. Shivkant Shukla (Overruled by Puttaswamy)"],
    tags: ["Emergency", "National Security", "Armed Rebellion", "Part XVIII"]
  },
  {
    number: "Article 356",
    title: "Provisions in Case of Failure of Constitutional Machinery in States (President's Rule)",
    part: "Part XVIII: Emergency Provisions",
    summary: "Empowers President to assume functions of State Government if Governor reports or President is satisfied that State government cannot be carried on in accordance with Constitution.",
    remedy: "Judicial review of President's Rule proclamations and floor test orders before Supreme Court.",
    cases: ["S.R. Bommai v. Union of India (1994)", "Rameshwar Prasad v. Union of India (2006)", "Nabam Rebia v. Deputy Speaker (2016)"],
    tags: ["President's Rule", "Article 356", "State Government", "Part XVIII"]
  },
  {
    number: "Article 360",
    title: "Provisions as to Financial Emergency",
    part: "Part XVIII: Emergency Provisions",
    summary: "Empowers President to declare Financial Emergency if financial stability or credit of India or any part is threatened.",
    remedy: "Executive salary reductions and financial control mechanisms.",
    cases: ["Financial Emergency Jurisprudence"],
    tags: ["Financial Emergency", "Credit of India", "Part XVIII"]
  },

  // Part XX: Amendment of the Constitution
  {
    number: "Article 368",
    title: "Power of Parliament to Amend the Constitution and Procedure Therefor",
    part: "Part XX: Constitutional Amendments",
    summary: "Grants Parliament constituent power to amend Constitution by addition, variation or repeal of provisions in accordance with prescribed procedure. Subject to the immutable Basic Structure Doctrine.",
    remedy: "Constitutional challenges to Constitutional Amendment Acts violating basic features like Judicial Independence, Federalism, or Fundamental Rights.",
    cases: ["Shankari Prasad v. Union of India (1951)", "Golaknath v. State of Punjab (1967)", "Kesavananda Bharati v. State of Kerala (1973)", "Minerva Mills v. Union of India (1980)"],
    tags: ["Article 368", "Basic Structure", "Constitutional Amendment", "Kesavananda Bharati", "Part XX"]
  }
];

export default function SectionsViewClient({ detail }: Props) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const isConstitutional = detail.slug === "constitutional-law";

  // Build items list
  const allItems: DetailedArticleItem[] = useMemo(() => {
    if (isConstitutional) {
      return CONSTITUTIONAL_ARTICLES;
    }

    // Extract all sections from detail.bareActs for non-constitutional categories
    const extracted: DetailedArticleItem[] = [];
    detail.bareActs.forEach((act) => {
      act.sections.forEach((sec) => {
        extracted.push({
          number: sec.number,
          title: sec.title,
          part: `${act.title} (${act.year})`,
          summary: sec.summary,
          remedy: `Statutory protection & court remedies under ${act.title}`,
          cases: detail.landmarkPrecedents.slice(0, 2).map((p) => `${p.title} (${p.year})`),
          tags: [act.title, sec.number, "Statutory Provision"]
        });
      });
    });
    return extracted;
  }, [detail, isConstitutional]);

  // Filter Categories / Tabs
  const filterOptions = useMemo(() => {
    if (isConstitutional) {
      return [
        { id: "all", label: "All Articles (395+)" },
        { id: "part3", label: "Part III: Fundamental Rights (Art 12–35)" },
        { id: "writs", label: "Writs & Remedies (Art 32 & 226)" },
        { id: "judiciary", label: "Supreme Court & High Courts (Part V/VI)" },
        { id: "part1_2", label: "Union & Citizenship (Part I & II)" },
        { id: "dpsp", label: "DPSP & Duties (Part IV & IVA)" },
        { id: "emergency", label: "Emergency & Amendments (Part XVIII & XX)" },
      ];
    }
    return [
      { id: "all", label: `All ${allItems.length} Sections` },
      { id: "key", label: "Key Provisions" },
      { id: "remedies", label: "Remedies & Appeals" }
    ];
  }, [isConstitutional, allItems.length]);

  // Filter logic
  const filteredArticles = useMemo(() => {
    return allItems.filter((item) => {
      // 1. Search Query Filter
      const q = searchQuery.toLowerCase().trim();
      if (q) {
        const matchesNumber = item.number.toLowerCase().includes(q);
        const matchesTitle = item.title.toLowerCase().includes(q);
        const matchesSummary = item.summary.toLowerCase().includes(q);
        const matchesPart = item.part.toLowerCase().includes(q);
        const matchesTags = item.tags.some((t) => t.toLowerCase().includes(q));
        const matchesCases = item.cases?.some((c) => c.toLowerCase().includes(q));

        if (!matchesNumber && !matchesTitle && !matchesSummary && !matchesPart && !matchesTags && !matchesCases) {
          return false;
        }
      }

      // 2. Tab Filter
      if (selectedFilter === "all") return true;

      if (isConstitutional) {
        if (selectedFilter === "part3") return item.part.includes("Part III");
        if (selectedFilter === "writs") return item.number.includes("Article 32") || item.number.includes("Article 226") || item.tags.includes("Writs");
        if (selectedFilter === "judiciary") return item.part.includes("Part V") || item.part.includes("Part VI");
        if (selectedFilter === "part1_2") return item.part.includes("Part I") || item.part.includes("Part II");
        if (selectedFilter === "dpsp") return item.part.includes("Part IV");
        if (selectedFilter === "emergency") return item.part.includes("Part XVIII") || item.part.includes("Part XX");
      } else {
        if (selectedFilter === "key") return true;
        if (selectedFilter === "remedies") return item.remedy !== undefined;
      }

      return true;
    });
  }, [allItems, searchQuery, selectedFilter, isConstitutional]);

  const handleCopy = (item: DetailedArticleItem) => {
    const textToCopy = `${item.number}: ${item.title}\n[${item.part}]\n\nSummary:\n${item.summary}\n\nLegal Remedy:\n${item.remedy || 'N/A'}\n\nLandmark Cases:\n${item.cases?.join(', ') || 'N/A'}`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedText(item.number);
    setTimeout(() => setCopiedText(null), 2200);
  };

  return (
    <div className="max-w-[1350px] mx-auto px-4 sm:px-6 py-10">
      {/* SEARCH BAR & FILTER ROW */}
      <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-200 mb-8 sticky top-20 z-20 backdrop-blur-md bg-white/95">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          {/* Search Box */}
          <div className="relative flex-1">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={
                isConstitutional
                  ? "Search by Article Number (e.g. Art 21, 32, 226), Title, Right, or Case Law..."
                  : "Search Section number, Title, Summary or Act name..."
              }
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

          {/* Quick Counter */}
          <div className="flex items-center gap-2 shrink-0 bg-[#0d1b3e] text-[#c9a84c] px-4 py-2.5 rounded-xl border border-[#c9a84c]/30 text-xs font-bold shadow-sm">
            <Sparkles size={14} className="text-[#c9a84c]" />
            <span>
              Showing {filteredArticles.length} of {allItems.length} {isConstitutional ? "Articles" : "Sections"}
            </span>
          </div>
        </div>

        {/* Filter Tabs Pills */}
        <div className="flex items-center gap-2 overflow-x-auto scrollbar-none pt-4 border-t border-gray-100 mt-4">
          {filterOptions.map((opt) => (
            <button
              key={opt.id}
              onClick={() => setSelectedFilter(opt.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap border shrink-0 ${
                selectedFilter === opt.id
                  ? "bg-[#0d1b3e] text-[#c9a84c] border-[#c9a84c] shadow-sm"
                  : "bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100 hover:text-[#0d1b3e]"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* ARTICLES LIST GRID */}
      {filteredArticles.length === 0 ? (
        <div className="bg-white rounded-2xl p-12 text-center border border-gray-200 shadow-sm">
          <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto text-gray-400 mb-3">
            <Layers size={28} />
          </div>
          <h3 className="font-serif text-xl font-bold text-[#0d1b3e] mb-1">
            No matching articles or sections found
          </h3>
          <p className="text-gray-500 text-sm max-w-md mx-auto mb-4">
            We couldn't find any results matching "{searchQuery}". Try searching for another article number like "Article 21", "Article 32", "Article 226", or "Article 136".
          </p>
          <button
            onClick={() => {
              setSearchQuery("");
              setSelectedFilter("all");
            }}
            className="inline-flex items-center gap-2 bg-[#0d1b3e] text-[#c9a84c] px-4 py-2 rounded-xl text-xs font-bold hover:bg-[#142654] transition-colors"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredArticles.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-gray-200 hover:border-[#c9a84c] transition-all hover:shadow-lg p-6 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Top Decorative Border */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0d1b3e] via-[#c9a84c] to-[#0d1b3e] opacity-80 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* Header Row */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="bg-[#0d1b3e] text-[#c9a84c] border border-[#c9a84c]/40 font-mono font-bold text-xs px-3 py-1 rounded-lg uppercase tracking-wider shadow-sm">
                      {item.number}
                    </span>
                    <span className="bg-gray-100 text-gray-700 font-bold text-[11px] px-2.5 py-1 rounded-lg border border-gray-200">
                      {item.part}
                    </span>
                  </div>

                  <button
                    onClick={() => handleCopy(item)}
                    className="text-gray-400 hover:text-[#0d1b3e] transition-colors p-1.5 rounded-lg hover:bg-gray-100 shrink-0"
                    title="Copy Article / Section details"
                  >
                    {copiedText === item.number ? (
                      <span className="flex items-center gap-1 text-xs text-green-600 font-bold">
                        <Check size={14} /> Copied!
                      </span>
                    ) : (
                      <Copy size={15} />
                    )}
                  </button>
                </div>

                {/* Article Title */}
                <h3 className="font-serif font-bold text-xl text-[#0d1b3e] mb-3 group-hover:text-[#c9a84c] transition-colors leading-snug">
                  {item.title}
                </h3>

                {/* Legal Breakdown */}
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  {item.summary}
                </p>

                {/* Legal Remedy & Writs Box */}
                {item.remedy && (
                  <div className="bg-gradient-to-r from-[#0d1b3e]/5 to-transparent border-l-4 border-[#c9a84c] p-3.5 rounded-r-xl mb-4">
                    <span className="text-[10.5px] font-extrabold text-[#0d1b3e] uppercase tracking-wider block mb-1">
                      LEGAL REMEDY & WRIT JURISDICTION
                    </span>
                    <p className="text-gray-800 text-[12.5px] font-medium leading-relaxed">
                      {item.remedy}
                    </p>
                  </div>
                )}

                {/* Landmark Case Citations */}
                {item.cases && item.cases.length > 0 && (
                  <div className="mb-4">
                    <span className="text-[10.5px] font-bold text-gray-500 uppercase tracking-widest block mb-1.5">
                      LANDMARK BENCH PRECEDENTS
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {item.cases.map((c, cIdx) => (
                        <span
                          key={cIdx}
                          className="bg-gray-50 border border-gray-200 text-gray-700 text-[11px] px-2.5 py-0.5 rounded-md italic font-medium"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
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
                  href={`/contact?subject=Consultation%20on%20${encodeURIComponent(item.number)}`}
                  className="inline-flex items-center justify-center gap-1.5 bg-[#0d1b3e] hover:bg-[#c9a84c] text-white hover:text-[#071126] font-bold px-3.5 py-2 rounded-xl transition-all shadow-sm shrink-0"
                >
                  <MessageSquare size={13} />
                  <span>Consult Chamber on {item.number}</span>
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
              Need statutory interpretation or Writ drafting?
            </h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Advocate Tushar Garg represents clients before Supreme Court of India & High Courts for Constitutional Writs (Art 32/226), SLPs (Art 136), and complex statutory litigation.
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
