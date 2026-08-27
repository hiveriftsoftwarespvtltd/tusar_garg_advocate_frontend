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
    return { title: "Court Not Found" };
  }

  return {
    title: `${data.name} | Tushar Garg Advocate`,
    description: data.description || `Information about ${data.name} in ${data.state.name}.`,
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
