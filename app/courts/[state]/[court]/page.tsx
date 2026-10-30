import { notFound } from "next/navigation";
import { getCourtDetails } from "../../../../lib/api/courts";
import CourtTemplate from "../../components/template/CourtTemplate";
import { Metadata } from "next";

export const dynamic = 'force-dynamic';

type Props = {
  params: Promise<{ state: string; court: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { state, court } = await params;
  const data = await getCourtDetails(state, court);

  if (!data) {
    return { title: "Court Directory Entry Not Found" };
  }

  const courtName = data.name || "District Court";
  const stateName = data.state?.name || "India";
  const districtName = data.city || data.district || "Judicial District";

  return {
    title: data.metaTitle || `${courtName} (${districtName}) | e-Courts & Case Status`,
    description: data.metaDescription || data.description || `Official judicial establishment of ${courtName} located in ${districtName}, ${stateName}. Access official e-Courts case status, cause lists, orders, and filing procedures.`,
    keywords: [

      "Advocate on Record Tushar Garg",
      courtName,
      `${courtName} Case Status`,
      `${courtName} Cause List`,
      `${districtName} District Court`,
      `${stateName} Subordinate Judiciary`,
      "eCourts Services India",
      "District and Sessions Judge",
      "Advocate Tushar Garg AOR",
      "Supreme Court Appeal SLP Article 136"
    ],
    alternates: {
      canonical: `/courts/${state}/${court}`,
    },
    openGraph: {
      title: `${courtName} | ${districtName}, ${stateName}`,
      description: `Official e-Courts portal, registry hours, and judicial divisions for ${courtName}.`,
    },
  };
}

export default async function CourtDynamicPage({ params }: Props) {
  const { state, court } = await params;
  const courtDataRaw = await getCourtDetails(state, court);

  if (!courtDataRaw) {
    notFound();
  }

  // The CourtTemplate now directly accepts the structured data from the API
  return <CourtTemplate data={courtDataRaw} />;
}
