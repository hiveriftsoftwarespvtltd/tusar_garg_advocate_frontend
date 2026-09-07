import { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getJudicialServiceBySlug,
  getAllJudicialServices
} from "../data/judicialServicesData";
import JudicialServiceDetailClient from "../components/JudicialServiceDetailClient";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const services = getAllJudicialServices();
  const paths: { slug: string }[] = [];

  for (const s of services) {
    paths.push({ slug: s.slug });
    for (const alias of s.aliases) {
      paths.push({ slug: alias });
    }
  }

  return paths;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const service = getJudicialServiceBySlug(slug);

  if (!service) {
    return {
      title: "Judicial Service Guide Not Found | Advocate Tushar Garg",
      description: "Comprehensive judicial services, syllabus, and examination preparation guide."
    };
  }

  return {
    title: `${service.title} - Complete Exam Guide, Syllabus & Strategy | Advocate Tushar Garg`,
    description: `${service.tagline}. ${service.desc}`,
    openGraph: {
      title: `${service.title} | Judicial Services Portal`,
      description: service.desc,
      type: "website"
    }
  };
}

export default async function JudicialServicePage({ params }: PageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const service = getJudicialServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return <JudicialServiceDetailClient service={service} />;
}
