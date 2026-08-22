import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-merriweather",
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
    <html lang="en" className={`${inter.variable} ${merriweather.variable}`}>
      <body className="min-h-screen bg-white antialiased flex flex-col overflow-x-hidden">
        <Header />
        <div className="flex-1">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
