import Image from "next/image";
import Link from "next/link";
import React from "react";

const HolidayDestinations = () => {
  return (
    <main className=" p-8">
      <h2 className="mb-6 text-2xl font-bold text-center mt-5">Popular Holiday Destinations</h2>
      <div className="flex justify-center gap-10">
        <Link href="/london" className="w-80 rounded-2xl overflow-hidden bg-white shadow-xl">
          <div className="relative h-48">
            <Image src="/destinations/london.jpeg" alt="Antalya" fill priority />
          </div>

          <div className="p-5">
            <h3 className="text-lg font-semibold text-gray-900">London</h3>

            <p className="mt-2 text-sm text-gray-600 leading-relaxed">
              A vibrant city where history, culture, and modern life come together.
            </p>
          </div>
        </Link>
        <Link href="/amsterdam" className="w-80 rounded-2xl overflow-hidden bg-white shadow-xl">
          <div className="relative h-48">
            <Image src="/destinations/amsterdam.jpg" alt="amsterdam" fill priority />
          </div>

          <div className="p-5">
            <h3 className="text-lg font-semibold text-gray-900">Amsterdam</h3>

            <p className="mt-2 text-sm text-gray-600 leading-relaxed">
              A charming city of canals, culture, and timeless European elegance.
            </p>
          </div>
        </Link>
        <Link href="/paris" className="w-80 rounded-2xl overflow-hidden bg-white shadow-xl">
          <div className="relative h-48">
            <Image src="/destinations/paris.webp" alt="paris" fill priority />
          </div>

          <div className="p-5">
            <h3 className="text-lg font-semibold text-gray-900">Paris</h3>

            <p className="mt-2 text-sm text-gray-600 leading-relaxed">
              The city of romance, art, and unforgettable cultural experiences.
            </p>
          </div>
        </Link>
        <Link href="/srilanka" className="w-80 rounded-2xl overflow-hidden bg-white shadow-xl">
          <div className="relative h-48">
            <Image src="/destinations/srilanka.jpg" alt="srilanka" fill priority />
          </div>

          <div className="p-5">
            <h3 className="text-lg font-semibold text-gray-900">Sri Lanka</h3>

            <p className="mt-2 text-sm text-gray-600 leading-relaxed">
              A tropical paradise of golden beaches, lush nature, and ancient traditions.
            </p>
          </div>
        </Link>
      </div>
    </main>
  );
};

export default HolidayDestinations;
