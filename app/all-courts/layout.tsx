import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Indian Courts & Forums Directory | Supreme Court, High Courts, District Courts & Tribunals",
  description: "Unified Indian legal forum directory containing Supreme Court, 25 High Courts, 700+ District Courts, and specialized Tribunals with direct links to official portals.",
  keywords: [
    "All Indian Courts",
    "Unified Judicial Directory",
    "Supreme Court of India",
    "High Courts of India",
    "District Courts India",
    "Indian Tribunals",
    "eCourts Services",
    "Advocate Tushar Garg"
  ],
  alternates: {
    canonical: "/all-courts",
  },
  openGraph: {
    title: "All Indian Courts & Forums Directory | Complete Unified Search",
    description: "Search across Supreme Court, High Courts, District Courts, and Tribunals in India.",
  },
};

export default function AllCourtsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
