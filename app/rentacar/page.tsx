import Contain from "@/components/cars/Main/Contain";
import Browse from "@/components/cars/Main/Browse";
import Cars from "@/components/cars/Main/Cars";
import WhyUs from "@/components/cars/Main/WhyUs";
import { getCities } from "@/lib/getCities";
import { notFound } from "next/navigation";

export default async function RentacarPage() {
  let cities: string[];

  try {
    cities = await getCities();
  } catch (error) {
    notFound();
  }

  return (
    <div className="p-10">
      <section className="relative w-full h-130">
        <Contain cities={cities} />
      </section>
      <Browse />
      <Cars />
      <WhyUs />
    </div>
  );
}
