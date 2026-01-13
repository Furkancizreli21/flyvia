import HotelGallery from "@/components/helpersCard/HotelGallery";
import PriceCard from "@/components/helpersCard/PriceCard";
import Tabs from "@/components/helpersCard/Tabs";
import { destinations } from "@/data/dummy-data";
import { CiShare2, CiHeart } from "react-icons/ci";

export default async function HotelDetails({ params }: any) {
  const { hotel } = await params;
  const data = destinations.flatMap((d) => d.hotel).find((h) => h.slug == hotel);
  const rawImages = data?.images || [];
  const validImages = rawImages.filter((img): img is string => typeof img === "string");

  return (
    <div className="p-10 max-w-7xl mx-auto bg-white ">
      <div className="mb-6 flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold mb-2">{data?.name}</h1>
          <span className="text-gray-500">{data?.location}</span>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded hover:bg-gray-200">
            <CiShare2 /> Paylaş
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            <CiHeart /> Kaydet
          </button>
        </div>
      </div>
      <HotelGallery images={validImages} />
      <div className="flex gap-10 mt-10">
        <Tabs />
        <PriceCard />
      </div>
    </div>
  );
}
