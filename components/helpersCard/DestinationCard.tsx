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
    <Link href={href} className="group relative w-80 h-96 overflow-hidden rounded-3xl">
      <Image src={image} alt={title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />

      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

      <div className="absolute bottom-0 p-6 text-white">
        <p className="text-xs uppercase tracking-widest text-white/70">{region}</p>
        <h3 className="mt-1 text-2xl font-semibold leading-tight">{title}</h3>
      </div>
    </Link>
  );
};

export default CityCard;
