import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import ClientLayoutWrapper from "./components/ClientLayoutWrapper";
import Script from "next/script";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tushar Garg - Advocate-on-Record, Supreme Court of India",
  description:
    "Tushar Garg is an Advocate-on-Record at the Supreme Court of India with vast experience in Constitutional, Civil, Criminal, Commercial and Arbitration matters.",
  keywords:
    "Tushar Garg, Advocate-on-Record, Supreme Court of India, Legal Services, Indian Judiciary, Judgments, Laws, Courts",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${roboto.variable} font-sans`}>
      <body className="min-h-screen bg-white antialiased flex flex-col overflow-x-hidden font-sans">
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
