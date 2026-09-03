import { fetchApi } from './client';

export type HeroData = {
  _id?: string;
  badgeText: string;
  titleFirst: string;
  titleSecond: string;
  subTitle: string;
  description: string;
  expertiseBadges: string[];
  ctaButtons: { line1: string; line2: string; icon: string; href: string }[];
  bgImage: string;
  bgOverlayOpacity: number;
  advocateName: string;
  advocateTitle: string;
  advocatePhoto: string;
  stats: { label: string; value: string }[];
  consultationLink: string;
  consultationText: string;
};

export async function getHeroData(): Promise<HeroData | null> {
  try {
    return await fetchApi('/hero');
  } catch (error) {
    console.error('Failed to fetch Hero settings:', error);
    return null;
  }
}

export async function updateHeroData(data: Partial<HeroData>): Promise<HeroData | null> {
  try {
    return await fetchApi('/hero', {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  } catch (error) {
    console.error('Failed to update Hero settings:', error);
    throw error;
  }
}
