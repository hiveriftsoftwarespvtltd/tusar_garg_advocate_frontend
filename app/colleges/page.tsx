import type { Metadata } from "next";
import CollegesHero from "./components/CollegesHero";
import CollegesClientView from "./CollegesClientView";
import BottomBanner from "./components/BottomBanner";

export const metadata: Metadata = {
  title: "All Law Colleges & Legal Education in India | NLUs, Courses & Admissions",
  description: "Comprehensive directory of all 26 National Law Universities (NLUs), top central universities, state government law colleges, legal degrees (BA LLB, LLB, LLM, PhD), national entrance exams (CLAT, AILET, CUET), and BCI statutory practice pathway.",
  keywords: [
    "Advocate on Record Tushar Garg",
    "All Law Colleges in India",
    "Legal Education in India",
    "National Law Universities",
    "All 26 NLUs Directory",
    "NLSIU Bengaluru",
    "NALSAR Hyderabad",
    "WBNUJS Kolkata",
    "NLU Delhi",
    "CLAT Exam Pattern Syllabus",
    "AILET Law Admissions",
    "CUET Law Colleges",
    "5 Year BA LLB Colleges",
    "3 Year LLB Curriculum",
    "LLM Specializations India",
    "PhD in Law",
    "Bar Council of India Regulations",
    "AIBE Certificate of Practice",
    "Supreme Court Advocate on Record Pathway"
  ],
  alternates: {
    canonical: "/colleges",
  },
};

export default function CollegesPage() {
  return (
    <main className="min-h-screen bg-[#fafafa]">
      {/* 1. Hero Section */}
      <CollegesHero />

      {/* 2. Comprehensive Interactive Colleges & Legal Education View */}
      <CollegesClientView />

      {/* 3. Bottom Banner */}
      <BottomBanner />
    </main>
  );
}
