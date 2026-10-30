export default function CourtsLoading() {
  return (
    <main className="min-h-screen bg-[#fcfcfc] animate-pulse">
      {/* 1. Hero Skeleton */}
      <div className="bg-[#0d1b3e] text-white py-16 px-4 border-b border-[#c9a84c]/30 relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto space-y-4">
          <div className="h-4 w-36 bg-white/20 rounded-md" />
          <div className="h-10 w-3/4 max-w-2xl bg-white/25 rounded-lg" />
          <div className="h-5 w-2/3 max-w-xl bg-white/15 rounded-md" />
          <div className="flex gap-4 pt-4">
            <div className="h-12 w-44 bg-[#c9a84c]/40 rounded-xl" />
            <div className="h-12 w-40 bg-white/10 rounded-xl" />
          </div>
        </div>
      </div>

      {/* 2. Stats Bar Skeleton */}
      <div className="bg-[#071126] py-4 border-b border-[#c9a84c]/20">
        <div className="max-w-[1280px] mx-auto px-4 flex justify-between items-center gap-4">
          <div className="h-5 w-36 bg-white/15 rounded" />
          <div className="h-5 w-40 bg-white/15 rounded" />
          <div className="h-5 w-36 bg-white/15 rounded" />
          <div className="h-5 w-44 bg-white/15 rounded" />
        </div>
      </div>

      {/* 3. Section Title & District Courts Skeleton */}
      <div className="max-w-[1280px] mx-auto px-4 py-12 space-y-8">
        <div className="space-y-2">
          <div className="h-4 w-28 bg-gray-200 rounded" />
          <div className="h-8 w-72 bg-gray-300 rounded" />
        </div>

        {/* State Grid Skeleton */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="bg-white rounded-xl border border-gray-100 p-5 space-y-3 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="h-6 w-32 bg-gray-200 rounded" />
                <div className="h-5 w-12 bg-[#c9a84c]/20 rounded-full" />
              </div>
              <div className="h-4 w-24 bg-gray-100 rounded" />
              <div className="h-3 w-full bg-gray-100 rounded pt-2" />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
