import Image from "next/image";
import Link from "next/link";

interface CityCardProps {
  href: string;
  title: string;
  description: string;
  image: string;
}

const CityCard = ({ href, title, description, image }: CityCardProps) => {
  return (
    <Link
      href={href}
      className="w-80 rounded-2xl overflow-hidden bg-white shadow-xl hover:-translate-y-2 transition duration-300 ease-in"
    >
      <div className="relative h-48">
        <Image src={image} alt={title} fill />
      </div>

      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>

        <p className="mt-2 text-sm text-gray-600 leading-relaxed">{description}</p>
      </div>
    </Link>
  );
};

export default CityCard;
