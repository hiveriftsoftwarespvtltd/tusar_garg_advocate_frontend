// Single source of truth for API Base URL across the entire project

const isDev = process.env.NODE_ENV !== 'production';

export const API_BASE_URL = 
  process.env.NEXT_PUBLIC_API_URL || 
  (isDev ? 'http://127.0.0.1:5000/api' : 'https://advocateonrecordtushargarg.com/api');
