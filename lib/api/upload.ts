import { API_BASE_URL } from "./config";

export interface UploadResponse {
  success: boolean;
  url: string;
  publicId: string;
  format?: string;
  bytes?: number;
  width?: number;
  height?: number;
}

/**
 * Uploads a raw File (from <input type="file" />) directly to Cloudinary via the backend API.
 * Returns the optimized secure CDN URL.
 */
export async function uploadImageFile(file: File, folder: string = "tushar_advocate"): Promise<string> {
  const formData = new FormData();
  formData.append("file", file);
  if (folder) {
    formData.append("folder", folder);
  }

  const res = await fetch(`${API_BASE_URL}/upload/image`, {
    method: "POST",
    body: formData,
  });

  if (!res.ok) {
    const errData = await res.json().catch(() => ({}));
    throw new Error(errData.message || "Failed to upload image to Cloudinary");
  }

  const data: UploadResponse = await res.json();
  return data.url;
}

/**
 * Uploads a base64 encoded string or external image URL to Cloudinary.
 * Returns the optimized secure CDN URL.
 */
export async function uploadBase64Image(base64OrUrl: string, folder: string = "tushar_advocate"): Promise<string> {
  const res = await fetch(`${API_BASE_URL}/upload/base64`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ image: base64OrUrl, folder }),
  });

  if (!res.ok) {
    const errData = await res.json().catch(() => ({}));
    throw new Error(errData.message || "Failed to upload image to Cloudinary");
  }

  const data: UploadResponse = await res.json();
  return data.url;
}

/**
 * Helper to dynamically inject Cloudinary transformation parameters (e.g. w_800, q_auto, f_auto)
 * into an existing Cloudinary URL for ultimate performance on the frontend.
 */
export function getOptimizedImageUrl(
  url: string,
  options?: { width?: number; height?: number; crop?: string; quality?: string }
): string {
  if (!url || !url.includes("cloudinary.com")) return url;

  const transformations: string[] = ["f_auto", "q_auto"];

  if (options?.width) transformations.push(`w_${options.width}`);
  if (options?.height) transformations.push(`h_${options.height}`);
  if (options?.crop) transformations.push(`c_${options.crop}`);
  if (options?.quality) transformations.push(`q_${options.quality}`);

  const transformStr = transformations.join(",");
  return url.replace("/upload/", `/upload/${transformStr}/`);
}
