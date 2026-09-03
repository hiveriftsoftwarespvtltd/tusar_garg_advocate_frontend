import axios from 'axios';
import { API_BASE_URL } from './config';

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

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
