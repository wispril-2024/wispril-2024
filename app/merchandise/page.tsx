import Merchandise from "./merch";
import Title from "./title";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Merch {
  image: string;
  price: string;
  name: string;
}

const items: Merch[] = [
  { image: "/merchandise/totebag.png", price: "Rp45.000", name: "Totebag" },
  { image: "/merchandise/kaos.png", price: "Rp90.000", name: "Kaos" },
  { image: "/merchandise/totebag.png", price: "Rp45.000", name: "Totebag" },
  { image: "/merchandise/kaos.png", price: "Rp90.000", name: "Kaos" },
  { image: "/merchandise/totebag.png", price: "Rp45.000", name: "Totebag" },
  { image: "/merchandise/kaos.png", price: "Rp90.000", name: "Kaos" },
];

// Nanti tambahin lagi
export const metadata: Metadata = {
  title: "Merchandise",
  description: "Merchandise page",
};

function ItemsList() {
  return (
    <main className="min-h-screen">
      <div className="relative h-full">
        {/* Layer Gradient */}
        <div className="absolute z-10 h-full w-full bg-gradient-to-b from-[#631F20] via-[#B2000F] to-[#510007] opacity-45"></div>

        {/* Main Component */}
        <div className="z-10 flex flex-col items-center">
          {/* Merch Section */}
          <section className="h-full w-full">
            <div className="relative flex h-full w-full flex-col items-center overflow-hidden">
              {/* Gradient */}
              <div className="absolute z-0 h-full w-full bg-gradient-to-b from-[#510007] to-[#833519]"></div>

              {/* Background */}
              <Image
                src="/merchandise/Bg.png"
                alt="Background"
                width={720}
                height={1648}
                className="absolute -top-36 hidden w-full object-cover lg:block"
              />

              <Image
                src="/merchandise/BgMobile.png"
                alt="Background"
                width={360}
                height={2372}
                className="absolute -top-36 block w-full object-cover lg:hidden"
              />

              {/* Title Section */}
              <Title />

              {/* Merchandise Section */}
              <div className="z-10 flex flex-col items-center gap-24 pb-24">
                <ul className="z-10 grid grid-cols-1 gap-16 sm:grid-cols-2 sm:gap-32 xl:gap-x-64">
                  {items.map((item, index) => (
                    <li key={index}>
                      <Merchandise item={item} />
                    </li>
                  ))}
                </ul>

                <div className="z-10 pb-12 sm:pb-0">
                  <Link
                    href="https://docs.google.com/forms/your-form-id"
                    target="_blank"
                    className="z-10 rounded-xl border-[4px] border-[#B87D12] bg-[#FFDFA4] px-5 py-1.5 font-westmeath text-2xl text-[#B87D12] lg:rounded-2xl lg:text-3xl xl:rounded-2xl xl:px-10 xl:py-5 xl:text-4xl"
                  >
                    Order Now
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

export default ItemsList;
