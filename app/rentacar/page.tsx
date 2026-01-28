"use client";
import Contain from "@/components/cars/Main/Contain";
import Browse from "@/components/cars/Main/Browse";
import Cars from "@/components/cars/Main/Cars";
import WhyUs from "@/components/cars/Main/WhyUs";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [cities, setCities] = useState<string[]>([]);

  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch("https://countriesnow.space/api/v0.1/countries/population/cities");
        const json = await res.json();

        const cityNames = json.data.map((item: { city: string }) => item.city);

        setCities(cityNames);
      } catch (err) {
        console.error(err);
      }
    }

    getData();
  }, []);

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
