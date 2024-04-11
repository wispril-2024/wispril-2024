import Merchandise from "./merch";
import Title from "./title";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Merch {
  image: string;
  price: string;
  name: string;
}

const items: Merch[] = [
  { image: "/merchandise/Merch.png", price: "$10", name: "Merch 1" },
  { image: "/merchandise/Merch.png", price: "$20", name: "Merch 2" },
  { image: "/merchandise/Merch.png", price: "$20", name: "Merch 3" },
  { image: "/merchandise/Merch.png", price: "$20", name: "Merch 4" },
  { image: "/merchandise/Merch.png", price: "$20", name: "Merch 5" },
  { image: "/merchandise/Merch.png", price: "$20", name: "Merch 6" },
];

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
                width={1920}
                height={1080}
                className="absolute -top-32 hidden w-full object-cover lg:block"
              />

              <Image
                src="/merchandise/BgMobile.png"
                alt="Background"
                width={1920}
                height={1080}
                className="absolute -top-20 block w-full object-cover sm:-top-4 md:-top-24 lg:hidden"
              />

              {/* Title Section */}
              <Title />

              {/* Merchandise Section */}
              <div className="z-10 flex flex-col items-center gap-16 p-8 sm:p-32 xl:gap-0">
                <div className="z-10 grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:gap-32 xl:gap-x-64 xl:p-48">
                  {items.map((item, index) => (
                    <Merchandise key={index} item={item} />
                  ))}
                </div>

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
