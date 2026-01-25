import Image from "next/image";
import Link from "next/link";

interface CarCardProps {
  car: {
    title: string;
    image: string;
    detail: string;
    price: number;
  };
}

export default function CarCard({ car }: CarCardProps) {
  return (
    <div className="relative bg-white rounded-2xl shadow-md overflow-hidden max-w-sm group">
      <Link href={`/cars/${car.title}`} className="absolute inset-0 z-10" aria-label={`${car.title} details`} />

      {/* Image */}
      <div className="relative h-58 overflow-hidden group">
        <Image
          src={car.image}
          alt={car.title}
          fill
          className="object-cover  transition-transform duration-300 group-hover:scale-110"
        />

        <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full z-20">
          BEST VALUE
        </span>
      </div>

      {/* Content */}
      <div className="relative z-20 p-5 flex flex-col gap-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-bold text-lg">{car.title}</h3>
            <p className="text-sm text-gray-500">{car.detail}</p>
          </div>

          <div className="text-right">
            <p className="text-blue-600 font-bold text-xl">${car.price}</p>
            <span className="text-xs text-gray-400">PER DAY</span>
          </div>
        </div>

        {/* Button */}
        <Link
          href="/book"
          className="bg-blue-600 text-white text-center py-3 rounded-xl font-semibold hover:bg-blue-700 transition z-20"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
}
