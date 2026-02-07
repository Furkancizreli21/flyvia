import DestinationFilter from "@/components/ui/Destination/DestinationFilter";

export default function Destinations() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gray-50 px-6 py-24">
      <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-indigo-200 blur-3xl opacity-20 pointer-events-none"></div>
      <div className="absolute top-1/2 right-0 h-64 w-64 rounded-full bg-purple-200 blur-3xl opacity-20 pointer-events-none"></div>

      <div className="mx-auto max-w-7xl relative z-10">
        <header className="mb-16 text-center max-w-2xl mx-auto">
          <h2 className="text-sm font-bold tracking-widest text-indigo-600 uppercase mb-3">Destinations</h2>
          <h1 className="text-5xl md:text-6xl font-black tracking-tight text-gray-900 mb-6">
            Explore the <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-purple-600">World</span>
          </h1>
          <p className="text-lg text-gray-500 leading-relaxed">
            Discover iconic destinations, vibrant cities, and unforgettable experiences curated just for you.
          </p>
        </header>

        <DestinationFilter />
      </div>
    </section>
  );
}
