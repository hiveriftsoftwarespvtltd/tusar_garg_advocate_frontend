import type { Metadata } from "next";
import { getJudgmentById } from "../../../lib/data/judgmentsComprehensiveData";
import { fetchApi } from "../../../lib/api/client";

type Props = {
  params: Promise<{ id: string }>;
  children: React.ReactNode;
};

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;

  let title = "Supreme Court & High Court Judgment | Advocate Tushar Garg (AOR)";
  let description = "Read verified Indian case law, order summaries, ratio decidendi, and legal analysis.";
  let keywords = [
    "Advocate on Record Tushar Garg",
    "Supreme Court Judgments",
    "High Court Case Law",
    "Indian Legal Precedents",
    "Ratio Decidendi",
    "Advocate Tushar Garg",
    "Advocate on Record",
    "Supreme Court Rules",
    "Legal Research India"
  ];

  try {
    const fallback = getJudgmentById(id);
    if (fallback) {
      title = `${fallback.title} | ${fallback.courtName}`;
      description = `${fallback.summary} Coram: ${fallback.bench}. Citation: ${fallback.officialSource}.`;
      keywords = [
        "Advocate on Record Tushar Garg",
        fallback.title,
        fallback.caseNumber,
        fallback.courtName,
        fallback.subject,
        `${fallback.subject} Judgment`,
        "Supreme Court Case Law",
        fallback.officialSource,
        "Advocate Tushar Garg Legal Repository",
        "Advocate-on-Record India"
      ];
    } else {
      const live = await fetchApi(`/courts/judgments/${id}`).catch(() => null);
      if (live && live.title) {
        title = `${live.title} | ${live.courtId?.name || "Court Judgment"}`;
        description = live.shortDescription || live.description || description;
        keywords = [
          "Advocate on Record Tushar Garg",
          live.title,
          live.caseNumber || "Case Law",
          live.courtId?.name || "Judicial Decision",
          "Indian Legal Precedents",
          "Advocate Tushar Garg"
        ];
      }
    }
  } catch (e) {
    // Graceful fallback
  }

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: `/judgments/${id}`,
    },
    openGraph: {
      title,
      description,
      type: "article",
    },
  };
}

export default function JudgmentDetailLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
