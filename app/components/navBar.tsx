"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function Navbar() {
  const [navBarExpanded, setNavBarExpanded] = useState(false);
  const paths = [
    {
      name: "Ta Fair",
      url: "/",
    },
    {
      name: "Graduates",
      url: "/",
    },
    {
      name: "About Us",
      url: "/",
    },
    {
      name: "Merch",
      url: "/",
    },
  ];

  return (
    <nav className="sticky flex h-16 w-screen flex-row items-center justify-between bg-[url('/navbarAssets/navbarbg.png')] bg-cover font-westmeath text-4xl text-gold lg:h-24 lg:px-16">
      <div className="flex flex-row items-center gap-3">
        <div className="relative ml-4 h-11 w-11 lg:h-20 lg:w-20">
          <Image
            src="/navbarAssets/logo.png"
            alt="logo"
            width={80}
            height={80}
            className="object-contain"
          />
        </div>
        <div className="text-2xl md:font-normal lg:text-3xl">Wispril 2024</div>
      </div>
      <button
        className="absolute right-0 h-full w-fit bg-red px-4 py-2 lg:hidden"
        onClick={() => setNavBarExpanded(!navBarExpanded)}
      >
        <Image
          src={"/navbarAssets/menu_icon.svg"}
          alt="menu-logo"
          width={47}
          height={50}
        ></Image>
      </button>

      <div
        className={`fixed right-0 top-0 z-10  flex h-full w-[272px] flex-col items-center justify-between gap-6 bg-[url('/navbarAssets/bg-side.png')] bg-cover lg:static lg:flex lg:h-auto lg:w-auto lg:translate-x-0 lg:flex-row lg:items-center lg:gap-16 lg:bg-none ${
          navBarExpanded ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="absolute right-0 h-11 w-fit px-4 py-4 lg:hidden"
          onClick={() => setNavBarExpanded(!navBarExpanded)}
        >
          <Image
            src={"/navbarAssets/close-menu.svg"}
            alt="menu-logo"
            width={41}
            height={41}
          ></Image>
        </button>
        <ul className="z-20 mt-36 flex flex-col items-center gap-10  text-2xl lg:mt-0 lg:flex lg:flex-row lg:items-center lg:gap-16 lg:text-2xl">
          {paths.map((path) => {
            return (
              <li key={path.name} className="hover:opacity-70">
                <Link href={path.url}>{path.name}</Link>
              </li>
            );
          })}
        </ul>
        <button className="hidden text-2xl hover:opacity-60 md:block md:bg-[#A01B14] md:px-6 md:py-3">
          Login
        </button>

        {navBarExpanded && (
          <div className="z-10 mb-24 h-52 w-52">
            <Image
              src={"/navbarAssets/logo3.png"}
              alt="teater"
              width={203}
              height={203}
              className="object-contain"
            ></Image>
          </div>
        )}

        {navBarExpanded && (
          <div className="absolute bottom-0 z-0 h-[461px] w-[272px] lg:hidden">
            <Image
              src={"/navbarAssets/teater1.png"}
              alt="teater"
              width={272}
              height={461}
              className="object-contain"
            ></Image>
          </div>
        )}
      </div>

      {navBarExpanded && (
        <div className="fixed inset-0 z-0 h-full w-full bg-opacity-80 backdrop-blur-sm lg:hidden" />
      )}
    </nav>
  );
}

export default Navbar;
