// Single source of truth for API Base URL across the entire project

// Live Server API URL (Commented out):
const rawApiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://api.advocateonrecordtushargarg.com/api';
export const API_BASE_URL = rawApiUrl.replace(
  /^http:\/\/api\.advocateonrecordtushargarg\.com/i,
  'https://api.advocateonrecordtushargarg.com'
);

// Localhost API URL:
// export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';


