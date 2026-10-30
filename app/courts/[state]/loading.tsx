export default function StateCourtsLoading() {
  return (
    <main className="min-h-screen bg-[#fcfcfc] animate-pulse">
      <div className="bg-[#0d1b3e] text-white py-14 px-4 border-b border-[#c9a84c]/30">
        <div className="max-w-[1280px] mx-auto space-y-3">
          <div className="h-4 w-40 bg-white/20 rounded" />
          <div className="h-9 w-64 bg-white/30 rounded" />
          <div className="h-4 w-96 bg-white/15 rounded" />
        </div>
      </div>
      <div className="max-w-[1280px] mx-auto px-4 py-10 space-y-6">
        <div className="h-7 w-48 bg-gray-200 rounded" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="bg-white rounded-xl border border-gray-100 p-6 space-y-4 shadow-sm">
              <div className="h-6 w-3/4 bg-gray-200 rounded" />
              <div className="h-4 w-1/2 bg-gray-100 rounded" />
              <div className="h-10 w-full bg-gray-100 rounded" />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
