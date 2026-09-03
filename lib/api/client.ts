import axios from 'axios';
import { API_BASE_URL } from './config';

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 60000,
});

// Automatically attach Authorization Bearer token from localStorage
apiClient.interceptors.request.use((config) => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('adminToken');
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

export async function compressImage(file: File, maxWidth = 1200, maxHeight = 800, quality = 0.8): Promise<string> {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target?.result as string;
      img.onload = () => {
        const canvas = document.createElement('canvas');
        let width = img.width;
        let height = img.height;

        if (width > maxWidth) {
          height = Math.round((height * maxWidth) / width);
          width = maxWidth;
        }
        if (height > maxHeight) {
          width = Math.round((width * maxHeight) / height);
          height = maxHeight;
        }

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.drawImage(img, 0, 0, width, height);
          const compressedDataUrl = canvas.toDataURL('image/jpeg', quality);
          resolve(compressedDataUrl);
        } else {
          resolve(event.target?.result as string);
        }
      };
      img.onerror = () => resolve(event.target?.result as string);
    };
    reader.onerror = () => resolve('');
  });
}

export async function fetchApi(endpoint: string, options: any = {}) {
  const method = (options.method || 'GET').toUpperCase();
  let data = options.body;

  if (typeof data === 'string') {
    try {
      data = JSON.parse(data);
    } catch (e) {
      // Keep raw string if not JSON
    }
  }

  try {
    const response = await apiClient({
      url: endpoint,
      method: method,
      data: data,
      headers: options.headers,
    });

    return response.data;
  } catch (error: any) {
    const message = error.response?.data?.message || error.message || `API Error on ${endpoint}`;
    console.error(`Axios API Error on ${endpoint}:`, message);
    throw new Error(message);
  }
}

