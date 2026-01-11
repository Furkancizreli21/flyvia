import CityCard from "@/components/helpersCard/CityCard";
import { destinations } from "@/data/dummy-data";
import { IoFilterSharp } from "react-icons/io5";
import DestinationCard from "@/components/helpersCard/DestinationCard";
export default function Destinations() {
  const regions = [
    { name: "All Regions" },
    { name: "Europa" },
    { name: "Asia" },
    { name: "Americas" },
    { name: "Africa" },
    { name: "Oceania" },
  ];
  return (
    <div className="p-15">
      <div className="flex flex-col gap-5">
        <h1 className="font-bold text-2xl">Explore the World</h1>
        <p className="text-blue-500">
          Discover hand-picked destinations with over 50,000 unique stays and local experiences waiting for you.
        </p>
      </div>
      <div className="flex justify-between mt-10">
        <ul className="flex gap-5 mb-10">
          {regions.map((region, index) => {
            return (
              <button
                key={index}
                className="border border-gray-300 p-2 rounded-2xl bg-white cursor-pointer px-5 hover:text-white hover:bg-blue-400 transition duration-300 hover:scale-105"
              >
                {region.name}
              </button>
            );
          })}
        </ul>
        <div className="flex items-center gap-4">
          <button
            className="flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-5 py-2 text-sm font-medium text-gray-700
               transition-all duration-300
               hover:bg-blue-500 hover:text-white hover:border-blue-500 hover:scale-105"
          >
            <IoFilterSharp className="text-lg" />
            Filters
          </button>

          <button
            className="flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-5 py-2 text-sm font-medium text-gray-700
               transition-all duration-300
               hover:bg-blue-500 hover:text-white hover:border-blue-500 hover:scale-105"
          >
            Sort by: <span className="font-semibold">Popular</span>
          </button>
        </div>
      </div>
      <div>
        <div className="flex flex-wrap justify-center gap-5 ">
          {destinations.map((city) => {
            return (
              <DestinationCard key={city.href} href={city.href} image={city.image} title={city.title} region={city.region} />
            );
          })}
        </div>
      </div>
    </div>
  );
}
