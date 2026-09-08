import type { Metadata } from "next";
import { Roboto, Roboto_Serif } from "next/font/google";
import "./globals.css";
import ClientLayoutWrapper from "./components/ClientLayoutWrapper";
import Script from "next/script";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
});

const robotoSerif = Roboto_Serif({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-roboto-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://advocateonrecordtushargarg.com"),
  title: {
    default: "Tushar Garg - Advocate-on-Record, Supreme Court of India",
    template: "%s | Tushar Garg (AOR), Supreme Court of India",
  },
  description:
    "Tushar Garg is an Advocate-on-Record (AOR) at the Supreme Court of India. Professional legal counsel in Constitutional Law, Civil, Criminal, Commercial, Arbitration, Special Leave Petitions (SLP), and comprehensive Indian legal repository.",
  keywords: [
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${roboto.variable} ${robotoSerif.variable}`} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="shortcut icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Serif:ital,opsz,wght@0,8..144,100..900;1,8..144,100..900&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
        <script
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
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Z5LZBEGBNM"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-Z5LZBEGBNM');
          `}
        </Script>
        <ClientLayoutWrapper>
          {children}
        </ClientLayoutWrapper>
      </body>
    </html>
  );
}
