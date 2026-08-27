import { notFound } from "next/navigation";
import { getStateBySlug } from "../../../lib/api/states";
import { getCourtsByState } from "../../../lib/api/courts";
import { Metadata } from "next";
import Link from "next/link";
import { MapPin, Scale, ChevronRight } from "lucide-react";

type Props = {
  params: Promise<{ state: string }>
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

export default async function StateCourtsPage({ params }: Props) {
  const { state: stateSlug } = await params;
  
  const stateData = await getStateBySlug(stateSlug);
  if (!stateData || stateData.status !== 'PUBLISHED') {
    notFound();
  }

  const courts = await getCourtsByState(stateSlug);

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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{stateData.name} Courts</h1>
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
              {courts.map((court) => (
                <Link key={court._id} href={`/courts/${stateSlug}/${court.slug}`} className="group bg-white rounded-xl shadow-[0_2px_15px_rgba(0,0,0,0.06)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.12)] transition-all duration-300 border border-[#f0f0f0] overflow-hidden flex flex-col">
                  <div 
                    className="h-[220px] relative p-6 flex flex-col justify-end bg-[#0d1b3e] bg-cover bg-center transition-transform duration-500 group-hover:scale-[1.02]"
                    style={court.image ? { backgroundImage: `url(${court.image})` } : {}}
                  >
                    <div className="absolute top-0 right-0 p-4 opacity-10 z-10">
                      <Scale size={80} className="text-white" />
                    </div>
                    <span className="relative z-10 inline-block px-3 py-1 bg-[#c9a84c] text-[#0d1b3e] text-[12px] font-bold tracking-wider uppercase rounded-full mb-2 w-fit shadow-md">
                      {court.courtType}
                    </span>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-[20px] font-bold text-[#0d1b3e] mb-3 group-hover:text-[#c9a84c] transition-colors line-clamp-2">
                      {court.name}
                    </h3>
                    <div className="flex items-center text-[#4b5563] text-[14px] mb-4">
                      <MapPin size={16} className="mr-2 text-[#c9a84c] flex-shrink-0" />
                      <span className="line-clamp-1">{court.city || court.address || stateData.name}</span>
                    </div>
                    <div className="mt-auto pt-4 border-t border-[#f0f0f0] flex items-center justify-between text-[#0d1b3e] font-semibold text-[14px]">
                      <span>View Details</span>
                      <ChevronRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
