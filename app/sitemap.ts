import { MetadataRoute } from 'next';
import { judgmentsComprehensiveData } from '../lib/data/judgmentsComprehensiveData';
import { initialDistrictCourtsData } from '../lib/data/districtCourtsData';
import { allStatesJudiciaryProfiles, tribunalsComprehensiveData } from '../lib/data/courtsComprehensiveData';

const BASE_URL = 'https://advocateonrecordtushargarg.com';

function generateSlug(str: string) {
  return (str || '')
    .toLowerCase()
    .trim()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();

  // 1. Primary Chambers & Hub Routes
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, lastModified: currentDate, changeFrequency: 'daily', priority: 1.0 },
    { url: `${BASE_URL}/about`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/aor`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/slp`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${BASE_URL}/writ-petitions`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/courts`, lastModified: currentDate, changeFrequency: 'daily', priority: 0.95 },
    { url: `${BASE_URL}/high-courts`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/district-courts`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/all-courts`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${BASE_URL}/tribunals`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/judgments`, lastModified: currentDate, changeFrequency: 'daily', priority: 0.95 },
    { url: `${BASE_URL}/laws`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/bare-acts`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/podcast`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/articles`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${BASE_URL}/legal-drafts`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE_URL}/faqs`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/resources`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${BASE_URL}/resources/bare-acts`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${BASE_URL}/resources/glossary`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/resources/maxims`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/resources/procedures`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE_URL}/judiciary`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${BASE_URL}/jobs`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/colleges`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/contact`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/disclaimer`, lastModified: currentDate, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${BASE_URL}/privacy-policy`, lastModified: currentDate, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${BASE_URL}/terms`, lastModified: currentDate, changeFrequency: 'yearly', priority: 0.5 },
  ];

  // 2. Practice Area Routes (12 Areas)
  const practiceSlugs = [
    "constitutional-law", "criminal-law", "civil-law", "corporate-law",
    "taxation-law", "property-law", "family-law", "labour-law",
    "arbitration-law", "insolvency-and-bankruptcy", "consumer-law", "environmental-law"
  ];
  const practiceRoutes: MetadataRoute.Sitemap = practiceSlugs.map((slug) => ({
    url: `${BASE_URL}/laws/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 0.85,
  }));

  // 3. Statutory Tribunals (10 Tribunals)
  const tribunalRoutes: MetadataRoute.Sitemap = tribunalsComprehensiveData.map((t) => ({
    url: `${BASE_URL}/tribunals/${t.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: 0.85,
  }));

  // 4. All 36 States & Union Territories
  const stateRoutes: MetadataRoute.Sitemap = allStatesJudiciaryProfiles.map((st) => ({
    url: `${BASE_URL}/courts/${st.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 0.85,
  }));

  // 5. All 500 Verified Judgments
  const judgmentRoutes: MetadataRoute.Sitemap = judgmentsComprehensiveData.map((j) => ({
    url: `${BASE_URL}/judgments/${j._id}`,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: j.isFeatured ? 0.9 : 0.8,
  }));

  // 6. Subordinate District Courts (677 Courts)
  const addedCourts = new Set<string>();
  const districtRoutes: MetadataRoute.Sitemap = [];
  initialDistrictCourtsData.forEach((dc) => {
    const sSlug = generateSlug(dc.state);
    const cSlug = generateSlug(dc.courtName);
    const key = `${sSlug}/${cSlug}`;
    if (!addedCourts.has(key)) {
      addedCourts.add(key);
      districtRoutes.push({
        url: `${BASE_URL}/courts/${sSlug}/${cSlug}`,
        lastModified: currentDate,
        changeFrequency: 'monthly',
        priority: 0.75,
      });
    }
  });

  return [
    ...staticRoutes,
    ...practiceRoutes,
    ...tribunalRoutes,
    ...stateRoutes,
    ...judgmentRoutes,
    ...districtRoutes,
  ];
}
