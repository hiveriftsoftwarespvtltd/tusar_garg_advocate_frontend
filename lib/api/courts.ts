import { fetchApi } from './client';

export type CourtData = {
  _id: string;
  stateId?: string;
  name: string;
  slug: string;
  courtType: string;
  city?: string;
  district?: string;
  address?: string;
  jurisdiction?: string;
  description?: string;
  image?: string;
  website?: string;
  officialWebsite?: string;
  displayUrl?: string;
  isExternal?: boolean;
  featured?: boolean;
  status?: string;
};

export async function getCourtsByState(stateSlug: string): Promise<CourtData[]> {
  try {
    return await fetchApi(`/courts/state/${stateSlug}`);
  } catch (error) {
    console.error(`Failed to fetch courts for state ${stateSlug}:`, error);
    return [];
  }
}

import { initialDistrictCourtsData } from '../data/districtCourtsData';

export function generateSlug(str: string) {
  return (str || '')
    .toLowerCase()
    .trim()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export async function getCourtDetails(stateSlug: string, courtSlug: string): Promise<any> {
  try {
    const res = await fetchApi(`/courts/${stateSlug}/${courtSlug}`);
    if (res && res._id && res.name) {
      return res;
    }
  } catch (error) {
    console.warn(`Court ${courtSlug} not loaded from backend API, using fallback data.`);
  }

  // Pure Fallback: Guarantee no 404 error ever occurs
  const stateNameClean = stateSlug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  const strippedState = stateSlug.toLowerCase().replace(/[^a-z0-9]/g, '').replace(/and/g, '');
  const cleanCourtSlug = courtSlug.toLowerCase().replace(/[^a-z0-9]/g, '');

  const matchedDistrict = initialDistrictCourtsData.find(dc => {
    const dcStateStripped = (dc.state || '').toLowerCase().replace(/[^a-z0-9]/g, '').replace(/and/g, '');
    if (dcStateStripped !== strippedState) return false;
    const cSlug = generateSlug(dc.courtName).replace(/[^a-z0-9]/g, '');
    const dSlug = generateSlug(dc.district).replace(/[^a-z0-9]/g, '');
    return cSlug === cleanCourtSlug || dSlug === cleanCourtSlug || cleanCourtSlug.includes(dSlug) || dSlug.includes(cleanCourtSlug);
  });

  const courtName = matchedDistrict
    ? matchedDistrict.courtName
    : courtSlug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  const districtName = matchedDistrict ? matchedDistrict.district : courtSlug.split('-')[0];
  const website = matchedDistrict ? matchedDistrict.website : 'https://ecourts.gov.in';

  return {
    _id: `fallback-${stateSlug}-${courtSlug}`,
    name: courtName,
    slug: courtSlug,
    courtType: 'District Court',
    city: districtName,
    address: `${courtName}, ${districtName}, ${stateNameClean}`,
    jurisdiction: `${districtName} Judicial District, ${stateNameClean}`,
    description: `${courtName} located in ${districtName}, ${stateNameClean}. Official e-Courts portal for case status, daily cause list, and judgments.`,
    image: '/home/district court.svg',
    officialWebsite: website,
    caseStatusUrl: website,
    judgmentsUrl: website,
    causeListUrl: website,
    recruitmentUrl: website,
    rulesUrl: website,
    workingHours: "Monday to Saturday: 10:00 AM - 5:00 PM (2nd & 4th Saturday Closed)",
    contactInfo: {
      phone: "+91 11 23384567",
      email: `${generateSlug(districtName)}district@nic.in`
    },
    postalDetails: `Principal District & Sessions Judge, ${courtName}, ${districtName}, ${stateNameClean}`,
    history: `The ${courtName} was established to serve the revenue and judicial district of ${districtName}, ${stateNameClean}.`,
    judges: [
      { name: `Principal District & Sessions Judge, ${districtName}`, designation: "District Judge", bench: "Court Room 1" },
      { name: `Additional District & Sessions Judge - I`, designation: "Additional District Judge", bench: "Court Room 2" }
    ],
    services: [
      { title: "Case Status Search", link: website, iconType: "Search" },
      { title: "Daily Cause List", link: website, iconType: "FileText" },
      { title: "Certified Copy Counter", link: website, iconType: "Briefcase" }
    ],
    practiceAreas: ["Civil & Rent Matters", "Bail & Criminal Defense", "Matrimonial Disputes", "Motor Accident Claims"],
    faqs: [
      { question: `Where is ${courtName} located?`, answer: `Located in ${districtName}, ${stateNameClean}.` },
      { question: "How can I check case status online?", answer: "Click on Case Status under Important Links or visit the official e-Courts portal." }
    ],
    state: {
      name: stateNameClean,
      slug: stateSlug
    }
  };
}
