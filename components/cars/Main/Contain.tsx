import Image from "next/image";
import { useState, useMemo } from "react";

interface ContainProps {
  cities: string[];
}

const Contain = ({ cities }: ContainProps) => {
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const filteredCities = useMemo(() => {
    if (!search) return [];

    return cities.filter((city) => city.toLowerCase().startsWith(search.toLowerCase())).slice(0, 8);
  }, [search, cities]);

  return (
    <div className="relative mx-auto h-full max-w-8xl">
      <div className="relative h-full rounded-3xl">
        <Image src="/cars/home/main.png" alt="Car" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute left-1/2 -bottom-10 -translate-x-1/2 w-[90%] max-w-5xl bg-white rounded-2xl shadow-xl p-5 z-20">
          <div className="relative grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* SEARCH INPUT */}
            <div className="relative">
              <input
                className="bg-gray-100 p-3 rounded-xl outline-none w-full"
                placeholder="City or airport"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setIsOpen(true);
                }}
                onFocus={() => setIsOpen(true)}
              />

              {isOpen && filteredCities.length > 0 && (
                <div className="absolute top-full mt-2 w-full bg-white rounded-xl shadow-lg z-50">
                  {filteredCities.map((city, index) => (
                    <div
                      key={index}
                      className="px-4 py-2 cursor-pointer hover:bg-gray-100 text-sm"
                      onClick={() => {
                        setSearch(city);
                        setIsOpen(false); // 🔥 DROPDOWN KAPANIYOR
                      }}
                    >
                      {city}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <input type="date" className="bg-gray-100 p-3 rounded-xl outline-none" />
            <input type="date" className="bg-gray-100 p-3 rounded-xl outline-none" />
            <button className="bg-blue-600 text-white rounded-xl font-semibold hover:cursor-pointer hover:bg-blue-700 transition duration-300">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contain;
