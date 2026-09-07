import { Metadata } from "next";
import { notFound } from "next/navigation";
import { LAWS_CATEGORY_DATA, LawCategoryDetail, KeyArea } from "../../../data/lawsData";
import PracticeAreaClientView from "./PracticeAreaClientView";

interface PageProps {
  params: Promise<{
    slug: string;
    areaSlug: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug, areaSlug } = await params;
  const category = LAWS_CATEGORY_DATA[slug];
  
  if (!category) {
    return {
      title: "Legal Practice Area | Advocate Tushar Garg",
      description: "Specialized legal representation before Supreme Court of India & High Courts."
    };
  }

  const keyArea = category.keyAreas.find((area) => {
    const computedSlug = area.slug || area.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
    return computedSlug === areaSlug || area.slug === areaSlug;
  }) || {
    title: areaSlug.replace(/-/g, " ").toUpperCase(),
    description: `Specialized advocacy in ${category.name}`
  };

  return {
    title: `${keyArea.title} — ${category.name} | Advocate Tushar Garg (AOR)`,
    description: keyArea.description || category.overview.slice(0, 160),
  };
}

export default async function PracticeAreaDetailPage({ params }: PageProps) {
  const { slug, areaSlug } = await params;
  
  const category: LawCategoryDetail | undefined = LAWS_CATEGORY_DATA[slug];

  if (!category) {
    notFound();
  }

  const keyArea: KeyArea = category.keyAreas.find((area) => {
    const computedSlug = area.slug || area.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
    return computedSlug === areaSlug || area.slug === areaSlug;
  }) || {
    title: areaSlug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" "),
    description: `Specialized litigation and statutory advisory under ${category.name}.`,
    tag: category.tag
  };

  const isJudicialReview = areaSlug === "constitutional-validity-challenges" || areaSlug.includes("judicial-review");

  const otherKeyAreas = category.keyAreas.filter(a => {
    const computedSlug = a.slug || a.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
    return computedSlug !== areaSlug;
  });

  return (
    <PracticeAreaClientView
      category={category}
      keyArea={keyArea}
      areaSlug={areaSlug}
      isJudicialReview={isJudicialReview}
      otherKeyAreas={otherKeyAreas}
    />
  );
}
