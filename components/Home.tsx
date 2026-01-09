"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Home = () => {
  const [cities, setCities] = useState<string[]>([]);
  const [search, setSearch] = useState("");
  const [isShow, setIsShow] = useState(false);

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

      <nav className="absolute top-0 w-full z-50 px-6 py-4">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image src="/home/icon.png" alt="icon" width={150} height={10} className="brightness-0 invert" />
          </Link>

          <ul className="hidden md:flex gap-8 text-white font-medium">
            <li className="hover:text-blue-400 transition cursor-pointer">
              <Link href="/">Holiday Destinations</Link>
            </li>
            <li className="hover:text-blue-400 transition cursor-pointer">
              <Link href="/">Rent a car</Link>
            </li>
            <li className="hover:text-blue-400 transition cursor-pointer">
              <Link href="/">Opportunities</Link>
            </li>
            <li className="hover:text-blue-400 transition cursor-pointer">
              <Link href="/">Contact</Link>
            </li>
          </ul>

          <div className="flex gap-4 items-center">
            <button className="text-white font-semibold hover:opacity-80 cursor-pointer">Login</button>
            <button className="bg-white text-black px-5 py-2 rounded-full font-bold hover:bg-blue-600 hover:text-white transition cursor-pointer">
              Register
            </button>
          </div>
        </div>
      </nav>

      <div className="flex-1 flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <div className="text-white mb-10">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight drop-shadow-xl">Find Your Perfect Escape</h1>
            <p className="text-lg md:text-2xl opacity-90 font-light max-w-2xl mx-auto">
              Discover unforgettable holiday destinations and the best car rental deals.
            </p>
          </div>

          <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-6 md:p-10 max-w-5xl mx-auto">
            <div className="flex gap-8 border-b border-gray-100 mb-8 text-gray-400 font-bold">
              <button className="pb-4 border-b-4 border-blue-600 text-blue-600 flex items-center gap-2 cursor-pointer">
                🏠 Holiday Rentals
              </button>
              <button className="pb-4 hover:text-gray-800 flex items-center gap-2 transition cursor-pointer">
                🚗 Car Rental
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
              <div className="md:col-span-4 space-y-2 text-left">
                <label className="text-xs font-bold text-gray-500 uppercase ml-1">Destination</label>
                <input
                  type="text"
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                  placeholder="Where are you going?"
                  className="w-full p-4 bg-gray-100 border-none rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none text-black"
                />
                {search && filteredCities.length > 0 && !filteredCities.includes(search) && (
                  <ul className="absolute z-50 mt-2 w-70 max-h-60 overflow-auto bg-white rounded-xl shadow-lg border">
                    {filteredCities.slice(0, 8).map((city, index) => (
                      <li
                        key={index}
                        onClick={() => setSearch(city)}
                        className="px-4 py-3 hover:bg-blue-100 cursor-pointer text-left text-black"
                      >
                        {city}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="md:col-span-3 space-y-2 text-left">
                <label className="text-xs font-bold text-gray-500 uppercase ml-1">Dates</label>
                <input
                  type="text"
                  placeholder="Select dates"
                  className="w-full p-4 bg-gray-100 border-none rounded-2xl outline-none text-black"
                />
              </div>

              <div className="md:col-span-3 space-y-2 text-left">
                <label className="text-xs font-bold text-gray-500 uppercase ml-1">Guests</label>
                <input
                  type="text"
                  placeholder="2 guests"
                  className="w-full p-4 bg-gray-100 border-none rounded-2xl outline-none text-black"
                />
              </div>

              <div className="md:col-span-2">
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-2xl transition duration-300 shadow-lg shadow-blue-300 transform hover:-translate-y-1 cursor-pointer">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
