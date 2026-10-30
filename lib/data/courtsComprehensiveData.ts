// ==============================================================================
// COMPREHENSIVE INDIAN JUDICIARY & COURTS DATABASE
// Supreme Court of India, 25 High Courts, Statutory Tribunals & State Judiciary
// Chambers of Advocate Tushar Garg, Advocate-on-Record, Supreme Court of India
// ==============================================================================

export interface SupremeCourtInfo {
  name: string;
  established: string;
  constitutionalArticles: string;
  sanctionedJudges: number;
  principalSeat: string;
  address: string;
  jurisdiction: string;
  chiefJustice: string;
  officialWebsite: string;
  eCourtsUrl: string;
  overview: string;
  keyJurisdictions: {
    type: string;
    article: string;
    description: string;
  }[];
  aorRequirement: string;
}

export interface HighCourtDetails {
  id: number;
  name: string;
  slug: string;
  establishedYear: number;
  actOrCharter: string;
  principalSeat: string;
  benches: string[];
  circuitBenches?: string[];
  jurisdiction: string;
  statesCovered: string[];
  sanctionedStrength: {
    permanent: number;
    additional: number;
    total: number;
  };
  website: string;
  displayUrl: string;
  eCourtsUrl: string;
  overview: string;
  appellateToSC: string;
}

export interface TribunalDetails {
  id: number;
  name: string;
  shortName: string;
  slug: string;
  establishedYear: number;
  governingAct: string;
  principalBench: string;
  regionalBenches: string[];
  subjectMatter: string;
  appealToSupremeCourtSection: string;
  website: string;
  displayUrl: string;
  overview: string;
}

export interface StateJudiciaryProfile {
  name: string;
  slug: string;
  type: "State" | "Union Territory";
  governingHighCourt: string;
  highCourtSeat: string;
  highCourtBench?: string;
  highCourtSlug: string;
  totalDistricts: number;
  eCourtsStateCode: string;
  overview: string;
}

// ------------------------------------------------------------------------------
// 1. SUPREME COURT OF INDIA (APEX COURT)
// ------------------------------------------------------------------------------
export const supremeCourtData: SupremeCourtInfo = {
  name: "Supreme Court of India",
  established: "28 January 1950",
  constitutionalArticles: "Articles 124 to 147, Part V, Chapter IV of the Constitution of India",
  sanctionedJudges: 34,
  principalSeat: "New Delhi",
  address: "Tilak Marg, New Delhi – 110001",
  jurisdiction: "All of India (Apex Constitutional & Appellate Authority)",
  chiefJustice: "Chief Justice of India",
  officialWebsite: "https://sci.gov.in",
  eCourtsUrl: "https://main.sci.gov.in",
  overview:
    "The Supreme Court of India is the highest judicial forum and final court of appeal under the Constitution of India, the highest constitutional court, with the power of constitutional review. It succeeded both the Federal Court of India and the Judicial Committee of the Privy Council.",
  keyJurisdictions: [
    {
      type: "Original Jurisdiction",
      article: "Article 131",
      description: "Exclusive original jurisdiction in any dispute between the Government of India and one or more States, or between two or more States."
    },
    {
      type: "Writ Jurisdiction",
      article: "Article 32",
      description: "Protector and guarantor of Fundamental Rights. Power to issue directions, orders or writs in the nature of Habeas Corpus, Mandamus, Prohibition, Quo Warranto and Certiorari."
    },
    {
      type: "Appellate Jurisdiction (Constitutional, Civil & Criminal)",
      article: "Articles 132, 133 & 134",
      description: "Appeals from any judgment, decree or final order of a High Court involving substantial questions of law as to the interpretation of the Constitution, civil matters of public importance, or criminal death sentences/acquittal reversals."
    },
    {
      type: "Special Leave to Appeal (SLP)",
      article: "Article 136",
      description: "Discretionary plenary appellate jurisdiction enabling the Supreme Court to grant special leave to appeal against any judgment, decree, determination, sentence or order in any cause or matter passed by any court or tribunal in the territory of India."
    },
    {
      type: "Review & Curative Jurisdiction",
      article: "Article 137 & Rupa Ashok Hurra Doctrine",
      description: "Power to review any judgment pronounced or order made by it to rectify patent errors of law or prevent miscarriage of justice."
    },
    {
      type: "Advisory Jurisdiction",
      article: "Article 143",
      description: "Presidential reference on questions of law or fact of public importance for the advisory opinion of the Supreme Court."
    }
  ],
  aorRequirement:
    "Under Order IV, Rule 5 of the Supreme Court Rules 2013, no advocate other than an Advocate-on-Record (AOR) is entitled to act, draw pleadings, or file appearances on behalf of a litigant before the Supreme Court of India."
};

// ------------------------------------------------------------------------------
// 2. ALL 25 CONSTITUTIONAL HIGH COURTS OF INDIA (IN-DEPTH DATA)
// ------------------------------------------------------------------------------
export const allHighCourtsData: HighCourtDetails[] = [
  {
    id: 1,
    name: "Allahabad High Court",
    slug: "allahabad-high-court",
    establishedYear: 1866,
    actOrCharter: "Indian High Courts Act 1861 / Letters Patent 1866",
    principalSeat: "Prayagraj (Allahabad)",
    benches: ["Lucknow"],
    jurisdiction: "Uttar Pradesh",
    statesCovered: ["Uttar Pradesh"],
    sanctionedStrength: { permanent: 119, additional: 41, total: 160 },
    website: "https://www.allahabadhighcourt.in",
    displayUrl: "allahabadhighcourt.in",
    eCourtsUrl: "https://services.ecourts.gov.in",
    overview: "Established on 17 March 1866 as the High Court of Judicature for the North-Western Provinces at Agra, later shifted to Allahabad in 1869. It is the largest High Court in India by sanctioned judicial strength (160 judges) exercising jurisdiction over 75 districts of Uttar Pradesh.",
    appellateToSC: "Appeals against final orders of Allahabad High Court lie before the Supreme Court of India via SLP (Civil/Crl) under Article 136 or Certificate of Fitness under Articles 132/133/134."
  },
  {
    id: 2,
    name: "Andhra Pradesh High Court",
    slug: "andhra-pradesh-high-court",
    establishedYear: 2019,
    actOrCharter: "Andhra Pradesh Reorganisation Act 2014 & Presidential Order 2018",
    principalSeat: "Amaravati",
    benches: [],
    jurisdiction: "Andhra Pradesh",
    statesCovered: ["Andhra Pradesh"],
    sanctionedStrength: { permanent: 28, additional: 9, total: 37 },
    website: "https://aphc.gov.in",
    displayUrl: "aphc.gov.in",
    eCourtsUrl: "https://services.ecourts.gov.in",
    overview: "Constituted on 1 January 2019 pursuant to the bifurcation of Andhra Pradesh and Telangana. Located at Nelapadu, Amaravati, it presides over 26 judicial districts of Andhra Pradesh.",
    appellateToSC: "Direct appellate recourse to Supreme Court under Article 136 of the Constitution."
  },
  {
    id: 3,
    name: "Bombay High Court",
    slug: "bombay-high-court",
    establishedYear: 1862,
    actOrCharter: "Letters Patent of 26 June 1862 under Indian High Courts Act 1861",
    principalSeat: "Mumbai",
    benches: ["Nagpur", "Aurangabad (Chhatrapati Sambhajinagar)", "Panaji (Goa)"],
    jurisdiction: "Maharashtra, Goa, Dadra & Nagar Haveli and Daman & Diu",
    statesCovered: ["Maharashtra", "Goa", "Dadra and Nagar Haveli and Daman and Diu"],
    sanctionedStrength: { permanent: 71, additional: 23, total: 94 },
    website: "https://bombayhighcourt.nic.in",
    displayUrl: "bombayhighcourt.nic.in",
    eCourtsUrl: "https://services.ecourts.gov.in",
    overview: "One of the three Chartered High Courts established in 1862. Exercises original civil jurisdiction over Greater Mumbai and extraordinary appellate and writ jurisdiction across Maharashtra, Goa, and Union Territories.",
    appellateToSC: "Appeals lie to the Supreme Court of India via Special Leave Petitions under Article 136."
  },
  {
    id: 4,
    name: "Calcutta High Court",
    slug: "calcutta-high-court",
    establishedYear: 1862,
    actOrCharter: "Letters Patent of 14 May 1862 under Indian High Courts Act 1861",
    principalSeat: "Kolkata",
    benches: ["Jalpaiguri (Circuit Bench)", "Port Blair (Circuit Bench)"],
    jurisdiction: "West Bengal, Andaman and Nicobar Islands",
    statesCovered: ["West Bengal", "Andaman and Nicobar Islands"],
    sanctionedStrength: { permanent: 54, additional: 18, total: 72 },
    website: "https://www.calcuttahighcourt.gov.in",
    displayUrl: "calcuttahighcourt.gov.in",
    eCourtsUrl: "https://services.ecourts.gov.in",
    overview: "The oldest High Court in India, inaugurated on 1 July 1862 as the High Court of Judicature at Fort William. Holds Original Jurisdiction over Kolkata and appellate territorial authority over West Bengal and the Andaman & Nicobar archipelago.",
    appellateToSC: "Appeals against division bench decrees and writ judgments lie before the Supreme Court."
  },
  {
    id: 5,
    name: "Chhattisgarh High Court",
    slug: "chhattisgarh-high-court",
    establishedYear: 2000,
    actOrCharter: "Madhya Pradesh Reorganisation Act 2000",
    principalSeat: "Bilaspur (Bodhri)",
    benches: [],
    jurisdiction: "Chhattisgarh",
    statesCovered: ["Chhattisgarh"],
    sanctionedStrength: { permanent: 17, additional: 5, total: 22 },
    website: "https://highcourt.cg.gov.in",
    displayUrl: "highcourt.cg.gov.in",
    eCourtsUrl: "https://services.ecourts.gov.in",
    overview: "Established on 1 November 2000 upon the formation of Chhattisgarh state. Housed in one of the largest High Court campuses in Asia at Bodhri, Bilaspur.",
    appellateToSC: "Decisions subject to appellate review before the Supreme Court of India."
  },
  {
    id: 6,
    name: "Delhi High Court",
    slug: "delhi-high-court",
    establishedYear: 1966,
    actOrCharter: "Delhi High Court Act 1966 (Act No. 26 of 1966)",
    principalSeat: "New Delhi (Sher Shah Road)",
    benches: [],
    jurisdiction: "National Capital Territory of Delhi",
    statesCovered: ["Delhi"],
    sanctionedStrength: { permanent: 45, additional: 15, total: 60 },
    website: "https://delhihighcourt.nic.in",
    displayUrl: "delhihighcourt.nic.in",
    eCourtsUrl: "https://services.ecourts.gov.in",
    overview: "Established on 31 October 1966 with four judges. Exercises Ordinary Original Civil Jurisdiction over suits exceeding ₹2 Crores within the NCT of Delhi, alongside plenary constitutional writ and appellate jurisdiction.",
    appellateToSC: "Appeals and SLPs directly filed before the Supreme Court of India in New Delhi."
  },
  {
    id: 7,
    name: "Gauhati High Court",
    slug: "gauhati-high-court",
    establishedYear: 1948,
    actOrCharter: "Government of India Act 1935 / Assam High Court Order 1948",
    principalSeat: "Guwahati (Assam)",
    benches: ["Kohima (Nagaland)", "Aizawl (Mizoram)", "Itanagar (Arunachal Pradesh)"],
    jurisdiction: "Assam, Nagaland, Mizoram, Arunachal Pradesh",
    statesCovered: ["Assam", "Nagaland", "Mizoram", "Arunachal Pradesh"],
    sanctionedStrength: { permanent: 24, additional: 6, total: 30 },
    website: "https://ghconline.gov.in",
    displayUrl: "ghconline.gov.in",
    eCourtsUrl: "https://services.ecourts.gov.in",
    overview: "Originally established as the High Court of Assam on 5 April 1948. Covers four Northeastern states with permanent benches at Kohima, Aizawl, and Itanagar.",
    appellateToSC: "Special Leave Petitions lie to the Supreme Court under Article 136."
  },
  {
    id: 8,
    name: "Gujarat High Court",
    slug: "gujarat-high-court",
    establishedYear: 1960,
    actOrCharter: "Bombay Reorganisation Act 1960",
    principalSeat: "Ahmedabad (Sola)",
    benches: [],
    jurisdiction: "Gujarat",
    statesCovered: ["Gujarat"],
    sanctionedStrength: { permanent: 39, additional: 13, total: 52 },
    website: "https://gujarathighcourt.nic.in",
    displayUrl: "gujarathighcourt.nic.in",
    eCourtsUrl: "https://services.ecourts.gov.in",
    overview: "Established on 1 May 1960 upon the division of the erstwhile State of Bombay. Pioneer in live-streaming courtroom proceedings and digital case management.",
    appellateToSC: "Appeals lie to the Supreme Court of India."
  },
  {
    id: 9,
    name: "Himachal Pradesh High Court",
    slug: "himachal-pradesh-high-court",
    establishedYear: 1971,
    actOrCharter: "State of Himachal Pradesh Act 1970",
    principalSeat: "Shimla (Ravenswood)",
    benches: [],
    jurisdiction: "Himachal Pradesh",
    statesCovered: ["Himachal Pradesh"],
    sanctionedStrength: { permanent: 13, additional: 4, total: 17 },
    website: "https://hphighcourt.nic.in",
    displayUrl: "hphighcourt.nic.in",
    eCourtsUrl: "https://services.ecourts.gov.in",
    overview: "Established on 25 January 1971 with headquarters at historic Ravenswood, Shimla, overseeing 12 judicial districts in the hill state.",
    appellateToSC: "Special Leave Petitions lie before the Supreme Court."
  },
  {
    id: 10,
    name: "Jammu & Kashmir and Ladakh High Court",
    slug: "jammu-and-kashmir-and-ladakh-high-court",
    establishedYear: 1928,
    actOrCharter: "Order No. 1 issued by Maharaja Hari Singh 1928 / J&K Reorganisation Act 2019",
    principalSeat: "Srinagar (Summer) & Jammu (Winter)",
    benches: [],
    jurisdiction: "Jammu & Kashmir and Ladakh",
    statesCovered: ["Jammu and Kashmir", "Ladakh"],
    sanctionedStrength: { permanent: 13, additional: 4, total: 17 },
    website: "https://jkhighcourt.nic.in",
    displayUrl: "jkhighcourt.nic.in",
    eCourtsUrl: "https://services.ecourts.gov.in",
    overview: "Established on 26 March 1928. Following the Jammu and Kashmir Reorganisation Act 2019, it serves as the common High Court for the Union Territory of Jammu & Kashmir and the Union Territory of Ladakh.",
    appellateToSC: "Appellate recourse before the Supreme Court of India."
  },
  {
    id: 11,
    name: "Jharkhand High Court",
    slug: "jharkhand-high-court",
    establishedYear: 2000,
    actOrCharter: "Bihar Reorganisation Act 2000",
    principalSeat: "Ranchi (Dhurwa)",
    benches: [],
    jurisdiction: "Jharkhand",
    statesCovered: ["Jharkhand"],
    sanctionedStrength: { permanent: 20, additional: 5, total: 25 },
    website: "https://jharkhandhighcourt.nic.in",
    displayUrl: "jharkhandhighcourt.nic.in",
    eCourtsUrl: "https://services.ecourts.gov.in",
    overview: "Carved out from the Circuit Bench of the Patna High Court at Ranchi on 15 November 2000. Inaugurated a state-of-the-art judicial complex in Dhurwa, Ranchi in 2023.",
    appellateToSC: "Subject to Article 136 appellate review by the Supreme Court."
  },
  {
    id: 12,
    name: "Karnataka High Court",
    slug: "karnataka-high-court",
    establishedYear: 1884,
    actOrCharter: "Mysore High Court Act 1884 / High Court of Karnataka Act 1961",
    principalSeat: "Bengaluru (Attara Kacheri)",
    benches: ["Dharwad", "Kalaburagi (Gulbarga)"],
    jurisdiction: "Karnataka",
    statesCovered: ["Karnataka"],
    sanctionedStrength: { permanent: 47, additional: 15, total: 62 },
    website: "https://karnatakajudiciary.kar.nic.in",
    displayUrl: "karnatakajudiciary.kar.nic.in",
    eCourtsUrl: "https://services.ecourts.gov.in",
    overview: "Functioning from the iconic neoclassical Attara Kacheri building opposite the Vidhana Soudha in Bengaluru. Permanent benches at Dharwad and Kalaburagi cater to northern Karnataka.",
    appellateToSC: "Appeals lie to the Supreme Court under Articles 133, 134, and 136."
  },
  {
    id: 13,
    name: "Kerala High Court",
    slug: "kerala-high-court",
    establishedYear: 1956,
    actOrCharter: "States Reorganisation Act 1956 (Act 37 of 1956)",
    principalSeat: "Kochi (Ernakulam)",
    benches: [],
    jurisdiction: "Kerala and Lakshadweep",
    statesCovered: ["Kerala", "Lakshadweep"],
    sanctionedStrength: { permanent: 35, additional: 12, total: 47 },
    website: "https://highcourtofkerala.nic.in",
    displayUrl: "highcourtofkerala.nic.in",
    eCourtsUrl: "https://services.ecourts.gov.in",
    overview: "Constituted on 1 November 1956 at Ernakulam. Exercises territorial jurisdiction over the State of Kerala and the Union Territory of Lakshadweep.",
    appellateToSC: "Appeals lie directly to the Supreme Court of India."
  },
  {
    id: 14,
    name: "Madhya Pradesh High Court",
    slug: "madhya-pradesh-high-court",
    establishedYear: 1956,
    actOrCharter: "Government of India Act 1935 / States Reorganisation Act 1956",
    principalSeat: "Jabalpur",
    benches: ["Gwalior", "Indore"],
    jurisdiction: "Madhya Pradesh",
    statesCovered: ["Madhya Pradesh"],
    sanctionedStrength: { permanent: 39, additional: 14, total: 53 },
    website: "https://mphc.gov.in",
    displayUrl: "mphc.gov.in",
    eCourtsUrl: "https://services.ecourts.gov.in",
    overview: "Originally established at Nagpur in 1936 by Letters Patent and shifted to Jabalpur in 1956 with permanent benches at Gwalior and Indore, serving 55 judicial districts.",
    appellateToSC: "Appellate review before the Supreme Court via SLP."
  },
  {
    id: 15,
    name: "Madras High Court",
    slug: "madras-high-court",
    establishedYear: 1862,
    actOrCharter: "Letters Patent of 26 June 1862 under Indian High Courts Act 1861",
    principalSeat: "Chennai",
    benches: ["Madurai"],
    jurisdiction: "Tamil Nadu and Puducherry",
    statesCovered: ["Tamil Nadu", "Puducherry"],
    sanctionedStrength: { permanent: 56, additional: 19, total: 75 },
    website: "https://www.mhc.tn.gov.in",
    displayUrl: "mhc.tn.gov.in",
    eCourtsUrl: "https://services.ecourts.gov.in",
    overview: "One of the three Chartered High Courts established by Queen Victoria. Housed in one of the largest Indo-Saracenic judicial buildings in the world. Permanent bench at Madurai covers southern districts.",
    appellateToSC: "Appeals lie to the Supreme Court of India."
  },
  {
    id: 16,
    name: "Manipur High Court",
    slug: "manipur-high-court",
    establishedYear: 2013,
    actOrCharter: "North-Eastern Areas (Reorganisation) and Other Related Laws (Amendment) Act 2012",
    principalSeat: "Imphal (Chingmeirong)",
    benches: [],
    jurisdiction: "Manipur",
    statesCovered: ["Manipur"],
    sanctionedStrength: { permanent: 4, additional: 1, total: 5 },
    website: "https://hcmimphal.nic.in",
    displayUrl: "hcmimphal.nic.in",
    eCourtsUrl: "https://services.ecourts.gov.in",
    overview: "Established on 25 March 2013 after bifurcation from Gauhati High Court, exercising constitutional and appellate powers over 16 districts of Manipur.",
    appellateToSC: "Appeals lie to the Supreme Court of India."
  },
  {
    id: 17,
    name: "Meghalaya High Court",
    slug: "meghalaya-high-court",
    establishedYear: 2013,
    actOrCharter: "North-Eastern Areas (Reorganisation) and Other Related Laws (Amendment) Act 2012",
    principalSeat: "Shillong",
    benches: [],
    jurisdiction: "Meghalaya",
    statesCovered: ["Meghalaya"],
    sanctionedStrength: { permanent: 3, additional: 1, total: 4 },
    website: "https://meghalayahighcourt.nic.in",
    displayUrl: "meghalayahighcourt.nic.in",
    eCourtsUrl: "https://services.ecourts.gov.in",
    overview: "Commenced functioning on 23 March 2013 at Shillong, having jurisdiction over the State of Meghalaya.",
    appellateToSC: "Appeals lie to the Supreme Court."
  },
  {
    id: 18,
    name: "Orissa High Court",
    slug: "orissa-high-court",
    establishedYear: 1948,
    actOrCharter: "Orissa High Court Order 1948 under Government of India Act 1935",
    principalSeat: "Cuttack",
    benches: [],
    jurisdiction: "Odisha",
    statesCovered: ["Odisha"],
    sanctionedStrength: { permanent: 24, additional: 9, total: 33 },
    website: "https://orissahighcourt.nic.in",
    displayUrl: "orissahighcourt.nic.in",
    eCourtsUrl: "https://services.ecourts.gov.in",
    overview: "Inaugurated on 26 July 1948 by Sir H.J. Kania, first Chief Justice of India. National leader in paperless courtrooms and digital judicial archives.",
    appellateToSC: "Appeals lie to the Supreme Court via Article 136."
  },
  {
    id: 19,
    name: "Patna High Court",
    slug: "patna-high-court",
    establishedYear: 1916,
    actOrCharter: "Letters Patent of 9 February 1916 under Government of India Act 1915",
    principalSeat: "Patna (Bailey Road)",
    benches: [],
    jurisdiction: "Bihar",
    statesCovered: ["Bihar"],
    sanctionedStrength: { permanent: 40, additional: 13, total: 53 },
    website: "https://www.patnahighcourt.gov.in",
    displayUrl: "patnahighcourt.gov.in",
    eCourtsUrl: "https://services.ecourts.gov.in",
    overview: "Established on 9 February 1916 and opened on 1 March 1916. Has produced three Chief Justices of India and has jurisdiction over 38 districts of Bihar.",
    appellateToSC: "Appeals lie to the Supreme Court of India."
  },
  {
    id: 20,
    name: "Punjab and Haryana High Court",
    slug: "punjab-and-haryana-high-court",
    establishedYear: 1919,
    actOrCharter: "Letters Patent of 20 March 1919 (Lahore) / High Court (Punjab) Order 1947",
    principalSeat: "Chandigarh (Capitol Complex)",
    benches: [],
    jurisdiction: "Punjab, Haryana, and Union Territory of Chandigarh",
    statesCovered: ["Punjab", "Haryana", "Chandigarh"],
    sanctionedStrength: { permanent: 64, additional: 21, total: 85 },
    website: "https://highcourtchd.gov.in",
    displayUrl: "highcourtchd.gov.in",
    eCourtsUrl: "https://services.ecourts.gov.in",
    overview: "Housed in the UNESCO World Heritage Le Corbusier Palace of Justice at the Capitol Complex, Chandigarh. Serves as the common High Court for Punjab, Haryana, and Chandigarh.",
    appellateToSC: "Appeals lie directly to the Supreme Court."
  },
  {
    id: 21,
    name: "Rajasthan High Court",
    slug: "rajasthan-high-court",
    establishedYear: 1949,
    actOrCharter: "Rajasthan High Court Ordinance 1949",
    principalSeat: "Jodhpur (Jhalamand)",
    benches: ["Jaipur"],
    jurisdiction: "Rajasthan",
    statesCovered: ["Rajasthan"],
    sanctionedStrength: { permanent: 38, additional: 12, total: 50 },
    website: "https://hcraj.nic.in",
    displayUrl: "hcraj.nic.in",
    eCourtsUrl: "https://services.ecourts.gov.in",
    overview: "Inaugurated on 29 August 1949 at Jodhpur by the Rajpramukh Maharaja Sawai Man Singh. A permanent bench operates at Jaipur catering to eastern Rajasthan.",
    appellateToSC: "Appeals lie to the Supreme Court of India."
  },
  {
    id: 22,
    name: "Sikkim High Court",
    slug: "sikkim-high-court",
    establishedYear: 1975,
    actOrCharter: "The Constitution (Thirty-sixth Amendment) Act 1975 (Article 371F)",
    principalSeat: "Gangtok",
    benches: [],
    jurisdiction: "Sikkim",
    statesCovered: ["Sikkim"],
    sanctionedStrength: { permanent: 3, additional: 0, total: 3 },
    website: "https://highcourtofsikkim.nic.in",
    displayUrl: "highcourtofsikkim.nic.in",
    eCourtsUrl: "https://services.ecourts.gov.in",
    overview: "Established on 16 May 1975 when Sikkim became the 22nd State of India. Smallest High Court by sanctioned strength, renowned for judicial speed and efficiency.",
    appellateToSC: "Appeals lie to the Supreme Court."
  },
  {
    id: 23,
    name: "Telangana High Court",
    slug: "telangana-high-court",
    establishedYear: 2019,
    actOrCharter: "Andhra Pradesh Reorganisation Act 2014 & Presidential Order 2018",
    principalSeat: "Hyderabad (Near City College)",
    benches: [],
    jurisdiction: "Telangana",
    statesCovered: ["Telangana"],
    sanctionedStrength: { permanent: 32, additional: 10, total: 42 },
    website: "https://tshc.gov.in",
    displayUrl: "tshc.gov.in",
    eCourtsUrl: "https://services.ecourts.gov.in",
    overview: "Functioning from the historic Saracenic heritage edifice constructed in 1919 by Nizam VII Mir Osman Ali Khan on the banks of Musi River. Became the dedicated High Court for Telangana on 1 January 2019.",
    appellateToSC: "Appeals lie before the Supreme Court."
  },
  {
    id: 24,
    name: "Tripura High Court",
    slug: "tripura-high-court",
    establishedYear: 2013,
    actOrCharter: "North-Eastern Areas (Reorganisation) and Other Related Laws (Amendment) Act 2012",
    principalSeat: "Agartala (Capital Complex)",
    benches: [],
    jurisdiction: "Tripura",
    statesCovered: ["Tripura"],
    sanctionedStrength: { permanent: 4, additional: 1, total: 5 },
    website: "https://thc.nic.in",
    displayUrl: "thc.nic.in",
    eCourtsUrl: "https://services.ecourts.gov.in",
    overview: "Inaugurated on 23 March 2013 at Agartala, exercising writ, civil, and criminal appellate jurisdiction over the 8 districts of Tripura.",
    appellateToSC: "Appeals lie to the Supreme Court."
  },
  {
    id: 25,
    name: "Uttarakhand High Court",
    slug: "uttarakhand-high-court",
    establishedYear: 2000,
    actOrCharter: "Uttar Pradesh Reorganisation Act 2000",
    principalSeat: "Nainital (Mallital)",
    benches: [],
    jurisdiction: "Uttarakhand",
    statesCovered: ["Uttarakhand"],
    sanctionedStrength: { permanent: 8, additional: 3, total: 11 },
    website: "https://highcourtofuttarakhand.gov.in",
    displayUrl: "highcourtofuttarakhand.gov.in",
    eCourtsUrl: "https://services.ecourts.gov.in",
    overview: "Established on 9 November 2000 in Nainital, functioning from the stately Victorian building designed by Steve Antony in 1900. Oversees 13 hill and plains districts of Uttarakhand.",
    appellateToSC: "Appeals lie to the Supreme Court."
  }
];

// ------------------------------------------------------------------------------
// 3. STATUTORY TRIBUNALS & APPELLATE AUTHORITIES OF INDIA
// ------------------------------------------------------------------------------
export const tribunalsComprehensiveData: TribunalDetails[] = [
  {
    id: 1,
    name: "National Company Law Appellate Tribunal",
    shortName: "NCLAT",
    slug: "nclat",
    establishedYear: 2016,
    governingAct: "Section 410 of Companies Act 2013 & Section 61 of Insolvency and Bankruptcy Code (IBC) 2016",
    principalBench: "New Delhi (Pt. Deendayal Antyodaya Bhawan, CGO Complex)",
    regionalBenches: ["Chennai Bench"],
    subjectMatter: "Corporate insolvency (IBC), company oppression and mismanagement, mergers & amalgamations, and Competition Commission (CCI) appeals.",
    appealToSupremeCourtSection: "Section 62 of IBC 2016 & Section 423 of Companies Act 2013 (Appeals on questions of law directly to the Supreme Court within 45/60 days).",
    website: "https://nclat.nic.in",
    displayUrl: "nclat.nic.in",
    overview: "Apex corporate appellate tribunal in India hearing appeals from 16 Benches of the National Company Law Tribunal (NCLT), Insolvency and Bankruptcy Board of India (IBBI), and Competition Commission of India (CCI)."
  },
  {
    id: 2,
    name: "National Company Law Tribunal",
    shortName: "NCLT",
    slug: "nclt",
    establishedYear: 2016,
    governingAct: "Section 408 of the Companies Act 2013",
    principalBench: "New Delhi (CGO Complex, Lodhi Road)",
    regionalBenches: [
      "New Delhi (Benches I-VI)",
      "Mumbai (Benches I-V)",
      "Bengaluru",
      "Kolkata (Benches I-II)",
      "Chennai (Benches I-II)",
      "Hyderabad (Benches I-II)",
      "Ahmedabad (Benches I-II)",
      "Allahabad (Prayagraj)",
      "Chandigarh",
      "Cuttack",
      "Guwahati",
      "Jaipur",
      "Kochi",
      "Amravati",
      "Indore"
    ],
    subjectMatter: "Corporate insolvency resolution process (CIRP), liquidation, corporate restructuring, compromise and arrangements, shareholder disputes under Companies Act.",
    appealToSupremeCourtSection: "Appeals lie to NCLAT under Section 421 of Companies Act 2013 / Section 61 IBC, and thereafter to the Supreme Court under Section 62 IBC.",
    website: "https://nclt.gov.in",
    displayUrl: "nclt.gov.in",
    overview: "Quasi-judicial authority adjudicating issues relating to Indian companies, insolvency resolution, schemes of arrangement, and winding-up proceedings."
  },
  {
    id: 3,
    name: "National Green Tribunal",
    shortName: "NGT",
    slug: "ngt",
    establishedYear: 2010,
    governingAct: "National Green Tribunal Act 2010 (Act No. 19 of 2010)",
    principalBench: "New Delhi (Faridkot House, Copernicus Marg)",
    regionalBenches: [
      "Bhopal (Central Zone)",
      "Pune (Western Zone)",
      "Kolkata (Eastern Zone)",
      "Chennai (Southern Zone)"
    ],
    subjectMatter: "Environmental protection, conservation of forests, climate litigation, compensation for damages to persons and property under Water, Air, Forest, and Environment Protection Acts.",
    appealToSupremeCourtSection: "Section 22 of the National Green Tribunal Act 2010 (Any person aggrieved by any award, decision or order of the Tribunal may file an appeal directly to the Supreme Court within 90 days).",
    website: "https://greentribunal.gov.in",
    displayUrl: "greentribunal.gov.in",
    overview: "Specialized judicial body equipped with expertise exclusively for handling environmental disputes involving multi-disciplinary issues. Mandated to dispose of cases within 6 months of filing."
  },
  {
    id: 4,
    name: "National Consumer Disputes Redressal Commission",
    shortName: "NCDRC",
    slug: "ncdrc",
    establishedYear: 1988,
    governingAct: "Consumer Protection Act 2019 (formerly Act of 1986)",
    principalBench: "New Delhi (Upbhokta Nyay Bhawan, INA)",
    regionalBenches: ["Circuit Benches across major State Capitals"],
    subjectMatter: "High-value consumer disputes, builder-buyer disputes, medical negligence, insurance repudiation, and appellate reviews over State Consumer Commissions (SCDRC).",
    appealToSupremeCourtSection: "Section 67 of the Consumer Protection Act 2019 (Direct statutory appeal to the Supreme Court against original orders of the NCDRC within 30 days).",
    website: "https://ncdrc.nic.in",
    displayUrl: "ncdrc.nic.in",
    overview: "Apex consumer court of India headed by a sitting or retired Judge of the Supreme Court of India or Chief Justice of a High Court, with jurisdiction to entertain consumer complaints exceeding ₹2 Crores."
  },
  {
    id: 5,
    name: "Central Administrative Tribunal",
    shortName: "CAT",
    slug: "cat",
    establishedYear: 1985,
    governingAct: "Article 323A of the Constitution of India & Administrative Tribunals Act 1985",
    principalBench: "New Delhi (Copernicus Marg)",
    regionalBenches: [
      "Ahmedabad", "Allahabad", "Bengaluru", "Chandigarh", "Chennai",
      "Cuttack", "Ernakulam", "Guwahati", "Hyderabad", "Jabalpur",
      "Jaipur", "Jammu", "Jodhpur", "Kolkata", "Lucknow", "Mumbai", "Patna", "Srinagar"
    ],
    subjectMatter: "Service matters, recruitment conditions, promotions, pensions, and disciplinary proceedings concerning employees appointed to Public Services and posts under the Union of India.",
    appealToSupremeCourtSection: "Following the landmark 7-Judge Constitution Bench ruling in L. Chandra Kumar v. Union of India (1997), orders are first subject to judicial review before Division Benches of High Courts under Article 226/227, and subsequently to the Supreme Court via Article 136.",
    website: "https://cgat.gov.in",
    displayUrl: "cgat.gov.in",
    overview: "Specialized forum providing speedy and inexpensive adjudication of disputes with respect to recruitment and conditions of service of persons appointed to public services."
  },
  {
    id: 6,
    name: "Telecom Disputes Settlement and Appellate Tribunal",
    shortName: "TDSAT",
    slug: "tdsat",
    establishedYear: 2000,
    governingAct: "Section 14 of TRAI Act 1997 (as amended in 2000), Information Technology Act 2000 & Airports Economic Regulatory Authority (AERA) Act 2008",
    principalBench: "New Delhi (Suchana Bhawan, CGO Complex)",
    regionalBenches: [],
    subjectMatter: "Disputes between licensors, licensees, service providers, consumers, broadcasting carriage, cable TV operations, cyber appellate disputes, and airport tariff orders.",
    appealToSupremeCourtSection: "Section 18 of the TRAI Act 1997 (Direct appeal to the Supreme Court against any order, not being an interlocutory order, of TDSAT on questions of law).",
    website: "https://tdsat.gov.in",
    displayUrl: "tdsat.gov.in",
    overview: "Elite appellate tribunal adjudicating high-stake disputes in the telecommunication, broadcasting, cable TV, and airport infrastructure sectors."
  },
  {
    id: 7,
    name: "Income Tax Appellate Tribunal",
    shortName: "ITAT",
    slug: "itat",
    establishedYear: 1941,
    governingAct: "Section 252 of the Income-tax Act 1961",
    principalBench: "New Delhi & Mumbai",
    regionalBenches: [
      "63 Benches across 27 cities including Ahmedabad, Bengaluru, Chennai, Kolkata, Hyderabad, Pune, Chandigarh, Jaipur, Lucknow, Cuttack, Surat, Indore, Cochin"
    ],
    subjectMatter: "Direct taxation, transfer pricing, corporate income tax assessments, penalty appeals, international taxation matters against orders of CIT(Appeals) and Dispute Resolution Panels (DRP).",
    appealToSupremeCourtSection: "Appeals lie on substantial questions of law to the respective High Courts under Section 260A, and thereafter to the Supreme Court under Section 261 of the Income-tax Act 1961.",
    website: "https://itat.gov.in",
    displayUrl: "itat.gov.in",
    overview: "The Mother Tribunal of India and oldest appellate tribunal in the country, functioning as the final fact-finding authority in Indian direct tax jurisprudence."
  },
  {
    id: 8,
    name: "Appellate Tribunal for Electricity",
    shortName: "APTEL",
    slug: "aptel",
    establishedYear: 2005,
    governingAct: "Section 110 of the Electricity Act 2003 & Petroleum and Natural Gas Regulatory Board Act 2006",
    principalBench: "New Delhi (Core-4, SCOPE Complex, Lodhi Road)",
    regionalBenches: [],
    subjectMatter: "Power tariff fixation, power purchase agreements (PPAs), renewable energy compliance, open access, and petroleum/natural gas pipeline transmission regulations.",
    appealToSupremeCourtSection: "Section 125 of the Electricity Act 2003 (Direct appeal to the Supreme Court on any substantial question of law within 60 days).",
    website: "https://aptel.gov.in",
    displayUrl: "aptel.gov.in",
    overview: "Appellate authority over decisions and orders of the Central Electricity Regulatory Commission (CERC), State Electricity Regulatory Commissions (SERCs), and Petroleum and Natural Gas Regulatory Board (PNGRB)."
  },
  {
    id: 9,
    name: "Customs, Excise and Service Tax Appellate Tribunal",
    shortName: "CESTAT",
    slug: "cestat",
    establishedYear: 1982,
    governingAct: "Section 129 of Customs Act 1962 & Section 35B of Central Excise Act 1944",
    principalBench: "New Delhi (West Block, R.K. Puram)",
    regionalBenches: ["Mumbai", "Kolkata", "Chennai", "Bengaluru", "Ahmedabad", "Allahabad", "Chandigarh", "Hyderabad"],
    subjectMatter: "Customs valuation, tariff classification, anti-dumping duties, central excise duty, service tax disputes, and legacy indirect tax assessments.",
    appealToSupremeCourtSection: "Section 130E of the Customs Act 1962 & Section 35L of the Central Excise Act 1944 (Direct appeal to the Supreme Court in rate of duty or valuation disputes).",
    website: "https://cestat.gov.in",
    displayUrl: "cestat.gov.in",
    overview: "Specialized statutory appellate body adjudicating disputes concerning customs duties, valuation of cross-border goods, and legacy indirect taxes."
  },
  {
    id: 10,
    name: "Securities Appellate Tribunal",
    shortName: "SAT",
    slug: "sat",
    establishedYear: 1995,
    governingAct: "Section 15K of the Securities and Exchange Board of India (SEBI) Act 1992",
    principalBench: "Mumbai (Mittal Court, Nariman Point)",
    regionalBenches: [],
    subjectMatter: "Securities regulations, insider trading, takeover code compliance, market manipulation penalties, IRDAI insurance appeals, and PFRDA pension fund regulations.",
    appealToSupremeCourtSection: "Section 15Z of the SEBI Act 1992 (Direct appeal to the Supreme Court of India on any question of law arising out of SAT orders within 60 days).",
    website: "https://sat.gov.in",
    displayUrl: "sat.gov.in",
    overview: "Statutory appellate body hearing appeals against decisions of the SEBI, Insurance Regulatory and Development Authority of India (IRDAI), and Pension Fund Regulatory and Development Authority (PFRDA)."
  }
];

// ------------------------------------------------------------------------------
// 4. ALL 36 STATES AND UNION TERRITORIES WITH DISTRICT JUDICIARY COVERAGE
// ------------------------------------------------------------------------------
export const allStatesJudiciaryProfiles: StateJudiciaryProfile[] = [
  { name: "Andaman & Nicobar Islands", slug: "andaman-and-nicobar-islands", type: "Union Territory", governingHighCourt: "Calcutta High Court", highCourtSeat: "Kolkata", highCourtBench: "Port Blair (Circuit Bench)", highCourtSlug: "calcutta-high-court", totalDistricts: 3, eCourtsStateCode: "AN", overview: "District Judiciary in the Andaman & Nicobar archipelago functions under the administrative superintendence of the Calcutta High Court with a permanent Circuit Bench at Port Blair." },
  { name: "Andhra Pradesh", slug: "andhra-pradesh", type: "State", governingHighCourt: "Andhra Pradesh High Court", highCourtSeat: "Amaravati", highCourtSlug: "andhra-pradesh-high-court", totalDistricts: 26, eCourtsStateCode: "AP", overview: "District and Sessions Courts across 26 reorganized districts of Andhra Pradesh headed by Principal District Judges." },
  { name: "Arunachal Pradesh", slug: "arunachal-pradesh", type: "State", governingHighCourt: "Gauhati High Court", highCourtSeat: "Guwahati", highCourtBench: "Itanagar (Permanent Bench)", highCourtSlug: "gauhati-high-court", totalDistricts: 25, eCourtsStateCode: "AR", overview: "Subordinate judiciary functioning under customary legal systems and statutory Courts of Additional Deputy Commissioners and District & Sessions Judges." },
  { name: "Assam", slug: "assam", type: "State", governingHighCourt: "Gauhati High Court", highCourtSeat: "Guwahati", highCourtSlug: "gauhati-high-court", totalDistricts: 35, eCourtsStateCode: "AS", overview: "District Judiciary functioning across 35 judicial districts under the direct superintendence of the Gauhati High Court." },
  { name: "Bihar", slug: "bihar", type: "State", governingHighCourt: "Patna High Court", highCourtSeat: "Patna", highCourtSlug: "patna-high-court", totalDistricts: 38, eCourtsStateCode: "BR", overview: "Civil and criminal justice administration across 38 sessions divisions under the Patna High Court." },
  { name: "Chandigarh", slug: "chandigarh", type: "Union Territory", governingHighCourt: "Punjab and Haryana High Court", highCourtSeat: "Chandigarh", highCourtSlug: "punjab-and-haryana-high-court", totalDistricts: 1, eCourtsStateCode: "CH", overview: "District Courts Complex Sector 43, Chandigarh, administering subordinate civil and criminal justice." },
  { name: "Chhattisgarh", slug: "chhattisgarh", type: "State", governingHighCourt: "Chhattisgarh High Court", highCourtSeat: "Bilaspur", highCourtSlug: "chhattisgarh-high-court", totalDistricts: 33, eCourtsStateCode: "CG", overview: "District Judiciary spanning 33 judicial districts under the High Court at Bilaspur." },
  { name: "Delhi", slug: "delhi", type: "Union Territory", governingHighCourt: "Delhi High Court", highCourtSeat: "New Delhi", highCourtSlug: "delhi-high-court", totalDistricts: 11, eCourtsStateCode: "DL", overview: "World-class district court complexes: Tis Hazari, Patiala House, Karkardooma, Rohini, Saket, and Dwarka Courts serving 11 revenue districts." },
  { name: "Goa", slug: "goa", type: "State", governingHighCourt: "Bombay High Court", highCourtSeat: "Mumbai", highCourtBench: "Panaji (Permanent Bench)", highCourtSlug: "bombay-high-court", totalDistricts: 2, eCourtsStateCode: "GA", overview: "North Goa (Panaji) and South Goa (Margao) District Courts, preserving Portuguese civil code jurisprudence within Indian constitutional framework." },
  { name: "Gujarat", slug: "gujarat", type: "State", governingHighCourt: "Gujarat High Court", highCourtSeat: "Ahmedabad", highCourtSlug: "gujarat-high-court", totalDistricts: 33, eCourtsStateCode: "GJ", overview: "Pioneering e-Courts district judiciary across 33 districts of Gujarat." },
  { name: "Haryana", slug: "haryana", type: "State", governingHighCourt: "Punjab and Haryana High Court", highCourtSeat: "Chandigarh", highCourtSlug: "punjab-and-haryana-high-court", totalDistricts: 22, eCourtsStateCode: "HR", overview: "22 District and Sessions Courts including Gurugram, Faridabad, Panchkula, and Rohtak." },
  { name: "Himachal Pradesh", slug: "himachal-pradesh", type: "State", governingHighCourt: "Himachal Pradesh High Court", highCourtSeat: "Shimla", highCourtSlug: "himachal-pradesh-high-court", totalDistricts: 12, eCourtsStateCode: "HP", overview: "12 District and Sessions Courts across hill divisions under the Shimla High Court." },
  { name: "Jammu and Kashmir", slug: "jammu-and-kashmir", type: "Union Territory", governingHighCourt: "Jammu & Kashmir and Ladakh High Court", highCourtSeat: "Srinagar / Jammu", highCourtSlug: "jammu-and-kashmir-and-ladakh-high-court", totalDistricts: 20, eCourtsStateCode: "JK", overview: "Subordinate judiciary across 20 districts in Jammu and Kashmir valleys." },
  { name: "Jharkhand", slug: "jharkhand", type: "State", governingHighCourt: "Jharkhand High Court", highCourtSeat: "Ranchi", highCourtSlug: "jharkhand-high-court", totalDistricts: 24, eCourtsStateCode: "JH", overview: "24 District & Sessions Courts handling industrial, mining, and civil litigation." },
  { name: "Karnataka", slug: "karnataka", type: "State", governingHighCourt: "Karnataka High Court", highCourtSeat: "Bengaluru", highCourtBench: "Dharwad & Kalaburagi", highCourtSlug: "karnataka-high-court", totalDistricts: 31, eCourtsStateCode: "KA", overview: "City Civil Court Bengaluru and 30 District Courts across the state." },
  { name: "Kerala", slug: "kerala", type: "State", governingHighCourt: "Kerala High Court", highCourtSeat: "Kochi", highCourtSlug: "kerala-high-court", totalDistricts: 14, eCourtsStateCode: "KL", overview: "14 District Courts administering civil and criminal justice with advanced digital paperless filings." },
  { name: "Ladakh", slug: "ladakh", type: "Union Territory", governingHighCourt: "Jammu & Kashmir and Ladakh High Court", highCourtSeat: "Srinagar / Jammu", highCourtSlug: "jammu-and-kashmir-and-ladakh-high-court", totalDistricts: 2, eCourtsStateCode: "LA", overview: "District Courts at Leh and Kargil administering justice in high-altitude Himalayan frontier." },
  { name: "Lakshadweep", slug: "lakshadweep", type: "Union Territory", governingHighCourt: "Kerala High Court", highCourtSeat: "Kochi", highCourtSlug: "kerala-high-court", totalDistricts: 1, eCourtsStateCode: "LD", overview: "District and Subordinate Courts on Kavaratti Island under the jurisdiction of the Kerala High Court." },
  { name: "Madhya Pradesh", slug: "madhya-pradesh", type: "State", governingHighCourt: "Madhya Pradesh High Court", highCourtSeat: "Jabalpur", highCourtBench: "Gwalior & Indore", highCourtSlug: "madhya-pradesh-high-court", totalDistricts: 55, eCourtsStateCode: "MP", overview: "55 District and Sessions Courts under the Jabalpur High Court and its benches." },
  { name: "Maharashtra", slug: "maharashtra", type: "State", governingHighCourt: "Bombay High Court", highCourtSeat: "Mumbai", highCourtBench: "Nagpur & Chhatrapati Sambhajinagar", highCourtSlug: "bombay-high-court", totalDistricts: 36, eCourtsStateCode: "MH", overview: "City Civil & Sessions Court Mumbai and 35 District Courts throughout Maharashtra." },
  { name: "Manipur", slug: "manipur", type: "State", governingHighCourt: "Manipur High Court", highCourtSeat: "Imphal", highCourtSlug: "manipur-high-court", totalDistricts: 16, eCourtsStateCode: "MN", overview: "District & Sessions Courts serving hill and valley districts of Manipur." },
  { name: "Meghalaya", slug: "meghalaya", type: "State", governingHighCourt: "Meghalaya High Court", highCourtSeat: "Shillong", highCourtSlug: "meghalaya-high-court", totalDistricts: 12, eCourtsStateCode: "ML", overview: "Separation of judiciary from executive across Khasi, Jaintia, and Garo Hills." },
  { name: "Mizoram", slug: "mizoram", type: "State", governingHighCourt: "Gauhati High Court", highCourtSeat: "Guwahati", highCourtBench: "Aizawl (Permanent Bench)", highCourtSlug: "gauhati-high-court", totalDistricts: 11, eCourtsStateCode: "MZ", overview: "11 District Courts and Autonomous District Council Courts under the Aizawl Bench." },
  { name: "Nagaland", slug: "nagaland", type: "State", governingHighCourt: "Gauhati High Court", highCourtSeat: "Guwahati", highCourtBench: "Kohima (Permanent Bench)", highCourtSlug: "gauhati-high-court", totalDistricts: 16, eCourtsStateCode: "NL", overview: "District Judiciary functioning alongside customary tribal laws under Article 371A." },
  { name: "Odisha", slug: "odisha", type: "State", governingHighCourt: "Orissa High Court", highCourtSeat: "Cuttack", highCourtSlug: "orissa-high-court", totalDistricts: 30, eCourtsStateCode: "OD", overview: "30 District Courts integrated into modern paperless e-Courts ecosystem." },
  { name: "Puducherry", slug: "puducherry", type: "Union Territory", governingHighCourt: "Madras High Court", highCourtSeat: "Chennai", highCourtSlug: "madras-high-court", totalDistricts: 4, eCourtsStateCode: "PY", overview: "Integrated Court Complex at Puducherry, Karaikal, Mahe, and Yanam under Madras High Court." },
  { name: "Punjab", slug: "punjab", type: "State", governingHighCourt: "Punjab and Haryana High Court", highCourtSeat: "Chandigarh", highCourtSlug: "punjab-and-haryana-high-court", totalDistricts: 23, eCourtsStateCode: "PB", overview: "23 District and Sessions Courts including Ludhiana, Amritsar, Jalandhar, and Patiala." },
  { name: "Rajasthan", slug: "rajasthan", type: "State", governingHighCourt: "Rajasthan High Court", highCourtSeat: "Jodhpur", highCourtBench: "Jaipur", highCourtSlug: "rajasthan-high-court", totalDistricts: 50, eCourtsStateCode: "RJ", overview: "District Judiciary across reorganized divisions under the Principal Seat at Jodhpur and Bench at Jaipur." },
  { name: "Sikkim", slug: "sikkim", type: "State", governingHighCourt: "Sikkim High Court", highCourtSeat: "Gangtok", highCourtSlug: "sikkim-high-court", totalDistricts: 6, eCourtsStateCode: "SK", overview: "6 District Courts (East, West, North, South, Pakyong, Soreng) serving the Himalayan state." },
  { name: "Tamil Nadu", slug: "tamil-nadu", type: "State", governingHighCourt: "Madras High Court", highCourtSeat: "Chennai", highCourtBench: "Madurai", highCourtSlug: "madras-high-court", totalDistricts: 38, eCourtsStateCode: "TN", overview: "City Civil Court Chennai and 37 District Court complexes under the Madras High Court." },
  { name: "Telangana", slug: "telangana", type: "State", governingHighCourt: "Telangana High Court", highCourtSeat: "Hyderabad", highCourtSlug: "telangana-high-court", totalDistricts: 33, eCourtsStateCode: "TS", overview: "City Civil Court Hyderabad and 32 District Courts across Telangana." },
  { name: "Tripura", slug: "tripura", type: "State", governingHighCourt: "Tripura High Court", highCourtSeat: "Agartala", highCourtSlug: "tripura-high-court", totalDistricts: 8, eCourtsStateCode: "TR", overview: "8 District & Sessions Courts functioning under the High Court at Agartala." },
  { name: "Uttar Pradesh", slug: "uttar-pradesh", type: "State", governingHighCourt: "Allahabad High Court", highCourtSeat: "Prayagraj", highCourtBench: "Lucknow", highCourtSlug: "allahabad-high-court", totalDistricts: 75, eCourtsStateCode: "UP", overview: "Largest district judiciary network in the country with 75 District & Sessions Courts handling the highest volume of trial litigation in India." },
  { name: "Uttarakhand", slug: "uttarakhand", type: "State", governingHighCourt: "Uttarakhand High Court", highCourtSeat: "Nainital", highCourtSlug: "uttarakhand-high-court", totalDistricts: 13, eCourtsStateCode: "UK", overview: "13 District Courts across Kumaon and Garhwal divisions under the High Court at Nainital." },
  { name: "West Bengal", slug: "west-bengal", type: "State", governingHighCourt: "Calcutta High Court", highCourtSeat: "Kolkata", highCourtBench: "Jalpaiguri (Circuit Bench)", highCourtSlug: "calcutta-high-court", totalDistricts: 23, eCourtsStateCode: "WB", overview: "City Civil & Sessions Court Calcutta and 22 District Courts under the Calcutta High Court." }
];

// Helper functions for quick lookups
export function getHighCourtBySlug(slug: string): HighCourtDetails | undefined {
  return allHighCourtsData.find(hc => hc.slug === slug);
}

export function getTribunalBySlug(slug: string): TribunalDetails | undefined {
  return tribunalsComprehensiveData.find(t => t.slug === slug);
}

export function getStateProfileBySlug(slug: string): StateJudiciaryProfile | undefined {
  if (!slug) return undefined;
  const norm = slug.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-");
  const stripped = norm.replace(/[^a-z0-9]/g, "").replace(/and/g, "");
  return allStatesJudiciaryProfiles.find(s => {
    if (s.slug === norm) return true;
    const sStripped = s.slug.replace(/[^a-z0-9]/g, "").replace(/and/g, "");
    return sStripped === stripped;
  });
}
