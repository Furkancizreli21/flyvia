import { S3_BASE_URL } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";

interface CityCardProps {
  href: string;
  title: string;
  image: string;
  region: string;
}

const CityCard = ({ href, title, image, region }: CityCardProps) => {
  return (
    <Link href={href} className="group relative h-105 w-[320px] overflow-hidden rounded-2xl bg-black">
      {/* Background Image */}
      <Image
        src={`${S3_BASE_URL}/${image}`}
        alt={title}
        fill
        className="object-cover transition-all duration-700 group-hover:scale-[1.03] group-hover:blur-[1px]"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 transition-opacity duration-500 group-hover:bg-black/60" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-between p-6">
        {/* Region Badge */}
        <span className="w-fit rounded-full bg-white/90 px-4 py-1 text-xs font-medium tracking-wide text-black">{region}</span>

        {/* Title */}
        <div className="translate-y-6 transition-all duration-500 group-hover:translate-y-0">
          <h3 className="text-3xl font-semibold leading-tight text-white">{title}</h3>
          <p className="mt-2 text-sm text-white/70 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            Discover unforgettable experiences
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CityCard;
