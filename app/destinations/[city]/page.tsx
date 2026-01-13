import CityDetailClient from "@/components/helpersCard/CityDetailClient";
import { destinations } from "@/data/dummy-data";

export default async function CityDetail({ params }: any) {
  const { city } = await params;
  const selectedCity = destinations.find((item) => item.href === `/destinations/${city}`);

  if (!selectedCity) {
    return <div className="p-10 text-xl">City not found</div>;
  }

  return <CityDetailClient selectedCity={selectedCity as any} />;
}
