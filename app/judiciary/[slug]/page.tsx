import { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getJudicialServiceBySlug,
  getAllJudicialServices
} from "../data/judicialServicesData";
import { 
  getStateJudiciaryBySlug,
  stateJudiciaryDataMap,
  ALL_28_STATES 
} from "../data/stateJudiciaryExamData";
import JudicialServiceDetailClient from "../components/JudicialServiceDetailClient";
import StateJudiciaryDetailClient from "../components/StateJudiciaryDetailClient";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const paths: { slug: string }[] = [];

  // 1. General services
  const services = getAllJudicialServices();
  for (const s of services) {
    paths.push({ slug: s.slug });
    for (const alias of s.aliases || []) {
      paths.push({ slug: alias });
    }
  }

  // 2. All 28 States + Delhi
  for (const state of ALL_28_STATES) {
    paths.push({ slug: state.slug });
  }

  return paths;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  // Check state first
  const stateData = getStateJudiciaryBySlug(slug);
  if (stateData) {
    return {
      title: `${stateData.stateName} Judiciary Examination - Syllabus, PYQs & Official Links | Advocate Tushar Garg`,
      description: `Complete guide for ${stateData.examName} (${stateData.shortCode}). Download previous year question papers, official syllabus, and access direct recruitment portals.`,
      keywords: [
        `${stateData.stateName} Judiciary`,
        `${stateData.shortCode} Exam`,
        `${stateData.stateName} Civil Judge Syllabus`,
        `${stateData.stateName} Judicial Services PYQ`,
        `${stateData.stateName} High Court Recruitment`,
        "Judiciary Question Papers PDF",
        "Judicial Services Exam Pattern"
      ],
      alternates: {
        canonical: `/judiciary/${slug}`,
      },
      openGraph: {
        title: `${stateData.stateName} Judiciary Examination (${stateData.shortCode})`,
        description: `Official question papers, syllabus, and examination guidance for ${stateData.examName}.`,
        type: "website"
      }
    };
  }

  // Check general service
  const service = getJudicialServiceBySlug(slug);
  if (service) {
    return {
      title: `${service.title} - Complete Exam Guide, Syllabus & Strategy | Advocate Tushar Garg`,
      description: `${service.tagline}. ${service.desc}`,
      keywords: [
        service.title,
        service.shortTitle,
        "Judiciary Preparation Strategy",
        "Judicial Services Syllabus",
        "Law Exams India"
      ],
      alternates: {
        canonical: `/judiciary/${slug}`,
      },
      openGraph: {
        title: `${service.title} | Judicial Services Portal`,
        description: service.desc,
        type: "website"
      }
    };
  }

  return {
    title: "Judicial Service Guide Not Found | Advocate Tushar Garg",
    description: "Comprehensive judicial services, syllabus, and examination preparation guide.",
    alternates: {
      canonical: `/judiciary/${slug}`,
    }
  };
}

export default async function JudicialServicePage({ params }: PageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  // Check if it's one of the 28 states
  const stateMatch = ALL_28_STATES.find(s => s.slug === slug);
  if (stateMatch || stateJudiciaryDataMap[slug]) {
    const stateData = getStateJudiciaryBySlug(slug);
    if (stateData) {
      return <StateJudiciaryDetailClient state={stateData} />;
    }
  }

  // Fallback to general judicial service
  const service = getJudicialServiceBySlug(slug);
  if (service) {
    return <JudicialServiceDetailClient service={service} />;
  }

  // If matches neither, throw 404
  notFound();
}
