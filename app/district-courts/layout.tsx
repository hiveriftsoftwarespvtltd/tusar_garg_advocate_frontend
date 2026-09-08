import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All India District Courts Directory | 700+ Verified e-Courts Portals",
  description: "Comprehensive directory of 700+ District and Sessions Courts across all 28 Indian States and Union Territories. Search by state or district for official e-Courts portals, case status, and cause lists.",
  keywords: [
    "District Courts India",
    "Sessions Courts India",
    "eCourts Services",
    "District Court Case Status",
    "District Court Cause List",
    "Subordinate Courts India",
    "State Judiciary Portals",
    "Advocate Tushar Garg"
  ],
  alternates: {
    canonical: "/district-courts",
  },
  openGraph: {
    title: "All India District Courts Directory | 700+ Verified e-Courts Portals",
    description: "Search and access official e-Courts portals across all districts in India.",
  },
};

export default function DistrictCourtsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
