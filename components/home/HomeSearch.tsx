"use client";

import { Car, Globe, Hotel, Search } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface Props {
  cities: string[];
}

export default function HomeSearch({ cities }: Props) {
  const [search, setSearch] = useState("");
  const [showList, setShowList] = useState(false);

  const filteredCities = cities.filter((city) => city.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="flex flex-col items-center justify-start flex-1 pt-32">
      <div className="container mx-auto px-4 text-center">
        <div className="text-white mb-10">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Find Your Perfect Escape</h1>
          <p className="text-lg md:text-2xl opacity-90 max-w-2xl mx-auto">
            Discover unforgettable holiday destinations and the best car rental deals.
          </p>
        </div>

        <div className="flex items-center bg-black/20 backdrop-blur-md border border-white/20 rounded-full p-2 w-full max-w-4xl mx-auto">
          <div className="flex items-center grow px-4 gap-3 relative">
            <Globe className="text-white w-5 h-5" />
            <input
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setShowList(true);
              }}
              placeholder="Search for a city, region, or hotel..."
              className="bg-transparent text-white outline-none w-full"
            />

            {showList && search.length > 1 && (
              <div className="absolute top-full left-0 mt-4 w-100 bg-black/80 rounded-2xl">
                {filteredCities.slice(0, 10).map((city) => (
                  <div
                    key={city}
                    onClick={() => {
                      setSearch(city);
                      setShowList(false);
                    }}
                    className="px-6 py-3 hover:bg-blue-600/50 cursor-pointer text-white"
                  >
                    {city}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="flex items-center gap-6 px-4">
            <Link href="/destinations" className="text-white flex items-center gap-2">
              <Hotel className="w-5 h-5" /> Hotels
            </Link>
            <Link href="/rentacar" className="text-white flex items-center gap-2">
              <Car className="w-5 h-5" /> Cars
            </Link>
          </div>

          <button className="bg-blue-600 p-3 rounded-full ml-2">
            <Search className="text-white w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
