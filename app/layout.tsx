import type { Metadata } from "next";
import "./globals.css";
import ClientLayoutWrapper from "./components/ClientLayoutWrapper";
import WebsiteIntegrations from "./components/WebsiteIntegrations";
import { getWebsiteSettings } from "../lib/api/settings";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://advocateonrecordtushargarg.com"),
  verification: {
    google: "Y8IxFpQssO7d7xXlxyp0pd4bZSaK7q3m2GTYHCtthUE",
  },
  title: {
    default: "Tushar Garg - Advocate-on-Record, Supreme Court of India",
    template: "%s | Tushar Garg (AOR), Supreme Court of India",
  },
  description:
    "Tushar Garg is an Advocate-on-Record (AOR) at the Supreme Court of India. Professional legal counsel in Constitutional Law, Civil, Criminal, Commercial, Arbitration, Special Leave Petitions (SLP), and comprehensive Indian legal repository.",
  keywords: [

    "Advocate on Record Tushar Garg",
    "Tushar Garg",
    "Advocate on Record",
    "AOR Supreme Court of India",
    "Supreme Court Lawyer Delhi",
    "Special Leave Petition SLP",
    "Writ Petitions Article 32 Article 226",
    "Indian Bare Acts Library",
    "New Criminal Laws 2023 BNS BNSS BSA",
    "Judicial Services Examination",
    "State Judiciary Syllabus",
    "Supreme Court Judgments",
    "Legal Articles India",
    "Indian Law Precedents",
    "High Court of Delhi Lawyer",
    "Legal Consultation Supreme Court"
  ],
  alternates: {
    canonical: "https://advocateonrecordtushargarg.com",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://advocateonrecordtushargarg.com",
    siteName: "Advocate Tushar Garg (AOR)",
    title: "Tushar Garg - Advocate-on-Record, Supreme Court of India",
    description:
      "Supreme Court litigation, Indian Bare Acts, Judicial Services examination guides, and landmark legal precedents.",
    images: [
      {
        url: "/home/tusar_garg_photo.jpeg",
        width: 1200,
        height: 630,
        alt: "Advocate Tushar Garg - Advocate-on-Record, Supreme Court of India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tushar Garg - Advocate-on-Record, Supreme Court of India",
    description:
      "Supreme Court litigation, Indian Bare Acts, Judicial Services examination repository, and legal counsel.",
    images: ["/home/tusar_garg_photo.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon.svg", type: "image/svg+xml" }
    ],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const settings = await getWebsiteSettings();
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        {settings.googleSiteVerificationEnabled && settings.googleSiteVerificationCode && (
          <meta name="google-site-verification" content={settings.googleSiteVerificationCode.trim()} />
        )}
        {settings.googleSearchConsoleEnabled && settings.googleSearchConsoleCode && settings.googleSearchConsoleCode !== settings.googleSiteVerificationCode && (
          <meta name="google-site-verification" content={settings.googleSearchConsoleCode.trim()} />
        )}
        <WebsiteIntegrations initialSettings={settings} />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="shortcut icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Serif:ital,opsz,wght@0,8..144,100..900;1,8..144,100..900&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["LegalService", "Attorney"],
              "name": "Advocate Tushar Garg - Advocate-on-Record",
              "alternateName": "Chambers of Tushar Garg (AOR)",
              "image": "https://advocateonrecordtushargarg.com/home/tusar_garg_photo.jpeg",
              "url": "https://advocateonrecordtushargarg.com",
              "telephone": "+91-7206810681",
              "email": "advocate.tushargarg@gmail.com",
              "priceRange": "$$",
              "address": [
                {
                  "@type": "PostalAddress",
                  "streetAddress": "Tilak Marg, Supreme Court of India",
                  "addressLocality": "New Delhi",
                  "postalCode": "110001",
                  "addressCountry": "IN"
                },
                {
                  "@type": "PostalAddress",
                  "streetAddress": "Flat No. 7, 2nd Floor, D-1, Kalindi Colony",
                  "addressLocality": "New Delhi",
                  "postalCode": "110065",
                  "addressCountry": "IN"
                }
              ],
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                  "opens": "10:00",
                  "closes": "19:30"
                }
              ],
              "areaServed": "India",
              "knowsAbout": [
                "Supreme Court Special Leave Petitions (SLP)",
                "Constitutional Writ Petitions Article 32 & 226",
                "Commercial Arbitration",
                "NCLAT & Insolvency Bankruptcy Code",
                "Criminal Appeals & Bail Trials",
                "Indian Bare Acts"
              ]
            })
          }}
        />
        <Script
          id="dom-cleaner"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                if (typeof window === 'undefined') return;
                function cleanNode(node) {
                  if (!node || node.nodeType !== 1) return;
                  if (node.hasAttribute('bis_skin_checked')) node.removeAttribute('bis_skin_checked');
                  if (node.hasAttribute('bis_register')) node.removeAttribute('bis_register');
                  if (node.attributes) {
                    for (var i = node.attributes.length - 1; i >= 0; i--) {
                      var attr = node.attributes[i].name;
                      if (attr.indexOf('bis_') === 0 || attr.indexOf('__processed_') === 0) {
                        node.removeAttribute(attr);
                      }
                    }
                  }
                }
                function cleanAll() {
                  if (document.documentElement) {
                    cleanNode(document.documentElement);
                    var els = document.querySelectorAll('[bis_skin_checked], [bis_register]');
                    for (var i = 0; i < els.length; i++) cleanNode(els[i]);
                  }
                }
                cleanAll();
                document.addEventListener('DOMContentLoaded', cleanAll);
                window.addEventListener('load', cleanAll);
                if (typeof MutationObserver !== 'undefined') {
                  var observer = new MutationObserver(function(mutations) {
                    for (var i = 0; i < mutations.length; i++) {
                      var m = mutations[i];
                      if (m.type === 'attributes') {
                        cleanNode(m.target);
                      } else if (m.type === 'childList') {
                        for (var j = 0; j < m.addedNodes.length; j++) {
                          var n = m.addedNodes[j];
                          if (n.nodeType === 1) {
                            cleanNode(n);
                            if (n.querySelectorAll) {
                              var els = n.querySelectorAll('*');
                              for (var k = 0; k < els.length; k++) cleanNode(els[k]);
                            }
                          }
                        }
                      }
                    }
                  });
                  observer.observe(document.documentElement, { attributes: true, childList: true, subtree: true, attributeFilter: ['bis_skin_checked', 'bis_register'] });
                }
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-white antialiased flex flex-col overflow-x-hidden font-sans" suppressHydrationWarning>
        <ClientLayoutWrapper>
          {children}
        </ClientLayoutWrapper>
      </body>
    </html>
  );
}
