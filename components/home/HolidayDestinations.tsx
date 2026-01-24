import { HomeDestinations } from "@/data/home-dummy-data";
import CityCard from "../helpersCard/CityCard";

const HolidayDestinations = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div className="max-w-2xl">
            <span className="text-blue-600 font-semibold tracking-wider text-sm uppercase mb-2 block">Discover the World</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">Popular Holiday Destinations</h2>
            <p className="mt-4 text-gray-500 text-lg">Explore our curated list of top destinations for your next adventure.</p>
          </div>

          <button className="group flex items-center gap-2 text-gray-900 font-semibold hover:text-blue-600 transition-colors py-2">
            View All Destinations
            <span className="block transition-transform group-hover:translate-x-1">→</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {HomeDestinations.map((city) => (
            <CityCard
              key={city.href}
              href={city.href}
              title={city.title}
              description={city.description}
              imageKey={city.imageKey}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HolidayDestinations;
