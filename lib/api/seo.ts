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
 * Guaranteed to inject "Advocate on Record Tushar Garg" across all pages.
 */
export async function getSeoByRoute(
  route: string,
  fallback?: Metadata
): Promise<Metadata> {
  const normalizedRoute = route.startsWith('/') ? route : `/${route}`;
  
  const ensureAorKeyword = (kws?: string[]): string[] => {
    const list = Array.isArray(kws) ? [...kws] : [];
    if (!list.includes("Advocate on Record Tushar Garg")) {
      list.unshift("Advocate on Record Tushar Garg");
    }
    return list;
  };

  try {
    const res = await fetch(
      `${API_BASE_URL}/seo/by-route?route=${encodeURIComponent(normalizedRoute)}`,
      { next: { revalidate: 30 } }
    );
    
    if (!res.ok) {
      if (!fallback) return { keywords: ["Advocate on Record Tushar Garg"] };
      return {
        ...fallback,
        keywords: ensureAorKeyword(fallback.keywords as string[] | undefined),
      };
    }

    const data: SeoRecord = await res.json();
    if (!data || !data.title) {
      if (!fallback) return { keywords: ["Advocate on Record Tushar Garg"] };
      return {
        ...fallback,
        keywords: ensureAorKeyword(fallback.keywords as string[] | undefined),
      };
    }

    const rawKeywords = data.keywords && data.keywords.length > 0 
      ? data.keywords 
      : (fallback?.keywords as string[] | undefined);

    return {
      title: data.title,
      description: data.description || (fallback?.description as string),
      keywords: ensureAorKeyword(rawKeywords),
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
    if (!fallback) return { keywords: ["Advocate on Record Tushar Garg"] };
    return {
      ...fallback,
      keywords: ensureAorKeyword(fallback.keywords as string[] | undefined),
    };
  }
}
