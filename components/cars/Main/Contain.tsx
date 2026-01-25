import Image from "next/image";

const Contain = () => {
  return (
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
  );
};

export default Contain;
