import { fetchApi } from './client';

export interface CustomScript {
  id: string;
  name: string;
  code: string;
  placement: 'head' | 'body' | 'footer';
  enabled: boolean;
}

export interface WebsiteSettings {
  _id?: string;
  // A. Google Integrations
  googleAnalyticsId: string;
  googleAnalyticsEnabled: boolean;
  googleTagManagerId: string;
  googleTagManagerEnabled: boolean;
  googleSearchConsoleCode: string;
  googleSearchConsoleEnabled: boolean;
  googleAdsId: string;
  googleAdsEnabled: boolean;
  googleSiteVerificationCode: string;
  googleSiteVerificationEnabled: boolean;

  // B. Social Media & Advertising Pixels
  metaPixelId: string;
  metaPixelEnabled: boolean;
  linkedinPartnerId: string;
  linkedinEnabled: boolean;
  tiktokPixelId: string;
  tiktokEnabled: boolean;
  pinterestTagId: string;
  pinterestEnabled: boolean;

  // C. Custom Code Manager
  customScripts: CustomScript[];

  // D. Basic SEO Settings
  websiteTitle: string;
  websiteMetaDescription: string;
  defaultMetaKeywords: string;
  sitemapUrl: string;
  robotsTxt: string;

  // E. AI Chatbot Settings
  chatbotEnabled: boolean;
  geminiApiKey: string;
  chatbotTitle: string;
  chatbotSubtitle: string;
  chatbotLogoUrl: string;
  chatbotWelcomeMessage: string;
  chatbotProviderText: string;

  updatedAt?: string;
}

export const defaultWebsiteSettings: WebsiteSettings = {
  googleAnalyticsId: 'G-VSQM1BYP8Z',
  googleAnalyticsEnabled: true,
  googleTagManagerId: '',
  googleTagManagerEnabled: false,
  googleSearchConsoleCode: 'Y8IxFpQssO7d7xXlxyp0pd4bZSaK7q3m2GTYHCtthUE',
  googleSearchConsoleEnabled: true,
  googleAdsId: '',
  googleAdsEnabled: false,
  googleSiteVerificationCode: 'Y8IxFpQssO7d7xXlxyp0pd4bZSaK7q3m2GTYHCtthUE',
  googleSiteVerificationEnabled: true,

  metaPixelId: '',
  metaPixelEnabled: false,
  linkedinPartnerId: '',
  linkedinEnabled: false,
  tiktokPixelId: '',
  tiktokEnabled: false,
  pinterestTagId: '',
  pinterestEnabled: false,

  customScripts: [],

  websiteTitle: 'Tushar Garg - Advocate-on-Record, Supreme Court of India',
  websiteMetaDescription:
    'Tushar Garg is an Advocate-on-Record (AOR) at the Supreme Court of India. Professional legal counsel in Constitutional Law, Civil, Criminal, Commercial, Arbitration, Special Leave Petitions (SLP), and comprehensive Indian legal repository.',
  defaultMetaKeywords:
    'Advocate on Record Tushar Garg, Tushar Garg, Advocate on Record, AOR Supreme Court of India, Supreme Court Lawyer Delhi, Special Leave Petition SLP, Writ Petitions Article 32 Article 226, Indian Bare Acts Library, New Criminal Laws 2023 BNS BNSS BSA, Judicial Services Examination, State Judiciary Syllabus, Supreme Court Judgments, Legal Articles India, Indian Law Precedents, High Court of Delhi Lawyer, Legal Consultation Supreme Court',
  sitemapUrl: 'https://advocateonrecordtushargarg.com/sitemap.xml',
  robotsTxt:
    'User-agent: *\nAllow: /\nDisallow: /admin/\nDisallow: /api/\nSitemap: https://advocateonrecordtushargarg.com/sitemap.xml',

  // E. AI Chatbot Settings
  chatbotEnabled: true,
  geminiApiKey: '',
  chatbotTitle: 'Advocate Tushar Garg (AOR)',
  chatbotSubtitle: 'AI Legal Assistant • Supreme Court',
  chatbotLogoUrl: '/TusharLogo.png',
  chatbotWelcomeMessage:
    'Namaste! Welcome to the Chambers of Advocate Tushar Garg, Advocate-on-Record at the Supreme Court of India. How can I assist you with Supreme Court filings, legal procedures, bare acts, or scheduling a consultation?',
  chatbotProviderText: 'Provided by HiveRift Softwares Pvt Ltd',
};

export async function getWebsiteSettings(): Promise<WebsiteSettings> {
  try {
    const res = await fetchApi('/settings');
    if (res && typeof res === 'object') {
      return {
        ...defaultWebsiteSettings,
        ...res,
      };
    }
  } catch (error) {
    console.warn('Could not fetch website settings from backend, using defaults.');
  }
  return defaultWebsiteSettings;
}

export async function updateWebsiteSettings(
  data: Partial<WebsiteSettings>
): Promise<WebsiteSettings> {
  let token: string | null = null;
  if (typeof window !== 'undefined') {
    token = localStorage.getItem('adminToken');
  }

  const res = await fetchApi('/settings', {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: token ? { Authorization: `Bearer ${token}` } : {},
  });
  return res;
}
