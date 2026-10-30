import type { Metadata } from "next";
import { getSeoByRoute } from "../../lib/api/seo";
import PodcastClientView from "./PodcastClientView";

const fallbackMetadata: Metadata = {
  title: "Legal Podcast & Expert Discussions | Advocate Tushar Garg (AOR)",
  description:
    "Listen and watch insightful legal conversations, Supreme Court litigation analysis, constitutional perspectives, and procedural strategies hosted by Advocate on Record Tushar Garg.",
  keywords: [
    "Advocate on Record Tushar Garg",
    "Legal Podcast India",
    "Supreme Court Lawyer Podcast",
    "Tushar Garg Podcast",
    "Law and Judiciary Discussions",
    "Constitutional Law Podcast",
    "Special Leave Petition SLP",
    "Indian Law Video Series",
    "Supreme Court Advocate New Delhi"
  ],
  alternates: {
    canonical: "/podcast",
  },
  openGraph: {
    title: "Legal Podcast & Expert Discussions | Advocate Tushar Garg (AOR)",
    description:
      "Official legal podcast series by Advocate Tushar Garg, Advocate-on-Record at the Supreme Court of India.",
    url: "https://advocateonrecordtushargarg.com/podcast",
    type: "website",
  },
};

export async function generateMetadata(): Promise<Metadata> {
  return getSeoByRoute("/podcast", fallbackMetadata);
}

export default function PodcastPage() {
  return <PodcastClientView />;
}
