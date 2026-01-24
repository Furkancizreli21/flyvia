import Image from "next/image";
import Link from "next/link";

export default function CarCard() {
  return (
    <Link href={""} className="group relative flex flex-col">
      <div className="relative aspect-4/3 w-full overflow-hidden">
        <Image src="/cars/home/bmw.avif" alt="bmw" fill />
        <div className="absolute top-4 left-4 rounded-2xl p-2 px-5 bg-white">
          <span className=" text-yellow-400 text-xs">Best Price</span>
        </div>
      </div>
    </Link>
  );
}
