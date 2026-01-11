import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  return (
    <div>
      <nav className="bg-black top-0 w-full z-50 px-6 py-4">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image src="/home/icon.png" alt="icon" width={150} height={10} className="brightness-0 invert" />
          </Link>

          <ul className="hidden md:flex gap-8 text-white font-medium">
            <li className="hover:text-blue-400 transition cursor-pointer">
              <Link href="/destinations">Holiday Destinations</Link>
            </li>
            <li className="hover:text-blue-400 transition cursor-pointer">
              <Link href="/">Rent a car</Link>
            </li>
            <li className="hover:text-blue-400 transition cursor-pointer">
              <Link href="/">Opportunities</Link>
            </li>
            <li className="hover:text-blue-400 transition cursor-pointer">
              <Link href="/">Contact</Link>
            </li>
          </ul>

          <div className="flex gap-4 items-center">
            <button className="text-white font-semibold hover:opacity-80 cursor-pointer">Login</button>
            <button className="bg-white text-black px-5 py-2 rounded-full font-bold hover:bg-blue-600 hover:text-white transition cursor-pointer">
              Register
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
