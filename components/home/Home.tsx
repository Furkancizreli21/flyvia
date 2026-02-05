import { S3_BASE_URL } from "@/lib/constants";
import { getCities } from "@/lib/getCities";
import HomeSearch from "./HomeSearch";
import Image from "next/image";

export default async function Home() {
  const cities = await getCities();

  return (
    <section className="h-screen w-full flex flex-col overflow-hidden font-sans">
      <Image src={`${S3_BASE_URL}/home/homes.png`} alt="Background" fill priority className="object-cover -z-20" />
      <div className="absolute inset-0 bg-black/30 -z-10" />

      <HomeSearch cities={cities} />
    </section>
  );
}
