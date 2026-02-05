"use client";

import { useMemo, useState } from "react";
import DestinationCard from "@/components/helpersCard/DestinationCard";
import { destinations } from "@/data/dummy-data";

export default function Destinations() {
  const [activeRegion, setActiveRegion] = useState("All");
  const [search, setSearch] = useState("");
  const regions = ["All", "Europe", "Asia", "Americas", "Africa", "Oceania"];

  const filteredDestinations = useMemo(() => {
    return destinations.filter((item) => {
      const matchesRegion = activeRegion == "All" ? destinations : item.region == activeRegion;
      const matchesSearch = item.title.toLocaleLowerCase().startsWith(search.toLocaleLowerCase());
      return matchesRegion && matchesSearch;
    });
  }, [activeRegion, search]);

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

        <div className="sticky top-4 z-40 mb-16 mx-auto max-w-5xl">
          <div
            className="
            flex flex-col md:flex-row items-center justify-between gap-4 
            rounded-2xl border border-white/40 bg-white/70 p-2 shadow-xl shadow-indigo-100/40 backdrop-blur-xl
          "
          >
            <div className="flex w-full md:w-auto overflow-x-auto no-scrollbar gap-1 p-1">
              {regions.map((region) => (
                <button
                  key={region}
                  onClick={() => setActiveRegion(region)}
                  className={`
                    whitespace-nowrap rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-300 ease-out cursor-pointer
                    ${
                      activeRegion === region
                        ? "bg-gray-900 text-white shadow-lg shadow-gray-900/20 transform scale-105"
                        : "bg-transparent text-gray-600 hover:bg-white hover:text-indigo-600 hover:shadow-sm"
                    }
                  `}
                >
                  {region}
                </button>
              ))}
            </div>

            <div className="w-full md:w-72">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search country or city..."
                className="
                  w-full rounded-xl border border-gray-200 bg-white/80
                  px-5 py-2.5 text-sm text-gray-700
                  placeholder-gray-400 transition
                  focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-100
                "
              />
            </div>
          </div>
        </div>

        {filteredDestinations.length < 0 ? (
          "Sorry... No Destinations Found."
        ) : (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredDestinations.map((city) => (
              <DestinationCard key={city.href} href={city.href} image={city.image} title={city.title} region={city.region} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
