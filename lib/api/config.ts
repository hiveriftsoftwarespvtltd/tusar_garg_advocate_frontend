// Single source of truth for API Base URL across the entire project

const rawApiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://api.advocateonrecordtushargarg.com/api';

// Cloudflare strictly redirects http://api.advocateonrecordtushargarg.com to https://.
// Cross-origin redirects drop CORS headers and trigger browser origin/preflight errors.
// Always ensure HTTPS for the live API domain:
export const API_BASE_URL = rawApiUrl.replace(
  /^http:\/\/api\.advocateonrecordtushargarg\.com/i,
  'https://api.advocateonrecordtushargarg.com'
);

// Localhost API URL (for local debugging if needed):
// export const API_BASE_URL = 'http://localhost:5000/api';

