import Link from "next/link";
import { destinations } from "@/data/dummy-data";
import CityCard from "../helpersCard/CityCard";

const HolidayDestinations = () => {
  return (
    <main className="flex flex-col p-8 max-w-7xl justify-center  mx-auto">
      <div className="flex justify-between items-center">
        <span></span>
        <h2 className="mb-6 text-2xl font-bold text-center mt-5 inline">Popular Holiday Destinations</h2>
        <button className="text-blue-600 font-bold hover:underline underline-offset-8 decoration-2 transition-all whitespace-nowrap pb-1 cursor-pointer">
          View All
        </button>
      </div>

      <div className="flex justify-center gap-10">
        {destinations.map((city) => {
          return (
            <CityCard key={city.href} href={city.href} title={city.title} description={city.description} image={city.image} />
          );
        })}
      </div>
    </main>
  );
};

export default HolidayDestinations;
