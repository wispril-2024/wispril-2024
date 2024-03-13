"use client";

import { MenuIcon } from "../icons/menu";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface NavbarProps {
  isNavbarExpanded: boolean;
  setIsNavbarExpanded: (expanded: boolean) => void;
}

// Paths
const paths = [
  {
    name: "Ta Fair",
    url: "/ta-fair",
  },
  {
    name: "Graduates",
    url: "/graduates",
  },
  {
    name: "About Us",
    url: "/about-us",
  },
  {
    name: "Merchandise",
    url: "/merchandise",
  },
];

function Navbar({ isNavbarExpanded, setIsNavbarExpanded }: NavbarProps) {
  return (
    <header className="sticky left-0 right-0 top-0 z-50 flex h-20 w-full flex-row items-center justify-between font-westmeath text-[#ECC786] lg:h-24 lg:px-12">
      {/* Bg Image */}
      <Image
        src="/navbar/bg-navbar.png"
        alt="background"
        layout="fill"
        sizes="100vw"
        className="absolute inset-0 -z-10 object-cover"
      />

      {/* Logo */}
      <Link className="ml-5 flex flex-row items-center gap-3 lg:ml-0" href="/">
        <Image
          src="/logo/wispril.png"
          alt="logo"
          width={80}
          height={80}
          className="size-11 object-contain lg:size-14"
        />
        <span className="text-2xl lg:text-3xl">Wispril 2024</span>
      </Link>

      {/* Mobile Menu Button */}
      <button
        className="flex aspect-square h-full items-center justify-center bg-[#A01B14] lg:hidden"
        onClick={() => setIsNavbarExpanded(!isNavbarExpanded)}
      >
        <MenuIcon />
      </button>

      {/* Side Bar */}
      <div
        className={`fixed right-0 top-0 z-10 flex h-full w-[272px] flex-col items-center justify-between gap-6 duration-300 ease-in-out lg:static lg:flex lg:h-auto lg:w-auto lg:translate-x-0 lg:flex-row lg:items-center lg:gap-16 lg:bg-none ${
          isNavbarExpanded ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="relative h-full w-full">
          {/* Sidebar bg */}
          <Image
            src="/navbar/bg-sidebar.png"
            alt="Sidebar Background"
            layout="fill"
            className="z-0 object-cover lg:hidden"
            sizes="270px"
          />

          {/* Close Menu */}
          <button
            className="absolute right-5 top-5 flex aspect-square h-12 items-center justify-center lg:hidden"
            onClick={() => setIsNavbarExpanded(!isNavbarExpanded)}
          >
            <X className="stroke size-full stroke-[#F4D38E]" />
          </button>

          {/* Menus */}
          <nav className="mt-32 flex flex-col items-center gap-10 lg:mt-0 lg:flex-row lg:gap-12">
            <ul className="z-20 flex flex-col items-center gap-10 text-2xl lg:flex lg:flex-row lg:items-center lg:gap-12">
              {paths.map((path) => {
                return (
                  <li key={path.name} className="hover:opacity-70">
                    <Link href={path.url}>{path.name}</Link>
                  </li>
                );
              })}
            </ul>

            {/* Login Button */}
            <button className="z-20 flex h-12 items-center justify-center bg-[#A01B14] px-8 py-3 text-2xl hover:opacity-60">
              Login
            </button>
          </nav>

          {/* Logo */}
          <Image
            src={"/logo/wispril.png"}
            alt="Logo Wispril ITB 2024"
            width={203}
            height={203}
            className="absolute bottom-32 right-1/2 z-20 h-52 w-52 translate-x-1/2 object-contain lg:hidden"
          />

          {/* Theater Decoration */}
          <Image
            src={"/navbar/theater.png"}
            alt="Theater Decoration"
            width={272}
            height={461}
            className="absolute bottom-0 h-auto w-full object-contain lg:hidden"
          />
        </div>
      </div>

      {/* Blur background */}
      {isNavbarExpanded && (
        <div
          className="fixed inset-0 z-0 h-full w-full bg-opacity-80 backdrop-blur-sm lg:hidden"
          onClick={() => setIsNavbarExpanded(false)}
        />
      )}
    </header>
  );
}

export default Navbar;
