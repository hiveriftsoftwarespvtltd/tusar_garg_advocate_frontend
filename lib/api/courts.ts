import { fetchApi } from './client';

export type CourtData = {
  _id: string;
  stateId: string;
  name: string;
  slug: string;
  courtType: string;
  city?: string;
  address?: string;
  jurisdiction?: string;
  description?: string;
  image?: string;
  featured: boolean;
  status: string;
};

export async function getCourtsByState(stateSlug: string): Promise<CourtData[]> {
  try {
    return await fetchApi(`/courts/state/${stateSlug}`);
  } catch (error) {
    console.error(`Failed to fetch courts for state ${stateSlug}:`, error);
    return [];
  }
}

export async function getCourtDetails(stateSlug: string, courtSlug: string): Promise<any> {
  try {
    return await fetchApi(`/courts/${stateSlug}/${courtSlug}`);
  } catch (error) {
    console.error(`Failed to fetch details for court ${courtSlug}:`, error);
    return null;
  }
}
