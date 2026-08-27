import { fetchApi } from './client';

export type StateData = {
  _id: string;
  name: string;
  slug: string;
  code: string;
  description?: string;
  image?: string;
  status: string;
};

export async function getPublishedStates(): Promise<StateData[]> {
  try {
    return await fetchApi('/states');
  } catch (error) {
    console.error('Failed to fetch states:', error);
    return []; // Graceful fallback
  }
}

export async function getStateBySlug(slug: string): Promise<StateData | null> {
  try {
    return await fetchApi(`/states/${slug}`);
  } catch (error) {
    console.error(`Failed to fetch state ${slug}:`, error);
    return null;
  }
}
