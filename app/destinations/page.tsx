import DestinationCard from "@/components/helpersCard/DestinationCard";
import { destinations } from "@/data/dummy-data";
import { IoFilterSharp } from "react-icons/io5";

export default function Destinations() {
  const regions = ["All", "Europe", "Asia", "Americas", "Africa", "Oceania"];

  return (
    <section className="mx-auto max-w-7xl px-6 py-20 bg-linear-to-b">
      <header className="mb-14 max-w-3xl">
        <h1 className="text-5xl font-extrabold tracking-tight text-gray-900">Explore the world</h1>
        <p className="mt-4 text-lg text-gray-600">Discover iconic destinations, vibrant cities, and unforgettable experiences.</p>
      </header>

      <div className="mb-16 flex flex-wrap items-center justify-between gap-6 rounded-3xl bg-white p-5 shadow-md shadow-indigo-100/50">
        <div className="flex flex-wrap gap-3">
          {regions.map((region) => (
            <button
              key={region}
              className="
                rounded-full px-6 py-2 text-sm font-medium
                bg-indigo-50 text-indigo-700 transition
                hover:bg-indigo-600 hover:text-white cursor-pointer
              "
            >
              {region}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button
            className="
              flex items-center gap-2 rounded-full px-6 py-2
              bg-purple-50 text-purple-700 text-sm font-medium transition
              hover:bg-purple-600 hover:text-white cursor-pointer
            "
          >
            <IoFilterSharp className="text-lg cursor-pointer" />
            Filters
          </button>

          <button
            className="
              rounded-full px-6 py-2 text-sm font-medium
              bg-blue-50 text-blue-700 transition
              hover:bg-blue-600 hover:text-white cursor-pointer
            "
          >
            Sort by <span className="font-semibold">Popular</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {destinations.map((city) => (
          <DestinationCard key={city.href} href={city.href} image={city.image} title={city.title} region={city.region} />
        ))}
      </div>
    </section>
  );
}
