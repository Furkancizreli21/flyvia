"use client";
import { useEffect, useState } from "react";
import { hotelsData } from "@/data/instantdeals-dummy-data";
import InstantCards from "@/components/helpersCard/InstantCards";

const InstantDeals = () => {
  const [filteredHotels] = useState(hotelsData);
  const [timeLeft, setTimeLeft] = useState(15735);
  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;

    return `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };
  if (timeLeft <= 0) {
    return;
  }
  useEffect(() => {
    setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
  }, []);

  return (
    <section className="container mx-auto py-16 px-6 max-w-7xl">
      <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
        <div className="flex flex-col gap-2">
          <h2 className="text-4xl font-black text-slate-900 tracking-tighter italic">Instant Deals</h2>
          <div className="flex flex-wrap items-center gap-4">
            <p className="text-slate-500 text-lg font-medium">Don't miss out on limited-time premium offers.</p>
            <div className="flex items-center bg-red-50 text-red-600 px-4 py-1.5 rounded-full border border-red-100 shadow-sm">
              <span className="text-sm font-bold tracking-widest animate-pulse">{formatTime(timeLeft)}</span>
            </div>
          </div>
        </div>

        <button className="text-blue-600 font-bold hover:underline underline-offset-8 decoration-2 transition-all whitespace-nowrap pb-1 cursor-pointer"></button>
      </div>

      <div className="flex flex-wrap gap-x-8 gap-y-12 justify-center md:justify-start">
        {filteredHotels.map((hotel) => (
          <InstantCards key={hotel.id} {...hotel} />
        ))}
      </div>
    </section>
  );
};

export default InstantDeals;
