"use client";
import { useState } from "react";
import PriceRange from "@/components/ui/PriceRange";
import { FaMoneyBills } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import Checkbox from "@mui/material/Checkbox";
import { FaCircleCheck } from "react-icons/fa6";
import { FaBuilding } from "react-icons/fa";
import HotelCard from "@/components/helpersCard/HotelCard";

type Hotel = {
  name: string;
  slug: string;
  image: string;
  images: string[];
  location: string;
  description: string;
  price: number;
  rating: number;
  reviewsCount: number;
};

type CityDetailClientProps = {
  selectedCity: {
    href: string;
    image: string;
    title: string;
    region: string;
    hotel: Hotel[];
  };
};

const CityDetailClient = ({ selectedCity }: CityDetailClientProps) => {
  const min = 300;
  const max = 20000;
  const label = { slotProps: { input: { "aria-label": "Checkbox demo" } } };
  const [range, setRange] = useState<number[]>([min, max]);
  const citySlug = selectedCity.href.split("/").pop()!;
  return (
    <section className="max-w-7xl mx-auto py-16 flex gap-10">
      <aside className="w-1/4 rounded-2xl bg-white p-6 shadow-lg sticky top-24 h-fit">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold">Filters</h3>
          <button onClick={() => setRange([min, max])} className="text-sm text-blue-500 hover:underline">
            Clear all
          </button>
        </div>

        <div>
          <div className="mb-4 flex items-center gap-2 font-medium text-gray-800">
            <FaMoneyBills className="text-blue-500" />
            <span>Price per night</span>
          </div>

          <PriceRange min={min} max={max} value={range} onChange={setRange} />

          <div className="mt-4 flex justify-between text-sm text-gray-500">
            <span>${range[0]}</span>
            <span>${range[1]}</span>
          </div>
        </div>
        <hr className="m-3 text-slate-300" />
        <div className="flex flex-col ">
          <div className="flex gap-2 items-center">
            <FaStar color="#C5C7BC" />
            <span>Star Rating</span>
          </div>
          <div className="flex gap-2 items-center">
            <Checkbox {...label} />
            <span>5</span>
            <img src="/star.png" />
          </div>
          <div className="flex gap-2 items-center">
            <Checkbox {...label} />
            <span>4</span>
            <img src="/star.png" />
          </div>
          <div className="flex gap-2 items-center">
            <Checkbox {...label} />
            <span>3</span>
            <img src="/star.png" />
          </div>
        </div>
        <hr className="m-3 text-slate-300" />
        <div>
          <div className="flex items-center gap-3">
            <FaCircleCheck />
            <span>Amenities</span>
          </div>
          <div>
            <div>
              <Checkbox {...label} />
              <span>Free Wifi</span>
            </div>
          </div>
          <div>
            <Checkbox {...label} />
            <span>Pool</span>
          </div>
          <div>
            <Checkbox {...label} />
            <span>Air Conditioning</span>
          </div>
          <div>
            <Checkbox {...label} />
            <span>Breakfast included</span>
          </div>
        </div>
        <hr className="m-3 text-slate-300" />
        <div>
          <div className="flex gap-2 items-center">
            <FaBuilding />
            <span>Property Type</span>
          </div>
          <div>
            <div>
              <Checkbox {...label} />
              <span>Hotels</span>
            </div>
            <div>
              <Checkbox {...label} />
              <span>Apartments</span>
            </div>
            <div>
              <Checkbox {...label} />
              <span>Hostels</span>
            </div>
          </div>
        </div>
      </aside>

      <div className="w-3/4 flex flex-col ">
        <div className="flex justify-between items-start mb-10">
          <div className="flex flex-col ">
            <h2 className="font-bold text-2xl">
              {selectedCity.region}: {selectedCity.hotel.length} properties found
            </h2>
            <p className="text-sm text-slate-400">Prices include taxes and frees</p>
          </div>
          <div>
            <span>Sort By:</span>{" "}
            <select className="bg-white text-sm p-2 outline-none">
              <option>Most popular</option>
              <option>Price: Low to high</option>
              <option>Price: High to low</option>
              <option>Top rated</option>
              <option>Newest</option>
            </select>
          </div>
        </div>

        {selectedCity.hotel
          .filter((hotel) => hotel.images && hotel.images.length > 0)
          .map((hotel) => {
            return <HotelCard key={hotel.slug} hotel={hotel} citySlug={citySlug} />;
          })}
      </div>
    </section>
  );
};

export default CityDetailClient;
