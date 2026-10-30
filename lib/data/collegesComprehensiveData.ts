/**
 * Comprehensive National Law Colleges & Legal Education Architecture in India.
 * Verified and curated for Advocate Tushar Garg (AOR) Legal Repository.
 */

export interface LawCollegeItem {
  id: string;
  name: string;
  shortName: string;
  nirfRank?: number | string;
  location: string;
  city: string;
  state: string;
  type: "National Law University (NLU)" | "Central University" | "State Government" | "Premier Private";
  established: number;
  coursesOffered: string[];
  entranceExam: string;
  website: string;
  annualFeesApprox: string;
  intakeApprox: string;
  highlights: string;
}

export interface LegalDegreeInfo {
  degree: string;
  duration: string;
  eligibility: string;
  curriculumOverview: string;
  keySubjects: string[];
  careerProspects: string[];
}

export interface LawEntranceExamInfo {
  name: string;
  shortName: string;
  conductingBody: string;
  participatingInstitutes: string;
  frequency: string;
  examPattern: string;
  syllabus: string[];
  officialPortal: string;
}

// ── 1. ALL NATIONAL LAW UNIVERSITIES & PREMIER LAW COLLEGES (60+ INSTITUTIONS) ──
export const allLawCollegesData: LawCollegeItem[] = [
  // --- TIER 1: NATIONAL LAW UNIVERSITIES (NLUs) ---
  {
    id: "nlsiu-bengaluru",
    name: "National Law School of India University (NLSIU)",
    shortName: "NLSIU",
    nirfRank: 1,
    location: "Gnana Bharathi, Bengaluru, Karnataka",
    city: "Bengaluru",
    state: "Karnataka",
    type: "National Law University (NLU)",
    established: 1987,
    coursesOffered: ["B.A. LL.B. (Hons.)", "LL.M.", "Master of Public Policy (MPP)", "Ph.D. in Law"],
    entranceExam: "CLAT (UG & PG)",
    website: "https://www.nls.ac.in",
    annualFeesApprox: "₹3,75,000 / year",
    intakeApprox: "300 (UG) / 100 (PG)",
    highlights: "The premier National Law University in India, pioneer of the 5-year integrated law degree model, highest judicial clerkship and Rhodes Scholar record."
  },
  {
    id: "nlu-delhi",
    name: "National Law University, Delhi (NLUD)",
    shortName: "NLU Delhi",
    nirfRank: 2,
    location: "Sector 14, Dwarka, New Delhi",
    city: "New Delhi",
    state: "Delhi",
    type: "National Law University (NLU)",
    established: 2008,
    coursesOffered: ["B.A. LL.B. (Hons.)", "LL.M.", "Ph.D. in Law"],
    entranceExam: "AILET (All India Law Entrance Test)",
    website: "https://nludelhi.ac.in",
    annualFeesApprox: "₹3,20,000 / year",
    intakeApprox: "123 (UG) / 80 (PG)",
    highlights: "Autonomous apex NLU located in the National Capital, proximity to Supreme Court and Delhi High Court, Centre for Innovation, IP & Competition (CIIPC)."
  },
  {
    id: "nalsar-hyderabad",
    name: "NALSAR University of Law",
    shortName: "NALSAR",
    nirfRank: 3,
    location: "Justice City, Shameerpet, Hyderabad, Telangana",
    city: "Hyderabad",
    state: "Telangana",
    type: "National Law University (NLU)",
    established: 1998,
    coursesOffered: ["B.A. LL.B. (Hons.)", "LL.M.", "MBA (Corporate Law)", "Ph.D."],
    entranceExam: "CLAT (UG & PG)",
    website: "https://www.nalsar.ac.in",
    annualFeesApprox: "₹3,10,000 / year",
    intakeApprox: "132 (UG) / 66 (PG)",
    highlights: "Acclaimed for constitutional advocacy, aviation and space law, commercial arbitration and competitive mooting championships globally."
  },
  {
    id: "nujs-kolkata",
    name: "The West Bengal National University of Juridical Sciences (WBNUJS)",
    shortName: "WBNUJS",
    nirfRank: 4,
    location: "Salt Lake City, Sector III, Kolkata, West Bengal",
    city: "Kolkata",
    state: "West Bengal",
    type: "National Law University (NLU)",
    established: 1999,
    coursesOffered: ["B.A. LL.B. (Hons.)", "B.Sc. LL.B. (Hons.)", "LL.M.", "Ph.D."],
    entranceExam: "CLAT (UG & PG)",
    website: "https://www.nujs.edu",
    annualFeesApprox: "₹2,95,000 / year",
    intakeApprox: "132 (UG) / 85 (PG)",
    highlights: "Established under the guidance of Prof. N.R. Madhava Menon, premier forensic science and intellectual property research centers in eastern India."
  },
  {
    id: "jindal-global-law-school",
    name: "Jindal Global Law School (JGLS), O.P. Jindal Global University",
    shortName: "JGLS",
    nirfRank: "Top Private Law School",
    location: "Sonipat Narela Road, Sonipat, Haryana (NCR)",
    city: "Sonipat",
    state: "Haryana",
    type: "Premier Private",
    established: 2009,
    coursesOffered: ["B.A. LL.B. (Hons.)", "B.B.A. LL.B. (Hons.)", "3-Year LL.B. (Hons.)", "LL.M. (Corporate, IPR, Tax)", "Ph.D."],
    entranceExam: "LSAT—India / JSAT Law",
    website: "https://jgu.edu.in/jgls",
    annualFeesApprox: "₹6,00,000 / year",
    intakeApprox: "600+ across programs",
    highlights: "Ranked #1 private law school in India by QS World University Rankings by Subject, 500+ full-time international faculty, exchange ties with Harvard and Oxford."
  },
  {
    id: "nliu-bhopal",
    name: "National Law Institute University (NLIU)",
    shortName: "NLIU Bhopal",
    nirfRank: 5,
    location: "Kerwa Dam Road, Bhopal, Madhya Pradesh",
    city: "Bhopal",
    state: "Madhya Pradesh",
    type: "National Law University (NLU)",
    established: 1997,
    coursesOffered: ["B.A. LL.B. (Hons.)", "B.Sc. LL.B. (Cyber Security)", "LL.M.", "MCLIS (Cyber Law)", "Ph.D."],
    entranceExam: "CLAT (UG & PG)",
    website: "https://www.nliu.ac.in",
    annualFeesApprox: "₹2,65,000 / year",
    intakeApprox: "134 (UG) / 60 (PG)",
    highlights: "Houses the prestigious Rajiv Gandhi National Cyber Law Centre, specialized in corporate litigation and international humanitarian law."
  },
  {
    id: "gnlu-gandhinagar",
    name: "Gujarat National Law University (GNLU)",
    shortName: "GNLU",
    nirfRank: 7,
    location: "Attalika Avenue, Knowledge Corridor, Koba, Gandhinagar, Gujarat",
    city: "Gandhinagar",
    state: "Gujarat",
    type: "National Law University (NLU)",
    established: 2003,
    coursesOffered: ["B.A. LL.B.", "B.B.A. LL.B.", "B.Com. LL.B.", "B.Sc. LL.B.", "BSW LL.B.", "LL.M.", "Ph.D."],
    entranceExam: "CLAT (UG & PG)",
    website: "https://www.gnlu.ac.in",
    annualFeesApprox: "₹2,80,000 / year",
    intakeApprox: "204 (UG) / 60 (PG)",
    highlights: "Only NLU in India offering five distinct undergraduate degree streams including maritime law, air & space law, sports law, and international arbitration."
  },
  {
    id: "nlu-jodhpur",
    name: "National Law University, Jodhpur (NLUJ)",
    shortName: "NLU Jodhpur",
    nirfRank: 8,
    location: "NH-65, Nagour Road, Mandore, Jodhpur, Rajasthan",
    city: "Jodhpur",
    state: "Rajasthan",
    type: "National Law University (NLU)",
    established: 1999,
    coursesOffered: ["B.A. LL.B. (Hons.)", "B.B.A. LL.B. (Hons.)", "LL.M. (Corporate / IP)", "Ph.D."],
    entranceExam: "CLAT (UG & PG)",
    website: "https://www.nlujodhpur.ac.in",
    annualFeesApprox: "₹2,75,000 / year",
    intakeApprox: "120 (UG) / 50 (PG)",
    highlights: "Distinguished corporate law placement record, trade & investment law expertise, publisher of the Indian Journal of Arbitration Law (IJAL)."
  },
  {
    id: "faculty-of-law-delhi-university",
    name: "Faculty of Law, University of Delhi (Campus Law Centre, LC-I, LC-II)",
    shortName: "CLC / DU Law",
    nirfRank: "Premier Central University",
    location: "Chhatra Marg, North Campus, University of Delhi, Delhi",
    city: "New Delhi",
    state: "Delhi",
    type: "Central University",
    established: 1924,
    coursesOffered: ["3-Year LL.B.", "LL.M. (2-Year & 3-Year)", "Ph.D."],
    entranceExam: "CUET PG (Law)",
    website: "https://lawfaculty.du.ac.in",
    annualFeesApprox: "₹6,000 / year (Highly subsidized)",
    intakeApprox: "3,000+ across 3 centers",
    highlights: "Alma mater of multiple Chief Justices of India, Union Ministers, and Supreme Court Senior Advocates. Outstanding alumni network in litigation and judiciary."
  },
  {
    id: "glc-mumbai",
    name: "Government Law College (GLC), Mumbai",
    shortName: "GLC Mumbai",
    nirfRank: "Oldest Law School in Asia",
    location: "'A' Road, Churchgate, Mumbai, Maharashtra",
    city: "Mumbai",
    state: "Maharashtra",
    type: "State Government",
    established: 1855,
    coursesOffered: ["5-Year B.L.S. LL.B.", "3-Year LL.B.", "Post Graduate Diplomas"],
    entranceExam: "MH CET Law (3-Year & 5-Year)",
    website: "https://glcmumbai.com",
    annualFeesApprox: "₹10,000 / year",
    intakeApprox: "320 (3-Yr) / 240 (5-Yr)",
    highlights: "Historic institution where Dr. B.R. Ambedkar served as Principal. Located across Bombay High Court with unparalleled trial and commercial bar exposure."
  },
  {
    id: "ils-law-college-pune",
    name: "Indian Law Society (ILS) Law College",
    shortName: "ILS Pune",
    nirfRank: "Premier State College",
    location: "Chiplunkar Road, Law College Road, Pune, Maharashtra",
    city: "Pune",
    state: "Maharashtra",
    type: "State Government",
    established: 1924,
    coursesOffered: ["5-Year B.A. LL.B.", "3-Year LL.B.", "LL.M.", "Diplomas"],
    entranceExam: "MH CET Law",
    website: "https://ilslaw.edu",
    annualFeesApprox: "₹45,000 / year",
    intakeApprox: "240 (5-Yr) / 160 (3-Yr)",
    highlights: "Centenary legacy institution renowned for clinical legal aid, high judicial service selection rate, and sprawling historic 154-acre green campus."
  },
  {
    id: "symbiosis-law-school-pune",
    name: "Symbiosis Law School (SLS), Pune",
    shortName: "SLS Pune",
    nirfRank: 6,
    location: "Survey No 227, Rohan Mithila, Viman Nagar, Pune, Maharashtra",
    city: "Pune",
    state: "Maharashtra",
    type: "Premier Private",
    established: 1977,
    coursesOffered: ["B.A. LL.B. (Hons.)", "B.B.A. LL.B. (Hons.)", "3-Year LL.B.", "1-Year LL.M.", "Ph.D."],
    entranceExam: "SLAT (Symbiosis Law Admission Test)",
    website: "https://www.symlaw.ac.in",
    annualFeesApprox: "₹4,20,000 / year",
    intakeApprox: "300 (UG) / 60 (3-Yr)",
    highlights: "Consistently in NIRF top 10 law institutions, strong international law, mooting, corporate and civil trial simulation infrastructure."
  },
  {
    id: "hnlu-raipur",
    name: "Hidayatullah National Law University (HNLU)",
    shortName: "HNLU Raipur",
    nirfRank: 11,
    location: "Sector 40, Uparwara, Atal Nagar (Nava Raipur), Chhattisgarh",
    city: "Raipur",
    state: "Chhattisgarh",
    type: "National Law University (NLU)",
    established: 2003,
    coursesOffered: ["B.A. LL.B. (Hons.)", "LL.M. (Corporate & IP)", "Ph.D."],
    entranceExam: "CLAT (UG & PG)",
    website: "https://hnlu.ac.in",
    annualFeesApprox: "₹2,40,000 / year",
    intakeApprox: "180 (UG) / 60 (PG)",
    highlights: "Named after former CJI Justice Mohammad Hidayatullah, active in natural resource law, constitutional studies, and legal aid clinics."
  },
  {
    id: "rmlnlu-lucknow",
    name: "Dr. Ram Manohar Lohiya National Law University (RMLNLU)",
    shortName: "RMLNLU Lucknow",
    nirfRank: 16,
    location: "Sector D-1, Kanpur Road Scheme, Ashiyana, Lucknow, Uttar Pradesh",
    city: "Lucknow",
    state: "Uttar Pradesh",
    type: "National Law University (NLU)",
    established: 2005,
    coursesOffered: ["B.A. LL.B. (Hons.)", "LL.M.", "Ph.D."],
    entranceExam: "CLAT (UG & PG)",
    website: "https://www.rmlnlu.ac.in",
    annualFeesApprox: "₹2,20,000 / year",
    intakeApprox: "187 (UG) / 30 (PG)",
    highlights: "Proximity to Allahabad High Court (Lucknow Bench), premier legal training ground for UP Judicial Services (PCS-J) and civil trial advocacy."
  },
  {
    id: "rgnul-patiala",
    name: "Rajiv Gandhi National University of Law (RGNUL)",
    shortName: "RGNUL Patiala",
    nirfRank: 17,
    location: "Sidhuwal, Bhadson Road, Patiala, Punjab",
    city: "Patiala",
    state: "Punjab",
    type: "National Law University (NLU)",
    established: 2006,
    coursesOffered: ["B.A. LL.B. (Hons.)", "LL.M.", "Ph.D."],
    entranceExam: "CLAT (UG & PG)",
    website: "https://www.rgnul.ac.in",
    annualFeesApprox: "₹2,50,000 / year",
    intakeApprox: "196 (UG) / 60 (PG)",
    highlights: "Sprawling 50-acre fully residential campus, Centre for Advanced Study in Criminal Law (CASCL) and Business Law research centers."
  },
  {
    id: "cnlu-patna",
    name: "Chanakya National Law University (CNLU)",
    shortName: "CNLU Patna",
    nirfRank: 24,
    location: "Nyaya Nagar, Mithapur, Patna, Bihar",
    city: "Patna",
    state: "Bihar",
    type: "National Law University (NLU)",
    established: 2006,
    coursesOffered: ["B.A. LL.B. (Hons.)", "B.B.A. LL.B. (Hons.)", "LL.M.", "Ph.D."],
    entranceExam: "CLAT (UG & PG)",
    website: "https://cnlu.ac.in",
    annualFeesApprox: "₹2,35,000 / year",
    intakeApprox: "140 (UG) / 40 (PG)",
    highlights: "Premier legal education centre in Bihar under the patronage of Patna High Court, active legal aid society across district courts."
  },
  {
    id: "nuals-kochi",
    name: "National University of Advanced Legal Studies (NUALS)",
    shortName: "NUALS Kochi",
    nirfRank: 26,
    location: "NUALS Campus, Kinfra Hi-Tech Park, Kalamassery, Kochi, Kerala",
    city: "Kochi",
    state: "Kerala",
    type: "National Law University (NLU)",
    established: 2005,
    coursesOffered: ["B.A. LL.B. (Hons.)", "LL.M.", "Ph.D."],
    entranceExam: "CLAT (UG & PG)",
    website: "https://www.nuals.ac.in",
    annualFeesApprox: "₹2,40,000 / year",
    intakeApprox: "120 (UG) / 40 (PG)",
    highlights: "Specialized in maritime law, international humanitarian law, and coastal regulatory regimes adjacent to Kerala High Court."
  },
  {
    id: "nluo-cuttack",
    name: "National Law University Odisha (NLUO)",
    shortName: "NLUO Cuttack",
    nirfRank: 25,
    location: "Kathajodi Campus, CDA Sector 13, Cuttack, Odisha",
    city: "Cuttack",
    state: "Odisha",
    type: "National Law University (NLU)",
    established: 2008,
    coursesOffered: ["B.A. LL.B. (Hons.)", "B.B.A. LL.B. (Hons.)", "LL.M.", "Ph.D."],
    entranceExam: "CLAT (UG & PG)",
    website: "https://www.nluo.ac.in",
    annualFeesApprox: "₹2,60,000 / year",
    intakeApprox: "180 (UG) / 50 (PG)",
    highlights: "Renowned maritime law and constitutional studies centers, close proximity to the High Court of Orissa at Cuttack."
  },
  {
    id: "nusrl-ranchi",
    name: "National University of Study and Research in Law (NUSRL)",
    shortName: "NUSRL Ranchi",
    nirfRank: 22,
    location: "Nagri, P.O. Bukru, Kanke-Pithoria Road, Ranchi, Jharkhand",
    city: "Ranchi",
    state: "Jharkhand",
    type: "National Law University (NLU)",
    established: 2010,
    coursesOffered: ["B.A. LL.B. (Hons.)", "LL.M.", "Ph.D."],
    entranceExam: "CLAT (UG & PG)",
    website: "https://www.nusrlranchi.ac.in",
    annualFeesApprox: "₹2,30,000 / year",
    intakeApprox: "134 (UG) / 40 (PG)",
    highlights: "Strong tribal jurisprudence, forest rights, environmental law and mining regulations focus in eastern India."
  },
  {
    id: "nluja-guwahati",
    name: "National Law University and Judicial Academy, Assam (NLUJA)",
    shortName: "NLUJA Assam",
    nirfRank: 28,
    location: "Amingaon, Hajo Road, Guwahati, Assam",
    city: "Guwahati",
    state: "Assam",
    type: "National Law University (NLU)",
    established: 2009,
    coursesOffered: ["B.A. LL.B. (Hons.)", "LL.M.", "Ph.D."],
    entranceExam: "CLAT (UG & PG)",
    website: "https://www.nluassam.ac.in",
    annualFeesApprox: "₹2,25,000 / year",
    intakeApprox: "60 (UG) / 30 (PG)",
    highlights: "Premier NLU for the 8 North-Eastern states, judicial officer induction training, and cross-border commercial trade laws."
  },
  {
    id: "dsnlu-visakhapatnam",
    name: "Damodaram Sanjivayya National Law University (DSNLU)",
    shortName: "DSNLU",
    nirfRank: 30,
    location: "NYAYAPRASTHA, Sabbavaram, Visakhapatnam, Andhra Pradesh",
    city: "Visakhapatnam",
    state: "Andhra Pradesh",
    type: "National Law University (NLU)",
    established: 2008,
    coursesOffered: ["B.A. LL.B. (Hons.)", "LL.M.", "Ph.D."],
    entranceExam: "CLAT (UG & PG)",
    website: "https://dsnlu.ac.in",
    annualFeesApprox: "₹2,40,000 / year",
    intakeApprox: "138 (UG) / 30 (PG)",
    highlights: "Specialized in maritime trade law, admiralty jurisdiction, coastal security, and port operations disputes."
  },
  {
    id: "tnnlu-tiruchirappalli",
    name: "Tamil Nadu National Law University (TNNLU)",
    shortName: "TNNLU",
    nirfRank: 32,
    location: "Dindigul Main Road, Navalurkuttapattu, Tiruchirappalli, Tamil Nadu",
    city: "Tiruchirappalli",
    state: "Tamil Nadu",
    type: "National Law University (NLU)",
    established: 2012,
    coursesOffered: ["B.A. LL.B. (Hons.)", "B.Com. LL.B. (Hons.)", "LL.M.", "Ph.D."],
    entranceExam: "CLAT (UG & PG)",
    website: "https://www.tnnlu.ac.in",
    annualFeesApprox: "₹2,35,000 / year",
    intakeApprox: "120 (UG) / 35 (PG)",
    highlights: "Established under Tamil Nadu Act, leading research in agrarian property laws, legal linguistics, and commercial arbitration."
  },
  {
    id: "mnlu-mumbai",
    name: "Maharashtra National Law University, Mumbai (MNLU Mumbai)",
    shortName: "MNLU Mumbai",
    nirfRank: 19,
    location: "2nd Floor, CETTM MTNL Building, Hiranandani Gardens, Powai, Mumbai",
    city: "Mumbai",
    state: "Maharashtra",
    type: "National Law University (NLU)",
    established: 2014,
    coursesOffered: ["B.A. LL.B. (Hons.)", "LL.M. (Corporate / Criminal / Maritime)", "Ph.D."],
    entranceExam: "CLAT (UG & PG)",
    website: "https://mnlumumbai.edu.in",
    annualFeesApprox: "₹3,15,000 / year",
    intakeApprox: "100 (UG) / 50 (PG)",
    highlights: "Unmatched access to India's financial capital, corporate headquarters, Bombay High Court, SEBI, and NCLT Principal benches."
  },
  {
    id: "mnlu-nagpur",
    name: "Maharashtra National Law University, Nagpur (MNLU Nagpur)",
    shortName: "MNLU Nagpur",
    nirfRank: 33,
    location: "Morajji, Waranga, Wardha Road, Nagpur, Maharashtra",
    city: "Nagpur",
    state: "Maharashtra",
    type: "National Law University (NLU)",
    established: 2016,
    coursesOffered: ["B.A. LL.B. (Hons.)", "B.B.A. LL.B. (Hons.)", "B.A. LL.B. (Adjudication & Justicing)", "LL.M.", "Ph.D."],
    entranceExam: "CLAT (UG & PG)",
    website: "https://nlunagpur.ac.in",
    annualFeesApprox: "₹2,55,000 / year",
    intakeApprox: "120 (UG) / 40 (PG)",
    highlights: "Pioneered India's first 5-year B.A. LL.B. in Adjudication & Justicing dedicated to judicial service aspirants, mentored by Supreme Court judges."
  },
  {
    id: "mnlu-aurangabad",
    name: "Maharashtra National Law University, Aurangabad (MNLU Aurangabad)",
    shortName: "MNLU Aurangabad",
    nirfRank: "State NLU",
    location: "Kanchanwadi, Aurangabad, Maharashtra",
    city: "Aurangabad",
    state: "Maharashtra",
    type: "National Law University (NLU)",
    established: 2017,
    coursesOffered: ["B.A. LL.B. (Hons.)", "B.B.A. LL.B. (Hons.)", "LL.M.", "Ph.D."],
    entranceExam: "CLAT (UG & PG)",
    website: "https://mnlua.ac.in",
    annualFeesApprox: "₹2,30,000 / year",
    intakeApprox: "60 (UG) / 30 (PG)",
    highlights: "Focus on human rights, administrative adjudication, and legal aid clinics across the Marathwada region."
  },
  {
    id: "hpnlu-shimla",
    name: "Himachal Pradesh National Law University (HPNLU)",
    shortName: "HPNLU Shimla",
    nirfRank: 27,
    location: "16 Miles, Shimla-Mandi National Highway, Ghandal, Shimla, Himachal Pradesh",
    city: "Shimla",
    state: "Himachal Pradesh",
    type: "National Law University (NLU)",
    established: 2016,
    coursesOffered: ["B.A. LL.B. (Hons.)", "B.B.A. LL.B. (Hons.)", "LL.M.", "Ph.D."],
    entranceExam: "CLAT (UG & PG)",
    website: "https://hpnlu.ac.in",
    annualFeesApprox: "₹2,45,000 / year",
    intakeApprox: "120 (UG) / 40 (PG)",
    highlights: "Specialized research in mountain ecology laws, hydropower agreements, disaster management, and environmental governance."
  },
  {
    id: "dnlu-jabalpur",
    name: "Dharmashastra National Law University (DNLU)",
    shortName: "DNLU Jabalpur",
    nirfRank: "State NLU",
    location: "BRBRAITT Campus, South Civil Lines, Jabalpur, Madhya Pradesh",
    city: "Jabalpur",
    state: "Madhya Pradesh",
    type: "National Law University (NLU)",
    established: 2018,
    coursesOffered: ["B.A. LL.B. (Hons.)", "LL.M.", "Ph.D."],
    entranceExam: "CLAT (UG & PG)",
    website: "https://mpdnlu.ac.in",
    annualFeesApprox: "₹2,40,000 / year",
    intakeApprox: "120 (UG) / 30 (PG)",
    highlights: "Established at the seat of the Madhya Pradesh High Court in Jabalpur, promoting judicial trial simulations and statutory interpretation."
  },
  {
    id: "branlu-sonipat",
    name: "Dr. B.R. Ambedkar National Law University (BRANLU)",
    shortName: "BRANLU Sonipat",
    nirfRank: "State NLU",
    location: "Rai, Educational City, Sonipat, Haryana",
    city: "Sonipat",
    state: "Haryana",
    type: "National Law University (NLU)",
    established: 2012,
    coursesOffered: ["B.A. LL.B. (Hons.)", "LL.M.", "Ph.D."],
    entranceExam: "CLAT (UG & PG)",
    website: "https://dbranlu.ac.in",
    annualFeesApprox: "₹2,10,000 / year",
    intakeApprox: "120 (UG) / 30 (PG)",
    highlights: "Haryana's first state NLU located in Rajiv Gandhi Education City near Delhi NCR, active in criminal justice reform and social welfare legislation."
  },
  {
    id: "nlu-tripura",
    name: "National Law University Tripura (NLUT)",
    shortName: "NLU Tripura",
    nirfRank: "New NLU",
    location: "Agartala, Tripura",
    city: "Agartala",
    state: "Tripura",
    type: "National Law University (NLU)",
    established: 2022,
    coursesOffered: ["B.A. LL.B. (Hons.)", "LL.M."],
    entranceExam: "CLAT (UG & PG)",
    website: "https://nlutripura.ac.in",
    annualFeesApprox: "₹2,10,000 / year",
    intakeApprox: "60 (UG) / 25 (PG)",
    highlights: "Focus on transnational trade, cross-border intellectual property, and Southeast Asian dispute resolution."
  },
  {
    id: "iiuler-goa",
    name: "India International University of Legal Education & Research (IIULER)",
    shortName: "IIULER Goa",
    nirfRank: "Bar Council of India Apex Institute",
    location: "Upasnagar, Sancoale, Goa",
    city: "Goa",
    state: "Goa",
    type: "National Law University (NLU)",
    established: 2022,
    coursesOffered: ["B.A. LL.B. (Hons.)", "B.B.A. LL.B. (Hons.)", "LL.M.", "Ph.D."],
    entranceExam: "IIULER-ET / CLAT",
    website: "https://iiuler.edu.in",
    annualFeesApprox: "₹4,50,000 / year",
    intakeApprox: "120 (UG)",
    highlights: "Established directly by the Bar Council of India Trust (BCIT) to provide world-class advocacy and international arbitration training."
  },

  // --- PREMIER CENTRAL & STATE UNIVERSITY FACULTIES ---
  {
    id: "bhu-law-school",
    name: "Faculty of Law, Banaras Hindu University (BHU)",
    shortName: "BHU Law",
    nirfRank: 20,
    location: "Varanasi, Uttar Pradesh",
    city: "Varanasi",
    state: "Uttar Pradesh",
    type: "Central University",
    established: 1922,
    coursesOffered: ["B.A. LL.B. (Hons.)", "3-Year LL.B.", "LL.M.", "Ph.D."],
    entranceExam: "CUET UG / CUET PG",
    website: "https://www.bhu.ac.in",
    annualFeesApprox: "₹8,000 / year",
    intakeApprox: "286 (LL.B.) / 60 (B.A. LL.B.)",
    highlights: "One of the oldest and most respected law faculties in North India, pioneering clinical legal education and jurisprudence."
  },
  {
    id: "amu-law-faculty",
    name: "Faculty of Law, Aligarh Muslim University (AMU)",
    shortName: "AMU Law",
    nirfRank: 14,
    location: "Aligarh, Uttar Pradesh",
    city: "Aligarh",
    state: "Uttar Pradesh",
    type: "Central University",
    established: 1960,
    coursesOffered: ["B.A. LL.B.", "LL.M.", "Ph.D."],
    entranceExam: "AMU Law Entrance Exam",
    website: "https://www.amu.ac.in",
    annualFeesApprox: "₹12,000 / year",
    intakeApprox: "100 (UG) / 35 (PG)",
    highlights: "Distinguished legal scholars, extensive library, and strong tradition in civil law, personal law, and constitutional interpretation."
  },
  {
    id: "jmi-faculty-of-law",
    name: "Faculty of Law, Jamia Millia Islamia",
    shortName: "JMI Law",
    nirfRank: 9,
    location: "Jamia Nagar, Okhla, New Delhi",
    city: "New Delhi",
    state: "Delhi",
    type: "Central University",
    established: 1989,
    coursesOffered: ["B.A. LL.B. (Hons.)", "LL.M. (Personal / Corporate / Criminal)", "Ph.D."],
    entranceExam: "JMI Law Entrance Test",
    website: "https://www.jmi.ac.in",
    annualFeesApprox: "₹15,000 / year",
    intakeApprox: "120 (UG) / 30 (PG)",
    highlights: "Top 10 NIRF ranking, celebrated moot court society, robust legal aid clinic, and affordable central university tuition."
  },
  {
    id: "panjab-university-chandigarh",
    name: "Department of Laws, Panjab University",
    shortName: "PU Law Chandigarh",
    nirfRank: 34,
    location: "Sector 14, Chandigarh",
    city: "Chandigarh",
    state: "Chandigarh",
    type: "State Government",
    established: 1882,
    coursesOffered: ["3-Year LL.B.", "5-Year B.A./B.Com. LL.B. (UILS)", "LL.M.", "Ph.D."],
    entranceExam: "PU CET (UG & PG Law)",
    website: "https://laws.puchd.ac.in",
    annualFeesApprox: "₹18,000 / year",
    intakeApprox: "300 (3-Yr) / 240 (5-Yr)",
    highlights: "Historic legal department serving Punjab & Haryana High Court bar. Outstanding civil and constitutional litigation lineage."
  },
  {
    id: "army-institute-of-law",
    name: "Army Institute of Law (AIL), Mohali",
    shortName: "AIL Mohali",
    nirfRank: 36,
    location: "Sector 68, Mohali, Punjab (Chandigarh Tricity)",
    city: "Mohali",
    state: "Punjab",
    type: "State Government",
    established: 1999,
    coursesOffered: ["B.A. LL.B.", "1-Year LL.M."],
    entranceExam: "AIL LET (Law Entrance Test)",
    website: "https://www.ail.ac.in",
    annualFeesApprox: "₹1,85,000 / year",
    intakeApprox: "100 (UG)",
    highlights: "Premier legal academy run by Army Welfare Education Society (AWES), exceptional discipline, mooting accolades, and JAG selection record."
  },
  {
    id: "rgsoipl-iit-kharagpur",
    name: "Rajiv Gandhi School of Intellectual Property Law, IIT Kharagpur",
    shortName: "IIT KGP Law",
    nirfRank: 10,
    location: "IIT Kharagpur Campus, Kharagpur, West Bengal",
    city: "Kharagpur",
    state: "West Bengal",
    type: "Central University",
    established: 2006,
    coursesOffered: ["3-Year LL.B. (Hons. in IP Law)", "LL.M.", "Ph.D."],
    entranceExam: "IIT Kharagpur Law Entrance Test",
    website: "https://www.iitkgp.ac.in/department/IP",
    annualFeesApprox: "₹1,50,000 / year",
    intakeApprox: "50 (LL.B.)",
    highlights: "First law school housed inside an IIT, dedicated to patent law, technology transactions, data privacy, and intellectual property litigation."
  },
  {
    id: "ili-delhi",
    name: "Indian Law Institute (ILI), New Delhi",
    shortName: "ILI New Delhi",
    nirfRank: "Premier Research Deemed University",
    location: "Bhagwan Das Road, Opposite Supreme Court of India, New Delhi",
    city: "New Delhi",
    state: "Delhi",
    type: "Central University",
    established: 1956,
    coursesOffered: ["1-Year LL.M.", "Ph.D.", "Post Graduate Diplomas (Cyber, Tax, IPR, ADR)"],
    entranceExam: "CAT (Common Admission Test by ILI)",
    website: "https://ili.ac.in",
    annualFeesApprox: "₹1,30,000 / year",
    intakeApprox: "40 (LL.M.)",
    highlights: "Located across the Supreme Court of India with the Chief Justice of India as Ex-Officio Visitor. Premier legal research and law reform authority."
  },
  {
    id: "christ-university-school-of-law",
    name: "School of Law, Christ (Deemed to be University)",
    shortName: "SLCU Bengaluru",
    nirfRank: 13,
    location: "Hosur Road, Bhavani Nagar, S.G. Palya, Bengaluru, Karnataka",
    city: "Bengaluru",
    state: "Karnataka",
    type: "Premier Private",
    established: 2006,
    coursesOffered: ["B.A. LL.B. (Hons.)", "B.B.A. LL.B. (Hons.)", "LL.M. (Corporate / Constitutional)", "Ph.D."],
    entranceExam: "Christ University Entrance Test (CUET)",
    website: "https://christuniversity.in",
    annualFeesApprox: "₹2,60,000 / year",
    intakeApprox: "300 (UG)",
    highlights: "Outstanding campus infrastructure, international moot court competitions, and active corporate and IP placement record in Bengaluru."
  },
  {
    id: "nmims-kirit-p-mehta",
    name: "Kirit P. Mehta School of Law, SVKM's NMIMS",
    shortName: "KPMSOL Mumbai",
    nirfRank: 21,
    location: "V.L. Mehta Road, Vile Parle West, Mumbai, Maharashtra",
    city: "Mumbai",
    state: "Maharashtra",
    type: "Premier Private",
    established: 2013,
    coursesOffered: ["B.A. LL.B. (Hons.)", "B.B.A. LL.B. (Hons.)", "1-Year LL.M.", "Ph.D."],
    entranceExam: "NLAT / CLAT / LSAT India",
    website: "https://law.nmims.edu",
    annualFeesApprox: "₹3,50,000 / year",
    intakeApprox: "180 (UG)",
    highlights: "Premier corporate law programs, securities regulation, dispute resolution, and finance-law integration in Mumbai."
  },
  {
    id: "kiit-school-of-law",
    name: "KIIT School of Law, Kalinga Institute of Industrial Technology",
    shortName: "KIIT Law",
    nirfRank: 12,
    location: "Campus 16, Patia, Bhubaneswar, Odisha",
    city: "Bhubaneswar",
    state: "Odisha",
    type: "Premier Private",
    established: 2007,
    coursesOffered: ["B.A. LL.B.", "B.B.A. LL.B.", "B.Sc. LL.B.", "LL.M.", "Ph.D."],
    entranceExam: "KIITEE (Law)",
    website: "https://kls.kiit.ac.in",
    annualFeesApprox: "₹3,80,000 / year",
    intakeApprox: "240 (UG)",
    highlights: "State-of-the-art moot courts, legal aid clinics, and diverse specialized honours programs in business, criminal, and constitutional law."
  },
  {
    id: "lloyd-law-college",
    name: "Lloyd Law College",
    shortName: "Lloyd Law",
    nirfRank: "Premier NCR College",
    location: "Plot No. 11, Knowledge Park II, Greater Noida, Uttar Pradesh (Delhi NCR)",
    city: "Greater Noida",
    state: "Uttar Pradesh",
    type: "Premier Private",
    established: 2003,
    coursesOffered: ["B.A. LL.B.", "B.Com. LL.B.", "3-Year LL.B.", "LL.M."],
    entranceExam: "LET (Lloyd Entrance Test) / CLAT",
    website: "https://www.lloydlawcollege.edu.in",
    annualFeesApprox: "₹1,90,000 / year",
    intakeApprox: "300 (UG)",
    highlights: "Host of the prestigious SAARCLAW moot competition, forensic investigation lab, and extensive Delhi High Court internship tie-ups."
  },
  {
    id: "upes-school-of-law",
    name: "School of Law, UPES Dehradun",
    shortName: "UPES Law",
    nirfRank: 18,
    location: "Knowledge Acres, Kandoli via Prem Nagar, Dehradun, Uttarakhand",
    city: "Dehradun",
    state: "Uttarakhand",
    type: "Premier Private",
    established: 2007,
    coursesOffered: ["B.A. LL.B. (Hons.)", "B.B.A. LL.B. (Hons.)", "B.Com. LL.B.", "LL.M.", "Ph.D."],
    entranceExam: "ULSAT / CLAT / LSAT India",
    website: "https://www.upes.ac.in",
    annualFeesApprox: "₹3,60,000 / year",
    intakeApprox: "350 (UG)",
    highlights: "Pioneering specialized legal education in Energy Law, Aviation Law, Cyber Law, and Environmental Regulations."
  }
];

// ── 2. LEGAL EDUCATION DEGREE PATHWAYS IN INDIA ──
export const legalDegreesData: LegalDegreeInfo[] = [
  {
    degree: "5-Year Integrated Law Programs (B.A. LL.B. / B.B.A. LL.B. / B.Com. LL.B. / B.Sc. LL.B.)",
    duration: "5 Years (10 Semesters)",
    eligibility: "Higher Secondary (10+2) examination or equivalent from a recognized board with minimum 45% aggregate marks (40% for SC/ST). No upper age limit.",
    curriculumOverview: "Combines an undergraduate humanities, commerce, business, or science degree with professional law curriculum approved by the Bar Council of India (BCI). Includes mandatory moot court exercises, client counselling, legal aid clinics, and minimum 20 weeks of internships during the 5-year tenure.",
    keySubjects: [
      "Constitutional Law of India (Articles 1–395)",
      "Bharatiya Nyaya Sanhita (BNS) & Criminal Jurisprudence",
      "Bharatiya Nagarik Suraksha Sanhita (BNSS) & CrPC",
      "Bharatiya Sakshya Adhiniyam (BSA) & Law of Evidence",
      "Code of Civil Procedure (CPC) & Limitation Act",
      "Corporate Law, Companies Act 2013 & IBC",
      "Intellectual Property Rights (Patents, Trademarks, Copyright)",
      "Public International Law & Alternative Dispute Resolution (ADR)"
    ],
    careerProspects: [
      "Advocate at Supreme Court of India & High Courts",
      "State Judicial Services Examination (Civil Judge Junior Division)",
      "Corporate Counsel in Law Firms & MNC In-House Legal Teams",
      "Judge Advocate General (JAG) Branch in Indian Armed Forces",
      "Public Prosecutor / Assistant District Attorney",
      "Civil Services (IAS, IPS, IRS) & Legal Policy Advisory"
    ]
  },
  {
    degree: "3-Year Unitary LL.B. (Graduate Bachelor of Laws)",
    duration: "3 Years (6 Semesters)",
    eligibility: "Bachelor's degree in any discipline (B.A., B.Sc., B.Com., B.Tech., MBBS, etc.) from a UGC-recognized university with minimum 45% marks (40% for SC/ST).",
    curriculumOverview: "Designed for graduates transitioning into the legal profession. Focuses purely on substantive and procedural laws without general academic coursework. Approved by BCI for advocate enrolment across all State Bar Councils.",
    keySubjects: [
      "Jurisprudence & Legal Theory",
      "Law of Torts & Consumer Protection Act 2019",
      "Law of Contracts & Specific Relief",
      "Family Law (Hindu Law & Muslim Law)",
      "Labour & Industrial Laws & Social Security Code",
      "Administrative Law & Constitutional Remedies",
      "Drafting, Pleading & Conveyancing (Clinical Legal Course)",
      "Professional Ethics & Bar-Bench Relations"
    ],
    careerProspects: [
      "Independent Litigation Practice at Trial, District & Appellate Courts",
      "Advocate-on-Record (AOR) Practice at the Supreme Court",
      "Judicial Services Examination for Post-Graduates",
      "Legal Advisor to Financial Institutions, Banks & PSUs",
      "Tax Consultant & Corporate Legal Consultant"
    ]
  },
  {
    degree: "Master of Laws (LL.M.) Postgraduate Degree",
    duration: "1 Year (Trimester / Semester System) or 2 Years",
    eligibility: "LL.B. degree (3-Year or 5-Year Integrated) from a BCI-recognized university with minimum 50% aggregate marks (45% for SC/ST).",
    curriculumOverview: "Advanced legal specialization and scholarly research. Prepares scholars, advocates, and academicians for apex court appellate advocacy, judicial clerkships, and university professorships.",
    keySubjects: [
      "Comparative Constitutional Law & Judicial Review",
      "Corporate Governance, Mergers & Acquisitions, Securities Regulation",
      "International Commercial Arbitration & Cross-Border Disputes",
      "White Collar Crimes & Economic Offences Jurisprudence",
      "Advanced Intellectual Property Rights & Technology Law",
      "Human Rights, Humanitarian Law & Refugee Jurisprudence",
      "Legal Research Methodology & Master's Dissertation"
    ],
    careerProspects: [
      "Senior Appellate Advocate before Supreme Court & High Courts",
      "Assistant Professor / Lecturer in NLUs and Premier Universities (UGC-NET)",
      "Legal Researcher / Law Clerk to Supreme Court & High Court Judges",
      "International Law Firms, Arbitration Chambers & Think Tanks",
      "Legal Officer in International Bodies (UN, WTO, ICC, WIPO)"
    ]
  },
  {
    degree: "Doctor of Philosophy in Law (Ph.D.) & LL.D.",
    duration: "3 to 6 Years",
    eligibility: "Master's Degree in Law (LL.M.) with at least 55% marks (50% for SC/ST) plus performance in National Entrance Test or UGC-NET / JRF.",
    curriculumOverview: "Apex academic and research degree in jurisprudence. Involves independent doctoral thesis contributing original insights into statutory interpretation, constitutional doctrines, legislative reforms, and socioeconomic jurisprudence.",
    keySubjects: [
      "Advanced Legal Research Methodology",
      "Quantitative & Qualitative Socio-Legal Research",
      "Interdisciplinary Approaches to Law & Economics",
      "Comparative Global Jurisprudence",
      "Doctoral Thesis Defense & Peer-Reviewed Publishing"
    ],
    careerProspects: [
      "Professor / Dean / Vice-Chancellor at National Law Universities",
      "Member of Law Commission of India & Legislative Drafting Committees",
      "Senior Research Fellow in Apex Legal Policy Institutes",
      "Expert Legal Consultant for Bilateral Treaties and Sovereign Disputes"
    ]
  }
];

// ── 3. NATIONAL LAW ENTRANCE EXAMINATIONS IN INDIA ──
export const lawEntranceExamsData: LawEntranceExamInfo[] = [
  {
    name: "Common Law Admission Test (CLAT UG & PG)",
    shortName: "CLAT",
    conductingBody: "Consortium of National Law Universities (Consortium of NLUs)",
    participatingInstitutes: "24 National Law Universities across India plus 60+ affiliate private law schools",
    frequency: "Annual (Conducted in December for subsequent academic year)",
    examPattern: "Pen-and-Paper (Offline OMR), 120 Questions, 120 Minutes duration. +1 mark for correct, -0.25 for incorrect.",
    syllabus: [
      "English Language (Reading comprehension passages from legal and philosophical literature)",
      "Current Affairs including General Knowledge (National and international contemporary events)",
      "Legal Reasoning (Fact-principle propositions based on landmark Supreme Court cases and statutory laws)",
      "Logical Reasoning (Short arguments, inferences, assumptions, deductions)",
      "Quantitative Techniques (Short graphical and numerical sets up to 10th standard math)"
    ],
    officialPortal: "https://consortiumofnlus.ac.in"
  },
  {
    name: "All India Law Entrance Test (AILET UG, PG & Ph.D.)",
    shortName: "AILET",
    conductingBody: "National Law University, Delhi (NLUD)",
    participatingInstitutes: "National Law University, Delhi",
    frequency: "Annual (Conducted in December)",
    examPattern: "Offline OMR, 150 Questions, 120 Minutes duration. Negative marking: 0.25 marks deducted per wrong answer.",
    syllabus: [
      "Section A: English Language (50 Questions / 50 Marks)",
      "Section B: Current Affairs & General Knowledge (30 Questions / 30 Marks)",
      "Section C: Logical Reasoning with Legal Context (70 Questions / 70 Marks)"
    ],
    officialPortal: "https://nludelhi.ac.in"
  },
  {
    name: "Common University Entrance Test (CUET UG & PG Law)",
    shortName: "CUET Law",
    conductingBody: "National Testing Agency (NTA)",
    participatingInstitutes: "Faculty of Law (University of Delhi), Banaras Hindu University (BHU), Allahabad University, BBAU, etc.",
    frequency: "Annual (Conducted in May–June)",
    examPattern: "Computer-Based Test (CBT), Multiple Choice Questions",
    syllabus: [
      "Language Comprehension",
      "Legal Studies Domain (Judiciary, Constitutional Framework, Arbitration, Human Rights in India)",
      "General Test (Reasoning, Current Affairs, Quantitative Aptitude)"
    ],
    officialPortal: "https://exams.nta.ac.in/CUET-PG"
  },
  {
    name: "Symbiosis Law Admission Test (SLAT)",
    shortName: "SLAT",
    conductingBody: "Symbiosis International (Deemed University)",
    participatingInstitutes: "SLS Pune, SLS Noida, SLS Hyderabad, SLS Nagpur",
    frequency: "Annual (Conducted in May)",
    examPattern: "Computer-Based Test (CBT), 60 Questions, 60 Minutes duration. No negative marking. Followed by Personal Interaction (PI).",
    syllabus: [
      "Logical Reasoning (12 MCQs)",
      "Legal Reasoning (12 MCQs)",
      "Analytical Reasoning (12 MCQs)",
      "Reading Comprehension (12 MCQs)",
      "General Knowledge & Current Events (12 MCQs)"
    ],
    officialPortal: "https://www.set-test.org"
  },
  {
    name: "Maharashtra Common Entrance Test Law (MH CET Law)",
    shortName: "MH CET Law",
    conductingBody: "State Common Entrance Test Cell, Government of Maharashtra",
    participatingInstitutes: "150+ Law Colleges across Maharashtra including GLC Mumbai, ILS Pune, Pravin Gandhi College of Law",
    frequency: "Annual (Conducted in April–May separately for 3-Year and 5-Year LL.B.)",
    examPattern: "Online CBT, 150 Questions, 120 Minutes duration. No negative marking.",
    syllabus: [
      "Legal Aptitude & Legal Reasoning (40 Marks)",
      "General Knowledge with Current Affairs (30 Marks)",
      "Logical & Analytical Reasoning (40 Marks)",
      "English Language (30 Marks)",
      "Basic Mathematics (10 Marks - 5-Year only)"
    ],
    officialPortal: "https://cetcell.mahacet.org"
  },
  {
    name: "Law School Admission Test—India (LSAT—India)",
    shortName: "LSAT—India",
    conductingBody: "Law School Admission Council (LSAC) / Pearson VUE",
    participatingInstitutes: "Jindal Global Law School (JGLS), UPES Dehradun, BITS Law School, Bennett University, etc.",
    frequency: "Conducted in January & May sessions",
    examPattern: "Remote Proctored Online Test, 92 Questions across 4 sections, 2 hours 20 minutes duration. Scaled score between 420–480.",
    syllabus: [
      "Analytical Reasoning (Logic games and spatial groupings)",
      "Logical Reasoning (Two dedicated sections evaluating premise-conclusion analysis)",
      "Reading Comprehension (Long law, humanities, and social science passages)"
    ],
    officialPortal: "https://www.discoverlaw.in"
  }
];

// ── 4. BAR COUNCIL OF INDIA REGULATION & PRACTICE PATHWAY ──
export const barCouncilAndPracticeRules = {
  regulatorName: "Bar Council of India (BCI)",
  statutoryBasis: "Advocates Act, 1961 (Act No. 25 of 1961)",
  stepsToPractice: [
    {
      step: 1,
      title: "Complete Recognized LL.B. Degree",
      desc: "Graduate from a university or institution accredited by the Bar Council of India with either a 5-year integrated or 3-year LL.B. degree having completed mandatory clinical legal education and minimum 20 weeks of court/chamber internships."
    },
    {
      step: 2,
      title: "State Bar Council Provisional Enrolment",
      desc: "Submit formal application under Section 24 of the Advocates Act, 1961 to the respective State Bar Council (e.g., Bar Council of Delhi, Bar Council of Maharashtra & Goa, Bar Council of Punjab & Haryana). Pay statutory fees, take the Advocate's Oath, and receive provisional license and Roll Number (e.g. D/1234/2025)."
    },
    {
      step: 3,
      title: "Clear All India Bar Examination (AIBE)",
      desc: "Within 2 years of provisional enrolment, qualify the mandatory All India Bar Examination (AIBE) conducted by BCI to secure the permanent Certificate of Practice (COP), conferring unconditional right to practice across all Indian courts."
    },
    {
      step: 4,
      title: "Chamber Practice & High Court Advocacy",
      desc: "Join an active litigation chamber, practice before District and Sessions Courts, statutory tribunals, and constitutional High Courts under Article 226/227."
    },
    {
      step: 5,
      title: "Advocate-on-Record (AOR) Qualifying Examination",
      desc: "Under Order IV of Supreme Court Rules 2013, after completing minimum 4 years of continuous practice plus 1 year of mandatory training under an AOR with at least 10 years of standing, qualify the rigorous 4-subject Supreme Court AOR Examination to secure exclusive entitlement to file petitions, pleadings, and represent clients before the Apex Court."
    }
  ],
  aorRequirements: [
    "Minimum 4 years of continuous active enrolment as an Advocate prior to training commencement.",
    "One full year of mandatory training registered with the Supreme Court Registry under an Advocate-on-Record approved by the Chief Justice of India.",
    "Passing all 4 written examination papers: Paper I (Practice and Procedure of Supreme Court), Paper II (Drafting of SLP, Writs & Petitions), Paper III (Advocacy and Professional Ethics), Paper IV (Leading Cases of the Supreme Court).",
    "Maintenance of an official office and library in New Delhi within a 16 km radius of the Supreme Court of India.",
    "Employment of a registered clerk within 30 days of enrolment."
  ]
};
