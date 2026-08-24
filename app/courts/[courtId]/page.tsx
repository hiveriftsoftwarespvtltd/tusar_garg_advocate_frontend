import { notFound } from "next/navigation";
import CourtTemplate from "../components/template/CourtTemplate";
import { courtsData } from "../data/courtsData";
import { Metadata } from "next";

type Props = {
  params: Promise<{ courtId: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { courtId } = await params;
  const data = courtsData[courtId];

  if (!data) {
    return { title: "Court Not Found" };
  }

  return {
    title: `${data.hero.title} | Tushar Garg Advocate`,
    description: data.hero.description,
  };
}

export default async function CourtDynamicPage({ params }: Props) {
  const { courtId } = await params;
  const data = courtsData[courtId];

  if (!data) {
    notFound();
  }

  return <CourtTemplate data={data} />;
}
