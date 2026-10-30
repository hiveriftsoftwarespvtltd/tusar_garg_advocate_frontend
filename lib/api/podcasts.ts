import { fetchApi } from './client';

export type PodcastStatus = 'DRAFT' | 'PUBLISHED' | 'UNPUBLISHED';

export interface Podcast {
  _id: string;
  title: string;
  description?: string;
  youtubeUrl: string;
  youtubeVideoId: string;
  thumbnailUrl: string;
  embedUrl: string;
  status: PodcastStatus;
  displayOrder?: number;
  featured?: boolean;
  duration?: string;
  publishedAt?: string;
  createdAt?: string;
  updatedAt?: string;
  metaTitle?: string;
  metaDescription?: string;
  metaKeywords?: string[];
}

export interface PodcastListResponse {
  items: Podcast[];
  total: number;
  page: number;
  totalPages: number;
}

/**
 * Extract YouTube Video ID from any standard YouTube URL (watch, youtu.be, shorts, embed).
 */
export function parseYouTubeVideoId(url: string): string | null {
  if (!url || typeof url !== 'string') return null;
  const trimmed = url.trim();

  // youtu.be/VIDEO_ID
  const shortMatch = trimmed.match(/(?:https?:\/\/)?(?:www\.)?youtu\.be\/([a-zA-Z0-9_-]{11})/);
  if (shortMatch && shortMatch[1]) return shortMatch[1];

  // youtube.com/shorts/VIDEO_ID
  const shortsMatch = trimmed.match(/(?:https?:\/\/)?(?:www\.|m\.)?youtube\.com\/shorts\/([a-zA-Z0-9_-]{11})/);
  if (shortsMatch && shortsMatch[1]) return shortsMatch[1];

  // youtube.com/watch?v=VIDEO_ID
  const watchMatch = trimmed.match(/(?:https?:\/\/)?(?:www\.|m\.)?youtube\.com\/watch\?(?:.*&)?v=([a-zA-Z0-9_-]{11})/);
  if (watchMatch && watchMatch[1]) return watchMatch[1];

  // youtube.com/embed/VIDEO_ID
  const embedMatch = trimmed.match(/(?:https?:\/\/)?(?:www\.|m\.)?youtube(?:-nocookie)?\.com\/embed\/([a-zA-Z0-9_-]{11})/);
  if (embedMatch && embedMatch[1]) return embedMatch[1];

  // Raw 11-char ID
  if (/^[a-zA-Z0-9_-]{11}$/.test(trimmed)) return trimmed;

  return null;
}

export function getYouTubeThumbnail(videoId: string): string {
  return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
}

export function getYouTubeEmbedUrl(videoId: string): string {
  return `https://www.youtube-nocookie.com/embed/${videoId}?rel=0`;
}

export function getYouTubeWatchUrl(videoId: string): string {
  return `https://www.youtube.com/watch?v=${videoId}`;
}

/**
 * Public: Fetch published podcasts with optional limit and pagination.
 */
export async function getPublishedPodcasts(
  limit: number = 0,
  page: number = 1
): Promise<PodcastListResponse> {
  try {
    const params = new URLSearchParams();
    if (limit > 0) params.append('limit', String(limit));
    if (page > 1) params.append('page', String(page));

    const qs = params.toString() ? `?${params.toString()}` : '';
    const res = await fetchApi(`/podcasts${qs}`, { cache: 'no-store' });
    if (res && Array.isArray(res.items)) {
      return res;
    }
    if (Array.isArray(res)) {
      return {
        items: res,
        total: res.length,
        page: 1,
        totalPages: 1,
      };
    }
    return { items: [], total: 0, page: 1, totalPages: 1 };
  } catch (err) {
    console.error('Failed to load published podcasts:', err);
    return { items: [], total: 0, page: 1, totalPages: 1 };
  }
}

/**
 * Public: Get single published podcast by ID.
 */
export async function getPodcastById(id: string): Promise<Podcast | null> {
  try {
    return await fetchApi(`/podcasts/${id}`, { cache: 'no-store' });
  } catch (err) {
    console.error(`Failed to load podcast ${id}:`, err);
    return null;
  }
}

/**
 * Admin: Fetch all podcasts (Draft, Published, Unpublished).
 */
export async function getAllPodcastsAdmin(): Promise<Podcast[]> {
  try {
    const res = await fetchApi('/podcasts/admin/all', { cache: 'no-store' });
    return Array.isArray(res) ? res : [];
  } catch (err) {
    console.error('Failed to load admin podcasts:', err);
    return [];
  }
}

/**
 * Admin: Create a new podcast.
 */
export async function createPodcast(data: Partial<Podcast>): Promise<Podcast> {
  return fetchApi('/podcasts', {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

/**
 * Admin: Update an existing podcast.
 */
export async function updatePodcast(id: string, data: Partial<Podcast>): Promise<Podcast> {
  return fetchApi(`/podcasts/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
  });
}

/**
 * Admin: Quick status change (Draft / Published / Unpublished).
 */
export async function updatePodcastStatus(
  id: string,
  status: PodcastStatus
): Promise<Podcast> {
  return fetchApi(`/podcasts/${id}/status`, {
    method: 'PATCH',
    body: JSON.stringify({ status }),
  });
}

/**
 * Admin: Delete a podcast.
 */
export async function deletePodcast(id: string): Promise<{ success: boolean }> {
  return fetchApi(`/podcasts/${id}`, {
    method: 'DELETE',
  });
}
