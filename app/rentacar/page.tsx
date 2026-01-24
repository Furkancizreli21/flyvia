import CarCard from "@/components/cars/CarCard";
import Image from "next/image";
import Link from "next/link";
import { FaCarOn, FaCarRear } from "react-icons/fa6";
import { IoDiamondOutline } from "react-icons/io5";
import { MdOutlineElectricCar } from "react-icons/md";

const HeroSection = () => {
  return (
    <div className="p-10">
      <section className="relative w-full h-130">
        {/* container */}
        <div className="relative mx-auto h-full max-w-8xl ">
          <div className="relative h-full rounded-3xl ">
            <Image src="/cars/home/main.png" alt="Car" fill className="object-cover" priority />

            <div className="absolute inset-0 bg-black/40" />

            {/* Text */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Find the perfect car for <br /> your next journey
              </h1>
              <p className="text-sm md:text-base text-white/80 max-w-2xl">
                Compare deals from the biggest rental brands worldwide with flexible cancellations.
              </p>
            </div>

            {/* Search Box */}
            <div className="absolute left-1/2 -bottom-10 -translate-x-1/2 w-[90%] max-w-5xl bg-white rounded-2xl shadow-xl p-5 z-20">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <input className="bg-gray-100 p-3 rounded-xl outline-none" placeholder="City or airport" />
                <input type="date" className="bg-gray-100 p-3 rounded-xl outline-none" />
                <input type="date" className="bg-gray-100 p-3 rounded-xl outline-none" />
                <button className="bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition">Search</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Browse by car type */}
      <div className="mt-20 ">
        <h2 className="font-bold text-2xl mb-5">Browse by car type</h2>
        <div className="grid grid-cols-4 gap-10">
          <div className="flex flex-col gap-2 bg-white p-7 rounded-xl items-center">
            <FaCarOn color="blue" size={25} />
            <h6 className="font-bold">Economy</h6>
            <p className="text-slate-500">From $30/day</p>
          </div>
          <div className="flex flex-col gap-2 bg-white p-7 rounded-xl items-center">
            <FaCarRear color="blue" size={25} />

            <h6 className="font-bold">SUV</h6>
            <p className="text-slate-500">From $55/day</p>
          </div>
          <div className="flex flex-col gap-2 bg-white p-7 rounded-xl items-center ">
            <IoDiamondOutline color="blue" size={25} />

            <h6 className="font-bold">Luxury</h6>
            <p className="text-slate-500">From $120/day</p>
          </div>
          <div className="flex flex-col gap-2 bg-white p-7 rounded-xl items-center">
            <MdOutlineElectricCar color="blue" size={25} />

            <h6 className="font-bold">Electric</h6>
            <p className="text-slate-500">From $75/day</p>
          </div>
        </div>
      </div>
      <div>
        <div className="flex  justify-between mt-20 ">
          <h2 className="font-bold text-2xl ">Featured Deals</h2>
          <button className="group flex items-center gap-2 text-gray-900 font-semibold hover:text-blue-600 transition-colors py-2 cursor-pointer">
            View All
            <span className="block transition-transform group-hover:translate-x-1">→</span>
          </button>
        </div>
        <div>
          <CarCard />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
