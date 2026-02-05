import HotelGallery from "@/components/helpersCard/HotelGallery";
import PriceCard from "@/components/helpersCard/PriceCard";
import Tabs from "@/components/helpersCard/Tabs";
import { destinations } from "@/data/dummy-data";
import { CiShare2, CiHeart } from "react-icons/ci";
import { notFound } from "next/navigation";

type PageProps = {
  params: {
    hotel: string;
  };
};

export default async function HotelDetails({ params }: PageProps) {
  const { hotel } = await params;

  const data = destinations.flatMap((d) => d.hotel).find((h) => h.slug === hotel);

  if (!data) notFound();

  return (
    <div className="p-10 max-w-7xl mx-auto bg-white">
      <div className="mb-6 flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold mb-2">{data.name}</h1>
          <span className="text-gray-500">{data.location}</span>
        </div>

        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded">
            <CiShare2 /> Share
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded">
            <CiHeart /> Save
          </button>
        </div>
      </div>

      <HotelGallery images={data.images} />

      <div className="flex gap-10 mt-10">
        <Tabs />
        <PriceCard price={data.price} />
      </div>
    </div>
  );
}
