"use client";
import Image from "next/image";
import { Rating } from "@mui/material";
import { FaLocationDot, FaHeart } from "react-icons/fa6";
import Link from "next/link";

type Props = {
  citySlug: string;
  hotel: {
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
};

export default function HotelCard({ hotel, citySlug }: Props) {
  const coverImage = hotel.images[0];

  return (
    <Link
      href={`/destinations/${citySlug}/${hotel.slug}`}
      className="flex w-full bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition cursor-pointer mb-7"
    >
      <div className="relative w-75 h-full shrink-0">
        <Image src={coverImage} alt="Hotel" fill className="object-cover" />

        <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
          {hotel.rating > 9 ? <span>Top rating</span> : <span>Best Seller</span>}
        </span>

        <button className="absolute top-3 right-3 bg-white/80 p-2 rounded-full hover:bg-white">
          <FaHeart className="text-gray-600" />
        </button>
      </div>

      <div className="flex flex-1 p-6 justify-between">
        <div className="flex flex-col gap-2 max-w-[65%]">
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-semibold">{hotel.name}</h3>
            <Rating value={5} readOnly size="small" />
          </div>

          <div className="flex items-center gap-1 text-sm text-gray-500">
            <FaLocationDot />
            <span>{hotel.location}</span>
          </div>

          <p className="text-sm text-gray-600 line-clamp-2">{hotel.description}</p>

          <div className="flex gap-2 mt-2">
            <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full">Free Cancellation</span>
            <span className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full">Breakfast included</span>
          </div>
          <div>
            <p className="text-sm text-gray-500">Per night</p>
            <p className="text-2xl font-bold text-blue-600">${hotel.price}</p>
          </div>
        </div>

        <div className="flex flex-col items-end justify-between">
          <div className="flex items-center gap-3">
            <div className="text-right">
              <p className="font-semibold">Excellent</p>
              <p className="text-sm text-gray-400">{hotel.reviewsCount} reviews</p>
            </div>
            <span className="bg-blue-600 text-white font-semibold px-3 py-2 rounded-xl">{hotel.rating}</span>
          </div>

          <div className="text-right">
            <button className="mt-3 bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition cursor-pointer">
              View Details →
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
