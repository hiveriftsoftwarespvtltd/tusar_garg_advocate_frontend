import type { Metadata } from "next";
import HeroSection from "@/app/components/HeroSection";
import FeaturedCourts from "@/app/components/FeaturedCourts";
import VisitedSectionsCarousel from "@/app/components/VisitedSectionsCarousel";
import LatestJudgments from "@/app/components/LatestJudgments";
import HomePracticeAreas from "@/app/components/HomePracticeAreas";
import HomeResourcesServicesJobs from "@/app/components/HomeResourcesServicesJobs";
import HomeWhyChooseUs from "@/app/components/HomeWhyChooseUs";
import HomeLegalKnowledge from "@/app/components/HomeLegalKnowledge";
import HomeTestimonials from "@/app/components/HomeTestimonials";
import HomeAbout from "@/app/components/HomeAbout";

import { getSeoByRoute } from "@/lib/api/seo";

const fallbackMetadata: Metadata = {
  title: "Tushar Garg - Advocate-on-Record, Supreme Court of India | Official Portal",
  description:
    "Advocate Tushar Garg (AOR) represents clients before the Supreme Court of India, High Courts, and Appellate Tribunals. Access Indian Bare Acts, landmark judgments, and judicial exam resources.",
  keywords: [
    "Advocate on Record",
    "Tushar Garg",
    "Supreme Court of India",
    "AOR Supreme Court",
    "Supreme Court Advocate Delhi",
    "Special Leave Petition SLP",
    "Writ Petition Supreme Court",
    "Indian Judiciary Platform",
    "Legal Consultation Supreme Court"
  ],
  alternates: {
    canonical: "/",
  },
};

export async function generateMetadata(): Promise<Metadata> {
  return getSeoByRoute("/", fallbackMetadata);
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturedCourts />
      <VisitedSectionsCarousel />
      <LatestJudgments />
      
      {/* Redesigned Lower Section */}
      <HomePracticeAreas />
      <HomeResourcesServicesJobs />
      <HomeWhyChooseUs />
      <HomeLegalKnowledge />
      <HomeTestimonials />
      <HomeAbout />
    </main>
  );
}
