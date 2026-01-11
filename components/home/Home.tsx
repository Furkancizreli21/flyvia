"use client";
import { Car, Globe, Hotel, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";

const Home = () => {
  const [cities, setCities] = useState<string[]>([]);
  const [search, setSearch] = useState("");
  const [showList, setShowList] = useState(false);
  useEffect(() => {
    async function getData() {
      const res = await fetch("https://countriesnow.space/api/v0.1/countries");
      const result = await res.json();

      const allCities: string[] = result.data.flatMap((country: { cities: string[] }) => country.cities);

      setCities(allCities);
    }

    getData();
  }, []);

  const filteredCities = cities.filter((city) => city.toLowerCase().includes(search.toLowerCase()));

  return (
    <section className=" h-screen w-full flex flex-col overflow-hidden font-sans">
      <Image src="/home/homes.png" alt="Background" fill priority className="object-cover -z-20" />
      <div className="absolute inset-0 bg-black/30 -z-10" />
      <div className="flex-1 flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <div className="text-white mb-10">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight drop-shadow-xl">Find Your Perfect Escape</h1>
            <p className="text-lg md:text-2xl opacity-90 font-light max-w-2xl mx-auto">
              Discover unforgettable holiday destinations and the best car rental deals.
            </p>
          </div>

          <div className="flex items-center bg-black/20 backdrop-blur-md border border-white/20 rounded-full p-2 w-full max-w-4xl mx-auto shadow-2xl">
            <div className="flex items-center grow px-4 gap-3 relative">
              {" "}
              <Globe className="text-white w-5 h-5" />
              <input
                type="text"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setShowList(true);
                }}
                placeholder="Search for a city,region,or hotel..."
                className="bg-transparent border-none outline-none text-white placeholder-gray-300 w-full text-sm"
              />
              {showList && search.length > 1 && filteredCities.length > 0 && (
                <div className="absolute top-full left-0 mt-4 w-full max-h-60 overflow-y-auto bg-black/80 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl z-100 custom-scrollbar">
                  {filteredCities.slice(0, 10).map((city, index) => (
                    <div
                      key={index}
                      onClick={() => {
                        setSearch(city);
                        setShowList(false);
                      }}
                      className="px-6 py-3 text-white text-left hover:bg-blue-600/50 cursor-pointer transition-colors border-b border-white/5 last:border-none"
                    >
                      <span className="text-sm font-medium">{city}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="h-8 w-px bg-white/70 mx-2"></div>

            <div className="flex items-center gap-6 px-4">
              <button className="flex items-center gap-2 text-white hover:text-blue-400 transition-colors">
                <Hotel className="w-5 h-5" />
                <span className="text-sm font-medium cursor-pointer">Hotels</span>
              </button>
              <button className="flex items-center gap-2 text-white hover:text-blue-400 transition-colors">
                <Car className="w-5 h-5" />
                <span className="text-sm font-medium cursor-pointer">Cars</span>
              </button>
            </div>

            <button className="bg-blue-600 hover:bg-blue-500 p-3 rounded-full transition-all shadow-lg ml-2">
              <Search className="text-white w-6 h-6 cursor-pointer" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
