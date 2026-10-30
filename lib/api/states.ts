import { fetchApi } from './client';
import { allStatesJudiciaryProfiles } from '../data/courtsComprehensiveData';

export type StateData = {
  _id: string;
  name: string;
  slug: string;
  code: string;
  description?: string;
  image?: string;
  status: string;
  governingHighCourt?: string;
  highCourtSeat?: string;
  highCourtBench?: string;
  highCourtSlug?: string;
  totalDistricts?: number;
};

export async function getPublishedStates(): Promise<StateData[]> {
  let backendStates: StateData[] = [];
  try {
    const res = await fetchApi('/states');
    if (Array.isArray(res) && res.length > 0) {
      backendStates = res;
    }
  } catch (error) {
    console.error('Failed to fetch states from API, using comprehensive fallback:', error);
  }

  // Merge backend states with all 35 States/UTs fallback profiles
  const stateMap = new Map<string, StateData>();

  // Add fallbacks first
  for (const s of allStatesJudiciaryProfiles) {
    stateMap.set(s.slug, {
      _id: `fallback-${s.slug}`,
      name: s.name,
      slug: s.slug,
      code: s.eCourtsStateCode,
      description: s.overview,
      image: `/home/district court.svg`,
      status: 'PUBLISHED',
      governingHighCourt: s.governingHighCourt,
      highCourtSeat: s.highCourtSeat,
      highCourtBench: s.highCourtBench,
      highCourtSlug: s.highCourtSlug,
      totalDistricts: s.totalDistricts,
    });
  }

  // Override with any live backend records
  for (const bs of backendStates) {
    const slug = bs.slug?.toLowerCase().trim();
    if (slug) {
      const existing = stateMap.get(slug);
      stateMap.set(slug, {
        ...existing,
        ...bs,
        status: 'PUBLISHED',
      });
    }
  }

  return Array.from(stateMap.values()).sort((a, b) => a.name.localeCompare(b.name));
}

export async function getStateBySlug(slug: string): Promise<StateData | null> {
  const normSlug = (slug || '').toLowerCase().trim().replace(/[^a-z0-9]+/g, '-');
  try {
    const res = await fetchApi(`/states/${normSlug}`);
    if (res && res.name) {
      return {
        ...res,
        status: 'PUBLISHED',
      };
    }
  } catch (error) {
    // Graceful fallback
  }

  // Fallback to comprehensive state dataset
  const found = allStatesJudiciaryProfiles.find(s => s.slug === normSlug);
  if (found) {
    return {
      _id: `fallback-${found.slug}`,
      name: found.name,
      slug: found.slug,
      code: found.eCourtsStateCode,
      description: found.overview,
      image: `/home/district court.svg`,
      status: 'PUBLISHED',
      governingHighCourt: found.governingHighCourt,
      highCourtSeat: found.highCourtSeat,
      highCourtBench: found.highCourtBench,
      highCourtSlug: found.highCourtSlug,
      totalDistricts: found.totalDistricts,
    };
  }

  return null;
}
