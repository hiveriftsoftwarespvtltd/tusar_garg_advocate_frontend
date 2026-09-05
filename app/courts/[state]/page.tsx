import { notFound } from "next/navigation";
import { getStateBySlug } from "../../../lib/api/states";
import { getCourtsByState } from "../../../lib/api/courts";
import { Metadata } from "next";
import Link from "next/link";
import { MapPin, Scale, ChevronRight, Globe, ExternalLink } from "lucide-react";
import { initialDistrictCourtsData } from "../../../lib/data/districtCourtsData";

type Props = {
  params: Promise<{ state: string }>
}

function generateSlug(str: string) {
  return (str || '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { state } = await params;
  const stateData = await getStateBySlug(state);

  if (!stateData) {
    return { title: "State Not Found" };
  }

  return {
    title: `${stateData.name} Courts | Tushar Garg Advocate`,
    description: `Explore the courts located in ${stateData.name}`,
  };
}

export const revalidate = 30;

export default async function StateCourtsPage({ params }: Props) {
  const { state: stateSlug } = await params;
  
  const [stateData, courtsData] = await Promise.all([
    getStateBySlug(stateSlug).catch(() => null),
    getCourtsByState(stateSlug).catch(() => [])
  ]);

  if (!stateData || stateData.status !== 'PUBLISHED') {
    notFound();
  }

  const courts = [...(courtsData || [])];

  // Merge/fallback with initialDistrictCourtsData so EVERY state page displays its district courts
  const fallbackDistricts = initialDistrictCourtsData.filter(
    (dc) => dc.state.toLowerCase() === stateData.name.toLowerCase() ||
            dc.state.toLowerCase().replace(/[^a-z0-9]+/g, '-') === stateSlug
  );

  if (fallbackDistricts.length > 0) {
    const existingNames = new Set(courts.map((c: any) => c.name?.toLowerCase()));
    
    for (const dc of fallbackDistricts) {
      if (!existingNames.has(dc.courtName.toLowerCase())) {
        courts.push({
          _id: `fallback-${dc.id}`,
          name: dc.courtName,
          slug: generateSlug(dc.courtName),
          courtType: "District Court",
          city: dc.district,
          website: dc.website,
          displayUrl: dc.displayUrl,
          isExternal: true
        });
      }
    }
  }

  return (
    <main className="min-h-screen bg-[#fcfcfc] font-sans pb-20">
      {/* Hero Section */}
      <section className="bg-[#0d1b3e] text-white pt-[120px] pb-12 px-4 relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto relative z-10">
          <div className="flex items-center text-[13px] text-[#a0aabf] mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} className="mx-2" />
            <Link href="/courts" className="hover:text-white transition-colors">Courts</Link>
            <ChevronRight size={14} className="mx-2" />
            <span className="text-[#c9a84c]">{stateData.name}</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl mb-4">{stateData.name} Courts</h1>
          <p className="text-lg text-gray-300 max-w-2xl">
            {stateData.description || `Explore the complete directory of courts in ${stateData.name}.`}
          </p>
        </div>
      </section>

      {/* Courts Grid */}
      <section className="py-16 px-4">
        <div className="max-w-[1280px] mx-auto">
          {courts.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              No courts are currently available for this state.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courts.map((court) => {
                const courtSlug = court.slug || generateSlug(court.name);
                const internalUrl = `/courts/${stateSlug}/${courtSlug}`;
                const hasWebsite = court.website && court.website.startsWith('http');

                return (
                  <div
                    key={court._id}
                    className="group bg-white rounded-xl shadow-[0_2px_15px_rgba(0,0,0,0.06)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.12)] transition-all duration-300 border border-[#f0f0f0] overflow-hidden flex flex-col hover:-translate-y-1"
                  >
                    {/* Header Image / Banner */}
                    <Link
                      href={internalUrl}
                      className="h-[180px] relative p-6 flex flex-col justify-end bg-[#0d1b3e] bg-cover bg-center transition-transform duration-500 group-hover:scale-[1.01] block"
                      style={court.image ? { backgroundImage: `url(${court.image})` } : {}}
                    >
                      <div className="absolute top-0 right-0 p-4 opacity-10 z-10">
                        <Scale size={80} className="text-white" />
                      </div>
                      <div className="flex items-center justify-between relative z-10 mb-2">
                        <span className="px-3 py-1 bg-[#c9a84c] text-[#0d1b3e] text-[12px] font-bold tracking-wider uppercase rounded-full shadow-md">
                          {court.courtType || "District Court"}
                        </span>
                        {hasWebsite && (
                          <span className="px-2 py-0.5 bg-white/20 text-white text-[10px] font-medium rounded flex items-center gap-1 backdrop-blur-sm">
                            <Globe size={10} /> e-Courts Portal
                          </span>
                        )}
                      </div>
                    </Link>

                    {/* Content Body */}
                    <div className="p-6 flex-1 flex flex-col">
                      <Link href={internalUrl} className="block group-hover:text-[#c9a84c] transition-colors">
                        <h3 className="text-[19px] font-semibold text-[#0d1b3e] mb-2 leading-snug hover:underline">
                          {court.name}
                        </h3>
                      </Link>
                      <div className="flex items-center text-[#4b5563] text-[13px] mb-4">
                        <MapPin size={15} className="mr-2 text-[#c9a84c] flex-shrink-0" />
                        <span className="line-clamp-1">{court.city || court.address || stateData.name}</span>
                      </div>

                      <div className="mt-auto pt-4 border-t border-[#f0f0f0] flex items-center justify-between gap-2">
                        <Link
                          href={internalUrl}
                          className="flex-1 flex items-center justify-between text-[#0d1b3e] hover:text-[#c9a84c] font-bold text-[13px] transition-colors"
                        >
                          <span>View Court Details</span>
                          <ChevronRight size={18} className="text-[#c9a84c] transform group-hover:translate-x-1 transition-transform" />
                        </Link>
                        {hasWebsite && (
                          <a
                            href={court.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg text-gray-500 hover:text-[#0d1b3e] bg-gray-50 hover:bg-gray-100 border border-gray-200 transition-colors"
                            title="Official e-Courts Portal"
                          >
                            <ExternalLink size={15} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
