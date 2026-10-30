import type { Metadata } from "next";
import HeroSection from "@/app/components/HeroSection";
import HomeCourtsFlow from "@/app/components/HomeCourtsFlow";
import HomeAbout from "@/app/components/HomeAbout";
import HomePracticeAreas from "@/app/components/HomePracticeAreas";
import FeaturedCourts from "@/app/components/FeaturedCourts";
import LatestJudgments from "@/app/components/LatestJudgments";
import HomePodcastSection from "@/app/components/HomePodcastSection";
import HomeLegalRepository from "@/app/components/HomeLegalRepository";
import HomeLegalKnowledge from "@/app/components/HomeLegalKnowledge";
import HomeResourcesServicesJobs from "@/app/components/HomeResourcesServicesJobs";
import HomeContactSection from "@/app/components/HomeContactSection";

export const metadata: Metadata = {
  title: "Advocate Tushar Garg | Advocate-on-Record, Supreme Court of India",
  description:
    "Official website of Advocate Tushar Garg, Advocate-on-Record, Supreme Court of India. Explore professional chambers information, areas of legal practice, judgments, Indian courts directory and legal research resources.",
  keywords: [

    "Advocate on Record Tushar Garg",
    "Advocate-on-Record Supreme Court of India",
    "Supreme Court Advocate New Delhi",
    "Advocate Tushar Garg",
    "Supreme Court judgments",
    "Indian legal research",
    "Indian Bare Acts",
    "High Court judgments",
    "Indian courts directory",
    "Special Leave Petition SLP",
    "Constitutional Writ Petitions",
    "AOR Registration 4215"
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Advocate Tushar Garg | Advocate-on-Record, Supreme Court of India",
    description:
      "Official chambers website and legal research repository of Advocate Tushar Garg (AOR), Supreme Court of India.",
    url: "https://advocateonrecordtushargarg.com",
    siteName: "Advocate Tushar Garg (AOR)",
    images: [
      {
        url: "/home/tusar_garg_photo.jpeg",
        width: 1200,
        height: 630,
        alt: "Advocate Tushar Garg - Advocate-on-Record, Supreme Court of India",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Hero Section (Prompt Section 4) */}
      <HeroSection />

      {/* 2. Indian Courts Flow & Judicial Hierarchy */}
      <HomeCourtsFlow />

      {/* 2. Professional Profile & Chambers Profile (Prompt Sections 5 & 9) */}
      <HomeAbout />

      {/* 3. Areas of Legal Practice (Prompt Section 6) */}
      <HomePracticeAreas />

      {/* 4. Courts & Judicial Forums of India (Prompt Section 7) */}
      <FeaturedCourts />

      {/* 5. Latest & Important Judgments (Prompt Section 8) */}
      <LatestJudgments />

      {/* 6. Legal Podcast Section */}
      <HomePodcastSection />

      {/* 6. Indian Legal Knowledge & Research Repository (Prompt Section 10) */}
      <HomeLegalRepository />

      {/* 7. Legal Insights & Scholarly Articles (Prompt Section 11) */}
      <HomeLegalKnowledge />

      {/* 8. Judiciary, Legal Education & Careers (Prompt Section 12) */}
      <HomeResourcesServicesJobs />

      {/* 9. Chambers Contact Information (Prompt Section 13) */}
      <HomeContactSection />
    </main>
  );
}
