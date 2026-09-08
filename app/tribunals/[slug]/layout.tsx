import type { Metadata } from "next";

interface LayoutProps {
  params: Promise<{ slug: string }>;
  children: React.ReactNode;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const resolved = await params;
  const slug = resolved.slug.toLowerCase();
  const titleSlug = slug.toUpperCase();

  return {
    title: `${titleSlug} Tribunal & Appellate Forum | Advocate Tushar Garg (AOR)`,
    description: `Complete overview, jurisdiction, benches, official portal, and litigation procedures for ${titleSlug} Tribunal in India. Supreme Court representation by Advocate Tushar Garg.`,
    keywords: [
      `${titleSlug} Tribunal`,
      `${titleSlug} India`,
      `${titleSlug} Benches`,
      `${titleSlug} Appeal to Supreme Court`,
      "Quasi-Judicial Forum India",
      "Tribunal Litigation",
      "Advocate Tushar Garg",
      "Advocate on Record",
      "Supreme Court of India"
    ],
    alternates: {
      canonical: `/tribunals/${slug}`,
    },
    openGraph: {
      title: `${titleSlug} Tribunal - Official Information & Legal Procedures`,
      description: `Complete overview, jurisdiction, and litigation procedures for ${titleSlug} Tribunal in India.`,
    },
  };
}

export default function TribunalDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
