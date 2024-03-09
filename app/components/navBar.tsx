"use client"
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

function Navbar() {

    const [navBarExpanded,setNavBarExpanded] = useState(false);
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
    <nav className="sticky flex h-16 lg:h-24 w-screen flex-row items-center justify-between bg-[url('/navbarAssets/navbarbg.png')] bg-cover text-4xl text-gold lg:px-16 font-westmeath">
      <div className="flex flex-row items-center gap-3">
        <div className="relative w-11 h-11 ml-4 lg:w-20 lg:h-20">
          <Image
            src="/navbarAssets/logo.png"
            alt="logo"
            width={80}
            height={80}
            className="object-contain"
          />
        </div>
        <div className="text-2xl lg:text-3xl md:font-normal">Wispril 2024</div>
      </div>
      <button
        className="absolute w-fit h-full lg:hidden px-4 py-2 bg-red right-0"
        onClick={() => setNavBarExpanded(!navBarExpanded)}
      >
        <Image src={"/navbarAssets/menu_icon.svg"} alt="menu-logo" width={47} height={50}></Image>
      </button>

      <div className={`fixed right-0 top-0 flex  z-10 h-full w-[272px] flex-col justify-between items-center gap-6 bg-cover bg-[url('/navbarAssets/bg-side.png')] lg:static lg:flex lg:flex-row lg:gap-16 lg:h-auto lg:w-auto lg:translate-x-0 lg:bg-none lg:items-center ${
          navBarExpanded ? "translate-x-0" : "translate-x-full"
        }`}>
        <button
          className="absolute w-fit h-11 lg:hidden px-4 py-4 right-0"
          onClick={() => setNavBarExpanded(!navBarExpanded)}
        >
          <Image src={"/navbarAssets/close-menu.svg"} alt="menu-logo" width={41} height={41}></Image>
        </button>
        <ul className="flex flex-col z-20 gap-10 mt-36 items-center  text-2xl lg:flex lg:flex-row lg:items-center lg:gap-16 lg:text-2xl lg:mt-0">
          {paths.map((path) => {
            return (
              <li key={path.name} className="hover:opacity-70">
                <Link href={path.url}>{path.name}</Link>
              </li>
            );
          })}
        </ul>
        <button className="hidden md:block md:bg-[#A01B14] md:px-6 md:py-3 text-2xl hover:opacity-60">
          Login
          
        </button>

        {navBarExpanded && (
        <div
          className="w-52 h-52 mb-24 z-10"
        >
          <Image src={"/navbarAssets/logo3.png"} alt="teater" width={203} height={203} className="object-contain"></Image>
        </div>
        )}

        {navBarExpanded && (
          <div
            className="w-[272px] absolute bottom-0 h-[461px] z-0 lg:hidden"
          >
            <Image src={"/navbarAssets/teater1.png"} alt="teater" width={272} height={461} className="object-contain"></Image>
          </div>
        )}
      </div>

      {navBarExpanded && (
        <div
          className="fixed backdrop-blur-sm inset-0 z-0 h-full w-full bg-opacity-80 lg:hidden"
        />
      )}
    </nav>
  );
}

export default Navbar;