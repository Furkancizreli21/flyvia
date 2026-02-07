"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { HiX } from "react-icons/hi";

const links = [
  { href: "/", label: "Home" },
  { href: "/destinations", label: "Holiday Destinations" },
  { href: "/rentacar", label: "Rent a Car" },
  { href: "/opportunities", label: "Opportunities" },
  { href: "/contact", label: "Contact" },
];

const Navbar = () => {
  const path = usePathname();
  const isHome = path === "/";
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <>
      <nav
        className={`sticky top-0 z-50 w-full px-6 py-4 backdrop-blur-md transition ${
          isHome ? "text-white bg-black/30" : "text-black bg-white/70 shadow-sm"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between">
          <button className="md:hidden" onClick={() => setIsOpen(true)} aria-label="Open menu">
            <RxHamburgerMenu size={28} />
          </button>

          <Link href="/" className="flex items-center">
            <Image src="/home/icon.png" alt="Logo" width={140} height={40} />
          </Link>

          <ul className="hidden md:flex gap-8 font-medium">
            {links.map((link) => {
              const isActive = path === link.href;
              return (
                <li key={link.href}>
                  <Link href={link.href} className={`relative transition hover:text-blue-500 ${isActive ? "text-blue-600" : ""}`}>
                    {link.label}
                    {isActive && <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-blue-600 rounded" />}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="hidden md:flex items-center gap-4">
            <Link href="/auth/login" className="hover:opacity-70">
              Login
            </Link>
            <Link
              href="/auth/register"
              className="rounded-full bg-blue-600 px-5 py-2 text-white font-semibold hover:bg-blue-700 transition"
            >
              Register
            </Link>
          </div>
        </div>
      </nav>

      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 z-40 bg-black/50 transition ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
      />

      <aside
        className={`fixed top-0 left-0 z-50 h-full w-72 bg-white transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b p-4">
          <span className="text-lg font-bold">Menu</span>
          <button onClick={() => setIsOpen(false)}>
            <HiX size={26} />
          </button>
        </div>

        <nav className="flex flex-col gap-4 p-6 font-medium">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`py-2 ${path === link.href ? "text-blue-600 font-semibold" : ""}`}
            >
              {link.label}
            </Link>
          ))}

          <div className="mt-6 flex flex-col gap-3">
            <Link href="/auth/login" className="rounded border py-2 text-center">
              Login
            </Link>
            <Link href="/auth/register" className="rounded bg-blue-600 py-2 text-center text-white">
              Register
            </Link>
          </div>
        </nav>
      </aside>
    </>
  );
};

export default Navbar;
