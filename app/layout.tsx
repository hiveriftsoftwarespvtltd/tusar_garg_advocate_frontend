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
  title: "Tushar Garg - Advocate-on-Record, Supreme Court of India",
  description:
    "Tushar Garg is an Advocate-on-Record at the Supreme Court of India with vast experience in Constitutional, Civil, Criminal, Commercial and Arbitration matters.",
  keywords:
    "Tushar Garg, Advocate-on-Record, Supreme Court of India, Legal Services, Indian Judiciary, Judgments, Laws, Courts",
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
