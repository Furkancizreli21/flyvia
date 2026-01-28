import OpportunitiesCard from "@/components/opportunities/OpportunitiesCard";
import { opportunitiesData } from "@/data/opportunities";
import Image from "next/image";
import Link from "next/link";

export default function OpportunityHero() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4">
        <section className="relative h-105 md:h-120 rounded-3xl overflow-hidden">
          <Image src="/opportunities/home.png" alt="Amalfi Coast" fill priority className="object-cover" />
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-2xl px-8 md:px-12 text-white space-y-6">
              <span className="inline-block bg-blue-600 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide">
                DEAL OF THE MONTH
              </span>

              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                The Amalfi Coast Secret:
                <br />
                <span className="text-white">Hidden Villa Positano</span>
              </h1>

              <p className="text-white/85 text-sm md:text-base leading-relaxed">
                Discover a private sanctuary tucked into the limestone cliffs. This curated 7-day experience features private
                sunrise yacht tours, Michelin-starred dining on your terrace, and exclusive access to the "Path of the Gods"
                private trails.
              </p>

              <div className="flex items-center gap-6 pt-2">
                <button className="bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-xl text-sm font-semibold">
                  Book Exclusive Experience
                </button>

                <div>
                  <p className="text-white/60 text-xs uppercase tracking-wider">Starting from</p>
                  <p className="text-2xl font-bold">
                    $4,250 <span className="text-sm font-medium text-white/70">/pp</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div>
        <hr className="max-w-6xl mx-auto mt-20 text-slate-400" />
        <section className="bg-gray-50 py-28">
          <div className="max-w-8xl mx-auto px-6 lg:px-12">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <span className="inline-block mb-4 text-sm font-semibold tracking-widest text-blue-600 uppercase">
                Handpicked Locations
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">Where Will You Go Next?</h2>
              <p className="mt-6 text-lg text-gray-500">Carefully selected destinations loved by travelers around the world.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {opportunitiesData.map((city) => (
                <OpportunitiesCard
                  key={city.title}
                  image={city.image}
                  title={city.title}
                  description={city.description}
                  price={city.price}
                  notification={city.notification}
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
      </div>
    </>
  );
}
