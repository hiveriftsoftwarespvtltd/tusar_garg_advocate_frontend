import type { Metadata } from 'next';
import { API_BASE_URL } from './config';

export interface SeoRecord {
  _id?: string;
  route: string;
  pageName: string;
  title: string;
  description: string;
  keywords: string[];
  canonical: string;
  ogImage?: string;
  updatedAt?: string;
}

/**
 * Fetch dynamic SEO metadata from backend API for a given route.
 * Falls back cleanly to static fallback metadata if the API is unreachable.
 */
export async function getSeoByRoute(
  route: string,
  fallback?: Metadata
): Promise<Metadata> {
  const normalizedRoute = route.startsWith('/') ? route : `/${route}`;
  
  try {
    const res = await fetch(
      `${API_BASE_URL}/seo/by-route?route=${encodeURIComponent(normalizedRoute)}`,
      { next: { revalidate: 30 } }
    );
    
    if (!res.ok) {
      return fallback || {};
    }

    const data: SeoRecord = await res.json();
    if (!data || !data.title) {
      return fallback || {};
    }

    return {
      title: data.title,
      description: data.description || (fallback?.description as string),
      keywords: data.keywords && data.keywords.length > 0 
        ? data.keywords 
        : (fallback?.keywords as string[]),
      alternates: {
        canonical: data.canonical || (fallback?.alternates?.canonical as string) || normalizedRoute,
      },
      openGraph: {
        title: data.title,
        description: data.description,
        ...(data.ogImage ? { images: [data.ogImage] } : {}),
      },
    };
  } catch (error) {
    // If backend is down or during static builds, smoothly use fallback
    return fallback || {};
  }
}
