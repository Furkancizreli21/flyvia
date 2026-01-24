import Image from "next/image";
import Link from "next/link";
import { S3_BASE_URL } from "@/lib/constants";
interface CityCardProps {
  href: string;
  title: string;
  description: string;
  imageKey: string;
}

const CityCard = ({ href, title, description, imageKey }: CityCardProps) => {
  return (
    <Link
      href={href}
      className="group relative flex flex-col h-full overflow-hidden rounded-4xl bg-white border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-2xl hover:shadow-blue-900/10 hover:-translate-y-1"
    >
      <div className="relative aspect-4/3 w-full overflow-hidden">
        <Image
          src={`${S3_BASE_URL}/${imageKey}`}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
          <span className="text-yellow-500 text-xs">★</span>
          <span className="text-xs font-bold text-gray-800">4.9</span>
        </div>
      </div>

      <div className="flex flex-col flex-1 p-6">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{title}</h3>
          {/* Dekoratif bir ok ikonu */}
          <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </div>
        </div>

        <p className="text-sm text-gray-500 leading-relaxed line-clamp-2 mb-4">{description}</p>

        {/* Alt kısım - "Keşfet" hissi veren link görünümü */}
        <div className="mt-auto pt-4 border-t border-gray-100 flex items-center text-sm font-medium text-blue-600">
          <span>Explore Details</span>
        </div>
      </div>
    </Link>
  );
};

export default CityCard;
