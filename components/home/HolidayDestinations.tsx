import { HomeDestinations } from "@/data/home-dummy-data";
import CityCard from "../helpersCard/CityCard";
import Link from "next/link";

const HolidayDestinations = () => {
  return (
    <section className="bg-gray-50 py-28">
      <div className="max-w-8xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block mb-4 text-sm font-semibold tracking-widest text-blue-600 uppercase">
            Handpicked Locations
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">Where Will You Go Next?</h2>
          <p className="mt-6 text-lg text-gray-500">Carefully selected destinations loved by travelers around the world.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
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

        <div className="mt-20 flex justify-center">
          <Link
            href="/destinations"
            className="group cursor-pointer flex items-center gap-3 rounded-full border border-gray-300 px-8 py-4 text-sm font-semibold text-gray-900 hover:bg-gray-900 hover:text-white transition-all"
          >
            View all destinations
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HolidayDestinations;
