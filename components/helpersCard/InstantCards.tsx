import Image from "next/image";
import Link from "next/link";

interface HotelCardProps {
  image: string;
  title: string;
  description: string;
  price: number;
  oldPrice: number;
  discountTag: string;
}

const InstantCards = ({ image, title, price, oldPrice, description, discountTag }: HotelCardProps) => {
  return (
    <Link href="#" className="flex flex-col gap-4 w-70 group">
      {/* Görsel Alanı */}
      <div className="relative w-full h-50 rounded-3xl overflow-hidden shadow-md">
        <Image src={image} alt={title} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute top-3 left-3 bg-white px-3 py-1 rounded-full shadow-md">
          <span className="text-[10px] font-black text-blue-600 uppercase tracking-wider">{discountTag}</span>
        </div>
      </div>

      {/* İçerik Alanı */}
      <div className="flex flex-col px-1">
        <h3 className="font-bold text-xl text-slate-900 leading-tight mb-1 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        <p className="text-slate-500 text-sm font-medium mb-3">{description}</p>

        <div className="flex items-baseline gap-3">
          <span className="text-blue-600 font-extrabold text-xl tracking-tighter">₺{price.toLocaleString("tr-TR")}</span>
          <span className="text-slate-400 line-through text-xs font-medium">₺{oldPrice.toLocaleString("tr-TR")}</span>
        </div>
      </div>
    </Link>
  );
};

export default InstantCards;
