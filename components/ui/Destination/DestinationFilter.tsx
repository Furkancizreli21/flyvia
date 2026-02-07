"use client";

import { useState, useMemo } from "react";
import DestinationCard from "@/components/helpersCard/DestinationCard";
import { destinations } from "@/data/dummy-data";

const regions = ["All", "Europe", "Asia", "Americas", "Africa", "Oceania"];

export default function DestinationFilter() {
  const [activeRegion, setActiveRegion] = useState("All");
  const [search, setSearch] = useState("");

  const filteredDestinations = useMemo(() => {
    return destinations.filter((item) => {
      const matchesRegion = activeRegion === "All" ? true : item.region === activeRegion;
      const matchesSearch = item.title.toLowerCase().startsWith(search.toLowerCase());
      return matchesRegion && matchesSearch;
    });
  }, [activeRegion, search]);

  return (
    <>
      <div className="sticky top-4 z-40 mb-16 mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 rounded-2xl border border-white/40 bg-white/70 p-2 shadow-xl shadow-indigo-100/40 backdrop-blur-xl">
          <div className="flex w-full md:w-auto overflow-x-auto no-scrollbar gap-1 p-1">
            {regions.map((region) => (
              <button
                key={region}
                onClick={() => setActiveRegion(region)}
                className={`whitespace-nowrap rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-300 ease-out cursor-pointer ${
                  activeRegion === region
                    ? "bg-gray-900 text-white shadow-lg shadow-gray-900/20 transform scale-105"
                    : "bg-transparent text-gray-600 hover:bg-white hover:text-indigo-600 hover:shadow-sm"
                }`}
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
              className="w-full rounded-xl border border-gray-200 bg-white/80 px-5 py-2.5 text-sm text-gray-700 placeholder-gray-400 transition focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-100"
            />
          </div>
        </div>
      </div>

      {filteredDestinations.length === 0 ? (
        <p>Sorry... No Destinations Found.</p>
      ) : (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredDestinations.map((city) => (
            <DestinationCard key={city.href} href={city.href} image={city.image} title={city.title} region={city.region} />
          ))}
        </div>
      )}
    </>
  );
}
