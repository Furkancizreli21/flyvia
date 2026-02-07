import { hotelsData } from "@/data/instantdeals-dummy-data";
import InstantCards from "@/components/helpersCard/InstantCards";
import CountdownTimer from "../ui/CountdownTimer";

const InstantDeals = () => {
  const filteredHotels = hotelsData;

  return (
    <section className="container mx-auto py-16 px-6 max-w-7xl">
      <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
        <div className="flex flex-col gap-2">
          <h2 className="text-4xl font-black text-slate-900 tracking-tighter italic">Instant Deals</h2>
          <div className="flex flex-wrap items-center gap-4">
            <p className="text-slate-500 text-lg font-medium">Don't miss out on limited-time premium offers.</p>
            <CountdownTimer initialTime={15735} />
          </div>
        </div>

        <button className="text-blue-600 font-bold hover:underline underline-offset-8 decoration-2 transition-all whitespace-nowrap pb-1 cursor-pointer">
          See All
        </button>
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
