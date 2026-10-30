import { MetadataRoute } from 'next';
import { getWebsiteSettings } from '../lib/api/settings';

export default async function robots(): Promise<MetadataRoute.Robots> {
  const settings = await getWebsiteSettings();

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/api/', '/login', '/dashboard/'],
      },
      {
        userAgent: [
          'Googlebot',
          'Bingbot',
          'ChatGPT-User',
          'Google-Extended',
          'PerplexityBot',
          'Claude-User',
          'Gemini',
          'Applebot',
        ],
        allow: '/',
        disallow: ['/admin/', '/api/'],
      },
    ],
    sitemap: settings.sitemapUrl || 'https://advocateonrecordtushargarg.com/sitemap.xml',
  };
}
