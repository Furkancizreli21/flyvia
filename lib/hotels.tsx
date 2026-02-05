import { destinations } from "@/data/dummy-data";

export type Hotel = {
  slug: string;
  name: string;
  imageUrl: string;
  imageCount: number;
  location: string;
  description: string;
  price: number;
  rating: number;
  reviewsCount: number;
};

export const hotelsIndex: Record<string, Hotel> = destinations.reduce(
  (acc, dest) => {
    dest.hotel.forEach((hotel) => {
      acc[hotel.slug] = hotel;
    });
    return acc;
  },
  {} as Record<string, Hotel>,
);
