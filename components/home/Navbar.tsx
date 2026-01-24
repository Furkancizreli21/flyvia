"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { HiX } from "react-icons/hi";

const Navbar = () => {
  const path = usePathname();
  const isHome = path === "/";

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className={`top-0 w-full z-50 px-6 py-4 ${isHome ? "text-white" : "text-black"}`}>
        <div className="container mx-auto flex items-center justify-between">
          <button className="md:hidden" onClick={() => setIsOpen(true)}>
            <RxHamburgerMenu fontSize={30} />
          </button>

          <Link href="/" className="flex items-center">
            <Image src="/home/icon.png" alt="icon" width={150} height={10} />
          </Link>

          <ul className="hidden md:flex gap-8 font-medium">
            <li className="hover:text-blue-400 transition">
              <Link href="/destinations">Holiday Destinations</Link>
            </li>
            <li className="hover:text-blue-400 transition">
              <Link href="/rentacar">Rent a car</Link>
            </li>
            <li className="hover:text-blue-400 transition">
              <Link href="/">Opportunities</Link>
            </li>
            <li className="hover:text-blue-400 transition">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>

          <div className="hidden md:flex gap-4 items-center">
            <button className="font-semibold hover:opacity-80">Login</button>
            <button className="bg-white text-black px-5 py-2 rounded-full font-bold hover:bg-blue-600 hover:text-white transition">
              Register
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-50 bg-black/50 transition-opacity ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={() => setIsOpen(false)}
      />

      <div
        className={`fixed top-0 left-0 h-full w-72 bg-white z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <span className="font-bold text-lg">Menu</span>
          <button onClick={() => setIsOpen(false)}>
            <HiX size={28} />
          </button>
        </div>

        <nav className="flex flex-col gap-4 p-6 font-medium">
          <Link href="/destinations" onClick={() => setIsOpen(false)}>
            Holiday Destinations
          </Link>
          <Link href="/" onClick={() => setIsOpen(false)}>
            Rent a car
          </Link>
          <Link href="/" onClick={() => setIsOpen(false)}>
            Opportunities
          </Link>
          <Link href="/contact" onClick={() => setIsOpen(false)}>
            Contact
          </Link>

          <div className="mt-6 flex flex-col gap-3">
            <button className="border py-2 rounded">Login</button>
            <button className="bg-blue-600 text-white py-2 rounded">Register</button>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
